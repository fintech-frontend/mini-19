import { staticProducts } from "@/data/staticProducts";
import ProductCard from "@/components/ui/ProductCard";

export function FavoritesPanel({ productIds }: { productIds: string[] }) {
  const products = staticProducts.filter((product) => productIds.includes(product.id));

  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold text-neutral-900">Избранные товары</h2>
      {products.length === 0 ? (
        <p className="text-sm text-neutral-500">В избранном пока ничего нет.</p>
      ) : (
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
