import { api } from "./client";
import type { ListResponse } from "@/types/api";

/**
 * Пагинация бэкенда: списки отдают `{count, pages, results}` и по умолчанию кладут
 * в страницу 10 записей. Проверено запросами к живому API:
 *   - `?page=N`      — работает (за пределами диапазона → 404);
 *   - `?page_size=N` — работает (page_size=50 отдал все 47 товаров одной страницей);
 *   - `?search=`, `?ordering=`, `?category=`, `?brand=` — НЕ поддерживаются
 *     (ответ не меняется), поэтому поиск/сортировка/фильтры делаются на клиенте.
 *
 * Поэтому забираем коллекцию крупными страницами: обычно это один запрос, а если
 * товаров станет больше — дочитываем остальные страницы.
 */
const REQUEST_PAGE_SIZE = 100;

export async function fetchAllPages<T>(path: string): Promise<T[]> {
  const separator = path.includes("?") ? "&" : "?";
  const first = await api.get<ListResponse<T>>(`${path}${separator}page_size=${REQUEST_PAGE_SIZE}`, { auth: false });
  if (Array.isArray(first)) return first;

  const items = [...first.results];
  for (let page = 2; page <= first.pages; page += 1) {
    const next = await api.get<ListResponse<T>>(
      `${path}${separator}page_size=${REQUEST_PAGE_SIZE}&page=${page}`,
      { auth: false }
    );
    items.push(...(Array.isArray(next) ? next : next.results));
  }
  return items;
}
