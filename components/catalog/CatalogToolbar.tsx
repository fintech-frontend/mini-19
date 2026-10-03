"use client";

import { PER_PAGE_OPTIONS, PerPageValue, SORT_OPTIONS, SortValue } from "@/lib/catalog/list-controls";

export default function CatalogToolbar({
  sort,
  onSortChange,
  perPage,
  onPerPageChange,
}: {
  sort: SortValue;
  onSortChange: (sort: SortValue) => void;
  perPage: PerPageValue;
  onPerPageChange: (perPage: PerPageValue) => void;
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 border-b border-neutral-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2 text-sm">
        <span className="shrink-0 text-neutral-500">Сортировка:</span>
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value as SortValue)}
          className="cursor-pointer rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-800 focus:border-blue-500 focus:outline-none"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <span className="text-neutral-500">Показывать по:</span>
        <div className="flex items-center gap-1">
          {PER_PAGE_OPTIONS.map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => onPerPageChange(n)}
              className={`h-7 w-8 rounded-md text-xs font-semibold transition-colors ${
                perPage === n ? "bg-blue-600 text-white" : "text-neutral-500 hover:bg-neutral-100"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
