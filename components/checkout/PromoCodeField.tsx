"use client";

import { useState } from "react";
import { promoCodes } from "@/data/checkout-data";

interface PromoCodeFieldProps {
  onApply: (code: string, discountPercent: number) => void;
  onClear: () => void;
  appliedCode: string | null;
}

export function PromoCodeField({ onApply, onClear, appliedCode }: PromoCodeFieldProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleApply() {
    const trimmed = code.trim().toUpperCase();
    if (!trimmed) return;
    const discount = promoCodes[trimmed];
    if (!discount) {
      setError("Такого промокода не существует");
      return;
    }
    setError(null);
    onApply(trimmed, discount);
  }

  function handleRemove() {
    setCode("");
    setError(null);
    setIsOpen(false);
    onClear();
  }

  if (appliedCode) {
    return (
      <div className="flex items-center justify-between rounded-lg bg-blue-50 px-4 py-3 text-sm">
        <span className="text-blue-700">
          Промокод <span className="font-semibold">{appliedCode}</span> применён
        </span>
        <button
          type="button"
          onClick={handleRemove}
          className="text-xs font-medium text-blue-600 underline-offset-2 hover:underline"
        >
          Убрать
        </button>
      </div>
    );
  }

  if (!isOpen) {
    return (
      <div className="rounded-lg bg-neutral-50 px-4 py-3 text-sm text-neutral-600">
        Есть промокод?{" "}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="font-medium text-blue-600 underline-offset-2 hover:underline"
        >
          Нажмите здесь, чтобы ввести его
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-neutral-50 p-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
            if (error) setError(null);
          }}
          placeholder="Введите промокод"
          className={`w-full rounded-lg border px-3 py-2 text-sm uppercase outline-none ${
            error
              ? "border-red-400 text-red-500 focus:border-red-500"
              : "border-neutral-300 text-neutral-800 focus:border-blue-500"
          }`}
        />
        <button
          type="button"
          onClick={handleApply}
          className="shrink-0 rounded-lg bg-neutral-200 px-4 text-xs font-bold uppercase tracking-wider text-neutral-500 transition-colors hover:bg-neutral-300 hover:text-neutral-700"
        >
          Применить
        </button>
      </div>
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}
