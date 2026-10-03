import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/otdelochnye-materialy/oboi/oboi-zhidkie/ */
export const oboiZhidkieListing: CatalogListingData = {
  path: "otdelochnye-materialy/oboi/oboi-zhidkie",
  title: "Обои жидкие",
  totalCountLabel: "22 товара",
  filterFields: [
    {
      id: "rashod",
      title: "Расход",
      options: [
        "1 упаковка на 4-5 м²",
        "1 упаковка на 5-6 м²",
        "3-4 кв.м."
      ],
      truncate: false
    },
    {
      id: "vodostojkost",
      title: "Водостойкость",
      options: [
        "Моющиеся",
        "Не моющиеся"
      ],
      truncate: false
    },
    {
      id: "vremya-vysyhaniya",
      title: "Время высыхания",
      options: [
        "18-24 часа",
        "24-48 часов",
        "48-72 часа"
      ],
      truncate: false
    },
    {
      id: "kollekciya",
      title: "Коллекция",
      options: [
        "Арт Дизайн",
        "Люрекс",
        "Мастер",
        "Точечные"
      ],
      truncate: false
    },
    {
      id: "osnova",
      title: "Основа",
      options: [
        "Полиэстер с металлизированным покрытием",
        "Хлопково-целлюлозная",
        "Целлюлозная",
        "Целлюлозная с влагостойкими добавками",
        "Целлюлозно-хлопковая",
        "Целлюлозно-хлопковая с натуральными волокнами",
        "Целлюлозно-шелковая",
        "Целлюлозно-шелковая с декоративными волокнами"
      ],
      truncate: true
    },
    {
      id: "razmer-chastic",
      title: "Размер частиц",
      options: [
        "0.5-1.5 мм",
        "1-3 мм"
      ],
      truncate: false
    },
    {
      id: "seriya",
      title: "Серия",
      options: [
        "2",
        "3",
        "4",
        "15",
        "19",
        "280"
      ],
      truncate: false
    },
    {
      id: "tip",
      title: "Тип",
      options: [
        "Блестки декоративные",
        "Жидкие обои"
      ],
      truncate: false
    },
    {
      id: "fasovka",
      title: "Фасовка",
      options: [
        "Пакет 1 кг",
        "Пакет 15 г",
        "Пакет 20 г"
      ],
      truncate: false
    },
    {
      id: "forma",
      title: "Форма",
      options: [
        "Круглые точки",
        "Чешуйки"
      ],
      truncate: false
    },
    {
      id: "frakciya-napolnitelya",
      title: "Фракция наполнителя",
      options: [
        "0.5-1.5 мм",
        "1-2 мм",
        "1-3 мм",
        "2-5 мм",
        "3-8 мм"
      ],
      truncate: false
    },
    {
      id: "cvet",
      title: "Цвет",
      options: [
        "Золото",
        "Кремовый",
        "Светло-серый",
        "Серебро",
        "Универсальный (требует колеровки)"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "blestki-lyureks-na-zhidkie-oboi-zoloto",
      articul: "014720",
      title: "Блестки люрекс на жидкие обои Золото",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/014720-1-271x303.jpeg",
      price: 65,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Silk Plast",
        strana: "Россия",
        tip: "Блестки декоративные",
        cvet: "Золото",
        rashod: "3-4 кв.м.",
        forma: "Чешуйки",
        "razmer-chastic": "1-3 мм",
        osnova: "Полиэстер с металлизированным покрытием",
        naznachenie: "Для жидких обоев",
        fasovka: "Пакет 20 г"
      },
      specs: [
        {
          label: "Бренд",
          value: "Silk Plast"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Блестки декоративные"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Артикул",
          value: "014720"
        },
        {
          label: "Цвет",
          value: "Золото"
        },
        {
          label: "Расход",
          value: "3-4 кв.м."
        },
        {
          label: "Форма",
          value: "Чешуйки"
        },
        {
          label: "Размер частиц",
          value: "1-3 мм"
        },
        {
          label: "Основа",
          value: "Полиэстер с металлизированным покрытием"
        },
        {
          label: "Назначение",
          value: "Для жидких обоев"
        },
        {
          label: "Фасовка",
          value: "Пакет 20 г"
        }
      ]
    },
    {
      id: "blestki-lyureks-na-zhidkie-oboi-serebro",
      articul: "014721",
      title: "Блестки люрекс на жидкие обои Серебро",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/014721-239x303.jpeg",
      price: 65,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Silk Plast",
        strana: "Россия",
        tip: "Блестки декоративные",
        kollekciya: "Люрекс",
        cvet: "Серебро",
        rashod: "3-4 кв.м.",
        forma: "Чешуйки",
        "razmer-chastic": "1-3 мм",
        osnova: "Полиэстер с металлизированным покрытием",
        naznachenie: "Для жидких обоев",
        fasovka: "Пакет 20 г"
      },
      specs: [
        {
          label: "Бренд",
          value: "Silk Plast"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Блестки декоративные"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Коллекция",
          value: "Люрекс"
        },
        {
          label: "Цвет",
          value: "Серебро"
        },
        {
          label: "Расход",
          value: "3-4 кв.м."
        },
        {
          label: "Форма",
          value: "Чешуйки"
        },
        {
          label: "Размер частиц",
          value: "1-3 мм"
        },
        {
          label: "Основа",
          value: "Полиэстер с металлизированным покрытием"
        },
        {
          label: "Назначение",
          value: "Для жидких обоев"
        },
        {
          label: "Фасовка",
          value: "Пакет 20 г"
        }
      ]
    },
    {
      id: "blestki-tochechnye-na-zhidkie-oboi-zolot",
      articul: "014722",
      title: "Блестки точечные на жидкие обои Золото",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/014722-234x303.jpeg",
      price: 65,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Silk Plast",
        strana: "Россия",
        tip: "Блестки декоративные",
        kollekciya: "Точечные",
        cvet: "Золото",
        rashod: "3-4 кв.м.",
        forma: "Круглые точки",
        "razmer-chastic": "0.5-1.5 мм",
        osnova: "Полиэстер с металлизированным покрытием",
        naznachenie: "Для жидких обоев",
        fasovka: "Пакет 15 г"
      },
      specs: [
        {
          label: "Бренд",
          value: "Silk Plast"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Блестки декоративные"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Коллекция",
          value: "Точечные"
        },
        {
          label: "Цвет",
          value: "Золото"
        },
        {
          label: "Расход",
          value: "3-4 кв.м."
        },
        {
          label: "Форма",
          value: "Круглые точки"
        },
        {
          label: "Размер частиц",
          value: "0.5-1.5 мм"
        },
        {
          label: "Основа",
          value: "Полиэстер с металлизированным покрытием"
        },
        {
          label: "Назначение",
          value: "Для жидких обоев"
        },
        {
          label: "Фасовка",
          value: "Пакет 15 г"
        }
      ]
    },
    {
      id: "blestki-tochechnye-na-zhidkie-oboi-sereb",
      articul: "014723",
      title: "Блестки точечные на жидкие обои Серебро",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/014723-215x303.jpeg",
      price: 65,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Silk Plast",
        strana: "Россия",
        tip: "Блестки декоративные",
        kollekciya: "Точечные",
        cvet: "Серебро",
        rashod: "3-4 кв.м.",
        forma: "Круглые точки",
        "razmer-chastic": "0.5-1.5 мм",
        osnova: "Полиэстер с металлизированным покрытием",
        naznachenie: "Для жидких обоев",
        fasovka: "Пакет 15 г"
      },
      specs: [
        {
          label: "Бренд",
          value: "Silk Plast"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Блестки декоративные"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Коллекция",
          value: "Точечные"
        },
        {
          label: "Цвет",
          value: "Серебро"
        },
        {
          label: "Расход",
          value: "3-4 кв.м."
        },
        {
          label: "Форма",
          value: "Круглые точки"
        },
        {
          label: "Размер частиц",
          value: "0.5-1.5 мм"
        },
        {
          label: "Основа",
          value: "Полиэстер с металлизированным покрытием"
        },
        {
          label: "Назначение",
          value: "Для жидких обоев"
        },
        {
          label: "Фасовка",
          value: "Пакет 15 г"
        }
      ]
    },
    {
      id: "oboi-zhidkie-art-dizajn-280",
      articul: "047896",
      title: "Обои жидкие Арт Дизайн 280 У",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/05/047896-303x303.jpeg",
      price: 802,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Silk Plast",
        ves: "1 кг",
        strana: "Россия",
        tip: "Жидкие обои",
        kollekciya: "Арт Дизайн",
        seriya: "280",
        cvet: "Универсальный (требует колеровки)",
        vodostojkost: "Моющиеся",
        rashod: "3-4 кв.м.",
        osnova: "Целлюлозно-шелковая с декоративными волокнами",
        "vremya-vysyhaniya": "48-72 часа",
        "frakciya-napolnitelya": "3-8 мм",
        fasovka: "Пакет 1 кг"
      },
      specs: [
        {
          label: "Бренд",
          value: "Silk Plast"
        },
        {
          label: "Вес",
          value: "1 кг"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Жидкие обои"
        },
        {
          label: "Коллекция",
          value: "Арт Дизайн"
        },
        {
          label: "Серия",
          value: "280"
        },
        {
          label: "Цвет",
          value: "Универсальный (требует колеровки)"
        },
        {
          label: "Водостойкость",
          value: "Моющиеся"
        },
        {
          label: "Расход",
          value: "3-4 кв.м."
        },
        {
          label: "Основа",
          value: "Целлюлозно-шелковая с декоративными волокнами"
        },
        {
          label: "Время высыхания",
          value: "48-72 часа"
        },
        {
          label: "Фракция наполнителя",
          value: "3-8 мм"
        },
        {
          label: "Фасовка",
          value: "Пакет 1 кг"
        }
      ]
    },
    {
      id: "oboi-zhidkie-viktorija-b-703",
      articul: "047914",
      title: "Обои жидкие Виктория Б-703",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/07/8-735-305x303.jpeg",
      price: 1235,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        vodostojkost: "Не моющиеся"
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
          label: "Водостойкость",
          value: "Не моющиеся"
        }
      ]
    },
    {
      id: "oboi-zhidkie-viktoriya-b-713",
      articul: "047921",
      title: "Обои жидкие Виктория Б-713 У",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/2d6d0d49-9829-11e2-ac56-c8600046bc56_1955336f-95e5-11ea-937d-002590ba8283-303x303.jpeg",
      price: 802,
      inStock: true,
      quickBuy: true,
      filterValues: {
        ves: "1 кг",
        brend: "Silk Plast",
        strana: "Россия",
        tip: "Жидкие обои",
        cvet: "Универсальный (требует колеровки)",
        osnova: "Целлюлозно-хлопковая",
        vodostojkost: "Не моющиеся",
        rashod: "1 упаковка на 4-5 м²",
        nelikvid: "Да",
        "vremya-vysyhaniya": "24-48 часов",
        "frakciya-napolnitelya": "1-3 мм",
        fasovka: "Пакет 1 кг"
      },
      specs: [
        {
          label: "Вес",
          value: "1 кг"
        },
        {
          label: "Бренд",
          value: "Silk Plast"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Жидкие обои"
        },
        {
          label: "Артикул",
          value: "Б-713"
        },
        {
          label: "Цвет",
          value: "Универсальный (требует колеровки)"
        },
        {
          label: "Основа",
          value: "Целлюлозно-хлопковая"
        },
        {
          label: "Водостойкость",
          value: "Не моющиеся"
        },
        {
          label: "Расход",
          value: "1 упаковка на 4-5 м²"
        },
        {
          label: "Неликвид",
          value: "Да"
        },
        {
          label: "Время высыхания",
          value: "24-48 часов"
        },
        {
          label: "Фракция наполнителя",
          value: "1-3 мм"
        },
        {
          label: "Фасовка",
          value: "Пакет 1 кг"
        }
      ]
    },
    {
      id: "oboi-zhidkie-master-15",
      articul: "047940",
      title: "Обои жидкие Мастер 15",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/56f41d11-81fd-11e9-a98c-c8600046bc56_19553377-95e5-11ea-937d-002590ba8283-302x303.jpeg",
      price: 699,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Silk Plast",
        strana: "Россия",
        tip: "Жидкие обои",
        kollekciya: "Мастер",
        seriya: "15",
        ves: "1 кг",
        cvet: "Кремовый",
        vodostojkost: "Не моющиеся",
        osnova: "Хлопково-целлюлозная",
        rashod: "3-4 кв.м.",
        "vremya-vysyhaniya": "24-48 часов",
        "frakciya-napolnitelya": "1-3 мм",
        fasovka: "Пакет 1 кг"
      },
      specs: [
        {
          label: "Бренд",
          value: "Silk Plast"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Жидкие обои"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Коллекция",
          value: "Мастер"
        },
        {
          label: "Серия",
          value: "15"
        },
        {
          label: "Вес",
          value: "1 кг"
        },
        {
          label: "Цвет",
          value: "Кремовый"
        },
        {
          label: "Водостойкость",
          value: "Не моющиеся"
        },
        {
          label: "Основа",
          value: "Хлопково-целлюлозная"
        },
        {
          label: "Расход",
          value: "3-4 кв.м."
        },
        {
          label: "Время высыхания",
          value: "24-48 часов"
        },
        {
          label: "Фракция наполнителя",
          value: "1-3 мм"
        },
        {
          label: "Фасовка",
          value: "Пакет 1 кг"
        }
      ]
    },
    {
      id: "oboi-zhidkie-master-19",
      articul: "047942",
      title: "Обои жидкие Мастер 19 У М",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/117176ca-878c-11e9-a98d-c8600046bc56_19553379-95e5-11ea-937d-002590ba8283-302x303.jpeg",
      price: 492,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "Silk Plast",
        strana: "Россия",
        tip: "Жидкие обои",
        kollekciya: "Мастер",
        seriya: "19",
        ves: "1 кг",
        cvet: "Универсальный (требует колеровки)",
        vodostojkost: "Не моющиеся",
        osnova: "Целлюлозно-хлопковая с натуральными волокнами",
        rashod: "3-4 кв.м.",
        "vremya-vysyhaniya": "48-72 часа",
        "frakciya-napolnitelya": "2-5 мм",
        fasovka: "Пакет 1 кг"
      },
      specs: [
        {
          label: "Бренд",
          value: "Silk Plast"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Жидкие обои"
        },
        {
          label: "Коллекция",
          value: "Мастер"
        },
        {
          label: "Серия",
          value: "19"
        },
        {
          label: "Вес",
          value: "1 кг"
        },
        {
          label: "Цвет",
          value: "Универсальный (требует колеровки)"
        },
        {
          label: "Водостойкость",
          value: "Не моющиеся"
        },
        {
          label: "Основа",
          value: "Целлюлозно-хлопковая с натуральными волокнами"
        },
        {
          label: "Расход",
          value: "3-4 кв.м."
        },
        {
          label: "Время высыхания",
          value: "48-72 часа"
        },
        {
          label: "Фракция наполнителя",
          value: "2-5 мм"
        },
        {
          label: "Фасовка",
          value: "Пакет 1 кг"
        }
      ]
    },
    {
      id: "oboi-zhidkie-master-2",
      articul: "047943",
      title: "Обои жидкие Мастер 2 У М",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/252555a0-878c-11e9-a98d-c8600046bc56_1955337b-95e5-11ea-937d-002590ba8283-302x303.jpeg",
      price: 593,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Silk Plast",
        strana: "Россия",
        tip: "Жидкие обои",
        kollekciya: "Мастер",
        seriya: "2",
        cvet: "Универсальный (требует колеровки)",
        vodostojkost: "Не моющиеся",
        osnova: "Целлюлозная",
        rashod: "1 упаковка на 5-6 м²",
        "vremya-vysyhaniya": "18-24 часа",
        "frakciya-napolnitelya": "0.5-1.5 мм",
        fasovka: "Пакет 1 кг"
      },
      specs: [
        {
          label: "Бренд",
          value: "Silk Plast"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Жидкие обои"
        },
        {
          label: "Коллекция",
          value: "Мастер"
        },
        {
          label: "Серия",
          value: "2"
        },
        {
          label: "Цвет",
          value: "Универсальный (требует колеровки)"
        },
        {
          label: "Водостойкость",
          value: "Не моющиеся"
        },
        {
          label: "Основа",
          value: "Целлюлозная"
        },
        {
          label: "Расход",
          value: "1 упаковка на 5-6 м²"
        },
        {
          label: "Время высыхания",
          value: "18-24 часа"
        },
        {
          label: "Фракция наполнителя",
          value: "0.5-1.5 мм"
        },
        {
          label: "Фасовка",
          value: "Пакет 1 кг"
        }
      ]
    },
    {
      id: "oboi-zhidkie-master-3",
      articul: "047944",
      title: "Обои жидкие Мастер 3 У",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/332b8ba7-878c-11e9-a98d-c8600046bc56_1955337c-95e5-11ea-937d-002590ba8283-302x303.jpeg",
      price: 461,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Silk Plast",
        strana: "Россия",
        tip: "Жидкие обои",
        kollekciya: "Мастер",
        seriya: "3",
        cvet: "Универсальный (требует колеровки)",
        vodostojkost: "Не моющиеся",
        osnova: "Целлюлозно-шелковая",
        rashod: "1 упаковка на 4-5 м²",
        "vremya-vysyhaniya": "24-48 часов",
        "frakciya-napolnitelya": "1-2 мм",
        fasovka: "Пакет 1 кг"
      },
      specs: [
        {
          label: "Бренд",
          value: "Silk Plast"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Жидкие обои"
        },
        {
          label: "Коллекция",
          value: "Мастер"
        },
        {
          label: "Серия",
          value: "3"
        },
        {
          label: "Цвет",
          value: "Универсальный (требует колеровки)"
        },
        {
          label: "Водостойкость",
          value: "Не моющиеся"
        },
        {
          label: "Основа",
          value: "Целлюлозно-шелковая"
        },
        {
          label: "Расход",
          value: "1 упаковка на 4-5 м²"
        },
        {
          label: "Время высыхания",
          value: "24-48 часов"
        },
        {
          label: "Фракция наполнителя",
          value: "1-2 мм"
        },
        {
          label: "Фасовка",
          value: "Пакет 1 кг"
        }
      ]
    },
    {
      id: "oboi-zhidkie-master-4",
      articul: "047945",
      title: "Обои жидкие Мастер 4",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/41da9359-878c-11e9-a98d-c8600046bc56_1955337e-95e5-11ea-937d-002590ba8283-302x303.jpeg",
      price: 699,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Silk Plast",
        strana: "Россия",
        tip: "Жидкие обои",
        kollekciya: "Мастер",
        seriya: "4",
        cvet: "Светло-серый",
        vodostojkost: "Не моющиеся",
        osnova: "Целлюлозная с влагостойкими добавками",
        rashod: "1 упаковка на 4-5 м²",
        "vremya-vysyhaniya": "24-48 часов",
        "frakciya-napolnitelya": "1-3 мм",
        fasovka: "Пакет 1 кг"
      },
      specs: [
        {
          label: "Бренд",
          value: "Silk Plast"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Жидкие обои"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Коллекция",
          value: "Мастер"
        },
        {
          label: "Серия",
          value: "4"
        },
        {
          label: "Цвет",
          value: "Светло-серый"
        },
        {
          label: "Водостойкость",
          value: "Не моющиеся"
        },
        {
          label: "Основа",
          value: "Целлюлозная с влагостойкими добавками"
        },
        {
          label: "Расход",
          value: "1 упаковка на 4-5 м²"
        },
        {
          label: "Время высыхания",
          value: "24-48 часов"
        },
        {
          label: "Фракция наполнителя",
          value: "1-3 мм"
        },
        {
          label: "Фасовка",
          value: "Пакет 1 кг"
        }
      ]
    }
  ]
};
