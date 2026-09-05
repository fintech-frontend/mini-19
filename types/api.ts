/**
 * Типы, повторяющие форму реальных ответов backend API (см. Postman-документацию:
 * https://documenter.getpostman.com/view/53941942/2sBYAvwAyV). Держим их отдельно от
 * "UI-типов" в других файлах types/*, потому что backend отдаёт не совсем то же самое
 * (например, у товара нет полей image/gallery/specs — см. lib/api/products.ts).
 */

export interface PaginatedResponse<T> {
  count: number;
  pages: number;
  results: T[];
}

/** Список без пагинации — на случай, если бэкенд отдаёт голый массив. */
export type ListResponse<T> = PaginatedResponse<T> | T[];

export interface ApiCategory {
  id: number;
  name: string;
  slug: string;
  sort: number;
  is_active: boolean;
  parent: number | null;
}

export interface ApiBrand {
  id: number;
  name: string;
  slug: string;
  logo: string | null;
}

export interface ApiProduct {
  id: number;
  category: ApiCategory | null;
  brand: ApiBrand | null;
  name: string;
  slug: string;
  article: string;
  /** Backend отдаёт цену строкой ("122.00"), а не числом. */
  price: string;
  old_price: string | null;
  attrs_json: Record<string, unknown>;
  description: string | null;
  is_active: boolean;
  created_at: string;
}

export interface ApiCartItem {
  id: number;
  cart: number;
  product: ApiProduct;
  quantity: number;
  price: string;
}

export interface ApiCart {
  id: number;
  user: number | null;
  session_key: string | null;
  items: ApiCartItem[];
  updated_at: string;
}

export interface ApiOrder {
  id: number;
  number: string;
  status: string;
  subtotal: string;
  total: string;
  created_at: string;
  user: number | null;
}

/**
 * Ответ на login/register в документации не сохранён (пример "No response body"),
 * поэтому точные имена полей токена неизвестны. Держим сигнатуру открытой и
 * извлекаем токен через extractAccessToken/extractRefreshToken (lib/api/auth.ts),
 * которые перебирают несколько вероятных имён полей.
 */
export interface AuthResponse {
  [key: string]: unknown;
}
