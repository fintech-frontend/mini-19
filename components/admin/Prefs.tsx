"use client";

import { Moon, Sun } from "lucide-react";
import { LANGS, useI18n } from "@/lib/admin/i18n";
import { useTheme } from "@/lib/admin/theme";

export function LangSwitch() {
  const { lang, setLang } = useI18n();
  return (
    <div className="lang-switch" role="group" aria-label="Language">
      {LANGS.map((l) => (
        <button key={l.key} type="button" className={lang === l.key ? "on" : ""} aria-pressed={lang === l.key} onClick={() => setLang(l.key)}>
          {l.label}
        </button>
      ))}
    </div>
  );
}

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const { t } = useI18n();
  const label = theme === "dark" ? t("Yorug' rejim") : t("Qorong'i rejim");
  return (
    <button type="button" className="icon-btn" onClick={toggle} aria-label={label} title={label}>
      {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  );
}
