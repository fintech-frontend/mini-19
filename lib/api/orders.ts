import { api } from "./client";
import { fetchAllPages } from "./paginate";
import type { ApiOrder } from "@/types/api";
import type { Order, OrderStatus } from "@/types/account";

/**
 * Эндпоинты заказов по документации Postman (раздел shop/orders):
 *   GET  {{url}}/orders   — список
 *   POST {{url}}/orders/  — создание, тело { number, subtotal, total }
 *
 * PATCH/DELETE для заказа в документации НЕ описаны: записи "update" и "delete"
 * в папке orders указывают на /cart-items/1/ и /cart-items/2/, то есть дублируют
 * cart-items. Поэтому функций изменения/удаления заказа здесь нет.
 *
 * У заказа в API нет полей для состава заказа, доставки, оплаты и данных
 * покупателя (подтверждено и документацией, и OPTIONS), поэтому эти данные
 * остаются на фронтенде (sessionStorage, страница подтверждения). Есть
 * необязательное записываемое поле `user` (OPTIONS /orders/).
 *
 * ВАЖНО: GET /orders/ отдаёт ВСЕ заказы магазина, без фильтра по пользователю
 * (проверено живым запросом). Поэтому заказы текущего пользователя отбираем по
 * полю `user` — см. listUserOrders.
 */

export async function createOrder(input: {
  number: string | number;
  subtotal: number;
  total: number;
  /** id пользователя — передаём, если покупатель авторизован, чтобы заказ попал в его кабинет. */
  user?: number;
}): Promise<ApiOrder> {
  return api.post<ApiOrder>("/orders/", input, { auth: false });
}

/** Заказы конкретного пользователя (новые сверху). */
export async function listUserOrders(userId: number): Promise<ApiOrder[]> {
  const all = await fetchAllPages<ApiOrder>("/orders/");
  return all
    .filter((order) => order.user === userId)
    .sort((a, b) => b.created_at.localeCompare(a.created_at));
}

/**
 * Статус бэкенда — свободная строка (choices в OPTIONS не заданы); в данных
 * встречается только "pending". Сводим к трём статусам UI кабинета.
 */
function mapOrderStatus(status: string): OrderStatus {
  const normalized = status.toLowerCase();
  if (["completed", "complete", "done", "delivered", "paid"].includes(normalized)) return "completed";
  if (["cancelled", "canceled", "rejected"].includes(normalized)) return "cancelled";
  return "processing";
}

/** Ответ API → строка таблицы заказов в кабинете (types/account.ts). */
export function toAccountOrder(order: ApiOrder): Order {
  return {
    number: `#${order.number}`,
    date: new Date(order.created_at).toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    status: mapOrderStatus(order.status),
    total: Number.parseFloat(order.total) || 0,
  };
}
