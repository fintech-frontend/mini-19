import Image from "next/image";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import CatalogProductCard from "@/components/catalog/CatalogProductCard";
import ProductPerks from "@/components/catalog/ProductPerks";
import ProductPurchaseCard from "@/components/catalog/ProductPurchaseCard";
import ProductReviews from "@/components/catalog/ProductReviews";
import ProductGallery from "@/components/ui/ProductGallery";
import ProductTabs from "@/components/ui/ProductTabs";
import { CatalogListingData, CatalogListingProduct } from "@/types/catalog-listing";
import { styles } from "@/styles/index.styles";

interface CrumbItem {
  label: string;
  href?: string;
}

/** Сколько характеристик показываем в короткой сводке слева до ссылки "Больше характеристик". */
const SUMMARY_SPECS = 6;

/**
 * Страница товара для любого терминального узла дерева каталога. Не привязана к
 * конкретной глубине и категории — basePath и breadcrumbItems приходят от вызывающего
 * маршрута (app/catalog/[...path]).
 *
 * Товары каталога сняты с разной полнотой (см. data/listings): у одних есть галерея,
 * specs и описание, у других — только цена и фото. Поэтому каждый блок здесь
 * скрывается, если для него нет данных, а не рисует пустую рамку.
 */
export default function CatalogProductDetail({
  listing,
  product,
  basePath,
  breadcrumbItems,
}: {
  listing: CatalogListingData;
  product: CatalogListingProduct;
  basePath: string;
  breadcrumbItems: CrumbItem[];
}) {
  // Полные характеристики (product.specs), если они сняты, иначе — то, что уже
  // есть для фильтров карточек (filterValues), а не пусто.
  const specEntries =
    product.specs ??
    listing.filterFields
      .map((field) => ({ label: field.title, value: product.filterValues?.[field.id] }))
      .filter((entry): entry is { label: string; value: string } => Boolean(entry.value));

  const summarySpecs = specEntries.slice(0, SUMMARY_SPECS);
  const hasMoreSpecs = specEntries.length > summarySpecs.length;
  const similar = listing.products.filter((p) => p.id !== product.id).slice(0, 8);

  return (
    <div className={`${styles.container} py-6`}>
      <Breadcrumbs items={breadcrumbItems} />

      <h1 className="mb-6 border-b border-dashed border-neutral-200 pb-4 text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
        {product.title}
      </h1>

      <div className="mb-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          {product.image && product.gallery && product.gallery.length > 0 ? (
            <ProductGallery images={[product.image, ...product.gallery]} alt={product.title} />
          ) : (
            <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50">
              {product.image && (
                <Image src={product.image} alt={product.title} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-contain p-8" />
              )}
            </div>
          )}
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
          title={product.title}
          articul={product.articul}
          price={product.price}
          oldPrice={product.oldPrice}
          inStock={product.inStock}
        />
      </div>

      <ProductTabs title={product.title} specs={specEntries} description={product.description} />

      {similar.length > 0 && (
        <div className="border-t border-neutral-200 pt-10">
          <h2 className="mb-6 text-lg font-bold tracking-tight text-neutral-900 sm:text-xl">Похожие товары</h2>
          <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 xl:grid-cols-4">
            {similar.map((p) => (
              <CatalogProductCard key={p.id} product={p} basePath={basePath} />
            ))}
          </div>
        </div>
      )}

      <ProductReviews title={product.title} />
    </div>
  );
}
