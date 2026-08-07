import { notFound } from "next/navigation";
import Link from "next/link";
import { staticProducts } from "../../../data/staticProducts";
import ProductCard from "@/components/ui/ProductCard";
import ProductTabs from "@/components/ui/ProductTabs";
import BuyOneClickButton from "@/components/ui/BuyOneClickButton";
import ProductGallery from "@/components/ui/ProductGallery";

interface ProductDetailProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: ProductDetailProps) {
  const { id } = await params;
  const product = staticProducts.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const otherProducts = staticProducts.filter((p) => p.id !== id);

  return (
    <div className="min-w-0 max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 bg-white font-sans text-gray-900">

      {/* Хлебные крошки */}
      <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1.5 overflow-x-auto whitespace-nowrap py-1">
        <Link href="/" className="hover:text-blue-600">Каталог</Link>
        <span>/</span>
        <span className="hover:text-blue-600 cursor-pointer">{product.category}</span>
        <span>/</span>
        <span className="text-gray-400 truncate">{product.title}</span>
      </nav>

      {/* Название товара */}
      <h1 className="text-xl sm:text-2xl font-bold tracking-tight border-b border-dashed border-gray-300 pb-3 mb-6">
        {product.title}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">

        {/* Фотогалерея */}
        <div className="lg:col-span-5">
          <ProductGallery images={[product.image, ...product.gallery]} alt={product.title} />
        </div>

        {/* Краткие характеристики */}
        <div className="lg:col-span-4 flex flex-col gap-5 text-sm">
          <div>
            <div className="flex justify-between py-1.5 border-b border-dotted border-gray-200">
              <span className="text-gray-500">Тип товара</span>
              <span className="font-medium text-right">{product.category}</span>
            </div>
            {product.specs.slice(0, 6).map((spec, index) => (
              <div key={index} className="flex justify-between py-1.5 border-b border-dotted border-gray-200">
                <span className="text-gray-500">{spec.label}</span>
                <span className="font-medium text-right">{spec.value}</span>
              </div>
            ))}
          </div>

          <a href="#full-specs" className="text-blue-600 font-semibold text-xs hover:underline flex items-center gap-1">
            Больше характеристик &darr;
          </a>

          <div className="mt-2 space-y-2 text-xs text-gray-600 border-t border-gray-100 pt-4">
            <div className="flex items-center gap-2">
              <span className="text-blue-500 text-lg">💳</span><span>Оплата любым удобным способом</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500 text-lg">📦</span><span>Большой выбор товаров в каталоге</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500 text-lg">🚚</span><span>Осуществляем быструю доставку</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500 text-lg">🏷️</span><span>Делаем скидки на крупные покупки</span>
            </div>
          </div>
        </div>

        {/* Коммерческий блок */}
        <div className="lg:col-span-3 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-center text-xs text-gray-400 mb-3">
            <span>Артикул: XJ89YHGO</span>
            <span className={`${product.inStock ? "text-green-600" : "text-red-500"} font-medium flex items-center gap-1`}>
              {product.inStock ? "✓ В наличии" : "Нет в наличии"}
            </span>
          </div>

          <div className="mb-5">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-gray-900">
                {product.price.toLocaleString("ru-RU")} ₽
              </span>
              <span className="text-sm text-gray-400 line-through">
                {(product.price * 1.15).toLocaleString("ru-RU")} ₽
              </span>
              <span className="bg-green-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                -15%
              </span>
            </div>
          </div>

          <div className="space-y-2.5">
            <button
              disabled={!product.inStock}
              className={`w-full py-3 px-4 rounded-lg font-bold text-sm shadow-sm transition-all duration-150 ${
                product.inStock
                  ? "bg-blue-600 text-white hover:bg-blue-700 active:scale-[0.98]"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              ДОБАВИТЬ В КОРЗИНУ
            </button>

            <BuyOneClickButton product={product} disabled={!product.inStock} />
          </div>

          <div className="flex justify-around border-t border-gray-100 mt-5 pt-4 text-xs font-medium text-gray-600">
            <button className="hover:text-blue-600 flex items-center gap-1.5">
              <span>♡</span> В избранное
            </button>
            <button className="hover:text-blue-600 flex items-center gap-1.5">
              <span>📊</span> Сравнить
            </button>
          </div>
        </div>

      </div>

      {/* Табы */}
      <ProductTabs product={product} />

      {/* Похожие товары (.map) */}
      <div className="border-t border-gray-200 pt-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg sm:text-xl font-bold tracking-tight text-gray-900">
            Похожие товары
          </h2>
          <span className="text-xs font-bold text-blue-600 hover:underline cursor-pointer">
            Показать все &rarr;
          </span>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {otherProducts.length > 0 ? (
            otherProducts.map((otherProduct) => (
              <ProductCard key={otherProduct.id} product={otherProduct} />
            ))
          ) : (
            <p className="text-xs text-gray-400 col-span-full">Нет похожих товаров.</p>
          )}
        </div>
      </div>

    </div>
  );
}
