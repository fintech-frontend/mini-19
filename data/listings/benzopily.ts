import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/tovary-dlya-doma-sada-i-ogoroda/sadovyy-inventar/benzopily-i-yelektropily-cepnye/benzopily/ */
export const benzopilyListing: CatalogListingData = {
  path: "tovary-dlya-doma-sada-i-ogoroda/sadovyy-inventar/benzopily-i-yelektropily-cepnye/benzopily",
  title: "Бензопилы",
  totalCountLabel: "30 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Champion",
        "Fubag",
        "GS"
      ],
      truncate: false
    },
    {
      id: "ves-kg",
      title: "Вес (кг)",
      options: [
        "4.5",
        "5.0",
        "5.2",
        "5.3",
        "5.5"
      ],
      truncate: false
    },
    {
      id: "zvenya-cepi",
      title: "Звенья цепи",
      options: [
        "50",
        "56",
        "72"
      ],
      truncate: false
    },
    {
      id: "moshhnost-kvt",
      title: "Мощность (кВт)",
      options: [
        "1.5",
        "2.0",
        "2.3",
        "2.5",
        "2.7",
        "3.0"
      ],
      truncate: false
    },
    {
      id: "obem-dvigatelya-sm",
      title: "Объём двигателя (см³)",
      options: [
        "37",
        "45",
        "46",
        "51",
        "54",
        "56"
      ],
      truncate: false
    },
    {
      id: "shag-cepi",
      title: "Шаг цепи",
      options: [
        "0.325",
        "3/8"
      ],
      truncate: false
    },
    {
      id: "shina-dyujmy",
      title: "Шина (дюймы)",
      options: [
        "14",
        "16",
        "18"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "benzopila-champion-237-16-3-8-13-56-15kvt-legkiy-start-3816",
      articul: "014517",
      title: "Бензопила Champion 237-16″ 3/8 1,3-56 1,5кВт легкий старт 3816",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/0ad7db7b-6a17-11e7-ab8a-c8600046bc56_fdca81fe-9fea-11ea-937f-002590ba8283-303x303.jpeg",
      price: 8540,
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
      id: "benzopila-champion-240-16-3-8-13-56-17kvt-s4016",
      articul: "014518",
      title: "Бензопила Champion 240-16″ 3/8 1,3-56 1,7кВт S4016 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/ddfa010a-621b-11e2-9b2e-c8600046bc56_fdca81ff-9fea-11ea-937f-002590ba8283-372x211.jpeg",
      price: 11520,
      inStock: true,
      quickBuy: true,
      filterValues: {}
    },
    {
      id: "benzopila-champion-241-16-3-8-13-56-18kvt-legkiy-start-4116",
      articul: "014519",
      title: "Бензопила Champion 241-16″ 3/8 1,3-56 1,8кВт легкий старт 4116",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/25b00032-6a17-11e7-ab8a-c8600046bc56_fdca8200-9fea-11ea-937f-002590ba8283-303x303.jpeg",
      price: 8090,
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
      id: "benzopila-champion-251-18-0325-15-72-23kvt-legkiy-start-4116",
      articul: "014520",
      title: "Бензопила Champion 251-18″ 0,325 1,5-72 2,3кВт легкий старт 4116",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/ddfa010c-621b-11e2-9b2e-c8600046bc56_fdca8201-9fea-11ea-937f-002590ba8283-265x303.jpeg",
      price: 9100,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Champion",
        "strana-proizvoditelya": "Китай",
        "tip-dvigatelya": "2-тактный",
        "moshhnost-kvt": "2.3",
        "obem-dvigatelya-sm": "51",
        "shina-dyujmy": "18",
        "shag-cepi": "0.325",
        "zvenya-cepi": "72"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Бренд",
          value: "Champion"
        },
        {
          label: "Страна производителя",
          value: "Китай"
        },
        {
          label: "Тип двигателя",
          value: "2-тактный"
        },
        {
          label: "Мощность (кВт)",
          value: "2.3"
        },
        {
          label: "Объём двигателя (см³)",
          value: "51"
        },
        {
          label: "Шина (дюймы)",
          value: "18"
        },
        {
          label: "Шаг цепи",
          value: "0.325"
        },
        {
          label: "Звенья цепи",
          value: "72"
        }
      ]
    },
    {
      id: "benzopila-champion-254-18-0325-15-72-25kvt-legkiy-start-5418",
      articul: "014521",
      title: "Бензопила Champion 254-18″ 0,325 1,5-72 2,5кВт легкий старт 5418",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/7e3f8336-2a2e-11e5-bcd1-c8600046bc56_fdca8202-9fea-11ea-937f-002590ba8283-303x303.jpeg",
      price: 13600,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Champion",
        "strana-proizvoditelya": "Китай",
        "tip-dvigatelya": "2-тактный",
        "moshhnost-kvt": "2.5",
        "obem-dvigatelya-sm": "54",
        "shina-dyujmy": "18",
        "shag-cepi": "0.325",
        "zvenya-cepi": "72"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Бренд",
          value: "Champion"
        },
        {
          label: "Страна производителя",
          value: "Китай"
        },
        {
          label: "Тип двигателя",
          value: "2-тактный"
        },
        {
          label: "Мощность (кВт)",
          value: "2.5"
        },
        {
          label: "Объём двигателя (см³)",
          value: "54"
        },
        {
          label: "Шина (дюймы)",
          value: "18"
        },
        {
          label: "Шаг цепи",
          value: "0.325"
        },
        {
          label: "Звенья цепи",
          value: "72"
        }
      ]
    },
    {
      id: "benzopila-champion-256-18-0325-15-72-25kvt-legkiy-start",
      articul: "409055",
      title: "Бензопила Champion 256-18″ 0,325 1,5-72 2,5кВт легкий старт",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/ea4a73b7-ce93-11ec-93ce-002590ba8282_800fb533-ce99-11ec-93ce-002590ba8282-372x248.jpeg",
      price: 14600,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Champion",
        "strana-proizvoditelya": "Китай",
        "tip-dvigatelya": "2-тактный",
        "moshhnost-kvt": "2.5",
        "obem-dvigatelya-sm": "56",
        "shina-dyujmy": "18",
        "shag-cepi": "0.325",
        "zvenya-cepi": "72"
      },
      specs: [
        {
          label: "Бренд",
          value: "Champion"
        },
        {
          label: "Страна производителя",
          value: "Китай"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип двигателя",
          value: "2-тактный"
        },
        {
          label: "Мощность (кВт)",
          value: "2.5"
        },
        {
          label: "Объём двигателя (см³)",
          value: "56"
        },
        {
          label: "Шина (дюймы)",
          value: "18"
        },
        {
          label: "Шаг цепи",
          value: "0.325"
        },
        {
          label: "Звенья цепи",
          value: "72"
        }
      ]
    },
    {
      id: "benzopila-fubag-fps-37-1500-vt",
      articul: "014522",
      title: "Бензопила Fubag FPS 37 1500 вт",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/f340dd49-86bd-11ea-937a-002590ba8283_fdca8203-9fea-11ea-937f-002590ba8283-303x303.jpeg",
      price: 12200,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Fubag",
        "strana-proizvoditelya": "Китай",
        "tip-dvigatelya": "2-тактный",
        "moshhnost-kvt": "1.5",
        "obem-dvigatelya-sm": "37",
        "shina-dyujmy": "14",
        "shag-cepi": "3/8",
        "zvenya-cepi": "50",
        "ves-kg": "4.5"
      },
      specs: [
        {
          label: "Бренд",
          value: "Fubag"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производителя",
          value: "Китай"
        },
        {
          label: "Тип двигателя",
          value: "2-тактный"
        },
        {
          label: "Мощность (кВт)",
          value: "1.5"
        },
        {
          label: "Объём двигателя (см³)",
          value: "37"
        },
        {
          label: "Шина (дюймы)",
          value: "14"
        },
        {
          label: "Шаг цепи",
          value: "3/8"
        },
        {
          label: "Звенья цепи",
          value: "50"
        },
        {
          label: "Вес (кг)",
          value: "4.5"
        }
      ]
    },
    {
      id: "benzopila-fubag-fps-46-2000-vt",
      articul: "204312",
      title: "Бензопила Fubag FPS 46 2000 вт",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/b09ed25c-6d36-11eb-93a5-002590ba8282_91c31a26-6d38-11eb-93a5-002590ba8282-303x303.jpeg",
      price: 13200,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "Fubag",
        "strana-proizvoditelya": "Китай",
        "tip-dvigatelya": "2-тактный",
        "moshhnost-kvt": "2.0",
        "obem-dvigatelya-sm": "46",
        "shina-dyujmy": "16",
        "shag-cepi": "3/8",
        "zvenya-cepi": "56",
        "ves-kg": "5.0"
      },
      specs: [
        {
          label: "Бренд",
          value: "Fubag"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производителя",
          value: "Китай"
        },
        {
          label: "Тип двигателя",
          value: "2-тактный"
        },
        {
          label: "Мощность (кВт)",
          value: "2.0"
        },
        {
          label: "Объём двигателя (см³)",
          value: "46"
        },
        {
          label: "Шина (дюймы)",
          value: "16"
        },
        {
          label: "Шаг цепи",
          value: "3/8"
        },
        {
          label: "Звенья цепи",
          value: "56"
        },
        {
          label: "Вес (кг)",
          value: "5.0"
        }
      ]
    },
    {
      id: "benzopila-fubag-fps-56-2500-vt",
      articul: "204313",
      title: "Бензопила Fubag FPS 56 2500 вт АКЦИЯ + подарок ящик д/инструментов CARBO LINE",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/d9073565-6d36-11eb-93a5-002590ba8282_9af3990d-6d38-11eb-93a5-002590ba8282-372x130.jpeg",
      price: 12880,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "Fubag",
        "strana-proizvoditelya": "Китай",
        "tip-dvigatelya": "2-тактный",
        "moshhnost-kvt": "2.5",
        "obem-dvigatelya-sm": "56",
        "shina-dyujmy": "18",
        "shag-cepi": "0.325",
        "zvenya-cepi": "72",
        "ves-kg": "5.5"
      },
      specs: [
        {
          label: "Бренд",
          value: "Fubag"
        },
        {
          label: "Страна производителя",
          value: "Китай"
        },
        {
          label: "Тип двигателя",
          value: "2-тактный"
        },
        {
          label: "Мощность (кВт)",
          value: "2.5"
        },
        {
          label: "Объём двигателя (см³)",
          value: "56"
        },
        {
          label: "Шина (дюймы)",
          value: "18"
        },
        {
          label: "Шаг цепи",
          value: "0.325"
        },
        {
          label: "Звенья цепи",
          value: "72"
        },
        {
          label: "Вес (кг)",
          value: "5.5"
        }
      ]
    },
    {
      id: "benzopila-gs2700-45-pro-45sm3-legkij-start-shina-16-2700vt-1",
      articul: "9108",
      title: "Бензопила GS2700/45-PRO (45см3,легкий старт,шина 16,2700Вт) №1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 7850,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "GS",
        "strana-proizvoditelya": "Китай",
        "tip-dvigatelya": "2-тактный",
        "moshhnost-kvt": "2.7",
        "obem-dvigatelya-sm": "45",
        "shina-dyujmy": "16",
        osobennosti: "лёгкий старт",
        "ves-kg": "5.2"
      },
      specs: [
        {
          label: "Бренд",
          value: "GS"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производителя",
          value: "Китай"
        },
        {
          label: "Тип двигателя",
          value: "2-тактный"
        },
        {
          label: "Мощность (кВт)",
          value: "2.7"
        },
        {
          label: "Объём двигателя (см³)",
          value: "45"
        },
        {
          label: "Шина (дюймы)",
          value: "16"
        },
        {
          label: "Особенности",
          value: "лёгкий старт"
        },
        {
          label: "Вес (кг)",
          value: "5.2"
        }
      ]
    },
    {
      id: "benzopila-gs3000-45-pro-45sm3-legkij-start-shina-16-3000vt-1",
      articul: "9121",
      title: "Бензопила GS3000/45-PRO (45см3,легкий старт,шина 16,3000Вт) №1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 8200,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "GS",
        "strana-proizvoditelya": "Китай",
        "tip-dvigatelya": "2-тактный",
        "moshhnost-kvt": "3.0",
        "obem-dvigatelya-sm": "45",
        "shina-dyujmy": "16",
        osobennosti: "лёгкий старт",
        "ves-kg": "5.3"
      },
      specs: [
        {
          label: "Бренд",
          value: "GS"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производителя",
          value: "Китай"
        },
        {
          label: "Тип двигателя",
          value: "2-тактный"
        },
        {
          label: "Мощность (кВт)",
          value: "3.0"
        },
        {
          label: "Объём двигателя (см³)",
          value: "45"
        },
        {
          label: "Шина (дюймы)",
          value: "16"
        },
        {
          label: "Особенности",
          value: "лёгкий старт"
        },
        {
          label: "Вес (кг)",
          value: "5.3"
        }
      ]
    },
    {
      id: "benzopila-gs3000-52-pro-52sm3-legkij-start-shina-18-3000vt-1",
      articul: "10726",
      title: "Бензопила GS3000/52-PRO (52см3,легкий старт,шина 18,3000Вт) №1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 7990,
      inStock: true,
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
