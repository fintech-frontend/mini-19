import type { ApiProduct } from "@/types/api";
import { findProductImage } from "@/data/product-images";

/**
 * Общая нормализованная форма товара для всего UI (карточки, корзина, избранное,
 * сравнение, чекаут). Раньше товар резолвился синхронно из двух статических
 * каталогов (`data/staticProducts.ts` и `data/listings/*`) — теперь единственный
 * источник данных это реальный backend: на клиенте товары по id берутся из кэша
 * каталога RTK Query (hooks/useProductsByIds.ts).
 *
 * ВАЖНО: у backend-товара нет полей image/gallery/specs (см. ApiProduct в
 * types/api.ts) — `image` подбирается по названию (data/product-images.ts), а
 * без совпадения равен `null`, и карточка показывает заглушку.
 */
export interface ResolvedProduct {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  image: string | null;
  article: string;
  inStock: boolean;
  /** Канонический URL страницы товара. */
  href: string;
  description?: string | null;
  categoryId?: number;
  categoryName?: string;
  /** У backend-товара нет флага "хит продаж" — остаётся для обратной совместимости с UI. */
  isBestSeller?: boolean;
}

function toNumber(value: string | null | undefined): number | undefined {
  if (value == null) return undefined;
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : undefined;
}

export function toResolvedProduct(product: ApiProduct): ResolvedProduct {
  return {
    id: String(product.id),
    title: product.name,
    price: toNumber(product.price) ?? 0,
    oldPrice: toNumber(product.old_price ?? undefined),
    image: findProductImage(product.name),
    article: product.article,
    inStock: product.is_active,
    href: `/products/${product.id}`,
    description: product.description,
    categoryId: product.category?.id,
    categoryName: product.category?.name,
  };
}
