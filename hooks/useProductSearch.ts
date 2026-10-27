"use client";

import { useMemo } from "react";
import { getErrorMessage, useGetProductsQuery } from "@/lib/store/api";
import { filterProductsByQuery } from "@/lib/catalog/filters";
import { toResolvedProduct, type ResolvedProduct } from "@/lib/resolveProduct";

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
 * `UI → этот хук → RTK Query (lib/store/api) → backend`. Компоненты не делают
 * запросов сами и не знают ни про URL бэкенда, ни про то, что поиск сейчас идёт по
 * загруженному списку.
 *
 * Почему один кэш на весь каталог, а не запрос на каждый запрос пользователя:
 * у бэкенда нет серверного поиска (см. lib/catalog/filters.ts), поэтому
 * ходить в сеть на каждую букву бессмысленно — каталог тянется один раз эндпоинтом
 * getProducts, а фильтрация идёт локально. Когда серверный поиск появится, здесь
 * достаточно будет завести эндпоинт с query-аргументом.
 */
export function useProductSearch(query: string): UseProductSearchResult {
  const trimmed = query.trim();

  const { data, isLoading, isError, error, refetch } = useGetProductsQuery();

  const results = useMemo(() => {
    if (!data || !trimmed) return [];
    return filterProductsByQuery(data, trimmed).map(toResolvedProduct);
  }, [data, trimmed]);

  return {
    results,
    totalProducts: data?.length ?? 0,
    isLoading: isLoading && trimmed.length > 0,
    isError,
    errorMessage: isError ? getErrorMessage(error, "Не удалось загрузить товары. Попробуйте позже.") : null,
    isEmptyQuery: trimmed.length === 0,
    isEmptyResult: trimmed.length > 0 && !isLoading && !isError && results.length === 0,
    refetch: () => void refetch(),
  };
}
