import { currentLang } from "./i18n";

const LOCALE = { uz: "ru-RU", ru: "ru-RU", en: "en-GB" } as const;
const CUR = { uz: "so'm", ru: "сум", en: "UZS" } as const;

export const money = (n: number) =>
  new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 }).format(n).replace(/ | /g, " ") + " " + CUR[currentLang()];

export const shortMoney = (n: number) => {
  const u = { uz: [" mlrd", " mln"], ru: [" млрд", " млн"], en: ["B", "M"] }[currentLang()];
  return n >= 1e9 ? (n / 1e9).toFixed(1) + u[0] : n >= 1e6 ? (n / 1e6).toFixed(1) + u[1] : String(Math.round(n));
};

/** Backend summalarni satr ko'rinishida beradi ("24980.00"). */
export const toNumber = (v: string | number | null | undefined) => {
  const n = typeof v === "number" ? v : Number.parseFloat(v ?? "");
  return Number.isFinite(n) ? n : 0;
};

export const fmtDate = (iso: string) =>
  new Date(iso).toLocaleString(LOCALE[currentLang()], {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

export type Tone = "green" | "yellow" | "blue" | "red" | "grey";
export interface StatusInfo {
  label: string;
  tone: Tone;
}

/**
 * Buyurtma statusi — backendda erkin satr (yangi buyurtma "pending" bo'lib keladi).
 * Admin shu ro'yxatdagi qiymatlarni PATCH /orders/:id/ bilan yozadi.
 * Label'lar o'zbekcha kalit: StatusBadge ularni tanlangan tilga tarjima qiladi.
 */
export const ORDER_FLOW = ["pending", "processing", "shipped", "delivered"] as const;
export const ORDER_STATUS: Record<string, StatusInfo> = {
  pending: { label: "Yangi", tone: "yellow" },
  processing: { label: "Jarayonda", tone: "blue" },
  shipped: { label: "Yo'lda", tone: "blue" },
  delivered: { label: "Yetkazilgan", tone: "green" },
  // Sayt (yoki to'lov) qo'yishi mumkin bo'lgan qiymatlar — flow'dan tashqari
  paid: { label: "To'langan", tone: "green" },
  completed: { label: "Yakunlangan", tone: "green" },
  cancelled: { label: "Bekor qilingan", tone: "red" },
  returned: { label: "Qaytarilgan", tone: "red" },
};
export const orderStatus = (status: string): StatusInfo =>
  ORDER_STATUS[status.toLowerCase()] ?? { label: status || "—", tone: "grey" };

/** Fintechhub: 0 INPUT, 1 WAITING, 2 PREAUTH, 3 CONFIRMED, -1 REJECTED, -2 REFUNDED, -3 CANCELLED */
export const FHP_STATUS: Record<number, { name: string } & StatusInfo> = {
  0: { name: "INPUT", label: "To'lov kutilmoqda", tone: "grey" },
  1: { name: "WAITING", label: "Jarayonda", tone: "blue" },
  2: { name: "PREAUTH", label: "Jarayonda", tone: "blue" },
  3: { name: "CONFIRMED", label: "To'langan", tone: "green" },
  [-1]: { name: "REJECTED", label: "To'lov xato", tone: "red" },
  [-2]: { name: "REFUNDED", label: "Qaytarilgan", tone: "red" },
  [-3]: { name: "CANCELLED", label: "Bekor qilingan", tone: "red" },
};
export const fhpStatus = (code: number) => FHP_STATUS[code] ?? { name: String(code), label: String(code), tone: "grey" as Tone };
export const FHP_CONFIRMED = 3;
export const FHP_REFUNDED = -2;
