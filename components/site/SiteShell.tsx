import type { ReactNode } from "react";
import Header from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import ContactWidget from "@/components/site/ContactWidget";
import { ShopProvider } from "@/context/ShopContext";
import "@/app/globals.css";

/**
 * Оформление витрины: стили, корзина/избранное, шапка и подвал.
 *
 * Вынесено из корневого layout, потому что в том же приложении живёт админ-панель
 * (app/(admin)) со своими стилями и без шапки магазина. Используется в
 * app/(site)/layout.tsx и в app/not-found.tsx — 404 рисуется вне групп маршрутов.
 */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <ShopProvider>
      <div className="flex min-h-screen flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <ContactWidget />
    </ShopProvider>
  );
}
