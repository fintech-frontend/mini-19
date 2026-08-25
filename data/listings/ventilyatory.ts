import { CatalogFilterField, CatalogListingData, CatalogListingProduct } from "@/types/catalog-listing";
import { FanProduct, ventilyatoryProducts } from "@/data/ventilyatory-data";

/**
 * "Вентиляторы" был снят раньше остального дерева и жил на отдельном пути рендера
 * (VentilyatoryCatalog + FanProductCard + VentilyatorProductDetail) со своим типом
 * FanProduct. UX там был тот же, что у общих компонентов, поэтому раздел приведён к
 * общей модели CatalogListingData: структурированные поля FanProduct превращаются в
 * filterValues + filterFields, и категория рендерится обычным CategoryProductGrid.
 *
 * Сырые данные namеренно оставлены в data/ventilyatory-data.ts в исходном виде —
 * переписывать 96 товаров руками незачем, соответствие полей задаётся здесь один раз.
 */

/** id фильтра → как достать значение из товара и как называется поле в UI. */
const FILTER_FIELDS: {
  id: string;
  title: string;
  truncate: boolean;
  numeric: boolean;
  valueOf: (product: FanProduct) => string;
}[] = [
  { id: "brand", title: "Бренд", truncate: true, numeric: false, valueOf: (p) => p.brand },
  { id: "diameter", title: "Диаметр", truncate: false, numeric: true, valueOf: (p) => String(p.diameterMm) },
  { id: "diskDiameter", title: "Диаметр диска", truncate: true, numeric: true, valueOf: (p) => String(p.diskDiameterMm) },
  { id: "connectionDiameter", title: "Диаметр подключения", truncate: false, numeric: true, valueOf: (p) => String(p.connectionDiameterMm) },
  { id: "material", title: "Материал", truncate: false, numeric: false, valueOf: (p) => p.material },
  { id: "mainMaterial", title: "Основной материал", truncate: false, numeric: false, valueOf: (p) => p.mainMaterial },
  { id: "airFlow", title: "Расход воздуха", truncate: true, numeric: true, valueOf: (p) => String(p.airFlowM3h) },
  { id: "country", title: "Страна производитель", truncate: false, numeric: false, valueOf: (p) => p.country },
];

function collectOptions(numeric: boolean, valueOf: (product: FanProduct) => string): string[] {
  const unique = Array.from(new Set(ventilyatoryProducts.map(valueOf)));
  return numeric
    ? unique.sort((a, b) => Number(a) - Number(b))
    : unique.sort((a, b) => a.localeCompare(b, "ru"));
}

const filterFields: CatalogFilterField[] = FILTER_FIELDS.map(({ id, title, truncate, numeric, valueOf }) => ({
  id,
  title,
  truncate,
  options: collectOptions(numeric, valueOf),
}));

const products: CatalogListingProduct[] = ventilyatoryProducts.map((product) => ({
  id: product.id,
  articul: product.articul,
  title: product.title,
  price: product.price,
  image: product.image,
  gallery: product.gallery,
  inStock: product.inStock,
  quickBuy: product.quickBuy,
  description: product.description,
  specs: product.specs,
  filterValues: Object.fromEntries(FILTER_FIELDS.map((field) => [field.id, field.valueOf(product)])),
}));

export const ventilyatoryListing: CatalogListingData = {
  path: "ventilyaciya/ventilyatory",
  title: "Вентиляторы",
  totalCountLabel: `${products.length} товаров`,
  filterFields,
  products,
};
