"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AccountTab } from "@/types/account";
import { currentUser, deliveryAddress, favoriteProductIds, orders } from "@/data/account-data";
import { AccountSidebar } from "@/components/account/AccountSidebar";
import { OverviewPanel } from "@/components/account/OverviewPanel";
import { OrdersPanel } from "@/components/account/OrdersPanel";
import { ProfileForm } from "@/components/account/ProfileForm";
import { AddressPanel } from "@/components/account/AddressPanel";
import { ChangePasswordForm } from "@/components/account/ChangePasswordForm";
import { FavoritesPanel } from "@/components/account/FavoritesPanel";

export function AccountDashboard() {
  const [tab, setTab] = useState<AccountTab>("overview");
  const router = useRouter();

  function handleLogout() {
    // TODO: clear auth session once real authentication is wired up
    router.push("/my-account");
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
      <AccountSidebar active={tab} onSelect={setTab} onLogout={handleLogout} />

      <div>
        {tab === "overview" && (
          <OverviewPanel
            user={currentUser}
            recentOrders={orders.slice(0, 5)}
            onSelect={setTab}
            onLogout={handleLogout}
          />
        )}
        {tab === "orders" && <OrdersPanel orders={orders} onSelect={setTab} onLogout={handleLogout} />}
        {tab === "profile" && <ProfileForm user={currentUser} />}
        {tab === "address" && <AddressPanel address={deliveryAddress} />}
        {tab === "favorites" && <FavoritesPanel productIds={favoriteProductIds} />}
        {tab === "password" && <ChangePasswordForm />}
      </div>
    </div>
  );
}
