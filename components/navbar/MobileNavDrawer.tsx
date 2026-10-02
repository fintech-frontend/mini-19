"use client";

import { useEffect, type ReactNode } from "react";
import Link from "next/link";
import { Gift, X } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

/**
 * Мобильное боковое меню как на stroiopttorg.ru: «бургер» в верхней тёмной строке
 * выдвигает слева панель со ссылками на разделы сайта, контактами и кнопкой
 * «Заказать звонок». Закрывается крестиком, кликом по затемнению, Escape
 * (обрабатывается в шапке) и при переходе на другую страницу.
 */
export function MobileNavDrawer({
  open,
  onClose,
  links,
  footer,
}: {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
  footer?: ReactNode;
}) {
  // Пока меню открыто, страница под ним не прокручивается.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <div className={`fixed inset-0 z-50 md:hidden ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-[#011120]/70 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
      />

      <nav
        role="dialog"
        aria-modal="true"
        aria-label="Меню"
        inert={!open}
        className={`absolute inset-y-0 left-0 flex w-[92%] max-w-[345px] flex-col bg-white shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
          <span className="text-xl font-bold text-neutral-900">Меню</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть меню"
            className="flex h-8 w-8 items-center justify-center rounded bg-blue-50 text-blue-700 transition-colors hover:bg-blue-100"
          >
            <X size={16} />
          </button>
        </div>

        <ul className="flex-1 overflow-y-auto">
          <li>
            <Link
              href="/stocks"
              onClick={onClose}
              className="flex items-center gap-3 border-b border-neutral-200 px-5 py-4 text-sm font-semibold uppercase text-neutral-900 active:bg-neutral-50"
            >
              <Gift size={20} />
              Все акции
            </Link>
          </li>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className="block border-b border-neutral-200 px-5 py-4 text-sm font-medium uppercase text-neutral-900 transition-colors hover:text-blue-600 active:bg-neutral-50"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {footer ? <div className="border-t border-neutral-200 px-5 py-5">{footer}</div> : null}
      </nav>
    </div>
  );
}
