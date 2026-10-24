"use client";

import { Toaster as Sonner, toast as sonner } from "sonner";
import { currentLang, translate } from "@/lib/admin/i18n";
import { useTheme } from "@/lib/admin/theme";

type Kind = "ok" | "error" | "info";

/** msg — o'zbekcha kalit yoki allaqachon tarjima qilingan matn. */
export function toast(msg: string, kind: Kind = "ok") {
  const text = translate(currentLang(), msg);
  if (kind === "ok") sonner.success(text);
  else if (kind === "error") sonner.error(text);
  else sonner.info(text);
}

export function Toaster() {
  const { theme } = useTheme();
  return <Sonner theme={theme} richColors position="bottom-right" toastOptions={{ style: { fontFamily: "inherit", fontWeight: 500 } }} />;
}
