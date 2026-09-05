import { getProduct } from "@/lib/api/products";
import type { ApiProduct } from "@/types/api";

/**
 * Общая нормализованная форма товара для всего UI (карточки, корзина, избранное,
 * сравнение, чекаут). Раньше товар резолвился синхронно из двух статических
 * каталогов (`data/staticProducts.ts` и `data/listings/*`) — теперь единственный
 * источник данных это реальный backend (`GET /products/:id/`), поэтому резолвинг
 * стал асинхронным.
 *
 * ВАЖНО: у backend-товара нет полей image/gallery/specs (см. ApiProduct в
 * types/api.ts) — `image` намеренно всегда `null`. Компоненты, использующие
 * ResolvedProduct (ProductCard и т.д.), уже умеют красиво показывать товар без
 * картинки — ломать вёрстку это не должно.
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
    image: null,
    article: product.article,
    inStock: product.is_active,
    href: `/products/${product.id}`,
    description: product.description,
    categoryId: product.category?.id,
    categoryName: product.category?.name,
  };
}

export async function resolveProductById(id: string): Promise<ResolvedProduct | undefined> {
  const numericId = Number(id);
  if (!Number.isFinite(numericId)) return undefined;
  try {
    const product = await getProduct(numericId);
    return toResolvedProduct(product);
  } catch {
    return undefined;
  }
}

/** Резолвит сразу несколько id параллельно — для корзины/избранного/сравнения. */
export async function resolveProductsByIds(ids: string[]): Promise<ResolvedProduct[]> {
  const results = await Promise.all(ids.map((id) => resolveProductById(id)));
  return results.filter((product): product is ResolvedProduct => product !== undefined);
}
