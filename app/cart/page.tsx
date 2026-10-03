"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingCart, Package } from "lucide-react";
import { staticProducts } from "@/data/staticProducts";
import { useShop } from "@/context/ShopContext";
import { Product } from "@/types/product";

interface CartEntry {
  product: Product;
  qty: number;
}

function formatPrice(value: number) {
  return `${value.toLocaleString("ru-RU")} ₽`;
}

function ItemImage({ product }: { product: Product }) {
  if (!product.image) {
    return (
      <div className="flex size-20 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-300 sm:size-24">
        <Package size={32} />
      </div>
    );
  }

  return (
    <div className="relative size-20 shrink-0 overflow-hidden rounded-lg bg-neutral-100 sm:size-24">
      <Image
        src={product.image}
        alt={product.title}
        fill
        sizes="96px"
        className="object-contain p-2"
      />
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
      <span className="w-8 text-center text-sm font-semibold text-neutral-900">{qty}</span>
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
  entry,
  onDecrease,
  onIncrease,
  onRemove,
}: {
  entry: CartEntry;
  onDecrease: () => void;
  onIncrease: () => void;
  onRemove: () => void;
}) {
  const { product, qty } = entry;

  return (
    <div className="flex gap-4 border-b border-neutral-200 py-5 last:border-b-0">
      <ItemImage product={product} />

      <div className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="min-w-0">
          <Link
            href={`/products/${product.id}`}
            className="text-sm font-medium text-neutral-900 hover:text-blue-600 sm:text-[15px]"
          >
            {product.title}
          </Link>
          <p className="mt-1 text-xs text-neutral-500">{formatPrice(product.price)} / шт.</p>
        </div>

        <div className="flex items-center justify-between gap-4 sm:justify-end">
          <QuantityStepper qty={qty} onDecrease={onDecrease} onIncrease={onIncrease} />

          <div className="text-right">
            <p className="whitespace-nowrap text-sm font-bold text-neutral-900 sm:text-base">
              {formatPrice(product.price * qty)}
            </p>
            {product.oldPrice && (
              <p className="whitespace-nowrap text-xs text-neutral-400 line-through">
                {formatPrice(product.oldPrice * qty)}
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
      <h2 className="mt-5 text-lg font-bold text-neutral-900 sm:text-xl">Ваша корзина пуста</h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-500">
        Добавьте товары из каталога, чтобы оформить заказ. Здесь появятся все выбранные вами
        позиции.
      </p>
      <Link
        href="/products"
        className="mt-6 whitespace-nowrap rounded-lg bg-blue-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-700"
      >
        Перейти в каталог
      </Link>
    </div>
  );
}

export default function CartPage() {
  const { cart, changeCartQty, removeFromCart } = useShop();

  const entries: CartEntry[] = Object.entries(cart)
    .map(([id, qty]) => ({ product: staticProducts.find((p) => p.id === id), qty }))
    .filter((entry): entry is CartEntry => Boolean(entry.product));

  const totalQty = entries.reduce((sum, { qty }) => sum + qty, 0);
  const subtotal = entries.reduce((sum, { product, qty }) => sum + product.price * qty, 0);
  const savings = entries.reduce(
    (sum, { product, qty }) => sum + ((product.oldPrice ?? product.price) - product.price) * qty,
    0
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12">
      <h1 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Корзина</h1>

      {entries.length === 0 ? (
        <div className="mt-6">
          <EmptyCart />
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="rounded-lg border border-neutral-200 px-4 sm:px-6 lg:col-span-2">
            {entries.map((entry) => (
              <CartRow
                key={entry.product.id}
                entry={entry}
                onDecrease={() => changeCartQty(entry.product.id, -1)}
                onIncrease={() => changeCartQty(entry.product.id, 1)}
                onRemove={() => removeFromCart(entry.product.id)}
              />
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-lg border border-neutral-200 p-5 sm:p-6">
              <h2 className="text-lg font-bold text-neutral-900">Ваш заказ</h2>

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
                <span className="text-base font-bold text-neutral-900">Итого</span>
                <span className="text-xl font-bold text-neutral-900">{formatPrice(subtotal)}</span>
              </div>

              <Link
                href="/checkout"
                className="mt-6 flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-700"
              >
                Оформить заказ
              </Link>

              <Link
                href="/products"
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
