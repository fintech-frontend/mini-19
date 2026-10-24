import "server-only";
import { createHash } from "node:crypto";
import { roleCan, type Module } from "@/lib/admin/rbac";
import { HttpError, assertSameOrigin, json, readJson, wrap } from "./http";
import { authConfigured, requireSession } from "./session";

// Fintechhub-payment Merchant API proxy.
// Hujjat: http://159.223.145.49:3078 (Merchant authentication, Status and refunds, Invoices, Errors).
// Kalitlar faqat serverda (env) turadi; brauzer faqat /api/admin/fhp ga murojaat qiladi.

interface FhpConfig {
  baseUrl: string;
  merchantUserId: string;
  secretKey: string;
  serviceId: number;
}

export function fhpConfig(): FhpConfig | null {
  const baseUrl = (process.env.FHP_API_URL ?? "").replace(/\/+$/, "");
  const merchantUserId = process.env.FHP_MERCHANT_USER_ID ?? "";
  const secretKey = process.env.FHP_MERCHANT_SECRET_KEY ?? "";
  const serviceId = Number(process.env.FHP_SERVICE_ID);
  if (!baseUrl || !merchantUserId || !secretKey || !Number.isInteger(serviceId) || serviceId <= 0) return null;
  return { baseUrl, merchantUserId, secretKey, serviceId };
}

/** Auth: <merchant_user_id>:<sha1(timestamp + merchant_secret_key)>:<timestamp> */
export function merchantAuthHeader(merchantUserId: string, secretKey: string, nowMs = Date.now()): string {
  const ts = Math.floor(nowMs / 1000).toString();
  const digest = createHash("sha1").update(`${ts}${secretKey}`).digest("hex");
  return `${merchantUserId}:${digest}:${ts}`;
}

interface Upstream {
  status: number;
  data: unknown;
}

async function callFhp(cfg: FhpConfig, method: "GET" | "POST" | "DELETE", path: string, body?: unknown): Promise<Upstream> {
  let res: Response;
  try {
    res = await fetch(`${cfg.baseUrl}${path}`, {
      method,
      headers: {
        Accept: "application/json",
        Auth: merchantAuthHeader(cfg.merchantUserId, cfg.secretKey),
        ...(body !== undefined ? { "Content-Type": "application/json" } : {}),
      },
      body: body !== undefined ? JSON.stringify(body) : undefined,
      cache: "no-store",
      signal: AbortSignal.timeout(15_000),
    });
  } catch (e) {
    throw new HttpError(502, `Fintechhub serveriga ulanib bo'lmadi: ${(e as Error).message}`);
  }
  const text = await res.text();
  let data: unknown = null;
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text.slice(0, 500) };
    }
  }
  return { status: res.status, data };
}

/** DRF xato javobidan odam o'qiydigan matn: {"detail": "..."} | ["..."] | {"field": ["..."]} */
function upstreamMessage(data: unknown): string {
  if (Array.isArray(data) && data.length) return String(data[0]);
  if (data && typeof data === "object") {
    const o = data as Record<string, unknown>;
    if (typeof o.detail === "string") return o.detail;
    if (typeof o.error_note === "string" && o.error_note !== "Success") return o.error_note;
    for (const v of Object.values(o)) {
      if (Array.isArray(v) && v.length) return String(v[0]);
      if (typeof v === "string") return v;
    }
  }
  return "Noma'lum xato";
}

/** Fintechhub javobini brauzerga uzatadi. Uning 401/403 lari bizning sessiya xatolari bilan aralashmasligi uchun 502 qilinadi. */
function relay(up: Upstream): Response {
  if (up.status >= 200 && up.status < 300) {
    const code = (up.data as { error_code?: unknown } | null)?.error_code;
    if (typeof code === "number" && code !== 0) {
      return json({ error: upstreamMessage(up.data), data: up.data }, 422);
    }
    return json(up.data, 200);
  }
  if (up.status === 401 || up.status === 403) {
    return json({ error: `Fintechhub kalitlari rad etildi: ${upstreamMessage(up.data)}`, data: up.data }, 502);
  }
  if (up.status === 400 || up.status === 404) {
    return json({ error: upstreamMessage(up.data), data: up.data }, up.status);
  }
  return json({ error: `Fintechhub xatosi (HTTP ${up.status})`, data: up.data }, 502);
}

