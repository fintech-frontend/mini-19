import { api } from "./client";
import type { ApiCart } from "@/types/api";

/**
 * Эндпоинты корзины по документации Postman (раздел shop/carts):
 *   GET    {{url}}/carts      — список
 *   POST   {{url}}/carts/     — создание (тело пустое)
 *   PATCH  {{url}}/carts/:id/ — изменение
 *   DELETE {{url}}/carts/:id/ — удаление
 *
 * "Получить одну корзину по id" в документации не описано, поэтому позиции корзины
 * читаем документированным способом — через GET {{url}}/cart-items с отбором по cart
 * (см. listCartItems в lib/api/cartItems.ts). Аутентификации у раздела shop нет.
 */

export async function createCart(): Promise<ApiCart> {
  return api.post<ApiCart>("/carts/", undefined, { auth: false });
}

export async function deleteCart(id: number): Promise<void> {
  await api.delete(`/carts/${id}/`, { auth: false });
}
