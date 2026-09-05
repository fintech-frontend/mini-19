import { listProducts } from "@/lib/api/products";
import { listCategories } from "@/lib/api/categories";
import { toResolvedProduct } from "@/lib/resolveProduct";
import { collectDescendantCategoryIds } from "@/lib/api/categoryTree";
import { ApiError } from "@/lib/api/errors";
import ProductGrid from "@/components/products/ProductGrid";
import CategoryFilter from "@/components/products/CategoryFilter";
import type { ApiCategory, ApiProduct } from "@/types/api";

interface ProductsPageProps {
  searchParams: Promise<{ category?: string; q?: string }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category: categorySlug, q } = await searchParams;
  const query = q?.trim() ?? "";

  let categories: ApiCategory[] = [];
  let allProducts: ApiProduct[] = [];
  let errorMessage: string | null = null;

  try {
    [categories, allProducts] = await Promise.all([listCategories(), listProducts()]);
  } catch (error) {
    errorMessage = error instanceof ApiError ? error.message : "Не удалось загрузить товары. Попробуйте позже.";
  }

  const activeCategory = categorySlug ? categories.find((c) => c.slug === categorySlug) : undefined;

  let visibleApiProducts = activeCategory
    ? (() => {
        const descendantIds = new Set(collectDescendantCategoryIds(categories, activeCategory.id));
        return allProducts.filter((p) => p.category != null && descendantIds.has(p.category.id));
      })()
    : allProducts;

  // Поиск: у бэкенда нет `?search=` (проверено), поэтому отбираем по названию,
  // артикулу, бренду и категории среди реальных товаров, пришедших из API.
  if (query) {
    const needle = query.toLowerCase();
    visibleApiProducts = visibleApiProducts.filter((product) =>
      [product.name, product.article, product.brand?.name, product.category?.name]
        .filter((value): value is string => typeof value === "string")
        .join(" ")
        .toLowerCase()
        .includes(needle)
    );
  }

  const resolvedAllProducts = allProducts.map(toResolvedProduct);
  const resolvedVisibleProducts = visibleApiProducts.map(toResolvedProduct);

  return (
    <main className="min-w-0 max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
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
