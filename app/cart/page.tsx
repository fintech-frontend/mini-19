"use client";

import { useState } from "react";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingCart, Package } from "lucide-react";

type CartItem = {
  id: string;
  name: string;
  unit: string;
  price: number;
  oldPrice?: number;
  qty: number;
};

const initialItems: CartItem[] = [
  {
    id: "1",
    name: "Дрель ударная Bosch GSB 13 RE, 600 Вт",
    unit: "шт.",
    price: 4890,
    oldPrice: 5490,
    qty: 1,
  },
  {
    id: "2",
    name: "Перфоратор Makita HR2470, SDS-Plus, 780 Вт",
    unit: "шт.",
    price: 12990,
    qty: 1,
  },
  {
    id: "3",
    name: "Саморезы по дереву 3.5x35 мм, 200 шт.",
    unit: "уп.",
    price: 320,
    qty: 3,
  },
  {
    id: "4",
    name: "Респиратор РПГ-67 с угольным фильтром",
    unit: "шт.",
    price: 590,
    oldPrice: 690,
    qty: 2,
  },
];

function formatPrice(value: number) {
  return `${value.toLocaleString("ru-RU")} ₽`;
}

function ItemImage() {
  return (
    <div className="flex size-20 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-300 sm:size-24">
      <Package size={32} />
    </div>
  );
}

function QuantityStepper({
  qty,
  onDecrease,
  onIncrease,
}: {
  qty: number;
  onDecrease: () => void;
  onIncrease: () => void;
}) {
  return (
    <div className="flex items-center rounded-lg border border-neutral-200">
      <button
        type="button"
        aria-label="Уменьшить количество"
        onClick={onDecrease}
        disabled={qty <= 1}
        className="flex size-8 items-center justify-center text-neutral-600 transition-colors hover:bg-neutral-100 disabled:pointer-events-none disabled:opacity-30"
      >
        <Minus size={14} />
      </button>
      <span className="w-8 text-center text-sm font-semibold text-neutral-900">
        {qty}
      </span>
      <button
        type="button"
        aria-label="Увеличить количество"
        onClick={onIncrease}
        className="flex size-8 items-center justify-center text-neutral-600 transition-colors hover:bg-neutral-100"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}

function CartRow({
  item,
  onDecrease,
  onIncrease,
  onRemove,
}: {
  item: CartItem;
  onDecrease: () => void;
  onIncrease: () => void;
  onRemove: () => void;
}) {
  return (
    <div className="flex gap-4 border-b border-neutral-200 py-5 last:border-b-0">
      <ItemImage />

      <div className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="min-w-0">
          <p className="text-sm font-medium text-neutral-900 sm:text-[15px]">
            {item.name}
          </p>
          <p className="mt-1 text-xs text-neutral-500">
            {formatPrice(item.price)} / {item.unit}
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 sm:justify-end">
          <QuantityStepper
            qty={item.qty}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
          />

          <div className="text-right">
            <p className="whitespace-nowrap text-sm font-bold text-neutral-900 sm:text-base">
              {formatPrice(item.price * item.qty)}
            </p>
            {item.oldPrice && (
              <p className="whitespace-nowrap text-xs text-neutral-400 line-through">
                {formatPrice(item.oldPrice * item.qty)}
              </p>
            )}
          </div>

          <button
            type="button"
            aria-label="Удалить товар"
            onClick={onRemove}
            className="shrink-0 text-neutral-400 transition-colors hover:text-red-500"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-neutral-200 px-4 py-20 text-center">
      <div className="flex size-16 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
        <ShoppingCart size={28} />
      </div>
      <h2 className="mt-5 text-lg font-bold text-neutral-900 sm:text-xl">
        Ваша корзина пуста
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-500">
        Добавьте товары из каталога, чтобы оформить заказ. Здесь появятся все
        выбранные вами позиции.
      </p>
      <Link
        href="/"
        className="mt-6 whitespace-nowrap rounded-lg bg-blue-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-700"
      >
        Перейти в каталог
      </Link>
    </div>
  );
}

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(initialItems);

  const changeQty = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalQty = items.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const savings = items.reduce(
    (sum, item) => sum + ((item.oldPrice ?? item.price) - item.price) * item.qty,
    0
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12">
      <h1 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
        Корзина
      </h1>

      {items.length === 0 ? (
        <div className="mt-6">
          <EmptyCart />
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="rounded-lg border border-neutral-200 px-4 sm:px-6 lg:col-span-2">
            {items.map((item) => (
              <CartRow
                key={item.id}
                item={item}
                onDecrease={() => changeQty(item.id, -1)}
                onIncrease={() => changeQty(item.id, 1)}
                onRemove={() => removeItem(item.id)}
              />
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-lg border border-neutral-200 p-5 sm:p-6">
              <h2 className="text-lg font-bold text-neutral-900">
                Ваш заказ
              </h2>

              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex items-center justify-between text-neutral-600">
                  <dt>Товаров, {totalQty} шт.</dt>
                  <dd>{formatPrice(subtotal + savings)}</dd>
                </div>
                {savings > 0 && (
                  <div className="flex items-center justify-between text-red-500">
                    <dt>Ваша экономия</dt>
                    <dd>-{formatPrice(savings)}</dd>
                  </div>
                )}
              </dl>

              <div className="mt-4 flex items-center justify-between border-t border-neutral-200 pt-4">
                <span className="text-base font-bold text-neutral-900">
                  Итого
                </span>
                <span className="text-xl font-bold text-neutral-900">
                  {formatPrice(subtotal)}
                </span>
              </div>

              <Link
                href="/checkout"
                className="mt-6 flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-700"
              >
                Оформить заказ
              </Link>

              <Link
                href="/"
                className="mt-3 flex w-full items-center justify-center text-xs font-medium text-neutral-500 transition-colors hover:text-blue-600"
              >
                Продолжить покупки
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
