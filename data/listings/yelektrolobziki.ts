import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/instrument/yelektroinstrument/yelektrolobziki-i-rubanki/yelektrolobziki/ */
export const yelektrolobzikiListing: CatalogListingData = {
  path: "instrument/yelektroinstrument/yelektrolobziki-i-rubanki/yelektrolobziki",
  title: "Электролобзики",
  totalCountLabel: "27 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Вихрь",
        "DERZHI",
        "Hanskonner",
        "P.I.T.",
        "Sturm"
      ],
      truncate: false
    },
    {
      id: "glubina-propila",
      title: "Глубина пропила",
      options: [
        "70 мм (дерево)",
        "72 мм (дерево)",
        "100 мм (дерево)",
        "120 мм (дерево)"
      ],
      truncate: false
    },
    {
      id: "moshhnost",
      title: "Мощность",
      options: [
        "600 Вт",
        "700 Вт",
        "710 Вт",
        "850 Вт",
        "860 Вт"
      ],
      truncate: false
    },
    {
      id: "osobennosti",
      title: "Особенности",
      options: [
        "Бесключевая замена пилок, лазер",
        "Бесключевая замена пилок, металлический корпус",
        "Беспроводное использование, маятниковый ход",
        "Компактный дизайн, быстрая замена пилок",
        "Лазерный указатель, подсветка",
        "Маятниковый механизм, регулировка скорости",
        "Маятниковый ход, пылесборник",
        "Регулировка наклона подошвы",
        "Регулировка скорости, наклон башмака"
      ],
      truncate: true
    },
    {
      id: "pitanie",
      title: "Питание",
      options: [
        "Аккумулятор",
        "Сеть 220В"
      ],
      truncate: false
    },
    {
      id: "tip",
      title: "Тип",
      options: [
        "Аккумуляторный лобзик",
        "Электролобзик"
      ],
      truncate: false
    },
    {
      id: "hod-pilki",
      title: "Ход пилки",
      options: [
        "20 мм",
        "26 мм"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "lobzik-derzhi-lb-600d-600-vt",
      articul: "414302",
      title: "Лобзик DERZHI ЛБ-600Д 600 Вт",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/414302-303x303.png",
      price: 2850,
      inStock: false,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "DERZHI",
        tip: "Электролобзик",
        moshhnost: "600 Вт",
        pitanie: "Сеть 220В",
        "hod-pilki": "20 мм",
        osobennosti: "Регулировка скорости, наклон башмака"
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
          value: "Электролобзик"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "600 Вт"
        },
        {
          label: "Питание",
          value: "Сеть 220В"
        },
        {
          label: "Ход пилки",
          value: "20 мм"
        },
        {
          label: "Особенности",
          value: "Регулировка скорости, наклон башмака"
        }
      ]
    },
    {
      id: "lobzik-derzhi-lb-710d-710-vt",
      articul: "421849",
      title: "Лобзик DERZHI ЛБ-710Д 710 Вт",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/421849-301x303.jpeg",
      price: 4050,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "DERZHI",
        tip: "Электролобзик",
        moshhnost: "710 Вт",
        pitanie: "Сеть 220В",
        "hod-pilki": "26 мм",
        osobennosti: "Маятниковый ход, пылесборник"
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
          value: "Электролобзик"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "710 Вт"
        },
        {
          label: "Питание",
          value: "Сеть 220В"
        },
        {
          label: "Ход пилки",
          value: "26 мм"
        },
        {
          label: "Особенности",
          value: "Маятниковый ход, пылесборник"
        }
      ]
    },
    {
      id: "lobzik-derzhi-lb-850ld-850-vt",
      articul: "421850",
      title: "Лобзик DERZHI ЛБ-850ЛД 850 Вт",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/421850-305x303.jpeg",
      price: 4900,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "DERZHI",
        tip: "Электролобзик",
        moshhnost: "850 Вт",
        pitanie: "Сеть 220В",
        "hod-pilki": "26 мм",
        osobennosti: "Лазерный указатель, подсветка"
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
          value: "Электролобзик"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "850 Вт"
        },
        {
          label: "Питание",
          value: "Сеть 220В"
        },
        {
          label: "Ход пилки",
          value: "26 мм"
        },
        {
          label: "Особенности",
          value: "Лазерный указатель, подсветка"
        }
      ]
    },
    {
      id: "lobzik-hanskonner-hjs0810mql-850vt-100-8mm",
      articul: "624",
      title: "Лобзик Hanskonner HJS0810MQL 850Вт 100/8мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 9200,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "Hanskonner",
        tip: "Электролобзик",
        moshhnost: "850 Вт",
        pitanie: "Сеть 220В",
        "glubina-propila": "100 мм (дерево)",
        osobennosti: "Бесключевая замена пилок, металлический корпус"
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
          value: "Электролобзик"
        },
        {
          label: "Мощность",
          value: "850 Вт"
        },
        {
          label: "Питание",
          value: "Сеть 220В"
        },
        {
          label: "Глубина пропила",
          value: "100 мм (дерево)"
        },
        {
          label: "Особенности",
          value: "Бесключевая замена пилок, металлический корпус"
        }
      ]
    },
    {
      id: "lobzik-hanskonner-hjs0811lpe-860vt-120-12mm",
      articul: "408921",
      title: "Лобзик Hanskonner HJS0811LPE 860Вт 120/12мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/b6a33739-c799-11ec-93cd-002590ba8282_dd861b70-cea4-11ec-93ce-002590ba8282-372x248.jpeg",
      price: 9350,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "Hanskonner",
        tip: "Электролобзик",
        moshhnost: "860 Вт",
        pitanie: "Сеть 220В",
        "glubina-propila": "120 мм (дерево)",
        osobennosti: "Бесключевая замена пилок, лазер"
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
          label: "Тип",
          value: "Электролобзик"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "860 Вт"
        },
        {
          label: "Питание",
          value: "Сеть 220В"
        },
        {
          label: "Глубина пропила",
          value: "120 мм (дерево)"
        },
        {
          label: "Особенности",
          value: "Бесключевая замена пилок, лазер"
        }
      ]
    },
    {
      id: "lobzik-js600-55-pro-600vt-reg-oborot-55mm-1",
      articul: "9131",
      title: "Лобзик JS600/55-PRO (600Вт,рег.оборот. 55мм) №1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 3300,
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
      id: "lobzik-js700-65-pro-700vt-reg-oborot-65mm-1",
      articul: "9132",
      title: "Лобзик JS700/65-1 PRO (700Вт,рег.оборот. 65мм) №1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 4150,
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
      id: "lobzik-p-i-t-pst-70-c1-700-vt-70mm",
      articul: "039567",
      title: "Лобзик P.I.T. PST 70-C2 700 Вт 70мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/0de69c20-cd05-11e7-8c8e-c8600046bc56_0659f044-9fec-11ea-937f-002590ba8283-372x260.jpeg",
      price: 4400,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "P.I.T.",
        tip: "Электролобзик",
        moshhnost: "700 Вт",
        pitanie: "Сеть 220В",
        "glubina-propila": "70 мм (дерево)",
        osobennosti: "Компактный дизайн, быстрая замена пилок"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "P.I.T."
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип",
          value: "Электролобзик"
        },
        {
          label: "Мощность",
          value: "700 Вт"
        },
        {
          label: "Питание",
          value: "Сеть 220В"
        },
        {
          label: "Глубина пропила",
          value: "70 мм (дерево)"
        },
        {
          label: "Особенности",
          value: "Компактный дизайн, быстрая замена пилок"
        }
      ]
    },
    {
      id: "lobzik-p-i-t-pst-90-c1-850-vt-100mm",
      articul: "039568",
      title: "Лобзик P.I.T. PST 90-C2 900 Вт 100мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/e1a08fca-1781-11e7-969b-c8600046bc56_0659f045-9fec-11ea-937f-002590ba8283-303x303.jpeg",
      price: 5770,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "P.I.T.",
        tip: "Электролобзик",
        moshhnost: "850 Вт",
        pitanie: "Сеть 220В",
        "glubina-propila": "100 мм (дерево)",
        osobennosti: "Маятниковый механизм, регулировка скорости"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "P.I.T."
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип",
          value: "Электролобзик"
        },
        {
          label: "Мощность",
          value: "850 Вт"
        },
        {
          label: "Питание",
          value: "Сеть 220В"
        },
        {
          label: "Глубина пропила",
          value: "100 мм (дерево)"
        },
        {
          label: "Особенности",
          value: "Маятниковый механизм, регулировка скорости"
        }
      ]
    },
    {
      id: "lobzik-akkum-sturm-cjs1870-bez-zu-i-akb",
      articul: "408911",
      title: "Лобзик аккум Sturm CJS1870 без ЗУ и АКБ",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/aaa1dd2a-c797-11ec-93cd-002590ba8282_7e87f61a-ce9b-11ec-93ce-002590ba8282-303x303.jpeg",
      price: 7200,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "Sturm",
        tip: "Аккумуляторный лобзик",
        pitanie: "Аккумулятор",
        napryazhenie: "18 В",
        komplektaciya: "Без ЗУ и АКБ",
        osobennosti: "Беспроводное использование, маятниковый ход"
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
          value: "Аккумуляторный лобзик"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Питание",
          value: "Аккумулятор"
        },
        {
          label: "Напряжение",
          value: "18 В"
        },
        {
          label: "Комплектация",
          value: "Без ЗУ и АКБ"
        },
        {
          label: "Особенности",
          value: "Беспроводное использование, маятниковый ход"
        }
      ]
    },
    {
      id: "lobzik-akkum-resanta-al-20li-2k-zu-kejs-75-9-14",
      articul: "7131",
      title: "Лобзик аккум Ресанта АЛ-20Li/2K ЗУ кейс 75/9/14",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 10050,
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
      id: "lobzik-vikhr-yel-lye-100-72-9-2",
      articul: "039571",
      title: "Лобзик Вихрь эл ЛЭ-100 72/9/2",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/a33851b3-c09e-11e3-b322-c8600046bc56_0659f048-9fec-11ea-937f-002590ba8283-372x279.jpeg",
      price: 4300,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "Вихрь",
        tip: "Электролобзик",
        moshhnost: "600 Вт",
        pitanie: "Сеть 220В",
        "glubina-propila": "72 мм (дерево)",
        osobennosti: "Регулировка наклона подошвы"
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
          value: "Вихрь"
        },
        {
          label: "Тип",
          value: "Электролобзик"
        },
        {
          label: "Мощность",
          value: "600 Вт"
        },
        {
          label: "Питание",
          value: "Сеть 220В"
        },
        {
          label: "Глубина пропила",
          value: "72 мм (дерево)"
        },
        {
          label: "Особенности",
          value: "Регулировка наклона подошвы"
        }
      ]
    }
  ]
};
