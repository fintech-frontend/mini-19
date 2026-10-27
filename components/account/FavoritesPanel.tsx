"use client";

import { useMemo } from "react";
import ProductCard from "@/components/ui/ProductCard";
import { useShop } from "@/context/ShopContext";
import { useProductsByIds } from "@/hooks/useProductsByIds";

/**
 * Раньше читал захардкоженный `favoriteProductIds` из data/account-data.ts и
 * фильтровал `data/staticProducts.ts` — список был полностью оторван от реального
 * избранного (кнопки "сердечко" на карточках товаров писали в ShopContext, а эта
 * панель их не видела). Теперь берёт то же самое избранное, что и /favorites.
 */
export function FavoritesPanel() {
  const { favoriteIds } = useShop();
  const idsKey = useMemo(() => favoriteIds.slice().sort().join(","), [favoriteIds]);

  const productIds = useMemo(() => (idsKey ? idsKey.split(",") : []), [idsKey]);
  const { products, isLoading: loading, errorMessage: error } = useProductsByIds(
    productIds,
    "Не удалось загрузить избранные товары. Попробуйте обновить страницу."
  );

  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold text-neutral-900">Избранные товары</h2>
      {loading ? (
        <p className="text-sm text-neutral-500">Загрузка...</p>
      ) : error ? (
        <p className="text-sm text-red-500">{error}</p>
      ) : products.length === 0 ? (
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
