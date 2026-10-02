"use client";

import { useState, type MouseEvent, type ReactNode } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Loader2, Menu, X } from "lucide-react";
import { styles } from "@/styles/index.styles";
import { useCategoryTree } from "@/hooks/useCategoryTree";
import type { CategoryTreeNode } from "@/lib/api/categoryTree";

/**
 * Кнопка «Каталог» как на stroiopttorg.ru: не ссылка, а переключатель выпадающего
 * мега-меню. В открытом состоянии кнопка темнеет, а «бургер» меняется на крестик.
 */
export function CatalogButton({
  open,
  onToggle,
  className = "",
}: {
  open: boolean;
  onToggle: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-haspopup="menu"
      className={`${className} flex shrink-0 items-center gap-2 rounded-lg border border-blue-600 px-5 text-xs font-bold uppercase tracking-wider text-white transition-colors 2xl:gap-3 2xl:px-[30px] 2xl:text-sm ${
        open ? "bg-[#011120] hover:bg-[#011120]" : "bg-blue-600 hover:bg-blue-700"
      }`}
    >
      {open ? <X size={18} className="2xl:size-5" /> : <Menu size={18} className="2xl:size-5" />}
      КАТАЛОГ
    </button>
  );
}

const CATALOG_BASE = "/catalog";

function categoryHref(path: CategoryTreeNode[]): string {
  return `${CATALOG_BASE}/${path.map((node) => node.slug).join("/")}`;
}

/** Затемнение страницы под меню: клик мимо панели закрывает каталог. */
function Backdrop({ onClose, children }: { onClose: () => void; children: ReactNode }) {
  function handleClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) onClose();
  }
  return (
    <div onClick={handleClick} className="absolute inset-x-0 top-full z-40 h-screen bg-neutral-900/30">
      {children}
    </div>
  );
}

function MenuStatus({ isLoading, errorMessage, empty, onRetry }: {
  isLoading: boolean;
  errorMessage: string | null;
  empty: boolean;
  onRetry: () => void;
}) {
  if (isLoading) {
    return (
      <div className="flex items-center gap-2 px-4 py-6 text-sm text-neutral-500">
        <Loader2 size={16} className="animate-spin" /> Загрузка каталога…
      </div>
    );
  }
  if (errorMessage) {
    return (
      <div className="px-4 py-6 text-sm text-red-600">
        {errorMessage}{" "}
        <button type="button" onClick={onRetry} className="font-semibold text-blue-600 underline">
          Повторить
        </button>
      </div>
    );
  }
  if (empty) return <p className="px-4 py-6 text-sm text-neutral-500">В каталоге пока нет категорий.</p>;
  return null;
}

/** Строка списка: активная (под курсором) подсвечивается синим, как в эталоне. */
function MenuRow({
  href,
  label,
  hasChildren,
  active,
  upper,
  onHover,
  onNavigate,
}: {
  href: string;
  label: string;
  hasChildren: boolean;
  active: boolean;
  upper?: boolean;
  onHover: () => void;
  onNavigate: () => void;
}) {
  return (
    <li>
      <Link
        href={href}
        onMouseEnter={onHover}
        onFocus={onHover}
        onClick={onNavigate}
        className={`flex min-h-[42px] items-center justify-between gap-3 border-b border-neutral-100 px-4 py-2.5 transition-colors 2xl:min-h-[50px] 2xl:px-5 ${
          upper ? "text-xs font-medium uppercase 2xl:text-[13px]" : "text-sm 2xl:text-[15px]"
        } ${active ? "bg-blue-600 text-white" : "text-neutral-900 hover:bg-neutral-50"}`}
      >
        <span>{label}</span>
        {hasChildren ? (
          <ChevronRight size={14} className={active ? "text-white" : "text-neutral-400"} />
        ) : null}
      </Link>
    </li>
  );
}

