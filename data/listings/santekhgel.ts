import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/vodo-gazosnabzhenie/zapornaya-armatura-i-dobornye-yelement/santekhgel/ */
export const santekhgelListing: CatalogListingData = {
  path: "vodo-gazosnabzhenie/zapornaya-armatura-i-dobornye-yelement/santekhgel",
  title: "Сантехгель",
  totalCountLabel: "19 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "–",
        "Gazmaster",
        "Valfex"
      ],
      truncate: false
    },
    {
      id: "ves",
      title: "Вес",
      options: [
        "15 г",
        "60 г"
      ],
      truncate: false
    },
    {
      id: "obem",
      title: "Объем",
      options: [
        "15 мл",
        "50 мл",
        "100 мл",
        "130 мл"
      ],
      truncate: false
    },
    {
      id: "tip",
      title: "Тип",
      options: [
        "Детектор утечки газа",
        "Клей-герметик анаэробный",
        "Сантехнический гель"
      ],
      truncate: false
    },
    {
      id: "cvet",
      title: "Цвет",
      options: [
        "Желтый",
        "Зеленый",
        "Красный",
        "Синий"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "detektor-utechki-gaza-ayerozolnyy-gazmaster-ba",
      articul: "422348",
      title: "Детектор утечки газа аэрозольный Gazmaster баллон 130 мл",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/422348-337x303.jpg",
      price: 580,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Gazmaster",
        "strana-proizvoditel": "Россия",
        tip: "Детектор утечки газа",
        obem: "130 мл",
        "forma-vypuska": "Аэрозольный баллон"
      },
      specs: [
        {
          label: "Бренд",
          value: "Gazmaster"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Детектор утечки газа"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Объем",
          value: "130 мл"
        },
        {
          label: "Форма выпуска",
          value: "Аэрозольный баллон"
        }
      ]
    },
    {
      id: "kley-germetik-anayerobnyy-valfex-zheltyy-tyub",
      articul: "422254",
      title: "Клей-герметик анаэробный Valfex ЖЕЛТЫЙ тюбик 50мл (демонтаж с усилием до 2*) УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/422254-303x303.jpg",
      price: 25834,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Valfex",
        "strana-proizvoditel": "Россия",
        tip: "Клей-герметик анаэробный",
        cvet: "Желтый",
        obem: "50 мл"
      },
      specs: [
        {
          label: "Бренд",
          value: "Valfex"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Клей-герметик анаэробный"
        },
        {
          label: "Цвет",
          value: "Желтый"
        },
        {
          label: "Объем",
          value: "50 мл"
        }
      ]
    },
    {
      id: "kley-germetik-anayerobnyy-valfex-zheltyy-tyub-2",
      articul: "422255",
      title: "Клей-герметик анаэробный Valfex ЖЕЛТЫЙ тюбик-поршень 50мл (демонтаж с усилием до 2*) УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/422256-303x303.jpg",
      price: 33342,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Valfex",
        "strana-proizvoditel": "Россия",
        tip: "Клей-герметик анаэробный",
        cvet: "Желтый",
        obem: "50 мл"
      },
      specs: [
        {
          label: "Бренд",
          value: "Valfex"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Клей-герметик анаэробный"
        },
        {
          label: "Цвет",
          value: "Желтый"
        },
        {
          label: "Объем",
          value: "50 мл"
        }
      ]
    },
    {
      id: "kley-germetik-anayerobnyy-valfex-krasnyy-tyu",
      articul: "422256",
      title: "Клей-герметик анаэробный Valfex КРАСНЫЙ тюбик 100мл (демонтаж с нагревом)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/10/422256-295x303.jpeg",
      price: 560,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Valfex",
        "strana-proizvoditel": "Россия",
        tip: "Клей-герметик анаэробный",
        cvet: "Красный",
        obem: "100 мл"
      },
      specs: [
        {
          label: "Бренд",
          value: "Valfex"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Клей-герметик анаэробный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Красный"
        },
        {
          label: "Объем",
          value: "100 мл"
        }
      ]
    },
    {
      id: "kley-germetik-anayerobnyy-valfex-krasnyy-tyu-2",
      articul: "422257",
      title: "Клей-герметик анаэробный Valfex КРАСНЫЙ тюбик 15мл (демонтаж с нагревом) УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/422257-303x303.jpg",
      price: 12344,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Valfex",
        "strana-proizvoditel": "Россия",
        tip: "Клей-герметик анаэробный",
        cvet: "Красный",
        obem: "15 мл"
      },
      specs: [
        {
          label: "Бренд",
          value: "Valfex"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Клей-герметик анаэробный"
        },
        {
          label: "Цвет",
          value: "Красный"
        },
        {
          label: "Объем",
          value: "15 мл"
        }
      ]
    },
    {
      id: "kley-germetik-anayerobnyy-valfex-krasnyy-tyu-3",
      articul: "422258",
      title: "Клей-герметик анаэробный Valfex КРАСНЫЙ тюбик 50мл (демонтаж с нагревом) УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/422258-303x303.jpg",
      price: 25834,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Valfex",
        "strana-proizvoditel": "Россия",
        tip: "Клей-герметик анаэробный",
        cvet: "Красный",
        obem: "50 мл"
      },
      specs: [
        {
          label: "Бренд",
          value: "Valfex"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Клей-герметик анаэробный"
        },
        {
          label: "Цвет",
          value: "Красный"
        },
        {
          label: "Объем",
          value: "50 мл"
        }
      ]
    },
    {
      id: "kley-germetik-anayerobnyy-valfex-siniy-tyubi",
      articul: "422259",
      title: "Клей-герметик анаэробный Valfex СИНИЙ тюбик 100мл (демонтаж с усилием) УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/422259-303x303.jpg",
      price: 44668,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Valfex",
        "strana-proizvoditel": "Россия",
        tip: "Клей-герметик анаэробный",
        cvet: "Синий",
        obem: "100 мл"
      },
      specs: [
        {
          label: "Бренд",
          value: "Valfex"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Клей-герметик анаэробный"
        },
        {
          label: "Цвет",
          value: "Синий"
        },
        {
          label: "Объем",
          value: "100 мл"
        }
      ]
    },
    {
      id: "kley-germetik-anayerobnyy-valfex-siniy-tyubi-2",
      articul: "422260",
      title: "Клей-герметик анаэробный Valfex СИНИЙ тюбик 15мл (демонтаж с усилием) УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/422260-303x303.jpg",
      price: 12344,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Valfex",
        "strana-proizvoditel": "Россия",
        tip: "Клей-герметик анаэробный",
        cvet: "Синий",
        obem: "15 мл"
      },
      specs: [
        {
          label: "Бренд",
          value: "Valfex"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Клей-герметик анаэробный"
        },
        {
          label: "Цвет",
          value: "Синий"
        },
        {
          label: "Объем",
          value: "15 мл"
        }
      ]
    },
    {
      id: "kley-germetik-anayerobnyy-valfex-siniy-tyubi-3",
      articul: "422261",
      title: "Клей-герметик анаэробный Valfex СИНИЙ тюбик 50мл (демонтаж с усилием) УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/422261-303x303.jpg",
      price: 25834,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Valfex",
        "strana-proizvoditel": "Россия",
        tip: "Клей-герметик анаэробный",
        cvet: "Синий",
        obem: "50 мл"
      },
      specs: [
        {
          label: "Бренд",
          value: "Valfex"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Клей-герметик анаэробный"
        },
        {
          label: "Цвет",
          value: "Синий"
        },
        {
          label: "Объем",
          value: "50 мл"
        }
      ]
    },
    {
      id: "kley-germetik-anayerobnyy-valfex-siniy-tyubi-4",
      articul: "422262",
      title: "Клей-герметик анаэробный Valfex СИНИЙ тюбик-поршень 50мл (демонтаж с усилием)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/422262-303x303.jpeg",
      price: 375,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Valfex",
        "strana-proizvoditel": "Россия",
        tip: "Клей-герметик анаэробный",
        cvet: "Синий",
        obem: "50 мл"
      },
      specs: [
        {
          label: "Бренд",
          value: "Valfex"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Клей-герметик анаэробный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Синий"
        },
        {
          label: "Объем",
          value: "50 мл"
        }
      ]
    },
    {
      id: "santekh-gel-zelenyy-15-g",
      articul: "064060",
      title: "Сантех гель зеленый 15 г",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/edfeb7cc-b8ba-11e7-96aa-c8600046bc56_4e3df7f1-9e57-11ea-937e-002590ba8283-303x303.jpeg",
      price: 190,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "–",
        "strana-proizvoditel": "Россия",
        tip: "Сантехнический гель",
        cvet: "Зеленый",
        ves: "15 г"
      },
      specs: [
        {
          label: "Бренд",
          value: "–"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Сантехнический гель"
        },
        {
          label: "Цвет",
          value: "Зеленый"
        },
        {
          label: "Вес",
          value: "15 г"
        }
      ]
    },
    {
      id: "santekh-gel-zelenyy-60-g",
      articul: "064061",
      title: "Сантех гель зеленый 60 г УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/7b842c78-d8a7-11e6-86f6-c8600046bc56_4e3df7f2-9e57-11ea-937e-002590ba8283-303x303.jpeg",
      price: 38371,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "–",
        "strana-proizvoditel": "Россия",
        tip: "Сантехнический гель",
        cvet: "Зеленый",
        ves: "60 г"
      },
      specs: [
        {
          label: "Бренд",
          value: "–"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Сантехнический гель"
        },
        {
          label: "Цвет",
          value: "Зеленый"
        },
        {
          label: "Вес",
          value: "60 г"
        }
      ]
    }
  ]
};
