"use client";

import { createContext, useCallback, useContext, useEffect, useState, Fragment, type ReactNode } from "react";
import { DICT } from "./dict";

export type Lang = "uz" | "ru" | "en";
export const LANGS: { key: Lang; label: string }[] = [
  { key: "uz", label: "UZ" },
  { key: "ru", label: "RU" },
  { key: "en", label: "EN" },
];

const KEY = "stroy_admin_lang";

/** format.ts kabi React'dan tashqari kod ham joriy tilni biladi */
let current: Lang = "uz";
export const currentLang = () => current;

function initial(): Lang {
  try {
    const s = localStorage.getItem(KEY);
    if (s === "uz" || s === "ru" || s === "en") return s;
  } catch {
    /* localStorage yo'q bo'lishi mumkin */
  }
  const nav = navigator.language?.slice(0, 2);
  return nav === "ru" ? "ru" : nav === "en" ? "en" : "uz";
}

/** Kalit — o'zbekcha matn. Tarjima topilmasa o'zbekcha matnning o'zi qaytadi. */
export function translate(lang: Lang, key: string, vars?: Record<string, string | number>): string {
  const entry = DICT[key];
  let s = lang === "uz" || !entry ? key : (entry[lang] ?? key);
  if (vars) for (const k in vars) s = s.split(`{${k}}`).join(String(vars[k]));
  return s;
}

type T = (key: string, vars?: Record<string, string | number>) => string;
interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: T;
}
const I18n = createContext<Ctx | null>(null);

export function useI18n(): Ctx {
  const ctx = useContext(I18n);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

/** Faqat client'da (AdminApp mount bo'lgach) render qilinadi — localStorage'ni darrov o'qiydi. */
export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const l = initial();
    current = l;
    return l;
  });
  const setLang = useCallback((l: Lang) => {
    current = l;
    try {
      localStorage.setItem(KEY, l);
    } catch {
      /* ignore */
    }
    setLangState(l);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  const t = useCallback<T>((key, vars) => translate(lang, key, vars), [lang]);
  // Til o'zgarganda butun daraxt qayta quriladi (format.ts dagi sana/pul ham yangilanadi)
  return (
    <I18n.Provider value={{ lang, setLang, t }}>
      <Fragment key={lang}>{children}</Fragment>
    </I18n.Provider>
  );
}
