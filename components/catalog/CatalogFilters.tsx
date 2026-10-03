"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, X } from "lucide-react";

export interface PriceRange {
  min: number;
  max: number;
}

export interface FilterCategoryConfig {
  id: string;
  title: string;
  options: string[];
  selected: Set<string>;
  onToggle: (value: string) => void;
  /** Сколько опций показывать до нажатия "Показать все" */
  initialVisible?: number;
}

/* ---------- Группа чекбоксов (бренд, диаметр, материал и т.д.) ---------- */

function FilterGroup({ title, options, selected, onToggle, initialVisible = 6 }: FilterCategoryConfig) {
  const [expanded, setExpanded] = useState(false);
  if (options.length === 0) return null;

  const hasMore = options.length > initialVisible;
  const visibleOptions = expanded ? options : options.slice(0, initialVisible);

  return (
    <div className="border-b border-neutral-100 py-4">
      <h3 className="mb-2.5 text-sm font-bold text-neutral-900">{title}</h3>
      <div className="space-y-1.5">
        {visibleOptions.map((option) => (
          <label
            key={option}
            className="flex cursor-pointer items-center gap-2 text-[13px] text-neutral-600 hover:text-neutral-900"
          >
            <input
              type="checkbox"
              checked={selected.has(option)}
              onChange={() => onToggle(option)}
              className="h-3.5 w-3.5 shrink-0 rounded border-neutral-300 accent-blue-600"
            />
            <span className="truncate">{option}</span>
          </label>
        ))}
      </div>
      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline"
        >
          {expanded ? "Показать меньше" : "Показать все"}
          <ChevronDown size={13} className={expanded ? "rotate-180 transition-transform" : "transition-transform"} />
        </button>
      )}
    </div>
  );
}

/* ---------- Цена: интерактивный слайдер с двумя ручками ---------- */

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/** Текстовое поле цены: своё локальное состояние, чтобы не мешать вводу лишним "0" и не сбрасывать каретку. */
function PriceNumberField({
  label,
  value,
  min,
  max,
  onCommit,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onCommit: (next: number) => void;
}) {
  const [text, setText] = useState(String(value));
  const focused = useRef(false);

  useEffect(() => {
    if (!focused.current) setText(String(value));
  }, [value]);

  const sanitize = (raw: string) => raw.replace(/\D/g, "").replace(/^0+(?=\d)/, "");

  return (
    <label className="flex flex-1 items-center gap-1.5 rounded-lg bg-neutral-900 px-3 py-2">
      <span className="shrink-0 text-xs text-neutral-400">{label}</span>
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={text}
        onFocus={(e) => {
          focused.current = true;
          // Браузер сбрасывает выделение при mouseup ПОСЛЕ focus — откладываем select() на следующий кадр.
          const input = e.currentTarget;
          requestAnimationFrame(() => input.select());
        }}
        onChange={(e) => {
          const next = sanitize(e.target.value);
          setText(next);
          if (next !== "") onCommit(clamp(Number(next), min, max));
        }}
        onBlur={() => {
          focused.current = false;
          const fallback = text === "" ? value : clamp(Number(text), min, max);
          setText(String(fallback));
          onCommit(fallback);
        }}
        className="w-full min-w-0 bg-transparent text-sm font-semibold text-white outline-none"
      />
    </label>
  );
}

