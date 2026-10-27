"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import { AuthProvider } from "@/lib/admin/auth";
import { I18nProvider } from "@/lib/admin/i18n";
import { ThemeProvider } from "@/lib/admin/theme";
import { Toaster } from "./toast";

const subscribe = () => () => {};

/**
 * Admin panel provayderlari. Panel faqat brauzerda chiziladi: til, tema va
 * sessiya localStorage/sessionStorage'da, server render'da ularni bilib bo'lmaydi
 * (gidratsiya farqi bo'lmasligi uchun serverda hech narsa chizilmaydi).
 */
export function AdminApp({ children }: { children: ReactNode }) {
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  if (!mounted) return null;

  return (
    <ThemeProvider>
      <I18nProvider>
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </I18nProvider>
    </ThemeProvider>
  );
}
