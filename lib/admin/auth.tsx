"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { getErrorMessage, getErrorStatus, useAdminLoginMutation, useAdminLogoutMutation, useGetAdminSessionQuery } from "@/lib/store/api";
import type { AdminMode } from "@/types/admin";
import { PERMISSIONS, type Module, type Role } from "./rbac";
import { DEMO_SUPER, findStaff, getStaff, onStaffChange } from "./staffDb";

export const ROLE_LABEL: Record<Role, string> = {
  SUPER_ADMIN: "Super admin",
  MANAGER: "Menejer",
  WAREHOUSE: "Omborchi",
  ACCOUNTANT: "Buxgalter",
  CONTENT: "Kontent menejer",
};

export const MODULES: { key: Module; label: string }[] = [
  { key: "dashboard", label: "Dashboard" },
  { key: "products", label: "Mahsulotlar" },
  { key: "orders", label: "Buyurtmalar" },
  { key: "payments", label: "To'lovlar" },
  { key: "refund", label: "Refund (qaytarish)" },
  { key: "customers", label: "Mijozlar" },
  { key: "settings", label: "Xodimlar" },
];

/**
 * server — foydalanuvchi admin serverida tekshirilgan (HttpOnly cookie sessiya bor).
 * Fintechhub API faqat shunday foydalanuvchilarga ochiq; localStorage'dagi xodimlar (mock) uchun yopiq.
 */
interface User {
  name: string;
  role: Role;
  staffId?: string;
  server?: boolean;
}

interface AuthCtx {
  user: User | null;
  ready: boolean;
  mode: AdminMode;
  /** Fintechhub API shu foydalanuvchi uchun ishlaydimi (server sozlangan va server sessiyasi bor) */
  fhp: boolean;
  login: (identifier: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  can: (m: Module) => boolean;
}

const Ctx = createContext<AuthCtx | null>(null);

export function useAuth(): AuthCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

const KEY = "stroy_admin_user";

function readStoredUser(): User | null {
  try {
    return JSON.parse(sessionStorage.getItem(KEY) || "null");
  } catch {
    return null;
  }
}

/** Faqat client'da (AdminApp mount bo'lgach) render qilinadi — sessionStorage'ni darrov o'qiydi. */
export function AuthProvider({ children }: { children: ReactNode }) {
  const session = useGetAdminSessionQuery();
  const [serverLogin] = useAdminLoginMutation();
  const [serverLogout] = useAdminLogoutMutation();
  const [localUser, setLocalUser] = useState<User | null>(readStoredUser);

  const ready = !session.isLoading;
  // Server javob bermasa (masalan, statik hosting) — demo rejim
  const mode: AdminMode = session.data?.mode ?? "demo";
  const serverUser = session.data?.user;

  // Server sessiyasi bor — u asosiy manba. Server foydalanuvchisi sessiyasi tugagan bo'lsa yoki
  // live rejimda mock Super admin qolgan bo'lsa — chiqaramiz.
  let user: User | null = localUser;
  if (serverUser) user = { name: serverUser.name, role: serverUser.role, server: true };
  else if (ready && (localUser?.server || (mode === "live" && localUser?.role === "SUPER_ADMIN"))) user = null;

  const start = (u: User) => {
    sessionStorage.setItem(KEY, JSON.stringify(u));
    setLocalUser(u);
  };
  const clear = useCallback(() => {
    sessionStorage.removeItem(KEY);
    setLocalUser(null);
  }, []);

  const login: AuthCtx["login"] = async (identifier, password) => {
    const id = identifier.trim();

    if (mode === "live") {
      // Avval admin serverida (ADMIN_USERS) tekshiramiz
      try {
        const res = await serverLogin({ login: id, password }).unwrap();
        return start({ name: res.user.name, role: res.user.role, server: true });
      } catch (e) {
        // 401 — serverda bunday akkaunt yo'q: quyida xodimlar ro'yxatidan (mock) qidiramiz
        if (getErrorStatus(e) !== 401) throw new Error(getErrorMessage(e, "Serverga ulanib bo'lmadi"));
      }
    } else if (DEMO_SUPER.enabled && id === DEMO_SUPER.login && password === DEMO_SUPER.password) {
      return start({ name: DEMO_SUPER.name, role: "SUPER_ADMIN" });
    }

    const acc = findStaff(id);
    if (!acc) throw new Error("Akkaunt topilmadi. Ro'yxatdan o'ting (rad etilgan yoki chiqarilgan bo'lsa ham qayta ro'yxatdan o'ting)");
    if (acc.password !== password) throw new Error("Login yoki parol noto'g'ri");
    if (acc.status === "PENDING") throw new Error("So'rovingiz hali Super admin tomonidan tasdiqlanmagan");
    start({ name: acc.name, role: acc.role, staffId: acc.id });
  };

  const logout = async () => {
    if (user?.server) await serverLogout().unwrap().catch(() => undefined);
    clear();
  };

  const can = (m: Module) => !!user && PERMISSIONS[user.role].includes(m);

  // Super admin akkauntni o'chirsa, xodim darrov tizimdan chiqariladi
  const staffId = localUser?.staffId;
  useEffect(() => {
    if (!staffId) return;
    return onStaffChange(() => {
      if (getStaff(staffId)?.status !== "ACTIVE") clear();
    });
  }, [staffId, clear]);

  const fhp = mode === "live" && !!session.data?.fhp && !!user?.server;

  return <Ctx.Provider value={{ user, ready, mode, fhp, login, logout, can }}>{children}</Ctx.Provider>;
}
