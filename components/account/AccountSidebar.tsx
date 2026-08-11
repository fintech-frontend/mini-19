"use client";

import { User, UserPen, ClipboardList, MapPin, Heart, ShieldCheck, LogOut, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { AccountTab } from "@/types/account";

interface SidebarItem {
  tab: AccountTab;
  label: string;
  icon: LucideIcon;
  badge?: number;
}

const items: SidebarItem[] = [
  { tab: "overview", label: "Мой аккаунт", icon: User },
  { tab: "profile", label: "Изменить профиль", icon: UserPen },
  { tab: "orders", label: "Мои заказы", icon: ClipboardList },
  { tab: "address", label: "Адрес доставки", icon: MapPin },
  { tab: "favorites", label: "Избранные товары", icon: Heart, badge: 3 },
  { tab: "password", label: "Сменить пароль", icon: ShieldCheck },
];

interface AccountSidebarProps {
  active: AccountTab;
  onSelect: (tab: AccountTab) => void;
  onLogout: () => void;
}

// Left-hand navigation for /account. "Выйти из аккаунта" is an action (redirects to /my-account), not a tab.
export function AccountSidebar({ active, onSelect, onLogout }: AccountSidebarProps) {
  return (
    <nav className="flex flex-col gap-1 rounded-2xl border border-neutral-200 bg-white p-2">
      {items.map(({ tab, label, icon: Icon, badge }) => {
        const isActive = tab === active;
        return (
          <button
            key={tab}
            type="button"
            onClick={() => onSelect(tab)}
            className={cn(
              "flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors",
              isActive ? "bg-neutral-900 text-white" : "text-neutral-600 hover:bg-neutral-50"
            )}
          >
            <Icon size={18} className={isActive ? "text-white" : "text-neutral-400"} />
            <span className="flex-1">{label}</span>
            {badge && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                {badge}
              </span>
            )}
          </button>
        );
      })}

      <button
        type="button"
        onClick={onLogout}
        className="mt-1 flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-neutral-600 transition-colors hover:bg-red-50 hover:text-red-600"
      >
        <LogOut size={18} className="text-neutral-400" />
        Выйти из аккаунта
      </button>
    </nav>
  );
}
