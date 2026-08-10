import { AccountTab, Order, UserProfile } from "@/types/account";
import { QuickNavRow } from "@/components/account/QuickNavRow";
import { OrdersTable } from "@/components/account/OrdersTable";

interface OverviewPanelProps {
  user: UserProfile;
  recentOrders: Order[];
  onSelect: (tab: AccountTab) => void;
  onLogout: () => void;
}

export function OverviewPanel({ user, recentOrders, onSelect, onLogout }: OverviewPanelProps) {
  return (
    <div>
      <h2 className="mb-6 text-xl font-semibold text-neutral-900">Здравствуйте, {user.firstName}!</h2>
      <QuickNavRow active="orders" onSelect={onSelect} onLogout={onLogout} />
      <h3 className="mb-3 text-lg font-semibold text-neutral-900">Текущие заказы</h3>
      <OrdersTable orders={recentOrders} />
    </div>
  );
}
