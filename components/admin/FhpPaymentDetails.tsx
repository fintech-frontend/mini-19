"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/admin/auth";
import { FHP_CONFIRMED, FHP_REFUNDED, fhpStatus, money, toNumber } from "@/lib/admin/format";
import { useI18n } from "@/lib/admin/i18n";
import { getErrorMessage, useFhpRefundMutation } from "@/lib/store/api";
import type { FhpStatusResponse } from "@/types/admin";
import { toast } from "./toast";
import { Confirm, StatusBadge } from "./ui";

/**
 * Fintechhub to'lovi: maydonlar, Refund (faqat CONFIRMED, rol `refund`) va xom javob.
 * Buyurtma sahifasi ham, To'lovlar sahifasi ham shuni ishlatadi.
 */
export function FhpPaymentDetails({ res, onChanged }: { res: FhpStatusResponse; onChanged: () => void }) {
  const { t } = useI18n();
  const { can } = useAuth();
  const [refund, { isLoading }] = useFhpRefundMutation();
  const [confirm, setConfirm] = useState(false);
  const p = res.payment;
  const status = fhpStatus(p.status);

  const doRefund = async () => {
    try {
      const r = await refund(p.payment_id).unwrap();
      toast(r.payment_status === FHP_REFUNDED ? "Refund bajarildi" : `Refund: ${fhpStatus(r.payment_status).name}`);
      onChanged();
    } catch (err) {
      toast(getErrorMessage(err, "Refund bajarilmadi"), "error");
    } finally {
      setConfirm(false);
    }
  };

  return (
    <>
      <dl className="kv" style={{ marginBottom: 12 }}>
        <dt>Payment ID</dt>
        <dd>{p.payment_id}</dd>
        <dt>{t("Buyurtma")}</dt>
        <dd>{p.merchant_trans_id}</dd>
        <dt>{t("Summa")}</dt>
        <dd>{money(toNumber(p.amount))}</dd>
        <dt>{t("Usul")}</dt>
        <dd>{p.payment_type}</dd>
        <dt>Status</dt>
        <dd>
          <StatusBadge status={status} />{" "}
          <span className="hint">
            {status.name} · {p.status_note}
          </span>
        </dd>
        {p.merchant_prepare_id !== undefined && (
          <>
            <dt>merchant_prepare_id</dt>
            <dd>{p.merchant_prepare_id}</dd>
          </>
        )}
        {p.merchant_confirm_id !== undefined && (
          <>
            <dt>merchant_confirm_id</dt>
            <dd>{p.merchant_confirm_id}</dd>
          </>
        )}
      </dl>
      {p.status === FHP_CONFIRMED && can("refund") && (
        <Button variant="destructive" size="sm" className="mb-3" disabled={isLoading} onClick={() => setConfirm(true)}>
          Refund
        </Button>
      )}
      <details>
        <summary>{t("Provayderdan kelgan xom javob")}</summary>
        <pre className="code">{JSON.stringify(res, null, 2)}</pre>
      </details>

      {confirm && (
        <Confirm
          title="Pulni qaytarish"
          danger
          confirmLabel="Qaytarish"
          text={t("{num} uchun {sum} to'liq qaytariladi.", { num: p.merchant_trans_id, sum: money(toNumber(p.amount)) })}
          onClose={() => setConfirm(false)}
          onConfirm={doRefund}
        />
      )}
    </>
  );
}
