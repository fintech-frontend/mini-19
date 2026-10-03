import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/instrument/yelektroinstrument/pily-2/pily-torcovochnye/ */
export const pilyTorcovochnyeListing: CatalogListingData = {
  path: "instrument/yelektroinstrument/pily-2/pily-torcovochnye",
  title: "Пилы торцовочные",
  totalCountLabel: "16 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Вихрь",
        "MAX-PRO",
        "P.I.T.",
        "Sturm"
      ],
      truncate: false
    },
    {
      id: "diametr-diska",
      title: "Диаметр диска",
      options: [
        "210 мм",
        "255 мм",
        "305 мм"
      ],
      truncate: false
    },
    {
      id: "model",
      title: "Модель",
      options: [
        "85208",
        "ПТ-210",
        "ПТ-255ПЛ",
        "MS55212",
        "MS55305B",
        "PСМ 255-С2",
        "PСM 255-С"
      ],
      truncate: true
    },
    {
      id: "moshhnost",
      title: "Мощность",
      options: [
        "1500 Вт",
        "1600 Вт",
        "1800 Вт",
        "1900 Вт",
        "2000 Вт",
        "2200 Вт"
      ],
      truncate: false
    },
    {
      id: "posadochnyj-diametr",
      title: "Посадочный диаметр",
      options: [
        "25.4 мм",
        "30 мм"
      ],
      truncate: false
    },
    {
      id: "strana-proizvoditel",
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
      id: "pila-torcovochnaya-max-pro-1800vt-255-254-mm-85208",
      articul: "053327",
      title: "Пила торцовочная MAX-PRO 1800Вт 255/25,4 мм 85208 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/018491e5-4669-11e9-9b5e-c8600046bc56_568a30f6-9ff0-11ea-937f-002590ba8283-372x248.jpeg",
      price: 17440,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "MAX-PRO",
        tip: "Торцовочная пила",
        moshhnost: "1800 Вт",
        "diametr-diska": "255 мм",
        "posadochnyj-diametr": "25.4 мм",
        model: "85208",
        naznachenie: "Точная резка под углом"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "MAX-PRO"
        },
        {
          label: "Тип",
          value: "Торцовочная пила"
        },
        {
          label: "Мощность",
          value: "1800 Вт"
        },
        {
          label: "Диаметр диска",
          value: "255 мм"
        },
        {
          label: "Посадочный диаметр",
          value: "25.4 мм"
        },
        {
          label: "Модель",
          value: "85208"
        },
        {
          label: "Назначение",
          value: "Точная резка под углом"
        }
      ]
    },
    {
      id: "pila-torcovochnaja-nms-2000-210-2sl-2000vt-210mm-1",
      articul: "9109",
      title: "Пила торцовочная NMS 2000/210-2SL (2000Вт,210мм) №1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 21750,
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
      id: "pila-torcovochnaja-nms-2500-305-1sl-2500vt-305mm-1",
      articul: "9110",
      title: "Пила торцовочная NMS 2500/305-1SL (2500Вт,305мм) №1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 31950,
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
      id: "pila-torcovochnaya-p-i-t-psm-255-s-2000-vt-255-30mm-220v",
      articul: "061291",
      title: "Пила торцовочная P.I.T. PСM 255-С 2000 Вт 255/30мм 220В",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/5cd4da92-1796-11e7-969b-c8600046bc56_568a30ed-9ff0-11ea-937f-002590ba8283-303x303.jpeg",
      price: 17050,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "P.I.T.",
        tip: "Торцовочная пила",
        moshhnost: "2000 Вт",
        "diametr-diska": "255 мм",
        "posadochnyj-diametr": "30 мм",
        napryazhenie: "220 В",
        model: "PСM 255-С"
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
          value: "P.I.T."
        },
        {
          label: "Тип",
          value: "Торцовочная пила"
        },
        {
          label: "Мощность",
          value: "2000 Вт"
        },
        {
          label: "Диаметр диска",
          value: "255 мм"
        },
        {
          label: "Посадочный диаметр",
          value: "30 мм"
        },
        {
          label: "Напряжение",
          value: "220 В"
        },
        {
          label: "Модель",
          value: "PСM 255-С"
        }
      ]
    },
    {
      id: "pila-torcovochnaya-p-i-t-psm-255-s2-1600-vt-255-30-mm-220v-ucen",
      articul: "061292",
      title: "Пила торцовочная P.I.T. PСМ 255-С2 1600 Вт 255/30 мм 220В УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/9a0d75d2-07a7-11ea-a9ca-c8600046bc56_568a30ec-9ff0-11ea-937f-002590ba8283-303x303.jpeg",
      price: 15280,
      inStock: false,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "P.I.T.",
        tip: "Торцовочная пила",
        moshhnost: "1600 Вт",
        "diametr-diska": "255 мм",
        "posadochnyj-diametr": "30 мм",
        napryazhenie: "220 В",
        model: "PСМ 255-С2"
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
          value: "P.I.T."
        },
        {
          label: "Тип",
          value: "Торцовочная пила"
        },
        {
          label: "Мощность",
          value: "1600 Вт"
        },
        {
          label: "Диаметр диска",
          value: "255 мм"
        },
        {
          label: "Посадочный диаметр",
          value: "30 мм"
        },
        {
          label: "Напряжение",
          value: "220 В"
        },
        {
          label: "Модель",
          value: "PСМ 255-С2"
        }
      ]
    },
    {
      id: "pila-torcovochnaya-sturm-ms55212-1600vt-210mm",
      articul: "408881",
      title: "Пила торцовочная Sturm MS55212 1600Вт 210мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/5a42669b-c792-11ec-93cd-002590ba8282_78524525-ce9e-11ec-93ce-002590ba8282-372x279.jpeg",
      price: 12999,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "Sturm",
        tip: "Торцовочная пила",
        moshhnost: "1600 Вт",
        "diametr-diska": "210 мм",
        model: "MS55212",
        naznachenie: "Точная резка под углом",
        "posadochnyj-diametr": "30 мм"
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
          label: "Тип",
          value: "Торцовочная пила"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "1600 Вт"
        },
        {
          label: "Диаметр диска",
          value: "210 мм"
        },
        {
          label: "Модель",
          value: "MS55212"
        },
        {
          label: "Назначение",
          value: "Точная резка под углом"
        },
        {
          label: "Посадочный диаметр",
          value: "30 мм"
        }
      ]
    },
    {
      id: "pila-torcovochnaja-sturm-ms5525wm-2300vt-255mm-rezka-metalla",
      articul: "408879",
      title: "Пила торцовочная Sturm MS5525WM 2300Вт 255мм резка металла",
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
      id: "pila-torcovochnaya-sturm-ms55305b-2200vt-305mm",
      articul: "408880",
      title: "Пила торцовочная Sturm MS55305B 2200Вт 305мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/3df832c9-c792-11ec-93cd-002590ba8282_6dab87c9-ce9e-11ec-93ce-002590ba8282-303x303.jpeg",
      price: 36400,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "Sturm",
        tip: "Торцовочная пила",
        moshhnost: "2200 Вт",
        "diametr-diska": "305 мм",
        model: "MS55305B",
        naznachenie: "Точная резка под углом",
        "posadochnyj-diametr": "30 мм"
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
          label: "Тип",
          value: "Торцовочная пила"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "2200 Вт"
        },
        {
          label: "Диаметр диска",
          value: "305 мм"
        },
        {
          label: "Модель",
          value: "MS55305B"
        },
        {
          label: "Назначение",
          value: "Точная резка под углом"
        },
        {
          label: "Посадочный диаметр",
          value: "30 мм"
        }
      ]
    },
    {
      id: "pila-torcovochnaya-vikhr-pt-210-210mm-1500vt",
      articul: "061297",
      title: "Пила торцовочная Вихрь ПТ-210 210мм 1500Вт",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/de7253bd-ac8a-11ea-9384-002590ba8283_b8e326d2-af98-11ea-9384-002590ba8283.jpeg",
      price: 16150,
      inStock: false,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Россия",
        brend: "Вихрь",
        tip: "Торцовочная пила",
        moshhnost: "1500 Вт",
        "diametr-diska": "210 мм",
        model: "ПТ-210",
        naznachenie: "Точная резка под углом",
        "posadochnyj-diametr": "30 мм"
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
          label: "Бренд",
          value: "Вихрь"
        },
        {
          label: "Тип",
          value: "Торцовочная пила"
        },
        {
          label: "Мощность",
          value: "1500 Вт"
        },
        {
          label: "Диаметр диска",
          value: "210 мм"
        },
        {
          label: "Модель",
          value: "ПТ-210"
        },
        {
          label: "Назначение",
          value: "Точная резка под углом"
        },
        {
          label: "Посадочный диаметр",
          value: "30 мм"
        }
      ]
    },
    {
      id: "pila-torcovochnaya-vikhr-pt-255pl-1900vt",
      articul: "129237",
      title: "Пила торцовочная Вихрь ПТ-255ПЛ 1900Вт",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/d7d3ddcb-fa6a-11ea-9392-002590ba8283_3ae3d810-33a0-11eb-9397-002590ba8282-303x303.jpeg",
      price: 25500,
      inStock: false,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Россия",
        brend: "Вихрь",
        tip: "Торцовочная пила",
        moshhnost: "1900 Вт",
        "diametr-diska": "255 мм",
        model: "ПТ-255ПЛ",
        naznachenie: "Точная резка под углом",
        osobennosti: "Плавный пуск"
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
          label: "Бренд",
          value: "Вихрь"
        },
        {
          label: "Тип",
          value: "Торцовочная пила"
        },
        {
          label: "Мощность",
          value: "1900 Вт"
        },
        {
          label: "Диаметр диска",
          value: "255 мм"
        },
        {
          label: "Модель",
          value: "ПТ-255ПЛ"
        },
        {
          label: "Назначение",
          value: "Точная резка под углом"
        },
        {
          label: "Особенности",
          value: "Плавный пуск"
        }
      ]
    },
    {
      id: "pila-torcovochnaja-makita-lh1040-1650vt-260mm",
      articul: "053328",
      title: "Пила торцовочная Макита LH1040 1650ВТ 260мм",
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
      id: "pila-torcovochnaja-makita-ls-1040-255-1-65kvt-der",
      articul: "061299",
      title: "Пила торцовочная Макита LS 1040 255-1,65кВт дер.",
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
    }
  ]
};
