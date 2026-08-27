"use client";

import { staticProducts } from "@/data/staticProducts";
import ProductCard from "@/components/ui/ProductCard";
import { useShop } from "@/context/ShopContext";

export default function FavoritesPage() {
  const { isFavorite } = useShop();
  const products = staticProducts.filter((product) => isFavorite(product.id));

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">Избранные товары</h1>
      {products.length === 0 ? (
        <p className="text-sm text-gray-500">В избранном пока ничего нет.</p>
      ) : (
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
