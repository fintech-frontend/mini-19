"use client";

import { useState, type ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/**
 * Провайдер React Query для клиентских хуков данных (см. hooks/useProductSearch.ts).
 *
 * QueryClient создаётся через useState, а не в модуле: иначе при серверном рендере
 * все запросы всех пользователей делили бы один кэш. Провайдер оборачивает только
 * дерево клиентских компонентов — серверные страницы (`/about`, `/oplata`,
 * `/vopros-otvet` и остальные) как рендерились на сервере, так и рендерятся: они
 * приходят сюда готовым `children` и React Query их не касается.
 */
export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            /**
             * Каталог бэкенда небольшой и меняется редко, а поиск фильтрует уже
             * загруженный список (у API нет серверного поиска — см. lib/api/products.ts).
             * Поэтому держим данные свежими 5 минут: переход между запросами и
             * возврат на страницу результатов не дёргают сеть заново.
             */
            staleTime: 5 * 60 * 1000,
            gcTime: 10 * 60 * 1000,
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      })
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
