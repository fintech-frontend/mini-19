// Rollar va ruxsatlar matritsasi. Admin menyu/guard ham, server (app/api/admin) ham
// shu bitta manbadan foydalanadi.

export const ROLES = ["SUPER_ADMIN", "MANAGER", "WAREHOUSE", "ACCOUNTANT", "CONTENT"] as const;
export type Role = (typeof ROLES)[number];

export type Module = "dashboard" | "products" | "orders" | "payments" | "refund" | "customers" | "settings";

const ALL: Module[] = ["dashboard", "products", "orders", "payments", "refund", "customers", "settings"];

export const PERMISSIONS: Record<Role, Module[]> = {
  SUPER_ADMIN: ALL,
  MANAGER: ["dashboard", "products", "orders", "payments", "customers"],
  WAREHOUSE: ["dashboard", "products", "orders"],
  ACCOUNTANT: ["dashboard", "orders", "payments", "refund", "customers"],
  CONTENT: ["products"],
};

export const isRole = (v: unknown): v is Role => typeof v === "string" && (ROLES as readonly string[]).includes(v);

export const roleCan = (role: Role, ...modules: Module[]): boolean => modules.some((m) => PERMISSIONS[role].includes(m));
