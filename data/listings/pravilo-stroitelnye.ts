import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/instrument/shtukaturno-otdelochnye-materialy/pravilo-stroitelnye/ */
export const praviloStroitelnyeListing: CatalogListingData = {
  path: "instrument/shtukaturno-otdelochnye-materialy/pravilo-stroitelnye",
  title: "Правило строительные",
  totalCountLabel: "23 товара",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Зубр",
        "Энкор",
        "Accurate",
        "FIT"
      ],
      truncate: false
    },
    {
      id: "dlina",
      title: "Длина",
      options: [
        "1.5м",
        "1м",
        "2.5м",
        "2м",
        "3м"
      ],
      truncate: false
    },
    {
      id: "sostav",
      title: "Состав материала",
      options: [
        "Алюминий",
        "Алюминий,пластик"
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
      id: "adapter-decor-dlja-shpatelja-pravilo-605mm-314-002",
      articul: "1748",
      title: "Адаптер DЕCOR для шпателя-правило 605мм 314-002",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/12/1-748-372x293.jpeg",
      price: 1285,
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
      id: "adapter-dlja-rolika-decor-250mm-480mm-314-001",
      articul: "1747",
      title: "Адаптер для ролика DЕCOR (250мм-480мм) 314-001",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/12/1-747-365x303.jpeg",
      price: 2840,
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
      id: "valik-dlja-okrashivanie-uglov-poliakril-300-2150",
      articul: "1753",
      title: "Валик для окрашивание углов полиакрил 300-2150",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/12/1-753-337x303.jpeg",
      price: 205,
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
      id: "valik-dlja-okrashivanie-uglov-poliakril-300-2160",
      articul: "1754",
      title: "Валик для окрашивание углов полиакрил 300-2160",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/12/1-754-341x303.jpeg",
      price: 230,
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
      id: "gladilka-po-betonu-promyshlennik-12metr",
      articul: "123562",
      title: "Гладилка по бетону ПРОМЫШЛЕННИК 1,2метр правило рукоятка 5,7 метра",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/123562-372x288.jpg",
      price: 28200,
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
      id: "pravilo-zubr-25-m-1072-25",
      articul: "059654",
      title: "Правило ЗУБР 2,5 м 1072-2,5",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/45eb7f3b-2fde-11e7-936b-c8600046bc56_b8940848-2e18-11ee-9406-002590ba8282-372x236.jpeg",
      price: 2825,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "2.5м",
        brend: "Зубр",
        tsvet: "Серый",
        sostav: "Алюминий"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "2.5м"
        },
        {
          label: "Бренд",
          value: "Зубр"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Серый"
        },
        {
          label: "Состав материала",
          value: "Алюминий"
        }
      ]
    },
    {
      id: "pravilo-profi-trapeciya-10-m-9490",
      articul: "059655",
      title: "Правило Профи “Трапеция” 1,0 м 9490",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/87b0aa7b-30c7-11e2-a1f1-c8600046bc56_bbd5b775-a028-11ea-9380-002590ba8283-372x279.jpeg",
      price: 555,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        dlina: "1м",
        brend: "Энкор",
        tsvet: "Серый",
        sostav: "Алюминий"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Длина",
          value: "1м"
        },
        {
          label: "Бренд",
          value: "Энкор"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Серый"
        },
        {
          label: "Состав материала",
          value: "Алюминий"
        }
      ]
    },
    {
      id: "pravilo-profi-trapeciya-15-m-9491",
      articul: "059656",
      title: "Правило Профи “Трапеция” 1,5 м 9491",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/87b0aa7d-30c7-11e2-a1f1-c8600046bc56_bbd5b776-a028-11ea-9380-002590ba8283-372x279.jpeg",
      price: 835,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        dlina: "1.5м",
        brend: "FIT",
        tsvet: "Серый",
        sostav: "Алюминий"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Длина",
          value: "1.5м"
        },
        {
          label: "Бренд",
          value: "FIT"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Серый"
        },
        {
          label: "Состав материала",
          value: "Алюминий"
        }
      ]
    },
    {
      id: "pravilo-profi-trapeciya-20-m-9492",
      articul: "059657",
      title: "Правило Профи “Трапеция” 2,0 м 9492",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/87b0aa7f-30c7-11e2-a1f1-c8600046bc56_bbd5b777-a028-11ea-9380-002590ba8283-372x279.jpeg",
      price: 1115,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "2м",
        brend: "Accurate",
        tsvet: "Серый"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "2м"
        },
        {
          label: "Бренд",
          value: "Accurate"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Серый"
        }
      ]
    },
    {
      id: "pravilo-profi-trapeciya-25-m-9493",
      articul: "059658",
      title: "Правило Профи “Трапеция” 2,5 м 9493",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/87b0aa81-30c7-11e2-a1f1-c8600046bc56_bbd5b778-a028-11ea-9380-002590ba8283-372x279.jpeg",
      price: 1390,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        dlina: "2.5м",
        brend: "FIT",
        tsvet: "Серый",
        sostav: "Алюминий,пластик"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Длина",
          value: "2.5м"
        },
        {
          label: "Бренд",
          value: "FIT"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Серый"
        },
        {
          label: "Состав материала",
          value: "Алюминий,пластик"
        }
      ]
    },
    {
      id: "pravilo-profi-trapeciya-30-m-9494",
      articul: "059659",
      title: "Правило Профи “Трапеция” 3,0 м 9494",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/87b0aa83-30c7-11e2-a1f1-c8600046bc56_bbd5b779-a028-11ea-9380-002590ba8283-372x279.jpeg",
      price: 1670,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        dlina: "3м",
        brend: "FIT",
        tsvet: "Серый",
        sostav: "Алюминий"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Длина",
          value: "3м"
        },
        {
          label: "Бренд",
          value: "FIT"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Серый"
        },
        {
          label: "Состав материала",
          value: "Алюминий"
        }
      ]
    },
    {
      id: "pravilo-s-urovnem-2-ampuly-1500mm-16-2-150",
      articul: "059663",
      title: "Правило с уровнем 2 ампулы 1500мм 16-2-150",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/5ce4f3b5-edb4-11e5-aea3-c8600046bc56_bbd5b77a-a028-11ea-9380-002590ba8283-372x226.jpeg",
      price: 1975,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        tsvet: "Серый"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Серый"
        }
      ]
    }
  ]
};
