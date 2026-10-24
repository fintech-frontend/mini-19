/**
 * Единственный API-слой приложения — RTK Query.
 *
 *   client: import { useGetProductsQuery } from "@/lib/store/api";
 *   server: const { data } = await serverQuery(catalogApi.endpoints.getProducts.initiate());
 */
export { baseApi, API_BASE_URL } from "./baseApi";
export { getErrorMessage, getErrorStatus } from "./errors";
export * from "./token";
export * from "./authApi";
export * from "./catalogApi";
export * from "./cartApi";
export * from "./ordersApi";
export * from "./contentApi";
export * from "./adminApi";
