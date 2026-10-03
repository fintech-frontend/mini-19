"use client";

import { useState } from "react";
import { BarChart3, Heart } from "lucide-react";
import BuyOneClickButton from "@/components/ui/BuyOneClickButton";

/**
 * Правая колонка страницы товара: артикул, наличие, цена, корзина, быстрая покупка
 * и избранное/сравнение. Общая для всех категорий каталога.
 */
export default function ProductPurchaseCard({
  title,
  articul,
  price,
  oldPrice,
  inStock,
}: {
  title: string;
  articul?: string;
  price: number;
  oldPrice?: number;
  inStock: boolean;
}) {
  const [favorited, setFavorited] = useState(false);
  const [compared, setCompared] = useState(false);

  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm lg:col-span-3">
      <div className="mb-3 flex items-center justify-between text-xs text-neutral-400">
        <span>Артикул: {articul || "—"}</span>
        <span className={`flex items-center gap-1 font-medium ${inStock ? "text-green-600" : "text-red-500"}`}>
          {inStock ? "✓ В наличии" : "Нет в наличии"}
        </span>
      </div>

      <div className="mb-5 flex items-baseline gap-2">
        <span className="text-2xl font-black text-neutral-900">{price.toLocaleString("ru-RU")} ₽</span>
        {oldPrice && oldPrice > price && (
          <span className="text-sm text-neutral-400 line-through">{oldPrice.toLocaleString("ru-RU")} ₽</span>
        )}
      </div>

      <div className="space-y-2.5">
        <button
          type="button"
          disabled={!inStock}
          className={`w-full rounded-lg px-4 py-3 text-sm font-bold shadow-sm transition-all duration-150 ${
            inStock
              ? "bg-blue-600 text-white hover:bg-blue-700 active:scale-[0.98]"
              : "cursor-not-allowed bg-neutral-200 text-neutral-400"
          }`}
        >
          ДОБАВИТЬ В КОРЗИНУ
        </button>

        <BuyOneClickButton product={{ title }} disabled={!inStock} />
      </div>

      <div className="mt-5 flex justify-around border-t border-neutral-100 pt-4 text-xs font-medium text-neutral-600">
        <button
          type="button"
          aria-pressed={favorited}
          onClick={() => setFavorited((v) => !v)}
          className={`flex items-center gap-1.5 transition-colors ${
            favorited ? "text-red-500" : "hover:text-blue-600"
          }`}
        >
          <Heart size={15} fill={favorited ? "currentColor" : "none"} />
          {favorited ? "В избранном" : "В избранное"}
        </button>
        <button
          type="button"
          aria-pressed={compared}
          onClick={() => setCompared((v) => !v)}
          className={`flex items-center gap-1.5 transition-colors ${
            compared ? "text-blue-600" : "hover:text-blue-600"
          }`}
        >
          <BarChart3 size={15} />
          {compared ? "В сравнении" : "Сравнить"}
        </button>
      </div>
    </div>
  );
}
