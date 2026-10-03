import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/vodo-gazosnabzhenie/zapornaya-armatura-i-dobornye-yelement/zapornaya-armatura-prochie/ */
export const zapornayaArmaturaProchieListing: CatalogListingData = {
  path: "vodo-gazosnabzhenie/zapornaya-armatura-i-dobornye-yelement/zapornaya-armatura-prochie",
  title: "Запорная арматура прочие",
  totalCountLabel: "15 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "ЛСГ",
        "Не указан",
        "УО",
        "ARCTOL",
        "Honeywell",
        "ISOTEC",
        "Valfex"
      ],
      truncate: true
    },
    {
      id: "davlenie",
      title: "Давление",
      options: [
        "10 бар",
        "25 бар"
      ],
      truncate: false
    },
    {
      id: "dlina",
      title: "Длина",
      options: [
        "1 м",
        "30-33 м",
        "250 м",
        "300 мм",
        "400 мм",
        "450 мм"
      ],
      truncate: false
    },
    {
      id: "material",
      title: "Материал",
      options: [
        "ПВХ",
        "Сталь"
      ],
      truncate: false
    },
    {
      id: "naznachenie",
      title: "Назначение",
      options: [
        "Для газопроводов",
        "Для радиаторов"
      ],
      truncate: false
    },
    {
      id: "obem",
      title: "Объем",
      options: [
        "10 кг",
        "20 кг",
        "30 кг",
        "50 кг"
      ],
      truncate: false
    },
    {
      id: "prisoedinenie",
      title: "Присоединение",
      options: [
        "1 1/4 дюйма",
        "1/2 дюйма"
      ],
      truncate: false
    },
    {
      id: "strana-proizvoditel",
      title: "Страна производитель",
      options: [
        "Германия",
        "Россия"
      ],
      truncate: false
    },
    {
      id: "tip",
      title: "Тип",
      options: [
        "Защитная лента",
        "Монтажный ключ",
        "Отборное устройство",
        "Редукционный клапан",
        "Сигнальная лента",
        "Теплоизоляция",
        "Теплоноситель",
        "ТЭН"
      ],
      truncate: true
    },
    {
      id: "shirina",
      title: "Ширина",
      options: [
        "100-110 мм",
        "200 мм"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "isotec-shell-al-40h108h1000-t-2-m-up",
      articul: "3173",
      title: "ISOTEC Шелл-АЛ-40х108х1000/Т (2 м/уп)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 2200,
      inStock: false,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Россия",
        brend: "ISOTEC",
        tip: "Теплоизоляция",
        "vnutrennij-diametr": "40 мм",
        "naruzhnyj-diametr": "108 мм",
        dlina: "1 м"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "ISOTEC"
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
          label: "Внутренний диаметр",
          value: "40 мм"
        },
        {
          label: "Наружный диаметр",
          value: "108 мм"
        },
        {
          label: "Длина",
          value: "1 м"
        }
      ]
    },
    {
      id: "klapan-redukcionnyj-d06f-1-1-4a-honeywell-braukmann",
      articul: "3163",
      title: "Клапан редукционный D06F-1 1/4A Honeywell Braukmann",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 33600,
      inStock: false,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Германия",
        brend: "Honeywell",
        tip: "Редукционный клапан",
        prisoedinenie: "1 1/4 дюйма",
        davlenie: "10 бар",
        temperatura: "120°C"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Германия"
        },
        {
          label: "Бренд",
          value: "Honeywell"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип",
          value: "Редукционный клапан"
        },
        {
          label: "Присоединение",
          value: "1 1/4 дюйма"
        },
        {
          label: "Давление",
          value: "10 бар"
        },
        {
          label: "Температура",
          value: "120°C"
        }
      ]
    },
    {
      id: "klyuch-dlya-sborki-radiatorov",
      articul: "027488",
      title: "Ключ для сборки радиаторов",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/9f094c31-30c6-11e2-a1f1-c8600046bc56_250b6688-9e58-11ea-937e-002590ba8283-303x303.jpeg",
      price: 1200,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Россия",
        brend: "Не указан",
        tip: "Монтажный ключ",
        naznachenie: "Для радиаторов",
        dlina: "450 мм",
        material: "Сталь"
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
          value: "Не указан"
        },
        {
          label: "Тип",
          value: "Монтажный ключ"
        },
        {
          label: "Назначение",
          value: "Для радиаторов"
        },
        {
          label: "Длина",
          value: "450 мм"
        },
        {
          label: "Материал",
          value: "Сталь"
        }
      ]
    },
    {
      id: "kljuch-radiatornyj-dlja-montazhnyh-komplektov",
      articul: "4721",
      title: "Ключ радиаторный для монтажных комплектов",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 190,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Россия",
        brend: "Не указан",
        tip: "Монтажный ключ",
        naznachenie: "Для радиаторов",
        dlina: "400 мм",
        material: "Сталь"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Не указан"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип",
          value: "Монтажный ключ"
        },
        {
          label: "Назначение",
          value: "Для радиаторов"
        },
        {
          label: "Длина",
          value: "400 мм"
        },
        {
          label: "Материал",
          value: "Сталь"
        }
      ]
    },
    {
      id: "lenta-pvkh-dlya-zashh-truby100-110-m-p-30-33kg",
      articul: "036741",
      title: "Лента ПВХ для защ.трубы(100-110 м.п.;30-33кг)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/b7f1d503-30c5-11e2-a1f1-c8600046bc56_c034ee15-9e52-11ea-937e-002590ba8283-372x279.jpeg",
      price: 13250,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Россия",
        brend: "Не указан",
        tip: "Защитная лента",
        material: "ПВХ",
        shirina: "100-110 мм",
        dlina: "30-33 м"
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
          value: "Не указан"
        },
        {
          label: "Тип",
          value: "Защитная лента"
        },
        {
          label: "Материал",
          value: "ПВХ"
        },
        {
          label: "Ширина",
          value: "100-110 мм"
        },
        {
          label: "Длина",
          value: "30-33 м"
        }
      ]
    },
    {
      id: "lenta-signalnaya-lsg-200-opasno-gaz-kras",
      articul: "036756",
      title: "Лента сигнальная ЛСГ-200 “Опасно Газ” красно-желтая 50мкм.200мм 250 п.м.",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/919df223-1496-11e4-8414-c8600046bc53_c034ee16-9e52-11ea-937e-002590ba8283-372x280.jpeg",
      price: 920,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Россия",
        brend: "ЛСГ",
        tip: "Сигнальная лента",
        naznachenie: "Для газопроводов",
        shirina: "200 мм",
        dlina: "250 м"
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
          value: "ЛСГ"
        },
        {
          label: "Тип",
          value: "Сигнальная лента"
        },
        {
          label: "Назначение",
          value: "Для газопроводов"
        },
        {
          label: "Ширина",
          value: "200 мм"
        },
        {
          label: "Длина",
          value: "250 м"
        }
      ]
    },
    {
      id: "teplonositel-valfex-65-10kg",
      articul: "422631",
      title: "Теплоноситель VALFEX-65 10кг",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/422631-303x303.jpg",
      price: 1830,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Россия",
        brend: "Valfex",
        tip: "Теплоноситель",
        "temperatura-zamerzaniya": "-65°C",
        obem: "10 кг",
        cvet: "Зеленый"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Valfex"
        },
        {
          label: "Тип",
          value: "Теплоноситель"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Температура замерзания",
          value: "-65°C"
        },
        {
          label: "Объем",
          value: "10 кг"
        },
        {
          label: "Цвет",
          value: "Зеленый"
        }
      ]
    },
    {
      id: "teplonositel-valfex-65-20kg",
      articul: "422632",
      title: "Теплоноситель VALFEX-65 20кг",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/10/422632-301x303.jpeg",
      price: 3500,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Россия",
        brend: "Valfex",
        tip: "Теплоноситель",
        "temperatura-zamerzaniya": "-65°C",
        obem: "20 кг",
        cvet: "Зеленый"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Valfex"
        },
        {
          label: "Тип",
          value: "Теплоноситель"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Температура замерзания",
          value: "-65°C"
        },
        {
          label: "Объем",
          value: "20 кг"
        },
        {
          label: "Цвет",
          value: "Зеленый"
        }
      ]
    },
    {
      id: "teplonositel-valfex-65-30kg",
      articul: "422633",
      title: "Теплоноситель VALFEX-65 30кг",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/10/422633-294x303.jpeg",
      price: 5450,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Россия",
        brend: "Valfex",
        tip: "Теплоноситель",
        "temperatura-zamerzaniya": "-65°C",
        obem: "30 кг",
        cvet: "Зеленый"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Valfex"
        },
        {
          label: "Тип",
          value: "Теплоноситель"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Температура замерзания",
          value: "-65°C"
        },
        {
          label: "Объем",
          value: "30 кг"
        },
        {
          label: "Цвет",
          value: "Зеленый"
        }
      ]
    },
    {
      id: "teplonositel-valfex-65-50kg",
      articul: "422634",
      title: "Теплоноситель VALFEX-65 50кг",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/10/422634-306x303.jpeg",
      price: 9950,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Россия",
        brend: "Valfex",
        tip: "Теплоноситель",
        "temperatura-zamerzaniya": "-65°C",
        obem: "50 кг",
        cvet: "Зеленый"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Valfex"
        },
        {
          label: "Тип",
          value: "Теплоноситель"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Температура замерзания",
          value: "-65°C"
        },
        {
          label: "Объем",
          value: "50 кг"
        },
        {
          label: "Цвет",
          value: "Зеленый"
        }
      ]
    },
    {
      id: "tjen-dlja-vodonagrevatelja-1-5-kvt-arctol-s-termoreguljatorom-s-gajkoj-i-prokladkoj",
      articul: "432611",
      title: "Тэн для водонагревателя 1,5 кВт ARCTOL с терморегулятором с гайкой и прокладкой",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 1200,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Россия",
        brend: "ARCTOL",
        tip: "ТЭН",
        moshhnost: "1, 5 кВт",
        napryazhenie: "220В",
        dlina: "300 мм"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "ARCTOL"
        },
        {
          label: "Тип",
          value: "ТЭН"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "1, 5 кВт"
        },
        {
          label: "Напряжение",
          value: "220В"
        },
        {
          label: "Длина",
          value: "300 мм"
        }
      ]
    },
    {
      id: "ustrojstvo-otbornoe-prjamoe-1-2-uo-11-01",
      articul: "428471",
      title: "Устройство отборное прямое 1/2 УО 11-01",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/10/428471-372x258.jpeg",
      price: 750,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Россия",
        brend: "УО",
        tip: "Отборное устройство",
        prisoedinenie: "1/2 дюйма",
        konfiguraciya: "Прямое",
        davlenie: "25 бар"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "УО"
        },
        {
          label: "Тип",
          value: "Отборное устройство"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Присоединение",
          value: "1/2 дюйма"
        },
        {
          label: "Конфигурация",
          value: "Прямое"
        },
        {
          label: "Давление",
          value: "25 бар"
        }
      ]
    }
  ]
};