/** Десктоп: колонки «раздел → подраздел → подподраздел», раскрываются при наведении. */
export function DesktopCatalogMenu({ onClose }: { onClose: () => void }) {
  const { tree, isLoading, errorMessage, refetch } = useCategoryTree();
  const [activeRoot, setActiveRoot] = useState<CategoryTreeNode | null>(null);
  const [activeChild, setActiveChild] = useState<CategoryTreeNode | null>(null);

  return (
    <Backdrop onClose={onClose}>
      <div className="bg-neutral-50 shadow-[0_9px_15px_rgba(0,0,0,0.09)]" role="menu">
        <div
          className={`${styles.container} flex max-h-[calc(100vh-200px)] items-start gap-4 py-4 2xl:gap-5 2xl:py-5`}
          onMouseLeave={() => setActiveChild(null)}
        >
          <ul className="max-h-[inherit] w-[260px] shrink-0 overflow-y-auto bg-white xl:w-[300px] 2xl:w-[340px]">
            <MenuStatus isLoading={isLoading} errorMessage={errorMessage} empty={tree.length === 0} onRetry={refetch} />
            {tree.map((root) => (
              <MenuRow
                key={root.id}
                href={categoryHref([root])}
                label={root.name}
                hasChildren={root.children.length > 0}
                active={activeRoot?.id === root.id}
                upper
                onHover={() => {
                  setActiveRoot(root);
                  setActiveChild(null);
                }}
                onNavigate={onClose}
              />
            ))}
          </ul>

          {activeRoot && activeRoot.children.length > 0 ? (
            <ul className="max-h-[inherit] w-[260px] shrink-0 overflow-y-auto bg-white xl:w-[300px] 2xl:w-[340px]">
              {activeRoot.children.map((child) => (
                <MenuRow
                  key={child.id}
                  href={categoryHref([activeRoot, child])}
                  label={child.name}
                  hasChildren={child.children.length > 0}
                  active={activeChild?.id === child.id}
                  onHover={() => setActiveChild(child)}
                  onNavigate={onClose}
                />
              ))}
            </ul>
          ) : null}

          {activeRoot && activeChild && activeChild.children.length > 0 ? (
            <ul className="max-h-[inherit] w-[260px] shrink-0 overflow-y-auto bg-white xl:w-[300px] 2xl:w-[340px]">
              {activeChild.children.map((leaf) => (
                <MenuRow
                  key={leaf.id}
                  href={categoryHref([activeRoot, activeChild, leaf])}
                  label={leaf.name}
                  hasChildren={false}
                  active={false}
                  onHover={() => {}}
                  onNavigate={onClose}
                />
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </Backdrop>
  );
}

/** Мобильный вариант: наведения нет, поэтому разделы открываются «вглубь» по тапу. */
export function MobileCatalogMenu({ onClose }: { onClose: () => void }) {
  const { tree, isLoading, errorMessage, refetch } = useCategoryTree();
  const [path, setPath] = useState<CategoryTreeNode[]>([]);
  const current = path.at(-1);
  const items = current ? current.children : tree;

  return (
    <Backdrop onClose={onClose}>
      <div className="max-h-[70vh] overflow-y-auto bg-white shadow-[0_9px_15px_rgba(0,0,0,0.09)]" role="menu">
        {current ? (
          <div className="sticky top-0 flex items-center gap-2 border-b border-neutral-200 bg-white px-3 py-3">
            <button
              type="button"
              onClick={() => setPath(path.slice(0, -1))}
              aria-label="Назад"
              className="flex items-center text-neutral-600"
            >
              <ChevronLeft size={20} />
            </button>
            <Link href={categoryHref(path)} onClick={onClose} className="text-sm font-bold uppercase text-blue-600">
              {current.name}
            </Link>
          </div>
        ) : null}

        <MenuStatus isLoading={isLoading} errorMessage={errorMessage} empty={!current && tree.length === 0} onRetry={refetch} />

        <ul>
          {items.map((node) => (
            <li key={node.id}>
              {node.children.length > 0 ? (
                <button
                  type="button"
                  onClick={() => setPath([...path, node])}
                  className="flex w-full items-center justify-between gap-3 border-b border-neutral-100 px-4 py-3 text-left text-xs font-medium uppercase text-neutral-900 active:bg-blue-600 active:text-white"
                >
                  {node.name}
                  <ChevronRight size={14} className="text-neutral-400" />
                </button>
              ) : (
                <Link
                  href={categoryHref([...path, node])}
                  onClick={onClose}
                  className="block border-b border-neutral-100 px-4 py-3 text-xs font-medium uppercase text-neutral-900 active:bg-blue-600 active:text-white"
                >
                  {node.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Backdrop>
  );
}
