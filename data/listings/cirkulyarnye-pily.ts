import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/instrument/yelektroinstrument/pily-2/cirkulyarnye-pily/ */
export const cirkulyarnyePilyListing: CatalogListingData = {
  path: "instrument/yelektroinstrument/pily-2/cirkulyarnye-pily",
  title: "Циркулярные пилы",
  totalCountLabel: "35 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "CROWN",
        "Hanskonner",
        "P.I.T.",
        "Sturm"
      ],
      truncate: false
    },
    {
      id: "diametr-diska",
      title: "Диаметр диска",
      options: [
        "125 мм",
        "165 мм",
        "185 мм",
        "190 мм",
        "200 мм",
        "210 мм",
        "235 мм"
      ],
      truncate: true
    },
    {
      id: "model",
      title: "Модель",
      options: [
        "CT15187",
        "CT15188",
        "CT15199",
        "CT15210",
        "HСS50160",
        "HСS50190",
        "HСS50210",
        "HСS51185",
        "PKS 200-С",
        "TC1312P"
      ],
      truncate: true
    },
    {
      id: "moshhnost",
      title: "Мощность",
      options: [
        "1200 Вт",
        "1300 Вт",
        "1350 Вт",
        "1500 Вт",
        "1800 Вт",
        "2000 Вт",
        "2100 Вт"
      ],
      truncate: true
    },
    {
      id: "naznachenie",
      title: "Назначение",
      options: [
        "Продольная и поперечная резка",
        "Профильная резка"
      ],
      truncate: false
    },
    {
      id: "posadochnyj-diametr",
      title: "Посадочный диаметр",
      options: [
        "20 мм",
        "30 мм"
      ],
      truncate: false
    },
    {
      id: "tip",
      title: "Тип",
      options: [
        "Двухдисковая пила",
        "Дисковая пила"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "pila-dvukhdiskovaya-sturm-tc1312p-125-mm-1300vt-akciya-uce",
      articul: "053267",
      title: "Пила двухдисковая Sturm TC1312P 125 мм 1300Вт Акция УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/8e45354c-ef11-11e8-a085-c8600046bc56_568a3114-9ff0-11ea-937f-002590ba8283-372x279.jpeg",
      price: 4130,
      inStock: false,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "Sturm",
        tip: "Двухдисковая пила",
        "diametr-diska": "125 мм",
        moshhnost: "1300 Вт",
        model: "TC1312P",
        naznachenie: "Профильная резка",
        "posadochnyj-diametr": "20 мм"
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
          value: "Двухдисковая пила"
        },
        {
          label: "Диаметр диска",
          value: "125 мм"
        },
        {
          label: "Мощность",
          value: "1300 Вт"
        },
        {
          label: "Модель",
          value: "TC1312P"
        },
        {
          label: "Назначение",
          value: "Профильная резка"
        },
        {
          label: "Посадочный диаметр",
          value: "20 мм"
        }
      ]
    },
    {
      id: "pila-diskovaya-crown-ct15187-165-12kvt-ucenka",
      articul: "053268",
      title: "Пила дисковая CROWN CT15187 165-1,2кВт УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/08d2b77d-d1cf-11e8-8c39-c8600046bc56_568a3113-9ff0-11ea-937f-002590ba8283-298x303.jpeg",
      price: 5400,
      inStock: false,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "CROWN",
        tip: "Дисковая пила",
        "diametr-diska": "165 мм",
        moshhnost: "1200 Вт",
        model: "CT15187",
        naznachenie: "Продольная и поперечная резка",
        "posadochnyj-diametr": "20 мм"
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
          value: "CROWN"
        },
        {
          label: "Тип",
          value: "Дисковая пила"
        },
        {
          label: "Диаметр диска",
          value: "165 мм"
        },
        {
          label: "Мощность",
          value: "1200 Вт"
        },
        {
          label: "Модель",
          value: "CT15187"
        },
        {
          label: "Назначение",
          value: "Продольная и поперечная резка"
        },
        {
          label: "Посадочный диаметр",
          value: "20 мм"
        }
      ]
    },
    {
      id: "pila-diskovaya-crown-ct15188-190-15kvt",
      articul: "053269",
      title: "Пила дисковая CROWN CT15188 190-1,5кВт",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/1ff51729-d1cf-11e8-8c39-c8600046bc56_568a3112-9ff0-11ea-937f-002590ba8283-303x303.jpeg",
      price: 10450,
      inStock: false,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "CROWN",
        tip: "Дисковая пила",
        "diametr-diska": "190 мм",
        moshhnost: "1500 Вт",
        model: "CT15188",
        naznachenie: "Продольная и поперечная резка",
        "posadochnyj-diametr": "30 мм"
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
          value: "CROWN"
        },
        {
          label: "Тип",
          value: "Дисковая пила"
        },
        {
          label: "Диаметр диска",
          value: "190 мм"
        },
        {
          label: "Мощность",
          value: "1500 Вт"
        },
        {
          label: "Модель",
          value: "CT15188"
        },
        {
          label: "Назначение",
          value: "Продольная и поперечная резка"
        },
        {
          label: "Посадочный диаметр",
          value: "30 мм"
        }
      ]
    },
    {
      id: "pila-diskovaya-crown-ct15199-190-12kvt-ucenka",
      articul: "053270",
      title: "Пила дисковая CROWN CT15199 190-1,2кВт УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/6457ca02-5d17-11e9-b183-c8600046bc56_568a3111-9ff0-11ea-937f-002590ba8283-303x303.jpeg",
      price: 5600,
      inStock: false,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "CROWN",
        tip: "Дисковая пила",
        "diametr-diska": "190 мм",
        moshhnost: "1200 Вт",
        model: "CT15199",
        naznachenie: "Продольная и поперечная резка",
        "posadochnyj-diametr": "30 мм"
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
          value: "CROWN"
        },
        {
          label: "Тип",
          value: "Дисковая пила"
        },
        {
          label: "Диаметр диска",
          value: "190 мм"
        },
        {
          label: "Мощность",
          value: "1200 Вт"
        },
        {
          label: "Модель",
          value: "CT15199"
        },
        {
          label: "Назначение",
          value: "Продольная и поперечная резка"
        },
        {
          label: "Посадочный диаметр",
          value: "30 мм"
        }
      ]
    },
    {
      id: "pila-diskovaya-crown-ct15210-235-2-0kvt",
      articul: "053271",
      title: "Пила дисковая CROWN CT15210 235-2.0кВт УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/46254aad-d1cf-11e8-8c39-c8600046bc56_568a310f-9ff0-11ea-937f-002590ba8283-303x303.jpeg",
      price: 8640,
      inStock: false,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "CROWN",
        tip: "Дисковая пила",
        "diametr-diska": "235 мм",
        moshhnost: "2000 Вт",
        model: "CT15210",
        naznachenie: "Продольная и поперечная резка",
        "posadochnyj-diametr": "30 мм"
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
          value: "Дисковая пила"
        },
        {
          label: "Диаметр диска",
          value: "235 мм"
        },
        {
          label: "Мощность",
          value: "2000 Вт"
        },
        {
          label: "Модель",
          value: "CT15210"
        },
        {
          label: "Назначение",
          value: "Продольная и поперечная резка"
        },
        {
          label: "Посадочный диаметр",
          value: "30 мм"
        }
      ]
    },
    {
      id: "pila-diskovaja-cs1500-185-pro-185mm-1500vt-1",
      articul: "9155",
      title: "Пила дисковая CS1500/185-PRO (185мм,1500Вт) №1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 6350,
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
      id: "pila-diskovaja-cs1600-190-pro-190mm-1600vt-1",
      articul: "10739",
      title: "Пила дисковая CS1600/190-PRO (190мм,1600Вт) №1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 8300,
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
      id: "pila-diskovaja-hanskonner-hss50160-1350vt-165h20mm",
      articul: "626",
      title: "Пила дисковая Hanskonner HСS50160 1350Вт 165х20мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 10650,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "Hanskonner",
        tip: "Дисковая пила",
        moshhnost: "1350 Вт",
        "diametr-diska": "165 мм",
        "posadochnyj-diametr": "20 мм",
        model: "HСS50160",
        naznachenie: "Продольная и поперечная резка"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Hanskonner"
        },
        {
          label: "Максимальный размер скидки",
          value: "10"
        },
        {
          label: "Тип",
          value: "Дисковая пила"
        },
        {
          label: "Мощность",
          value: "1350 Вт"
        },
        {
          label: "Диаметр диска",
          value: "165 мм"
        },
        {
          label: "Посадочный диаметр",
          value: "20 мм"
        },
        {
          label: "Модель",
          value: "HСS50160"
        },
        {
          label: "Назначение",
          value: "Продольная и поперечная резка"
        }
      ]
    },
    {
      id: "pila-diskovaja-hanskonner-hss50190-1800vt-190h20mm",
      articul: "1266",
      title: "Пила дисковая Hanskonner HСS50190 1800Вт 190х20мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 12600,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "Hanskonner",
        tip: "Дисковая пила",
        moshhnost: "1800 Вт",
        "diametr-diska": "190 мм",
        "posadochnyj-diametr": "20 мм",
        model: "HСS50190",
        naznachenie: "Продольная и поперечная резка"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Hanskonner"
        },
        {
          label: "Максимальный размер скидки",
          value: "10"
        },
        {
          label: "Тип",
          value: "Дисковая пила"
        },
        {
          label: "Мощность",
          value: "1800 Вт"
        },
        {
          label: "Диаметр диска",
          value: "190 мм"
        },
        {
          label: "Посадочный диаметр",
          value: "20 мм"
        },
        {
          label: "Модель",
          value: "HСS50190"
        },
        {
          label: "Назначение",
          value: "Продольная и поперечная резка"
        }
      ]
    },
    {
      id: "pila-diskovaja-hanskonner-hss50210-2100vt-210h30mm",
      articul: "1818",
      title: "Пила дисковая Hanskonner HСS50210 2100Вт 210х30мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 15100,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "Hanskonner",
        tip: "Дисковая пила",
        moshhnost: "2100 Вт",
        "diametr-diska": "210 мм",
        "posadochnyj-diametr": "30 мм",
        model: "HСS50210",
        naznachenie: "Продольная и поперечная резка"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Hanskonner"
        },
        {
          label: "Максимальный размер скидки",
          value: "10"
        },
        {
          label: "Тип",
          value: "Дисковая пила"
        },
        {
          label: "Мощность",
          value: "2100 Вт"
        },
        {
          label: "Диаметр диска",
          value: "210 мм"
        },
        {
          label: "Посадочный диаметр",
          value: "30 мм"
        },
        {
          label: "Модель",
          value: "HСS50210"
        },
        {
          label: "Назначение",
          value: "Продольная и поперечная резка"
        }
      ]
    },
    {
      id: "pila-diskovaja-hanskonner-hss51185-1800vt-185h20mm",
      articul: "627",
      title: "Пила дисковая Hanskonner HСS51185 1800Вт 185х20мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 10800,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "Hanskonner",
        tip: "Дисковая пила",
        moshhnost: "1800 Вт",
        "diametr-diska": "185 мм",
        "posadochnyj-diametr": "20 мм",
        model: "HСS51185",
        naznachenie: "Продольная и поперечная резка"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Hanskonner"
        },
        {
          label: "Максимальный размер скидки",
          value: "10"
        },
        {
          label: "Тип",
          value: "Дисковая пила"
        },
        {
          label: "Мощность",
          value: "1800 Вт"
        },
        {
          label: "Диаметр диска",
          value: "185 мм"
        },
        {
          label: "Посадочный диаметр",
          value: "20 мм"
        },
        {
          label: "Модель",
          value: "HСS51185"
        },
        {
          label: "Назначение",
          value: "Продольная и поперечная резка"
        }
      ]
    },
    {
      id: "pila-diskovaya-p-i-t-pks-200-s-2000-vt-200mm",
      articul: "053278",
      title: "Пила дисковая P.I.T. PKS 200-С 2000 Вт 200мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/3ff61eea-178d-11e7-969b-c8600046bc56_7c643f56-b5e4-11ea-9384-002590ba8283-303x303.jpeg",
      price: 5400,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "P.I.T.",
        tip: "Дисковая пила",
        moshhnost: "2000 Вт",
        "diametr-diska": "200 мм",
        model: "PKS 200-С",
        naznachenie: "Продольная и поперечная резка",
        "posadochnyj-diametr": "30 мм"
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
          value: "Дисковая пила"
        },
        {
          label: "Мощность",
          value: "2000 Вт"
        },
        {
          label: "Диаметр диска",
          value: "200 мм"
        },
        {
          label: "Модель",
          value: "PKS 200-С"
        },
        {
          label: "Назначение",
          value: "Продольная и поперечная резка"
        },
        {
          label: "Посадочный диаметр",
          value: "30 мм"
        }
      ]
    }
  ]
};
