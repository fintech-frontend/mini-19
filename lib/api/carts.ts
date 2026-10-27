import { api } from "./client";
import type { ApiCart } from "@/types/api";

/**
 * Эндпоинты корзины по документации Postman (раздел shop/carts):
 *   GET    {{url}}/carts      — список
 *   POST   {{url}}/carts/     — создание (тело пустое)
 *   PATCH  {{url}}/carts/:id/ — изменение
 *   DELETE {{url}}/carts/:id/ — удаление
 *
 * "Получить одну корзину по id" в документации не описано, но на живом сервере
 * GET /api/carts/:id/ работает (стандартный DRF ViewSet): отдаёт корзину с
 * вложенными items и total_price, а для удалённой корзины — 404. Это один запрос
 * вместо постраничного чтения всех /cart-items/ магазина. Аутентификации у
 * раздела shop нет.
 */

export async function getCart(id: number): Promise<ApiCart> {
  return api.get<ApiCart>(`/carts/${id}/`, { auth: false });
}

export async function createCart(): Promise<ApiCart> {
  return api.post<ApiCart>("/carts/", undefined, { auth: false });
}

export async function deleteCart(id: number): Promise<void> {
  await api.delete(`/carts/${id}/`, { auth: false });
}
