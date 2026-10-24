"use client";

import { useMemo } from "react";
import { getErrorMessage, useGetProductsQuery } from "@/lib/store/api";
import { toResolvedProduct, type ResolvedProduct } from "@/lib/resolveProduct";

export interface UseProductsByIdsResult {
  products: ResolvedProduct[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | null;
  refetch: () => void;
}

/**
 * Товары по списку id — для корзины, чекаута, избранного и сравнения.
 *
 * Детального эндпоинта товара у backend нет (см. getProduct в lib/store/api/catalogApi.ts),
 * поэтому товары берутся из общего кэша каталога (getProducts): один запрос на все
 * страницы, а переход «поиск → корзина → избранное» вообще не ходит в сеть.
 * Пустой список id — в каталог ходить незачем.
 *
 * Порядок сохраняем как в `ids`, а не как в каталоге.
 */
export function useProductsByIds(ids: string[], fallbackError: string): UseProductsByIdsResult {
  const skip = ids.length === 0;
  const { data, isLoading, isError, error, refetch } = useGetProductsQuery(undefined, { skip });

  // Стабильный слепок списка: массив ids часто пересоздаётся на каждый рендер.
  const idsKey = ids.join(",");

  const products = useMemo(() => {
    if (!data || !idsKey) return [];
    const byId = new Map(data.map((product) => [String(product.id), product]));
    return idsKey
      .split(",")
      .map((id) => byId.get(id))
      .filter((product): product is NonNullable<typeof product> => product != null)
      .map(toResolvedProduct);
  }, [data, idsKey]);

  return {
    products,
    isLoading: !skip && isLoading,
    isError: !skip && isError,
    errorMessage: !skip && isError ? getErrorMessage(error, fallbackError) : null,
    refetch: () => void refetch(),
  };
}
