"use client";

import BuyOneClickButton from "@/components/ui/BuyOneClickButton";
import AddToCartButton from "@/components/ui/AddToCartButton";
import ProductFavoriteCompareButtons from "@/components/ui/ProductFavoriteCompareButtons";

/**
 * Правая колонка страницы товара: артикул, наличие, цена, корзина, быстрая покупка
 * и избранное/сравнение. Общая для всех категорий каталога.
 */
export default function ProductPurchaseCard({
  productId,
  title,
  articul,
  price,
  oldPrice,
  inStock,
}: {
  productId: string;
  title: string;
  articul?: string;
  price: number;
  oldPrice?: number;
  inStock: boolean;
}) {
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
        <AddToCartButton productId={productId} inStock={inStock} />

        <BuyOneClickButton product={{ title }} disabled={!inStock} />
      </div>

      <ProductFavoriteCompareButtons productId={productId} />
    </div>
  );
}
