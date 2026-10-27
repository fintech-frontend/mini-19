"use client";

import Image from "next/image";
import Link from "next/link";
import { Package } from "lucide-react";
import { PromoCodeField } from "./PromoCodeField";

export type CartLine = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image?: string;
  article: string;
  qty: number;
};

function formatPrice(value: number) {
  return `${value.toLocaleString("ru-RU")} ₽`;
}

function ItemImage({ src, alt }: { src?: string; alt: string }) {
  if (!src) {
    return (
      <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-300">
        <Package size={22} />
      </div>
    );
  }
  return (
    <div className="relative size-14 shrink-0 overflow-hidden rounded-lg bg-neutral-100">
      <Image src={src} alt={alt} fill sizes="56px" className="object-contain p-1.5" />
    </div>
  );
}

interface OrderSummarySidebarProps {
  items: CartLine[];
  subtotal: number;
  discountPercent: number;
  deliveryCost: number;
  appliedPromoCode: string | null;
  onApplyPromo: (code: string, discountPercent: number) => void;
  onClearPromo: () => void;
  consent: boolean;
  onConsentChange: (value: boolean) => void;
  submitted: boolean;
  submitting: boolean;
}

export function OrderSummarySidebar({
  items,
  subtotal,
  discountPercent,
  deliveryCost,
  appliedPromoCode,
  onApplyPromo,
  onClearPromo,
  consent,
  onConsentChange,
  submitted,
  submitting,
}: OrderSummarySidebarProps) {
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const total = subtotal - discountAmount + deliveryCost;

  return (
    <div className="sticky top-24 rounded-lg border border-neutral-200 p-5 sm:p-6">
      <h2 className="text-lg font-bold text-neutral-900">Ваш заказ</h2>

      <div className="mt-4 max-h-80 space-y-4 overflow-y-auto pr-1">
        {items.map((item) => (
          <div key={item.id} className="flex gap-3">
            <ItemImage src={item.image} alt={item.name} />
            <div className="min-w-0 flex-1">
              <p className="line-clamp-2 text-sm text-neutral-900">{item.name}</p>
              <p className="mt-1 text-xs text-neutral-400">Артикул: {item.article}</p>
            </div>
            <div className="shrink-0 text-right text-sm font-semibold text-neutral-900">
              {formatPrice(item.price * item.qty)}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <PromoCodeField onApply={onApplyPromo} onClear={onClearPromo} appliedCode={appliedPromoCode} />
      </div>

      <dl className="mt-4 space-y-2 border-t border-neutral-200 pt-4 text-sm">
        <div className="flex items-center justify-between text-neutral-600">
          <dt>Сумма</dt>
          <dd>{formatPrice(subtotal)}</dd>
        </div>
        {discountAmount > 0 && (
          <div className="flex items-center justify-between text-red-500">
            <dt>Скидка по промокоду</dt>
            <dd>-{formatPrice(discountAmount)}</dd>
          </div>
        )}
        <div className="flex items-center justify-between text-neutral-600">
          <dt>Доставка</dt>
          <dd>{formatPrice(deliveryCost)}</dd>
        </div>
      </dl>

      <div className="mt-4 flex items-center justify-between border-t border-neutral-200 pt-4">
        <span className="text-base font-bold text-neutral-900">Итого</span>
        <span className="text-xl font-bold text-neutral-900">{formatPrice(total)}</span>
      </div>

      <label className="mt-4 flex items-start gap-2 text-xs text-neutral-500">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => onConsentChange(e.target.checked)}
          className={`mt-0.5 size-4 shrink-0 rounded border-neutral-300 accent-blue-600 ${
            submitted && !consent ? "border-red-400 ring-1 ring-red-400" : ""
          }`}
        />
        Согласен с обработкой персональных данных в соответствии с{" "}
        <Link href="/privacy-policy" className="text-blue-600 hover:underline">
          политикой конфиденциальности
        </Link>
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="mt-4 flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-60"
      >
        Оформить заказ
      </button>
    </div>
  );
}
