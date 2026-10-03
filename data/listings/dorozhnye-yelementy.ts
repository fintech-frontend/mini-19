import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/obshhestroitelnye-materialy/plitka-trotuarnaya/dorozhnye-yelementy/ */
export const dorozhnyeYelementyListing: CatalogListingData = {
  path: "obshhestroitelnye-materialy/plitka-trotuarnaya/dorozhnye-yelementy",
  title: "Дорожные элементы",
  totalCountLabel: "23 товара",
  filterFields: [
    {
      id: "kolichestvo",
      title: "Количество в поддоне",
      options: [
        "44шт",
        "45шт",
        "48шт"
      ],
      truncate: false
    },
    {
      id: "shirina",
      title: "Ширина",
      options: [
        "80мм",
        "200 мм"
      ],
      truncate: false
    },
    {
      id: "tsvet",
      title: "Цвет",
      options: [
        "Антрацит",
        "Арабская ночь",
        "Графит",
        "Клинкер",
        "Коричневый",
        "Серый"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "bordyur-br-100-20-8-granit-alkantara-okrashen",
      articul: "414036",
      title: "Бордюр БР 100.20.8 Гранит Алькантара окрашено с лица",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/2cd84559-6416-11ed-93dc-002590ba8282_352a2744-5553-11ee-9413-002590ba8282-254x303.jpeg",
      price: 440,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "1000мм",
        shirina: "80мм",
        tsvet: "Антрацит",
        tip: "Тип строительного элемента",
        vysota: "200мм",
        kolichestvo: "45шт"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "1000мм"
        },
        {
          label: "Ширина",
          value: "80мм"
        },
        {
          label: "Цвет",
          value: "Антрацит"
        },
        {
          label: "Тип товара",
          value: "Тип строительного элемента"
        },
        {
          label: "Высота",
          value: "200мм"
        },
        {
          label: "Количество в поддоне",
          value: "45шт"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "bordyur-br-100-20-8-granit-bazalt",
      articul: "411323",
      title: "Бордюр БР 100.20.8 Гранит Базальт цветной с лица",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/2fe7e0dc-1945-11ed-93d0-002590ba8282_352a273f-5553-11ee-9413-002590ba8282-254x303.jpeg",
      price: 440,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "1000мм",
        tip: "Тип строительного элемента",
        shirina: "200 мм",
        vysota: "200мм",
        tsvet: "Серый",
        kolichestvo: "44шт"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "5"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "1000мм"
        },
        {
          label: "Тип товара",
          value: "Тип строительного элемента"
        },
        {
          label: "Ширина",
          value: "200 мм"
        },
        {
          label: "Высота",
          value: "200мм"
        },
        {
          label: "Цвет",
          value: "Серый"
        },
        {
          label: "Количество в поддоне",
          value: "44шт"
        }
      ]
    },
    {
      id: "bordyur-br-100-20-8-granit-klinker-massa",
      articul: "410538",
      title: "Бордюр БР 100.20.8 Гранит клинкер масса",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/46af2caf-fec8-11ec-93cf-002590ba8282_352a273e-5553-11ee-9413-002590ba8282-372x298.jpeg",
      price: 650,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "1000мм",
        tip: "Тип строительного элемента",
        shirina: "80мм",
        vysota: "200мм",
        tsvet: "Клинкер",
        kolichestvo: "44шт"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "1000мм"
        },
        {
          label: "Тип товара",
          value: "Тип строительного элемента"
        },
        {
          label: "Ширина",
          value: "80мм"
        },
        {
          label: "Высота",
          value: "200мм"
        },
        {
          label: "Цвет",
          value: "Клинкер"
        },
        {
          label: "Количество в поддоне",
          value: "44шт"
        }
      ]
    },
    {
      id: "bordyur-br-100-20-8-granit-liberika-massa",
      articul: "408985",
      title: "Бордюр БР 100.20.8 Гранит Либерика масса",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/b5f4b945-caaf-11ec-93cd-002590ba8282_2f2a2eaf-5553-11ee-9413-002590ba8282-254x303.jpeg",
      price: 650,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "procent-maksimalnoj-skidki": "0",
        strana: "Россия",
        dlina: "1000мм",
        tip: "Тип строительного элемента",
        shirina: "80мм",
        vysota: "200мм",
        tsvet: "Антрацит",
        kolichestvo: "44шт"
      },
      specs: [
        {
          label: "Процент максимальной скидки",
          value: "0"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "1000мм"
        },
        {
          label: "Тип товара",
          value: "Тип строительного элемента"
        },
        {
          label: "Ширина",
          value: "80мм"
        },
        {
          label: "Высота",
          value: "200мм"
        },
        {
          label: "Цвет",
          value: "Антрацит"
        },
        {
          label: "Количество в поддоне",
          value: "44шт"
        }
      ]
    },
    {
      id: "bordjur-br-100-20-8-granit-liberika-cvetnoj-s-lica",
      articul: "1224",
      title: "Бордюр БР 100.20.8 Гранит Либерика цветной с лица",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/07/1-224-314x303.jpeg",
      price: 440,
      inStock: false,
      quickBuy: true,
      filterValues: {}
    },
    {
      id: "bordyur-br-100-20-8-granit-listopad-massa",
      articul: "411579",
      title: "Бордюр БР 100.20.8 Гранит Листопад масса",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/95da531d-1fc1-11ed-93d1-002590ba8282_352a2740-5553-11ee-9413-002590ba8282-254x303.jpeg",
      price: 600,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "1000мм",
        tip: "Тип строительного элемента",
        shirina: "80мм",
        vysota: "200мм",
        tsvet: "Арабская ночь",
        kolichestvo: "44шт"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "7"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "1000мм"
        },
        {
          label: "Тип товара",
          value: "Тип строительного элемента"
        },
        {
          label: "Ширина",
          value: "80мм"
        },
        {
          label: "Высота",
          value: "200мм"
        },
        {
          label: "Цвет",
          value: "Арабская ночь"
        },
        {
          label: "Количество в поддоне",
          value: "44шт"
        }
      ]
    },
    {
      id: "bordyur-br-100-20-8-granit-listopad-cvetnoy-s",
      articul: "419231",
      title: "Бордюр БР 100.20.8 Гранит Листопад цветной с лица",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/07/419231-372x297.jpeg",
      price: 440,
      inStock: true,
      quickBuy: true,
      filterValues: {}
    },
    {
      id: "bordyur-br-100-20-8-granit-temno-korichnevyy-ma",
      articul: "410537",
      title: "Бордюр БР 100.20.8 Гранит темно-коричневый масса",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/1705afd6-fec8-11ec-93cf-002590ba8282_352a273d-5553-11ee-9413-002590ba8282-372x195.jpeg",
      price: 650,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "1000мм",
        tip: "Тип строительного элемента",
        shirina: "80мм",
        vysota: "200мм",
        tsvet: "Коричневый",
        kolichestvo: "48шт"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "1000мм"
        },
        {
          label: "Тип товара",
          value: "Тип строительного элемента"
        },
        {
          label: "Ширина",
          value: "80мм"
        },
        {
          label: "Высота",
          value: "200мм"
        },
        {
          label: "Цвет",
          value: "Коричневый"
        },
        {
          label: "Количество в поддоне",
          value: "48шт"
        }
      ]
    },
    {
      id: "bordyur-br-100-20-8-granit-temno-korichnevyy-cv",
      articul: "420439",
      title: "Бордюр БР 100.20.8 Гранит темно-коричневый цветной с лица",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/07/420439-316x303.jpeg",
      price: 420,
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
      id: "bordyur-br-100-20-8-grafit-massa",
      articul: "412349",
      title: "Бордюр БР 100.20.8 Графит масса",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/7f82385a-3595-11ed-93d8-002590ba8282_352a2741-5553-11ee-9413-002590ba8282-372x279.jpeg",
      price: 600,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "1000мм",
        shirina: "80мм",
        tsvet: "Графит",
        tip: "Тип строительного элемента",
        vysota: "200мм",
        kolichestvo: "45шт"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "1000мм"
        },
        {
          label: "Ширина",
          value: "80мм"
        },
        {
          label: "Цвет",
          value: "Графит"
        },
        {
          label: "Тип товара",
          value: "Тип строительного элемента"
        },
        {
          label: "Высота",
          value: "200мм"
        },
        {
          label: "Количество в поддоне",
          value: "45шт"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "bordyur-br-100-20-8-grafit-massa-granit",
      articul: "415703",
      title: "Бордюр БР 100.20.8 Графит масса Гранит",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/56bd45c8-a476-11ed-93e5-002590ba8282_352a2748-5553-11ee-9413-002590ba8282-254x303.jpeg",
      price: 650,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "1000мм",
        shirina: "80мм",
        tsvet: "Графит",
        tip: "Тип строительного элемента",
        vysota: "200мм",
        kolichestvo: "44шт"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "1000мм"
        },
        {
          label: "Ширина",
          value: "80мм"
        },
        {
          label: "Цвет",
          value: "Графит"
        },
        {
          label: "Тип товара",
          value: "Тип строительного элемента"
        },
        {
          label: "Высота",
          value: "200мм"
        },
        {
          label: "Количество в поддоне",
          value: "44шт"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "bordjur-br-100-20-8-l-natur-karbon",
      articul: "2401",
      title: "Бордюр БР 100.20.8 Л Натур Карбон",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 690,
      inStock: false,
      quickBuy: true,
      filterValues: {},
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    }
  ]
};
