"use client";

import { useShop } from "@/context/ShopContext";

export default function ProductFavoriteCompareButtons({ productId }: { productId: string }) {
  const { isFavorite, toggleFavorite, isInCompare, toggleCompare } = useShop();

  const favorite = isFavorite(productId);
  const compared = isInCompare(productId);

  return (
    <div className="flex justify-around border-t border-gray-100 mt-5 pt-4 text-xs font-medium text-gray-600">
      <button
        type="button"
        onClick={() => toggleFavorite(productId)}
        aria-pressed={favorite}
        className={`flex items-center gap-1.5 transition-colors ${favorite ? "text-red-500" : "hover:text-blue-600"}`}
      >
        <span>{favorite ? "♥" : "♡"}</span> В избранное
      </button>
      <button
        type="button"
        onClick={() => toggleCompare(productId)}
        aria-pressed={compared}
        className={`flex items-center gap-1.5 transition-colors ${compared ? "text-blue-600" : "hover:text-blue-600"}`}
      >
        <span>📊</span> Сравнить
      </button>
    </div>
  );
}
