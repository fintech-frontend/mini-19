import { staticProducts } from "@/data/staticProducts";
import HeroCarousel from "@/components/home/HeroCarousel";
import CategoryGrid from "@/components/home/CategoryGrid";
import PromoBanners from "@/components/home/PromoBanners";
import TabbedProductShelf from "@/components/home/TabbedProductShelf";
import BrandStrip from "@/components/home/BrandStrip";
import AboutStore from "@/components/home/AboutStore";
import LatestNews from "@/components/home/LatestNews";

export default function HomePage() {
  const bestSellers = staticProducts.filter((p) => p.isBestSeller);
  const bestDeals = staticProducts.filter((p) => p.isFeatured);

  return (
    <main className="min-w-0 max-w-7xl mx-auto divide-y divide-gray-100 px-4 py-6 sm:px-6 lg:px-8">
      <div className="pb-8">
        <HeroCarousel />
      </div>

      <CategoryGrid />

      <PromoBanners />

      <TabbedProductShelf
        title="Хиты продаж"
        subtitle="Самые популярные товары у наших покупателей"
        products={bestSellers}
        viewAllHref="/products"
      />

      <BrandStrip />

      <TabbedProductShelf
        title="Лучшие предложения"
        subtitle="Скидки и акционные цены"
        products={bestDeals}
        viewAllHref="/products"
      />

      <AboutStore />

      <LatestNews />
    </main>
  );
}
