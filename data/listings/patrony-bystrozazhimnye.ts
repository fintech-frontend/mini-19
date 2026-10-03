import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/instrument/yelektroinstrument/raskhodnye-materialy-i-osnastka-dlya-yel/patrony-bystrozazhimnye/ */
export const patronyBystrozazhimnyeListing: CatalogListingData = {
  path: "instrument/yelektroinstrument/raskhodnye-materialy-i-osnastka-dlya-yel/patrony-bystrozazhimnye",
  title: "Патроны быстрозажимные",
  totalCountLabel: "15 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Не указан",
        "Практика",
        "Спец",
        "FIT",
        "MD-STARS"
      ],
      truncate: false
    },
    {
      id: "diapazon-zazhima",
      title: "Диапазон зажима",
      options: [
        "0, 8-10 мм",
        "1, 5-13 мм",
        "2-13 мм"
      ],
      truncate: false
    },
    {
      id: "tip",
      title: "Тип",
      options: [
        "Адаптер",
        "Патрон сверлильный"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "adapter-sds-na-sverlilnyy-patron-md-stars",
      articul: "419361",
      title: "Адаптер SDS + на сверлильный патрон ½ MD-STARS УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/419361-324x303.jpeg",
      price: 15360,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "MD-STARS",
        tip: "Адаптер",
        "posadochnyj-razmer": "1/2 дюйма"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "MD-STARS"
        },
        {
          label: "Тип",
          value: "Адаптер"
        },
        {
          label: "Посадочный размер",
          value: "1/2 дюйма"
        }
      ]
    },
    {
      id: "adapter-sds-dlya-patrona-1-2-1089870356",
      articul: "012886",
      title: "Адаптер SDS+ для патрона 1/2″ 10898,70356",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/cc51b9a0-30c6-11e2-a1f1-c8600046bc56_ddadcd62-b9fe-11ea-9385-002590ba8283-303x303.jpeg",
      price: 9490,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Не указан",
        tip: "Адаптер",
        "posadochnyj-razmer": "1/2 дюйма"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Не указан"
        },
        {
          label: "Тип",
          value: "Адаптер"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Посадочный размер",
          value: "1/2 дюйма"
        }
      ]
    },
    {
      id: "adapter-sds-dlya-patrona-1-2-fit-37822",
      articul: "410175",
      title: "Адаптер SDS+ для патрона 1/2″ FIT 37822",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/ca943103-f2ff-11ec-93ce-002590ba8282_0150034a-f520-11ec-93ce-002590ba8282-372x248.jpeg",
      price: 120,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "FIT",
        tip: "Адаптер",
        "posadochnyj-razmer": "1/2 дюйма"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "FIT"
        },
        {
          label: "Тип",
          value: "Адаптер"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Посадочный размер",
          value: "1/2 дюйма"
        }
      ]
    },
    {
      id: "patron-sverliln-08-10-1-2-bzp-23524",
      articul: "052289",
      title: "Патрон сверлильн 0,8-10 1/2 БЗП 23524 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/045aabc1-3cb4-11e8-bfba-c8600046bc56_2fb96d9d-9fee-11ea-937f-002590ba8283.jpeg",
      price: 17490,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Не указан",
        tip: "Патрон сверлильный",
        "diapazon-zazhima": "0, 8-10 мм"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Не указан"
        },
        {
          label: "Тип",
          value: "Патрон сверлильный"
        },
        {
          label: "Диапазон зажима",
          value: "0, 8-10 мм"
        }
      ]
    },
    {
      id: "patron-sverliln-08-10-bzp-23523",
      articul: "052290",
      title: "Патрон сверлильн 0,8-10 БЗП 23523",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/8779404d-9ebb-11e3-bafe-c8600046bc56_2fb96d9c-9fee-11ea-937f-002590ba8283-303x303.jpeg",
      price: 29250,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Не указан",
        tip: "Патрон сверлильный",
        "diapazon-zazhima": "0, 8-10 мм"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Не указан"
        },
        {
          label: "Тип",
          value: "Патрон сверлильный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Диапазон зажима",
          value: "0, 8-10 мм"
        }
      ]
    },
    {
      id: "patron-sverliln-16-mm-konus",
      articul: "052291",
      title: "Патрон сверлильн 16 мм конус",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/052291-332x303.jpeg",
      price: 920,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Не указан",
        tip: "Патрон сверлильный",
        "tip-tovara": "Патрон",
        "tip-konusa": "Морзе 16 мм"
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
          label: "Бренд",
          value: "Не указан"
        },
        {
          label: "Тип",
          value: "Патрон сверлильный"
        },
        {
          label: "Тип товара",
          value: "Патрон"
        },
        {
          label: "Тип конуса",
          value: "Морзе 16 мм"
        }
      ]
    },
    {
      id: "patron-sverliln-2-13-1-2-bzp-povysh-prochnost",
      articul: "052292",
      title: "Патрон сверлильн 2-13 1/2 БЗП повыш прочности 23527",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/4f4fcaee-d4aa-11e5-a367-c8600046bc56_29ba48c7-9fee-11ea-937f-002590ba8283-213x303.jpeg",
      price: 403,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Не указан",
        tip: "Патрон сверлильный",
        "diapazon-zazhima": "2-13 мм"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Не указан"
        },
        {
          label: "Тип",
          value: "Патрон сверлильный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Диапазон зажима",
          value: "2-13 мм"
        }
      ]
    },
    {
      id: "patron-sverliln-2-13-1-2-bzp-povysh-prochnost-2",
      articul: "052293",
      title: "Патрон сверлильн 2-13 1/2 БЗП повыш прочности 23534",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/85fe8018-f3d7-11e4-8325-c8600046bc56_29ba48c6-9fee-11ea-937f-002590ba8283-348x303.jpeg",
      price: 988,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Не указан",
        tip: "Патрон сверлильный",
        "diapazon-zazhima": "2-13 мм",
        "tip-tovara": "Патрон"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Не указан"
        },
        {
          label: "Тип",
          value: "Патрон сверлильный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Диапазон зажима",
          value: "2-13 мм"
        },
        {
          label: "Тип товара",
          value: "Патрон"
        }
      ]
    },
    {
      id: "patron-sverliln-2-13-1-2-zvp-povysh-prochnost",
      articul: "052294",
      title: "Патрон сверлильн 2-13 1/2″ ЗВП повыш прочности 23529",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/eefb5150-f3d7-11e4-8325-c8600046bc56_29ba48c5-9fee-11ea-937f-002590ba8283.jpeg",
      price: 1070,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Не указан",
        tip: "Патрон сверлильный",
        "diapazon-zazhima": "2-13 мм",
        "tip-tovara": "Патрон"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Не указан"
        },
        {
          label: "Тип",
          value: "Патрон сверлильный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Диапазон зажима",
          value: "2-13 мм"
        },
        {
          label: "Тип товара",
          value: "Патрон"
        }
      ]
    },
    {
      id: "patron-sverlilnyj-15-13-1-2-spec-1320003",
      articul: "426537",
      title: "Патрон сверлильный 1,5-13 1/2 Спец-1320003",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/07/426537-323x303.jpeg",
      price: 870,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Спец",
        tip: "Патрон сверлильный",
        "diapazon-zazhima": "1, 5-13 мм"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Спец"
        },
        {
          label: "Тип",
          value: "Патрон сверлильный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Диапазон зажима",
          value: "1, 5-13 мм"
        }
      ]
    },
    {
      id: "patron-sverlilnyj-13-1-2-praktika-777-185",
      articul: "547",
      title: "Патрон сверлильный 13 1/2 Практика 777-185",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 650,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Практика",
        tip: "Патрон сверлильный",
        "maksimalnyj-diametr": "13 мм"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Практика"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип",
          value: "Патрон сверлильный"
        },
        {
          label: "Максимальный диаметр",
          value: "13 мм"
        }
      ]
    },
    {
      id: "patron-sverlilnyj-2-13-1-2-spec-1310003",
      articul: "426536",
      title: "Патрон сверлильный 2-13 1/2 Спец-1310003",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/426536-341x303.jpeg",
      price: 610,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Спец",
        tip: "Патрон сверлильный",
        "diapazon-zazhima": "2-13 мм"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Спец"
        },
        {
          label: "Тип",
          value: "Патрон сверлильный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Диапазон зажима",
          value: "2-13 мм"
        }
      ]
    }
  ]
};
