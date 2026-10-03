import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/instrument/yelektroinstrument/perforatory/ */
export const perforatoryListing: CatalogListingData = {
  path: "instrument/yelektroinstrument/perforatory",
  title: "Перфораторы",
  totalCountLabel: "66 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "CROWN",
        "DERZHI"
      ],
      truncate: false
    },
    {
      id: "model",
      title: "Модель",
      options: [
        "П-26/920Д",
        "П-30/1000Д",
        "CT18108ВМС",
        "CT18118VВМС"
      ],
      truncate: false
    },
    {
      id: "moshhnost",
      title: "Мощность",
      options: [
        "800 Вт",
        "920 Вт",
        "1000 Вт",
        "1250 Вт"
      ],
      truncate: false
    },
    {
      id: "tip-patrona",
      title: "Тип патрона",
      options: [
        "SDS-MAX",
        "SDS-plus"
      ],
      truncate: false
    },
    {
      id: "energiya-udara",
      title: "Энергия удара",
      options: [
        "3 Дж",
        "3.4 Дж",
        "10 Дж"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "perforator-crown-ct18108vms-800-vt-34dzh",
      articul: "052856",
      title: "Перфоратор CROWN CT18108ВМС 800 Вт 3,4Дж УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/d4c8bd8f-d1d0-11e8-8c39-c8600046bc56_3961d317-9fec-11ea-937f-002590ba8283-372x251.jpeg",
      price: 1170960,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "CROWN",
        tip: "Перфоратор",
        moshhnost: "800 Вт",
        "energiya-udara": "3.4 Дж",
        "tip-patrona": "SDS-plus",
        model: "CT18108ВМС"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "CROWN"
        },
        {
          label: "Тип",
          value: "Перфоратор"
        },
        {
          label: "Мощность",
          value: "800 Вт"
        },
        {
          label: "Энергия удара",
          value: "3.4 Дж"
        },
        {
          label: "Тип патрона",
          value: "SDS-plus"
        },
        {
          label: "Модель",
          value: "CT18108ВМС"
        }
      ]
    },
    {
      id: "perforator-crown-ct18118vvms-1250-vt-10dzh-sds-max",
      articul: "004182",
      title: "Перфоратор CROWN CT18118VВМС 1250 Вт 10Дж SDS-MAX",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/35563134-cd9e-11ea-9386-002590ba8283_d0e00660-cdaa-11ea-9386-002590ba8283-303x303.jpeg",
      price: 30850,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "CROWN",
        tip: "Перфоратор",
        moshhnost: "1250 Вт",
        "energiya-udara": "10 Дж",
        "tip-patrona": "SDS-MAX",
        model: "CT18118VВМС"
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
          value: "CROWN"
        },
        {
          label: "Тип",
          value: "Перфоратор"
        },
        {
          label: "Мощность",
          value: "1250 Вт"
        },
        {
          label: "Энергия удара",
          value: "10 Дж"
        },
        {
          label: "Тип патрона",
          value: "SDS-MAX"
        },
        {
          label: "Модель",
          value: "CT18118VВМС"
        }
      ]
    },
    {
      id: "perforator-derzhi-p-26-920d-920vt-3dzhsds",
      articul: "421852",
      title: "Перфоратор DERZHI П-26/920Д 920Вт 3Дж,SDS+",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/421852-372x287.jpeg",
      price: 6650,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "DERZHI",
        tip: "Перфоратор",
        moshhnost: "920 Вт",
        "energiya-udara": "3 Дж",
        "tip-patrona": "SDS-plus",
        model: "П-26/920Д"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "DERZHI"
        },
        {
          label: "Тип",
          value: "Перфоратор"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "920 Вт"
        },
        {
          label: "Энергия удара",
          value: "3 Дж"
        },
        {
          label: "Тип патрона",
          value: "SDS-plus"
        },
        {
          label: "Модель",
          value: "П-26/920Д"
        }
      ]
    },
    {
      id: "perforator-derzhi-p-30-1000d-1000vt-3dzhsds",
      articul: "421851",
      title: "Перфоратор DERZHI П-30/1000Д 1000Вт 3Дж,SDS+",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/421851-372x288.png",
      price: 8700,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "DERZHI",
        tip: "Перфоратор",
        moshhnost: "1000 Вт",
        "energiya-udara": "3 Дж",
        "tip-patrona": "SDS-plus",
        model: "П-30/1000Д"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "DERZHI"
        },
        {
          label: "Тип",
          value: "Перфоратор"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "1000 Вт"
        },
        {
          label: "Энергия удара",
          value: "3 Дж"
        },
        {
          label: "Тип патрона",
          value: "SDS-plus"
        },
        {
          label: "Модель",
          value: "П-30/1000Д"
        }
      ]
    },
    {
      id: "perforator-eh1200-26-1-1200vt-3-hrezhim-3-2dzh-sds-1",
      articul: "9138",
      title: "Перфоратор EH1200/26-1 (1200Вт,3-хрежим,3,2Дж,SDS+) №1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 6100,
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
      id: "perforator-eh1250-30-1-1250vt-3-hrezhim-3-2dzh-sds-1",
      articul: "9137",
      title: "Перфоратор EH1250/30-1 (1250Вт,3-хрежим,3,2Дж,SDS+) №1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 6800,
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
      id: "perforator-eh1300-30-2-1300vt-3-hrezhim-3-2dzh-sds-1",
      articul: "9141",
      title: "Перфоратор EH1300/30-2 (1300Вт,3-хрежим,3.2Дж,SDS+) №1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 6200,
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
      id: "perforator-eh1500-30-pro-1500vt-3-hrezhim-5-5dzh-sds-1",
      articul: "9142",
      title: "Перфоратор EH1500/30-PRO (1500Вт,3-хрежим,5.5Дж,SDS+) №1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 10300,
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
      id: "perforator-eh1500-32-1-1200vt-3-hrezhim-4-0dzh-sds-1",
      articul: "9139",
      title: "Перфоратор EH1500/32-1 (1200Вт,3-хрежим,4,0Дж,SDS+) №1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 9300,
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
      id: "perforator-eh1800-40-pro-1800vt-3-hrezhim-10-0dzh-sds-max-1",
      articul: "9140",
      title: "Перфоратор EH1800/40-PRO (1800Вт,3-хрежим,10.0Дж,SDS-MAX) №1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 18050,
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
      id: "perforator-eh1950-32-2-1950vt-4-hrezhim-5-0dzh-sds-1",
      articul: "9143",
      title: "Перфоратор EH1950/32-2 (1950Вт,4-хрежим,5.0Дж,SDS+) №1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 8500,
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
      id: "perforator-eh1950-40-pro-1950vt-4-hrezhim-7-0dzh-sds-1",
      articul: "10737",
      title: "Перфоратор EH1950/40-PRO (1950Вт,4-хрежим,7.0Дж,SDS+) №1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 11600,
      inStock: false,
      quickBuy: true,
      filterValues: {},
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    }
  ]
};
