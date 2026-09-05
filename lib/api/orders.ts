import { api } from "./client";
import type { ApiOrder } from "@/types/api";

/**
 * Эндпоинты заказов по документации Postman (раздел shop/orders):
 *   GET  {{url}}/orders   — список
 *   POST {{url}}/orders/  — создание, тело { number, subtotal, total }
 *
 * PATCH/DELETE для заказа в документации НЕ описаны: записи "update" и "delete"
 * в папке orders указывают на /cart-items/1/ и /cart-items/2/, то есть дублируют
 * cart-items. Поэтому функций изменения/удаления заказа здесь нет — придумывать
 * недокументированные эндпоинты нельзя.
 *
 * Тело POST ограничено тремя полями: у заказа в API нет полей для состава заказа,
 * доставки, оплаты и данных покупателя (подтверждено и документацией, и OPTIONS),
 * поэтому эти данные остаются на фронтенде (sessionStorage, страница подтверждения).
 * Аутентификации у раздела shop в документации нет.
 */

export async function createOrder(input: {
  number: string | number;
  subtotal: number;
  total: number;
}): Promise<ApiOrder> {
  return api.post<ApiOrder>("/orders/", input, { auth: false });
}
