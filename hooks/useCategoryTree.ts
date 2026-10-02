"use client";

import { useQuery } from "@tanstack/react-query";
import { listCategories } from "@/lib/api/categories";
import { buildCategoryTree, type CategoryTreeNode } from "@/lib/api/categoryTree";
import { ApiError } from "@/lib/api/errors";

/** Ключ кэша списка категорий — общий для всех клиентских потребителей. */
export const CATEGORIES_QUERY_KEY = ["categories"] as const;

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
 * только при первом открытии, дальше данные берутся из кэша React Query.
 */
export function useCategoryTree(enabled = true): UseCategoryTreeResult {
  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: CATEGORIES_QUERY_KEY,
    queryFn: listCategories,
    select: buildCategoryTree,
    enabled,
  });

  return {
    tree: data ?? [],
    isLoading: enabled && isPending,
    errorMessage: isError
      ? error instanceof ApiError
        ? error.message
        : "Не удалось загрузить каталог. Попробуйте позже."
      : null,
    refetch: () => void refetch(),
  };
}
