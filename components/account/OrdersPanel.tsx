"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { AccountTab, Order } from "@/types/account";
import { QuickNavRow } from "@/components/account/QuickNavRow";
import { OrdersTable } from "@/components/account/OrdersTable";

const PAGE_SIZE = 5;

interface OrdersPanelProps {
  orders: Order[];
  onSelect: (tab: AccountTab) => void;
  onLogout: () => void;
}

export function OrdersPanel({ orders, onSelect, onLogout }: OrdersPanelProps) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(orders.length / PAGE_SIZE));
  const pageOrders = orders.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <QuickNavRow active="orders" onSelect={onSelect} onLogout={onLogout} />
      <h3 className="mb-3 text-lg font-semibold text-neutral-900">История заказов</h3>
      <OrdersTable orders={pageOrders} />

      {totalPages > 1 && (
        <nav className="mt-4 flex items-center justify-center gap-2" aria-label="Пагинация">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="rounded-lg px-3 py-2 text-sm text-neutral-500 transition-colors hover:text-neutral-900"
          >
            Назад
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPage(p)}
              className={cn(
                "flex h-9 min-w-9 items-center justify-center rounded-lg px-2 text-sm",
                p === page ? "bg-black font-medium text-white" : "text-neutral-600 hover:bg-neutral-100"
              )}
            >
              {p}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="rounded-lg px-3 py-2 text-sm text-neutral-500 transition-colors hover:text-neutral-900"
          >
            Далее
          </button>
        </nav>
      )}
    </div>
  );
}
