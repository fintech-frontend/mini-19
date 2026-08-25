import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/svarochnoe-oborudovanie/svarochnye-apparaty/ */
export const svarochnyeApparatyListing: CatalogListingData = {
  path: "svarochnoe-oborudovanie/svarochnye-apparaty",
  title: "Сварочные аппараты",
  totalCountLabel: "24 товара",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Ресанта",
        "Fubag"
      ],
      truncate: false
    },
    {
      id: "diametr",
      title: "Диаметр электр/провол. мм",
      options: [
        "1,6-4",
        "1.6-5.0"
      ],
      truncate: false
    },
    {
      id: "moshhnost",
      title: "Мощность (вт)",
      options: [
        "4,8",
        "5,5",
        "7,2",
        "7,8",
        "10,5",
        "11"
      ],
      truncate: false
    },
    {
      id: "ves",
      title: "Вес",
      options: [
        "3,3",
        "5"
      ],
      truncate: false
    },
    {
      id: "1",
      title: "1",
      options: [
        "Инверторный сварочный аппарат Ресанта САИ 190 ПН для ручной дуговой сварки (MMA). Товар с пометкой уценка (возможны незначительные внешние дефекты, не влияющие на работоспособность). Максимальный ток 190 А.",
        "Инверторный сварочный аппарат САИ 190Т LUX для ручной дуговой сварки (MMA) покрытым электродом. Товар с пометкой уценка (возможны незначительные внешние дефекты, не влияющие на работоспособность). Оснащен IGBT транзисторами, функциями Hot Start, Arc Force, Anti-Stick. Работает от сети 220 В, диапазон сварочного тока 20-190 А.",
        "Инверторный сварочный аппарат Hanskonner HWM1200GEN для ручной дуговой сварки (MMA). Товар с пометкой уценка (возможны незначительные внешние дефекты, не влияющие на работоспособность). Адаптирован для работы от генераторов и при пониженном напряжении. Максимальный ток 200 А, ПН 80%. Вес 3.5 кг.",
        "Инверторный сварочный аппарат Hanskonner HWM1250GEN для ручной дуговой сварки (MMA). Товар с пометкой уценка (возможны незначительные внешние дефекты, не влияющие на работоспособность). Максимальный ток 250 А.",
        "Инверторный сварочный аппарат WorkMaster САИ-190П для ручной дуговой сварки (MMA). Товар с пометкой уценка (возможны незначительные внешние дефекты, не влияющие на работоспособность). Максимальный ток 190 А."
      ],
      truncate: false
    },
    {
      id: "diametr-elektrodov",
      title: "Диаметр электродов",
      options: [
        "1.6-5 мм",
        "до 5 мм"
      ],
      truncate: false
    },
    {
      id: "maks-tok",
      title: "Макс. ток",
      options: [
        "160 А",
        "190 А",
        "200 А",
        "220 А"
      ],
      truncate: false
    },
    {
      id: "model",
      title: "Модель",
      options: [
        "САИ 160",
        "САИ 190",
        "САИ 220",
        "САИ 220 ПН",
        "САИ 220Т LUX",
        "IR200",
        "IR220"
      ],
      truncate: true
    }
  ],
  products: [
    {
      id: "svarochnyj-apparat-hanskonner-hwm1200gen-200a",
      articul: "408885",
      title: "Сварочный аппарат Hanskonner HWM1200GEN 200A УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/06/408885-310x303.jpeg",
      price: 15774,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "1": "Инверторный сварочный аппарат Hanskonner HWM1200GEN для ручной дуговой сварки (MMA). Товар с пометкой уценка (возможны незначительные внешние дефекты, не влияющие на работоспособность). Адаптирован для работы от генераторов и при пониженном напряжении. Максимальный ток 200 А, ПН 80%. Вес 3.5 кг."
      },
      specs: [
        {
          label: "1",
          value: "Инверторный сварочный аппарат Hanskonner HWM1200GEN для ручной дуговой сварки (MMA). Товар с пометкой уценка (возможны незначительные внешние дефекты, не влияющие на работоспособность). Адаптирован для работы от генераторов и при пониженном напряжении. Максимальный ток 200 А, ПН 80%. Вес 3.5 кг."
        }
      ]
    },
    {
      id: "svarochnyj-apparat-hanskonner-hwm1250gen-250a",
      articul: "408886",
      title: "Сварочный аппарат Hanskonner HWM1250GEN 250A УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/06/408886-308x303.jpeg",
      price: 1735350,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "1": "Инверторный сварочный аппарат Hanskonner HWM1250GEN для ручной дуговой сварки (MMA). Товар с пометкой уценка (возможны незначительные внешние дефекты, не влияющие на работоспособность). Максимальный ток 250 А."
      },
      specs: [
        {
          label: "1",
          value: "Инверторный сварочный аппарат Hanskonner HWM1250GEN для ручной дуговой сварки (MMA). Товар с пометкой уценка (возможны незначительные внешние дефекты, не влияющие на работоспособность). Максимальный ток 250 А."
        }
      ]
    },
    {
      id: "svarochnyj-apparat-workmaster-sai-190p-invertornyj-ucenka",
      articul: "414475",
      title: "Сварочный аппарат WorkMaster САИ-190П инверторный УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/06/414475-309x303.jpeg",
      price: 5550,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "1": "Инверторный сварочный аппарат WorkMaster САИ-190П для ручной дуговой сварки (MMA). Товар с пометкой уценка (возможны незначительные внешние дефекты, не влияющие на работоспособность). Максимальный ток 190 А."
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "1",
          value: "Инверторный сварочный аппарат WorkMaster САИ-190П для ручной дуговой сварки (MMA). Товар с пометкой уценка (возможны незначительные внешние дефекты, не влияющие на работоспособность). Максимальный ток 190 А."
        }
      ]
    },
    {
      id: "svarochnyj-apparat-invert-fubag-ir200-200a-5d-230v",
      articul: "064147",
      title: "Сварочный аппарат инверт Fubag IR200 200А-5d-230В",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/06/064147-310x303.jpeg",
      price: 10935,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "Fubag",
        strana: "Китай",
        tip: "Инверторный сварочный аппарат",
        model: "IR200",
        "tip-svarki": "MMA",
        "maks-tok": "200 А",
        moshhnost: "10,5",
        "diametr-elektrodov": "до 5 мм",
        diametr: "1.6-5.0"
      },
      specs: [
        {
          label: "Бренд",
          value: "Fubag"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Тип",
          value: "Инверторный сварочный аппарат"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Модель",
          value: "IR200"
        },
        {
          label: "Тип сварки",
          value: "MMA"
        },
        {
          label: "Макс. ток",
          value: "200 А"
        },
        {
          label: "Мощность (вт)",
          value: "10,5"
        },
        {
          label: "Диаметр электродов",
          value: "до 5 мм"
        },
        {
          label: "Диаметр электр/провол. мм",
          value: "1.6-5.0"
        }
      ]
    },
    {
      id: "svarochnyj-apparat-invert-fubag-ir220-200a-5d-240v",
      articul: "064148",
      title: "Сварочный аппарат инверт Fubag IR220 200А-5d-240В",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/06/064148-312x303.jpeg",
      price: 12300,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "Fubag",
        strana: "Китай",
        tip: "Инверторный сварочный аппарат",
        model: "IR220",
        "tip-svarki": "MMA",
        "maks-tok": "200 А",
        moshhnost: "11",
        "diametr-elektrodov": "1.6-5 мм",
        diametr: "1.6-5.0"
      },
      specs: [
        {
          label: "Бренд",
          value: "Fubag"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Тип",
          value: "Инверторный сварочный аппарат"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Модель",
          value: "IR220"
        },
        {
          label: "Тип сварки",
          value: "MMA"
        },
        {
          label: "Макс. ток",
          value: "200 А"
        },
        {
          label: "Мощность (вт)",
          value: "11"
        },
        {
          label: "Диаметр электродов",
          value: "1.6-5 мм"
        },
        {
          label: "Диаметр электр/провол. мм",
          value: "1.6-5.0"
        }
      ]
    },
    {
      id: "svarochnyj-apparat-sai-160-65-1-invertornyj",
      articul: "064149",
      title: "Сварочный аппарат САИ 160 65/1 инверторный",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/06/064149-311x303.jpeg",
      price: 7950,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Ресанта",
        strana: "Китай",
        tip: "Инверторный сварочный аппарат",
        model: "САИ 160",
        "tip-svarki": "MMA",
        "maks-tok": "160 А",
        moshhnost: "4,8",
        "pv-na-maks-toke": "70%",
        diametr: "1,6-4"
      },
      specs: [
        {
          label: "Бренд",
          value: "Ресанта"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Тип",
          value: "Инверторный сварочный аппарат"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Модель",
          value: "САИ 160"
        },
        {
          label: "Тип сварки",
          value: "MMA"
        },
        {
          label: "Макс. ток",
          value: "160 А"
        },
        {
          label: "Мощность (вт)",
          value: "4,8"
        },
        {
          label: "ПВ на макс. токе",
          value: "70%"
        },
        {
          label: "Диаметр электр/провол. мм",
          value: "1,6-4"
        }
      ]
    },
    {
      id: "svarochnyj-apparat-sai-190-65-2-invertornyj",
      articul: "064151",
      title: "Сварочный аппарат САИ 190 65/2 инверторный",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/06/064151-308x303.jpeg",
      price: 8000,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Ресанта",
        strana: "Китай",
        tip: "Инверторный сварочный аппарат",
        model: "САИ 190",
        "tip-svarki": "MMA",
        "maks-tok": "190 А",
        moshhnost: "5,5",
        "pv-na-maks-toke": "70%",
        diametr: "1.6-5.0"
      },
      specs: [
        {
          label: "Бренд",
          value: "Ресанта"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Тип",
          value: "Инверторный сварочный аппарат"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Модель",
          value: "САИ 190"
        },
        {
          label: "Тип сварки",
          value: "MMA"
        },
        {
          label: "Макс. ток",
          value: "190 А"
        },
        {
          label: "Мощность (вт)",
          value: "5,5"
        },
        {
          label: "ПВ на макс. токе",
          value: "70%"
        },
        {
          label: "Диаметр электр/провол. мм",
          value: "1.6-5.0"
        }
      ]
    },
    {
      id: "svarochnyj-apparat-sai-190-pn-65-19-invertornyj-ucenka",
      articul: "064152",
      title: "Сварочный аппарат САИ 190 ПН 65/19 инверторный УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/06/064152-301x303.jpeg",
      price: 10800,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "1": "Инверторный сварочный аппарат Ресанта САИ 190 ПН для ручной дуговой сварки (MMA). Товар с пометкой уценка (возможны незначительные внешние дефекты, не влияющие на работоспособность). Максимальный ток 190 А.",
        strana: "Китай",
        moshhnost: "7,2",
        diametr: "1.6-5.0"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "1",
          value: "Инверторный сварочный аппарат Ресанта САИ 190 ПН для ручной дуговой сварки (MMA). Товар с пометкой уценка (возможны незначительные внешние дефекты, не влияющие на работоспособность). Максимальный ток 190 А."
        },
        {
          label: "Мощность (вт)",
          value: "7,2"
        },
        {
          label: "Диаметр электр/провол. мм",
          value: "1.6-5.0"
        }
      ]
    },
    {
      id: "svarochnyj-apparat-sai-190t-lux-invertornyj-ucenka",
      articul: "129375",
      title: "Сварочный аппарат САИ 190Т LUX инверторный УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/06/129375-303x303.jpeg",
      price: 9360,
      inStock: false,
      quickBuy: true,
      filterValues: {
        "1": "Инверторный сварочный аппарат САИ 190Т LUX для ручной дуговой сварки (MMA) покрытым электродом. Товар с пометкой уценка (возможны незначительные внешние дефекты, не влияющие на работоспособность). Оснащен IGBT транзисторами, функциями Hot Start, Arc Force, Anti-Stick. Работает от сети 220 В, диапазон сварочного тока 20-190 А.",
        strana: "Китай",
        brend: "Ресанта",
        ves: "3,3",
        moshhnost: "7,2",
        diametr: "1.6-5.0"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Ресанта"
        },
        {
          label: "Вес",
          value: "3,3"
        },
        {
          label: "1",
          value: "Инверторный сварочный аппарат САИ 190Т LUX для ручной дуговой сварки (MMA) покрытым электродом. Товар с пометкой уценка (возможны незначительные внешние дефекты, не влияющие на работоспособность). Оснащен IGBT транзисторами, функциями Hot Start, Arc Force, Anti-Stick. Работает от сети 220 В, диапазон сварочного тока 20-190 А."
        },
        {
          label: "Мощность (вт)",
          value: "7,2"
        },
        {
          label: "Диаметр электр/провол. мм",
          value: "1.6-5.0"
        }
      ]
    },
    {
      id: "svarochnyj-apparat-sai-220-65-3-invertornyj",
      articul: "064153",
      title: "Сварочный аппарат САИ 220 65/3 инверторный",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/06/064153-309x303.jpeg",
      price: 11900,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Ресанта",
        strana: "Китай",
        tip: "Инверторный сварочный аппарат",
        model: "САИ 220",
        "tip-svarki": "MMA",
        "maks-tok": "220 А",
        moshhnost: "7,8",
        "pv-na-maks-toke": "70%",
        diametr: "1.6-5.0"
      },
      specs: [
        {
          label: "Бренд",
          value: "Ресанта"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Тип",
          value: "Инверторный сварочный аппарат"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Модель",
          value: "САИ 220"
        },
        {
          label: "Тип сварки",
          value: "MMA"
        },
        {
          label: "Макс. ток",
          value: "220 А"
        },
        {
          label: "Мощность (вт)",
          value: "7,8"
        },
        {
          label: "ПВ на макс. токе",
          value: "70%"
        },
        {
          label: "Диаметр электр/провол. мм",
          value: "1.6-5.0"
        }
      ]
    },
    {
      id: "svarochnyj-apparat-sai-220-pn-65-20-invertornyj",
      articul: "064154",
      title: "Сварочный аппарат САИ 220 ПН 65/20 инверторный",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/06/064154-311x303.jpeg",
      price: 15700,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Ресанта",
        strana: "Китай",
        tip: "Инверторный сварочный аппарат",
        model: "САИ 220 ПН",
        "tip-svarki": "MMA",
        "maks-tok": "220 А",
        moshhnost: "7,8",
        "pv-na-maks-toke": "70%",
        diametr: "1.6-5.0"
      },
      specs: [
        {
          label: "Бренд",
          value: "Ресанта"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Тип",
          value: "Инверторный сварочный аппарат"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Модель",
          value: "САИ 220 ПН"
        },
        {
          label: "Тип сварки",
          value: "MMA"
        },
        {
          label: "Макс. ток",
          value: "220 А"
        },
        {
          label: "Мощность (вт)",
          value: "7,8"
        },
        {
          label: "ПВ на макс. токе",
          value: "70%"
        },
        {
          label: "Диаметр электр/провол. мм",
          value: "1.6-5.0"
        }
      ]
    },
    {
      id: "svarochnyj-apparat-sai-220t-lux-invertornyj",
      articul: "129376",
      title: "Сварочный аппарат САИ 220Т LUX инверторный",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/06/129376-303x303.jpeg",
      price: 12750,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Ресанта",
        strana: "Китай",
        tip: "Инверторный сварочный аппарат",
        model: "САИ 220Т LUX",
        "tip-svarki": "MMA",
        ves: "5",
        "maks-tok": "220 А",
        moshhnost: "7,8",
        "pv-na-maks-toke": "70%",
        diametr: "1.6-5.0"
      },
      specs: [
        {
          label: "Бренд",
          value: "Ресанта"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Тип",
          value: "Инверторный сварочный аппарат"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Модель",
          value: "САИ 220Т LUX"
        },
        {
          label: "Тип сварки",
          value: "MMA"
        },
        {
          label: "Вес",
          value: "5"
        },
        {
          label: "Макс. ток",
          value: "220 А"
        },
        {
          label: "Мощность (вт)",
          value: "7,8"
        },
        {
          label: "ПВ на макс. токе",
          value: "70%"
        },
        {
          label: "Диаметр электр/провол. мм",
          value: "1.6-5.0"
        }
      ]
    }
  ]
};
