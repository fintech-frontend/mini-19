/**
 * Общая модель товара для терминальных узлов каталога (data/catalog-tree.ts) — не
 * привязана к конкретной категории и не диктует форму UI: карточка/страница товара
 * рендерят то, что есть, и аккуратно скрывают то, чего нет. Задумана backend-ready —
 * когда товары начнут приходить с API, это тот же shape, что отдаёт бэкенд, без
 * переписывания компонентов.
 */
export interface CatalogProductSpec {
  label: string;
  value: string;
}

export interface CatalogListingProduct {
  /** slug товара — последний сегмент URL /catalog/.../[id] */
  id: string;
  articul?: string;
  title: string;
  price: number;
  oldPrice?: number;
  /** Главное изображение карточки. */
  image: string | null;
  /** Доп. фото для галереи на странице товара (первым уже идёт `image`). */
  gallery?: string[];
  inStock: boolean;
  /** true — карточка использует кнопку "Купить" (быстрое добавление), false/не задано — "Подробнее" */
  quickBuy?: boolean;
  /** Свободный текст описания товара (не всегда снят с эталона). */
  description?: string;
  /** Полный список характеристик для страницы товара — надмножество filterValues. */
  specs?: CatalogProductSpec[];
  /** Значения для фильтрации в сетке, ключ — id соответствующего CatalogFilterField. */
  filterValues?: Record<string, string>;
}

export interface CatalogFilterField {
  id: string;
  title: string;
  options: string[];
  truncate?: boolean;
}

export interface CatalogListingData {
  /** Полный путь узла в дереве каталога, например "vodo-gazosnabzhenie/nasosy/nasosy-vibracionnye". */
  path: string;
  title: string;
  /** Реальный текст счётчика с эталонного сайта, например "34 товара". */
  totalCountLabel: string;
  filterFields: CatalogFilterField[];
  products: CatalogListingProduct[];
}
