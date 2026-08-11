import { ChevronRight } from "lucide-react";
import { Order } from "@/types/account";
import { OrderStatusBadge } from "@/components/account/OrderStatusBadge";

function formatPrice(price: number) {
  return price.toLocaleString("ru-RU") + " ₽";
}

export function OrdersTable({ orders }: { orders: Order[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-neutral-200">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-200 text-xs uppercase tracking-wide text-neutral-400">
            <th className="px-4 py-3 font-medium">Номер</th>
            <th className="px-4 py-3 font-medium">Дата</th>
            <th className="px-4 py-3 font-medium">Статус</th>
            <th className="px-4 py-3 font-medium">Итого</th>
            <th className="px-4 py-3" />
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <tr key={`${order.number}-${i}`} className="border-b border-neutral-100 last:border-0">
              <td className="px-4 py-3.5 font-medium text-neutral-900">{order.number}</td>
              <td className="px-4 py-3.5 text-neutral-500">{order.date}</td>
              <td className="px-4 py-3.5">
                <OrderStatusBadge status={order.status} />
              </td>
              <td className="px-4 py-3.5 font-semibold text-blue-600">{formatPrice(order.total)}</td>
              <td className="px-4 py-3.5 text-right">
                <button
                  type="button"
                  aria-label="Подробнее о заказе"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-50 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
                >
                  <ChevronRight size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
