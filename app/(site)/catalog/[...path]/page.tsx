import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import CategoryLanding from "@/components/catalog/CategoryLanding";
import CategoryProductGrid from "@/components/catalog/CategoryProductGrid";
import CatalogSiblingsSection from "@/components/catalog/CatalogSiblingsSection";
import CatalogProductDetail from "@/components/catalog/CatalogProductDetail";
import { catalogApi, getErrorMessage } from "@/lib/store/api";
import { serverQuery } from "@/lib/store/server";
import { toResolvedProduct } from "@/lib/resolveProduct";
import { filterProductsByCategories } from "@/lib/catalog/filters";
import {
  CategoryTreeNode,
  buildCategoryTree,
  collectDescendantCategoryIds,
  matchCategoryPath,
} from "@/lib/catalog/categoryTree";
import { styles } from "@/styles/index.styles";
import catalogStyles from "../catalog.module.css";

/**
 * Единый рекурсивный маршрут для ВСЕГО каталога. Раньше путь резолвился по статическому
 * 722-узловому дереву (data/catalog-tree.ts) — теперь дерево строится на каждый запрос
 * из реального `GET /categories/` по полю `parent` (см. lib/catalog/categoryTree.ts), а
 * товары — из `GET /products/`, поэтому маршрут больше не может быть статически
 * enumerated заранее (нет generateStaticParams — страница всегда рендерится динамически).
 *
 * Сегменты пути сопоставляются с slug'ами категорий сколько получится:
 *  - все сегменты совпали с категориями → страница раздела: подкатегории (если есть) +
 *    товары самого раздела и всех его подразделов;
 *  - совпали все сегменты кроме последнего → последний сегмент пробуем как slug товара
 *    внутри найденной категории (и её подкатегорий) → страница товара;
 *  - иначе → 404.
 */

interface CatalogPathPageProps {
  params: Promise<{ path: string[] }>;
}

/**
 * Строит хлебные крошки для узла дерева категорий на любой глубине.
 * - `linkNode`: дать самому узлу ссылку (нужно, когда после него добавляется товар).
 * - `extra`: добавить последней крошкой название товара (без ссылки).
 */
function crumbItems(
  ancestors: CategoryTreeNode[],
  node: CategoryTreeNode,
  opts?: { linkNode?: boolean; extra?: string }
): { label: string; href?: string }[] {
  if (ancestors.length === 0 && !opts) return [{ label: node.name }];

  const items: { label: string; href?: string }[] = [{ label: "Каталог", href: "/catalog" }];
  ancestors.forEach((ancestor, index) => {
    items.push({
      label: ancestor.name,
      href: `/catalog/${[...ancestors.slice(0, index), ancestor].map((a) => a.slug).join("/")}`,
    });
  });
  items.push({
    label: node.name,
    href: opts?.linkNode ? `/catalog/${[...ancestors, node].map((a) => a.slug).join("/")}` : undefined,
  });
  if (opts?.extra) items.push({ label: opts.extra });
  return items;
}

const loadCategories = () => serverQuery(catalogApi.endpoints.getCategories.initiate());
const loadProducts = () => serverQuery(catalogApi.endpoints.getProducts.initiate());

export async function generateMetadata({ params }: CatalogPathPageProps): Promise<Metadata> {
  const { path } = await params;

  // Метаданные не критичны — при сбое отдаём дефолтные, страница сама покажет ошибку/404.
  const { data: categories } = await loadCategories();
  if (!categories) return {};

  const match = matchCategoryPath(buildCategoryTree(categories), path);

  if (match && match.matchedSegments === path.length) {
    return {
      title: `${match.node.name}: купить в интернет-магазине «Стройоптторг»`,
      description: `Каталог товаров «${match.node.name}» — большой выбор, доставка по всей России.`,
    };
  }

  if (match && match.matchedSegments === path.length - 1) {
    const slug = path[path.length - 1];
    const { data: products = [] } = await loadProducts();
    const found = filterProductsByCategories(products, collectDescendantCategoryIds(categories, match.node.id)).find(
      (p) => p.slug === slug
    );
    if (found) {
      return {
        title: `${found.name}: купить в интернет-магазине «Стройоптторг»`,
        description:
          found.description ??
          `${found.name} — купить в разделе «${match.node.name}» интернет-магазина «Стройоптторг».`,
      };
    }
  }

  return {};
}

