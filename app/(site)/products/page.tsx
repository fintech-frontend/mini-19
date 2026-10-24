import { catalogApi, getErrorMessage } from "@/lib/store/api";
import { serverQuery } from "@/lib/store/server";
import { toResolvedProduct } from "@/lib/resolveProduct";
import { collectDescendantCategoryIds } from "@/lib/catalog/categoryTree";
import { filterProductsByCategories, filterProductsByQuery } from "@/lib/catalog/filters";
import ProductGrid from "@/components/products/ProductGrid";
import CategoryFilter from "@/components/products/CategoryFilter";
import { styles } from "@/styles/index.styles";

interface ProductsPageProps {
  searchParams: Promise<{ category?: string; q?: string }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category: categorySlug, q } = await searchParams;
  const query = q?.trim() ?? "";

  const [categoriesResult, productsResult] = await Promise.all([
    serverQuery(catalogApi.endpoints.getCategories.initiate()),
    serverQuery(catalogApi.endpoints.getProducts.initiate()),
  ]);
  const categories = categoriesResult.data ?? [];
  const allProducts = productsResult.data ?? [];
  const failed = categoriesResult.error ?? productsResult.error;
  const errorMessage = failed ? getErrorMessage(failed, "Не удалось загрузить товары. Попробуйте позже.") : null;

  const activeCategory = categorySlug ? categories.find((c) => c.slug === categorySlug) : undefined;

  const inCategory = activeCategory
    ? filterProductsByCategories(allProducts, collectDescendantCategoryIds(categories, activeCategory.id))
    : allProducts;
  const visibleApiProducts = filterProductsByQuery(inCategory, query);

  const resolvedAllProducts = allProducts.map(toResolvedProduct);
  const resolvedVisibleProducts = visibleApiProducts.map(toResolvedProduct);

  return (
    <main className={`${styles.container} min-w-0 py-8`}>
      <div className="mb-8 border-b border-gray-200 pb-5">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {query ? `Поиск: «${query}»` : activeCategory ? activeCategory.name : "Каталог товаров"}
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          {query
            ? `Найдено товаров: ${visibleApiProducts.length}`
            : "Sifatli qurilish materiallari va jihozlarining keng tanlovi."}
        </p>
      </div>

      {errorMessage ? (
        <p className="py-16 text-center text-sm text-red-600">{errorMessage}</p>
      ) : (
        <>
          <CategoryFilter products={resolvedAllProducts} categories={categories} activeSlug={activeCategory?.slug} />
          <ProductGrid
            products={resolvedVisibleProducts}
            emptyMessage={query ? `По запросу «${query}» ничего не найдено.` : undefined}
          />
        </>
      )}
    </main>
  );
}
