import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/tovary-dlya-doma-sada-i-ogoroda/sadovyy-inventar/benzopily-i-yelektropily-cepnye/cepi/ */
export const cepiListing: CatalogListingData = {
  path: "tovary-dlya-doma-sada-i-ogoroda/sadovyy-inventar/benzopily-i-yelektropily-cepnye/cepi",
  title: "Цепи",
  totalCountLabel: "33 товара",
  filterFields: [
    {
      id: "1",
      title: "1",
      options: [
        "Оригинальная цепь Huter. Шаг 1/4, толщина 1.3 мм, 36 звеньев. Для мини-пилы ELS-20Li.",
        "Пильная цепь Champion B-050-LP-76E. Шаг 0.325, толщина 1.3 мм, 76 звеньев. Для шины 18 дюймов.",
        "Пильная цепь MD-STARS. Шаг 3/8 LP, толщина 1.3 мм, 50 звеньев.",
        "Цепь MD-STARS. Шаг 3/8 LP, толщина 1.3 мм, 52 звена.",
        "Цепь MD-STARS. Шаг 3/8 LP, толщина 1.3 мм, 55 звеньев.",
        "Цепь MD-STARS. Шаг 3/8 LP, толщина 1.3 мм, 56 звеньев."
      ],
      truncate: false
    },
    {
      id: "brend",
      title: "Бренд",
      options: [
        "BRAIT",
        "Huter"
      ],
      truncate: false
    },
    {
      id: "kolichestvo-zvenev",
      title: "Количество звеньев",
      options: [
        "50",
        "72"
      ],
      truncate: false
    },
    {
      id: "tolshhina-zvena-mm",
      title: "Толщина звена (мм)",
      options: [
        "1.3",
        "1.5"
      ],
      truncate: false
    },
    {
      id: "shag-cepi",
      title: "Шаг цепи",
      options: [
        "0.325",
        "3/8 LP"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "cep-brait-3-8lp-1-3-50-rs",
      articul: "406947",
      title: "Цепь BRAIT 3/8LP-1.3-50 RS УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/dfcc9d2e-7dc9-11ec-93c5-002590ba8282_45f31415-b0fc-11ed-93ea-002590ba8282-372x298.jpeg",
      price: 396,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "BRAIT",
        "strana-proizvoditelya": "Китай",
        "shag-cepi": "3/8 LP",
        "tolshhina-zvena-mm": "1.3",
        "kolichestvo-zvenev": "50",
        tip: "RS",
        primenenie: "для бензопил",
        primechanie: "УЦЕНКА"
      },
      specs: [
        {
          label: "Бренд",
          value: "BRAIT"
        },
        {
          label: "Страна производителя",
          value: "Китай"
        },
        {
          label: "Шаг цепи",
          value: "3/8 LP"
        },
        {
          label: "Толщина звена (мм)",
          value: "1.3"
        },
        {
          label: "Количество звеньев",
          value: "50"
        },
        {
          label: "Тип",
          value: "RS"
        },
        {
          label: "Применение",
          value: "для бензопил"
        },
        {
          label: "Примечание",
          value: "УЦЕНКА"
        }
      ]
    },
    {
      id: "cep-champion-b-050-lp-76e-1800-325-13-76",
      articul: "077927",
      title: "Цепь CHAMPION B-050-LP-76E 180″0.325-1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/0ac8580c-0392-11e5-88c0-c8600046bc56_fdca8247-9fea-11ea-937f-002590ba8283-312x303.jpeg",
      price: 605,
      inStock: false,
      quickBuy: true,
      filterValues: {
        "1": "Пильная цепь Champion B-050-LP-76E. Шаг 0.325, толщина 1.3 мм, 76 звеньев. Для шины 18 дюймов."
      },
      specs: [
        {
          label: "1",
          value: "Пильная цепь Champion B-050-LP-76E. Шаг 0.325, толщина 1.3 мм, 76 звеньев. Для шины 18 дюймов."
        }
      ]
    },
    {
      id: "cep-huter-6-1-4-1-3-36-dlja-els-20li",
      articul: "431103",
      title: "Цепь Huter 6” 1/4-1,3-36 для ELS-20Li",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/10/431103-221x303.jpeg",
      price: 590,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "1": "Оригинальная цепь Huter. Шаг 1/4, толщина 1.3 мм, 36 звеньев. Для мини-пилы ELS-20Li."
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "1",
          value: "Оригинальная цепь Huter. Шаг 1/4, толщина 1.3 мм, 36 звеньев. Для мини-пилы ELS-20Li."
        }
      ]
    },
    {
      id: "cep-huter-12-38-13-45-dlya-bs-25",
      articul: "413786",
      title: "Цепь Huter 12” 3,8-1,3-45 для BS-25",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/c75adbe4-5921-11ed-93da-002590ba8282_3958adec-b0fc-11ed-93ea-002590ba8282-337x303.jpeg",
      price: 700,
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
      id: "cep-huter-16-38-13-57-dlya-bs-40-bs-45",
      articul: "077939",
      title: "Цепь Huter 16” 3,8-1,3-57 для BS-40 BS-45",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/8467ac22-a3d8-11ea-9383-002590ba8283_f549a4cd-9c2f-11eb-93aa-002590ba8282.jpeg",
      price: 810,
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
      id: "cep-huter-18-0325-15-72-dlya-bs-45bs-52m",
      articul: "077940",
      title: "Цепь Huter 18” 0,325-1,5-72 для BS-45,BS-52M",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/096e0708-3f33-11ea-a9ec-c8600046bc56_fbcc49fa-9c2f-11eb-93aa-002590ba8282.jpeg",
      price: 1100,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Huter",
        "strana-proizvoditelya": "Китай",
        "shag-cepi": "0.325",
        "tolshhina-zvena-mm": "1.5",
        "kolichestvo-zvenev": "72",
        "dlina-shiny-dyujmy": "18",
        sovmestimost: "BS-45 BS-52M",
        "ves-kg": "0.45"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Бренд",
          value: "Huter"
        },
        {
          label: "Страна производителя",
          value: "Китай"
        },
        {
          label: "Шаг цепи",
          value: "0.325"
        },
        {
          label: "Толщина звена (мм)",
          value: "1.5"
        },
        {
          label: "Количество звеньев",
          value: "72"
        },
        {
          label: "Длина шины (дюймы)",
          value: "18"
        },
        {
          label: "Совместимость",
          value: "BS-45 BS-52M"
        },
        {
          label: "Вес (кг)",
          value: "0.45"
        }
      ]
    },
    {
      id: "cep-huter-18-38-13-62-dlya-els-2400-els-2800",
      articul: "077941",
      title: "Цепь Huter 18” 3,8-1,3-62 для ELS-2400 ELS-2800",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/b6599022-a3d8-11ea-9383-002590ba8283_0560e4ef-9c30-11eb-93aa-002590ba8282.jpeg",
      price: 920,
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
      id: "cep-huter-20-0325-15-76-dlya-bs-52-bs-62",
      articul: "077942",
      title: "Цепь Huter 20” 0,325-1,5-76 для BS-52 BS-62",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/4e44d6bb-a3d9-11ea-9383-002590ba8283_0c4249f0-9c30-11eb-93aa-002590ba8282.jpeg",
      price: 1200,
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
      id: "cep-md-stars-3-8lp-13-50z",
      articul: "419363",
      title: "Цепь MD-STARS 3/8LP-1,3-50z",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/04/419363-337x303.jpeg",
      price: 990,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "1": "Пильная цепь MD-STARS. Шаг 3/8 LP, толщина 1.3 мм, 50 звеньев."
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "1",
          value: "Пильная цепь MD-STARS. Шаг 3/8 LP, толщина 1.3 мм, 50 звеньев."
        }
      ]
    },
    {
      id: "cep-md-stars-3-8lp-13-52z",
      articul: "419364",
      title: "Цепь MD-STARS 3/8LP-1,3-52z",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/04/419364-372x248.jpeg",
      price: 1100,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "1": "Цепь MD-STARS. Шаг 3/8 LP, толщина 1.3 мм, 52 звена."
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "1",
          value: "Цепь MD-STARS. Шаг 3/8 LP, толщина 1.3 мм, 52 звена."
        }
      ]
    },
    {
      id: "cep-md-stars-3-8lp-13-55z",
      articul: "419365",
      title: "Цепь MD-STARS 3/8LP-1,3-55z",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/04/419365-337x303.jpeg",
      price: 1200,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "1": "Цепь MD-STARS. Шаг 3/8 LP, толщина 1.3 мм, 55 звеньев."
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "1",
          value: "Цепь MD-STARS. Шаг 3/8 LP, толщина 1.3 мм, 55 звеньев."
        }
      ]
    },
    {
      id: "cep-md-stars-3-8lp-13-56z",
      articul: "419366",
      title: "Цепь MD-STARS 3/8LP-1,3-56z",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/04/419366-337x303.jpeg",
      price: 1200,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "1": "Цепь MD-STARS. Шаг 3/8 LP, толщина 1.3 мм, 56 звеньев."
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "1",
          value: "Цепь MD-STARS. Шаг 3/8 LP, толщина 1.3 мм, 56 звеньев."
        }
      ]
    }
  ]
};
