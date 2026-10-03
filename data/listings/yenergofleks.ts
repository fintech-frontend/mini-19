import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/vodo-gazosnabzhenie/zapornaya-armatura-i-dobornye-yelement/yenergofleks/ */
export const yenergofleksListing: CatalogListingData = {
  path: "vodo-gazosnabzhenie/zapornaya-armatura-i-dobornye-yelement/yenergofleks",
  title: "Энергофлекс",
  totalCountLabel: "45 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "–",
        "Энергофлекс"
      ],
      truncate: false
    },
    {
      id: "diametr",
      title: "Диаметр",
      options: [
        "18 мм",
        "50 мм",
        "110 мм",
        "114 мм",
        "120 мм",
        "133 мм",
        "140 мм"
      ],
      truncate: true
    },
    {
      id: "tip",
      title: "Тип",
      options: [
        "Жгут изоляционный",
        "Теплоизоляция"
      ],
      truncate: false
    },
    {
      id: "tolshhina",
      title: "Толщина",
      options: [
        "4 мм",
        "6 мм",
        "9 мм",
        "10 мм",
        "13 мм"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "zhgut-izolyacionnyy-50-mm-3m",
      articul: "420895",
      title: "Жгут изоляционный 50 мм (3м)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/420895-303x303.jpeg",
      price: 200,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "–",
        "strana-proizvoditel": "Россия",
        tip: "Жгут изоляционный",
        diametr: "50 мм",
        dlina: "3 м"
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
          value: "Жгут изоляционный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Диаметр",
          value: "50 мм"
        },
        {
          label: "Длина",
          value: "3 м"
        }
      ]
    },
    {
      id: "yenergofleks-110kh13-mm",
      articul: "081072",
      title: "Энергофлекс 110х13 мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/c7b48565-822f-11e2-b094-c8600046bc56_d2531b24-9e52-11ea-937e-002590ba8283-372x248.jpeg",
      price: 227,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Энергофлекс",
        "strana-proizvoditel": "Россия",
        tip: "Теплоизоляция",
        diametr: "110 мм",
        tolshhina: "13 мм"
      },
      specs: [
        {
          label: "Бренд",
          value: "Энергофлекс"
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
          value: "Теплоизоляция"
        },
        {
          label: "Диаметр",
          value: "110 мм"
        },
        {
          label: "Толщина",
          value: "13 мм"
        }
      ]
    },
    {
      id: "yenergofleks-110kh9-mm",
      articul: "081073",
      title: "Энергофлекс 110х9 мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/997ae5aa-30cd-11e2-a1f1-c8600046bc56_d2531b25-9e52-11ea-937e-002590ba8283-372x248.jpeg",
      price: 190,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Энергофлекс",
        "strana-proizvoditel": "Россия",
        tip: "Теплоизоляция",
        diametr: "110 мм",
        tolshhina: "9 мм"
      },
      specs: [
        {
          label: "Бренд",
          value: "Энергофлекс"
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
          value: "Теплоизоляция"
        },
        {
          label: "Диаметр",
          value: "110 мм"
        },
        {
          label: "Толщина",
          value: "9 мм"
        }
      ]
    },
    {
      id: "yenergofleks-114kh13-mm",
      articul: "081074",
      title: "Энергофлекс 114х13 мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/b3cf957d-6bcb-11e8-a9cc-c8600046bc56_d2531b26-9e52-11ea-937e-002590ba8283-372x248.jpeg",
      price: 340,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "Энергофлекс",
        "strana-proizvoditel": "Россия",
        tip: "Теплоизоляция",
        diametr: "114 мм",
        tolshhina: "13 мм"
      },
      specs: [
        {
          label: "Бренд",
          value: "Энергофлекс"
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
          value: "Теплоизоляция"
        },
        {
          label: "Диаметр",
          value: "114 мм"
        },
        {
          label: "Толщина",
          value: "13 мм"
        }
      ]
    },
    {
      id: "yenergofleks-114kh9-mm",
      articul: "081075",
      title: "Энергофлекс 114х9 мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/19bde9a4-30c9-11e3-82e0-c8600046bc56_d2531b27-9e52-11ea-937e-002590ba8283-372x248.jpeg",
      price: 160,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "Энергофлекс",
        "strana-proizvoditel": "Россия",
        tip: "Теплоизоляция",
        diametr: "114 мм",
        tolshhina: "9 мм"
      },
      specs: [
        {
          label: "Бренд",
          value: "Энергофлекс"
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
          value: "Теплоизоляция"
        },
        {
          label: "Диаметр",
          value: "114 мм"
        },
        {
          label: "Толщина",
          value: "9 мм"
        }
      ]
    },
    {
      id: "yenergofleks-120kh13-mm",
      articul: "081076",
      title: "Энергофлекс 120х13 мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/caab8d15-debd-11e9-a9b8-c8600046bc56_d2531b28-9e52-11ea-937e-002590ba8283-372x248.jpeg",
      price: 253,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "Энергофлекс",
        "strana-proizvoditel": "Россия",
        tip: "Теплоизоляция",
        diametr: "120 мм",
        tolshhina: "13 мм"
      },
      specs: [
        {
          label: "Бренд",
          value: "Энергофлекс"
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
          value: "Теплоизоляция"
        },
        {
          label: "Диаметр",
          value: "120 мм"
        },
        {
          label: "Толщина",
          value: "13 мм"
        }
      ]
    },
    {
      id: "jenergofleks-133h13-mm",
      articul: "2471",
      title: "Энергофлекс 133х13 мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 500,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Энергофлекс",
        "strana-proizvoditel": "Россия",
        tip: "Теплоизоляция",
        diametr: "133 мм",
        tolshhina: "13 мм"
      },
      specs: [
        {
          label: "Бренд",
          value: "Энергофлекс"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип",
          value: "Теплоизоляция"
        },
        {
          label: "Диаметр",
          value: "133 мм"
        },
        {
          label: "Толщина",
          value: "13 мм"
        }
      ]
    },
    {
      id: "yenergofleks-140kh10-mm",
      articul: "081077",
      title: "Энергофлекс 140х10 мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/a25992cf-f3c1-11e8-925f-c8600046bc56_d2531b29-9e52-11ea-937e-002590ba8283-372x248.jpeg",
      price: 437,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "Энергофлекс",
        "strana-proizvoditel": "Россия",
        tip: "Теплоизоляция",
        diametr: "140 мм",
        tolshhina: "10 мм"
      },
      specs: [
        {
          label: "Бренд",
          value: "Энергофлекс"
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
          value: "Теплоизоляция"
        },
        {
          label: "Диаметр",
          value: "140 мм"
        },
        {
          label: "Толщина",
          value: "10 мм"
        }
      ]
    },
    {
      id: "yenergofleks-18kh4-mm-krasnyy",
      articul: "081079",
      title: "Энергофлекс 18х4 мм красный",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/997ae5ae-30cd-11e2-a1f1-c8600046bc56_d2531b2a-9e52-11ea-937e-002590ba8283-303x303.jpeg",
      price: 320,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Энергофлекс",
        "strana-proizvoditel": "Россия",
        tip: "Теплоизоляция",
        diametr: "18 мм",
        tolshhina: "4 мм"
      },
      specs: [
        {
          label: "Бренд",
          value: "Энергофлекс"
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
          value: "Теплоизоляция"
        },
        {
          label: "Диаметр",
          value: "18 мм"
        },
        {
          label: "Толщина",
          value: "4 мм"
        }
      ]
    },
    {
      id: "yenergofleks-18kh4-mm-siniy",
      articul: "081080",
      title: "Энергофлекс 18х4 мм синий",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/a142be59-0b4a-11e5-a43a-c8600046bc56_d2531b2b-9e52-11ea-937e-002590ba8283-303x303.jpeg",
      price: 320,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Энергофлекс",
        "strana-proizvoditel": "Россия",
        tip: "Теплоизоляция",
        diametr: "18 мм",
        tolshhina: "4 мм"
      },
      specs: [
        {
          label: "Бренд",
          value: "Энергофлекс"
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
          value: "Теплоизоляция"
        },
        {
          label: "Диаметр",
          value: "18 мм"
        },
        {
          label: "Толщина",
          value: "4 мм"
        }
      ]
    },
    {
      id: "yenergofleks-18kh6-mm",
      articul: "081081",
      title: "Энергофлекс 18х6 мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/997ae5b0-30cd-11e2-a1f1-c8600046bc56_d2531b2c-9e52-11ea-937e-002590ba8283-372x248.jpeg",
      price: 28,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Энергофлекс",
        "strana-proizvoditel": "Россия",
        tip: "Теплоизоляция",
        diametr: "18 мм",
        tolshhina: "6 мм"
      },
      specs: [
        {
          label: "Бренд",
          value: "Энергофлекс"
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
          value: "Теплоизоляция"
        },
        {
          label: "Диаметр",
          value: "18 мм"
        },
        {
          label: "Толщина",
          value: "6 мм"
        }
      ]
    },
    {
      id: "yenergofleks-18kh9-mm",
      articul: "201354",
      title: "Энергофлекс 18х9 мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/997ae5b4-30cd-11e2-a1f1-c8600046bc56_d881b5bd-9e52-11ea-937e-002590ba8283-372x248.jpeg",
      price: 32,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Энергофлекс",
        "strana-proizvoditel": "Россия",
        tip: "Теплоизоляция",
        diametr: "18 мм",
        tolshhina: "9 мм"
      },
      specs: [
        {
          label: "Бренд",
          value: "Энергофлекс"
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
          value: "Теплоизоляция"
        },
        {
          label: "Диаметр",
          value: "18 мм"
        },
        {
          label: "Толщина",
          value: "9 мм"
        }
      ]
    }
  ]
};
