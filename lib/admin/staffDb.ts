"use client";

import { useEffect, useState } from "react";
import type { Role } from "./rbac";

/**
 * Xodimlar bazasi — hozircha brauzer localStorage'ida (mock): do'kon backendida
 * xodimlar uchun endpoint yo'q. Haqiqiy server akkauntlari — ADMIN_USERS (lib/admin/server/session.ts).
 */
export type StaffStatus = "PENDING" | "ACTIVE";
export interface StaffAccount {
  id: string;
  name: string;
  phone: string;
  password: string; // mock; backendda faqat hash saqlanadi
  role: Exclude<Role, "SUPER_ADMIN">;
  status: StaffStatus;
  createdAt: string;
}

const ACC = "stroy_admin_staff";
const SMS = "stroy_admin_sms_outbox";
const EVENT = "stroy-db";

/**
 * Demo Super admin — faqat server sozlanmagan, `next dev` da va login/parol
 * NEXT_PUBLIC_ADMIN_DEMO_* da o'zingiz yozgan bo'lsagina ishlaydi. Kodda standart
 * parol yo'q; productionda kirish faqat ADMIN_USERS orqali.
 */
const demoLogin = process.env.NEXT_PUBLIC_ADMIN_DEMO_LOGIN ?? "";
const demoPassword = process.env.NEXT_PUBLIC_ADMIN_DEMO_PASSWORD ?? "";
export const DEMO_SUPER = {
  enabled: process.env.NODE_ENV !== "production" && demoLogin !== "" && demoPassword !== "",
  login: demoLogin,
  password: demoPassword,
  phone: process.env.NEXT_PUBLIC_ADMIN_SUPER_PHONE || "+998900000000",
  name: "Super admin",
};

export const normPhone = (p: string) => p.replace(/[^\d+]/g, "");

function read<T>(key: string): T[] {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}
function write(key: string, v: unknown) {
  localStorage.setItem(key, JSON.stringify(v));
  window.dispatchEvent(new Event(EVENT)); // shu tabdagi tinglovchilar uchun
}

export const listStaff = () => read<StaffAccount>(ACC);
export const findStaff = (phone: string) => listStaff().find((a) => a.phone === normPhone(phone));
export const getStaff = (id: string) => listStaff().find((a) => a.id === id);

/** Mock SMS: haqiqiy yuborish o'rniga outbox'ga yoziladi va konsolga chiqadi. */
function sendSms(to: string, text: string) {
  console.info(`[SMS → ${to}] ${text}`);
  const outbox = read<{ id: string; to: string; text: string; at: string }>(SMS);
  write(SMS, [{ id: crypto.randomUUID(), to, text, at: new Date().toISOString() }, ...outbox].slice(0, 50));
}

export function registerStaff(input: { name: string; phone: string; password: string; role: StaffAccount["role"] }) {
  const phone = normPhone(input.phone);
  if (phone === normPhone(DEMO_SUPER.phone)) throw new Error("Bu raqam band");
  if (findStaff(phone)) throw new Error("Bu raqam allaqachon ro'yxatdan o'tgan");
  const acc: StaffAccount = {
    id: crypto.randomUUID(),
    name: input.name.trim(),
    phone,
    password: input.password,
    role: input.role,
    status: "PENDING",
    createdAt: new Date().toISOString(),
  };
  write(ACC, [acc, ...listStaff()]);
  sendSms(DEMO_SUPER.phone, `Yangi xodim so'rovi: ${acc.name} (${phone}), rol: ${acc.role}. Admin panelda Ha/Yo'q ni bosing.`);
}

export function approveStaff(id: string) {
  write(ACC, listStaff().map((a) => (a.id === id ? { ...a, status: "ACTIVE" as const } : a)));
}

/** Rad etish yoki chiqarib yuborish: akkaunt o'chadi, xodim qayta ro'yxatdan o'tishi kerak. */
export function removeStaff(id: string) {
  write(ACC, listStaff().filter((a) => a.id !== id));
}

/** localStorage o'zgarishiga (shu va boshqa tab) obuna. */
export function onStaffChange(cb: () => void): () => void {
  window.addEventListener("storage", cb);
  window.addEventListener(EVENT, cb);
  return () => {
    window.removeEventListener("storage", cb);
    window.removeEventListener(EVENT, cb);
  };
}

/** Xodimlar ro'yxati; boshqa tabda o'zgarsa ham yangilanadi. */
export function useStaffList(): StaffAccount[] {
  const [list, setList] = useState(listStaff);
  useEffect(() => onStaffChange(() => setList(listStaff())), []);
  return list;
}
