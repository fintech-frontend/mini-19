import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/instrument/yelektroinstrument/izmeritelno-razmetochnyy-instrumen/lazernye-niveliry-i-dalnomery/ */
export const lazernyeNiveliryIDalnomeryListing: CatalogListingData = {
  path: "instrument/yelektroinstrument/izmeritelno-razmetochnyy-instrumen/lazernye-niveliry-i-dalnomery",
  title: "Лазерные нивелиры и дальномеры",
  totalCountLabel: "88 товаров",
  filterFields: [
    {
      id: "dlina",
      title: "Длина",
      options: [
        "20м",
        "40м",
        "150м"
      ],
      truncate: false
    },
    {
      id: "dalnost-izmereniya",
      title: "Дальность измерения",
      options: [
        "20 м",
        "40 м",
        "60 м",
        "80 м",
        "100 м",
        "120 м"
      ],
      truncate: false
    },
    {
      id: "pamyat",
      title: "Память",
      options: [
        "10 измерений",
        "20 измерений",
        "30 измерений"
      ],
      truncate: false
    },
    {
      id: "tip",
      title: "Тип",
      options: [
        "Лазерный",
        "Лазерный дальномер"
      ],
      truncate: false
    },
    {
      id: "tochnost",
      title: "Точность",
      options: [
        "±1.0 мм",
        "±1.5 мм",
        "±2 мм"
      ],
      truncate: false
    },
    {
      id: "ekran",
      title: "Экран",
      options: [
        "Монохромный",
        "Цветной сенсорный",
        "Цветной LCD"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "dalnomer-dl-40",
      articul: "010334",
      title: "Дальномер ДЛ-40",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/010334-372x248.jpeg",
      price: 4030,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Condtrol",
        tip: "Лазерный дальномер",
        "dalnost-izmereniya": "40 м",
        tochnost: "±1.5 мм",
        "klass-lazera": "2",
        osobennosti: "Компактный размер, автоматические вычисления"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Condtrol"
        },
        {
          label: "Тип",
          value: "Лазерный дальномер"
        },
        {
          label: "Дальность измерения",
          value: "40 м"
        },
        {
          label: "Точность",
          value: "±1.5 мм"
        },
        {
          label: "Класс лазера",
          value: "2"
        },
        {
          label: "Особенности",
          value: "Компактный размер, автоматические вычисления"
        }
      ]
    },
    {
      id: "dalnomer-dl-60",
      articul: "010335",
      title: "Дальномер ДЛ-60",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/010335-303x303.jpg",
      price: 4920,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Condtrol",
        tip: "Лазерный дальномер",
        "dalnost-izmereniya": "60 м",
        tochnost: "±1.5 мм",
        "klass-lazera": "2",
        osobennosti: "Увеличенная дальность, функция Пифагора"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Condtrol"
        },
        {
          label: "Тип",
          value: "Лазерный дальномер"
        },
        {
          label: "Дальность измерения",
          value: "60 м"
        },
        {
          label: "Точность",
          value: "±1.5 мм"
        },
        {
          label: "Класс лазера",
          value: "2"
        },
        {
          label: "Особенности",
          value: "Увеличенная дальность, функция Пифагора"
        }
      ]
    },
    {
      id: "dalnomer-lazernyy-condtrol-smart-20",
      articul: "005437",
      title: "Дальномер лазерный Condtrol Smart 20 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/3eb0564b-bb1e-11e7-96aa-c8600046bc56_748c8f54-a015-11ea-937f-002590ba8283-303x303.jpeg",
      price: 276360,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Condtrol",
        tip: "Лазерный",
        "dalnost-izmereniya": "20 м",
        dlina: "20м",
        tochnost: "±2 мм",
        pamyat: "10 измерений",
        osobennosti: "Экономичная модель для бытового использования",
        tsvet: "Красный"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Condtrol"
        },
        {
          label: "Тип",
          value: "Лазерный дальномер"
        },
        {
          label: "Дальность измерения",
          value: "20 м"
        },
        {
          label: "Длина",
          value: "20м"
        },
        {
          label: "Точность",
          value: "±2 мм"
        },
        {
          label: "Память",
          value: "10 измерений"
        },
        {
          label: "Тип материала",
          value: "Лазерный"
        },
        {
          label: "Особенности",
          value: "Экономичная модель для бытового использования"
        },
        {
          label: "Цвет",
          value: "Красный"
        }
      ]
    },
    {
      id: "dalnomer-lazernyy-condtrol-smart-40",
      articul: "005505",
      title: "Дальномер лазерный Condtrol Smart 40",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/dcd23634-761e-11e8-984a-c8600046bc56_748c8f55-a015-11ea-937f-002590ba8283-303x303.jpeg",
      price: 4004,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Condtrol",
        dlina: "40м",
        tip: "Лазерный",
        "dalnost-izmereniya": "40 м",
        tochnost: "±1.5 мм",
        tsvet: "Красный",
        pamyat: "20 измерений",
        osobennosti: "Подсветка дисплея, автоматическое отключение"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Condtrol"
        },
        {
          label: "Длина",
          value: "40м"
        },
        {
          label: "Тип",
          value: "Лазерный дальномер"
        },
        {
          label: "Дальность измерения",
          value: "40 м"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Точность",
          value: "±1.5 мм"
        },
        {
          label: "Цвет",
          value: "Красный"
        },
        {
          label: "Память",
          value: "20 измерений"
        },
        {
          label: "Особенности",
          value: "Подсветка дисплея, автоматическое отключение"
        },
        {
          label: "Тип материала",
          value: "Лазерный"
        }
      ]
    },
    {
      id: "dalnomer-lazernyy-condtrol-smart-60",
      articul: "008050",
      title: "Дальномер лазерный Condtrol Smart 60",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/1b8c9f33-f60d-11e7-a5df-c8600046bc56_748c8f56-a015-11ea-937f-002590ba8283-136x303.jpeg",
      price: 4190,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Condtrol",
        tip: "Лазерный дальномер",
        "dalnost-izmereniya": "60 м",
        tochnost: "±1.5 мм",
        tsvet: "Красный",
        pamyat: "30 измерений",
        osobennosti: "Функция трекинга, расчет площади и объема"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Condtrol"
        },
        {
          label: "Тип",
          value: "Лазерный дальномер"
        },
        {
          label: "Дальность измерения",
          value: "60 м"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Точность",
          value: "±1.5 мм"
        },
        {
          label: "Цвет",
          value: "Красный"
        },
        {
          label: "Память",
          value: "30 измерений"
        },
        {
          label: "Особенности",
          value: "Функция трекинга, расчет площади и объема"
        }
      ]
    },
    {
      id: "dalnomer-lazernyy-condtrol-unix360-set",
      articul: "009277",
      title: "Дальномер лазерный Condtrol Unix360 Set",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/85531f08-6096-11e6-a9ea-c8600046bc56_748c8f57-a015-11ea-937f-002590ba8283-253x303.jpeg",
      price: 11750,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Condtrol",
        tip: "Лазерный дальномер",
        "dalnost-izmereniya": "60 м",
        tochnost: "±1.5 мм",
        tsvet: "Красный",
        komplektaciya: "С кейсом и аксессуарами",
        osobennosti: "Полный набор для профессиональных измерений"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Condtrol"
        },
        {
          label: "Тип",
          value: "Лазерный дальномер"
        },
        {
          label: "Дальность измерения",
          value: "60 м"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Точность",
          value: "±1.5 мм"
        },
        {
          label: "Цвет",
          value: "Красный"
        },
        {
          label: "Комплектация",
          value: "С кейсом и аксессуарами"
        },
        {
          label: "Особенности",
          value: "Полный набор для профессиональных измерений"
        }
      ]
    },
    {
      id: "dalnomer-lazernyy-condtrol-x1",
      articul: "125493",
      title: "Дальномер лазерный Condtrol X1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/d452bcac-30c5-11e2-a1f1-c8600046bc56_748c8f58-a015-11ea-937f-002590ba8283-372x303.jpeg",
      price: 2350,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Condtrol",
        tip: "Лазерный дальномер",
        "dalnost-izmereniya": "80 м",
        tochnost: "±1.5 мм",
        tsvet: "Красный",
        ekran: "Цветной LCD",
        osobennosti: "Ударопрочный корпус, защита от пыли и влаги"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Condtrol"
        },
        {
          label: "Тип",
          value: "Лазерный дальномер"
        },
        {
          label: "Дальность измерения",
          value: "80 м"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Точность",
          value: "±1.5 мм"
        },
        {
          label: "Цвет",
          value: "Красный"
        },
        {
          label: "Экран",
          value: "Цветной LCD"
        },
        {
          label: "Особенности",
          value: "Ударопрочный корпус, защита от пыли и влаги"
        }
      ]
    },
    {
      id: "dalnomer-lazernyy-condtrol-x1-late",
      articul: "006612",
      title: "Дальномер лазерный Condtrol X1 LATE",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/7386efe9-a55b-11e5-9d74-c8600046bc56_748c8f59-a015-11ea-937f-002590ba8283-160x303.jpeg",
      price: 3140,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Condtrol",
        tip: "Лазерный дальномер",
        "dalnost-izmereniya": "80 м",
        tochnost: "±1.5 мм",
        tsvet: "Красный",
        ekran: "Монохромный",
        osobennosti: "Базовая модель серии X1"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Condtrol"
        },
        {
          label: "Тип",
          value: "Лазерный дальномер"
        },
        {
          label: "Дальность измерения",
          value: "80 м"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Точность",
          value: "±1.5 мм"
        },
        {
          label: "Цвет",
          value: "Красный"
        },
        {
          label: "Экран",
          value: "Монохромный"
        },
        {
          label: "Особенности",
          value: "Базовая модель серии X1"
        }
      ]
    },
    {
      id: "dalnomer-lazernyy-condtrol-x1-plus",
      articul: "010164",
      title: "Дальномер лазерный Condtrol X1 PLUS",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/7bd322c2-7f71-11e3-b179-c8600046bc56_a9f04073-a0f3-11ea-9380-002590ba8283-372x303.jpeg",
      price: 4500,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Condtrol",
        tip: "Лазерный дальномер",
        "dalnost-izmereniya": "80 м",
        tochnost: "±1.5 мм",
        tsvet: "Красный",
        ekran: "Цветной LCD",
        osobennosti: "Улучшенный функционал, Bluetooth"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Condtrol"
        },
        {
          label: "Тип",
          value: "Лазерный дальномер"
        },
        {
          label: "Дальность измерения",
          value: "80 м"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Точность",
          value: "±1.5 мм"
        },
        {
          label: "Цвет",
          value: "Красный"
        },
        {
          label: "Экран",
          value: "Цветной LCD"
        },
        {
          label: "Особенности",
          value: "Улучшенный функционал, Bluetooth"
        }
      ]
    },
    {
      id: "dalnomer-lazernyy-condtrol-x2",
      articul: "125437",
      title: "Дальномер лазерный Condtrol X2",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/d452bcae-30c5-11e2-a1f1-c8600046bc56_748c8f5a-a015-11ea-937f-002590ba8283-303x303.jpeg",
      price: 3250,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Condtrol",
        tip: "Лазерный дальномер",
        "dalnost-izmereniya": "100 м",
        tochnost: "±1.0 мм",
        tsvet: "Красный",
        ekran: "Цветной сенсорный",
        osobennosti: "Профессиональная модель с расширенными функциями"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Condtrol"
        },
        {
          label: "Тип",
          value: "Лазерный дальномер"
        },
        {
          label: "Дальность измерения",
          value: "100 м"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Точность",
          value: "±1.0 мм"
        },
        {
          label: "Цвет",
          value: "Красный"
        },
        {
          label: "Экран",
          value: "Цветной сенсорный"
        },
        {
          label: "Особенности",
          value: "Профессиональная модель с расширенными функциями"
        }
      ]
    },
    {
      id: "dalnomer-lazernyy-condtrol-x2-plus",
      articul: "010165",
      title: "Дальномер лазерный Condtrol X2 PLUS",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/8b89f853-7f71-11e3-b179-c8600046bc56_748c8f5b-a015-11ea-937f-002590ba8283-303x303.jpeg",
      price: 5555,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Condtrol",
        tip: "Лазерный дальномер",
        "dalnost-izmereniya": "100 м",
        tochnost: "±1.0 мм",
        tsvet: "Красный",
        ekran: "Цветной сенсорный",
        osobennosti: "Wi-Fi подключение, мобильное приложение"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Condtrol"
        },
        {
          label: "Тип",
          value: "Лазерный дальномер"
        },
        {
          label: "Дальность измерения",
          value: "100 м"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Точность",
          value: "±1.0 мм"
        },
        {
          label: "Цвет",
          value: "Красный"
        },
        {
          label: "Экран",
          value: "Цветной сенсорный"
        },
        {
          label: "Особенности",
          value: "Wi-Fi подключение, мобильное приложение"
        }
      ]
    },
    {
      id: "dalnomer-lazernyy-condtrol-xp4-pro",
      articul: "000647",
      title: "Дальномер лазерный Condtrol XP4 Pro УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/53cf5da3-e82f-11ea-938d-002590ba8283_3ba1102a-1bfd-11ee-9400-002590ba8282-303x303.jpeg",
      price: 1595160,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Condtrol",
        tip: "Лазерный",
        "dalnost-izmereniya": "120 м",
        dlina: "150м",
        tochnost: "±1.0 мм",
        ekran: "Цветной сенсорный",
        osobennosti: "Профессиональная модель для строительства",
        tsvet: "Красный"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Condtrol"
        },
        {
          label: "Тип",
          value: "Лазерный дальномер"
        },
        {
          label: "Дальность измерения",
          value: "120 м"
        },
        {
          label: "Длина",
          value: "150м"
        },
        {
          label: "Точность",
          value: "±1.0 мм"
        },
        {
          label: "Экран",
          value: "Цветной сенсорный"
        },
        {
          label: "Тип материала",
          value: "Лазерный"
        },
        {
          label: "Особенности",
          value: "Профессиональная модель для строительства"
        },
        {
          label: "Цвет",
          value: "Красный"
        }
      ]
    }
  ]
};