function PriceFilter({
  bounds,
  value,
  onChange,
}: {
  bounds: PriceRange;
  value: PriceRange;
  onChange: (range: PriceRange) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const span = Math.max(1, bounds.max - bounds.min);
  const leftPct = ((value.min - bounds.min) / span) * 100;
  const rightPct = ((value.max - bounds.min) / span) * 100;
  const step = Math.max(1, Math.round(span / 100));

  const valueFromClientX = (clientX: number): number => {
    const track = trackRef.current;
    if (!track) return bounds.min;
    const rect = track.getBoundingClientRect();
    const ratio = rect.width === 0 ? 0 : (clientX - rect.left) / rect.width;
    return Math.round(bounds.min + clamp(ratio, 0, 1) * span);
  };

  const dragMin = (clientX: number) => {
    const next = clamp(valueFromClientX(clientX), bounds.min, value.max);
    onChange({ min: next, max: value.max });
  };

  const dragMax = (clientX: number) => {
    const next = clamp(valueFromClientX(clientX), value.min, bounds.max);
    onChange({ min: value.min, max: next });
  };

  return (
    <div className="border-b border-neutral-100 py-4 first:pt-0">
      <h3 className="mb-2.5 text-sm font-bold text-neutral-900">Цена, ₽</h3>
      <div className="flex items-center gap-2">
        <PriceNumberField
          label="от"
          value={value.min}
          min={bounds.min}
          max={value.max}
          onCommit={(next) => onChange({ ...value, min: next })}
        />
        <PriceNumberField
          label="до"
          value={value.max}
          min={value.min}
          max={bounds.max}
          onCommit={(next) => onChange({ ...value, max: next })}
        />
      </div>

      <div ref={trackRef} className="relative mt-5 h-1 rounded-full bg-neutral-100">
        <div
          className="absolute inset-y-0 rounded-full bg-blue-600"
          style={{ left: `${leftPct}%`, right: `${100 - rightPct}%` }}
        />

        {/* Ручка "от" */}
        <div
          role="slider"
          tabIndex={0}
          aria-label="Минимальная цена"
          aria-valuemin={bounds.min}
          aria-valuemax={value.max}
          aria-valuenow={value.min}
          onPointerDown={(e) => {
            e.currentTarget.setPointerCapture(e.pointerId);
            dragMin(e.clientX);
          }}
          onPointerMove={(e) => {
            if (e.buttons !== 1) return;
            dragMin(e.clientX);
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") onChange({ min: clamp(value.min - step, bounds.min, value.max), max: value.max });
            if (e.key === "ArrowRight") onChange({ min: clamp(value.min + step, bounds.min, value.max), max: value.max });
          }}
          className="absolute -top-1.5 h-4 w-4 -translate-x-1/2 cursor-pointer touch-none rounded-full border-2 border-blue-600 bg-white shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
          style={{ left: `${leftPct}%` }}
        />

        {/* Ручка "до" */}
        <div
          role="slider"
          tabIndex={0}
          aria-label="Максимальная цена"
          aria-valuemin={value.min}
          aria-valuemax={bounds.max}
          aria-valuenow={value.max}
          onPointerDown={(e) => {
            e.currentTarget.setPointerCapture(e.pointerId);
            dragMax(e.clientX);
          }}
          onPointerMove={(e) => {
            if (e.buttons !== 1) return;
            dragMax(e.clientX);
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") onChange({ min: value.min, max: clamp(value.max - step, value.min, bounds.max) });
            if (e.key === "ArrowRight") onChange({ min: value.min, max: clamp(value.max + step, value.min, bounds.max) });
          }}
          className="absolute -top-1.5 h-4 w-4 -translate-x-1/2 cursor-pointer touch-none rounded-full border-2 border-blue-600 bg-white shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
          style={{ left: `${rightPct}%` }}
        />
      </div>
    </div>
  );
}

/* ---------- Активные фильтры (плашки со сбросом) ---------- */

function FilterChip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <button
      type="button"
      onClick={onRemove}
      className="flex w-full items-center justify-between gap-2 rounded-lg border border-neutral-200 px-3 py-2 text-left text-xs font-medium text-neutral-700 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
    >
      <span className="truncate">{label}</span>
      <X size={13} className="shrink-0" />
    </button>
  );
}

/* ---------- Основной компонент ---------- */

interface CatalogFiltersProps {
  priceBounds: PriceRange;
  price: PriceRange;
  onPriceChange: (range: PriceRange) => void;
  categories: FilterCategoryConfig[];
  activeFilterCount: number;
  onReset: () => void;
}

export default function CatalogFilters({
  priceBounds,
  price,
  onPriceChange,
  categories,
  activeFilterCount,
  onReset,
}: CatalogFiltersProps) {
  const isPriceActive = price.min !== priceBounds.min || price.max !== priceBounds.max;

  return (
    <aside className="w-full lg:w-64 shrink-0">
      <PriceFilter bounds={priceBounds} value={price} onChange={onPriceChange} />

      {categories.map((category) => (
        <FilterGroup key={category.id} {...category} />
      ))}

      {activeFilterCount > 0 && (
        <div className="space-y-2 pt-4">
          {isPriceActive && (
            <FilterChip
              label={`Цена: ${price.min.toLocaleString("ru-RU")}–${price.max.toLocaleString("ru-RU")} ₽`}
              onRemove={() => onPriceChange(priceBounds)}
            />
          )}
          <FilterChip label={`Сбросить фильтры (${activeFilterCount})`} onRemove={onReset} />
        </div>
      )}
    </aside>
  );
}
