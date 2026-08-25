import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/santekhnika/bide/ */
export const bideListing: CatalogListingData = {
  path: "santekhnika/bide",
  title: "Биде",
  totalCountLabel: "2 товара",
  filterFields: [],
  products: [
    {
      id: "bidetka-deli-hrom-d-unitaza",
      articul: "603",
      title: "Бидетка Deli хром д/унитаза",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 1400,
      inStock: false,
      quickBuy: true,
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ],
      filterValues: {}
    },
    {
      id: "bidje-n-058-rimskij-dekor",
      articul: "014667",
      title: "Бидэ Н 058 Римский декор",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 7750,
      inStock: false,
      quickBuy: true,
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ],
      filterValues: {}
    }
  ]
};
