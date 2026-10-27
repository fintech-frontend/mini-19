"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import QuantityStepper from "@/components/ui/QuantityStepper";

export default function AddToCartButton({ productId, inStock }: { productId: string; inStock: boolean }) {
  const { addToCart } = useShop();
  const [justAdded, setJustAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  function handleClick() {
    addToCart(productId, quantity);
    setQuantity(1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  }

  return (
    <div className="flex w-full items-center gap-2">
      {inStock && <QuantityStepper value={quantity} onChange={setQuantity} className="h-11 shrink-0" />}
    <button
      type="button"
      disabled={!inStock}
      onClick={handleClick}
      className={`flex min-w-0 flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold shadow-sm transition-all duration-150 ${
        !inStock
          ? "cursor-not-allowed bg-gray-200 text-gray-400"
          : justAdded
          ? "bg-green-600 text-white"
          : "bg-blue-600 text-white hover:bg-blue-700 active:scale-[0.98]"
      }`}
    >
      {justAdded ? (
        <>
          <Check size={16} />
          Добавлено
        </>
      ) : (
        "ДОБАВИТЬ В КОРЗИНУ"
      )}
    </button>
    </div>
  );
}
