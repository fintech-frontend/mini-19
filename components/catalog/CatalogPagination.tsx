"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

type PageItem = number | "ellipsis";

/** Строит список страниц с многоточием: 1 2 3 4 … 8 / 1 … 5 6 7 8 / 1 … 4 5 6 … 10 */
function getPageItems(current: number, total: number): PageItem[] {
  const EDGE = 4;

  if (total <= EDGE + 2) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  if (current <= EDGE) {
    const leading = Array.from({ length: EDGE }, (_, i) => i + 1);
    return [...leading, "ellipsis", total];
  }

  if (current > total - EDGE) {
    const trailing = Array.from({ length: EDGE }, (_, i) => total - EDGE + 1 + i);
    return [1, "ellipsis", ...trailing];
  }

  return [1, "ellipsis", current - 1, current, current + 1, "ellipsis", total];
}

export default function CatalogPagination({
  page,
  totalPages,
  onPageChange,
}: {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const items = getPageItems(page, totalPages);

  return (
    <nav className="mt-10 flex flex-wrap items-center justify-center gap-1.5 text-sm" aria-label="Пагинация">
      <button
        type="button"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className="flex items-center gap-1 rounded-lg border border-neutral-200 px-3 py-1.5 font-medium text-neutral-500 transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent"
      >
        <ChevronLeft size={15} /> Назад
      </button>

      {items.map((item, index) =>
        item === "ellipsis" ? (
          <span
            key={`ellipsis-${index}`}
            className="flex h-8 w-8 items-center justify-center text-neutral-400 select-none"
            aria-hidden="true"
          >
            …
          </span>
        ) : (
          <button
            key={item}
            type="button"
            aria-current={page === item ? "page" : undefined}
            onClick={() => onPageChange(item)}
            className={`h-8 w-8 rounded-lg border font-semibold transition-colors ${
              page === item
                ? "border-neutral-900 bg-neutral-900 text-white"
                : "border-neutral-200 text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            {item}
          </button>
        )
      )}

      <button
        type="button"
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        className="flex items-center gap-1 rounded-lg border border-neutral-200 px-3 py-1.5 font-medium text-neutral-500 transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent"
      >
        Далее <ChevronRight size={15} />
      </button>
    </nav>
  );
}
