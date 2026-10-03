import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/otdelochnye-materialy/napolnye-pokrytiya/kovrolin/kovrolin-ostatki/ */
export const kovrolinOstatkiListing: CatalogListingData = {
  path: "otdelochnye-materialy/napolnye-pokrytiya/kovrolin/kovrolin-ostatki",
  title: "Ковролин (остатки)",
  totalCountLabel: "112 товаров",
  filterFields: [
    {
      id: "dizajn",
      title: "Дизайн",
      options: [
        "001",
        "237",
        "354",
        "04050С",
        "5631/а7",
        "8082/а2",
        "E027 красн"
      ],
      truncate: true
    },
    {
      id: "kollektsiya",
      title: "Коллекция",
      options: [
        "Аврора Старт",
        "ARMINA",
        "Etalon",
        "Nicenecc",
        "Niceness"
      ],
      truncate: false
    },
    {
      id: "shirina",
      title: "Ширина",
      options: [
        "2",
        "3 м",
        "3м",
        "4",
        "4 м",
        "4м"
      ],
      truncate: false
    },
    {
      id: "strana",
      title: "Страна производитель",
      options: [
        "Беларусь",
        "Бельгия",
        "Турция",
        "Узбекистан"
      ],
      truncate: false
    },
    {
      id: "tsvet",
      title: "Цвет",
      options: [
        "Крем",
        "Серо-кор",
        "Синий"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "kovrolin-armina-2-4m-04050s-sero-kor-um",
      articul: "7749",
      title: "Ковролин ARMINA 2,4м 04050С серо-кор УМ",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 1822,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Турция",
        edinitsaizmereniya: "м"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Турция"
        },
        {
          label: "ЕдиницаИзмерения (в метре)",
          value: "м"
        }
      ]
    },
    {
      id: "kovrolin-armina-30m-04050s-sero-kor",
      articul: "416506",
      title: "Ковролин ARMINA 3,0м 04050С серо-кор УМ",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/b122ca79-c4ba-11ed-93ec-002590ba8282_969c20fb-c704-11ed-93ec-002590ba8282-233x303.jpeg",
      price: 1788,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Турция",
        shirina: "3м",
        tsvet: "Серо-кор",
        dizajn: "04050С",
        kollektsiya: "ARMINA",
        edinitsaizmereniya: "м"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Турция"
        },
        {
          label: "Ширина",
          value: "3м"
        },
        {
          label: "Цвет",
          value: "Серо-кор"
        },
        {
          label: "Дизайн",
          value: "04050С"
        },
        {
          label: "Коллекция",
          value: "ARMINA"
        },
        {
          label: "ЕдиницаИзмерения (в метре)",
          value: "м"
        }
      ]
    },
    {
      id: "kovrolin-condor-extreme-shir-4m-70-komerc-u",
      articul: "030154",
      title: "Ковролин Condor Extreme 4,0м 70 (комерц) У",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 450,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Бельгия",
        shirina: "4м",
        edinitsaizmereniya: "м",
        "edinicaizmereniya-v-mm": "мм"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Бельгия"
        },
        {
          label: "Ширина",
          value: "4м"
        },
        {
          label: "ЕдиницаИзмерения (в метре)",
          value: "м"
        },
        {
          label: "ЕдиницаИзмерения(в мм)",
          value: "мм"
        }
      ]
    },
    {
      id: "kovrolin-etalon-40m-001-sin",
      articul: "425721",
      title: "Ковролин ETALON 4,0м 001 син УМ",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/05/eb60d2d9-c100-11ee-941e-002590ba8282_4b9bd8ab-c18a-11ee-941e-002590ba8282-208x303.jpeg",
      price: 823,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Узбекистан",
        shirina: "4",
        tsvet: "Синий",
        dizajn: "001",
        kollektsiya: "Etalon",
        edinitsaizmereniya: "м"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Узбекистан"
        },
        {
          label: "Ширина",
          value: "4"
        },
        {
          label: "Цвет",
          value: "Синий"
        },
        {
          label: "Дизайн",
          value: "001"
        },
        {
          label: "Коллекция",
          value: "Etalon"
        },
        {
          label: "ЕдиницаИзмерения (в метре)",
          value: "м"
        }
      ]
    },
    {
      id: "kovrolin-etalon-40-m-027-sinij",
      articul: "427419",
      title: "Ковролин ETALON 4,0м 027 синий У",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/08/427419-306x303.jpeg",
      price: 731,
      inStock: true,
      quickBuy: true,
      filterValues: {
        edinitsaizmereniya: "м"
      },
      specs: [
        {
          label: "ЕдиницаИзмерения (в метре)",
          value: "м"
        }
      ]
    },
    {
      id: "kovrolin-etalon-4-0m-e027-krasn-100m2-um",
      articul: "12166",
      title: "Ковролин ETALON 4,0м E027 красн (100м2) УМ",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 904,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Беларусь",
        shirina: "4 м",
        dizajn: "E027 красн",
        kollektsiya: "Etalon",
        edinitsaizmereniya: "м"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Беларусь"
        },
        {
          label: "Ширина",
          value: "4 м"
        },
        {
          label: "Дизайн",
          value: "E027 красн"
        },
        {
          label: "Коллекция",
          value: "Etalon"
        },
        {
          label: "ЕдиницаИзмерения (в метре)",
          value: "м"
        }
      ]
    },
    {
      id: "kovrolin-liman-2-4-m-f164-um",
      articul: "7750",
      title: "Ковролин LIMAN 2,4м F164 УМ",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 969,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Турция",
        edinitsaizmereniya: "м"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Турция"
        },
        {
          label: "ЕдиницаИзмерения (в метре)",
          value: "м"
        }
      ]
    },
    {
      id: "kovrolin-niceness-40m-237",
      articul: "419883",
      title: "Ковролин Niceness 4,0м 237 У",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 778,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Турция",
        shirina: "4",
        dizajn: "237",
        kollektsiya: "Nicenecc",
        edinitsaizmereniya: "м",
        "edinicaizmereniya-v-mm": "мм"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Турция"
        },
        {
          label: "Ширина",
          value: "4"
        },
        {
          label: "Дизайн",
          value: "237"
        },
        {
          label: "Коллекция",
          value: "Nicenecc"
        },
        {
          label: "ЕдиницаИзмерения (в метре)",
          value: "м"
        },
        {
          label: "ЕдиницаИзмерения(в мм)",
          value: "мм"
        }
      ]
    },
    {
      id: "kovrolin-niceness-4-0m-354-krem-um",
      articul: "12167",
      title: "Ковролин Niceness 4,0м 354 крем УМ",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 1032,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Турция",
        shirina: "4 м",
        tsvet: "Крем",
        dizajn: "354",
        kollektsiya: "Niceness"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Турция"
        },
        {
          label: "Ширина",
          value: "4 м"
        },
        {
          label: "Цвет",
          value: "Крем"
        },
        {
          label: "Дизайн",
          value: "354"
        },
        {
          label: "Коллекция",
          value: "Niceness"
        }
      ]
    },
    {
      id: "kovrolin-avrora-start-2-0m-8082-a2-um",
      articul: "3304",
      title: "Ковролин Аврора Старт 2,0м 8082/а2/ УМ",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 969,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Беларусь",
        shirina: "2",
        dizajn: "8082/а2",
        kollektsiya: "Аврора Старт",
        edinitsaizmereniya: "м"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Беларусь"
        },
        {
          label: "Ширина",
          value: "2"
        },
        {
          label: "Дизайн",
          value: "8082/а2"
        },
        {
          label: "Коллекция",
          value: "Аврора Старт"
        },
        {
          label: "ЕдиницаИзмерения (в метре)",
          value: "м"
        }
      ]
    },
    {
      id: "kovrolin-avrora-start-3-0m-5631-a7-um",
      articul: "12168",
      title: "Ковролин Аврора Старт 3,0м 5631/а7 УМ",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 1047,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Беларусь",
        shirina: "3 м",
        dizajn: "5631/а7",
        kollektsiya: "Аврора Старт",
        edinitsaizmereniya: "м"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Беларусь"
        },
        {
          label: "Ширина",
          value: "3 м"
        },
        {
          label: "Дизайн",
          value: "5631/а7"
        },
        {
          label: "Коллекция",
          value: "Аврора Старт"
        },
        {
          label: "ЕдиницаИзмерения (в метре)",
          value: "м"
        }
      ]
    },
    {
      id: "kovrolin-alba-2-0m-409a-krem-ser-m",
      articul: "433967",
      title: "Ковролин Алба 2,0м 409А крем-сер УМ",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 1421,
      inStock: true,
      quickBuy: true,
      filterValues: {}
    }
  ]
};
