import { baseApi, fetchAllPages } from "./baseApi";
import type { ApiCart, ApiCartItem } from "@/types/api";

/**
 * Корзина (разделы shop/carts и shop/cart-items, без аутентификации).
 *
 * GET /carts/:id/ не описан в документации, но работает: отдаёт корзину с
 * вложенными items, для удалённой корзины — 404.
 *
 * Мутации кэш не инвалидируют: состоянием корзины владеет ShopContext — он
 * применяет изменения оптимистично и сам откатывает их при ошибке.
 */

export interface AddCartItemInput {
  cart: number;
  product_id: number;
  quantity?: number;
}

export const cartApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCart: build.query<ApiCart, number>({
      query: (id) => `/carts/${id}/`,
      providesTags: (_result, _error, id) => [{ type: "Cart", id }],
    }),

    createCart: build.mutation<ApiCart, void>({
      query: () => ({ url: "/carts/", method: "POST" }),
    }),

    deleteCart: build.mutation<void, number>({
      query: (id) => ({ url: `/carts/${id}/`, method: "DELETE" }),
    }),

    /** Фильтра "по корзине" у /cart-items/ нет — отбираем на клиенте. */
    getCartItems: build.query<ApiCartItem[], number>({
      queryFn: async (cartId, _api, _extra, baseQuery) => {
        const result = await fetchAllPages<ApiCartItem>(baseQuery, "/cart-items/");
        if ("error" in result) return result;
        return { data: result.data.filter((item) => item.cart === cartId) };
      },
      providesTags: (_result, _error, cartId) => [{ type: "CartItem", id: cartId }],
    }),

    /** `price` позиции read-only — сервер берёт цену товара сам. */
    addCartItem: build.mutation<ApiCartItem, AddCartItemInput>({
      query: (body) => ({ url: "/cart-items/", method: "POST", body }),
    }),

    updateCartItemQuantity: build.mutation<ApiCartItem, { id: number; quantity: number }>({
      query: ({ id, quantity }) => ({ url: `/cart-items/${id}/`, method: "PATCH", body: { quantity } }),
    }),

    removeCartItem: build.mutation<void, number>({
      query: (id) => ({ url: `/cart-items/${id}/`, method: "DELETE" }),
    }),
  }),
});

export const {
  useGetCartQuery,
  useLazyGetCartQuery,
  useCreateCartMutation,
  useDeleteCartMutation,
  useGetCartItemsQuery,
  useAddCartItemMutation,
  useUpdateCartItemQuantityMutation,
  useRemoveCartItemMutation,
} = cartApi;
