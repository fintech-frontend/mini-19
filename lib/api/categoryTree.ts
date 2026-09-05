import type { ApiCategory } from "@/types/api";

/**
 * Категория API + собранные дети по полю `parent`. `parent` сейчас у всех строк на
 * backend равен `null` (тестовые данные), но поле поддерживает вложенность — вся
 * логика здесь построена по `parent` генерически, а не в предположении плоского списка.
 */
export interface CategoryTreeNode extends ApiCategory {
  children: CategoryTreeNode[];
}

function bySortThenName(a: CategoryTreeNode, b: CategoryTreeNode): number {
  return a.sort - b.sort || a.name.localeCompare(b.name, "ru");
}

/** Строит дерево (корни — категории без родителя, либо с "битым" parent id) из плоского списка. */
export function buildCategoryTree(categories: ApiCategory[]): CategoryTreeNode[] {
  const nodes = new Map<number, CategoryTreeNode>();
  for (const category of categories) nodes.set(category.id, { ...category, children: [] });

  const roots: CategoryTreeNode[] = [];
  for (const category of categories) {
    const node = nodes.get(category.id);
    if (!node) continue;
    const parent = category.parent != null ? nodes.get(category.parent) : undefined;
    if (parent) parent.children.push(node);
    else roots.push(node);
  }

  const sortTree = (list: CategoryTreeNode[]) => {
    list.sort(bySortThenName);
    for (const node of list) sortTree(node.children);
  };
  sortTree(roots);

  return roots;
}

/** Id категории и всех её потомков любой глубины — для "товары раздела и подразделов". */
export function collectDescendantCategoryIds(categories: ApiCategory[], rootId: number): number[] {
  const childrenByParent = new Map<number, number[]>();
  for (const category of categories) {
    if (category.parent == null) continue;
    const siblings = childrenByParent.get(category.parent);
    if (siblings) siblings.push(category.id);
    else childrenByParent.set(category.parent, [category.id]);
  }

  const ids: number[] = [rootId];
  const queue: number[] = [rootId];
  while (queue.length > 0) {
    const current = queue.shift() as number;
    for (const childId of childrenByParent.get(current) ?? []) {
      ids.push(childId);
      queue.push(childId);
    }
  }
  return ids;
}

export interface CategoryPathMatch {
  node: CategoryTreeNode;
  /** Цепочка предков от корня (не включая сам узел) — для хлебных крошек. */
  ancestors: CategoryTreeNode[];
  /** Сколько сегментов пути реально совпало с категориями (может быть меньше segments.length,
   *  если последний сегмент — это slug товара, а не подкатегории). */
  matchedSegments: number;
}

/**
 * Проходит по дереву категорий сегмент за сегментом (сегмент = slug), останавливаясь
 * на первом несовпадении. Так вызывающий код (app/catalog/[...path]) узнаёт, сколько
 * сегментов пути — реальные категории, а хвост (обычно 0 или 1 сегмент) может
 * оказаться slug'ом товара внутри последней найденной категории.
 */
export function matchCategoryPath(tree: CategoryTreeNode[], segments: string[]): CategoryPathMatch | undefined {
  let level = tree;
  let current: CategoryTreeNode | undefined;
  const ancestors: CategoryTreeNode[] = [];
  let matchedSegments = 0;

  for (const segment of segments) {
    const found = level.find((node) => node.slug === segment);
    if (!found) break;
    if (current) ancestors.push(current);
    current = found;
    level = current.children;
    matchedSegments += 1;
  }

  return current ? { node: current, ancestors, matchedSegments } : undefined;
}
