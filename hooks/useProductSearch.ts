"use client";

import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { filterProductsByQuery, listProducts } from "@/lib/api/products";
import { toResolvedProduct, type ResolvedProduct } from "@/lib/resolveProduct";
import { ApiError } from "@/lib/api/errors";

/** Ключ кэша каталога. Вынесен, чтобы его можно было переиспользовать/инвалидировать. */
export const PRODUCTS_QUERY_KEY = ["products", "catalog"] as const;

export interface UseProductSearchResult {
  /** Найденные товары в нормализованной для UI форме. */
  results: ResolvedProduct[];
  /** Сколько всего товаров в каталоге (для подписи «искали среди N товаров»). */
  totalProducts: number;
  isLoading: boolean;
  isError: boolean;
  /** Готовое к выводу сообщение об ошибке. */
  errorMessage: string | null;
  /** Запрос пустой — искать нечего, показываем подсказку, а не «ничего не найдено». */
  isEmptyQuery: boolean;
  /** Запрос есть, загрузка кончилась, совпадений нет. */
  isEmptyResult: boolean;
  refetch: () => void;
}

/**
 * Поиск товаров по всему каталогу.
 *
 * `UI → этот хук → API layer (lib/api/products.ts) → backend`. Компоненты не делают
 * запросов сами и не знают ни про URL бэкенда, ни про то, что поиск сейчас идёт по
 * загруженному списку.
 *
 * Почему один кэш на весь каталог, а не запрос на каждый запрос пользователя:
 * у бэкенда нет серверного поиска (см. searchProducts в lib/api/products.ts), поэтому
 * ходить в сеть на каждую букву бессмысленно — каталог тянется один раз под общим
 * ключом PRODUCTS_QUERY_KEY, а фильтрация идёт локально. Когда серверный поиск
 * появится, здесь достаточно будет заменить queryFn на `searchProducts(query)` и
 * добавить query в queryKey.
 */
export function useProductSearch(query: string): UseProductSearchResult {
  const trimmed = query.trim();

  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: PRODUCTS_QUERY_KEY,
    queryFn: () => listProducts(),
  });

  const results = useMemo(() => {
    if (!data || !trimmed) return [];
    return filterProductsByQuery(data, trimmed).map(toResolvedProduct);
  }, [data, trimmed]);

  const isLoading = isPending && trimmed.length > 0;

  return {
    results,
    totalProducts: data?.length ?? 0,
    isLoading,
    isError,
    errorMessage: isError
      ? error instanceof ApiError
        ? error.message
        : "Не удалось загрузить товары. Попробуйте позже."
      : null,
    isEmptyQuery: trimmed.length === 0,
    isEmptyResult: trimmed.length > 0 && !isPending && !isError && results.length === 0,
    refetch: () => {
      void refetch();
    },
  };
}
