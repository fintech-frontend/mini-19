"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button, buttonVariants } from "@/components/ui/button";
import { FhpPaymentDetails } from "@/components/admin/FhpPaymentDetails";
import { toast } from "@/components/admin/toast";
import { Confirm, ErrorState, LoadingRows, PageHeader, StatusBadge } from "@/components/admin/ui";
import { useAuth } from "@/lib/admin/auth";
import { fmtDate, money, ORDER_FLOW, orderStatus, toNumber } from "@/lib/admin/format";
import { useI18n } from "@/lib/admin/i18n";
import { getErrorMessage, getErrorStatus, useFhpOrderStatusMutation, useGetOrdersQuery, useUpdateOrderStatusMutation } from "@/lib/store/api";
import type { ApiOrder } from "@/types/api";

export default function OrderDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useI18n();
  const { data, isLoading, error, refetch } = useGetOrdersQuery(undefined, { refetchOnMountOrArgChange: true });
  const order = data?.find((o) => o.id === Number(id));

  if (isLoading) return <LoadingRows rows={8} />;
  if (error) return <ErrorState message={getErrorMessage(error, "Buyurtmani yuklab bo'lmadi")} onRetry={() => void refetch()} />;
  if (!order) {
    return (
      <div className="card">
        {t("Buyurtma topilmadi.")} <Link href="/admin/orders">{t("Orqaga")}</Link>
      </div>
    );
  }
  return <OrderDetail order={order} />;
}

function OrderDetail({ order }: { order: ApiOrder }) {
  const { t } = useI18n();
  const { fhp: fhpReady } = useAuth();
  const [updateStatus, { isLoading: saving }] = useUpdateOrderStatusMutation();
  const [lookup, payment] = useFhpOrderStatusMutation();
  const [cancel, setCancel] = useState(false);

  const status = order.status.toLowerCase();
  const flowIndex = ORDER_FLOW.indexOf(status as (typeof ORDER_FLOW)[number]);
  const next = flowIndex >= 0 ? ORDER_FLOW[flowIndex + 1] : undefined;
  const subtotal = toNumber(order.subtotal);
  const total = toNumber(order.total);

  const setStatus = async (value: string) => {
    try {
      await updateStatus({ id: order.id, status: value }).unwrap();
      toast(`${t("Status")}: ${t(orderStatus(value).label)}`);
    } catch (err) {
      toast(getErrorMessage(err, "Statusni o'zgartirib bo'lmadi"), "error");
    }
  };

  /** Fintechhub: GET payment/status_by_mti/{service_id}/{buyurtma raqami} */
  const checkPayment = async () => {
    try {
      await lookup(order.number).unwrap();
    } catch (err) {
      toast(getErrorStatus(err) === 404 ? "Fintechhub'da bu buyurtma bo'yicha to'lov topilmadi" : getErrorMessage(err, "Fintechhub javob bermadi"), getErrorStatus(err) === 404 ? "info" : "error");
    }
  };

  return (
    <>
      <PageHeader title={order.number} sub={fmtDate(order.created_at)}>
        <Link className={buttonVariants({ variant: "outline" })} href="/admin/orders">
          ‹ {t("Orqaga")}
        </Link>
        <Button variant="outline" onClick={() => window.print()}>
          {t("Chop etish")}
        </Button>
        {next && (
          <Button disabled={saving} onClick={() => void setStatus(next)}>
            → {t(orderStatus(next).label)}
          </Button>
        )}
        {!["cancelled", "delivered", "returned"].includes(status) && (
          <Button variant="outline" onClick={() => setCancel(true)}>
            {t("Bekor qilish")}
          </Button>
        )}
      </PageHeader>

      <div className="grid g-21">
        <div className="card" style={{ alignSelf: "start" }}>
          <h3>{t("Buyurtma")}</h3>
          <dl className="kv">
            <dt>{t("Raqam")}</dt>
            <dd>{order.number}</dd>
            <dt>{t("Sana")}</dt>
            <dd>{fmtDate(order.created_at)}</dd>
            <dt>{t("Mijoz")}</dt>
            <dd>{order.user != null ? <Link href={`/admin/customers?user=${order.user}`}>#{order.user}</Link> : t("Mehmon")}</dd>
            <dt>{t("Oraliq summa")}</dt>
            <dd>{money(subtotal)}</dd>
            <dt>{t("Chegirma")}</dt>
            <dd>−{money(Math.max(0, subtotal - total))}</dd>
            <dt>
              <b>{t("Jami")}</b>
            </dt>
            <dd>
              <b>{money(total)}</b>
            </dd>
          </dl>
          <p className="hint" style={{ marginTop: 16, marginBottom: 0 }}>
            {t("Buyurtma tarkibi va yetkazish ma'lumotlari backend API'da saqlanmaydi.")}
          </p>
        </div>

        <div style={{ display: "grid", gap: 16, alignContent: "start" }}>
          <div className="card">
            <h3>{t("Holat")}</h3>
            <StatusBadge status={orderStatus(order.status)} />
          </div>
          <div className="card">
            <h3>{t("To'lov (Fintechhub)")}</h3>
            {!fhpReady ? (
              <p className="hint" style={{ margin: 0 }}>
                {t("Fintechhub faqat serverdagi akkaunt bilan va kalitlar o'rnatilganda ishlaydi.")}
              </p>
            ) : (
              <>
                <Button variant="outline" size="sm" className="mb-3" disabled={payment.isLoading} onClick={() => void checkPayment()}>
                  {payment.isLoading ? t("Kuting…") : t("Statusni tekshirish")}
                </Button>
                {payment.data && <FhpPaymentDetails res={payment.data} onChanged={() => void checkPayment()} />}
              </>
            )}
          </div>
        </div>
      </div>

      {cancel && (
        <Confirm
          title="Buyurtmani bekor qilish"
          danger
          confirmLabel="Bekor qilish"
          text="Buyurtma statusi «Bekor qilingan» bo'ladi."
          onClose={() => setCancel(false)}
          onConfirm={async () => {
            await setStatus("cancelled");
            setCancel(false);
          }}
        />
      )}
    </>
  );
}
