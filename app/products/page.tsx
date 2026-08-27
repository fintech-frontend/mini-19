import { staticProducts } from "@/data/staticProducts";
import { getCategoryBySlug } from "@/data/categories";
import ProductGrid from "@/components/products/ProductGrid";
import CategoryFilter from "@/components/products/CategoryFilter";

interface ProductsPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category: categorySlug } = await searchParams;
  const activeCategory = getCategoryBySlug(categorySlug);

  const products = activeCategory
    ? staticProducts.filter((product) => product.category === activeCategory.name)
    : staticProducts;

  return (
    <main className="min-w-0 max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 border-b border-gray-200 pb-5">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {activeCategory ? activeCategory.name : "Каталог товаров"}
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Sifatli qurilish materiallari va jihozlarining keng tanlovi.
        </p>
      </div>

      <CategoryFilter products={staticProducts} activeSlug={activeCategory?.slug} />

      <ProductGrid products={products} />
    </main>
  );
}
