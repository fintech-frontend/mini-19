"use client";

import { useState, type ReactNode } from "react";
import { Provider } from "react-redux";
import { makeStore } from "@/lib/store/store";

/**
 * Redux-провайдер (RTK Query) для клиентских хуков данных — см. lib/store/api.
 *
 * Стор создаётся через useState, а не в модуле: иначе при серверном рендере все
 * запросы всех пользователей делили бы один кэш. Провайдер оборачивает только
 * дерево клиентских компонентов — серверные страницы (`/about`, `/oplata`,
 * `/vopros-otvet` и остальные) как рендерились на сервере, так и рендерятся: они
 * приходят сюда готовым `children` и стор их не касается.
 */
export function Providers({ children }: { children: ReactNode }) {
  const [store] = useState(makeStore);

  return <Provider store={store}>{children}</Provider>;
}
