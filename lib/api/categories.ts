import { api } from "./client";
import { fetchAllPages } from "./paginate";
import type { ApiCategory } from "@/types/api";

/**
 * Эндпоинты категорий по документации Postman (раздел shop/categories):
 *   GET    {{url}}/categories      — список
 *   POST   {{url}}/categories/     — создание
 *   PATCH  {{url}}/categories/:id/ — изменение
 *   DELETE {{url}}/categories/:id/ — удаление
 * Аутентификации у раздела shop в документации нет, поэтому Bearer-токен не шлём.
 */

/** Все категории каталога (бэкенд отдаёт их постранично — см. lib/api/paginate.ts). */
export async function listCategories(): Promise<ApiCategory[]> {
  return fetchAllPages<ApiCategory>("/categories/");
}

export async function createCategory(input: { name: string; slug: string; parent?: number | null; sort?: number; is_active?: boolean }) {
  return api.post<ApiCategory>("/categories/", input, { auth: false });
}

export async function updateCategory(
  id: number,
  input: Partial<Pick<ApiCategory, "name" | "slug" | "parent" | "is_active" | "sort">>
) {
  return api.patch<ApiCategory>(`/categories/${id}/`, input, { auth: false });
}

export async function deleteCategory(id: number): Promise<void> {
  await api.delete(`/categories/${id}/`, { auth: false });
}
