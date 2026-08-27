import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/instrument/yelektroinstrument/raskhodnye-materialy-i-osnastka-dlya-yel/bury-i-sverla/nabory-sverl/ */
export const naborySverlListing: CatalogListingData = {
  path: "instrument/yelektroinstrument/raskhodnye-materialy-i-osnastka-dlya-yel/bury-i-sverla/nabory-sverl",
  title: "Наборы сверл",
  totalCountLabel: "18 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Энкор",
        "DERZHI",
        "FIT",
        "Gigant",
        "P.I.T."
      ],
      truncate: false
    },
    {
      id: "strana",
      title: "Страна производитель",
      options: [
        "Китай",
        "Россия"
      ],
      truncate: false
    },
    {
      id: "tip",
      title: "Тип товара",
      options: [
        "Комбинированный набор",
        "Набор сверл и бит",
        "Сверло"
      ],
      truncate: false
    },
    {
      id: "diametry",
      title: "Диаметры",
      options: [
        "5, 6, 8мм",
        "10, 12, 16, 18, 20, 25мм",
        "15, 20, 25, 30, 35мм"
      ],
      truncate: false
    },
    {
      id: "diapazon-diametrov",
      title: "Диапазон диаметров",
      options: [
        "1-10мм",
        "1-13мм",
        "3-10мм"
      ],
      truncate: false
    },
    {
      id: "kolichestvo-v-nabore",
      title: "Количество в наборе",
      options: [
        "3шт",
        "5шт",
        "6шт",
        "8шт",
        "16шт",
        "19шт",
        "25шт"
      ],
      truncate: true
    },
    {
      id: "naznachenie",
      title: "Назначение",
      options: [
        "Бетон, камень",
        "Дерево, ДСП, фанера",
        "Дерево, ЛДСП, пластик",
        "Кафель, керамика",
        "Металл, бетон, дерево",
        "Универсальный"
      ],
      truncate: false
    },
    {
      id: "opisanie",
      title: "Описание",
      options: [
        "Компактный набор буров для бытового использования. Включает самые популярные диаметры для установки дюбелей и легкого монтажа.",
        "Набор перьевых сверл для получения точных отверстий большого диаметра. Центрирующее острие для легкого начала сверления.",
        "Набор сверл для работы с кафельной плиткой. Включает наиболее востребованные диаметры.",
        "Набор сверл с износостойким покрытием. Покрытие TiN увеличивает стойкость и теплоотвод. Для обработки твердых сталей.",
        "Набор спиральных сверл по дереву. Подходит для дрели и станков. Острые режущие кромки для быстрого и чистого сверления.",
        "Расширенный набор сверл по металлу. Шаг 0.5 мм. Для профессионального и бытового использования. Надежность и долговечность.",
        "Универсальный набор для работы с различными материалами. Включает сверла по металлу, дереву и буры по бетону.",
        "Универсальный набор из 50 предметов. Включает сверла по металлу, дереву, бетону и набор бит. Идеален для домашнего мастера.",
        "Универсальный набор сверл по металлу. Подходит для стали, чугуна, цветных металлов. Высокая точность и стойкость.",
        "Уцененный набор сверл Форстнер. Может иметь незначительные косметические дефекты. Идеальны для точных отверстий с плоским дном в древесине.",
        "Уцененный набор усиленных сверл Форстнер. Изготовлены из высокопрочной стали. Для чистого и точного сверления глухих отверстий."
      ],
      truncate: true
    },
    {
      id: "tip-sverla",
      title: "Тип сверла",
      options: [
        "Перьевое",
        "По кафелю",
        "Спиральное по дереву",
        "Спиральное по металлу",
        "Форстнер"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "nabor-rezakov-dlja-probok-4-predmeta-6-10-13-16mm-36240810",
      articul: "9585",
      title: "Набор резаков для пробок 4 предмета 6,10,13,16мм 36240810",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 1100,
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
      id: "nabor-sverl-fit-forstner-15-20-25-30-35-mm-5-sht-36536",
      articul: "415990",
      title: "Набор сверл FIT Форстнер 15/20/25/30/35 мм 5 шт 36536 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/04/415990-337x303.jpeg",
      price: 792,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "FIT",
        "tip-sverla": "Форстнер",
        "kolichestvo-v-nabore": "5шт",
        diametry: "15, 20, 25, 30, 35мм",
        naznachenie: "Дерево, ЛДСП, пластик",
        opisanie: "Уцененный набор сверл Форстнер. Может иметь незначительные косметические дефекты. Идеальны для точных отверстий с плоским дном в древесине."
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "FIT"
        },
        {
          label: "Тип сверла",
          value: "Форстнер"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Количество в наборе",
          value: "5шт"
        },
        {
          label: "Диаметры",
          value: "15, 20, 25, 30, 35мм"
        },
        {
          label: "Назначение",
          value: "Дерево, ЛДСП, пластик"
        },
        {
          label: "Описание",
          value: "Уцененный набор сверл Форстнер. Может иметь незначительные косметические дефекты. Идеальны для точных отверстий с плоским дном в древесине."
        }
      ]
    },
    {
      id: "nabor-sverl-fit-forstner-15-20-25-30-35-mm-5-sht-usilenn",
      articul: "415993",
      title: "Набор сверл FIT Форстнер 15/20/25/30/35 мм 5 шт усиленная сталь 36552 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/04/4159933-337x303.jpeg",
      price: 756,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "FIT",
        "tip-sverla": "Форстнер",
        "kolichestvo-v-nabore": "5шт",
        diametry: "15, 20, 25, 30, 35мм",
        naznachenie: "Дерево, ЛДСП, пластик",
        opisanie: "Уцененный набор усиленных сверл Форстнер. Изготовлены из высокопрочной стали. Для чистого и точного сверления глухих отверстий."
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "FIT"
        },
        {
          label: "Тип сверла",
          value: "Форстнер"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Количество в наборе",
          value: "5шт"
        },
        {
          label: "Диаметры",
          value: "15, 20, 25, 30, 35мм"
        },
        {
          label: "Назначение",
          value: "Дерево, ЛДСП, пластик"
        },
        {
          label: "Описание",
          value: "Уцененный набор усиленных сверл Форстнер. Изготовлены из высокопрочной стали. Для чистого и точного сверления глухих отверстий."
        }
      ]
    },
    {
      id: "nabor-sverl-d-bet-3-sht-f-568-mm-yenkor-9373",
      articul: "043219",
      title: "Набор сверл д/бет 3 шт ф 5,6,8 мм Энкор 9373",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/e0355928-30c6-11e2-a1f1-c8600046bc56_2fb96db3-9fee-11ea-937f-002590ba8283-122x303.jpeg",
      price: 11570,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Энкор",
        "tip-hvostovika": "SDS-plus",
        "kolichestvo-v-nabore": "3шт",
        diametry: "5, 6, 8мм",
        naznachenie: "Бетон, камень",
        opisanie: "Компактный набор буров для бытового использования. Включает самые популярные диаметры для установки дюбелей и легкого монтажа."
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Энкор"
        },
        {
          label: "Тип хвостовика",
          value: "SDS-plus"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Количество в наборе",
          value: "3шт"
        },
        {
          label: "Диаметры",
          value: "5, 6, 8мм"
        },
        {
          label: "Назначение",
          value: "Бетон, камень"
        },
        {
          label: "Описание",
          value: "Компактный набор буров для бытового использования. Включает самые популярные диаметры для установки дюбелей и легкого монтажа."
        }
      ]
    },
    {
      id: "nabor-sverl-d-derev-8-sht-3-10-mm-pl-kor-derzhi-8305-005",
      articul: "043222",
      title: "Набор сверл д/дерев 8 шт 3-10 мм пл кор DERZHI 8305-005",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/606b04b3-a7a8-11e9-a99b-c8600046bc56_2fb96db0-9fee-11ea-937f-002590ba8283.jpeg",
      price: 580,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "DERZHI",
        "tip-sverla": "Спиральное по дереву",
        "kolichestvo-v-nabore": "8шт",
        "diapazon-diametrov": "3-10мм",
        tip: "Сверло",
        material: "HSS",
        opisanie: "Набор спиральных сверл по дереву. Подходит для дрели и станков. Острые режущие кромки для быстрого и чистого сверления."
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "DERZHI"
        },
        {
          label: "Тип сверла",
          value: "Спиральное по дереву"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Количество в наборе",
          value: "8шт"
        },
        {
          label: "Диапазон диаметров",
          value: "3-10мм"
        },
        {
          label: "Тип товара",
          value: "Сверло"
        },
        {
          label: "Материал",
          value: "HSS"
        },
        {
          label: "Описание",
          value: "Набор спиральных сверл по дереву. Подходит для дрели и станков. Острые режущие кромки для быстрого и чистого сверления."
        }
      ]
    },
    {
      id: "nabor-sverl-d-derev-perovykh-6-sht-10-12-16-18-20-25mm-derzhi-830",
      articul: "043224",
      title: "Набор сверл д/дерев перовых 6 шт (10.12.16.18.20.25мм) DERZHI 8305-006",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/49f92e65-a49f-11e9-a999-c8600046bc54_2fb96dae-9fee-11ea-937f-002590ba8283-372x279.jpeg",
      price: 475,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "DERZHI",
        "tip-sverla": "Перьевое",
        "kolichestvo-v-nabore": "6шт",
        diametry: "10, 12, 16, 18, 20, 25мм",
        tip: "Сверло",
        naznachenie: "Дерево, ДСП, фанера",
        opisanie: "Набор перьевых сверл для получения точных отверстий большого диаметра. Центрирующее острие для легкого начала сверления."
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "DERZHI"
        },
        {
          label: "Тип сверла",
          value: "Перьевое"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Количество в наборе",
          value: "6шт"
        },
        {
          label: "Диаметры",
          value: "10, 12, 16, 18, 20, 25мм"
        },
        {
          label: "Тип товара",
          value: "Сверло"
        },
        {
          label: "Назначение",
          value: "Дерево, ДСП, фанера"
        },
        {
          label: "Описание",
          value: "Набор перьевых сверл для получения точных отверстий большого диаметра. Центрирующее острие для легкого начала сверления."
        }
      ]
    },
    {
      id: "nabor-sverl-i-bit-p-i-t-50-pred-aset02-050a",
      articul: "427665",
      title: "Набор сверл и бит P.I.T. 50 пред ASET05-050A",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/05/ec9f86fc-0882-11ef-942a-002590ba8282_8491983e-0884-11ef-942a-002590ba8282-272x303.jpeg",
      price: 4050,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "P.I.T.",
        tip: "Набор сверл и бит",
        "kolichestvo-predmetov": "50шт",
        naznachenie: "Универсальный",
        kejs: "Да",
        opisanie: "Универсальный набор из 50 предметов. Включает сверла по металлу, дереву, бетону и набор бит. Идеален для домашнего мастера."
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
          label: "Тип товара",
          value: "Набор сверл и бит"
        },
        {
          label: "Количество предметов",
          value: "50шт"
        },
        {
          label: "Назначение",
          value: "Универсальный"
        },
        {
          label: "Кейс",
          value: "Да"
        },
        {
          label: "Описание",
          value: "Универсальный набор из 50 предметов. Включает сверла по металлу, дереву, бетону и набор бит. Идеален для домашнего мастера."
        }
      ]
    },
    {
      id: "nabor-sverl-kombinirovannyh-fit-16sht-metall-beton-derevo-36358",
      articul: "432456",
      title: "Набор сверл комбинированных FIT 16шт (металл/бетон/дерево) 36358",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 1250,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "FIT",
        tip: "Комбинированный набор",
        "kolichestvo-v-nabore": "16шт",
        naznachenie: "Металл, бетон, дерево",
        kejs: "Да",
        opisanie: "Универсальный набор для работы с различными материалами. Включает сверла по металлу, дереву и буры по бетону."
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "FIT"
        },
        {
          label: "Тип товара",
          value: "Комбинированный набор"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Количество в наборе",
          value: "16шт"
        },
        {
          label: "Назначение",
          value: "Металл, бетон, дерево"
        },
        {
          label: "Кейс",
          value: "Да"
        },
        {
          label: "Описание",
          value: "Универсальный набор для работы с различными материалами. Включает сверла по металлу, дереву и буры по бетону."
        }
      ]
    },
    {
      id: "nabor-sverl-po-kafelju-5sht-3-10-gigant-g-11319",
      articul: "434778",
      title: "Набор сверл по кафелю (5шт; 3-10) Gigant G-11319",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 1015,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Gigant",
        "tip-sverla": "По кафелю",
        "kolichestvo-v-nabore": "5шт",
        "diapazon-diametrov": "3-10мм",
        naznachenie: "Кафель, керамика",
        opisanie: "Набор сверл для работы с кафельной плиткой. Включает наиболее востребованные диаметры."
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Gigant"
        },
        {
          label: "Тип сверла",
          value: "По кафелю"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Количество в наборе",
          value: "5шт"
        },
        {
          label: "Диапазон диаметров",
          value: "3-10мм"
        },
        {
          label: "Назначение",
          value: "Кафель, керамика"
        },
        {
          label: "Описание",
          value: "Набор сверл для работы с кафельной плиткой. Включает наиболее востребованные диаметры."
        }
      ]
    },
    {
      id: "nabor-sverl-po-metallu-19-sht-hss-derzhi-8302-002",
      articul: "408982",
      title: "Набор сверл по металлу 19 шт HSS DERZHI 8302-002",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/04/4089822-337x303.jpeg",
      price: 1100,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "DERZHI",
        "tip-sverla": "Спиральное по металлу",
        "kolichestvo-v-nabore": "19шт",
        "diapazon-diametrov": "1-10мм",
        material: "HSS",
        opisanie: "Универсальный набор сверл по металлу. Подходит для стали, чугуна, цветных металлов. Высокая точность и стойкость."
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "DERZHI"
        },
        {
          label: "Тип сверла",
          value: "Спиральное по металлу"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Количество в наборе",
          value: "19шт"
        },
        {
          label: "Диапазон диаметров",
          value: "1-10мм"
        },
        {
          label: "Материал",
          value: "HSS"
        },
        {
          label: "Описание",
          value: "Универсальный набор сверл по металлу. Подходит для стали, чугуна, цветных металлов. Высокая точность и стойкость."
        }
      ]
    },
    {
      id: "nabor-sverl-po-metallu-19-sht-tin-hss-derzhi-8302-003",
      articul: "408981",
      title: "Набор сверл по металлу 19 шт TIN HSS DERZHI 8302-003",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/04/4089812-337x303.jpeg",
      price: 1440,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "DERZHI",
        "tip-sverla": "Спиральное по металлу",
        "kolichestvo-v-nabore": "19шт",
        "diapazon-diametrov": "1-10мм",
        pokrytie: "TiN (титано-нитрид)",
        opisanie: "Набор сверл с износостойким покрытием. Покрытие TiN увеличивает стойкость и теплоотвод. Для обработки твердых сталей."
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "DERZHI"
        },
        {
          label: "Тип сверла",
          value: "Спиральное по металлу"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Количество в наборе",
          value: "19шт"
        },
        {
          label: "Диапазон диаметров",
          value: "1-10мм"
        },
        {
          label: "Покрытие",
          value: "TiN (титано-нитрид)"
        },
        {
          label: "Описание",
          value: "Набор сверл с износостойким покрытием. Покрытие TiN увеличивает стойкость и теплоотвод. Для обработки твердых сталей."
        }
      ]
    },
    {
      id: "nabor-sverl-po-metallu-25-sht-hss-derzhi-8302-004",
      articul: "408983",
      title: "Набор сверл по металлу 25 шт HSS DERZHI 8302-004",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/04/4089832-337x303.jpeg",
      price: 2650,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "DERZHI",
        "tip-sverla": "Спиральное по металлу",
        "kolichestvo-v-nabore": "25шт",
        "diapazon-diametrov": "1-13мм",
        material: "HSS",
        opisanie: "Расширенный набор сверл по металлу. Шаг 0.5 мм. Для профессионального и бытового использования. Надежность и долговечность."
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "DERZHI"
        },
        {
          label: "Тип сверла",
          value: "Спиральное по металлу"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Количество в наборе",
          value: "25шт"
        },
        {
          label: "Диапазон диаметров",
          value: "1-13мм"
        },
        {
          label: "Материал",
          value: "HSS"
        },
        {
          label: "Описание",
          value: "Расширенный набор сверл по металлу. Шаг 0.5 мм. Для профессионального и бытового использования. Надежность и долговечность."
        }
      ]
    }
  ]
};
