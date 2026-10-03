import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/otdelochnye-materialy/lakokrasochnye-materialy/gruntovka-akril/ */
export const gruntovkaAkrilListing: CatalogListingData = {
  path: "otdelochnye-materialy/lakokrasochnye-materialy/gruntovka-akril",
  title: "Грунтовка Акрил",
  totalCountLabel: "36 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Cardinal",
        "Knauf",
        "Litox",
        "Uni-Bet"
      ],
      truncate: false
    },
    {
      id: "rashod",
      title: "Расход",
      options: [
        "100 гр на м2",
        "100-200 гр на м2",
        "150-200 гр на м2"
      ],
      truncate: false
    },
    {
      id: "ves",
      title: "Вес",
      options: [
        "5",
        "10"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "gruntovka-glubokogo-proniknoveniya-p-2",
      articul: "408130",
      title: "Грунтовка глубокого проникновения ПрофиСепт 5 л",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/dc71f165-b1ba-11ec-93ca-002590ba8282_2348b30d-cbb6-11ec-93ce-002590ba8282-307x303.jpeg",
      price: 280,
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
      id: "gruntovka-glubokogo-proniknoveniya-10-l",
      articul: "012202",
      title: "Грунтовка глубокого проникновения 10 л Литокс",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/73578b4e-a4eb-11e7-bdc2-c8600046bc56_189f3c7c-9127-11eb-93aa-002590ba8282-231x303.jpeg",
      price: 615,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Litox",
        ves: "10",
        tip: "Грунтовка",
        rashod: "150-200 гр на м2"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Litox"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Вес",
          value: "10"
        },
        {
          label: "Тип товара",
          value: "Грунтовка"
        },
        {
          label: "Расход",
          value: "150-200 гр на м2"
        }
      ]
    },
    {
      id: "grunt-airless-sous-couche-semin-20kg-belaja-kryshka",
      articul: "7318",
      title: "Грунт Airless Sous-Couche Semin 20кг (белая крышка)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 5400,
      inStock: false,
      quickBuy: true,
      filterValues: {
        ves: "10",
        strana: "Россия",
        brend: "Knauf",
        tip: "Грунтовка",
        rashod: "100 гр на м2"
      },
      specs: [
        {
          label: "Вес",
          value: "10"
        },
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
          value: "Knauf"
        },
        {
          label: "Тип товара",
          value: "Грунтовка"
        },
        {
          label: "Расход",
          value: "100 гр на м2"
        }
      ]
    },
    {
      id: "grunt-putzgrund-sceplyayushhiy-pod-dekorativnye-p-2",
      articul: "407335",
      title: "Грунт PUTZGRUND сцепляющий под декоративные покрытия 8 кг",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/e3359d43-9089-11ec-93c5-002590ba8282_0c898b06-efa5-11ec-93ce-002590ba8282-314x303.jpeg",
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
      id: "grunt-gidrofobnyj-armmiks-10l",
      articul: "4293",
      title: "Грунт Гидрофобный АрмМикс 10л",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/03/4-293-240x303.jpeg",
      price: 0,
      inStock: false,
      quickBuy: true,
      filterValues: {
        ves: "10",
        strana: "Россия",
        brend: "Cardinal",
        tip: "Грунтовка",
        rashod: "150-200 гр на м2"
      },
      specs: [
        {
          label: "Вес",
          value: "10"
        },
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
          value: "Cardinal"
        },
        {
          label: "Тип товара",
          value: "Грунтовка"
        },
        {
          label: "Расход",
          value: "150-200 гр на м2"
        }
      ]
    },
    {
      id: "grunt-koncentrirovannyy-15-litox-proff-power-10kg",
      articul: "411091",
      title: "Грунт концентрированный 1:5 LITOX PROFF POWER 10кг",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/6600bdb8-1305-11ed-93d0-002590ba8282_a4f552f5-7242-11ed-93dd-002590ba8282-372x273.jpeg",
      price: 3900,
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
      id: "grunt-koncentrirovannyy-15-litox-proff-power-2kg",
      articul: "411404",
      title: "Грунт концентрированный 1:5 LITOX PROFF POWER 2кг",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/ad939d7c-1d22-11ed-93d1-002590ba8282_b16871f7-7242-11ed-93dd-002590ba8282-372x273.jpeg",
      price: 850,
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
      id: "gruntovka-linnimax-koncentrat-14-10l",
      articul: "427836",
      title: "Грунтовка LINNIMAX КОНЦЕНТРАТ 1:4 10л",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/03/427836-308x303.jpeg",
      price: 4650,
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
      id: "gruntovka-akril-kardinal-1-l",
      articul: "415847",
      title: "Грунтовка акрил Кардинал 1 л",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/415847-214x303.jpg",
      price: 80,
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
      id: "gruntovka-akril-kardinal-10-l",
      articul: "126416",
      title: "Грунтовка акрил Кардинал 10 л",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/8e069bc6-30c4-11e2-a1f1-c8600046bc56_9cfdcb40-9c0a-11ea-937e-002590ba8283-235x303.jpeg",
      price: 510,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Cardinal",
        ves: "10",
        tip: "Грунтовка",
        rashod: "150-200 гр на м2"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Cardinal"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Вес",
          value: "10"
        },
        {
          label: "Тип товара",
          value: "Грунтовка"
        },
        {
          label: "Расход",
          value: "150-200 гр на м2"
        }
      ]
    },
    {
      id: "gruntovka-akril-kardinal-5-l",
      articul: "126420",
      title: "Грунтовка акрил Кардинал 5 л",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/8e069bc8-30c4-11e2-a1f1-c8600046bc56_add0c2ee-9c0a-11ea-937e-002590ba8283-236x303.jpeg",
      price: 295,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Cardinal",
        ves: "5",
        tip: "Грунтовка",
        rashod: "150-200 гр на м2"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Cardinal"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Вес",
          value: "5"
        },
        {
          label: "Тип товара",
          value: "Грунтовка"
        },
        {
          label: "Расход",
          value: "150-200 гр на м2"
        }
      ]
    },
    {
      id: "gruntovka-akril-praymer-10-l",
      articul: "000890",
      title: "Грунтовка акрил Праймер 10 л",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/bbfebdd0-e849-11e5-80a4-c8600046bc56_ccff99ae-9be9-11ea-937e-002590ba8283-227x303.jpeg",
      price: 415,
      inStock: false,
      quickBuy: true,
      filterValues: {
        tip: "Грунтовка",
        brend: "Uni-Bet",
        ves: "10",
        rashod: "100-200 гр на м2",
        strana: "Россия"
      },
      specs: [
        {
          label: "Тип товара",
          value: "Грунтовка"
        },
        {
          label: "Бренд",
          value: "Uni-Bet"
        },
        {
          label: "Вес",
          value: "10"
        },
        {
          label: "Расход",
          value: "100-200 гр на м2"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        }
      ]
    }
  ]
};
