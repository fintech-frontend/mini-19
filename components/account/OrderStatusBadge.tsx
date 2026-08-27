import { cn } from "@/lib/utils";
import { OrderStatus } from "@/types/account";

const statusConfig: Record<OrderStatus, { label: string; className: string }> = {
  processing: { label: "Обработка", className: "bg-amber-50 text-amber-600" },
  completed: { label: "Выполнен", className: "bg-green-50 text-green-600" },
  cancelled: { label: "Отменен", className: "bg-red-50 text-red-600" },
};

export function OrderStatusBadge({ status }: { status: OrderStatus }) {
  const { label, className } = statusConfig[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold uppercase",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {label}
    </span>
  );
}
