"use client";

import { useSyncExternalStore } from "react";
import { isAuthenticated, subscribeAuth } from "@/lib/store/api";

/**
 * Вошёл ли покупатель. На сервере и до гидрации — false (токен лежит в localStorage),
 * после — актуальное значение; обновляется при входе/выходе в любой вкладке.
 */
export function useIsLoggedIn(): boolean {
  return useSyncExternalStore(subscribeAuth, isAuthenticated, () => false);
}
