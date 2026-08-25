import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/tovary-dlya-doma-sada-i-ogoroda/sadovyy-inventar/prochie-tovary/ */
export const prochieTovaryListing: CatalogListingData = {
  path: "tovary-dlya-doma-sada-i-ogoroda/sadovyy-inventar/prochie-tovary",
  title: "Прочие товары",
  totalCountLabel: "55 товаров",
  filterFields: [
    {
      id: "konstruktsiya",
      title: "Конструкция",
      options: [
        "компрессия",
        "литой"
      ],
      truncate: false
    },
    {
      id: "obem",
      title: "Объем",
      options: [
        "50 гр",
        "100 мл"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "anti-krot-granuly-50g",
      articul: "405155",
      title: "Анти-крот гранулы 50г",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/03/405155-290x303.jpeg",
      price: 18,
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
      id: "armirovannaja-plenka-200-mkm-s-leskoj-25-m-rul",
      articul: "434500",
      title: "Армированная пленка 200 мкм с леской 25 м/рул",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/10/434500-343x303.jpeg",
      price: 4300,
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
      id: "ajerozol-ot-nasekomyh-chistyj-dom-400-ml-02-855",
      articul: "428058",
      title: "Аэрозоль от насекомых Чистый дом 400 мл 02-855",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/04/428058-216x303.jpeg",
      price: 490,
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
      id: "bur-shnekovyy-200-mm-69-9-205",
      articul: "016208",
      title: "Бур шнековый 200 мм 69-9-205 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/4cf16b1f-55c0-11e8-bc6a-c8600046bc56_e4167415-9cfa-11ea-937e-002590ba8283-372x279.jpeg",
      price: 84505,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        konstruktsiya: "компрессия"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Конструкция",
          value: "компрессия"
        }
      ]
    },
    {
      id: "bur-shnekovyy-2m-diam-150-mm",
      articul: "419837",
      title: "Бур шнековый 2м диам 150 мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/04/419837-329x303.jpeg",
      price: 1020,
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
      id: "granuly-ot-krotov-50gr-paket-argus-garden",
      articul: "006504",
      title: "Гранулы от кротов 50гр пакет Argus Garden",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/6d553611-46ec-11e9-9b5e-c8600046bc56_099bb057-9cfa-11ea-937e-002590ba8283.jpeg",
      price: 28,
      inStock: true,
      quickBuy: true,
      filterValues: {
        obem: "50 гр",
        konstruktsiya: "литой"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Объем",
          value: "50 гр"
        },
        {
          label: "Конструкция",
          value: "литой"
        }
      ]
    },
    {
      id: "zashhita-ot-sornyakov-graund-100-ml",
      articul: "081209",
      title: "Защита от сорняков Граунд 100 мл",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/16c8c8a1-bf8c-11ea-9385-002590ba8283_52947c0e-c128-11ea-9386-002590ba8283.jpeg",
      price: 290,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Граун",
        obem: "100 мл",
        konstruktsiya: "компрессия"
      },
      specs: [
        {
          label: "Бренд",
          value: "Граун"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Объем",
          value: "100 мл"
        },
        {
          label: "Конструкция",
          value: "компрессия"
        }
      ]
    },
    {
      id: "zashhita-ot-sornyakov-graund-250-ml",
      articul: "022435",
      title: "Защита от сорняков Граунд 250 мл (Чистогряд)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/28ae80ca-6241-11e8-a9cc-c8600046bc56_099bb064-9cfa-11ea-937e-002590ba8283.jpeg",
      price: 740,
      inStock: false,
      quickBuy: true,
      filterValues: {
        konstruktsiya: "компрессия"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Конструкция",
          value: "компрессия"
        }
      ]
    },
    {
      id: "kley-ot-gryzunov-i-nasekomykh-60-gr-chisty",
      articul: "027262",
      title: "Клей от грызунов и насекомых 60 гр Чистый дом 03-426",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/07d8df71-1ca7-11e9-beda-c8600046bc56_099bb065-9cfa-11ea-937e-002590ba8283.jpeg",
      price: 140,
      inStock: true,
      quickBuy: true,
      filterValues: {
        konstruktsiya: "компрессия"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Конструкция",
          value: "компрессия"
        }
      ]
    },
    {
      id: "konus-dlya-posadki-lukovichnykh-rk9511s-2020",
      articul: "402397",
      title: "Конус для посадки луковичных РК9511С 2020",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/a7f501ae-d812-11eb-93ad-002590ba8282_7f1afa71-7084-11ed-93dd-002590ba8282.jpeg",
      price: 180,
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
      id: "kran-startovyy-dlya-plast-truby-k-kapel",
      articul: "201043",
      title: "Кран стартовый для пласт. трубы к капельной ленте 293-285Д 17х8",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/03/201043-372x285.jpeg",
      price: 19,
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
      id: "kraska-dlya-sadovykh-derevev-13-kg",
      articul: "408559",
      title: "Краска для садовых деревьев 1,3 кг",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/d536bf86-c0a4-11ec-93cc-002590ba8282_560e88a8-707b-11ed-93dc-002590ba8282.jpeg",
      price: 110,
      inStock: true,
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
