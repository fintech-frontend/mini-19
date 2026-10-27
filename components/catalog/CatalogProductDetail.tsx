import { ImageOff } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import CatalogProductCard from "@/components/catalog/CatalogProductCard";
import ProductPerks from "@/components/catalog/ProductPerks";
import ProductPurchaseCard from "@/components/catalog/ProductPurchaseCard";
import ProductReviews from "@/components/catalog/ProductReviews";
import ProductTabs from "@/components/ui/ProductTabs";
import { ResolvedProduct } from "@/lib/resolveProduct";
import { styles } from "@/styles/index.styles";

interface CrumbItem {
  label: string;
  href?: string;
}

/** Сколько характеристик показываем в короткой сводке слева до ссылки "Больше характеристик". */
const SUMMARY_SPECS = 6;

/** attrs_json — единственное поле backend с произвольными данными товара (см. types/api.ts). */
function attrsToSpecEntries(attrs: Record<string, unknown>): { label: string; value: string }[] {
  return Object.entries(attrs)
    .filter(([, value]) => value !== null && value !== undefined && value !== "")
    .map(([label, value]) => ({ label, value: String(value) }));
}

/**
 * Страница товара для любой категории каталога. У backend-товара нет
 * изображений/галереи (см. types/api.ts) — вместо галереи ImageOff-плейсхолдер, как и
 * в карточке. Характеристики — это attrs_json, рендерится только если непустой.
 */
export default function CatalogProductDetail({
  product,
  attrs,
  similar,
  breadcrumbItems,
}: {
  product: ResolvedProduct;
  attrs: Record<string, unknown>;
  similar: ResolvedProduct[];
  breadcrumbItems: CrumbItem[];
}) {
  const specEntries = attrsToSpecEntries(attrs);
  const summarySpecs = specEntries.slice(0, SUMMARY_SPECS);
  const hasMoreSpecs = specEntries.length > summarySpecs.length;

  return (
    <div className={`${styles.container} py-6`}>
      <Breadcrumbs items={breadcrumbItems} />

      <h1 className="mb-6 border-b border-dashed border-neutral-200 pb-4 text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
        {product.title}
      </h1>

      <div className="mb-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50">
            <ImageOff className="h-12 w-12 text-neutral-300" />
          </div>
        </div>

        <div className="flex flex-col gap-5 text-sm lg:col-span-4">
          {product.description && <p className="leading-relaxed text-neutral-600">{product.description}</p>}

          {summarySpecs.length > 0 && (
            <div>
              {summarySpecs.map((entry) => (
                <div key={entry.label} className="flex items-center justify-between border-b border-dotted border-neutral-200 py-1.5">
                  <span className="text-neutral-500">{entry.label}</span>
                  <span className="text-right font-medium">{entry.value}</span>
                </div>
              ))}
            </div>
          )}

          {hasMoreSpecs && (
            <a href="#full-specs" className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline">
              Больше характеристик &darr;
            </a>
          )}

          <ProductPerks />
        </div>

        <ProductPurchaseCard
          productId={product.id}
          title={product.title}
          articul={product.article}
          price={product.price}
          oldPrice={product.oldPrice}
          inStock={product.inStock}
        />
      </div>

      <ProductTabs title={product.title} specs={specEntries} description={product.description ?? undefined} />

      {similar.length > 0 && (
        <div className="border-t border-neutral-200 pt-10">
          <h2 className="mb-6 text-lg font-bold tracking-tight text-neutral-900 sm:text-xl">Похожие товары</h2>
          <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 xl:grid-cols-4">
            {similar.map((p) => (
              <CatalogProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

      <ProductReviews title={product.title} />
    </div>
  );
}
