"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, buttonVariants } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useI18n } from "@/lib/admin/i18n";
import { slugify } from "@/lib/admin/slug";
import { sanitizeAmount } from "@/lib/input";
import { toNumber } from "@/lib/admin/format";
import {
  getErrorMessage,
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetBrandsQuery,
  useGetCategoriesQuery,
  useGetProductsQuery,
  useUpdateProductMutation,
  type ProductInput,
} from "@/lib/store/api";
import type { ApiProduct } from "@/types/api";
import { CatalogNav } from "./CatalogNav";
import { toast } from "./toast";
import { Confirm, ErrorState, Field, LoadingRows, PageHeader, SimpleSelect, Tabs } from "./ui";

type Tab = "general" | "prices" | "specs";

/** /admin/products/new va /admin/products/[id] — mahsulot formasi (do'kon backendi: /products/). */
export function ProductForm({ productId }: { productId?: number }) {
  const { t } = useI18n();
  const products = useGetProductsQuery(undefined, { skip: productId == null });
  const product = productId == null ? undefined : products.data?.find((p) => p.id === productId);

  if (productId != null && products.isLoading) return <LoadingRows rows={8} />;
  if (productId != null && products.error) {
    return <ErrorState message={getErrorMessage(products.error, "Mahsulotni yuklab bo'lmadi")} onRetry={() => void products.refetch()} />;
  }
  if (productId != null && !product) {
    return (
      <div className="card">
        {t("Mahsulot topilmadi.")} <Link href="/admin/products">{t("Orqaga")}</Link>
      </div>
    );
  }
  // key — boshqa mahsulotga o'tganda forma holati yangidan olinadi
  return <ProductFormInner key={product?.id ?? "new"} product={product} />;
}

const specsFrom = (attrs: Record<string, unknown> | undefined) => {
  const list = Object.entries(attrs ?? {}).map(([k, v]) => ({ k, v: typeof v === "string" ? v : JSON.stringify(v) }));
  return list.length ? list : [{ k: "", v: "" }];
};

