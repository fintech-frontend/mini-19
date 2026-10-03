import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/otoplenie/metalloplastikovye-truby-i-fitingi-v/ugolki-2/ */
export const ugolki2Listing: CatalogListingData = {
  path: "otoplenie/metalloplastikovye-truby-i-fitingi-v/ugolki-2",
  title: "Уголки м/п",
  totalCountLabel: "32 товара",
  filterFields: [
    {
      id: "1",
      title: "1",
      options: [
        "Никелированный латунный переходной комбинированный уголок STI 20х15 мм с резьбой внутренняя-наружная. Товар с пометкой уценка (возможны незначительные внешние дефекты, не влияющие на работоспособность).",
        "Никелированный латунный уголок STI с наружной резьбой 25 мм с обеих сторон. Товар с пометкой уценка (возможны незначительные внешние дефекты, не влияющие на работоспособность)."
      ],
      truncate: false
    },
    {
      id: "brend",
      title: "Бренд",
      options: [
        "STI",
        "VALTEC"
      ],
      truncate: false
    },
    {
      id: "diametr",
      title: "Диаметр",
      options: [
        "15 мм",
        "16 мм х 1/2\"",
        "20 мм",
        "20 х 15 мм",
        "25 мм"
      ],
      truncate: false
    },
    {
      id: "material",
      title: "Материал",
      options: [
        "Латунь",
        "Латунь никелированная"
      ],
      truncate: false
    },
    {
      id: "strana-proizvoditel",
      title: "Страна производитель",
      options: [
        "Италия",
        "Россия"
      ],
      truncate: false
    },
    {
      id: "tip",
      title: "Тип",
      options: [
        "Уголок",
        "Уголок комбинированный",
        "Уголок переходной",
        "Уголок установочный"
      ],
      truncate: false
    },
    {
      id: "tip-rezby",
      title: "Тип резьбы",
      options: [
        "Внутренняя",
        "Внутренняя-внутренняя (ВВ)",
        "Внутренняя-наружная (ВН)",
        "Наружная-наружная (НН)"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "ugol-ustanovochnyj-16h1-2-vn-r-vtm-254n-001604",
      articul: "102649",
      title: "Угол установочный 16х1/2 вн.р. VTm. 254N. 001604",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/09/102649-372x288.jpeg",
      price: 415,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "VALTEC",
        "strana-proizvoditel": "Италия",
        tip: "Уголок установочный",
        material: "Латунь",
        diametr: "16 мм х 1/2\"",
        "tip-rezby": "Внутренняя",
        model: "VTm.254N.001604"
      },
      specs: [
        {
          label: "Бренд",
          value: "VALTEC"
        },
        {
          label: "Страна производитель",
          value: "Италия"
        },
        {
          label: "Тип",
          value: "Уголок установочный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Материал",
          value: "Латунь"
        },
        {
          label: "Диаметр",
          value: "16 мм х 1/2\""
        },
        {
          label: "Тип резьбы",
          value: "Внутренняя"
        },
        {
          label: "Модель",
          value: "VTm.254N.001604"
        }
      ]
    },
    {
      id: "ugolok-sti-nik-lat-d15-vv",
      articul: "074985",
      title: "Уголок (STI) ник лат d15 ВВ",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/20b4c7b6-f177-11e8-a2be-c8600046bc56_cba6f370-9e55-11ea-937e-002590ba8283-303x303.jpeg",
      price: 150,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "STI",
        "strana-proizvoditel": "Россия",
        tip: "Уголок",
        material: "Латунь никелированная",
        diametr: "15 мм",
        "tip-rezby": "Внутренняя-внутренняя (ВВ)",
        ugol: "90°"
      },
      specs: [
        {
          label: "Бренд",
          value: "STI"
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
          value: "Уголок"
        },
        {
          label: "Материал",
          value: "Латунь никелированная"
        },
        {
          label: "Диаметр",
          value: "15 мм"
        },
        {
          label: "Тип резьбы",
          value: "Внутренняя-внутренняя (ВВ)"
        },
        {
          label: "Угол",
          value: "90°"
        }
      ]
    },
    {
      id: "ugolok-sti-nik-lat-d15-vn",
      articul: "074986",
      title: "Уголок (STI) ник лат d15 ВН",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/72b7b0a4-f177-11e8-a2be-c8600046bc56_d1a84c03-9e55-11ea-937e-002590ba8283-372x230.jpeg",
      price: 140,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "STI",
        "strana-proizvoditel": "Россия",
        tip: "Уголок комбинированный",
        material: "Латунь никелированная",
        diametr: "15 мм",
        "tip-rezby": "Внутренняя-наружная (ВН)",
        ugol: "90°"
      },
      specs: [
        {
          label: "Бренд",
          value: "STI"
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
          value: "Уголок комбинированный"
        },
        {
          label: "Материал",
          value: "Латунь никелированная"
        },
        {
          label: "Диаметр",
          value: "15 мм"
        },
        {
          label: "Тип резьбы",
          value: "Внутренняя-наружная (ВН)"
        },
        {
          label: "Угол",
          value: "90°"
        }
      ]
    },
    {
      id: "ugolok-sti-nik-lat-d15-nn",
      articul: "074987",
      title: "Уголок (STI) ник. лат.d15 НН",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/53218e22-f177-11e8-a2be-c8600046bc56_d1a84c04-9e55-11ea-937e-002590ba8283-265x303.jpeg",
      price: 130,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "STI",
        "strana-proizvoditel": "Россия",
        tip: "Уголок",
        material: "Латунь никелированная",
        diametr: "15 мм",
        "tip-rezby": "Наружная-наружная (НН)",
        ugol: "90°"
      },
      specs: [
        {
          label: "Бренд",
          value: "STI"
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
          value: "Уголок"
        },
        {
          label: "Материал",
          value: "Латунь никелированная"
        },
        {
          label: "Диаметр",
          value: "15 мм"
        },
        {
          label: "Тип резьбы",
          value: "Наружная-наружная (НН)"
        },
        {
          label: "Угол",
          value: "90°"
        }
      ]
    },
    {
      id: "ugolok-sti-nik-lat-d20-vv",
      articul: "404185",
      title: "Уголок (STI) ник. лат.d20 ВВ",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/2998bdc9-16f1-11ec-93bc-002590ba8282_b16b29a6-d1b3-11ec-93ce-002590ba8282-303x303.jpeg",
      price: 225,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "STI",
        "strana-proizvoditel": "Россия",
        tip: "Уголок",
        material: "Латунь никелированная",
        diametr: "20 мм",
        "tip-rezby": "Внутренняя-внутренняя (ВВ)",
        ugol: "90°"
      },
      specs: [
        {
          label: "Бренд",
          value: "STI"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Уголок"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Материал",
          value: "Латунь никелированная"
        },
        {
          label: "Диаметр",
          value: "20 мм"
        },
        {
          label: "Тип резьбы",
          value: "Внутренняя-внутренняя (ВВ)"
        },
        {
          label: "Угол",
          value: "90°"
        }
      ]
    },
    {
      id: "ugolok-sti-nik-lat-d20-vn",
      articul: "404187",
      title: "Уголок (STI) ник. лат.d20 ВН",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/69902575-16f2-11ec-93bc-002590ba8282_ea6ca3d8-d1b3-11ec-93ce-002590ba8282-303x303.jpeg",
      price: 260,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "STI",
        "strana-proizvoditel": "Россия",
        tip: "Уголок комбинированный",
        material: "Латунь никелированная",
        diametr: "20 мм",
        "tip-rezby": "Внутренняя-наружная (ВН)",
        ugol: "90°"
      },
      specs: [
        {
          label: "Бренд",
          value: "STI"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Уголок комбинированный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Материал",
          value: "Латунь никелированная"
        },
        {
          label: "Диаметр",
          value: "20 мм"
        },
        {
          label: "Тип резьбы",
          value: "Внутренняя-наружная (ВН)"
        },
        {
          label: "Угол",
          value: "90°"
        }
      ]
    },
    {
      id: "ugolok-sti-nik-lat-d20nn",
      articul: "404189",
      title: "Уголок (STI) ник. лат.d20НН УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/d4048504-16f2-11ec-93bc-002590ba8282_19d3c703-d1b4-11ec-93ce-002590ba8282-303x303.jpeg",
      price: 10458,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "STI",
        "strana-proizvoditel": "Россия",
        tip: "Уголок",
        material: "Латунь никелированная",
        diametr: "20 мм",
        "tip-rezby": "Наружная-наружная (НН)",
        ugol: "90°"
      },
      specs: [
        {
          label: "Бренд",
          value: "STI"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Уголок"
        },
        {
          label: "Материал",
          value: "Латунь никелированная"
        },
        {
          label: "Диаметр",
          value: "20 мм"
        },
        {
          label: "Тип резьбы",
          value: "Наружная-наружная (НН)"
        },
        {
          label: "Угол",
          value: "90°"
        }
      ]
    },
    {
      id: "ugolok-sti-nik-lat-d20kh15-vv",
      articul: "404186",
      title: "Уголок (STI) ник. лат.d20х15 ВВ",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/09/404186-330x303.jpeg",
      price: 135,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "STI",
        "strana-proizvoditel": "Россия",
        tip: "Уголок переходной",
        material: "Латунь никелированная",
        diametr: "20 х 15 мм",
        "tip-rezby": "Внутренняя-внутренняя (ВВ)",
        ugol: "90°"
      },
      specs: [
        {
          label: "Бренд",
          value: "STI"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Уголок переходной"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Материал",
          value: "Латунь никелированная"
        },
        {
          label: "Диаметр",
          value: "20 х 15 мм"
        },
        {
          label: "Тип резьбы",
          value: "Внутренняя-внутренняя (ВВ)"
        },
        {
          label: "Угол",
          value: "90°"
        }
      ]
    },
    {
      id: "ugolok-sti-nik-lat-d20kh15-vn",
      articul: "404188",
      title: "Уголок (STI) ник. лат.d20х15 ВН УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/09/404188-372x240.jpeg",
      price: 22411,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "1": "Никелированный латунный переходной комбинированный уголок STI 20х15 мм с резьбой внутренняя-наружная. Товар с пометкой уценка (возможны незначительные внешние дефекты, не влияющие на работоспособность)."
      },
      specs: [
        {
          label: "1",
          value: "Никелированный латунный переходной комбинированный уголок STI 20х15 мм с резьбой внутренняя-наружная. Товар с пометкой уценка (возможны незначительные внешние дефекты, не влияющие на работоспособность)."
        }
      ]
    },
    {
      id: "ugolok-sti-nik-lat-d25-vv",
      articul: "074988",
      title: "Уголок (STI) ник. лат.d25 ВВ",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/36f041e5-f177-11e8-a2be-c8600046bc56_d1a84c05-9e55-11ea-937e-002590ba8283-303x303.jpeg",
      price: 395,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "STI",
        "strana-proizvoditel": "Россия",
        tip: "Уголок",
        material: "Латунь никелированная",
        diametr: "25 мм",
        "tip-rezby": "Внутренняя-внутренняя (ВВ)",
        ugol: "90°"
      },
      specs: [
        {
          label: "Бренд",
          value: "STI"
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
          value: "Уголок"
        },
        {
          label: "Материал",
          value: "Латунь никелированная"
        },
        {
          label: "Диаметр",
          value: "25 мм"
        },
        {
          label: "Тип резьбы",
          value: "Внутренняя-внутренняя (ВВ)"
        },
        {
          label: "Угол",
          value: "90°"
        }
      ]
    },
    {
      id: "ugolok-sti-nik-lat-d25-vn",
      articul: "418268",
      title: "Уголок (STI) ник. лат.d25 ВН",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/09/418268-301x303.jpeg",
      price: 370,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "STI",
        "strana-proizvoditel": "Россия",
        tip: "Уголок комбинированный",
        material: "Латунь никелированная",
        diametr: "25 мм",
        "tip-rezby": "Внутренняя-наружная (ВН)",
        ugol: "90°"
      },
      specs: [
        {
          label: "Бренд",
          value: "STI"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Уголок комбинированный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Материал",
          value: "Латунь никелированная"
        },
        {
          label: "Диаметр",
          value: "25 мм"
        },
        {
          label: "Тип резьбы",
          value: "Внутренняя-наружная (ВН)"
        },
        {
          label: "Угол",
          value: "90°"
        }
      ]
    },
    {
      id: "ugolok-sti-nik-lat-d25-nn",
      articul: "418270",
      title: "Уголок (STI) ник. лат.d25 НН УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/09/418270-372x276.jpeg",
      price: 29147,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "1": "Никелированный латунный уголок STI с наружной резьбой 25 мм с обеих сторон. Товар с пометкой уценка (возможны незначительные внешние дефекты, не влияющие на работоспособность)."
      },
      specs: [
        {
          label: "1",
          value: "Никелированный латунный уголок STI с наружной резьбой 25 мм с обеих сторон. Товар с пометкой уценка (возможны незначительные внешние дефекты, не влияющие на работоспособность)."
        }
      ]
    }
  ]
};
