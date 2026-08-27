import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/specodezhda-i-sredstva-individualno/pozharnyy-inventar/ognetushiteli/ */
export const ognetushiteliListing: CatalogListingData = {
  path: "specodezhda-i-sredstva-individualno/pozharnyy-inventar/ognetushiteli",
  title: "Огнетушители",
  totalCountLabel: "23 товара",
  filterFields: [
    {
      id: "ognetushashhee",
      title: "Огнетушащее вещество",
      options: [
        "Порошок",
        "Углекислота"
      ],
      truncate: false
    },
    {
      id: "ves",
      title: "Вес",
      options: [
        "3кг",
        "4кг",
        "7кг",
        "10кг",
        "13.5кг"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "kronshteyn-tv4-transportnyy-dlya-ou-5",
      articul: "034481",
      title: "Кронштейн ТВ4 транспортный для ОУ-5",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 290,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "kronshteyn-tv3-transportnyy-dlya-ou-3op-34-d-133",
      articul: "034481",
      title: "Кронштейн ТВ8",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/45de116d-f65f-11e9-a9c2-c8600046bc54_72e97ef6-a019-11ea-937f-002590ba8283-372x248.jpeg",
      price: 265,
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
      id: "ognetushitel-ovp-10-z-av-morozostoykiy",
      articul: "050498",
      title: "Огнетушитель ОВП-10 (з) АВ (морозостойкий)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/b07fad43-eb6f-11e5-80a4-c8600046bc56_72e97ef8-a019-11ea-937f-002590ba8283-189x303.jpeg",
      price: 6390,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        ves: "13.5кг",
        ognetushashhee: "Углекислота"
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
          label: "Вес",
          value: "13.5кг"
        },
        {
          label: "Огнетушащее вещество",
          value: "Углекислота"
        }
      ]
    },
    {
      id: "ognetushitel-op-1",
      articul: "050500",
      title: "Огнетушитель ОП-1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/598cc140-30c6-11e2-a1f1-c8600046bc56_72e97ef9-a019-11ea-937f-002590ba8283-265x303.jpeg",
      price: 395,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        ognetushashhee: "Порошок"
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
          label: "Огнетушащее вещество",
          value: "Порошок"
        }
      ]
    },
    {
      id: "ognetushitel-op-2",
      articul: "050502",
      title: "Огнетушитель ОП-2",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/598cc142-30c6-11e2-a1f1-c8600046bc56_72e97efa-a019-11ea-937f-002590ba8283-303x303.jpeg",
      price: 665,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        ves: "3кг",
        ognetushashhee: "Порошок"
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
          label: "Вес",
          value: "3кг"
        },
        {
          label: "Огнетушащее вещество",
          value: "Порошок"
        }
      ]
    },
    {
      id: "ognetushitel-op-25",
      articul: "415197",
      title: "Огнетушитель ОП-25",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 4120,
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
      id: "ognetushitel-op-3",
      articul: "050503",
      title: "Огнетушитель ОП-3",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/1505fef7-80b8-11e2-b094-c8600046bc56_72e97efb-a019-11ea-937f-002590ba8283-303x303.jpeg",
      price: 685,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        ves: "4кг",
        ognetushashhee: "Порошок"
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
          label: "Вес",
          value: "4кг"
        },
        {
          label: "Огнетушащее вещество",
          value: "Порошок"
        }
      ]
    },
    {
      id: "ognetushitel-op-3-inventar",
      articul: "7582",
      title: "Огнетушитель ОП-3 (инвентарь)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 0,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        ognetushashhee: "Порошок"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Огнетушащее вещество",
          value: "Порошок"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "ognetushitel-op-5",
      articul: "050504",
      title: "Огнетушитель ОП-5",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/598cc146-30c6-11e2-a1f1-c8600046bc56_72e97efc-a019-11ea-937f-002590ba8283-303x303.jpeg",
      price: 915,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        ves: "7кг",
        ognetushashhee: "Порошок"
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
          label: "Вес",
          value: "7кг"
        },
        {
          label: "Огнетушащее вещество",
          value: "Порошок"
        }
      ]
    },
    {
      id: "ognetushitel-op-50",
      articul: "050505",
      title: "Огнетушитель ОП-50",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/598cc148-30c6-11e2-a1f1-c8600046bc56_72e97efd-a019-11ea-937f-002590ba8283-170x303.jpeg",
      price: 9500,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        ognetushashhee: "Порошок"
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
          label: "Огнетушащее вещество",
          value: "Порошок"
        }
      ]
    },
    {
      id: "ognetushitel-op-8-10",
      articul: "050507",
      title: "Огнетушитель ОП-8 (10)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/598cc14a-30c6-11e2-a1f1-c8600046bc56_72e97efe-a019-11ea-937f-002590ba8283-221x303.jpeg",
      price: 1200,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        ves: "10кг",
        ognetushashhee: "Порошок"
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
          label: "Вес",
          value: "10кг"
        },
        {
          label: "Огнетушащее вещество",
          value: "Порошок"
        }
      ]
    },
    {
      id: "ognetushitel-op-8-10-inventar",
      articul: "8139",
      title: "Огнетушитель ОП-8 (10) (инвентарь)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 0,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        ognetushashhee: "Порошок"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Огнетушащее вещество",
          value: "Порошок"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    }
  ]
};
