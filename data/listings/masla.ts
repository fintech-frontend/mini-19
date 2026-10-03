import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/tovary-dlya-doma-sada-i-ogoroda/sadovyy-inventar/benzopily-i-yelektropily-cepnye/masla/ */
export const maslaListing: CatalogListingData = {
  path: "tovary-dlya-doma-sada-i-ogoroda/sadovyy-inventar/benzopily-i-yelektropily-cepnye/masla",
  title: "Масла",
  totalCountLabel: "34 товара",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Briggs & Stratton",
        "DERZHI",
        "Huter",
        "USE"
      ],
      truncate: false
    },
    {
      id: "ves-kg",
      title: "Вес (кг)",
      options: [
        "0.1",
        "0.9",
        "0.95"
      ],
      truncate: false
    },
    {
      id: "vyazkost",
      title: "Вязкость",
      options: [
        "SAE 5W30",
        "SAE 30"
      ],
      truncate: false
    },
    {
      id: "osnova",
      title: "Основа",
      options: [
        "минеральное",
        "полусинтетика",
        "синтетическое"
      ],
      truncate: false
    },
    {
      id: "primenenie",
      title: "Применение",
      options: [
        "для 4-тактных двигателей",
        "для бензопил и триммеров",
        "для бензопил Huter",
        "для двигателей B&S",
        "для мощной техники",
        "для приготовления смеси"
      ],
      truncate: false
    },
    {
      id: "standart",
      title: "Стандарт",
      options: [
        "API TB",
        "API TC"
      ],
      truncate: false
    },
    {
      id: "strana-proizvoditelya",
      title: "Страна производителя",
      options: [
        "Китай",
        "Россия",
        "США"
      ],
      truncate: false
    },
    {
      id: "tip-masla",
      title: "Тип масла",
      options: [
        "2-тактное",
        "4-тактное"
      ],
      truncate: false
    },
    {
      id: "cvet",
      title: "Цвет",
      options: [
        "красное",
        "синее"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "maslo-2t-derzhi-1-l-polusintetika",
      articul: "414022",
      title: "Масло 2Т DERZHI 1 л полусинтетика",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/6b35fe26-6290-11ed-93dc-002590ba8282_006306be-7077-11ed-93dc-002590ba8282-303x303.jpeg",
      price: 530,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "DERZHI",
        "strana-proizvoditelya": "Россия",
        "tip-masla": "2-тактное",
        osnova: "полусинтетика",
        "obem-l": "1",
        primenenie: "для бензопил и триммеров",
        standart: "API TC",
        "ves-kg": "0.9"
      },
      specs: [
        {
          label: "Бренд",
          value: "DERZHI"
        },
        {
          label: "Страна производителя",
          value: "Россия"
        },
        {
          label: "Тип масла",
          value: "2-тактное"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Основа",
          value: "полусинтетика"
        },
        {
          label: "Объём (л)",
          value: "1"
        },
        {
          label: "Применение",
          value: "для бензопил и триммеров"
        },
        {
          label: "Стандарт",
          value: "API TC"
        },
        {
          label: "Вес (кг)",
          value: "0.9"
        }
      ]
    },
    {
      id: "maslo-2t-derzhi-1-litr",
      articul: "413896",
      title: "Масло 2Т DERZHI 1 литр миниральное",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/af3026ed-5fec-11ed-93db-002590ba8282_087c8f49-7077-11ed-93dc-002590ba8282-303x303.jpeg",
      price: 499,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "DERZHI",
        "strana-proizvoditelya": "Россия",
        "tip-masla": "2-тактное",
        osnova: "минеральное",
        "obem-l": "1",
        primenenie: "для бензопил и триммеров",
        standart: "API TB",
        "ves-kg": "0.9"
      },
      specs: [
        {
          label: "Бренд",
          value: "DERZHI"
        },
        {
          label: "Страна производителя",
          value: "Россия"
        },
        {
          label: "Тип масла",
          value: "2-тактное"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Основа",
          value: "минеральное"
        },
        {
          label: "Объём (л)",
          value: "1"
        },
        {
          label: "Применение",
          value: "для бензопил и триммеров"
        },
        {
          label: "Стандарт",
          value: "API TB"
        },
        {
          label: "Вес (кг)",
          value: "0.9"
        }
      ]
    },
    {
      id: "maslo-2t-derzhi-1-litr-polusintetik-s-dozator",
      articul: "414433",
      title: "Масло 2Т DERZHI 1 литр полусинтетик с дозатором",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/04/414433-1-181x303.png",
      price: 485,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "DERZHI",
        "strana-proizvoditelya": "Россия",
        "tip-masla": "2-тактное",
        osnova: "полусинтетика",
        "obem-l": "1",
        primenenie: "для бензопил и триммеров",
        osobennosti: "с дозатором",
        "ves-kg": "0.95"
      },
      specs: [
        {
          label: "Бренд",
          value: "DERZHI"
        },
        {
          label: "Страна производителя",
          value: "Россия"
        },
        {
          label: "Тип масла",
          value: "2-тактное"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Основа",
          value: "полусинтетика"
        },
        {
          label: "Объём (л)",
          value: "1"
        },
        {
          label: "Применение",
          value: "для бензопил и триммеров"
        },
        {
          label: "Особенности",
          value: "с дозатором"
        },
        {
          label: "Вес (кг)",
          value: "0.95"
        }
      ]
    },
    {
      id: "maslo-2t-derzhi-1-litr-polusintetik-s-dozatorom-mark",
      articul: "10721",
      title: "Масло 2Т DERZHI 1 литр полусинтетик с дозатором (марк)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 485,
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
      id: "maslo-2t-derzhi-100ml-mineralnoe-krasnoe",
      articul: "8250",
      title: "Масло 2Т DERZHI 100мл минеральное (красное)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 99,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "DERZHI",
        "strana-proizvoditelya": "Россия",
        "tip-masla": "2-тактное",
        osnova: "минеральное",
        "obem-ml": "100",
        primenenie: "для приготовления смеси",
        cvet: "красное",
        "ves-kg": "0.1"
      },
      specs: [
        {
          label: "Бренд",
          value: "DERZHI"
        },
        {
          label: "Страна производителя",
          value: "Россия"
        },
        {
          label: "Тип масла",
          value: "2-тактное"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Основа",
          value: "минеральное"
        },
        {
          label: "Объём (мл)",
          value: "100"
        },
        {
          label: "Применение",
          value: "для приготовления смеси"
        },
        {
          label: "Цвет",
          value: "красное"
        },
        {
          label: "Вес (кг)",
          value: "0.1"
        }
      ]
    },
    {
      id: "maslo-2t-derzhi-100ml-polusintetika-sinee",
      articul: "8251",
      title: "Масло 2Т DERZHI 100мл полусинтетика (синее)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 90,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "DERZHI",
        "strana-proizvoditelya": "Россия",
        "tip-masla": "2-тактное",
        osnova: "полусинтетика",
        "obem-ml": "100",
        primenenie: "для приготовления смеси",
        cvet: "синее",
        "ves-kg": "0.1"
      },
      specs: [
        {
          label: "Бренд",
          value: "DERZHI"
        },
        {
          label: "Страна производителя",
          value: "Россия"
        },
        {
          label: "Тип масла",
          value: "2-тактное"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Основа",
          value: "полусинтетика"
        },
        {
          label: "Объём (мл)",
          value: "100"
        },
        {
          label: "Применение",
          value: "для приготовления смеси"
        },
        {
          label: "Цвет",
          value: "синее"
        },
        {
          label: "Вес (кг)",
          value: "0.1"
        }
      ]
    },
    {
      id: "maslo-2t-huter-1-litr",
      articul: "039999",
      title: "Масло 2Т Huter 1 литр (М)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/fb79539f-7e2e-11e9-a98a-c8600046bc56_fdca8212-9fea-11ea-937f-002590ba8283-303x303.jpeg",
      price: 720,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Huter",
        "strana-proizvoditelya": "Китай",
        "tip-masla": "2-тактное",
        osnova: "полусинтетика",
        "obem-l": "1",
        primenenie: "для бензопил Huter",
        standart: "API TC",
        "ves-kg": "0.9"
      },
      specs: [
        {
          label: "Бренд",
          value: "Huter"
        },
        {
          label: "Страна производителя",
          value: "Китай"
        },
        {
          label: "Тип масла",
          value: "2-тактное"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Основа",
          value: "полусинтетика"
        },
        {
          label: "Объём (л)",
          value: "1"
        },
        {
          label: "Применение",
          value: "для бензопил Huter"
        },
        {
          label: "Стандарт",
          value: "API TC"
        },
        {
          label: "Вес (кг)",
          value: "0.9"
        }
      ]
    },
    {
      id: "maslo-2t-huter-ultra-sintetik1-litr",
      articul: "1213",
      title: "Масло 2Т Huter Ultra синтетик1 литр (М)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/10/1-213-372x303.jpeg",
      price: 1195,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Huter",
        "strana-proizvoditelya": "Китай",
        "tip-masla": "2-тактное",
        osnova: "синтетическое",
        "obem-l": "1",
        primenenie: "для мощной техники",
        standart: "API TC",
        "ves-kg": "0.9"
      },
      specs: [
        {
          label: "Бренд",
          value: "Huter"
        },
        {
          label: "Страна производителя",
          value: "Китай"
        },
        {
          label: "Тип масла",
          value: "2-тактное"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Основа",
          value: "синтетическое"
        },
        {
          label: "Объём (л)",
          value: "1"
        },
        {
          label: "Применение",
          value: "для мощной техники"
        },
        {
          label: "Стандарт",
          value: "API TC"
        },
        {
          label: "Вес (кг)",
          value: "0.9"
        }
      ]
    },
    {
      id: "maslo-2t-use-1-litr-polusintetik",
      articul: "412398",
      title: "Масло 2Т USE 1 литр полусинтетик",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/46837661-3659-11ed-93d8-002590ba8282_3958adf0-b0fc-11ed-93ea-002590ba8282-303x303.jpeg",
      price: 380,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "USE",
        "strana-proizvoditelya": "Россия",
        "tip-masla": "2-тактное",
        osnova: "полусинтетика",
        "obem-l": "1",
        primenenie: "для бензопил и триммеров",
        standart: "API TC",
        "ves-kg": "0.9"
      },
      specs: [
        {
          label: "Бренд",
          value: "USE"
        },
        {
          label: "Страна производителя",
          value: "Россия"
        },
        {
          label: "Тип масла",
          value: "2-тактное"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Основа",
          value: "полусинтетика"
        },
        {
          label: "Объём (л)",
          value: "1"
        },
        {
          label: "Применение",
          value: "для бензопил и триммеров"
        },
        {
          label: "Стандарт",
          value: "API TC"
        },
        {
          label: "Вес (кг)",
          value: "0.9"
        }
      ]
    },
    {
      id: "maslo-4-takt-bs-sae-5w30-1-l",
      articul: "004715",
      title: "Масло 4-такт B&S SAE 5W30 1 л",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/698a16bd-e128-11ea-938b-002590ba8283_82f602a0-fc25-11eb-93b7-002590ba8282-372x215.jpeg",
      price: 830,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "Briggs & Stratton",
        "strana-proizvoditelya": "США",
        "tip-masla": "4-тактное",
        osnova: "полусинтетика",
        "obem-l": "1",
        primenenie: "для двигателей B&S",
        vyazkost: "SAE 5W30",
        "ves-kg": "0.9"
      },
      specs: [
        {
          label: "Бренд",
          value: "Briggs & Stratton"
        },
        {
          label: "Страна производителя",
          value: "США"
        },
        {
          label: "Тип масла",
          value: "4-тактное"
        },
        {
          label: "Основа",
          value: "полусинтетика"
        },
        {
          label: "Объём (л)",
          value: "1"
        },
        {
          label: "Применение",
          value: "для двигателей B&S"
        },
        {
          label: "Вязкость",
          value: "SAE 5W30"
        },
        {
          label: "Вес (кг)",
          value: "0.9"
        }
      ]
    },
    {
      id: "maslo-4t-derzhi-06-l-mineralnoe",
      articul: "414024",
      title: "Масло 4Т DERZHI 0,6 л минеральное",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/97386d0f-6290-11ed-93dc-002590ba8282_1407b40e-7077-11ed-93dc-002590ba8282-303x303.jpeg",
      price: 250,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "1": "Масло DERZHI 4Т минеральное. Для газонокосилок и других 4-тактных двигателей. Объём 0.6 л."
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "1",
          value: "Масло DERZHI 4Т минеральное. Для газонокосилок и других 4-тактных двигателей. Объём 0.6 л."
        }
      ]
    },
    {
      id: "maslo-4t-derzhi-1-l-mineralnoe",
      articul: "414025",
      title: "Масло 4Т DERZHI 1 л минеральное",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/d86ca511-6290-11ed-93dc-002590ba8282_1c8de835-7077-11ed-93dc-002590ba8282-303x303.jpeg",
      price: 385,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "DERZHI",
        "strana-proizvoditelya": "Россия",
        "tip-masla": "4-тактное",
        osnova: "минеральное",
        "obem-l": "1",
        primenenie: "для 4-тактных двигателей",
        vyazkost: "SAE 30",
        "ves-kg": "0.9"
      },
      specs: [
        {
          label: "Бренд",
          value: "DERZHI"
        },
        {
          label: "Страна производителя",
          value: "Россия"
        },
        {
          label: "Тип масла",
          value: "4-тактное"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Основа",
          value: "минеральное"
        },
        {
          label: "Объём (л)",
          value: "1"
        },
        {
          label: "Применение",
          value: "для 4-тактных двигателей"
        },
        {
          label: "Вязкость",
          value: "SAE 30"
        },
        {
          label: "Вес (кг)",
          value: "0.9"
        }
      ]
    }
  ]
};
