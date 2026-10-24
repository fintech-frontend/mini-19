"use client";

import { useMemo } from "react";
import { getErrorMessage, useGetCategoriesQuery } from "@/lib/store/api";
import { buildCategoryTree, type CategoryTreeNode } from "@/lib/catalog/categoryTree";

export interface UseCategoryTreeResult {
  tree: CategoryTreeNode[];
  isLoading: boolean;
  errorMessage: string | null;
  refetch: () => void;
}

/**
 * Дерево категорий каталога для клиентских компонентов (меню «Каталог» в шапке).
 *
 * `enabled` позволяет не ходить в сеть на каждой странице: меню включает запрос
 * только при первом открытии, дальше данные берутся из кэша RTK Query.
 */
export function useCategoryTree(enabled = true): UseCategoryTreeResult {
  const { data, isLoading, isError, error, refetch } = useGetCategoriesQuery(undefined, { skip: !enabled });

  const tree = useMemo(() => (data ? buildCategoryTree(data) : []), [data]);

  return {
    tree,
    isLoading,
    errorMessage: isError ? getErrorMessage(error, "Не удалось загрузить каталог. Попробуйте позже.") : null,
    refetch: () => void refetch(),
  };
}
