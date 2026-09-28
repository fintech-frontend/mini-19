"use client";

import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { listProducts } from "@/lib/api/products";
import { toResolvedProduct, type ResolvedProduct } from "@/lib/resolveProduct";
import { ApiError } from "@/lib/api/errors";
import { PRODUCTS_QUERY_KEY } from "@/hooks/useProductSearch";

export interface UseFavoriteProductsResult {
  products: ResolvedProduct[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | null;
  refetch: () => void;
}

/**
 * Товары из избранного.
 *
 * `UI → этот хук → API layer (lib/api/products.ts) → backend`.
 *
 * Почему не resolveProductsByIds: та функция резолвит каждый id отдельно, а
 * `getProduct(id)` внутри тянет ВЕСЬ каталог (детального эндпоинта у backend нет,
 * см. комментарий в lib/api/products.ts). На четырёх избранных это давало восемь
 * запросов полного списка — проверено в браузере. Здесь каталог берётся один раз
 * под тем же ключом, что и поиск (PRODUCTS_QUERY_KEY), поэтому переход
 * «поиск → избранное» вообще не ходит в сеть.
 *
 * Порядок сохраняем как в favoriteIds, а не как в каталоге: пользователь видит
 * товары в том порядке, в котором добавлял.
 */
export function useFavoriteProducts(favoriteIds: string[]): UseFavoriteProductsResult {
  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: PRODUCTS_QUERY_KEY,
    queryFn: () => listProducts(),
    // Пустое избранное — в каталог ходить незачем.
    enabled: favoriteIds.length > 0,
  });

  const idsKey = favoriteIds.join(",");

  const products = useMemo(() => {
    if (!data || favoriteIds.length === 0) return [];
    const byId = new Map(data.map((product) => [String(product.id), product]));
    return favoriteIds
      .map((id) => byId.get(id))
      .filter((product): product is NonNullable<typeof product> => product != null)
      .map(toResolvedProduct);
    // idsKey — стабильный слепок списка: массив favoriteIds пересоздаётся на каждый рендер.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, idsKey]);

  return {
    products,
    isLoading: favoriteIds.length > 0 && isPending,
    isError,
    errorMessage: isError
      ? error instanceof ApiError
        ? error.message
        : "Не удалось загрузить избранные товары. Попробуйте обновить страницу."
      : null,
    refetch: () => {
      void refetch();
    },
  };
}
