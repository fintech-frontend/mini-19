export const SORT_OPTIONS = [
  { value: "popularity", label: "по популярности" },
  { value: "price-asc", label: "по цене: сначала дешёвые" },
  { value: "price-desc", label: "по цене: сначала дорогие" },
  { value: "name-asc", label: "по алфавиту: А-Я" },
  { value: "name-desc", label: "по алфавиту: Я-А" },
] as const;

export type SortValue = (typeof SORT_OPTIONS)[number]["value"];
export const DEFAULT_SORT: SortValue = "popularity";

export const PER_PAGE_OPTIONS = [12, 16, 20, 24] as const;
export type PerPageValue = (typeof PER_PAGE_OPTIONS)[number];
export const DEFAULT_PER_PAGE: PerPageValue = 12;

/** Сортирует копию списка товаров; порядок для "popularity" не меняется. */
export function sortProducts<T extends { price: number; title: string }>(
  list: T[],
  sort: SortValue
): T[] {
  const sorted = [...list];
  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "name-asc":
      return sorted.sort((a, b) => a.title.localeCompare(b.title, "ru"));
    case "name-desc":
      return sorted.sort((a, b) => b.title.localeCompare(a.title, "ru"));
    default:
      return sorted;
  }
}

/** Правильное склонение слова "товар" по числу (1 товар, 2 товара, 5 товаров). */
export function pluralizeTovar(count: number): string {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return "товар";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return "товара";
  return "товаров";
}
