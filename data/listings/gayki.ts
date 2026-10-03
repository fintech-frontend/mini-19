import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/metiznyetakelazhnye-i-skobyanye-izdel/krepezhnye-izdeliya/gayki/ */
export const gaykiListing: CatalogListingData = {
  path: "metiznyetakelazhnye-i-skobyanye-izdel/krepezhnye-izdeliya/gayki",
  title: "Гайки",
  totalCountLabel: "110 товаров",
  filterFields: [
    {
      id: "diametr",
      title: "Диаметр установки мм.",
      options: [
        "6",
        "8",
        "10",
        "16"
      ],
      truncate: false
    },
    {
      id: "strana",
      title: "Страна производитель",
      options: [
        "Китай",
        "Россия"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "gayka-m10-gost-5915-70-97847",
      articul: "125584",
      title: "Гайка М10 ГОСТ 5915-70 (97,847)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/0744d033-30c6-11e2-a1f1-c8600046bc56_e48212fa-9fe6-11ea-937f-002590ba8283-303x303.jpeg",
      price: 286,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Tech-Krep",
        diametr: "10"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Tech-Krep"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Диаметр установки мм.",
          value: "10"
        }
      ]
    },
    {
      id: "gajka-m16-kl-pr-10-0",
      articul: "6191",
      title: "Гайка М16 кл пр 10,0",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 0,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Tech-Krep"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Tech-Krep"
        }
      ]
    },
    {
      id: "gayka-m16-din-934-80",
      articul: "402539",
      title: "Гайка М16 кл пр 8,0",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 380,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Tech-Krep",
        diametr: "16"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Tech-Krep"
        },
        {
          label: "Диаметр установки мм.",
          value: "16"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "gajka-m20-kl-pr-10",
      articul: "431111",
      title: "Гайка М20 кл пр 10",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 450,
      inStock: false,
      quickBuy: true,
      filterValues: {},
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "gajka-m24-kl-pr-10",
      articul: "431255",
      title: "Гайка М24 кл пр 10",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 480,
      inStock: false,
      quickBuy: true,
      filterValues: {},
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "gajka-m24-kl-pr-8-0",
      articul: "4189",
      title: "Гайка М24 кл пр 8,0",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 420,
      inStock: false,
      quickBuy: true,
      filterValues: {},
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "gajka-m27-kl-pr-8-0",
      articul: "4190",
      title: "Гайка М27 кл пр 8,0",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 420,
      inStock: false,
      quickBuy: true,
      filterValues: {},
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "gajka-m30-kl-pr-10",
      articul: "432159",
      title: "Гайка М30 кл пр 10",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 450,
      inStock: false,
      quickBuy: true,
      filterValues: {},
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "gajka-m30-kl-pr-8-0",
      articul: "4191",
      title: "Гайка М30 кл пр 8,0",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 420,
      inStock: false,
      quickBuy: true,
      filterValues: {},
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "gayka-m6-gost-5915-70-5927-70-425",
      articul: "125580",
      title: "Гайка М6 ГОСТ 5915-70; 5927-70 (425)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/0744d027-30c6-11e2-a1f1-c8600046bc56_e48212f8-9fe6-11ea-937f-002590ba8283-303x303.jpeg",
      price: 55,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Tech-Krep",
        diametr: "6"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Tech-Krep"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Диаметр установки мм.",
          value: "6"
        }
      ]
    },
    {
      id: "gayka-m8-gost-5915-70",
      articul: "131014",
      title: "Гайка М8 ГОСТ 5915-70",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 290,
      inStock: true,
      quickBuy: true,
      filterValues: {},
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "gayka-m8-gost-5915-70-5927-70-180245",
      articul: "125582",
      title: "Гайка М8 ГОСТ 5915-70; 5927-70 (180,245)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/0744d02d-30c6-11e2-a1f1-c8600046bc56_e48212f9-9fe6-11ea-937f-002590ba8283-303x303.jpeg",
      price: 180,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Tech-Krep",
        diametr: "8"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Tech-Krep"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Диаметр установки мм.",
          value: "8"
        }
      ]
    }
  ]
};
