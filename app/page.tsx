import { listProducts } from "@/lib/api/products";
import { toResolvedProduct, ResolvedProduct } from "@/lib/resolveProduct";
import { ApiError } from "@/lib/api/errors";
import HeroCarousel from "@/components/home/HeroCarousel";
import CategoryGrid from "@/components/home/CategoryGrid";
import PromoBanners from "@/components/home/PromoBanners";
import TabbedProductShelf from "@/components/home/TabbedProductShelf";
import BrandStrip from "@/components/home/BrandStrip";
import AboutStore from "@/components/home/AboutStore";
import LatestNews from "@/components/home/LatestNews";

/** Сколько товаров показываем в шапке "Новинки" — backend не отдаёт флагов
 *  "хит продаж"/"акция" (см. types/api.ts), поэтому единственный честный признак
 *  подборки — дата создания. */
const SHELF_LIMIT = 12;

export default async function HomePage() {
  let newest: ResolvedProduct[] = [];
  let rest: ResolvedProduct[] = [];
  let errorMessage: string | null = null;

  try {
    const products = await listProducts();
    const sortedByDate = [...products].sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
    newest = sortedByDate.slice(0, SHELF_LIMIT).map(toResolvedProduct);
    rest = sortedByDate.slice(SHELF_LIMIT).map(toResolvedProduct);
  } catch (error) {
    errorMessage = error instanceof ApiError ? error.message : "Не удалось загрузить товары.";
  }

  return (
    <main className="min-w-0 max-w-7xl mx-auto divide-y divide-gray-100 px-4 py-6 sm:px-6 lg:px-8">
      <div className="pb-8">
        <HeroCarousel />
      </div>

      <CategoryGrid />

      <PromoBanners />

      {errorMessage ? (
        <p className="py-8 text-center text-sm text-red-600">{errorMessage}</p>
      ) : (
        <TabbedProductShelf
          title="Новинки"
          subtitle="Недавно добавленные товары в каталоге"
          products={newest}
          viewAllHref="/products"
        />
      )}

      <BrandStrip />

      {!errorMessage && (
        <TabbedProductShelf
          title="Все товары"
          subtitle="Полный ассортимент интернет-магазина"
          products={rest}
          viewAllHref="/products"
        />
      )}

      <AboutStore />

      <LatestNews />
    </main>
  );
}
