import { cache } from "react";
import type { ThunkAction, UnknownAction } from "@reduxjs/toolkit";
import { makeStore, type RootState } from "./store";

/** Один стор на серверный запрос: эндпоинты, вызванные в разных компонентах страницы, делят кэш. */
const getRequestStore = cache(makeStore);

/**
 * Выполняет запрос RTK Query в серверном компоненте и возвращает `{ data, error }` —
 * тот же результат, что отдаёт хук на клиенте.
 *
 *   const { data, error } = await serverQuery(catalogApi.endpoints.getProducts.initiate());
 */
export async function serverQuery<Result>(
  action: ThunkAction<PromiseLike<Result>, RootState, unknown, UnknownAction>
): Promise<Result> {
  return getRequestStore().dispatch(action);
}
