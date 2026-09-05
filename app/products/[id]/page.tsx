import { notFound } from "next/navigation";
import Link from "next/link";
import { ImageOff } from "lucide-react";
import { getProduct, listProducts } from "@/lib/api/products";
import { toResolvedProduct, ResolvedProduct } from "@/lib/resolveProduct";
import { ApiError } from "@/lib/api/errors";
import ProductCard from "@/components/ui/ProductCard";
import ProductTabs from "@/components/ui/ProductTabs";
import BuyOneClickButton from "@/components/ui/BuyOneClickButton";
import ProductFavoriteCompareButtons from "@/components/ui/ProductFavoriteCompareButtons";
import AddToCartButton from "@/components/ui/AddToCartButton";

interface ProductDetailProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: ProductDetailProps) {
  const { id } = await params;
  const numericId = Number(id);
  if (!Number.isFinite(numericId)) notFound();

  let apiProduct;
  try {
    apiProduct = await getProduct(numericId);
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) notFound();

    const message =
      error instanceof ApiError ? error.message : "Не удалось загрузить товар. Попробуйте позже.";
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <p className="text-sm text-red-600">{message}</p>
      </div>
    );
  }

  const product = toResolvedProduct(apiProduct);

  let otherProducts: ResolvedProduct[] = [];
  if (product.categoryId != null) {
    try {
      const categoryProducts = await listProducts({ categoryIds: [product.categoryId] });
      otherProducts = categoryProducts
        .filter((p) => p.id !== apiProduct.id)
        .slice(0, 4)
        .map(toResolvedProduct);
    } catch {
      otherProducts = [];
    }
  }

  const specEntries = Object.entries(apiProduct.attrs_json ?? {}).filter(
    ([, value]) => value !== null && value !== undefined && value !== ""
  );

  return (
    <div className="min-w-0 max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 bg-white font-sans text-gray-900">

      {/* Хлебные крошки */}
      <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1.5 overflow-x-auto whitespace-nowrap py-1">
        <Link href="/catalog" className="hover:text-blue-600">Каталог</Link>
        {product.categoryName && (
          <>
            <span>/</span>
            <span className="hover:text-blue-600 cursor-pointer">{product.categoryName}</span>
          </>
        )}
        <span>/</span>
        <span className="text-gray-400 truncate">{product.title}</span>
      </nav>

      {/* Название товара */}
      <h1 className="text-xl sm:text-2xl font-bold tracking-tight border-b border-dashed border-gray-300 pb-3 mb-6">
        {product.title}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">

        {/* Фото — у backend-товара нет изображений (см. types/api.ts), поэтому заглушка */}
        <div className="lg:col-span-5">
          <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
            <ImageOff className="h-12 w-12 text-gray-300" />
          </div>
        </div>

        {/* Краткие характеристики */}
        <div className="lg:col-span-4 flex flex-col gap-5 text-sm">
          <div>
            {product.categoryName && (
              <div className="flex justify-between py-1.5 border-b border-dotted border-gray-200">
                <span className="text-gray-500">Тип товара</span>
                <span className="font-medium text-right">{product.categoryName}</span>
              </div>
            )}
            {specEntries.slice(0, 6).map(([label, value]) => (
              <div key={label} className="flex justify-between py-1.5 border-b border-dotted border-gray-200">
                <span className="text-gray-500">{label}</span>
                <span className="font-medium text-right">{String(value)}</span>
              </div>
            ))}
          </div>

          {specEntries.length > 6 && (
            <a href="#full-specs" className="text-blue-600 font-semibold text-xs hover:underline flex items-center gap-1">
              Больше характеристик &darr;
            </a>
          )}

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
            <span>Артикул: {product.article || "—"}</span>
            <span className={`${product.inStock ? "text-green-600" : "text-red-500"} font-medium flex items-center gap-1`}>
              {product.inStock ? "✓ В наличии" : "Нет в наличии"}
            </span>
          </div>

          <div className="mb-5">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-gray-900">
                {product.price.toLocaleString("ru-RU")} ₽
              </span>
              {product.oldPrice != null && product.oldPrice > product.price && (
                <span className="text-sm text-gray-400 line-through">
                  {product.oldPrice.toLocaleString("ru-RU")} ₽
                </span>
              )}
            </div>
          </div>

          <div className="space-y-2.5">
            <AddToCartButton productId={product.id} inStock={product.inStock} />

            <BuyOneClickButton product={product} disabled={!product.inStock} />
          </div>

          <ProductFavoriteCompareButtons productId={product.id} />
        </div>

      </div>

      {/* Табы */}
      <ProductTabs
        title={product.title}
        specs={specEntries.map(([label, value]) => ({ label, value: String(value) }))}
        description={product.description ?? undefined}
      />

      {/* Похожие товары */}
      <div className="border-t border-gray-200 pt-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg sm:text-xl font-bold tracking-tight text-gray-900">
            Похожие товары
          </h2>
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
