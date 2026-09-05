"use client";

import { useEffect, useMemo, useState } from "react";
import ProductCard from "@/components/ui/ProductCard";
import { useShop } from "@/context/ShopContext";
import { resolveProductsByIds, type ResolvedProduct } from "@/lib/resolveProduct";

export default function FavoritesPage() {
  const { favoriteIds } = useShop();

  const idsKey = useMemo(() => favoriteIds.slice().sort().join(","), [favoriteIds]);

  // Результат/ошибка хранятся вместе со "своим" ключом; loading/error для рендера
  // выводятся сравнением этого ключа с текущим idsKey — эффект не вызывает
  // setState синхронно в начале (только внутри .then/.catch), как того требует
  // eslint-правило react-hooks/set-state-in-effect.
  const [result, setResult] = useState<{ key: string; products: ResolvedProduct[] } | null>(null);
  const [fetchError, setFetchError] = useState<{ key: string; message: string } | null>(null);

  useEffect(() => {
    let cancelled = false;
    const ids = idsKey ? idsKey.split(",") : [];

    resolveProductsByIds(ids) // resolves to [] immediately when ids is empty
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
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">Избранные товары</h1>
      {loading ? (
        <p className="text-sm text-gray-500">Загрузка...</p>
      ) : error ? (
        <p className="text-sm text-red-500">{error}</p>
      ) : products.length === 0 ? (
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
