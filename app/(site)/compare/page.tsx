"use client";

import { useMemo } from "react";
import ProductCard from "@/components/ui/ProductCard";
import { useShop } from "@/context/ShopContext";
import { useProductsByIds } from "@/hooks/useProductsByIds";
import { styles } from "@/styles/index.styles";

export default function ComparePage() {
  const { compareIds } = useShop();

  const idsKey = useMemo(() => compareIds.slice().sort().join(","), [compareIds]);

  const productIds = useMemo(() => (idsKey ? idsKey.split(",") : []), [idsKey]);
  const { products, isLoading: loading, errorMessage: error } = useProductsByIds(
    productIds,
    "Не удалось загрузить товары для сравнения. Попробуйте обновить страницу."
  );

  return (
    <div className={`${styles.container} py-8`}>
      <h1 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">Сравнение товаров</h1>
      {loading ? (
        <p className="text-sm text-gray-500">Загрузка...</p>
      ) : error ? (
        <p className="text-sm text-red-500">{error}</p>
      ) : products.length === 0 ? (
        <p className="text-sm text-gray-500">Список сравнения пуст.</p>
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
