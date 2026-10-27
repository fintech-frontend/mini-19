import "server-only";
import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { isRole, type Role } from "@/lib/admin/rbac";
import { HttpError, isHttps } from "./http";

export interface SessionUser {
  name: string;
  role: Role;
}
interface Account {
  login: string;
  password: string;
  role: Role;
}
interface Payload extends SessionUser {
  exp: number;
}

const COOKIE = "sa_session";
const TTL_SECONDS = 12 * 60 * 60;

function secret(): string | null {
  const s = process.env.ADMIN_SESSION_SECRET ?? "";
  return s.length >= 32 ? s : null;
}

/**
 * ADMIN_USERS="login:parol:ROL,login2:parol2:ROL2"
 * Parolda ':' bo'lishi mumkin (birinchi va oxirgi ':' bo'yicha ajratiladi), ',' bo'lmasligi kerak.
 */
function accounts(): Account[] {
  return (process.env.ADMIN_USERS ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .flatMap((entry): Account[] => {
      const first = entry.indexOf(":");
      const last = entry.lastIndexOf(":");
      if (first <= 0 || last === first) return [];
      const login = entry.slice(0, first);
      const password = entry.slice(first + 1, last);
      const role = entry.slice(last + 1);
      return password && isRole(role) ? [{ login, password, role }] : [];
    });
}

export const authConfigured = (): boolean => secret() !== null && accounts().length > 0;

const digest = (s: string) => createHash("sha256").update(s).digest();
const safeEqual = (a: string, b: string) => timingSafeEqual(digest(a), digest(b));
const b64 = (s: string) => Buffer.from(s, "utf8").toString("base64url");
const sign = (data: string, key: string) => createHmac("sha256", key).update(data).digest("base64url");

export function verifyCredentials(login: string, password: string): SessionUser | null {
  let found: SessionUser | null = null;
  // Barcha akkauntlarni tekshiramiz — javob vaqti login mavjudligini oshkor qilmasin
  for (const a of accounts()) {
    const ok = safeEqual(a.login.toLowerCase(), login.trim().toLowerCase()) && safeEqual(a.password, password);
    if (ok && !found) found = { name: a.login, role: a.role };
  }
  return found;
}

export function sessionCookie(req: Request, user: SessionUser): string {
  const key = secret();
  if (!key) throw new HttpError(503, "ADMIN_SESSION_SECRET sozlanmagan");
  const payload: Payload = { ...user, exp: Math.floor(Date.now() / 1000) + TTL_SECONDS };
  const data = b64(JSON.stringify(payload));
  const value = `${data}.${sign(data, key)}`;
  return `${COOKIE}=${value}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${TTL_SECONDS}${isHttps(req) ? "; Secure" : ""}`;
}

export function clearSessionCookie(req: Request): string {
  return `${COOKIE}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0${isHttps(req) ? "; Secure" : ""}`;
}

export function readSession(req: Request): SessionUser | null {
  const key = secret();
  if (!key) return null;
  const raw = (req.headers.get("cookie") ?? "")
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${COOKIE}=`))
    ?.slice(COOKIE.length + 1);
  if (!raw) return null;
  const [data, sig] = raw.split(".");
  if (!data || !sig || !safeEqual(sig, sign(data, key))) return null;
  try {
    const p = JSON.parse(Buffer.from(data, "base64url").toString("utf8")) as Partial<Payload>;
    if (typeof p.name !== "string" || !isRole(p.role) || typeof p.exp !== "number") return null;
    if (p.exp < Date.now() / 1000) return null;
    return { name: p.name, role: p.role };
  } catch {
    return null;
  }
}

export function requireSession(req: Request): SessionUser {
  if (!authConfigured()) throw new HttpError(503, "Server autentifikatsiyasi sozlanmagan (ADMIN_USERS, ADMIN_SESSION_SECRET)");
  const user = readSession(req);
  if (!user) throw new HttpError(401, "Avval tizimga kiring");
  return user;
}
