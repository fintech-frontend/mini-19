"use client";

import { useProductsByIds, type UseProductsByIdsResult } from "@/hooks/useProductsByIds";

export type UseFavoriteProductsResult = UseProductsByIdsResult;

/**
 * Товары из избранного в том порядке, в котором пользователь их добавлял.
 * `UI → этот хук → RTK Query (getProducts) → backend`.
 */
export function useFavoriteProducts(favoriteIds: string[]): UseFavoriteProductsResult {
  return useProductsByIds(
    favoriteIds,
    "Не удалось загрузить избранные товары. Попробуйте обновить страницу."
  );
}
