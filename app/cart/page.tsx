"use client";

import { staticProducts } from "@/data/staticProducts";
import { useShop } from "@/context/ShopContext";

export default function CartPage() {
  const { cart } = useShop();

  const items = Object.entries(cart)
    .map(([id, qty]) => ({ product: staticProducts.find((p) => p.id === id), qty }))
    .filter((entry): entry is { product: (typeof staticProducts)[number]; qty: number } => !!entry.product);

  const total = items.reduce((sum, { product, qty }) => sum + product.price * qty, 0);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">Корзина</h1>
      {items.length === 0 ? (
        <p className="text-sm text-gray-500">Корзина пуста.</p>
      ) : (
        <div className="space-y-4">
          {items.map(({ product, qty }) => (
            <div
              key={product.id}
              className="flex items-center justify-between rounded-lg border border-gray-200 p-4"
            >
              <div>
                <p className="text-sm font-medium text-gray-900">{product.title}</p>
                <p className="text-xs text-gray-500">Количество: {qty}</p>
              </div>
              <p className="text-sm font-bold text-gray-900">
                {(product.price * qty).toLocaleString("ru-RU")} ₽
              </p>
            </div>
          ))}
          <div className="flex justify-between border-t border-gray-200 pt-4 text-base font-bold text-gray-900">
            <span>Итого</span>
            <span>{total.toLocaleString("ru-RU")} ₽</span>
          </div>
        </div>
      )}
    </div>
  );
}
