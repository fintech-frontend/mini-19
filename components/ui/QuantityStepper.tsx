"use client";

import { Minus, Plus } from "lucide-react";

interface QuantityStepperProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

/** Выбор количества «− 1 +» перед добавлением товара в корзину. */
export default function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 999,
  className = "",
}: QuantityStepperProps) {
  const clamp = (n: number) => Math.min(max, Math.max(min, n));

  return (
    <div
      className={`inline-flex h-10 items-stretch overflow-hidden rounded-lg border border-neutral-200 bg-white ${className}`}
    >
      <button
        type="button"
        aria-label="Уменьшить количество"
        disabled={value <= min}
        onClick={() => onChange(clamp(value - 1))}
        className="flex w-9 items-center justify-center text-neutral-600 transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:text-neutral-300 disabled:hover:bg-transparent"
      >
        <Minus size={15} />
      </button>
      <input
        type="text"
        inputMode="numeric"
        aria-label="Количество"
        value={value}
        onChange={(event) => {
          const digits = event.target.value.replace(/\D/g, "");
          onChange(digits ? clamp(Number(digits)) : min);
        }}
        className="w-10 min-w-0 border-x border-neutral-200 bg-transparent text-center text-sm font-semibold text-neutral-900 focus:outline-none"
      />
      <button
        type="button"
        aria-label="Увеличить количество"
        disabled={value >= max}
        onClick={() => onChange(clamp(value + 1))}
        className="flex w-9 items-center justify-center text-neutral-600 transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:text-neutral-300 disabled:hover:bg-transparent"
      >
        <Plus size={15} />
      </button>
    </div>
  );
}
