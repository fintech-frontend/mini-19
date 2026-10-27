"use client";

import { useMemo } from "react";
import Link from "next/link";
import { FolderTree, Package, Receipt, ShoppingCart, Users, Wallet } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ErrorState, Kpi, LoadingRows, PageHeader, StatusBadge } from "@/components/admin/ui";
import { fmtDate, money, orderStatus, shortMoney, toNumber } from "@/lib/admin/format";
import { useI18n } from "@/lib/admin/i18n";
import { useChartColors } from "@/lib/admin/theme";
import { getErrorMessage, useGetCategoriesQuery, useGetOrdersQuery, useGetProductsQuery } from "@/lib/store/api";

const DAYS = 14;
/** created_at backenddan "2026-10-02T18:43:26" ko'rinishida keladi — sanani mahalliy kun bilan solishtiramiz */
const dayKey = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

export default function DashboardPage() {
  const { t } = useI18n();
  const c = useChartColors();
  const orders = useGetOrdersQuery(undefined, { pollingInterval: 30_000, refetchOnMountOrArgChange: true });
  const products = useGetProductsQuery();
  const categories = useGetCategoriesQuery();

  const stats = useMemo(() => {
    const list = orders.data ?? [];
    const valid = list.filter((o) => !["cancelled", "returned"].includes(o.status.toLowerCase()));
    const revenue = valid.reduce((s, o) => s + toNumber(o.total), 0);

    // Oxirgi 14 kun bo'yicha tushum (buyurtma bo'lmagan kunlar ham 0 bilan)
    const byDay = new Map<string, number>();
    const today = new Date();
    for (let i = DAYS - 1; i >= 0; i--) byDay.set(dayKey(new Date(today.getFullYear(), today.getMonth(), today.getDate() - i)), 0);
    for (const o of valid) {
      const k = o.created_at.slice(0, 10);
      if (byDay.has(k)) byDay.set(k, byDay.get(k)! + toNumber(o.total));
    }

    const byStatus = new Map<string, number>();
    for (const o of list) byStatus.set(o.status.toLowerCase(), (byStatus.get(o.status.toLowerCase()) ?? 0) + 1);

    const byCategory = new Map<string, number>();
    for (const p of products.data ?? []) {
      const name = p.category?.name ?? "—";
      byCategory.set(name, (byCategory.get(name) ?? 0) + 1);
    }

    return {
      revenue,
      count: list.length,
      avg: valid.length ? revenue / valid.length : 0,
      customers: new Set(list.map((o) => o.user).filter((u) => u != null)).size,
      sales: [...byDay].map(([day, value]) => ({ day: day.slice(8, 10) + "." + day.slice(5, 7), value })),
      statuses: [...byStatus].map(([status, value]) => ({ status, value })),
      categories: [...byCategory].map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value).slice(0, 8),
    };
  }, [orders.data, products.data]);

  const error = orders.error ?? products.error ?? categories.error;
  if (error) {
    return (
      <>
        <PageHeader title="Dashboard" />
        <ErrorState
          message={getErrorMessage(error, "Ma'lumotlarni yuklab bo'lmadi")}
          onRetry={() => {
            void orders.refetch();
            void products.refetch();
            void categories.refetch();
          }}
        />
      </>
    );
  }

  const loading = orders.isLoading || products.isLoading || categories.isLoading;
  const tip = { contentStyle: { background: c.tooltipBg, border: `1px solid ${c.grid}`, borderRadius: 8, color: c.axis } };
  const inactive = (products.data ?? []).filter((p) => !p.is_active).slice(0, 6);
  const statusData = stats.statuses.map((s) => ({ name: t(orderStatus(s.status).label), value: s.value }));

  return (
    <>
      <PageHeader title="Dashboard" sub="Do'kon backendidan jonli ma'lumotlar" />
      <div className="grid g-6" style={{ marginBottom: 16 }}>
        <Kpi label="Umumiy tushum" value={loading ? "…" : shortMoney(stats.revenue)} icon={<Wallet size={18} />} />
        <Kpi label="Buyurtmalar" value={loading ? "…" : String(stats.count)} icon={<ShoppingCart size={18} />} />
        <Kpi label="O'rtacha chek" value={loading ? "…" : shortMoney(stats.avg)} icon={<Receipt size={18} />} tint="green" />
        <Kpi label="Mahsulotlar" value={loading ? "…" : String(products.data?.length ?? 0)} icon={<Package size={18} />} />
        <Kpi label="Kategoriyalar" value={loading ? "…" : String(categories.data?.length ?? 0)} icon={<FolderTree size={18} />} />
        <Kpi label="Mijozlar" value={loading ? "…" : String(stats.customers)} icon={<Users size={18} />} tint="green" />
      </div>

      <div className="grid g-21" style={{ marginBottom: 16 }}>
        <div className="card">
          <h3>{t("Tushum (oxirgi 14 kun)")}</h3>
          {loading ? (
            <LoadingRows rows={8} />
          ) : (
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={stats.sales}>
                <CartesianGrid strokeDasharray="3 3" stroke={c.grid} />
                <XAxis dataKey="day" tick={{ fill: c.axis, fontSize: 12 }} stroke={c.grid} />
                <YAxis tickFormatter={(v: number) => shortMoney(v)} tick={{ fill: c.axis, fontSize: 12 }} stroke={c.grid} />
                <Tooltip formatter={(v) => money(Number(v))} {...tip} />
                <Line type="monotone" dataKey="value" name={t("Tushum")} stroke={c.primary} strokeWidth={2.5} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
        <div className="card">
          <h3>{t("Buyurtma holatlari")}</h3>
          {loading ? (
            <LoadingRows rows={8} />
          ) : (
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie data={statusData} dataKey="value" nameKey="name" innerRadius={55} outerRadius={90} stroke="none">
                  {statusData.map((_, i) => (
                    <Cell key={i} fill={c.series[i % c.series.length]} />
                  ))}
                </Pie>
                <Tooltip {...tip} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <h3>{t("Kategoriyalar bo'yicha mahsulotlar")}</h3>
        {loading ? (
          <LoadingRows rows={6} />
        ) : (
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={stats.categories}>
              <CartesianGrid strokeDasharray="3 3" stroke={c.grid} />
              <XAxis dataKey="name" tick={{ fill: c.axis, fontSize: 12 }} stroke={c.grid} />
              <YAxis allowDecimals={false} tick={{ fill: c.axis, fontSize: 12 }} stroke={c.grid} />
              <Tooltip cursor={{ fill: c.grid, opacity: 0.4 }} {...tip} />
              <Bar dataKey="value" name={t("Mahsulotlar")} fill={c.primary} radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      <div className="grid g-2">
        <div className="card">
          <h3>{t("Oxirgi buyurtmalar")}</h3>
          <div className="table-scroll">
            <table className="t">
              <tbody>
                {(orders.data ?? []).slice(0, 6).map((o) => (
                  <tr key={o.id}>
                    <td>
                      <Link href={`/admin/orders/${o.id}`}>{o.number}</Link>
                      <div style={{ color: "var(--muted)", fontSize: 12 }}>{fmtDate(o.created_at)}</div>
                    </td>
                    <td className="num">{money(toNumber(o.total))}</td>
                    <td>
                      <StatusBadge status={orderStatus(o.status)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {!loading && !orders.data?.length && <div className="empty">{t("Hozircha buyurtma yo'q")}</div>}
          </div>
        </div>
        <div className="card">
          <h3>{t("Nofaol mahsulotlar")}</h3>
          <table className="t">
            <tbody>
              {inactive.map((p) => (
                <tr key={p.id}>
                  <td>
                    <Link href={`/admin/products/${p.id}`}>{p.name}</Link>
                    <div style={{ color: "var(--muted)", fontSize: 12 }}>{p.article}</div>
                  </td>
                  <td className="num">
                    <StatusBadge tone="grey">Nofaol</StatusBadge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {!loading && inactive.length === 0 && <div className="empty">{t("Barcha mahsulotlar faol")}</div>}
        </div>
      </div>
    </>
  );
}
