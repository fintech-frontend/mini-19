import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/instrument/yelektroinstrument/izmeritelno-razmetochnyy-instrumen/ruchnye-izmeritelnye-instrumenty/ */
export const ruchnyeIzmeritelnyeInstrumentyListing: CatalogListingData = {
  path: "instrument/yelektroinstrument/izmeritelno-razmetochnyy-instrumen/ruchnye-izmeritelnye-instrumenty",
  title: "Ручные измерительные инструменты",
  totalCountLabel: "41 товар",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Не указан",
        "Профи",
        "Энкор",
        "BRAUBERG",
        "FIT",
        "STAYER"
      ],
      truncate: false
    },
    {
      id: "dlina",
      title: "Длина",
      options: [
        "50 см",
        "150 мм",
        "200 мм",
        "300 мм",
        "1000 мм"
      ],
      truncate: false
    },
    {
      id: "konstrukciya",
      title: "Конструкция",
      options: [
        "Квадрант",
        "Переставной"
      ],
      truncate: false
    },
    {
      id: "material",
      title: "Материал",
      options: [
        "Металл",
        "Нержавеющая сталь",
        "Сталь"
      ],
      truncate: false
    },
    {
      id: "naznachenie",
      title: "Назначение",
      options: [
        "Бытовое использование",
        "Измерительные работы",
        "Поиск скрытых коммуникаций",
        "Профессиональные работы",
        "Резка пенопласта",
        "Угловые измерения",
        "Чертежные работы"
      ],
      truncate: true
    },
    {
      id: "tip",
      title: "Тип",
      options: [
        "Линейка",
        "Локатор отверстий",
        "Резак для пенопласта",
        "Угломер"
      ],
      truncate: false
    },
    {
      id: "shirina",
      title: "Ширина",
      options: [
        "19 мм",
        "28 мм"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "lineyka-brauberg-metal-50-sm",
      articul: "036933",
      title: "Линейка BRAUBERG метал 50 см",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/036933-372x303.jpeg",
      price: 140,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "BRAUBERG",
        tip: "Линейка",
        material: "Металл",
        dlina: "50 см",
        naznachenie: "Чертежные работы",
        "klass-tochnosti": "Стандартный"
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
          value: "BRAUBERG"
        },
        {
          label: "Тип",
          value: "Линейка"
        },
        {
          label: "Материал",
          value: "Металл"
        },
        {
          label: "Длина",
          value: "50 см"
        },
        {
          label: "Назначение",
          value: "Чертежные работы"
        },
        {
          label: "Класс точности",
          value: "Стандартный"
        }
      ]
    },
    {
      id: "lineyka-izmeritelnaya-1000-mm",
      articul: "036935",
      title: "Линейка измерительная 1000 мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/036935-372x248.jpeg",
      price: 700,
      inStock: false,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "Не указан",
        tip: "Линейка",
        material: "Металл",
        dlina: "1000 мм",
        naznachenie: "Измерительные работы",
        "klass-tochnosti": "Стандартный"
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
          value: "Не указан"
        },
        {
          label: "Тип",
          value: "Линейка"
        },
        {
          label: "Материал",
          value: "Металл"
        },
        {
          label: "Длина",
          value: "1000 мм"
        },
        {
          label: "Назначение",
          value: "Измерительные работы"
        },
        {
          label: "Класс точности",
          value: "Стандартный"
        }
      ]
    },
    {
      id: "lineyka-metallicheskaya-150-mm-19055-fit",
      articul: "036936",
      title: "Линейка металлическая 150 мм 19055 FIT",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/1365ef3a-3fda-11e4-9943-c8600046bc56_629205e9-a015-11ea-937f-002590ba8283-372x225.jpeg",
      price: 4440,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "FIT",
        tip: "Линейка",
        material: "Металл",
        dlina: "150 мм",
        naznachenie: "Бытовое использование",
        "klass-tochnosti": "Стандартный"
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
          value: "FIT"
        },
        {
          label: "Тип",
          value: "Линейка"
        },
        {
          label: "Материал",
          value: "Металл"
        },
        {
          label: "Длина",
          value: "150 мм"
        },
        {
          label: "Назначение",
          value: "Бытовое использование"
        },
        {
          label: "Класс точности",
          value: "Стандартный"
        }
      ]
    },
    {
      id: "lineyka-nerzhaveyushhaya-100028-mm-fit-19010",
      articul: "036937",
      title: "Линейка нержавеющая 1000*28* мм FIT 19010",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/fe240ccd-c554-11e7-8c8e-c8600046bc56_629205ea-a015-11ea-937f-002590ba8283-303x303.jpeg",
      price: 460,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "FIT",
        tip: "Линейка",
        material: "Нержавеющая сталь",
        dlina: "1000 мм",
        naznachenie: "Профессиональные работы",
        shirina: "28 мм"
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
          value: "FIT"
        },
        {
          label: "Тип",
          value: "Линейка"
        },
        {
          label: "Материал",
          value: "Нержавеющая сталь"
        },
        {
          label: "Длина",
          value: "1000 мм"
        },
        {
          label: "Назначение",
          value: "Профессиональные работы"
        },
        {
          label: "Ширина",
          value: "28 мм"
        }
      ]
    },
    {
      id: "lineyka-nerzhaveyushhaya-20019-mm-fit-19002",
      articul: "036938",
      title: "Линейка нержавеющая 200*19* мм FIT 19002,",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/a5fb86c0-44b4-11e4-84d1-c8600046bc56_629205eb-a015-11ea-937f-002590ba8283-372x159.jpeg",
      price: 65,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "FIT",
        tip: "Линейка",
        material: "Нержавеющая сталь",
        dlina: "200 мм",
        naznachenie: "Профессиональные работы",
        shirina: "19 мм"
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
          value: "FIT"
        },
        {
          label: "Тип",
          value: "Линейка"
        },
        {
          label: "Материал",
          value: "Нержавеющая сталь"
        },
        {
          label: "Длина",
          value: "200 мм"
        },
        {
          label: "Назначение",
          value: "Профессиональные работы"
        },
        {
          label: "Ширина",
          value: "19 мм"
        }
      ]
    },
    {
      id: "lineyka-nerzhaveyushhaya-30028-mm-fit-19003",
      articul: "036939",
      title: "Линейка нержавеющая 300*28* мм FIT 19003",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/e9a8154c-c554-11e7-8c8e-c8600046bc56_629205ec-a015-11ea-937f-002590ba8283-372x205.jpeg",
      price: 110,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "FIT",
        tip: "Линейка",
        material: "Нержавеющая сталь",
        dlina: "300 мм",
        naznachenie: "Профессиональные работы",
        shirina: "28 мм"
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
          value: "FIT"
        },
        {
          label: "Тип",
          value: "Линейка"
        },
        {
          label: "Материал",
          value: "Нержавеющая сталь"
        },
        {
          label: "Длина",
          value: "300 мм"
        },
        {
          label: "Назначение",
          value: "Профессиональные работы"
        },
        {
          label: "Ширина",
          value: "28 мм"
        }
      ]
    },
    {
      id: "lineyka-staln-1000mm-n-00385",
      articul: "036940",
      title: "Линейка стальн 1000мм Н 00385",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/036940-372x279.jpeg",
      price: 245,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "Не указан",
        tip: "Линейка",
        material: "Сталь",
        dlina: "1000 мм",
        naznachenie: "Профессиональные работы",
        "klass-tochnosti": "Стандартный"
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
          value: "Не указан"
        },
        {
          label: "Тип",
          value: "Линейка"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Длина",
          value: "1000 мм"
        },
        {
          label: "Назначение",
          value: "Профессиональные работы"
        },
        {
          label: "Класс точности",
          value: "Стандартный"
        }
      ]
    },
    {
      id: "lokator-otverstiy-3d",
      articul: "402908",
      title: "Локатор отверстий/3D",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/402908-303x303.jpeg",
      price: 1550,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "Не указан",
        tip: "Локатор отверстий",
        funkciya: "3D сканирование",
        naznachenie: "Поиск скрытых коммуникаций",
        pitanie: "Батарейки",
        "diapazon-obnaruzheniya": "До 50 мм"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Не указан"
        },
        {
          label: "Тип",
          value: "Локатор отверстий"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Функция",
          value: "3D сканирование"
        },
        {
          label: "Назначение",
          value: "Поиск скрытых коммуникаций"
        },
        {
          label: "Питание",
          value: "Батарейки"
        },
        {
          label: "Диапазон обнаружения",
          value: "До 50 мм"
        }
      ]
    },
    {
      id: "pribor-stayer-master-dlya-rezki-penoplasta-3-nasadk",
      articul: "401709",
      title: "Прибор STAYER MASTER для резки пенопласта 3 насадки 7 Вт 45257-НЗ",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/401709-372x248.jpeg",
      price: 2615,
      inStock: false,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "STAYER",
        tip: "Резак для пенопласта",
        moshhnost: "7 Вт",
        komplektaciya: "3 насадки",
        naznachenie: "Резка пенопласта",
        seriya: "MASTER"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "STAYER"
        },
        {
          label: "Тип",
          value: "Резак для пенопласта"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "7 Вт"
        },
        {
          label: "Комплектация",
          value: "3 насадки"
        },
        {
          label: "Назначение",
          value: "Резка пенопласта"
        },
        {
          label: "Серия",
          value: "MASTER"
        }
      ]
    },
    {
      id: "uglomer-kvadrant-180gr-700501-19301",
      articul: "072709",
      title: "Угломер квадрант 180гр 700501 19301",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/99f2e887-3a07-11e2-bc11-c8600046bc56_e0e99966-a017-11ea-937f-002590ba8283.jpeg",
      price: 235,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "Не указан",
        tip: "Угломер",
        "diapazon-izmerenij": "180 градусов",
        konstrukciya: "Квадрант",
        tochnost: "±0.5°",
        naznachenie: "Угловые измерения"
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
          value: "Не указан"
        },
        {
          label: "Тип",
          value: "Угломер"
        },
        {
          label: "Диапазон измерений",
          value: "180 градусов"
        },
        {
          label: "Конструкция",
          value: "Квадрант"
        },
        {
          label: "Точность",
          value: "±0.5°"
        },
        {
          label: "Назначение",
          value: "Угловые измерения"
        }
      ]
    },
    {
      id: "uglomer-perestavnoy-150-mm-yenkor-10873",
      articul: "072711",
      title: "Угломер переставной 150 мм Энкор 10873",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/072711-372x248.jpeg",
      price: 225,
      inStock: false,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "Энкор",
        tip: "Угломер",
        dlina: "150 мм",
        konstrukciya: "Переставной",
        tochnost: "±0.5°",
        naznachenie: "Угловые измерения",
        material: "Металл"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Энкор"
        },
        {
          label: "Тип",
          value: "Угломер"
        },
        {
          label: "Длина",
          value: "150 мм"
        },
        {
          label: "Конструкция",
          value: "Переставной"
        },
        {
          label: "Точность",
          value: "±0.5°"
        },
        {
          label: "Назначение",
          value: "Угловые измерения"
        },
        {
          label: "Материал",
          value: "Металл"
        }
      ]
    },
    {
      id: "uglomer-kvadrant-profi-19317",
      articul: "072713",
      title: "Угломер-квадрант Профи 19317",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/5b3c17c4-30c7-11e2-a1f1-c8600046bc56_e0e99968-a017-11ea-937f-002590ba8283-303x303.jpeg",
      price: 650,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Китай",
        brend: "Профи",
        tip: "Угломер",
        konstrukciya: "Квадрант",
        "diapazon-izmerenij": "180 градусов",
        tochnost: "±0.5°",
        naznachenie: "Угловые измерения",
        material: "Металл"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Профи"
        },
        {
          label: "Тип",
          value: "Угломер"
        },
        {
          label: "Конструкция",
          value: "Квадрант"
        },
        {
          label: "Диапазон измерений",
          value: "180 градусов"
        },
        {
          label: "Точность",
          value: "±0.5°"
        },
        {
          label: "Назначение",
          value: "Угловые измерения"
        },
        {
          label: "Материал",
          value: "Металл"
        }
      ]
    }
  ]
};
