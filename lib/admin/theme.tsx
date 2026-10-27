"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Theme = "light" | "dark";
export const THEME_KEY = "stroy_admin_theme";

/**
 * <html data-theme> ni gidratsiyadan oldin qo'yadigan inline skript (admin layout'da) —
 * aks holda qorong'i rejimda sahifa bir lahza yorug' ko'rinadi.
 */
export const themeInitScript = `try{var t=localStorage.getItem("${THEME_KEY}");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t}catch(e){}`;

function initial(): Theme {
  const t = document.documentElement.dataset.theme;
  return t === "dark" ? "dark" : "light";
}

const Ctx = createContext<{ theme: Theme; toggle: () => void } | null>(null);

export function useTheme() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(initial);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  const toggle = () =>
    setTheme((t) => {
      const n = t === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(THEME_KEY, n);
      } catch {
        /* ignore */
      }
      return n;
    });
  return <Ctx.Provider value={{ theme, toggle }}>{children}</Ctx.Provider>;
}

/** Recharts SVG atributlarida CSS o'zgaruvchi ishlamaydi, shuning uchun JS ranglari. */
export function useChartColors() {
  const { theme } = useTheme();
  const dark = theme === "dark";
  return {
    primary: dark ? "#6aa7ff" : "#012F91",
    accent: dark ? "#ff5a57" : "#EE0906",
    grid: dark ? "#223250" : "#e3e8ef",
    axis: dark ? "#94a3bb" : "#667085",
    series: dark ? ["#6aa7ff", "#3ddc84", "#ff5a57", "#a3afc2"] : ["#012F91", "#1D6FE8", "#EE0906", "#8792A2"],
    tooltipBg: dark ? "#111d33" : "#ffffff",
  };
}
