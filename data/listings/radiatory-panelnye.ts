import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/otoplenie/radiatory/radiatory-panelnye/ */
export const radiatoryPanelnyeListing: CatalogListingData = {
  path: "otoplenie/radiatory/radiatory-panelnye",
  title: "Радиаторы панельные",
  totalCountLabel: "45 товаров",
  filterFields: [
    {
      id: "1",
      title: "1",
      options: [
        "Стальной панельный радиатор LEMAX 22-300-900, теплоотдача 1311 Вт. Товар с пометкой уценка (возможны незначительные внешние дефекты, не влияющие на работоспособность). Тип 22, высота 300 мм, длина 900 мм. Боковое подключение.",
        "Стальной панельный радиатор LEMAX 22-500-700, теплоотдача 1510 Вт. Товар с пометкой уценка (возможны незначительные внешние дефекты, не влияющие на работоспособность). Высота 500 мм, длина 700 мм. Боковое подключение.",
        "Стальной панельный радиатор Royal Thermo COMPACT C22-200-1200, цвет белый RAL 9016. Товар с пометкой уценка (возможны незначительные внешние дефекты, не влияющие на работоспособность). Высота 200 мм, длина 1200 мм. Боковое подключение."
      ],
      truncate: false
    },
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Оазис",
        "LEMAX",
        "Royal Thermo",
        "Stavrus",
        "VALFEX"
      ],
      truncate: false
    },
    {
      id: "vysota",
      title: "Высота",
      options: [
        "200 мм",
        "300 мм",
        "500 мм"
      ],
      truncate: false
    },
    {
      id: "dlina",
      title: "Длина",
      options: [
        "400 мм",
        "700 мм",
        "1000 мм",
        "1300 мм",
        "1400 мм",
        "1700 мм",
        "1800 мм",
        "2000 мм"
      ],
      truncate: true
    },
    {
      id: "seriya",
      title: "Серия",
      options: [
        "COMPACT C22",
        "STEEL C",
        "Valve Compact"
      ],
      truncate: false
    },
    {
      id: "strana-proizvoditel",
      title: "Страна производитель",
      options: [
        "Россия",
        "Турция"
      ],
      truncate: false
    },
    {
      id: "teplootdacha",
      title: "Теплоотдача",
      options: [
        "~1000 Вт",
        "891 Вт",
        "1050 Вт",
        "2446 Вт",
        "2590 Вт",
        "2944 Вт"
      ],
      truncate: false
    },
    {
      id: "tip-radiatora",
      title: "Тип радиатора",
      options: [
        "22",
        "22 (C)"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "radiator-lemax-22-300-1700-2446vt",
      articul: "060948",
      title: "Радиатор LEMAX 22-300-1700 (2446Вт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/204869c3-ad2a-11e9-a99e-c8600046bc56_250b66aa-9e58-11ea-937e-002590ba8283-360x303.jpeg",
      price: 10760,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "LEMAX",
        "strana-proizvoditel": "Россия",
        tip: "Стальной панельный",
        seriya: "Valve Compact",
        "tip-radiatora": "22",
        vysota: "300 мм",
        dlina: "1700 мм",
        teplootdacha: "2446 Вт"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Бренд",
          value: "LEMAX"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Стальной панельный"
        },
        {
          label: "Серия",
          value: "Valve Compact"
        },
        {
          label: "Тип радиатора",
          value: "22"
        },
        {
          label: "Высота",
          value: "300 мм"
        },
        {
          label: "Длина",
          value: "1700 мм"
        },
        {
          label: "Теплоотдача",
          value: "2446 Вт"
        }
      ]
    },
    {
      id: "radiator-lemax-22-300-700-1050vt",
      articul: "060953",
      title: "Радиатор LEMAX 22-300-700 (1050Вт) УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/217230e0-05c4-11e9-ad07-c8600046bc56_250b66af-9e58-11ea-937e-002590ba8283-360x303.jpeg",
      price: 426360,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "LEMAX",
        "strana-proizvoditel": "Россия",
        tip: "Стальной панельный",
        seriya: "Valve Compact",
        "tip-radiatora": "22",
        vysota: "300 мм",
        dlina: "700 мм",
        teplootdacha: "1050 Вт"
      },
      specs: [
        {
          label: "Бренд",
          value: "LEMAX"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Стальной панельный"
        },
        {
          label: "Серия",
          value: "Valve Compact"
        },
        {
          label: "Тип радиатора",
          value: "22"
        },
        {
          label: "Высота",
          value: "300 мм"
        },
        {
          label: "Длина",
          value: "700 мм"
        },
        {
          label: "Теплоотдача",
          value: "1050 Вт"
        }
      ]
    },
    {
      id: "radiator-lemax-22-300-900-1311vt",
      articul: "406795",
      title: "Радиатор LEMAX 22-300-900 (1311Вт) УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/10/406795-372x252.jpeg",
      price: 521909,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "1": "Стальной панельный радиатор LEMAX 22-300-900, теплоотдача 1311 Вт. Товар с пометкой уценка (возможны незначительные внешние дефекты, не влияющие на работоспособность). Тип 22, высота 300 мм, длина 900 мм. Боковое подключение."
      },
      specs: [
        {
          label: "1",
          value: "Стальной панельный радиатор LEMAX 22-300-900, теплоотдача 1311 Вт. Товар с пометкой уценка (возможны незначительные внешние дефекты, не влияющие на работоспособность). Тип 22, высота 300 мм, длина 900 мм. Боковое подключение."
        }
      ]
    },
    {
      id: "radiator-lemax-22-500-1300-2944vt",
      articul: "060958",
      title: "Радиатор LEMAX 22-500-1300 (2944Вт) УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/df931ee1-e982-11e8-8d03-c8600046bc56_250b66b4-9e58-11ea-937e-002590ba8283-360x303.jpeg",
      price: 750240,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "LEMAX",
        "strana-proizvoditel": "Россия",
        tip: "Стальной панельный",
        seriya: "Valve Compact",
        "tip-radiatora": "22",
        vysota: "500 мм",
        dlina: "1300 мм",
        teplootdacha: "2944 Вт"
      },
      specs: [
        {
          label: "Бренд",
          value: "LEMAX"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Стальной панельный"
        },
        {
          label: "Серия",
          value: "Valve Compact"
        },
        {
          label: "Тип радиатора",
          value: "22"
        },
        {
          label: "Высота",
          value: "500 мм"
        },
        {
          label: "Длина",
          value: "1300 мм"
        },
        {
          label: "Теплоотдача",
          value: "2944 Вт"
        }
      ]
    },
    {
      id: "radiator-lemax-22-500-400-891vt",
      articul: "060966",
      title: "Радиатор LEMAX 22-500-400 (891Вт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/8ccd051c-e982-11e8-8d03-c8600046bc56_250b66bc-9e58-11ea-937e-002590ba8283-360x303.jpeg",
      price: 4435,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "LEMAX",
        "strana-proizvoditel": "Россия",
        tip: "Стальной панельный",
        seriya: "Valve Compact",
        "tip-radiatora": "22",
        vysota: "500 мм",
        dlina: "400 мм",
        teplootdacha: "891 Вт"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Бренд",
          value: "LEMAX"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Стальной панельный"
        },
        {
          label: "Серия",
          value: "Valve Compact"
        },
        {
          label: "Тип радиатора",
          value: "22"
        },
        {
          label: "Высота",
          value: "500 мм"
        },
        {
          label: "Длина",
          value: "400 мм"
        },
        {
          label: "Теплоотдача",
          value: "891 Вт"
        }
      ]
    },
    {
      id: "radiator-lemax-22-500-700-1510vt",
      articul: "060969",
      title: "Радиатор LEMAX 22-500-700 (1510Вт) УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/5a9d2f7c-d901-11e8-ba62-c8600046bc56_250b66bf-9e58-11ea-937e-002590ba8283-360x303.jpeg",
      price: 486720,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "1": "Стальной панельный радиатор LEMAX 22-500-700, теплоотдача 1510 Вт. Товар с пометкой уценка (возможны незначительные внешние дефекты, не влияющие на работоспособность). Высота 500 мм, длина 700 мм. Боковое подключение."
      },
      specs: [
        {
          label: "1",
          value: "Стальной панельный радиатор LEMAX 22-500-700, теплоотдача 1510 Вт. Товар с пометкой уценка (возможны незначительные внешние дефекты, не влияющие на работоспособность). Высота 500 мм, длина 700 мм. Боковое подключение."
        }
      ]
    },
    {
      id: "radiator-lemax-22-300-1800-2590vt",
      articul: "004920",
      title: "Радиатор LEMAX тип 22, 300×1800 мм (2590Вт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/004920-324x303.jpeg",
      price: 10710,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "LEMAX",
        "strana-proizvoditel": "Россия",
        tip: "Стальной панельный",
        seriya: "Valve Compact",
        "tip-radiatora": "22",
        vysota: "300 мм",
        dlina: "1800 мм",
        teplootdacha: "2590 Вт"
      },
      specs: [
        {
          label: "Бренд",
          value: "LEMAX"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Стальной панельный"
        },
        {
          label: "Серия",
          value: "Valve Compact"
        },
        {
          label: "Тип радиатора",
          value: "22"
        },
        {
          label: "Высота",
          value: "300 мм"
        },
        {
          label: "Длина",
          value: "1800 мм"
        },
        {
          label: "Теплоотдача",
          value: "2590 Вт"
        }
      ]
    },
    {
      id: "radiator-stavrus-22-300-2000",
      articul: "415619",
      title: "Радиатор Stavrus 22-300-2000 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/10/415619-367x303.jpeg",
      price: 801840,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Stavrus",
        "strana-proizvoditel": "Россия",
        tip: "Стальной панельный",
        "tip-radiatora": "22",
        vysota: "300 мм",
        dlina: "2000 мм",
        podklyuchenie: "Боковое"
      },
      specs: [
        {
          label: "Бренд",
          value: "Stavrus"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Стальной панельный"
        },
        {
          label: "Тип радиатора",
          value: "22"
        },
        {
          label: "Высота",
          value: "300 мм"
        },
        {
          label: "Длина",
          value: "2000 мм"
        },
        {
          label: "Подключение",
          value: "Боковое"
        }
      ]
    },
    {
      id: "radiator-valfex-steel-c-22-300h1400",
      articul: "427244",
      title: "Радиатор VALFEX STEEL C 22 300х1400",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/10/427244-372x185.jpeg",
      price: 8800,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "VALFEX",
        "strana-proizvoditel": "Россия",
        tip: "Стальной панельный",
        seriya: "STEEL C",
        "tip-radiatora": "22 (C)",
        vysota: "300 мм",
        dlina: "1400 мм",
        podklyuchenie: "Боковое"
      },
      specs: [
        {
          label: "Бренд",
          value: "VALFEX"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Стальной панельный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Серия",
          value: "STEEL C"
        },
        {
          label: "Тип радиатора",
          value: "22 (C)"
        },
        {
          label: "Высота",
          value: "300 мм"
        },
        {
          label: "Длина",
          value: "1400 мм"
        },
        {
          label: "Подключение",
          value: "Боковое"
        }
      ]
    },
    {
      id: "radiator-oazis-22-500-400-turciya",
      articul: "061047",
      title: "Радиатор Оазис 22-500-400 (Турция)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/4536ed0f-9e5f-11ea-937e-002590ba8283_a106a489-b62b-11ea-9384-002590ba8283-227x303.jpeg",
      price: 3582,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "Оазис",
        "strana-proizvoditel": "Турция",
        tip: "Стальной панельный",
        "tip-radiatora": "22",
        vysota: "500 мм",
        dlina: "400 мм",
        podklyuchenie: "Боковое"
      },
      specs: [
        {
          label: "Бренд",
          value: "Оазис"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Турция"
        },
        {
          label: "Тип",
          value: "Стальной панельный"
        },
        {
          label: "Тип радиатора",
          value: "22"
        },
        {
          label: "Высота",
          value: "500 мм"
        },
        {
          label: "Длина",
          value: "400 мм"
        },
        {
          label: "Подключение",
          value: "Боковое"
        }
      ]
    },
    {
      id: "radiator-panelnyy-royal-thermo-compact-c22-200-1000-ral9016",
      articul: "405076",
      title: "Радиатор панельный Royal Thermo COMPACT C22-200-1000 RAL9016",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/10/405076-282x303.png",
      price: 8500,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Royal Thermo",
        "strana-proizvoditel": "Россия",
        tip: "Стальной панельный",
        seriya: "COMPACT C22",
        vysota: "200 мм",
        dlina: "1000 мм",
        cvet: "RAL 9016 (белый)",
        teplootdacha: "~1000 Вт"
      },
      specs: [
        {
          label: "Бренд",
          value: "Royal Thermo"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Стальной панельный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Серия",
          value: "COMPACT C22"
        },
        {
          label: "Высота",
          value: "200 мм"
        },
        {
          label: "Длина",
          value: "1000 мм"
        },
        {
          label: "Цвет",
          value: "RAL 9016 (белый)"
        },
        {
          label: "Теплоотдача",
          value: "~1000 Вт"
        }
      ]
    },
    {
      id: "radiator-panelnyy-royal-thermo-compact-c22-200-1200-ral9016",
      articul: "421830",
      title: "Радиатор панельный Royal Thermo COMPACT C22-200-1200 RAL9016",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/10/421830-289x303.jpeg",
      price: 9200,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "1": "Стальной панельный радиатор Royal Thermo COMPACT C22-200-1200, цвет белый RAL 9016. Товар с пометкой уценка (возможны незначительные внешние дефекты, не влияющие на работоспособность). Высота 200 мм, длина 1200 мм. Боковое подключение."
      },
      specs: [
        {
          label: "1",
          value: "Стальной панельный радиатор Royal Thermo COMPACT C22-200-1200, цвет белый RAL 9016. Товар с пометкой уценка (возможны незначительные внешние дефекты, не влияющие на работоспособность). Высота 200 мм, длина 1200 мм. Боковое подключение."
        }
      ]
    }
  ]
};
