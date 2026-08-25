import { CatalogListingData } from "@/types/catalog-listing";

/**
 * На эталонном сайте этот раздел — незаполненная заглушка WooCommerce: 80 демо-товаров
 * "Product" с нулевой ценой и placeholder-изображением, без артикула. Воспроизведено как есть,
 * а не заменено на выдуманные реальные товары.
 */
function placeholderProduct(n: number) {
  return {
    id: n === 1 ? "product" : `product-${n}`,
    articul: "",
    title: "Product",
    image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
    price: 0,
    quickBuy: false,
    inStock: false,
    filterValues: {},
  };
}

export const tovaryListing: CatalogListingData = {
  path: "prochie-hoz-strojmaterialy/tovary",
  title: "Товары",
  totalCountLabel: "80 товаров",
  filterFields: [],
  products: Array.from({ length: 12 }, (_, i) => placeholderProduct(i + 1)),
};
