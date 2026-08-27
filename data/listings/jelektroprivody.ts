import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/instrument/yelektroinstrument/vibrotekhnika-i-komplektuyushhie/jelektroprivody/ */
export const jelektroprivodyListing: CatalogListingData = {
  path: "instrument/yelektroinstrument/vibrotekhnika-i-komplektuyushhie/jelektroprivody",
  title: "Электроприводы",
  totalCountLabel: "16 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Калибр",
        "P.I.T",
        "Sturm"
      ],
      truncate: false
    },
    {
      id: "dlina-vala",
      title: "Длина вала",
      options: [
        "1.5м",
        "1м",
        "4м"
      ],
      truncate: false
    },
    {
      id: "komplektaciya",
      title: "Комплектация",
      options: [
        "Привод, вал 1.5м, наконечник",
        "Привод, вал 1м, наконечник",
        "Привод, вал 4м, наконечник",
        "Привод, вал, наконечник"
      ],
      truncate: false
    },
    {
      id: "moshhnost",
      title: "Мощность",
      options: [
        "1000Вт",
        "1100Вт",
        "1500Вт"
      ],
      truncate: false
    },
    {
      id: "opisanie",
      title: "Описание",
      options: [
        "Электропривод для вибратора Калибр Мастер ВЭС-1500М мощностью 1.5кВт",
        "Электропривод P.I.T P31035 мощностью 1100Вт с валом 1.5м",
        "Электропривод P.I.T PMV50-C мощностью 1500Вт с валом 4м",
        "Электропривод Sturm CV71101 мощностью 1000Вт с валом 1м"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "yelektroprivod-kalibr-master-vyes-1500m-15kv",
      articul: "080543",
      title: "Электропривод Калибр Мастер ВЭС-1500М (1,5кВт) УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/5d34e012-5555-11e6-a9ea-c8600046bc56_755c5eab-9feb-11ea-937f-002590ba8283-372x249.jpeg",
      price: 6850,
      inStock: false,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "Калибр",
        napryazhenie: "220В",
        moshhnost: "1500Вт",
        tip: "Электропривод для вибратора",
        komplektaciya: "Привод, вал, наконечник",
        status: "Уценка",
        opisanie: "Электропривод для вибратора Калибр Мастер ВЭС-1500М мощностью 1.5кВт"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Калибр"
        },
        {
          label: "Напряжение",
          value: "220В"
        },
        {
          label: "Мощность",
          value: "1500Вт"
        },
        {
          label: "Тип",
          value: "Электропривод для вибратора"
        },
        {
          label: "Комплектация",
          value: "Привод, вал, наконечник"
        },
        {
          label: "Статус",
          value: "Уценка"
        },
        {
          label: "Описание",
          value: "Электропривод для вибратора Калибр Мастер ВЭС-1500М мощностью 1.5кВт"
        }
      ]
    },
    {
      id: "jelektroprivod-ev1300-1-1300vt-220v-1-val-1-nak-1",
      articul: "10731",
      title: "Электропривод EV1300-1 (1300Вт 220В 1 вал+1 нак) №1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 0,
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
      id: "jelektroprivod-ev1300-1-1300vt-shlang-1-5m-1",
      articul: "9129",
      title: "Электропривод EV1300-1 (1300Вт,шланг 1,5м) №1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 6600,
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
      id: "jelektroprivod-ev1500-1-1500vt-220v-1-val-1-nak-1",
      articul: "10730",
      title: "Электропривод EV1500-1 (1500Вт 220В 1 вал+1 нак) №1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 12850,
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
      id: "jelektroprivod-ev2200-pro-2300vt-220v-1-val-1-nak-1",
      articul: "10733",
      title: "Электропривод EV2200-PRO (2300Вт 220В 1 вал+1 нак) №1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 19200,
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
      id: "yelektroprivod-p-i-t-p31035-1100vt-15m-220v-1-val1-nak",
      articul: "412127",
      title: "Электропривод P.I.T P31035 1100Вт 1,5м 220В 1 вал+1 нак",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/922da5a4-2f7d-11ed-93d1-002590ba8282_6664b99a-7071-11ed-93dc-002590ba8282-303x303.jpeg",
      price: 7600,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "P.I.T",
        napryazhenie: "220В",
        moshhnost: "1100Вт",
        "dlina-vala": "1.5м",
        komplektaciya: "Привод, вал 1.5м, наконечник",
        tip: "Электропривод для вибратора",
        opisanie: "Электропривод P.I.T P31035 мощностью 1100Вт с валом 1.5м"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "P.I.T"
        },
        {
          label: "Напряжение",
          value: "220В"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "1100Вт"
        },
        {
          label: "Длина вала",
          value: "1.5м"
        },
        {
          label: "Комплектация",
          value: "Привод, вал 1.5м, наконечник"
        },
        {
          label: "Тип",
          value: "Электропривод для вибратора"
        },
        {
          label: "Описание",
          value: "Электропривод P.I.T P31035 мощностью 1100Вт с валом 1.5м"
        }
      ]
    },
    {
      id: "yelektroprivod-p-i-t-pmv50-c-1500vt-4m-220v-1-val1-nak",
      articul: "412126",
      title: "Электропривод P.I.T PMV50-C 1500Вт 4м 220В 1 вал+1 нак",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/76bcc743-2f7d-11ed-93d1-002590ba8282_75de1647-7071-11ed-93dc-002590ba8282-372x248.jpeg",
      price: 13750,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "P.I.T",
        napryazhenie: "220В",
        moshhnost: "1500Вт",
        "dlina-vala": "4м",
        komplektaciya: "Привод, вал 4м, наконечник",
        tip: "Электропривод для вибратора",
        opisanie: "Электропривод P.I.T PMV50-C мощностью 1500Вт с валом 4м"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "P.I.T"
        },
        {
          label: "Напряжение",
          value: "220В"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "1500Вт"
        },
        {
          label: "Длина вала",
          value: "4м"
        },
        {
          label: "Комплектация",
          value: "Привод, вал 4м, наконечник"
        },
        {
          label: "Тип",
          value: "Электропривод для вибратора"
        },
        {
          label: "Описание",
          value: "Электропривод P.I.T PMV50-C мощностью 1500Вт с валом 4м"
        }
      ]
    },
    {
      id: "yelektroprivod-sturm-cv71101-1000vt-1m-220v-1-val1-nak",
      articul: "414338",
      title: "Электропривод Sturm CV71101 1000Вт 1м 220В 1 вал+1 нак",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/cad39a88-6d76-11ed-93dc-002590ba8282_6d037b40-7076-11ed-93dc-002590ba8282-303x303.jpeg",
      price: 6500,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "Sturm",
        napryazhenie: "220В",
        moshhnost: "1000Вт",
        "dlina-vala": "1м",
        komplektaciya: "Привод, вал 1м, наконечник",
        tip: "Электропривод для вибратора",
        opisanie: "Электропривод Sturm CV71101 мощностью 1000Вт с валом 1м"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Sturm"
        },
        {
          label: "Напряжение",
          value: "220В"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "1000Вт"
        },
        {
          label: "Длина вала",
          value: "1м"
        },
        {
          label: "Комплектация",
          value: "Привод, вал 1м, наконечник"
        },
        {
          label: "Тип",
          value: "Электропривод для вибратора"
        },
        {
          label: "Описание",
          value: "Электропривод Sturm CV71101 мощностью 1000Вт с валом 1м"
        }
      ]
    },
    {
      id: "yelektroprivod-vi-1-17-3-220v-1val3m1nak51-mm",
      articul: "003909",
      title: "Электропривод ВИ-1-17-3 220В 1вал(3м)+1нак(51 мм)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/c2d2f647-c5cf-11ea-9386-002590ba8283_d3e941d8-c659-11ea-9386-002590ba8283-303x303.jpeg",
      price: 30700,
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
      id: "yelektroprivod-vi-1-17-3-220v-uzo",
      articul: "128881",
      title: "Электропривод ВИ-1-17-3 220В УЗО",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/77e966f0-eea7-11ea-9392-002590ba8283_f7b41efc-f1b6-11ea-9392-002590ba8283-303x303.jpeg",
      price: 22900,
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
      id: "yelektroprivod-yep-1600-220v-1val3m1-nak51mm-workmaster",
      articul: "128984",
      title: "Электропривод ЭП-1600 220В 1вал(3м)+1 нак(51мм) WorkMaster УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/7e60fb68-f325-11ea-9392-002590ba8283_0fed583a-f43c-11ea-9392-002590ba8283-372x272.jpeg",
      price: 21300,
      inStock: false,
      quickBuy: true,
      filterValues: {}
    },
    {
      id: "yelektroprivod-yep-1600-220v-uzo-workmaster",
      articul: "404860",
      title: "Электропривод ЭП-1600 220В УЗО WorkMaster",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/f16d483a-2b38-11ec-93be-002590ba8282_fcf21b28-7902-11ec-93c5-002590ba8282-303x303.jpeg",
      price: 18600,
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
