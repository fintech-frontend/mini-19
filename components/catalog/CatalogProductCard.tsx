"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, BarChart3, ImageOff } from "lucide-react";
import { ResolvedProduct } from "@/lib/resolveProduct";
import { useShop } from "@/context/ShopContext";

export default function CatalogProductCard({ product }: { product: ResolvedProduct }) {
  const { addToCart, isFavorite, toggleFavorite, isInCompare, toggleCompare } = useShop();
  const [justAdded, setJustAdded] = useState(false);
  const favorited = isFavorite(product.id);
  const compared = isInCompare(product.id);
  const href = product.href;

  function handleAddToCart() {
    addToCart(product.id);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  }

  const formatPrice = (price: number) => price.toLocaleString("ru-RU") + " ₽";

  return (
    <div className="group flex flex-col bg-white">
      <Link
        href={href}
        className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg border border-neutral-100 bg-neutral-50"
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
            className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <ImageOff className="h-10 w-10 text-neutral-300" />
        )}
        {!product.inStock && (
          <span className="absolute left-2 top-2 rounded bg-neutral-900/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
            Нет в наличии
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col pt-3">
        <span className="text-[11px] text-neutral-400">Артикул: {product.article || "—"}</span>

        <Link href={href} className="mt-1">
          <h3 className="text-sm font-semibold leading-snug text-orange-600 hover:text-orange-700 transition-colors line-clamp-2 min-h-[2.5em]">
            {product.title}
          </h3>
        </Link>

        <div className="mt-2 flex items-baseline gap-2">
          <p className="text-base font-bold text-neutral-900">{formatPrice(product.price)}</p>
          {product.oldPrice && product.oldPrice > product.price && (
            <p className="text-xs text-neutral-400 line-through">{formatPrice(product.oldPrice)}</p>
          )}
        </div>

        <div className="mt-3 flex items-center gap-2">
          <button
            type="button"
            disabled={!product.inStock}
            onClick={handleAddToCart}
            className={`flex-1 rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
              !product.inStock
                ? "cursor-not-allowed bg-neutral-200 text-neutral-400"
                : justAdded
                  ? "bg-green-600 text-white"
                  : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {!product.inStock ? "Нет в наличии" : justAdded ? "В корзине ✓" : "Купить"}
          </button>

          <button
            type="button"
            aria-label={favorited ? "Убрать из избранного" : "В избранное"}
            aria-pressed={favorited}
            onClick={() => toggleFavorite(product.id)}
            className={`rounded-lg border p-2 transition-colors ${
              favorited
                ? "border-red-200 bg-red-50 text-red-500"
                : "border-neutral-200 text-neutral-400 hover:border-red-200 hover:text-red-500"
            }`}
          >
            <Heart size={16} fill={favorited ? "currentColor" : "none"} />
          </button>
          <button
            type="button"
            aria-label={compared ? "Убрать из сравнения" : "Сравнить"}
            aria-pressed={compared}
            onClick={() => toggleCompare(product.id)}
            className={`rounded-lg border p-2 transition-colors ${
              compared
                ? "border-blue-200 bg-blue-50 text-blue-600"
                : "border-neutral-200 text-neutral-400 hover:border-blue-200 hover:text-blue-600"
            }`}
          >
            <BarChart3 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
