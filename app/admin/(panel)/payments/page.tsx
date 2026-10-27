"use client";

import { Suspense, useEffect, useRef, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { RefreshCw, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FhpPaymentDetails } from "@/components/admin/FhpPaymentDetails";
import { toast } from "@/components/admin/toast";
import { Field, PageHeader, SimpleSelect, StatusBadge } from "@/components/admin/ui";
import { useAuth } from "@/lib/admin/auth";
import { digitsOnly, phoneInputProps, sanitizeAmount, sanitizePhone } from "@/lib/input";
import { money, toNumber, type StatusInfo } from "@/lib/admin/format";
import { useI18n } from "@/lib/admin/i18n";
import {
  getErrorMessage,
  getErrorStatus,
  useFhpCreateInvoiceMutation,
  useFhpHealthQuery,
  useFhpInvoiceStatusMutation,
  useFhpOrderStatusMutation,
  useFhpPaymentStatusMutation,
} from "@/lib/store/api";
import type { FhpInvoiceStatus } from "@/types/admin";

const INVOICE: Record<FhpInvoiceStatus, StatusInfo> = {
  created: { label: "Yaratildi", tone: "blue" },
  paid: { label: "To'langan", tone: "green" },
  expired: { label: "Muddati o'tgan", tone: "grey" },
  cancelled: { label: "Bekor qilingan", tone: "red" },
};

function NotConfigured() {
  const { t } = useI18n();
  const { mode, user } = useAuth();
  return (
    <div className="card">
      <h3>{t("Fintechhub ulanmagan")}</h3>
      <p style={{ margin: "8px 0" }}>
        {mode === "demo"
          ? t("Panel demo rejimida. Serverda ADMIN_USERS va ADMIN_SESSION_SECRET o'rnatilgach, haqiqiy login va Fintechhub API yoqiladi.")
          : !user?.server
            ? t("Fintechhub API faqat serverdagi akkaunt (ADMIN_USERS) bilan kirganda ishlaydi.")
            : t("Serverda FHP_API_URL, FHP_MERCHANT_USER_ID, FHP_MERCHANT_SECRET_KEY va FHP_SERVICE_ID o'rnatilmagan.")}
      </p>
      <p className="hint">{t("Kalitlar faqat server muhitida (.env yoki hosting sozlamalari) saqlanadi, brauzerga chiqmaydi. Namuna: .env.example")}</p>
    </div>
  );
}

function Health() {
  const { t } = useI18n();
  const { data: h, error, isFetching, refetch } = useFhpHealthQuery();
  const state: StatusInfo | null = !h ? null : !h.configured ? { label: "Sozlanmagan", tone: "grey" } : h.ok ? { label: "Ulangan", tone: "green" } : { label: "Xato", tone: "red" };

  return (
    <div className="card">
      <div className="row" style={{ justifyContent: "space-between", marginBottom: 12 }}>
        <h3 style={{ margin: 0 }}>{t("Ulanish holati")}</h3>
        <Button variant="outline" size="sm" onClick={() => void refetch()} disabled={isFetching}>
          <RefreshCw size={14} /> {t("Tekshirish")}
        </Button>
      </div>
      {isFetching && !h && <p className="hint">{t("Kuting…")}</p>}
      {error && <p className="err">{getErrorMessage(error, "Fintechhub javob bermadi")}</p>}
      {h && state && (
        <dl className="kv">
          <dt>Status</dt>
          <dd>
            <StatusBadge status={state} />
          </dd>
          {h.baseUrl && (
            <>
              <dt>API</dt>
              <dd style={{ wordBreak: "break-all" }}>{h.baseUrl}</dd>
            </>
          )}
          {h.serviceId && (
            <>
              <dt>Service ID</dt>
              <dd>{h.serviceId}</dd>
            </>
          )}
          {h.error && (
            <>
              <dt>{t("Xato")}</dt>
              <dd>{h.error}</dd>
            </>
          )}
        </dl>
      )}
    </div>
  );
}

type LookupKind = "order" | "payment";

function PaymentLookup() {
  const { t } = useI18n();
  const params = useSearchParams();
  const [kind, setKind] = useState<LookupKind>(params.get("payment_id") ? "payment" : "order");
  const [q, setQ] = useState(params.get("mti") ?? params.get("payment_id") ?? "");
  const [byOrder, orderRes] = useFhpOrderStatusMutation();
  const [byPayment, paymentRes] = useFhpPaymentStatusMutation();
  const [active, setActive] = useState<LookupKind | null>(null);
  const [err, setErr] = useState("");

  const run = async (k: LookupKind, value: string) => {
    const v = value.trim();
    if (!v) return;
    setErr("");
    setActive(k);
    try {
      if (k === "payment") {
        const id = Number(v);
        if (!Number.isSafeInteger(id) || id <= 0) throw new Error("Payment ID musbat butun son bo'lishi kerak");
        await byPayment(id).unwrap();
      } else {
        await byOrder(v).unwrap();
      }
    } catch (e) {
      setActive(null);
      setErr(getErrorStatus(e) === 404 ? "Fintechhub'da bunday to'lov topilmadi" : getErrorMessage(e, e instanceof Error ? e.message : "Fintechhub javob bermadi"));
    }
  };

  // /admin/payments?mti=ORDER-1001 yoki ?payment_id=10 — avtomatik qidirish (bir marta)
  const autoRun = useRef(false);
  useEffect(() => {
    if (autoRun.current) return;
    autoRun.current = true;
    const mti = params.get("mti");
    const pid = params.get("payment_id");
    // setState effect tanasida sinxron chaqirilmasin (react-hooks/set-state-in-effect)
    void Promise.resolve().then(() => {
      if (mti) return run("order", mti);
      if (pid) return run("payment", pid);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    void run(kind, q);
  };
  const res = active === "payment" ? paymentRes : active === "order" ? orderRes : null;
  const busy = orderRes.isLoading || paymentRes.isLoading;

  return (
    <div className="card">
      <h3>{t("To'lovni tekshirish")}</h3>
      <form className="row" style={{ gap: 8, flexWrap: "wrap", margin: "12px 0" }} onSubmit={submit}>
        <SimpleSelect
          className="w-[190px]"
          value={kind}
          onValueChange={(v) => setKind(v as LookupKind)}
          aria-label={t("Qidiruv turi")}
          options={[
            { value: "order", label: t("Buyurtma raqami") },
            { value: "payment", label: "Payment ID" },
          ]}
        />
        <Input
          className="h-10 min-w-[180px] flex-1 bg-card"
          value={q}
          onChange={(e) => setQ(kind === "payment" ? digitsOnly(e.target.value) : e.target.value)}
          placeholder={kind === "order" ? "ORDER-1001" : "10"}
          inputMode={kind === "payment" ? "numeric" : undefined}
        />
        <Button type="submit" className="h-10" disabled={busy || !q.trim()}>
          <Search size={14} /> {busy ? t("Kuting…") : t("Qidirish")}
        </Button>
      </form>

      {err && <p className="err">{t(err)}</p>}
      {res?.data && <FhpPaymentDetails res={res.data} onChanged={() => void run("payment", String(res.data!.payment.payment_id))} />}
    </div>
  );
}

function Invoices() {
  const { t } = useI18n();
  const [order, setOrder] = useState("");
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("+998");
  const [lookupId, setLookupId] = useState("");
  const [err, setErr] = useState("");
  const [createInvoice, createState] = useFhpCreateInvoiceMutation();
  const [loadStatus, statusState] = useFhpInvoiceStatusMutation();

  const load = async (id: number) => {
    setErr("");
    try {
      await loadStatus(id).unwrap();
    } catch (e) {
      setErr(getErrorStatus(e) === 404 ? "Invoice topilmadi" : getErrorMessage(e, "Fintechhub javob bermadi"));
    }
  };

  const create = async (e: FormEvent) => {
    e.preventDefault();
    setErr("");
    try {
      const r = await createInvoice({ merchant_trans_id: order.trim(), amount: Number(amount.replace(/\s/g, "")), phone_number: phone.trim() }).unwrap();
      toast(t("Invoice yaratildi: #{id}", { id: r.invoice_id }));
      setLookupId(String(r.invoice_id));
      await load(r.invoice_id);
    } catch (x) {
      setErr(getErrorMessage(x, "Invoice yaratilmadi"));
    }
  };

  const lookup = (e: FormEvent) => {
    e.preventDefault();
    const id = Number(lookupId);
    if (Number.isSafeInteger(id) && id > 0) void load(id);
    else setErr("Invoice ID musbat butun son bo'lishi kerak");
  };

  const i = statusState.data?.invoice;
  return (
    <div className="card">
      <h3>Invoice</h3>
      <form onSubmit={create} style={{ marginTop: 12 }}>
        <div className="grid g-2" style={{ gap: 12 }}>
          <Field label="Buyurtma raqami" htmlFor="inv-order">
            <Input id="inv-order" className="h-10 bg-card" value={order} onChange={(e) => setOrder(e.target.value)} placeholder="ORDER-1001" required />
          </Field>
          <Field label="Summa (UZS)" htmlFor="inv-amount">
            <Input id="inv-amount" className="h-10 bg-card" value={amount} onChange={(e) => setAmount(sanitizeAmount(e.target.value))} placeholder="125000" inputMode="decimal" required />
          </Field>
          <Field label="Mijoz telefoni" htmlFor="inv-phone">
            <Input id="inv-phone" className="h-10 bg-card" value={phone} onChange={(e) => setPhone(sanitizePhone(e.target.value))} placeholder="+998901234567" {...phoneInputProps} required />
          </Field>
        </div>
        <Button type="submit" disabled={createState.isLoading}>
          {createState.isLoading ? t("Kuting…") : t("Invoice yaratish")}
        </Button>
      </form>

      <form className="row" style={{ gap: 8, margin: "16px 0 12px" }} onSubmit={lookup}>
        <Input className="h-10 flex-1 bg-card" value={lookupId} onChange={(e) => setLookupId(digitsOnly(e.target.value))} placeholder="Invoice ID" inputMode="numeric" />
        <Button type="submit" variant="outline" className="h-10" disabled={!lookupId.trim() || statusState.isLoading}>
          <Search size={14} /> {t("Statusni tekshirish")}
        </Button>
      </form>

      {err && <p className="err">{t(err)}</p>}
      {i && (
        <dl className="kv">
          <dt>Invoice ID</dt>
          <dd>{i.invoice_id}</dd>
          <dt>{t("Buyurtma")}</dt>
          <dd>{i.merchant_trans_id}</dd>
          <dt>{t("Summa")}</dt>
          <dd>{money(toNumber(i.amount))}</dd>
          <dt>{t("Telefon")}</dt>
          <dd>{i.phone_number}</dd>
          <dt>Status</dt>
          <dd>
            <StatusBadge status={INVOICE[i.status] ?? { label: i.status, tone: "grey" }} />
          </dd>
        </dl>
      )}
    </div>
  );
}

/** Fintechhub-payment Merchant API: ulanish holati, to'lovni tekshirish va refund, invoice. */
export default function PaymentsPage() {
  const { fhp } = useAuth();
  return (
    <>
      <PageHeader title="To'lovlar" sub="Fintechhub-payment Merchant API" />
      {!fhp ? (
        <NotConfigured />
      ) : (
        <div className="grid g-2" style={{ alignItems: "start" }}>
          <div style={{ display: "grid", gap: 16 }}>
            <Health />
            <Invoices />
          </div>
          <Suspense fallback={null}>
            <PaymentLookup />
          </Suspense>
        </div>
      )}
    </>
  );
}
