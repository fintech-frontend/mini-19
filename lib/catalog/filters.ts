import type { ApiProduct } from "@/types/api";

/**
 * Фильтрация каталога. Бэкенд не поддерживает ни поиска, ни фильтров (`?search=`,
 * `?category=` и т.п. возвращают тот же полный список — проверено живыми запросами),
 * поэтому товары отбираются на клиенте из полного списка getProducts.
 */

/** Текст товара для поиска: название, артикул, бренд и категория. */
function productHaystack(product: ApiProduct): string {
  return [product.name, product.article, product.brand?.name, product.category?.name]
    .filter((value): value is string => typeof value === "string")
    .join(" ")
    .toLowerCase();
}

/**
 * Регистр не важен, совпадение — по части слова («дрел» находит «Дрель-шуруповёрт»).
 * Каждое слово запроса должно встретиться, порядок слов не важен.
 */
export function filterProductsByQuery(products: ApiProduct[], query: string): ApiProduct[] {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return products;

  return products.filter((product) => {
    const haystack = productHaystack(product);
    return terms.every((term) => haystack.includes(term));
  });
}

/** Товары из указанных категорий (обычно — категория и все её потомки). */
export function filterProductsByCategories(products: ApiProduct[], categoryIds: number[]): ApiProduct[] {
  const allowed = new Set(categoryIds);
  return products.filter((product) => product.category != null && allowed.has(product.category.id));
}
