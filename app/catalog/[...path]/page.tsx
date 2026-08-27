import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import CategoryLanding from "@/components/catalog/CategoryLanding";
import CategoryDescription from "@/components/catalog/CategoryDescription";
import CategoryProductGrid from "@/components/catalog/CategoryProductGrid";
import CatalogSiblingsSection from "@/components/catalog/CatalogSiblingsSection";
import CatalogProductDetail from "@/components/catalog/CatalogProductDetail";
import { CatalogNode, buildCatalogHref, getAllCatalogPaths, resolveCatalogPath } from "@/data/catalog-tree";
import { catalogListingsByKey, findProductInListingByPath, getCatalogListingByPath } from "@/data/listings";
import { styles } from "@/styles/index.styles";
import catalogStyles from "../catalog.module.css";

/**
 * Единый рекурсивный маршрут для ВСЕГО каталога (см. data/catalog-tree.ts — 722 узла,
 * глубина до 6 уровней). Никаких маршрутов на отдельную категорию/подкатегорию больше
 * нет: для любой глубины путь резолвится по дереву, и рендерится один из трёх видов:
 *  - branch  → сетка дочерних узлов (CategoryLanding)
 *  - terminal → сетка товаров, если для узла уже сняты реальные данные (data/listings),
 *    иначе — заглушка с описанием и ссылками на соседние разделы (товары по остальным
 *    терминальным узлам ещё не собраны — это отдельный этап наполнения данными)
 *  - товар   → путь на 1 сегмент длиннее terminal-узла с известным id товара
 */

interface CatalogPathPageProps {
  params: Promise<{ path: string[] }>;
}

export function generateStaticParams() {
  const treePaths = getAllCatalogPaths();
  const listingProductPaths = Object.values(catalogListingsByKey).flatMap((listing) =>
    listing.products.map((product) => [...listing.path.split("/"), product.id])
  );

  return [...treePaths, ...listingProductPaths].map((path) => ({ path }));
}

/**
 * Строит хлебные крошки для любого узла дерева на любой глубине.
 * - `linkNode`: дать самому узлу ссылку (нужно, когда после него добавляется товар).
 * - `extra`: добавить последней крошкой название товара (без ссылки).
 * Depth-1 странице категории на эталоне соответствует единственная крошка без ссылок
 * (см. историю app/catalog/[category]/page.tsx) — сохраняем это специально для корня;
 * терминальные узлы (и тем более товары) всегда на глубине ≥2, так что с ними это
 * никогда не пересекается.
 */
function crumbItems(
  ancestors: CatalogNode[],
  node: CatalogNode,
  opts?: { linkNode?: boolean; extra?: string }
): { label: string; href?: string }[] {
  if (ancestors.length === 0 && !opts) return [{ label: node.title }];

  const items: { label: string; href?: string }[] = [{ label: "Каталог", href: "/catalog" }];
  ancestors.forEach((ancestor, index) => {
    items.push({ label: ancestor.title, href: buildCatalogHref(ancestors.slice(0, index), ancestor) });
  });
  items.push({ label: node.title, href: opts?.linkNode ? buildCatalogHref(ancestors, node) : undefined });
  if (opts?.extra) items.push({ label: opts.extra });
  return items;
}

export async function generateMetadata({ params }: CatalogPathPageProps): Promise<Metadata> {
  const { path } = await params;
  const resolved = resolveCatalogPath(path);
  if (resolved) {
    return {
      title: `${resolved.node.title}: купить в интернет-магазине «Стройоптторг»`,
      description: `Каталог товаров «${resolved.node.title}» — большой выбор, доставка по всей России.`,
    };
  }

  if (path.length >= 2) {
    const parentPath = path.slice(0, -1);
    const productId = path[path.length - 1];
    const parentResolved = resolveCatalogPath(parentPath);
    if (parentResolved) {
      const found = findProductInListingByPath(parentPath.join("/"), productId);
      if (found) {
        return {
          title: `${found.product.title}: купить в интернет-магазине «Стройоптторг»`,
          description:
            found.product.description ??
            `${found.product.title} — купить в разделе «${found.listing.title}» интернет-магазина «Стройоптторг».`,
        };
      }
    }
  }

  return {};
}

