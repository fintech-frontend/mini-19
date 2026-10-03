import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/otdelochnye-materialy/lakokrasochnye-materialy/stroitelnaya-khimiya/ */
export const stroitelnayaKhimiyaListing: CatalogListingData = {
  path: "otdelochnye-materialy/lakokrasochnye-materialy/stroitelnaya-khimiya",
  title: "Строительная химия",
  totalCountLabel: "59 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Тефлекс",
        "Фарант",
        "Titan Luxe",
        "Uni-Bet"
      ],
      truncate: false
    },
    {
      id: "tip",
      title: "Тип товара",
      options: [
        "Антиплесень",
        "Антисептик"
      ],
      truncate: false
    },
    {
      id: "ves",
      title: "Вес",
      options: [
        "0.5 л",
        "1 л",
        "5 л",
        "10 л"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "antiplesen-10-l",
      articul: "013074",
      title: "Антиплесень 10 л",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/86abbb91-30c4-11e2-a1f1-c8600046bc56_7a5e9acb-9bf2-11ea-937e-002590ba8283.jpeg",
      price: 690,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Uni-Bet",
        ves: "10 л",
        tip: "Антиплесень"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Uni-Bet"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Вес",
          value: "10 л"
        },
        {
          label: "Тип товара",
          value: "Антиплесень"
        }
      ]
    },
    {
      id: "antiplesen-1l",
      articul: "013076",
      title: "Антиплесень 1л",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/1dd56de8-c959-11e8-8c39-c8600046bc56_7a5e9aca-9bf2-11ea-937e-002590ba8283-139x303.jpeg",
      price: 170,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Uni-Bet",
        ves: "1 л",
        tip: "Антиплесень"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Uni-Bet"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Вес",
          value: "1 л"
        },
        {
          label: "Тип товара",
          value: "Антиплесень"
        }
      ]
    },
    {
      id: "antiplesen-5-l",
      articul: "013077",
      title: "Антиплесень 5 л",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/86abbb95-30c4-11e2-a1f1-c8600046bc56_7a5e9ac9-9bf2-11ea-937e-002590ba8283.jpeg",
      price: 465,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Uni-Bet",
        ves: "5 л",
        tip: "Антиплесень"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Uni-Bet"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Вес",
          value: "5 л"
        },
        {
          label: "Тип товара",
          value: "Антиплесень"
        }
      ]
    },
    {
      id: "antiplesen-neomid-600-05kg",
      articul: "427918",
      title: "Антиплесень НЕОМИД 600 0,5кг",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/03/427918-233x303.jpeg",
      price: 450,
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
      id: "antiplesen-neomid-600-5kg",
      articul: "425946",
      title: "Антиплесень НЕОМИД 600 5кг",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/03/425946-289x303.jpeg",
      price: 1850,
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
      id: "antiplesen-sprey-farant-05l",
      articul: "013086",
      title: "Антиплесень спрей Фарант 0,5л",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/7919bc7b-f76e-11e3-8414-c8600046bc53_7a5e9ac7-9bf2-11ea-937e-002590ba8283-303x303.jpeg",
      price: 410,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Фарант",
        ves: "0.5 л",
        tip: "Антиплесень"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Фарант"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Вес",
          value: "0.5 л"
        },
        {
          label: "Тип товара",
          value: "Антиплесень"
        }
      ]
    },
    {
      id: "antiplesen-propitka-tefleks-5l",
      articul: "013088",
      title: "Антиплесень-пропитка Тефлекс 5л",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/2fd0da25-977f-11e6-b3c9-c8600046bc56_7a5e9ac5-9bf2-11ea-937e-002590ba8283-220x303.jpeg",
      price: 1500,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Тефлекс",
        ves: "5 л",
        tip: "Антиплесень"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Тефлекс"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Вес",
          value: "5 л"
        },
        {
          label: "Тип товара",
          value: "Антиплесень"
        }
      ]
    },
    {
      id: "antiplesen-propitka-sprey-tefleks-1l",
      articul: "419145",
      title: "Антиплесень-пропитка спрей Тефлекс 1л",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/03/419145-309x303.jpeg",
      price: 315,
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
      id: "antiplesen-propitka-tefleks-1l",
      articul: "013087",
      title: "Антиплесень-пропитка Тефлекс 1л",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/5e16befe-f76e-11e3-8414-c8600046bc53_7a5e9ac6-9bf2-11ea-937e-002590ba8283-227x303.jpeg",
      price: 240,
      inStock: false,
      quickBuy: true,
      filterValues: {
        tip: "Антиплесень",
        brend: "Тефлекс",
        ves: "1 л",
        strana: "Россия"
      },
      specs: [
        {
          label: "Тип товара",
          value: "Антиплесень"
        },
        {
          label: "Бренд",
          value: "Тефлекс"
        },
        {
          label: "Вес",
          value: "1 л"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        }
      ]
    },
    {
      id: "antiseptik-neomid-eco-440-5l-koncentrat-19",
      articul: "406375",
      title: "Антисептик Неомид ECO 440 5л концентрат (1:9)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/16340760-649d-11ec-93c2-002590ba8282_41b59775-64a3-11ec-93c2-002590ba8282-303x303.png",
      price: 2900,
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
      id: "antiseptik-titan-bio-11-10-l",
      articul: "013189",
      title: "Антисептик Титан Био -11 10 л",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/8e069b0c-30c4-11e2-a1f1-c8600046bc56_7a5e9ac4-9bf2-11ea-937e-002590ba8283-372x256.jpeg",
      price: 630,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Titan Luxe",
        ves: "10 л",
        tip: "Антисептик"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Titan Luxe"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Вес",
          value: "10 л"
        },
        {
          label: "Тип товара",
          value: "Антисептик"
        }
      ]
    },
    {
      id: "antiseptik-titan-bio-77-10-l",
      articul: "013190",
      title: "Антисептик Титан Био -77 10 л",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/8e069b0e-30c4-11e2-a1f1-c8600046bc56_7a5e9ac3-9bf2-11ea-937e-002590ba8283-372x256.jpeg",
      price: 650,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Titan Luxe",
        ves: "10 л",
        tip: "Антисептик"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Titan Luxe"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Вес",
          value: "10 л"
        },
        {
          label: "Тип товара",
          value: "Антисептик"
        }
      ]
    }
  ]
};
