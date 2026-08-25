import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/otdelochnye-materialy/lakokrasochnye-materialy/rastvoriteli/ */
export const rastvoriteliListing: CatalogListingData = {
  path: "otdelochnye-materialy/lakokrasochnye-materialy/rastvoriteli",
  title: "Растворители",
  totalCountLabel: "37 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Вершина",
        "Alpina"
      ],
      truncate: false
    },
    {
      id: "ves",
      title: "Вес",
      options: [
        "0.5 л",
        "0.75 л",
        "10 л"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "aceton-05-l-vershina",
      articul: "013966",
      title: "Ацетон 0,5 л Вершина",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/f3f8c098-496d-11ea-a9f1-c8600046bc54_3b51f985-9bf2-11ea-937e-002590ba8283-372x279.jpeg",
      price: 185,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Вершина",
        ves: "0.5 л"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Вершина"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Вес",
          value: "0.5 л"
        }
      ]
    },
    {
      id: "aceton-1-l-vershina",
      articul: "013967",
      title: "Ацетон 1 л Вершина",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/03/013967-304x303.jpeg",
      price: 320,
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
      id: "benzin-galosha-1-l-vershina",
      articul: "417358",
      title: "Бензин Галоша 1 л Вершина",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/07/417358-303x303.jpeg",
      price: 320,
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
      id: "kerosin-0-5-l-karbon",
      articul: "433702",
      title: "Керосин 0,5 л Карбон",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/03/433702-311x303.jpeg",
      price: 115,
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
      id: "kerosin-1-l-karbon",
      articul: "433701",
      title: "Керосин 1 л Карбон",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/03/433701-307x303.jpeg",
      price: 175,
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
      id: "ksilol-5l",
      articul: "035119",
      title: "Ксилол 5л",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 1150,
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
      id: "ksilol-0-9l",
      articul: "583",
      title: "Ксилол 0,9л",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/03/583-303x303.jpeg",
      price: 270,
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
      id: "ksilol-0-9l-ip",
      articul: "11431",
      title: "Ксилол 0,9л ИП",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 240,
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
      id: "ksilol-10l",
      articul: "035118",
      title: "Ксилол 10л",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/7cb5c4bd-387f-11e6-827e-c8600046bc56_3b51f988-9bf2-11ea-937e-002590ba8283-372x279.jpeg",
      price: 2210,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        ves: "10 л"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Вес",
          value: "10 л"
        }
      ]
    },
    {
      id: "ksilol-10l-ip",
      articul: "11432",
      title: "Ксилол 10л ИП",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 1900,
      inStock: false,
      quickBuy: true,
      filterValues: {
        ves: "10 л",
        strana: "Россия"
      },
      specs: [
        {
          label: "Вес",
          value: "10 л"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        }
      ]
    },
    {
      id: "razbavitel-alpina-075-l",
      articul: "004036",
      title: "Разбавитель Альпина 0,75 л",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/19541d74-c8d2-11ea-9386-002590ba8283_d043614e-df94-11ea-938b-002590ba8283-303x303.jpeg",
      price: 820,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Alpina",
        ves: "0.75 л"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Alpina"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Вес",
          value: "0.75 л"
        }
      ]
    },
    {
      id: "rastvoritel-646-04l",
      articul: "061348",
      title: "Растворитель 646 0,4л",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/b6747adb-30c4-11e2-a1f1-c8600046bc56_3b51f99e-9bf2-11ea-937e-002590ba8283-372x279.jpeg",
      price: 95,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    }
  ]
};
