"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { CatalogNav } from "@/components/admin/CatalogNav";
import { DataTable, type Column } from "@/components/admin/DataTable";
import { toast } from "@/components/admin/toast";
import { Confirm, Field, FormDialog, PageHeader, SimpleSelect, StatusBadge } from "@/components/admin/ui";
import { useI18n } from "@/lib/admin/i18n";
import { slugify } from "@/lib/admin/slug";
import { digitsOnly } from "@/lib/input";
import {
  getErrorMessage,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
  useGetProductsQuery,
  useUpdateCategoryMutation,
} from "@/lib/store/api";
import type { ApiCategory } from "@/types/api";

type Draft = { id?: number; name: string; slug: string; parent: string; sort: string; isActive: boolean };
const EMPTY: Draft = { name: "", slug: "", parent: "", sort: "0", isActive: true };

export default function CategoriesPage() {
  const { t } = useI18n();
  const { data = [], isLoading, error } = useGetCategoriesQuery();
  const products = useGetProductsQuery();
  const [createCategory, createState] = useCreateCategoryMutation();
  const [updateCategory, updateState] = useUpdateCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();
  const [draft, setDraft] = useState<Draft | null>(null);
  const [removing, setRemoving] = useState<ApiCategory | null>(null);

  const names = useMemo(() => new Map(data.map((c) => [c.id, c.name])), [data]);
  const counts = useMemo(() => {
    const m = new Map<number, number>();
    for (const p of products.data ?? []) if (p.category) m.set(p.category.id, (m.get(p.category.id) ?? 0) + 1);
    return m;
  }, [products.data]);

  const cols: Column<ApiCategory>[] = [
    { key: "name", header: "Nomi", value: (c) => c.name, sortable: true },
    { key: "slug", header: "Slug", value: (c) => c.slug },
    { key: "parent", header: "Ota kategoriya", value: (c) => (c.parent ? (names.get(c.parent) ?? `#${c.parent}`) : "—"), sortable: true },
    { key: "sort", header: "Tartib", value: (c) => c.sort, sortable: true, align: "right" },
    { key: "count", header: "Mahsulotlar", value: (c) => counts.get(c.id) ?? 0, sortable: true, align: "right" },
    {
      key: "active",
      header: "Status",
      value: (c) => t(c.is_active ? "Faol" : "Nofaol"),
      render: (c) => <StatusBadge tone={c.is_active ? "green" : "grey"}>{c.is_active ? "Faol" : "Nofaol"}</StatusBadge>,
    },
    {
      key: "actions",
      header: "",
      render: (c) => (
        <Button
          variant="outline"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            setRemoving(c);
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
    const body = {
      name: draft.name.trim(),
      slug: draft.slug.trim() || slugify(draft.name),
      parent: draft.parent ? Number(draft.parent) : null,
      sort: Number(draft.sort) || 0,
      is_active: draft.isActive,
    };
    try {
      if (draft.id) await updateCategory({ id: draft.id, data: body }).unwrap();
      else await createCategory(body).unwrap();
      toast("Kategoriya saqlandi");
      setDraft(null);
    } catch (err) {
      toast(getErrorMessage(err, "Kategoriyani saqlab bo'lmadi"), "error");
    }
  };

  const set = <K extends keyof Draft>(k: K, v: Draft[K]) => setDraft((d) => (d ? { ...d, [k]: v } : d));

  return (
    <>
      <PageHeader title="Kategoriyalar" sub={t("{n} ta kategoriya", { n: data.length })}>
        <Button onClick={() => setDraft(EMPTY)}>+ {t("Kategoriya")}</Button>
      </PageHeader>
      <CatalogNav />
      <DataTable
        rows={data}
        columns={cols}
        rowKey={(c) => c.id}
        exportName="categories"
        loading={isLoading}
        error={error ? getErrorMessage(error, "Kategoriyalarni yuklab bo'lmadi") : undefined}
        searchText={(c) => `${c.name} ${c.slug}`}
        onRowClick={(c) =>
          setDraft({ id: c.id, name: c.name, slug: c.slug, parent: c.parent ? String(c.parent) : "", sort: String(c.sort), isActive: c.is_active })
        }
      />

      {draft && (
        <FormDialog
          title={draft.id ? "Kategoriyani tahrirlash" : "Yangi kategoriya"}
          busy={createState.isLoading || updateState.isLoading}
          onSubmit={() => void save()}
          onClose={() => setDraft(null)}
        >
          <Field label="Nomi" htmlFor="c-name">
            <Input id="c-name" className="h-10 bg-card" value={draft.name} onChange={(e) => set("name", e.target.value)} autoFocus />
          </Field>
          <Field label="Slug" hint="Bo'sh qolsa nomidan yasaladi" htmlFor="c-slug">
            <Input id="c-slug" className="h-10 bg-card" value={draft.slug} placeholder={slugify(draft.name)} onChange={(e) => set("slug", e.target.value)} />
          </Field>
          <Field label="Ota kategoriya">
            <SimpleSelect
              value={draft.parent}
              onValueChange={(v) => set("parent", v)}
              options={[
                { value: "", label: t("Yo'q (asosiy)") },
                ...data.filter((c) => c.id !== draft.id).map((c) => ({ value: String(c.id), label: c.name })),
              ]}
            />
          </Field>
          <Field label="Tartib" htmlFor="c-sort">
            <Input id="c-sort" className="h-10 bg-card" inputMode="numeric" value={draft.sort} onChange={(e) => set("sort", digitsOnly(e.target.value))} />
          </Field>
          <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <Checkbox checked={draft.isActive} onCheckedChange={(v) => set("isActive", v === true)} /> {t("Faol")}
          </label>
        </FormDialog>
      )}

      {removing && (
        <Confirm
          title="Kategoriyani o'chirish"
          danger
          confirmLabel="O'chirish"
          text={t("«{name}» o'chiriladi. Unga bog'langan mahsulotlar ham ta'sirlanishi mumkin.", { name: removing.name })}
          onClose={() => setRemoving(null)}
          onConfirm={async () => {
            try {
              await deleteCategory(removing.id).unwrap();
              toast("Kategoriya o'chirildi");
            } catch (err) {
              toast(getErrorMessage(err, "Kategoriyani o'chirib bo'lmadi"), "error");
            }
            setRemoving(null);
          }}
        />
      )}
    </>
  );
}
