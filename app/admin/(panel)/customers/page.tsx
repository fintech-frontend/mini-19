"use client";

import { Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { DataTable, type Column } from "@/components/admin/DataTable";
import { Drawer, PageHeader, StatusBadge } from "@/components/admin/ui";
import { fmtDate, money, orderStatus, toNumber } from "@/lib/admin/format";
import { useI18n } from "@/lib/admin/i18n";
import { getErrorMessage, useGetOrdersQuery } from "@/lib/store/api";
import type { ApiOrder } from "@/types/api";

/**
 * Do'kon backendida foydalanuvchilar ro'yxati endpointi yo'q (faqat auth) — mijozlar
 * buyurtmalardagi `user` maydonidan yig'iladi. Ism/email backend bermaydi.
 */
interface Customer {
  user: number;
  orders: ApiOrder[];
  spent: number;
  last: string;
}

function CustomersView() {
  const { t } = useI18n();
  const router = useRouter();
  const params = useSearchParams();
  const { data = [], isLoading, error } = useGetOrdersQuery(undefined, { refetchOnMountOrArgChange: true });
  const [query, setQuery] = useState<number | null>(() => (params.get("user") ? Number(params.get("user")) : null));

  const customers = useMemo(() => {
    const map = new Map<number, Customer>();
    for (const o of data) {
      if (o.user == null) continue;
      const c = map.get(o.user) ?? { user: o.user, orders: [], spent: 0, last: o.created_at };
      c.orders.push(o);
      if (!["cancelled", "returned"].includes(o.status.toLowerCase())) c.spent += toNumber(o.total);
      if (o.created_at > c.last) c.last = o.created_at;
      map.set(o.user, c);
    }
    return [...map.values()];
  }, [data]);
  const guests = data.filter((o) => o.user == null).length;
  const selected = query == null ? null : (customers.find((c) => c.user === query) ?? null);

  const cols: Column<Customer>[] = [
    { key: "user", header: "Mijoz", value: (c) => c.user, sortable: true, render: (c) => `${t("Foydalanuvchi")} #${c.user}` },
    { key: "orders", header: "Buyurtmalar", value: (c) => c.orders.length, sortable: true, align: "right" },
    { key: "spent", header: "Jami xarid", value: (c) => c.spent, sortable: true, align: "right", render: (c) => money(c.spent) },
    { key: "last", header: "Oxirgi buyurtma", value: (c) => c.last, sortable: true, render: (c) => fmtDate(c.last) },
  ];

  const close = () => {
    setQuery(null);
    if (params.get("user")) router.replace("/admin/customers");
  };

  return (
    <>
      <PageHeader title="Mijozlar" sub={t("{n} ta mijoz · {g} ta mehmon buyurtmasi", { n: customers.length, g: guests })} />
      <DataTable
        rows={customers}
        columns={cols}
        rowKey={(c) => c.user}
        exportName="customers"
        loading={isLoading}
        error={error ? getErrorMessage(error, "Buyurtmalarni yuklab bo'lmadi") : undefined}
        searchText={(c) => String(c.user)}
        searchPlaceholder="Mijoz ID…"
        onRowClick={(c) => setQuery(c.user)}
      />
      {selected && (
        <Drawer title={`${t("Foydalanuvchi")} #${selected.user}`} onClose={close}>
          <dl className="kv" style={{ marginBottom: 16 }}>
            <dt>{t("Buyurtmalar")}</dt>
            <dd>{selected.orders.length}</dd>
            <dt>{t("Jami xarid")}</dt>
            <dd>{money(selected.spent)}</dd>
          </dl>
          <h3 style={{ margin: "12px 0 8px" }}>{t("Buyurtmalar tarixi")}</h3>
          <table className="t">
            <tbody>
              {selected.orders.map((o) => (
                <tr key={o.id}>
                  <td>
                    <Link href={`/admin/orders/${o.id}`}>{o.number}</Link>
                  </td>
                  <td>{fmtDate(o.created_at).slice(0, 10)}</td>
                  <td className="num">{money(toNumber(o.total))}</td>
                  <td>
                    <StatusBadge status={orderStatus(o.status)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Drawer>
      )}
    </>
  );
}

export default function CustomersPage() {
  return (
    <Suspense fallback={null}>
      <CustomersView />
    </Suspense>
  );
}
