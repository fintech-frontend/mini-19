import { api } from "./client";
import { ApiError } from "./errors";
import { fetchAllPages } from "./paginate";
import type { ApiProduct } from "@/types/api";

export interface ListProductsParams {
  /**
   * Фильтрация по категориям делается на клиенте: у бэкенда нет ни одного рабочего
   * query-параметра фильтрации — проверено живыми запросами (`?category=`,
   * `?category_id=`, `?brand=`, `?is_active=` возвращают тот же полный список).
   * Выдумывать несуществующий параметр нельзя, поэтому отбираем нужное из полного
   * набора, который забираем крупными страницами (см. lib/api/paginate.ts).
   */
  categoryIds?: number[];
  /** Поиск по названию/артикулу — тоже на клиенте: `?search=` бэкендом не поддерживается. */
  query?: string;
}

/** Полный список товаров (со всех страниц пагинации бэкенда). */
export async function listProducts(params: ListProductsParams = {}): Promise<ApiProduct[]> {
  let items = await fetchAllPages<ApiProduct>("/products/");

  if (params.categoryIds && params.categoryIds.length > 0) {
    const allowed = new Set(params.categoryIds);
    items = items.filter((product) => product.category != null && allowed.has(product.category.id));
  }

  if (params.query) {
    items = filterProductsByQuery(items, params.query);
  }

  return items;
}

/**
 * Текст товара, по которому идёт поиск: название, артикул, бренд и категория.
 * Собран в одном месте, чтобы правила совпадения были одинаковыми везде
 * (поиск в навбаре, страница /search, список /products).
 */
function productHaystack(product: ApiProduct): string {
  return [product.name, product.article, product.brand?.name, product.category?.name]
    .filter((value): value is string => typeof value === "string")
    .join(" ")
    .toLowerCase();
}

/**
 * Отбор товаров по строке запроса.
 *
 * Регистр не важен (обе стороны приводятся к нижнему), совпадение — по части слова,
 * поэтому «дрел» находит «Дрель-шуруповёрт». Запрос из нескольких слов требует
 * присутствия каждого слова, но в любом порядке: «bosch перфоратор» и
 * «перфоратор bosch» дают одинаковый результат.
 */
export function filterProductsByQuery(products: ApiProduct[], query: string): ApiProduct[] {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return products;

  return products.filter((product) => {
    const haystack = productHaystack(product);
    return terms.every((term) => haystack.includes(term));
  });
}

/**
 * Поиск товаров по всему каталогу.
 *
 * ─── Почему поиск на клиенте, а не на бэкенде ───────────────────────────────
 * У API нет серверного поиска: `?search=`, `?q=`, `?name=`, `?name__icontains=`,
 * `?ordering=`, `?category=`, `?is_active=` — все возвращают один и тот же полный
 * список из 47 товаров (проверено живыми запросами к http://16.170.163.62/api).
 * Работают только `?page=` и `?page_size=`. Выдумывать несуществующий параметр
 * нельзя, поэтому забираем каталог одним запросом (см. lib/api/paginate.ts) и
 * фильтруем его здесь.
 *
 * Когда на бэкенде появится настоящий поиск, менять нужно будет только тело этой
 * функции — на что-то вроде
 *
 *     return fetchAllPages<ApiProduct>(`/products/?search=${encodeURIComponent(query)}`);
 *
 * UI и хук useProductSearch останутся прежними.
 */
export async function searchProducts(query: string): Promise<ApiProduct[]> {
  const products = await listProducts();
  return filterProductsByQuery(products, query);
}

/**
 * Товар по id. В документации Postman эндпоинта "получить один товар" нет — описан
 * только список (`GET {{url}}/products`), поэтому берём товар из него, а не выдумываем
 * маршрут. Дополнительная причина: `GET /products/:id/` на живом сервере отдаёт
 * `{"detail":"No Product matches the given query."}` с кодом 404 для любого
 * существующего товара (у categories/brands детальные маршруты при этом работают) —
 * то есть даже как незадокументированный запасной вариант он бесполезен.
 */
export async function getProduct(id: number): Promise<ApiProduct> {
  const all = await listProducts();
  const found = all.find((product) => product.id === id);
  if (!found) {
    throw new ApiError(`Товар с id ${id} не найден`, 404);
  }
  return found;
}

/**
 * Поля запроса — из документации (shop/products/post: name, article, price, category_id,
 * slug) плюс необязательные поля, подтверждённые ответом DRF на OPTIONS /products/.
 * У товара нет поля с изображением. Аутентификации у раздела shop в документации нет.
 */
export async function createProduct(input: {
  name: string;
  slug: string;
  article: string;
  price: number;
  category_id: number;
  brand_id?: number;
  old_price?: number;
  description?: string;
  attrs_json?: Record<string, unknown>;
  is_active?: boolean;
}) {
  return api.post<ApiProduct>("/products/", input, { auth: false });
}

export async function updateProduct(
  id: number,
  input: Partial<{
    name: string;
    slug: string;
    article: string;
    price: number;
    category_id: number;
    brand_id: number;
    old_price: number;
    description: string;
    attrs_json: Record<string, unknown>;
    is_active: boolean;
  }>
) {
  return api.patch<ApiProduct>(`/products/${id}/`, input, { auth: false });
}

export async function deleteProduct(id: number): Promise<void> {
  await api.delete(`/products/${id}/`, { auth: false });
}