export default async function CatalogPathPage({ params }: CatalogPathPageProps) {
  const { path } = await params;
  if (!path || path.length === 0) notFound();

  const { data: categories, error: categoriesError } = await loadCategories();
  if (!categories) {
    const message = getErrorMessage(categoriesError, "Не удалось загрузить каталог. Попробуйте позже.");
    return (
      <div className={catalogStyles.fluidRoot}>
        <div className={catalogStyles.container}>
          <Breadcrumbs items={[{ label: "Каталог", href: "/catalog" }]} />
          <p className="mt-10 text-sm text-red-600">{message}</p>
        </div>
      </div>
    );
  }

  const tree = buildCategoryTree(categories);
  const match = matchCategoryPath(tree, path);

  if (match && match.matchedSegments === path.length) {
    const { node, ancestors } = match;
    const descendantIds = collectDescendantCategoryIds(categories, node.id);
    const basePath = `/catalog/${path.join("/")}`;

    const { data: allProducts, error: productsError } = await loadProducts();
    const products = filterProductsByCategories(allProducts ?? [], descendantIds).map(toResolvedProduct);
    const loadError = allProducts ? null : getErrorMessage(productsError, "Не удалось загрузить товары раздела.");

    const parent = ancestors[ancestors.length - 1];
    const siblings = parent ? parent.children.filter((c) => c.slug !== node.slug) : [];
    const parentBasePath = ancestors.length > 0 ? `/catalog/${ancestors.map((a) => a.slug).join("/")}` : "/catalog";

    return (
      <div className={catalogStyles.fluidRoot}>
        <div className={catalogStyles.container}>
          <Breadcrumbs items={crumbItems(ancestors, node)} />
          <CategoryLanding node={node} basePath={basePath} />

          {loadError ? (
            <p className="mt-10 text-sm text-red-600">{loadError}</p>
          ) : products.length > 0 ? (
            <div className="mt-12 border-t border-neutral-200 pt-10">
              <div className="mb-6 flex flex-wrap items-baseline gap-3">
                <h2 className="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
                  Товары раздела «{node.name}»
                </h2>
              </div>
              <CategoryProductGrid key={basePath} products={products} title={node.name} showTitle={false} />
            </div>
          ) : node.children.length === 0 ? (
            <p className="mt-10 text-sm text-neutral-500">В этом разделе пока нет товаров.</p>
          ) : null}

          {siblings.length > 0 && parent && (
            <div className="mt-12 border-t border-neutral-200 pt-10">
              <CatalogSiblingsSection parentTitle={parent.name} siblings={siblings} basePath={parentBasePath} />
            </div>
          )}
        </div>
      </div>
    );
  }

  // Ровно один лишний сегмент после найденной категории — пробуем как slug товара.
  if (match && match.matchedSegments === path.length - 1) {
    const { node, ancestors } = match;
    const slug = path[path.length - 1];
    const descendantIds = collectDescendantCategoryIds(categories, node.id);

    const { data: allProducts, error: productsError } = await loadProducts();
    if (!allProducts) {
      const message = getErrorMessage(productsError, "Не удалось загрузить товар. Попробуйте позже.");
      return (
        <div className={`${styles.container} py-6`}>
          <Breadcrumbs items={crumbItems(ancestors, node, { linkNode: true })} />
          <p className="text-sm text-red-600">{message}</p>
        </div>
      );
    }

    const apiProducts = filterProductsByCategories(allProducts, descendantIds);
    const found = apiProducts.find((p) => p.slug === slug);
    if (!found) notFound();

    const product = toResolvedProduct(found);
    const similar = apiProducts
      .filter((p) => p.id !== found.id)
      .slice(0, 8)
      .map(toResolvedProduct);

    return (
      <CatalogProductDetail
        product={product}
        attrs={found.attrs_json}
        similar={similar}
        breadcrumbItems={crumbItems(ancestors, node, { linkNode: true, extra: product.title })}
      />
    );
  }

  notFound();
}