function ProductFormInner({ product }: { product?: ApiProduct }) {
  const router = useRouter();
  const { t } = useI18n();
  const categories = useGetCategoriesQuery();
  const brands = useGetBrandsQuery();
  const [createProduct, createState] = useCreateProductMutation();
  const [updateProduct, updateState] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const [tab, setTab] = useState<Tab>("general");
  const [f, setF] = useState({
    name: product?.name ?? "",
    slug: product?.slug ?? "",
    article: product?.article ?? "",
    categoryId: product?.category ? String(product.category.id) : "",
    brandId: product?.brand ? String(product.brand.id) : "",
    description: product?.description ?? "",
    price: product ? String(toNumber(product.price)) : "",
    oldPrice: product?.old_price ? String(toNumber(product.old_price)) : "",
    isActive: product?.is_active ?? true,
  });
  const [specs, setSpecs] = useState(() => specsFrom(product?.attrs_json));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmDelete, setConfirmDelete] = useState(false);
  const set = <K extends keyof typeof f>(k: K, v: (typeof f)[K]) => setF((s) => ({ ...s, [k]: v }));
  const busy = createState.isLoading || updateState.isLoading;

  const save = async () => {
    const e: Record<string, string> = {};
    const price = Number(f.price);
    const oldPrice = f.oldPrice.trim() ? Number(f.oldPrice) : null;
    if (!f.name.trim()) e.name = "Nomi majburiy";
    if (!f.article.trim()) e.article = "Artikul majburiy";
    if (!f.categoryId) e.category = "Kategoriyani tanlang";
    if (!(price > 0)) e.price = "Narx 0 dan katta bo'lishi kerak";
    if (oldPrice != null && !(oldPrice > 0)) e.oldPrice = "Eski narx musbat son bo'lishi kerak";
    setErrors(e);
    if (Object.keys(e).length) {
      setTab(e.name || e.article || e.category ? "general" : "prices");
      toast("Formada xatolar bor", "error");
      return;
    }

    const body: ProductInput = {
      name: f.name.trim(),
      slug: f.slug.trim() || slugify(f.name),
      article: f.article.trim(),
      category_id: Number(f.categoryId),
      brand_id: f.brandId ? Number(f.brandId) : null,
      price,
      old_price: oldPrice,
      description: f.description.trim(),
      is_active: f.isActive,
      attrs_json: Object.fromEntries(specs.filter((s) => s.k.trim()).map((s) => [s.k.trim(), s.v.trim()])),
    };
    try {
      if (product) await updateProduct({ id: product.id, data: body }).unwrap();
      else await createProduct(body).unwrap();
      toast("Mahsulot saqlandi");
      router.push("/admin/products");
    } catch (err) {
      toast(getErrorMessage(err, "Mahsulotni saqlab bo'lmadi"), "error");
    }
  };

  const remove = async () => {
    if (!product) return;
    try {
      await deleteProduct(product.id).unwrap();
      toast("Mahsulot o'chirildi");
      router.push("/admin/products");
    } catch (err) {
      toast(getErrorMessage(err, "Mahsulotni o'chirib bo'lmadi"), "error");
      setConfirmDelete(false);
    }
  };

  return (
    <>
      <PageHeader title={product ? "Mahsulotni tahrirlash" : "Yangi mahsulot"} sub={product?.article}>
        <Link className={buttonVariants({ variant: "outline" })} href="/admin/products">
          {t("Bekor qilish")}
        </Link>
        {product && (
          <Button variant="destructive" onClick={() => setConfirmDelete(true)}>
            {t("O'chirish")}
          </Button>
        )}
        <Button onClick={() => void save()} disabled={busy}>
          {busy ? t("Kuting…") : t("Saqlash")}
        </Button>
      </PageHeader>
      <CatalogNav />

      <div className="card">
        <Tabs<Tab>
          value={tab}
          onChange={setTab}
          tabs={[
            { key: "general", label: "Umumiy" },
            { key: "prices", label: "Narxlar" },
            { key: "specs", label: "Xususiyatlar" },
          ]}
        />

        {tab === "general" && (
          <div className="form-grid">
            <Field label="Nomi" error={errors.name} htmlFor="p-name">
              <Input id="p-name" className="h-10 bg-card" value={f.name} onChange={(e) => set("name", e.target.value)} />
            </Field>
            <Field label="Artikul" error={errors.article} htmlFor="p-article">
              <Input id="p-article" className="h-10 bg-card" value={f.article} onChange={(e) => set("article", e.target.value)} />
            </Field>
            <Field label="Kategoriya" error={errors.category}>
              <SimpleSelect
                value={f.categoryId}
                onValueChange={(v) => set("categoryId", v)}
                placeholder={categories.isLoading ? t("Yuklanmoqda…") : t("Tanlang")}
                options={(categories.data ?? []).map((c) => ({ value: String(c.id), label: c.name }))}
              />
            </Field>
            <Field label="Brend">
              <SimpleSelect
                value={f.brandId}
                onValueChange={(v) => set("brandId", v)}
                options={[{ value: "", label: t("Brendsiz") }, ...(brands.data ?? []).map((b) => ({ value: String(b.id), label: b.name }))]}
              />
            </Field>
            <Field label="Slug" hint="Bo'sh qolsa nomidan yasaladi" htmlFor="p-slug">
              <Input id="p-slug" className="h-10 bg-card" value={f.slug} placeholder={slugify(f.name)} onChange={(e) => set("slug", e.target.value)} />
            </Field>
            <Field label="Tavsif" htmlFor="p-desc">
              <Textarea id="p-desc" className="bg-card" rows={4} value={f.description} onChange={(e) => set("description", e.target.value)} />
            </Field>
            <label style={{ display: "flex", gap: 8, alignItems: "center", gridColumn: "1 / -1", marginBottom: 12 }}>
              <Checkbox checked={f.isActive} onCheckedChange={(v) => set("isActive", v === true)} /> {t("Saytda ko'rinadi (faol)")}
            </label>
          </div>
        )}

        {tab === "prices" && (
          <div className="form-grid">
            <Field label="Narx" error={errors.price} htmlFor="p-price">
              <Input id="p-price" className="h-10 bg-card" inputMode="decimal" value={f.price} onChange={(e) => set("price", sanitizeAmount(e.target.value))} />
            </Field>
            <Field label="Eski narx / chegirma" hint="Bo'sh — chegirma yo'q" error={errors.oldPrice} htmlFor="p-old">
              <Input id="p-old" className="h-10 bg-card" inputMode="decimal" value={f.oldPrice} onChange={(e) => set("oldPrice", sanitizeAmount(e.target.value))} />
            </Field>
          </div>
        )}

        {tab === "specs" && (
          <>
            {specs.map((s, i) => (
              <div className="row" key={i} style={{ marginBottom: 8 }}>
                <Input
                  className="h-10 bg-card"
                  value={s.k}
                  onChange={(e) => setSpecs(specs.map((x, j) => (j === i ? { ...x, k: e.target.value } : x)))}
                  placeholder={t("Kalit (quvvat, o'lcham…)")}
                />
                <Input
                  className="h-10 bg-card"
                  value={s.v}
                  onChange={(e) => setSpecs(specs.map((x, j) => (j === i ? { ...x, v: e.target.value } : x)))}
                  placeholder={t("Qiymat")}
                />
                <Button variant="outline" size="icon" onClick={() => setSpecs(specs.filter((_, j) => j !== i))} aria-label={t("O'chirish")}>
                  ✕
                </Button>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={() => setSpecs([...specs, { k: "", v: "" }])}>
              + {t("Xususiyat qo'shish")}
            </Button>
          </>
        )}
      </div>

      {confirmDelete && product && (
        <Confirm
          title="Mahsulotni o'chirish"
          danger
          confirmLabel="O'chirish"
          text={t("«{name}» butunlay o'chiriladi.", { name: product.name })}
          onClose={() => setConfirmDelete(false)}
          onConfirm={remove}
        />
      )}
    </>
  );
}
