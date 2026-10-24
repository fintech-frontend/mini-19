"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Bell, CreditCard, LayoutDashboard, LogOut, Menu, Package, ShoppingCart, Store, UserCog, Users } from "lucide-react";
import { ROLE_LABEL, useAuth } from "@/lib/admin/auth";
import { useI18n } from "@/lib/admin/i18n";
import type { Module } from "@/lib/admin/rbac";
import { useStaffList } from "@/lib/admin/staffDb";
import { LangSwitch, ThemeToggle } from "./Prefs";

type Item = { href: string; label: string; icon: typeof Package; module: Module; exact?: boolean };

const SECTIONS: { title: string; items: Item[] }[] = [
  { title: "Asosiy", items: [{ href: "/admin", label: "Dashboard", icon: LayoutDashboard, module: "dashboard", exact: true }] },
  {
    title: "Savdo",
    items: [
      { href: "/admin/products", label: "Mahsulotlar", icon: Package, module: "products" },
      { href: "/admin/orders", label: "Buyurtmalar", icon: ShoppingCart, module: "orders" },
      { href: "/admin/payments", label: "To'lovlar", icon: CreditCard, module: "payments" },
      { href: "/admin/customers", label: "Mijozlar", icon: Users, module: "customers" },
    ],
  },
  { title: "Tizim", items: [{ href: "/admin/staff", label: "Xodimlar", icon: UserCog, module: "settings" }] },
];

/** Menyuda ko'rinmaydigan, lekin bo'limga tegishli sahifalar */
const EXTRA_ROUTES: [prefix: string, module: Module][] = [
  ["/admin/categories", "products"],
  ["/admin/brands", "products"],
];

const isActive = (pathname: string, item: Item) =>
  item.exact ? pathname === item.href : pathname === item.href || pathname.startsWith(item.href + "/");

function moduleFor(pathname: string): Module | null {
  for (const sec of SECTIONS) for (const item of sec.items) if (isActive(pathname, item)) return item.module;
  return EXTRA_ROUTES.find(([prefix]) => pathname.startsWith(prefix))?.[1] ?? null;
}

/** Sidebar + topbar + kirish/ruxsat tekshiruvi (app/admin/(panel)/layout.tsx). */
export function AdminShell({ children }: { children: ReactNode }) {
  const { user, ready, logout, can } = useAuth();
  const { t } = useI18n();
  const router = useRouter();
  const pathname = usePathname();
  // Planshetda sidebar boshidan ikonkalargacha yig'iladi
  const [collapsed, setCollapsed] = useState(() => window.innerWidth > 768 && window.innerWidth <= 1100);
  const [open, setOpen] = useState(false);
  const pending = useStaffList().filter((a) => a.status === "PENDING").length;

  useEffect(() => {
    if (ready && !user) router.replace("/admin/login");
  }, [ready, user, router]);

  if (!ready || !user) return null;

  const section = moduleFor(pathname);
  const allowed = !section || can(section);

  return (
    <div className="app">
      <div className={`scrim ${open ? "show" : ""}`} onClick={() => setOpen(false)} />
      <aside className={`sidebar ${collapsed ? "collapsed" : ""} ${open ? "open" : ""}`}>
        <div className="brand">
          <span className="logo">S</span>
          <span className="name">Stroyopttorg</span>
        </div>
        <nav className="nav-group" onClick={() => setOpen(false)}>
          {SECTIONS.map((sec) => {
            const items = sec.items.filter((n) => can(n.module));
            if (!items.length) return null;
            return (
              <div key={sec.title}>
                <div className="nav-section">{t(sec.title)}</div>
                {items.map((n) => (
                  <Link key={n.href} href={n.href} className={`nav-link ${isActive(pathname, n) ? "active" : ""}`} title={t(n.label)}>
                    <n.icon size={20} />
                    <span className="label">{t(n.label)}</span>
                  </Link>
                ))}
              </div>
            );
          })}
        </nav>
        {/* Vitrina boshqa stillarga ega — <Link> bilan o'tilsa admin.css saytda qolib ketadi,
            shuning uchun ataylab to'liq sahifa yuklanishi */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" className="nav-link" style={{ margin: "0 12px 8px" }} title={t("Saytga o'tish")}>
          <Store size={20} />
          <span className="label">{t("Saytga o'tish")}</span>
        </a>
        <div className="side-foot">
          <span className="dot" />
          <span className="txt">{t("Tizim ishlayapti")} · v0.2</span>
        </div>
      </aside>

      <div className="main">
        <header className="topbar">
          <button
            type="button"
            className="icon-btn"
            aria-label={t("Menyu")}
            onClick={() => (window.innerWidth <= 768 ? setOpen(!open) : setCollapsed(!collapsed))}
          >
            <Menu size={20} />
          </button>
          <div className="spacer" />
          <LangSwitch />
          <ThemeToggle />
          {can("settings") && (
            <Link href="/admin/staff" className="icon-btn hide-xs" aria-label={t("Bildirishnomalar")}>
              <Bell size={20} />
              {pending > 0 && <span className="pip" />}
            </Link>
          )}
          <div className="user-chip">
            <div className="who">
              <b>{user.name}</b>
              <br />
              <span>{t(ROLE_LABEL[user.role])}</span>
            </div>
            <div className="avatar">{user.name[0]?.toUpperCase()}</div>
          </div>
          <button
            type="button"
            className="icon-btn"
            aria-label={t("Chiqish")}
            onClick={() => void logout().then(() => router.replace("/admin/login"))}
          >
            <LogOut size={18} />
          </button>
        </header>
        <main className="content">
          {allowed ? (
            children
          ) : (
            <div className="card">
              <h3>{t("Ruxsat yo'q")}</h3>
              {t("Sizning rolingiz bu bo'limga kira olmaydi.")}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
