import {
  createApi,
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { clearAuthTokens, getAccessToken } from "./token";
import type { ListResponse } from "@/types/api";

/**
 * Базовый URL backend API: NEXT_PUBLIC_API_URL, иначе тестовый сервер из ТЗ.
 * DRF-роутер живёт под "/api/" (запросы на голый хост отдают 404).
 */
export const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL ?? "http://16.170.163.62/api").replace(/\/+$/, "");

/** `auth: true` — прикрепить Bearer-токен. Раздел shop в документации без аутентификации. */
export interface ApiExtraOptions {
  auth?: boolean;
}

export type ApiBaseQuery = BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, ApiExtraOptions>;

const rawBaseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  // JSON — если сервер так сказал, иначе текст (например, HTML-страница 404 от nginx).
  responseHandler: "content-type",
  prepareHeaders: (headers) => {
    headers.set("Accept", "application/json");
    return headers;
  },
});

/**
 * SimpleJWT отвечает 401 на просроченный токен, а refresh-эндпоинта у бэкенда нет —
 * поэтому на 401 токен сбрасываем, чтобы пользователь вошёл заново.
 */
const baseQuery: ApiBaseQuery = async (args, api, extraOptions = {}) => {
  const request = typeof args === "string" ? { url: args } : args;
  const token = extraOptions.auth ? getAccessToken() : null;

  const result = await rawBaseQuery(
    token ? { ...request, headers: { Authorization: `Bearer ${token}` } } : request,
    api,
    extraOptions
  );

  if (result.error?.status === 401 && token) clearAuthTokens();
  return result;
};

const PAGE_SIZE = 100;

type QueryResult = { data?: unknown; error?: FetchBaseQueryError };
type QueryRunner = (args: string | FetchArgs) => QueryResult | PromiseLike<QueryResult>;

/**
 * Списки бэкенд отдаёт постранично (`{count, pages, results}`), а фильтров/поиска
 * не поддерживает — работают только `?page` и `?page_size`. Поэтому коллекцию
 * собираем целиком крупными страницами (обычно это один запрос) и фильтруем на клиенте.
 */
export async function fetchAllPages<T>(
  runQuery: QueryRunner,
  url: string
): Promise<{ data: T[] } | { error: FetchBaseQueryError }> {
  const items: T[] = [];

  for (let page = 1; ; page += 1) {
    const { data, error } = await runQuery({ url, params: { page_size: PAGE_SIZE, ...(page > 1 && { page }) } });
    if (error) return { error };

    const list = data as ListResponse<T>;
    if (Array.isArray(list)) return { data: list };

    items.push(...list.results);
    if (page >= list.pages) return { data: items };
  }
}

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["Product", "Category", "Brand", "Cart", "CartItem", "Order"],
  // Каталог небольшой и меняется редко — держим данные 5 минут.
  keepUnusedDataFor: 5 * 60,
  endpoints: () => ({}),
});