export default async function CatalogPathPage({ params }: CatalogPathPageProps) {
  const { path } = await params;
  if (!path || path.length === 0) notFound();

  const resolved = resolveCatalogPath(path);

  if (resolved) {
    const { node, ancestors } = resolved;
    const basePath = `/catalog/${path.join("/")}`;

    if (node.type === "branch") {
      // На эталоне раздел с подкатегориями — это тоже выдача товаров (агрегат по всем
      // вложенным разделам), а не только плитки подкатегорий. Поэтому если для узла
      // собраны товары, показываем их под навигацией теми же компонентами, что и у
      // терминальных узлов — иначе листинг существует в data/listings, но не виден.
      const branchListing = getCatalogListingByPath(path.join("/"));
      return (
        <div className={catalogStyles.fluidRoot}>
          <div className={catalogStyles.container}>
            <Breadcrumbs items={crumbItems(ancestors, node)} />
            <CategoryLanding node={node} basePath={basePath} />
            {branchListing && (
              <div className="mt-12 border-t border-neutral-200 pt-10">
                <div className="mb-6 flex flex-wrap items-baseline gap-3">
                  <h2 className="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
                    Товары раздела «{node.title}»
                  </h2>
                  <span className="text-sm text-neutral-400">{branchListing.totalCountLabel}</span>
                </div>
                <CategoryProductGrid data={branchListing} basePath={basePath} showTitle={false} />
              </div>
            )}
          </div>
        </div>
      );
    }

    // terminal: есть ли уже снятые товары для этого узла?
    const fullPath = path.join("/");
    const parent = ancestors[ancestors.length - 1];
    const siblings = parent ? parent.children.filter((c) => c.slug !== node.slug) : [];
    const parentBasePath = `/catalog/${ancestors.map((a) => a.slug).join("/")}`;

    const listing = getCatalogListingByPath(fullPath);

    return (
      <div className={`${styles.container} py-6`}>
        <Breadcrumbs items={crumbItems(ancestors, node)} />

        {listing ? (
          <CategoryProductGrid data={listing} basePath={basePath} />
        ) : (
          <>
            <h1 className="mb-2 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">{node.title}</h1>
            {parent && (
              <p className="mb-4 text-sm text-neutral-400">
                Раздел категории{" "}
                <a href={parentBasePath} className="text-blue-600 hover:underline">
                  {parent.title}
                </a>
                .
              </p>
            )}
            <CategoryDescription slug={fullPath} paragraphs={node.description} />
          </>
        )}

        {siblings.length > 0 && parent && (
          <CatalogSiblingsSection parentTitle={parent.title} siblings={siblings} basePath={parentBasePath} />
        )}
      </div>
    );
  }

  // Не узел дерева — возможно, это карточка товара внутри узла с товарами. Тип узла
  // здесь не важен: товары есть и у branch-разделов (см. ветку branch выше), решает
  // наличие листинга.
  if (path.length >= 2) {
    const parentPath = path.slice(0, -1);
    const productId = path[path.length - 1];
    const parentResolved = resolveCatalogPath(parentPath);

    if (parentResolved) {
      const fullParentPath = parentPath.join("/");
      const found = findProductInListingByPath(fullParentPath, productId);
      if (found) {
        const basePath = `/catalog/${fullParentPath}`;
        return (
          <CatalogProductDetail
            listing={found.listing}
            product={found.product}
            basePath={basePath}
            breadcrumbItems={crumbItems(parentResolved.ancestors, parentResolved.node, {
              linkNode: true,
              extra: found.product.title,
            })}
          />
        );
      }
    }
  }

  notFound();
}
