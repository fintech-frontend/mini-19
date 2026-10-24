import { baseApi, fetchAllPages } from "./baseApi";
import type { ApiOrder } from "@/types/api";
import type { Order, OrderStatus } from "@/types/account";

/**
 * Заказы (раздел shop/orders): GET /orders/, POST /orders/ и PATCH /orders/:id/.
 * PATCH в документации не описан, но сервер его принимает (OPTIONS /orders/:id/ →
 * GET, PUT, PATCH, DELETE) — им админка меняет статус.
 *
 * В API у заказа только number/subtotal/total/status/user — состав, доставка и
 * покупатель хранятся на фронтенде (sessionStorage, страница подтверждения).
 * GET /orders/ отдаёт ВСЕ заказы магазина, поэтому отбираем по полю `user`.
 */

export interface CreateOrderInput {
  number: string | number;
  subtotal: number;
  total: number;
  /** id авторизованного покупателя — чтобы заказ попал в его кабинет. */
  user?: number;
}

/** Статус бэкенда — свободная строка; сводим к трём статусам кабинета. */
function toOrderStatus(status: string): OrderStatus {
  const normalized = status.toLowerCase();
  if (["completed", "complete", "done", "delivered", "paid"].includes(normalized)) return "completed";
  if (["cancelled", "canceled", "rejected"].includes(normalized)) return "cancelled";
  return "processing";
}

function toAccountOrder(order: ApiOrder): Order {
  return {
    number: `#${order.number}`,
    date: new Date(order.created_at).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" }),
    status: toOrderStatus(order.status),
    total: Number.parseFloat(order.total) || 0,
  };
}

const ORDERS = { type: "Order", id: "LIST" } as const;

export const ordersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    /** Все заказы магазина как есть (для админки), новые сверху. */
    getOrders: build.query<ApiOrder[], void>({
      queryFn: async (_arg, _api, _extra, baseQuery) => {
        const result = await fetchAllPages<ApiOrder>(baseQuery, "/orders/");
        if ("error" in result) return result;
        return { data: [...result.data].sort((a, b) => b.created_at.localeCompare(a.created_at)) };
      },
      providesTags: [ORDERS],
    }),

    updateOrderStatus: build.mutation<ApiOrder, { id: number; status: string }>({
      query: ({ id, status }) => ({ url: `/orders/${id}/`, method: "PATCH", body: { status } }),
      invalidatesTags: (result) => [ORDERS, ...(result?.user != null ? [{ type: "Order" as const, id: result.user }] : [])],
    }),

    /** Заказы пользователя для кабинета, новые сверху. */
    getUserOrders: build.query<Order[], number>({
      queryFn: async (userId, _api, _extra, baseQuery) => {
        const result = await fetchAllPages<ApiOrder>(baseQuery, "/orders/");
        if ("error" in result) return result;

        const orders = result.data
          .filter((order) => order.user === userId)
          .sort((a, b) => b.created_at.localeCompare(a.created_at))
          .map(toAccountOrder);
        return { data: orders };
      },
      providesTags: (_result, _error, userId) => [{ type: "Order", id: userId }],
    }),

    createOrder: build.mutation<ApiOrder, CreateOrderInput>({
      query: (body) => ({ url: "/orders/", method: "POST", body }),
      invalidatesTags: (_result, _error, { user }) => [ORDERS, ...(user != null ? [{ type: "Order" as const, id: user }] : [])],
    }),
  }),
});

export const { useGetOrdersQuery, useUpdateOrderStatusMutation, useGetUserOrdersQuery, useCreateOrderMutation } = ordersApi;
