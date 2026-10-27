"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CatalogNav } from "@/components/admin/CatalogNav";
import { DataTable, type Column } from "@/components/admin/DataTable";
import { PageHeader, SimpleSelect, StatusBadge } from "@/components/admin/ui";
import { money, toNumber } from "@/lib/admin/format";
import { useI18n } from "@/lib/admin/i18n";
import { getErrorMessage, useGetProductsQuery } from "@/lib/store/api";
import type { ApiProduct } from "@/types/api";

export default function ProductListPage() {
  const router = useRouter();
  const { t } = useI18n();
  const { data = [], isLoading, error } = useGetProductsQuery();
  const [status, setStatus] = useState("");
  const rows = status ? data.filter((p) => (status === "active" ? p.is_active : !p.is_active)) : data;

  const cols: Column<ApiProduct>[] = [
    { key: "photo", header: "", render: (p) => <div className="thumb">{p.name[0]}</div> },
    { key: "name", header: "Nomi", value: (p) => p.name, sortable: true },
    { key: "article", header: "Artikul", value: (p) => p.article, sortable: true },
    { key: "category", header: "Kategoriya", value: (p) => p.category?.name ?? "—", sortable: true },
    { key: "brand", header: "Brend", value: (p) => p.brand?.name ?? "—", sortable: true },
    { key: "price", header: "Narx", value: (p) => toNumber(p.price), sortable: true, align: "right", render: (p) => money(toNumber(p.price)) },
    {
      key: "old",
      header: "Eski narx",
      value: (p) => toNumber(p.old_price),
      align: "right",
      render: (p) => (p.old_price ? money(toNumber(p.old_price)) : "—"),
    },
    {
      key: "status",
      header: "Status",
      value: (p) => t(p.is_active ? "Faol" : "Nofaol"),
      render: (p) => <StatusBadge tone={p.is_active ? "green" : "grey"}>{p.is_active ? "Faol" : "Nofaol"}</StatusBadge>,
    },
  ];

  return (
    <>
      <PageHeader title="Mahsulotlar" sub={t("{n} ta mahsulot", { n: data.length })}>
        <Button onClick={() => router.push("/admin/products/new")}>+ {t("Mahsulot qo'shish")}</Button>
      </PageHeader>
      <CatalogNav />
      <DataTable
        rows={rows}
        columns={cols}
        rowKey={(p) => p.id}
        exportName="products"
        loading={isLoading}
        error={error ? getErrorMessage(error, "Mahsulotlarni yuklab bo'lmadi") : undefined}
        searchText={(p) => `${p.name} ${p.article} ${p.category?.name ?? ""} ${p.brand?.name ?? ""}`}
        searchPlaceholder="Nomi, artikul, kategoriya…"
        onRowClick={(p) => router.push(`/admin/products/${p.id}`)}
        toolbar={
          <SimpleSelect
            className="w-[170px]"
            value={status}
            onValueChange={setStatus}
            aria-label={t("Status filtri")}
            options={[
              { value: "", label: t("Barcha statuslar") },
              { value: "active", label: t("Faol") },
              { value: "inactive", label: t("Nofaol") },
            ]}
          />
        }
      />
    </>
  );
}
