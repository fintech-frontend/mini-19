import { catalogApi, getErrorMessage } from "@/lib/store/api";
import { serverQuery } from "@/lib/store/server";
import { toResolvedProduct } from "@/lib/resolveProduct";
import { collectDescendantCategoryIds } from "@/lib/catalog/categoryTree";
import { filterProductsByCategories } from "@/lib/catalog/filters";
import HeroCarousel from "@/components/home/HeroCarousel";
import CategoryGrid from "@/components/home/CategoryGrid";
import PromoBanners from "@/components/home/PromoBanners";
import TabbedProductShelf from "@/components/home/TabbedProductShelf";
import BrandStrip from "@/components/home/BrandStrip";
import AboutStore from "@/components/home/AboutStore";
import LatestNews from "@/components/home/LatestNews";
import { styles } from "@/styles/index.styles";
import type { ApiProduct } from "@/types/api";

/**
 * Подборки товаров. У backend нет флагов «хит»/«акция», поэтому:
 *  - «Хиты продаж» — последние добавленные товары;
 *  - «Лучшие предложения» — товары со скидкой (old_price > price);
 *  - «Сезонные товары» — раздел «Сад и огород» со всеми подразделами.
 */
const SHELF_LIMIT = 12;
const SEASONAL_CATEGORY_SLUG = "sad-i-ogorod";

/** Товары с фото — первыми, чтобы витрина не начиналась с заглушек. */
function withPhotosFirst(products: ApiProduct[]) {
  return products
    .map(toResolvedProduct)
    .sort((a, b) => Number(b.image != null) - Number(a.image != null))
    .slice(0, SHELF_LIMIT);
}

export default async function HomePage() {
  const [productsResult, categoriesResult] = await Promise.all([
    serverQuery(catalogApi.endpoints.getProducts.initiate()),
    serverQuery(catalogApi.endpoints.getCategories.initiate()),
  ]);
  const products = productsResult.data ?? [];
  const categories = categoriesResult.data ?? [];
  const errorMessage = productsResult.data
    ? null
    : getErrorMessage(productsResult.error, "Не удалось загрузить товары.");

  const hits = withPhotosFirst(
    [...products].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
  );

  const bestOffers = withPhotosFirst(
    products.filter((product) => product.old_price != null && Number(product.old_price) > Number(product.price))
  );

  const seasonalRoot = categories.find((category) => category.slug === SEASONAL_CATEGORY_SLUG);
  const seasonal = seasonalRoot
    ? withPhotosFirst(filterProductsByCategories(products, collectDescendantCategoryIds(categories, seasonalRoot.id)))
    : [];

  return (
    // Тот же контейнер, что у навбара и футера (styles.container), — чтобы края
    // контента совпадали с шапкой. Порядок блоков — как на stroiopttorg.ru.
    <main className={`${styles.container} min-w-0 py-6`}>
      <HeroCarousel />

      {errorMessage ? (
        <p className="py-8 text-center text-sm text-red-600">{errorMessage}</p>
      ) : (
        <TabbedProductShelf title="Хиты продаж" products={hits} viewAllHref="/products" />
      )}

      <CategoryGrid />

      <PromoBanners />

      <TabbedProductShelf title="Лучшие предложения" products={bestOffers} viewAllHref="/products" />

      <BrandStrip />

      <TabbedProductShelf
        title="Сезонные товары"
        products={seasonal}
        viewAllHref={`/catalog/${SEASONAL_CATEGORY_SLUG}`}
      />

      <AboutStore />

      <LatestNews />
    </main>
  );
}
