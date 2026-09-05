import { api } from "./client";
import { fetchAllPages } from "./paginate";
import type { ApiCartItem } from "@/types/api";

/**
 * У /cart-items нет query-параметра "по корзине" (фильтры бэкендом не поддерживаются),
 * поэтому забираем полный список и отбираем свою корзину на клиенте. Обычный путь
 * гидратации корзины — `GET /carts/:id/`, где позиции уже вложены; эта функция нужна
 * как отдельная обёртка над документированным эндпоинтом списка.
 */
export async function listCartItems(cartId: number): Promise<ApiCartItem[]> {
  const items = await fetchAllPages<ApiCartItem>("/cart-items/");
  return items.filter((item) => item.cart === cartId);
}

export async function addCartItem(input: {
  cart: number;
  product_id: number;
  price: number;
  quantity?: number;
}): Promise<ApiCartItem> {
  return api.post<ApiCartItem>("/cart-items/", input, { auth: false });
}

export async function updateCartItemQuantity(id: number, quantity: number): Promise<ApiCartItem> {
  return api.patch<ApiCartItem>(`/cart-items/${id}/`, { quantity }, { auth: false });
}

export async function removeCartItem(id: number): Promise<void> {
  await api.delete(`/cart-items/${id}/`, { auth: false });
}
