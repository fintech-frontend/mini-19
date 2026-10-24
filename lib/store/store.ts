import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { baseApi } from "./api/baseApi";
import { adminApi } from "./api/adminApi";

/**
 * Фабрика стора, а не модульный синглтон: при серверном рендере Next.js иначе
 * делил бы один кэш между всеми пользователями. Экземпляр создаётся один раз на
 * клиенте в StoreProvider.
 */
export function makeStore() {
  const store = configureStore({
    reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      [adminApi.reducerPath]: adminApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware, adminApi.middleware),
  });
  setupListeners(store.dispatch);
  return store;
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