function requireConfig(): FhpConfig {
  const cfg = fhpConfig();
  if (!cfg) throw new HttpError(503, "Fintechhub sozlanmagan (FHP_API_URL, FHP_MERCHANT_USER_ID, FHP_MERCHANT_SECRET_KEY, FHP_SERVICE_ID)");
  return cfg;
}

function requireRole(req: Request, ...modules: Module[]): void {
  const user = requireSession(req);
  if (!roleCan(user.role, ...modules)) throw new HttpError(403, "Sizning rolingizga bu amal ruxsat etilmagan");
}

function positiveInt(v: unknown, name: string): number {
  const n = typeof v === "number" ? v : Number(String(v ?? "").trim());
  if (!Number.isSafeInteger(n) || n <= 0) throw new HttpError(400, `${name} musbat butun son bo'lishi kerak`);
  return n;
}

function transId(v: unknown): string {
  const s = String(v ?? "").trim();
  if (!/^[A-Za-z0-9._-]{1,64}$/.test(s)) throw new HttpError(400, "Buyurtma raqami noto'g'ri (masalan ORDER-1001)");
  return s;
}

function amount(v: unknown): string {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(/\s/g, ""));
  if (!Number.isFinite(n) || n <= 0) throw new HttpError(400, "Summa musbat son bo'lishi kerak");
  return n.toFixed(2);
}

function phone(v: unknown): string {
  const s = String(v ?? "").replace(/[\s()-]/g, "");
  if (!/^\+998\d{9}$/.test(s)) throw new HttpError(400, "Telefon +998XXXXXXXXX formatida bo'lishi kerak");
  return s;
}

const op = (req: Request) => new URL(req.url).searchParams.get("op") ?? "";
const param = (req: Request, k: string) => new URL(req.url).searchParams.get(k);

export const fhpGet = wrap(async (req) => {
  switch (op(req)) {
    case "health": {
      requireSession(req);
      const cfg = fhpConfig();
      if (!cfg) return json({ configured: false, ok: false, auth: authConfigured() });
      // Mavjud bo'lmagan to'lovni so'raymiz: 404 => kalitlar va service to'g'ri, 401/403 => noto'g'ri
      const up = await callFhp(cfg, "GET", `/merchant/payment/status/${cfg.serviceId}/999999999`);
      const ok = up.status === 404 || (up.status >= 200 && up.status < 300);
      return json({
        configured: true,
        ok,
        baseUrl: cfg.baseUrl,
        serviceId: cfg.serviceId,
        error: ok ? null : upstreamMessage(up.data),
      });
    }
    case "status": {
      requireRole(req, "payments", "orders");
      const cfg = requireConfig();
      const id = positiveInt(param(req, "payment_id"), "payment_id");
      return relay(await callFhp(cfg, "GET", `/merchant/payment/status/${cfg.serviceId}/${id}`));
    }
    case "status_by_mti": {
      requireRole(req, "payments", "orders");
      const cfg = requireConfig();
      const mti = transId(param(req, "mti"));
      return relay(await callFhp(cfg, "GET", `/merchant/payment/status_by_mti/${cfg.serviceId}/${encodeURIComponent(mti)}`));
    }
    case "invoice_status": {
      requireRole(req, "payments");
      const cfg = requireConfig();
      const id = positiveInt(param(req, "invoice_id"), "invoice_id");
      return relay(await callFhp(cfg, "GET", `/merchant/invoice/status/${cfg.serviceId}/${id}`));
    }
    default:
      throw new HttpError(404, "Noma'lum amal");
  }
});

export const fhpPost = wrap(async (req) => {
  assertSameOrigin(req);
  switch (op(req)) {
    case "refund": {
      requireRole(req, "refund");
      const cfg = requireConfig();
      const body = await readJson(req);
      const id = positiveInt(body.payment_id, "payment_id");
      return relay(await callFhp(cfg, "DELETE", `/merchant/payment/reversal/${cfg.serviceId}/${id}`));
    }
    case "invoice_create": {
      requireRole(req, "payments");
      const cfg = requireConfig();
      const body = await readJson(req);
      return relay(
        await callFhp(cfg, "POST", "/merchant/invoice/create", {
          service_id: cfg.serviceId,
          amount: amount(body.amount),
          phone_number: phone(body.phone_number),
          merchant_trans_id: transId(body.merchant_trans_id),
        }),
      );
    }
    default:
      throw new HttpError(404, "Noma'lum amal");
  }
});
