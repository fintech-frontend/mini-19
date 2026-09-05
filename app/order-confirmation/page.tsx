"use client";

import { useMemo, useSyncExternalStore } from "react";
import Link from "next/link";
import { CheckCircle2, MapPin, Package } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import type { SubmittedOrder } from "@/types/order";

function formatPrice(value: number) {
  return `${value.toLocaleString("ru-RU")} ₽`;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });
}

function EmptyConfirmation() {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-neutral-200 px-4 py-20 text-center">
      <div className="flex size-16 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
        <Package size={28} />
      </div>
      <h2 className="mt-5 text-lg font-bold text-neutral-900 sm:text-xl">Заказ не найден</h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-500">
        Похоже, вы ещё не оформили заказ или сессия истекла. Вернитесь в каталог, чтобы выбрать товары.
      </p>
      <Link
        href="/catalog"
        className="mt-6 whitespace-nowrap rounded-lg bg-blue-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-700"
      >
        Перейти в каталог
      </Link>
    </div>
  );
}

function subscribeNoop() {
  return () => {};
}

function readLastOrderRaw() {
  return sessionStorage.getItem("lastOrder");
}

function readServerSnapshot() {
  return null;
}

export default function OrderConfirmationPage() {
  const raw = useSyncExternalStore(subscribeNoop, readLastOrderRaw, readServerSnapshot);

  const order = useMemo<SubmittedOrder | null>(() => {
    if (!raw) return null;
    try {
      return JSON.parse(raw) as SubmittedOrder;
    } catch {
      return null;
    }
  }, [raw]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Спасибо за заказ" }]} />
      <h1 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Спасибо за заказ</h1>

      {order === null && (
        <div className="mt-6">
          <EmptyConfirmation />
        </div>
      )}

      {order && (
        <div className="mt-6 space-y-8">
          <div className="flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700">
            <CheckCircle2 size={18} />
            Спасибо! Ваш заказ успешно оформлен.
          </div>

          <div className="grid grid-cols-2 gap-4 rounded-lg border border-neutral-200 p-5 text-sm sm:grid-cols-4">
            <div>
              <p className="text-neutral-500">Номер заказа</p>
              <p className="mt-1 font-semibold text-neutral-900">#{order.number}</p>
            </div>
            <div>
              <p className="text-neutral-500">Дата</p>
              <p className="mt-1 font-semibold text-neutral-900">{formatDate(order.date)}</p>
            </div>
            <div>
              <p className="text-neutral-500">Итого</p>
              <p className="mt-1 font-semibold text-neutral-900">{formatPrice(order.total)}</p>
            </div>
            <div>
              <p className="text-neutral-500">Способ оплаты</p>
              <p className="mt-1 font-semibold text-neutral-900">{order.paymentLabel}</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-neutral-900">Детали заказа:</h2>
            <div className="mt-3 overflow-x-auto rounded-lg border border-neutral-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-50 text-left text-neutral-500">
                    <th className="px-4 py-3 font-medium">Товар</th>
                    <th className="px-4 py-3 text-right font-medium">Итого</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items.map((item) => (
                    <tr key={item.id} className="border-b border-neutral-100 last:border-b-0">
                      <td className="px-4 py-3 text-neutral-800">
                        {item.name} <span className="text-neutral-400">×{item.qty}</span>
                      </td>
                      <td className="px-4 py-3 text-right font-medium text-neutral-900">
                        {formatPrice(item.price * item.qty)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex items-center justify-between text-neutral-600">
                <dt>Сумма</dt>
                <dd>{formatPrice(order.subtotal)}</dd>
              </div>
              {order.discount > 0 && (
                <div className="flex items-center justify-between text-red-500">
                  <dt>Скидка</dt>
                  <dd>-{formatPrice(order.discount)}</dd>
                </div>
              )}
              <div className="flex items-center justify-between text-neutral-600">
                <dt>Доставка</dt>
                <dd>{formatPrice(order.deliveryCost)}</dd>
              </div>
              <div className="flex items-center justify-between text-neutral-600">
                <dt>Способ доставки</dt>
                <dd>{order.deliveryLabel}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-neutral-200 pt-2 text-base font-bold text-neutral-900">
                <dt>Итого</dt>
                <dd>{formatPrice(order.total)}</dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-col gap-3 rounded-lg border border-neutral-200 p-5 text-sm sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="font-semibold text-neutral-900">
                {order.customer.firstName} {order.customer.lastName}
              </p>
              <p className="mt-1 text-neutral-500">Телефон: {order.customer.phone}</p>
              <p className="text-neutral-500">Email: {order.customer.email}</p>
            </div>
            {order.address && (
              <div className="flex items-start gap-1.5 rounded-lg bg-neutral-50 px-3 py-2 text-neutral-600">
                <MapPin size={16} className="mt-0.5 shrink-0 text-neutral-400" />
                <span>{order.address}</span>
              </div>
            )}
          </div>

          <Link
            href="/catalog"
            className="inline-flex whitespace-nowrap rounded-lg bg-blue-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-700"
          >
            Продолжить покупки
          </Link>
        </div>
      )}
    </div>
  );
}
