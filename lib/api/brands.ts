import { api } from "./client";
import { fetchAllPages } from "./paginate";
import type { ApiBrand } from "@/types/api";

/**
 * Эндпоинты брендов по документации Postman (раздел shop/brands):
 *   GET    {{url}}/brands/     — список
 *   POST   {{url}}/brands/     — создание
 *   PATCH  {{url}}/brands/:id/ — изменение
 *   DELETE {{url}}/brands/:id/ — удаление
 * Аутентификации у раздела shop в документации нет, поэтому Bearer-токен не шлём.
 */

export async function listBrands(): Promise<ApiBrand[]> {
  return fetchAllPages<ApiBrand>("/brands/");
}

/** `logo` — строка-URL (max 500), а не файл: подтверждено ответом DRF на OPTIONS /brands/. */
export async function createBrand(input: { name: string; slug: string; logo?: string }) {
  return api.post<ApiBrand>("/brands/", input, { auth: false });
}

export async function updateBrand(id: number, input: Partial<Pick<ApiBrand, "name" | "slug" | "logo">>) {
  return api.patch<ApiBrand>(`/brands/${id}/`, input, { auth: false });
}

export async function deleteBrand(id: number): Promise<void> {
  await api.delete(`/brands/${id}/`, { auth: false });
}
