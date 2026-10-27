"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CatalogNav } from "@/components/admin/CatalogNav";
import { DataTable, type Column } from "@/components/admin/DataTable";
import { toast } from "@/components/admin/toast";
import { Confirm, Field, FormDialog, PageHeader } from "@/components/admin/ui";
import { useI18n } from "@/lib/admin/i18n";
import { slugify } from "@/lib/admin/slug";
import {
  getErrorMessage,
  useCreateBrandMutation,
  useDeleteBrandMutation,
  useGetBrandsQuery,
  useGetProductsQuery,
  useUpdateBrandMutation,
} from "@/lib/store/api";
import type { ApiBrand } from "@/types/api";

type Draft = { id?: number; name: string; slug: string; logo: string };
const EMPTY: Draft = { name: "", slug: "", logo: "" };

export default function BrandsPage() {
  const { t } = useI18n();
  const { data = [], isLoading, error } = useGetBrandsQuery();
  const products = useGetProductsQuery();
  const [createBrand, createState] = useCreateBrandMutation();
  const [updateBrand, updateState] = useUpdateBrandMutation();
  const [deleteBrand] = useDeleteBrandMutation();
  const [draft, setDraft] = useState<Draft | null>(null);
  const [removing, setRemoving] = useState<ApiBrand | null>(null);

  const counts = useMemo(() => {
    const m = new Map<number, number>();
    for (const p of products.data ?? []) if (p.brand) m.set(p.brand.id, (m.get(p.brand.id) ?? 0) + 1);
    return m;
  }, [products.data]);

  const cols: Column<ApiBrand>[] = [
    { key: "name", header: "Nomi", value: (b) => b.name, sortable: true },
    { key: "slug", header: "Slug", value: (b) => b.slug },
    { key: "logo", header: "Logo", value: (b) => b.logo ?? "", render: (b) => b.logo || "—" },
    { key: "count", header: "Mahsulotlar", value: (b) => counts.get(b.id) ?? 0, sortable: true, align: "right" },
    {
      key: "actions",
      header: "",
      render: (b) => (
        <Button
          variant="outline"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            setRemoving(b);
          }}
        >
          {t("O'chirish")}
        </Button>
      ),
    },
  ];

  const save = async () => {
    if (!draft) return;
    if (!draft.name.trim()) {
      toast("Nomi majburiy", "error");
      return;
    }
    const body = { name: draft.name.trim(), slug: draft.slug.trim() || slugify(draft.name), ...(draft.logo.trim() && { logo: draft.logo.trim() }) };
    try {
      if (draft.id) await updateBrand({ id: draft.id, data: body }).unwrap();
      else await createBrand(body).unwrap();
      toast("Brend saqlandi");
      setDraft(null);
    } catch (err) {
      toast(getErrorMessage(err, "Brendni saqlab bo'lmadi"), "error");
    }
  };

  const set = <K extends keyof Draft>(k: K, v: Draft[K]) => setDraft((d) => (d ? { ...d, [k]: v } : d));

  return (
    <>
      <PageHeader title="Brendlar" sub={t("{n} ta brend", { n: data.length })}>
        <Button onClick={() => setDraft(EMPTY)}>+ {t("Brend")}</Button>
      </PageHeader>
      <CatalogNav />
      <DataTable
        rows={data}
        columns={cols}
        rowKey={(b) => b.id}
        exportName="brands"
        loading={isLoading}
        error={error ? getErrorMessage(error, "Brendlarni yuklab bo'lmadi") : undefined}
        searchText={(b) => `${b.name} ${b.slug}`}
        onRowClick={(b) => setDraft({ id: b.id, name: b.name, slug: b.slug, logo: b.logo ?? "" })}
      />

      {draft && (
        <FormDialog
          title={draft.id ? "Brendni tahrirlash" : "Yangi brend"}
          busy={createState.isLoading || updateState.isLoading}
          onSubmit={() => void save()}
          onClose={() => setDraft(null)}
        >
          <Field label="Nomi" htmlFor="b-name">
            <Input id="b-name" className="h-10 bg-card" value={draft.name} onChange={(e) => set("name", e.target.value)} autoFocus />
          </Field>
          <Field label="Slug" hint="Bo'sh qolsa nomidan yasaladi" htmlFor="b-slug">
            <Input id="b-slug" className="h-10 bg-card" value={draft.slug} placeholder={slugify(draft.name)} onChange={(e) => set("slug", e.target.value)} />
          </Field>
          <Field label="Logo (URL)" htmlFor="b-logo">
            <Input id="b-logo" className="h-10 bg-card" value={draft.logo} placeholder="https://…" onChange={(e) => set("logo", e.target.value)} />
          </Field>
        </FormDialog>
      )}

      {removing && (
        <Confirm
          title="Brendni o'chirish"
          danger
          confirmLabel="O'chirish"
          text={t("«{name}» o'chiriladi.", { name: removing.name })}
          onClose={() => setRemoving(null)}
          onConfirm={async () => {
            try {
              await deleteBrand(removing.id).unwrap();
              toast("Brend o'chirildi");
            } catch (err) {
              toast(getErrorMessage(err, "Brendni o'chirib bo'lmadi"), "error");
            }
            setRemoving(null);
          }}
        />
      )}
    </>
  );
}
