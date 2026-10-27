"use client";

import { useEffect, useMemo, useState } from "react";
import ProductCard from "@/components/ui/ProductCard";
import { useShop } from "@/context/ShopContext";
import { resolveProductsByIds, type ResolvedProduct } from "@/lib/resolveProduct";

/**
 * Раньше читал захардкоженный `favoriteProductIds` из data/account-data.ts и
 * фильтровал `data/staticProducts.ts` — список был полностью оторван от реального
 * избранного (кнопки "сердечко" на карточках товаров писали в ShopContext, а эта
 * панель их не видела). Теперь берёт то же самое избранное, что и /favorites.
 */
export function FavoritesPanel() {
  const { favoriteIds } = useShop();
  const idsKey = useMemo(() => favoriteIds.slice().sort().join(","), [favoriteIds]);

  const [result, setResult] = useState<{ key: string; products: ResolvedProduct[] } | null>(null);
  const [fetchError, setFetchError] = useState<{ key: string; message: string } | null>(null);

  useEffect(() => {
    let cancelled = false;
    const ids = idsKey ? idsKey.split(",") : [];

    resolveProductsByIds(ids)
      .then((resolved) => {
        if (cancelled) return;
        setResult({ key: idsKey, products: resolved });
        setFetchError(null);
      })
      .catch(() => {
        if (!cancelled) {
          setFetchError({ key: idsKey, message: "Не удалось загрузить избранные товары. Попробуйте обновить страницу." });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [idsKey]);

  const products = result?.key === idsKey ? result.products : [];
  const error = fetchError?.key === idsKey ? fetchError.message : null;
  const loading = !error && result?.key !== idsKey;

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
