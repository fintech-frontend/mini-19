"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AccountTab } from "@/types/account";
import { currentUser, deliveryAddress } from "@/data/account-data";
import { skipToken } from "@reduxjs/toolkit/query";
import { useGetUserOrdersQuery } from "@/lib/store/api";
import { AccountSidebar } from "@/components/account/AccountSidebar";
import { OverviewPanel } from "@/components/account/OverviewPanel";
import { OrdersPanel } from "@/components/account/OrdersPanel";
import { ProfileForm } from "@/components/account/ProfileForm";
import { AddressPanel } from "@/components/account/AddressPanel";
import { ChangePasswordForm } from "@/components/account/ChangePasswordForm";
import { FavoritesPanel } from "@/components/account/FavoritesPanel";
import { clearAuthTokens, getCurrentUserId, isAuthenticated } from "@/lib/store/api";

export function AccountDashboard() {
  const [tab, setTab] = useState<AccountTab>("overview");
  const router = useRouter();

  // Заказы — с бэкенда (GET /orders/), отобранные по id пользователя из JWT.
  // Читаем id в эффекте, а не при рендере: на сервере токена нет.
  const [userId, setUserId] = useState<number | null>(null);
  useEffect(() => {
    void Promise.resolve().then(() => setUserId(getCurrentUserId()));
  }, []);
  const ordersQuery = useGetUserOrdersQuery(userId ?? skipToken);
  const orders = ordersQuery.data ?? [];
  const ordersEmptyText = ordersQuery.isError
    ? "Не удалось загрузить заказы. Попробуйте обновить страницу."
    : ordersQuery.isLoading
      ? "Загрузка заказов..."
      : undefined;

  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace("/my-account");
    }
  }, [router]);

  function handleLogout() {
    clearAuthTokens();
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
            emptyText={ordersEmptyText}
            onSelect={setTab}
            onLogout={handleLogout}
          />
        )}
        {tab === "orders" && <OrdersPanel orders={orders} emptyText={ordersEmptyText} onSelect={setTab} onLogout={handleLogout} />}
        {tab === "profile" && <ProfileForm user={currentUser} />}
        {tab === "address" && <AddressPanel address={deliveryAddress} />}
        {tab === "favorites" && <FavoritesPanel />}
        {tab === "password" && <ChangePasswordForm />}
      </div>
    </div>
  );
}
