"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DataTable, type Column } from "@/components/admin/DataTable";
import { PageHeader, StatusBadge, Tabs } from "@/components/admin/ui";
import { fmtDate, money, ORDER_STATUS, orderStatus, toNumber } from "@/lib/admin/format";
import { useI18n } from "@/lib/admin/i18n";
import { getErrorMessage, useGetOrdersQuery } from "@/lib/store/api";
import type { ApiOrder } from "@/types/api";

const TABS = [{ key: "all", label: "Hammasi" }, ...Object.entries(ORDER_STATUS).map(([key, s]) => ({ key, label: s.label }))];

export default function OrderListPage() {
  const router = useRouter();
  const { t } = useI18n();
  const { data = [], isLoading, error } = useGetOrdersQuery(undefined, { pollingInterval: 30_000, refetchOnMountOrArgChange: true });
  const [tab, setTab] = useState("all");
  const rows = tab === "all" ? data : data.filter((o) => o.status.toLowerCase() === tab);

  const cols: Column<ApiOrder>[] = [
    { key: "number", header: "Buyurtma #", value: (o) => o.number, sortable: true },
    { key: "date", header: "Sana", value: (o) => o.created_at, sortable: true, render: (o) => fmtDate(o.created_at) },
    { key: "user", header: "Mijoz", value: (o) => (o.user != null ? `#${o.user}` : t("Mehmon")) },
    { key: "subtotal", header: "Oraliq summa", value: (o) => toNumber(o.subtotal), align: "right", render: (o) => money(toNumber(o.subtotal)) },
    { key: "total", header: "Summa", value: (o) => toNumber(o.total), sortable: true, align: "right", render: (o) => money(toNumber(o.total)) },
    { key: "status", header: "Status", value: (o) => t(orderStatus(o.status).label), render: (o) => <StatusBadge status={orderStatus(o.status)} /> },
  ];

  return (
    <>
      <PageHeader title="Buyurtmalar" sub={t("{n} ta buyurtma", { n: data.length })} />
      <Tabs tabs={TABS} value={tab} onChange={setTab} />
      <DataTable
        rows={rows}
        columns={cols}
        rowKey={(o) => o.id}
        exportName="orders"
        loading={isLoading}
        error={error ? getErrorMessage(error, "Buyurtmalarni yuklab bo'lmadi") : undefined}
        searchText={(o) => `${o.number} ${o.user ?? ""}`}
        searchPlaceholder="Buyurtma #, mijoz ID…"
        onRowClick={(o) => router.push(`/admin/orders/${o.id}`)}
      />
    </>
  );
}
