"use client";

import { ClipboardList, UserPen, Send, Heart, ShieldCheck, LogOut, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useShop } from "@/context/ShopContext";
import { AccountTab } from "@/types/account";

interface QuickNavItem {
  tab: AccountTab;
  label: string;
  icon: LucideIcon;
}

const items: QuickNavItem[] = [
  { tab: "orders", label: "Мои заказы", icon: ClipboardList },
  { tab: "profile", label: "Изменить профиль", icon: UserPen },
  { tab: "address", label: "Адрес доставки", icon: Send },
  { tab: "favorites", label: "Избранное", icon: Heart },
  { tab: "password", label: "Сменить пароль", icon: ShieldCheck },
];

interface QuickNavRowProps {
  active: AccountTab;
  onSelect: (tab: AccountTab) => void;
  onLogout: () => void;
}

// Secondary quick-nav shown above the orders lists (overview + full history), mirrors AccountSidebar.
export function QuickNavRow({ active, onSelect, onLogout }: QuickNavRowProps) {
  const { favoritesCount } = useShop();
  return (
    <div className="mb-6 grid grid-cols-3 gap-3 sm:grid-cols-6">
      {items.map(({ tab, label, icon: Icon }) => {
        const isActive = tab === active;
        const badge = tab === "favorites" ? favoritesCount : 0;
        return (
          <button
            key={tab}
            type="button"
            onClick={() => onSelect(tab)}
            className={cn(
              "relative flex flex-col items-center gap-2 rounded-xl border px-2 py-4 text-center text-[11px] font-bold uppercase tracking-wide transition-colors",
              isActive
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-neutral-200 text-neutral-600 hover:border-neutral-300"
            )}
          >
            {badge > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                {badge}
              </span>
            )}
            <Icon size={22} />
            {label}
          </button>
        );
      })}

      <button
        type="button"
        onClick={onLogout}
        className="flex flex-col items-center gap-2 rounded-xl border border-neutral-200 px-2 py-4 text-center text-[11px] font-bold uppercase tracking-wide text-neutral-600 transition-colors hover:border-red-300 hover:text-red-600"
      >
        <LogOut size={22} />
        Выйти
      </button>
    </div>
  );
}
