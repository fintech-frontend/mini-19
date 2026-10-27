"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BarChart3, Check, Heart, ImageOff, ShoppingCart } from "lucide-react";
import { ResolvedProduct } from "@/lib/resolveProduct";
import { useShop } from "@/context/ShopContext";

interface ProductCardProps {
  product: ResolvedProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, isFavorite, toggleFavorite, isInCompare, toggleCompare } = useShop();
  const [justAdded, setJustAdded] = useState(false);

  const favorite = isFavorite(product.id);
  const compared = isInCompare(product.id);
  const hasDiscount = product.oldPrice && product.oldPrice > product.price;

  const formatPrice = (price: number) => price.toLocaleString("ru-RU") + " ₽";
  const href = product.href ?? `/products/${product.id}`;

  const handleAddToCart = () => {
    addToCart(product.id);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <div className="group flex flex-col bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
      <Link
        href={href}
        className="relative block aspect-square w-full bg-gray-50 overflow-hidden"
      >
        {product.isBestSeller && (
          <span className="absolute top-2 left-2 z-10 rounded-md border border-orange-400 bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-orange-500">
            Хит
          </span>
        )}
        {!product.inStock && (
          <span className="absolute top-2 right-2 z-10 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            Нет в наличии
          </span>
        )}
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-gray-300">
            <ImageOff className="h-10 w-10" />
          </div>
        )}
      </Link>

      <div className="p-4 flex flex-col grow">
        <span className="text-xs text-gray-400 mb-1">Артикул: {product.article}</span>

        <Link href={href} className="grow">
          <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors duration-150 mb-2 min-h-10">
            {product.title}
          </h3>
        </Link>

        <div className="mt-2 flex items-baseline gap-2">
          {hasDiscount && (
            <span className="text-sm text-gray-400 line-through">{formatPrice(product.oldPrice!)}</span>
          )}
          <span className="text-lg font-bold text-gray-900">{formatPrice(product.price)}</span>
          {hasDiscount && (
            <span className="bg-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded">
              -{Math.round(100 - (product.price / product.oldPrice!) * 100)}%
            </span>
          )}
        </div>

        <div className="mt-3 flex items-center gap-2">
          <button
            type="button"
            disabled={!product.inStock}
            onClick={handleAddToCart}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition-all duration-150 ${
              !product.inStock
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : justAdded
                ? "bg-green-600 text-white"
                : "bg-blue-600 text-white hover:bg-blue-700 active:scale-[0.98]"
            }`}
          >
            {!product.inStock ? (
              "Нет в наличии"
            ) : justAdded ? (
              <>
                <Check size={16} />
                Добавлено
              </>
            ) : (
              <>
                <ShoppingCart size={16} />
                Купить
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => toggleFavorite(product.id)}
            aria-label={favorite ? "Убрать из избранного" : "Добавить в избранное"}
            aria-pressed={favorite}
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors ${
              favorite
                ? "border-red-300 bg-red-50 text-red-500"
                : "border-gray-200 text-gray-500 hover:border-gray-300 hover:text-red-500"
            }`}
          >
            <Heart size={17} className={favorite ? "fill-red-500" : ""} />
          </button>

          <button
            type="button"
            onClick={() => toggleCompare(product.id)}
            aria-label={compared ? "Убрать из сравнения" : "Добавить к сравнению"}
            aria-pressed={compared}
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors ${
              compared
                ? "border-blue-300 bg-blue-50 text-blue-600"
                : "border-gray-200 text-gray-500 hover:border-gray-300 hover:text-blue-600"
            }`}
          >
            <BarChart3 size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}
