import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/instrument/yelektroinstrument/pnevmoinstrumenty-kompressory-i-kom/pnevmoinstrument/ */
export const pnevmoinstrumentListing: CatalogListingData = {
  path: "instrument/yelektroinstrument/pnevmoinstrumenty-kompressory-i-kom/pnevmoinstrument",
  title: "Пневмоинструмент",
  totalCountLabel: "51 товар",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Camo",
        "Fubag",
        "HYBESR",
        "Matrix",
        "TOUA"
      ],
      truncate: false
    },
    {
      id: "diapazon-gvozdej",
      title: "Диапазон гвоздей",
      options: [
        "10-50 мм",
        "20-50 мм",
        "40 мм",
        "40-50 мм",
        "50 мм"
      ],
      truncate: false
    },
    {
      id: "model",
      title: "Модель",
      options: [
        "2 в 1 F40",
        "3 в 1 F50",
        "57410",
        "F50",
        "GBW200",
        "GSN50E",
        "GSR40A",
        "Pro-NB 5"
      ],
      truncate: true
    },
    {
      id: "naznachenie",
      title: "Назначение",
      options: [
        "Для бетона",
        "Для теплоизоляции",
        "Монтажные работы"
      ],
      truncate: false
    },
    {
      id: "osobennosti",
      title: "Особенности",
      options: [
        "2 в 1",
        "3 в 1",
        "Электрический воспламенитель"
      ],
      truncate: false
    },
    {
      id: "privod",
      title: "Привод",
      options: [
        "Газовый",
        "Механический",
        "Пневматический"
      ],
      truncate: false
    },
    {
      id: "tip",
      title: "Тип",
      options: [
        "Газовый монтажный пистолет",
        "Монтажный инструмент",
        "Пневматический гвоздезабиватель"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "gazovyy-montazhnyy-pistolet-hybesr-gbw200-teploi",
      articul: "422221",
      title: "Газовый монтажный пистолет HYBESR GBW200 (теплоизоляция)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/956705c8-6f26-11ee-9416-002590ba8282_ed9ab6af-7237-11ee-9417-002590ba8282-372x248.jpeg",
      price: 46800,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "HYBESR",
        tip: "Газовый монтажный пистолет",
        model: "GBW200",
        naznachenie: "Для теплоизоляции",
        privod: "Газовый",
        "diapazon-gvozdej": "20-50 мм"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "HYBESR"
        },
        {
          label: "Тип",
          value: "Газовый монтажный пистолет"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Модель",
          value: "GBW200"
        },
        {
          label: "Назначение",
          value: "Для теплоизоляции"
        },
        {
          label: "Привод",
          value: "Газовый"
        },
        {
          label: "Диапазон гвоздей",
          value: "20-50 мм"
        }
      ]
    },
    {
      id: "gazovyy-montazhnyy-pistolet-hybesr-gsr40a-beton",
      articul: "422222",
      title: "Газовый монтажный пистолет HYBESR GSR40A (бетон)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/ae3253d0-6f26-11ee-9416-002590ba8282_e3b57102-7237-11ee-9417-002590ba8282-303x303.jpeg",
      price: 40500,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "HYBESR",
        tip: "Газовый монтажный пистолет",
        model: "GSR40A",
        naznachenie: "Для бетона",
        privod: "Газовый",
        "diapazon-gvozdej": "40-50 мм"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "HYBESR"
        },
        {
          label: "Тип",
          value: "Газовый монтажный пистолет"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Модель",
          value: "GSR40A"
        },
        {
          label: "Назначение",
          value: "Для бетона"
        },
        {
          label: "Привод",
          value: "Газовый"
        },
        {
          label: "Диапазон гвоздей",
          value: "40-50 мм"
        }
      ]
    },
    {
      id: "gazovyj-montazhnyj-pistolet-toua-gsn50e-beton",
      articul: "431948",
      title: "Газовый монтажный пистолет TOUA GSN50E (бетон)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 46500,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "TOUA",
        tip: "Газовый монтажный пистолет",
        model: "GSN50E",
        naznachenie: "Для бетона",
        privod: "Газовый",
        "diapazon-gvozdej": "50 мм",
        osobennosti: "Электрический воспламенитель"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "TOUA"
        },
        {
          label: "Тип",
          value: "Газовый монтажный пистолет"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Модель",
          value: "GSN50E"
        },
        {
          label: "Назначение",
          value: "Для бетона"
        },
        {
          label: "Привод",
          value: "Газовый"
        },
        {
          label: "Диапазон гвоздей",
          value: "50 мм"
        },
        {
          label: "Особенности",
          value: "Электрический воспламенитель"
        }
      ]
    },
    {
      id: "gazovyj-montazhnyj-ruchnoj-pistolet-fedast-t9zg",
      articul: "6535",
      title: "Газовый монтажный ручной пистолет FEDAST T9ZG",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 9600,
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
      id: "gvozdezabivatel-pnevm-fubag-f50-100151",
      articul: "002645",
      title: "Гвоздезабиватель пневм Fubag F50 100151",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/3076358c-8799-11e6-8dc1-c8600046bc56_b1ea43c8-9feb-11ea-937f-002590ba8283-281x303.jpeg",
      price: 6600,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Fubag",
        tip: "Пневматический гвоздезабиватель",
        model: "F50",
        "diapazon-gvozdej": "50 мм",
        "rabochee-davlenie": "6-8 бар",
        privod: "Пневматический"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Fubag"
        },
        {
          label: "Тип",
          value: "Пневматический гвоздезабиватель"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Модель",
          value: "F50"
        },
        {
          label: "Диапазон гвоздей",
          value: "50 мм"
        },
        {
          label: "Рабочее давление",
          value: "6-8 бар"
        },
        {
          label: "Артикул",
          value: "100151"
        },
        {
          label: "Привод",
          value: "Пневматический"
        }
      ]
    },
    {
      id: "gvozdezabivatel-pnevm-kranz-n90-d21-naklon-21-gradus-kr-16-1620",
      articul: "10056",
      title: "Гвоздезабиватель пневм KRANZ N90/D21 наклон 21 градус KR-16-1620",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 22800,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        }
      ]
    },
    {
      id: "gvozdezabivatel-pnevm-kranz-2v1-n50-s40-kr-16-1610",
      articul: "10055",
      title: "Гвоздезабиватель пневм KRANZ 2в1 N50/S40 KR-16-1610",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 6200,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        }
      ]
    },
    {
      id: "gvozdezabivatel-pnevm-matrix-10-50mm-57410",
      articul: "044523",
      title: "Гвоздезабиватель пневм Matrix 10-50мм 57410",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/1b6422e2-c90b-11e6-86f6-c8600046bc56_93ba6d78-a01b-11ea-937f-002590ba8283-372x279.jpeg",
      price: 4300,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Matrix",
        tip: "Пневматический гвоздезабиватель",
        "diapazon-gvozdej": "10-50 мм",
        model: "57410",
        diametr: "50мм",
        "rabochee-davlenie": "6-8 бар",
        naznachenie: "Монтажные работы",
        privod: "Пневматический"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Matrix"
        },
        {
          label: "Тип",
          value: "Пневматический гвоздезабиватель"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Диапазон гвоздей",
          value: "10-50 мм"
        },
        {
          label: "Модель",
          value: "57410"
        },
        {
          label: "Диаметр сопла",
          value: "50мм"
        },
        {
          label: "Рабочее давление",
          value: "6-8 бар"
        },
        {
          label: "Назначение",
          value: "Монтажные работы"
        },
        {
          label: "Привод",
          value: "Пневматический"
        }
      ]
    },
    {
      id: "gvozdezabivatel-pnevm-matrix-2-v-1-f40-57426",
      articul: "203280",
      title: "Гвоздезабиватель пневм Matrix 2 в 1 F40 57426",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/0c2c1693-3d09-11eb-9398-002590ba8282_a6fd7218-22f7-11ee-9403-002590ba8282-372x248.jpeg",
      price: 4800,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Matrix",
        tip: "Пневматический гвоздезабиватель",
        model: "2 в 1 F40",
        "diapazon-gvozdej": "40 мм",
        osobennosti: "2 в 1",
        privod: "Пневматический"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Matrix"
        },
        {
          label: "Тип",
          value: "Пневматический гвоздезабиватель"
        },
        {
          label: "Модель",
          value: "2 в 1 F40"
        },
        {
          label: "Диапазон гвоздей",
          value: "40 мм"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Артикул",
          value: "57426"
        },
        {
          label: "Особенности",
          value: "2 в 1"
        },
        {
          label: "Привод",
          value: "Пневматический"
        }
      ]
    },
    {
      id: "gvozdezabivatel-pnevm-matrix-3-v-1-f50-57427",
      articul: "203574",
      title: "Гвоздезабиватель пневм Matrix 3 в 1 F50 57427",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/d4fbeb86-4455-11eb-9398-002590ba8282_ad354d7d-22f7-11ee-9403-002590ba8282-315x303.jpeg",
      price: 4900,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Matrix",
        tip: "Пневматический гвоздезабиватель",
        model: "3 в 1 F50",
        "diapazon-gvozdej": "50 мм",
        osobennosti: "3 в 1",
        privod: "Пневматический"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Matrix"
        },
        {
          label: "Тип",
          value: "Пневматический гвоздезабиватель"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Модель",
          value: "3 в 1 F50"
        },
        {
          label: "Диапазон гвоздей",
          value: "50 мм"
        },
        {
          label: "Артикул",
          value: "57427"
        },
        {
          label: "Особенности",
          value: "3 в 1"
        },
        {
          label: "Привод",
          value: "Пневматический"
        }
      ]
    },
    {
      id: "gvozdezabivatel-pnevm-nnc5040-pro-90-120psi-dl-ra-davl-67-9l-min-2v1-1",
      articul: "11563",
      title: "Гвоздезабиватель пневм NNC5040-PRO (90-120PSI дл ра давл 67,9л/мин 2в1) №1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 4600,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Fubag"
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
          value: "Fubag"
        }
      ]
    },
    {
      id: "instrument-camo-pro-nb-5-129-148-mm",
      articul: "427534",
      title: "Инструмент Camo Pro-NB 5 (129-148 мм)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/04/771ea2e7-0232-11ef-9428-002590ba8282_79a2db3a-02c4-11ef-9428-002590ba8282-372x248.jpeg",
      price: 18500,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Camo",
        tip: "Монтажный инструмент",
        model: "Pro-NB 5",
        diapazon: "129-148 мм",
        naznachenie: "Монтажные работы",
        privod: "Механический",
        klass: "Профессиональный"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Camo"
        },
        {
          label: "Тип",
          value: "Монтажный инструмент"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Модель",
          value: "Pro-NB 5"
        },
        {
          label: "Диапазон",
          value: "129-148 мм"
        },
        {
          label: "Назначение",
          value: "Монтажные работы"
        },
        {
          label: "Привод",
          value: "Механический"
        },
        {
          label: "Класс",
          value: "Профессиональный"
        }
      ]
    }
  ]
};
