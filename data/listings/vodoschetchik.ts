import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/vodo-gazosnabzhenie/vodoschetchik/ */
export const vodoschetchikListing: CatalogListingData = {
  path: "vodo-gazosnabzhenie/vodoschetchik",
  title: "Водосчетчики",
  totalCountLabel: "25 товаров",
  filterFields: [
    {
      id: "mezhproverochnyj",
      title: "Межпроверочный интервал",
      options: [
        "4 года",
        "6 лет"
      ],
      truncate: false
    },
    {
      id: "brend",
      title: "Бренд",
      options: [
        "ВК",
        "ВСКМ",
        "ОСВУ"
      ],
      truncate: false
    },
    {
      id: "diametr",
      title: "Диаметр",
      options: [
        "1",
        "1*1/4",
        "1/2",
        "2",
        "3/4",
        "Ду-40"
      ],
      truncate: false
    },
    {
      id: "tip-schetchika",
      title: "Тип счетчика",
      options: [
        "Водосчетчик",
        "Водосчетчик универсальный"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "vodoschetchik-vk-40h",
      articul: "740",
      title: "Водосчетчик ВК-40Х",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 12730,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "ВК",
        "tip-schetchika": "Водосчетчик",
        diametr: "Ду-40"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "ВК"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип счетчика",
          value: "Водосчетчик"
        },
        {
          label: "Диаметр",
          value: "Ду-40"
        }
      ]
    },
    {
      id: "vodoschetchik-vskm-90-15",
      articul: "2564",
      title: "Водосчетчик ВСКМ 90/15",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 1050,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "ВСКМ",
        "tip-schetchika": "Водосчетчик",
        diametr: "3/4",
        ulichnyj: "Да",
        mezhproverochnyj: "4 года"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "ВСКМ"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип счетчика",
          value: "Водосчетчик"
        },
        {
          label: "Диаметр",
          value: "Ду-15"
        },
        {
          label: "Диаметр подключения",
          value: "3/4"
        },
        {
          label: "Уличный",
          value: "Да"
        },
        {
          label: "Межпроверочный интервал",
          value: "4 года"
        }
      ]
    },
    {
      id: "vodoschetchik-vskm-90-20",
      articul: "017543",
      title: "Водосчетчик ВСКМ 90/20",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/5b3c1816-30c7-11e2-a1f1-c8600046bc56_0ffaa817-9cfe-11ea-937e-002590ba8283-303x303.jpeg",
      price: 2025,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "ВСКМ",
        "tip-schetchika": "Водосчетчик",
        diametr: "3/4",
        mezhproverochnyj: "4 года",
        ulichnyj: "Да"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "ВСКМ"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип счетчика",
          value: "Водосчетчик"
        },
        {
          label: "Диаметр",
          value: "Ду-20"
        },
        {
          label: "Диаметр подключения",
          value: "3/4"
        },
        {
          label: "Межпроверочный интервал",
          value: "4 года"
        },
        {
          label: "Уличный",
          value: "Да"
        }
      ]
    },
    {
      id: "vodoschetchik-vskm-90-32",
      articul: "1909",
      title: "Водосчетчик ВСКМ 90/32",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 8700,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "ВСКМ",
        "tip-schetchika": "Водосчетчик",
        diametr: "3/4",
        ulichnyj: "Да",
        mezhproverochnyj: "4 года"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "ВСКМ"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип счетчика",
          value: "Водосчетчик"
        },
        {
          label: "Диаметр",
          value: "Ду-32"
        },
        {
          label: "Диаметр подключения",
          value: "3/4"
        },
        {
          label: "Уличный",
          value: "Да"
        },
        {
          label: "Межпроверочный интервал",
          value: "4 года"
        }
      ]
    },
    {
      id: "vodoschetchik-vskm-90-50-moskva",
      articul: "017546",
      title: "Водосчетчик ВСКМ 90/50 (Москва) УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/5b3c181c-30c7-11e2-a1f1-c8600046bc56_0ffaa819-9cfe-11ea-937e-002590ba8283-303x303.jpeg",
      price: 10000,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "ВСКМ",
        "tip-schetchika": "Водосчетчик",
        diametr: "2",
        mezhproverochnyj: "6 лет",
        nelikvid: "Да"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "ВСКМ"
        },
        {
          label: "Тип счетчика",
          value: "Водосчетчик"
        },
        {
          label: "Диаметр",
          value: "Ду-50"
        },
        {
          label: "Диаметр подключения",
          value: "2"
        },
        {
          label: "Межпроверочный интервал",
          value: "6 лет"
        },
        {
          label: "Неликвид",
          value: "Да"
        }
      ]
    },
    {
      id: "vodoschetchik-sv-15g-g-voda-f-15-univers",
      articul: "017561",
      title: "Водосчетчик ОСВУ-15 вода универс",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/618c5dd6-30c7-11e2-a1f1-c8600046bc56_0ffaa81c-9cfe-11ea-937e-002590ba8283-303x303.jpeg",
      price: 950,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "ОСВУ",
        "tip-schetchika": "Водосчетчик универсальный",
        diametr: "1/2",
        primenenie: "Универсальный",
        mezhproverochnyj: "6 лет"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "ОСВУ"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип счетчика",
          value: "Водосчетчик универсальный"
        },
        {
          label: "Диаметр",
          value: "Ду-15"
        },
        {
          label: "Применение",
          value: "Универсальный"
        },
        {
          label: "Диаметр подключения",
          value: "1/2"
        },
        {
          label: "Межпроверочный интервал",
          value: "6 лет"
        }
      ]
    },
    {
      id: "vodoschetchik-osvu-20",
      articul: "9199",
      title: "Водосчетчик ОСВУ-20",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 2000,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        primenenie: "Универсальный",
        diametr: "1",
        mezhproverochnyj: "4 года"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Применение",
          value: "Универсальный"
        },
        {
          label: "Диаметр подключения",
          value: "1"
        },
        {
          label: "Межпроверочный интервал",
          value: "4 года"
        }
      ]
    },
    {
      id: "vodoschetchik-osvu-25",
      articul: "017554",
      title: "Водосчетчик ОСВУ-25",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/972e0dab-77dc-11e9-a98a-c8600046bc56_0ffaa81a-9cfe-11ea-937e-002590ba8283-303x303.jpeg",
      price: 6600,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "ОСВУ",
        "tip-schetchika": "Водосчетчик",
        diametr: "1",
        mezhproverochnyj: "4 года"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "ОСВУ"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип счетчика",
          value: "Водосчетчик"
        },
        {
          label: "Диаметр",
          value: "Ду-25"
        },
        {
          label: "Диаметр подключения",
          value: "1"
        },
        {
          label: "Межпроверочный интервал",
          value: "4 года"
        }
      ]
    },
    {
      id: "vodoschetchik-osvu-32",
      articul: "017555",
      title: "Водосчетчик ОСВУ-32",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/618c5dca-30c7-11e2-a1f1-c8600046bc56_0ffaa81b-9cfe-11ea-937e-002590ba8283-303x303.jpeg",
      price: 4900,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "ОСВУ",
        "tip-schetchika": "Водосчетчик",
        diametr: "1*1/4",
        primenenie: "Универсальный",
        mezhproverochnyj: "4 года"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "ОСВУ"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип счетчика",
          value: "Водосчетчик"
        },
        {
          label: "Диаметр",
          value: "Ду-32"
        },
        {
          label: "Применение",
          value: "Универсальный"
        },
        {
          label: "Диаметр подключения",
          value: "1*1/4"
        },
        {
          label: "Межпроверочный интервал",
          value: "4 года"
        }
      ]
    },
    {
      id: "vodoschetchik-osvu-32-dekast",
      articul: "8289",
      title: "Водосчетчик ОСВУ-32 Декаст",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 0,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        mezhproverochnyj: "4 года"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Межпроверочный интервал",
          value: "4 года"
        }
      ]
    },
    {
      id: "vodoschetchik-osvu-32-jekomera-160-mm-so-shtucerami",
      articul: "11430",
      title: "Водосчетчик ОСВУ-32 ЭКОМЕРА 160 мм со штуцерами",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 7200,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        mezhproverochnyj: "4 года"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Межпроверочный интервал",
          value: "4 года"
        }
      ]
    },
    {
      id: "vodoschetchik-osvu-40",
      articul: "017556",
      title: "Водосчетчик ОСВУ-40",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/017556-247x303.jpg",
      price: 10000,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "ОСВУ",
        "tip-schetchika": "Водосчетчик",
        diametr: "Ду-40"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Бренд",
          value: "ОСВУ"
        },
        {
          label: "Тип счетчика",
          value: "Водосчетчик"
        },
        {
          label: "Диаметр",
          value: "Ду-40"
        }
      ]
    }
  ]
};
