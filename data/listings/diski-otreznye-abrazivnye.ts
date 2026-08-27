import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/instrument/yelektroinstrument/raskhodnye-materialy-i-osnastka-dlya-yel/krugi-i-diski-dlya-yelektroinstrumenta/diski-otreznye-abrazivnye/ */
export const diskiOtreznyeAbrazivnyeListing: CatalogListingData = {
  path: "instrument/yelektroinstrument/raskhodnye-materialy-i-osnastka-dlya-yel/krugi-i-diski-dlya-yelektroinstrumenta/diski-otreznye-abrazivnye",
  title: "Диски отрезные абразивные",
  totalCountLabel: "131 товар",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "АТАКА",
        "Вихрь",
        "Кратон",
        "ЛУГА",
        "Прораб",
        "CUTOP",
        "DERZHI"
      ],
      truncate: true
    },
    {
      id: "strana",
      title: "Страна производитель",
      options: [
        "Китай",
        "Россия"
      ],
      truncate: false
    },
    {
      id: "naznachenie",
      title: "Назначение",
      options: [
        "Металл",
        "Металл, нержавейка"
      ],
      truncate: false
    },
    {
      id: "posadochnyj-diametr",
      title: "Посадочный диаметр",
      options: [
        "22 мм",
        "22, 2 мм",
        "22, 23 мм"
      ],
      truncate: false
    },
    {
      id: "tolshhina",
      title: "Толщина",
      options: [
        "1, 0 мм",
        "1, 2 мм",
        "1, 6 мм"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "krug-115kh10222-cutop",
      articul: "034507",
      title: "Круг 115х1,0*22,2 CUTOP",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/3a9318bc-2033-11e7-969b-c8600046bc56_41b971e3-9fee-11ea-937f-002590ba8283-303x303.jpeg",
      price: 66,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "CUTOP",
        strana: "Китай",
        diametr: "115 мм",
        "posadochnyj-diametr": "22, 2 мм",
        tolshhina: "1, 0 мм",
        tip: "Круг"
      },
      specs: [
        {
          label: "Бренд",
          value: "CUTOP"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Диаметр",
          value: "115 мм"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Посадочный диаметр",
          value: "22, 2 мм"
        },
        {
          label: "Толщина",
          value: "1, 0 мм"
        },
        {
          label: "Тип товара",
          value: "Круг"
        }
      ]
    },
    {
      id: "krug-115kh1022-2-a-vikhr",
      articul: "034495",
      title: "Круг 115х1,0*22.2 А Вихрь",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/c132cb68-96b5-11ea-937d-002590ba8283_0f53a933-ba05-11ea-9385-002590ba8283-297x303.jpeg",
      price: 35,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Вихрь",
        strana: "Китай",
        diametr: "115 мм",
        "posadochnyj-diametr": "22, 2 мм",
        tolshhina: "1, 0 мм",
        tip: "Круг"
      },
      specs: [
        {
          label: "Бренд",
          value: "Вихрь"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Диаметр",
          value: "115 мм"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Посадочный диаметр",
          value: "22, 2 мм"
        },
        {
          label: "Толщина",
          value: "1, 0 мм"
        },
        {
          label: "Тип товара",
          value: "Круг"
        }
      ]
    },
    {
      id: "krug-115kh1022-23-a-kraton",
      articul: "034496",
      title: "Круг 115х1,0*22.23 А Кратон",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/e26b8142-c5c7-11e2-b3e3-c8600046bc56_41b971ea-9fee-11ea-937f-002590ba8283-372x283.jpeg",
      price: 59,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Кратон",
        strana: "Китай",
        diametr: "115 мм",
        "posadochnyj-diametr": "22, 23 мм",
        tolshhina: "1, 0 мм",
        tip: "Круг"
      },
      specs: [
        {
          label: "Бренд",
          value: "Кратон"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Диаметр",
          value: "115 мм"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Посадочный диаметр",
          value: "22, 23 мм"
        },
        {
          label: "Толщина",
          value: "1, 0 мм"
        },
        {
          label: "Тип товара",
          value: "Круг"
        }
      ]
    },
    {
      id: "krug-115kh1022-23-a-metnerzh-luga",
      articul: "034497",
      title: "Круг 115х1,0*22.23 А мет+нерж Луга",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/0b3356bb-c5c7-11e2-b3e3-c8600046bc56_41b971e9-9fee-11ea-937f-002590ba8283-372x235.jpeg",
      price: 24,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "ЛУГА",
        strana: "Россия",
        diametr: "115 мм",
        "posadochnyj-diametr": "22, 23 мм",
        naznachenie: "Металл, нержавейка",
        tip: "Круг"
      },
      specs: [
        {
          label: "Бренд",
          value: "ЛУГА"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Диаметр",
          value: "115 мм"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Посадочный диаметр",
          value: "22, 23 мм"
        },
        {
          label: "Назначение",
          value: "Металл, нержавейка"
        },
        {
          label: "Тип товара",
          value: "Круг"
        }
      ]
    },
    {
      id: "krug-115kh10kh22-2-derzhi",
      articul: "034508",
      title: "Круг 115х1,0х22.2 DERZHI УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/113e50fb-9fc3-11e8-bd57-c8600046bc53_41b971e2-9fee-11ea-937f-002590ba8283-303x303.jpeg",
      price: 45,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "DERZHI",
        strana: "Китай",
        diametr: "115 мм",
        "posadochnyj-diametr": "22, 2 мм",
        tolshhina: "1, 0 мм",
        tip: "Круг"
      },
      specs: [
        {
          label: "Бренд",
          value: "DERZHI"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Диаметр",
          value: "115 мм"
        },
        {
          label: "Посадочный диаметр",
          value: "22, 2 мм"
        },
        {
          label: "Толщина",
          value: "1, 0 мм"
        },
        {
          label: "Тип товара",
          value: "Круг"
        }
      ]
    },
    {
      id: "krug-115kh1222-prorab",
      articul: "034498",
      title: "Круг 115х1,2*22 Прораб",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/d083d17d-9ee8-11e3-bafe-c8600046bc56_3ba2ceeb-ba05-11ea-9385-002590ba8283-364x303.jpeg",
      price: 17,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Прораб",
        strana: "Китай",
        diametr: "115 мм",
        "posadochnyj-diametr": "22 мм",
        tolshhina: "1, 2 мм",
        tip: "Круг"
      },
      specs: [
        {
          label: "Бренд",
          value: "Прораб"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Диаметр",
          value: "115 мм"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Посадочный диаметр",
          value: "22 мм"
        },
        {
          label: "Толщина",
          value: "1, 2 мм"
        },
        {
          label: "Тип товара",
          value: "Круг"
        }
      ]
    },
    {
      id: "krug-115kh12222-cutop",
      articul: "034499",
      title: "Круг 115х1,2*22,2 CUTOP",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/eb8b2716-375b-11e5-af92-c8600046bc56_41b971e8-9fee-11ea-937f-002590ba8283-303x303.jpeg",
      price: 77,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "CUTOP",
        strana: "Китай",
        diametr: "115 мм",
        "posadochnyj-diametr": "22, 2 мм",
        tolshhina: "1, 2 мм",
        tip: "Круг"
      },
      specs: [
        {
          label: "Бренд",
          value: "CUTOP"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Диаметр",
          value: "115 мм"
        },
        {
          label: "Посадочный диаметр",
          value: "22, 2 мм"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Толщина",
          value: "1, 2 мм"
        },
        {
          label: "Тип товара",
          value: "Круг"
        }
      ]
    },
    {
      id: "krug-115kh1222-2-a-vikhr-ucenka",
      articul: "034500",
      title: "Круг 115х1,2*22.2 А Вихрь УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/d84e982f-96b5-11ea-937d-002590ba8283_5fb2050d-ba05-11ea-9385-002590ba8283-303x303.jpeg",
      price: 21,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "Вихрь",
        strana: "Китай",
        diametr: "115 мм",
        "posadochnyj-diametr": "22, 2 мм",
        tolshhina: "1, 2 мм",
        tip: "Круг"
      },
      specs: [
        {
          label: "Бренд",
          value: "Вихрь"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Диаметр",
          value: "115 мм"
        },
        {
          label: "Посадочный диаметр",
          value: "22, 2 мм"
        },
        {
          label: "Толщина",
          value: "1, 2 мм"
        },
        {
          label: "Тип товара",
          value: "Круг"
        }
      ]
    },
    {
      id: "krug-115kh1222-23-a-metnerzh-kraton",
      articul: "403903",
      title: "Круг 115х1,2*22.23 А мет+нерж Кратон",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/07/403903-301x303.jpeg",
      price: 6435,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Кратон",
        strana: "Китай",
        diametr: "115 мм",
        "posadochnyj-diametr": "22, 23 мм",
        tip: "Круг",
        naznachenie: "Металл, нержавейка"
      },
      specs: [
        {
          label: "Бренд",
          value: "Кратон"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Диаметр",
          value: "115 мм"
        },
        {
          label: "Посадочный диаметр",
          value: "22, 23 мм"
        },
        {
          label: "Тип товара",
          value: "Круг"
        },
        {
          label: "Назначение",
          value: "Металл, нержавейка"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "krug-115kh12kh22-ataka-po-metal",
      articul: "034509",
      title: "Круг 115х1,2х22 АТАКА по метал.",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/07/034509-322x303.jpeg",
      price: 4290,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "АТАКА",
        strana: "Россия",
        diametr: "115 мм",
        "posadochnyj-diametr": "22 мм",
        naznachenie: "Металл",
        tip: "Круг"
      },
      specs: [
        {
          label: "Бренд",
          value: "АТАКА"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Диаметр",
          value: "115 мм"
        },
        {
          label: "Посадочный диаметр",
          value: "22 мм"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Назначение",
          value: "Металл"
        },
        {
          label: "Тип товара",
          value: "Круг"
        }
      ]
    },
    {
      id: "krug-115kh12kh22-metnerzh-luga",
      articul: "034510",
      title: "Круг 115х1,2х22 мет+нерж Луга",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/0f4f5891-30c5-11e2-a1f1-c8600046bc56_41b971e1-9fee-11ea-937f-002590ba8283-372x235.jpeg",
      price: 26,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "ЛУГА",
        strana: "Россия",
        diametr: "115 мм",
        "posadochnyj-diametr": "22 мм",
        naznachenie: "Металл, нержавейка",
        tip: "Круг"
      },
      specs: [
        {
          label: "Бренд",
          value: "ЛУГА"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Диаметр",
          value: "115 мм"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Посадочный диаметр",
          value: "22 мм"
        },
        {
          label: "Назначение",
          value: "Металл, нержавейка"
        },
        {
          label: "Тип товара",
          value: "Круг"
        }
      ]
    },
    {
      id: "krug-115kh1622-2-a-vikhr",
      articul: "034501",
      title: "Круг 115х1,6*22.2 А Вихрь",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/e9c14aeb-96b5-11ea-937d-002590ba8283_8ab5b0df-ba05-11ea-9385-002590ba8283-303x303.jpeg",
      price: 3510,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Вихрь",
        strana: "Китай",
        diametr: "115 мм",
        "posadochnyj-diametr": "22, 2 мм",
        tolshhina: "1, 6 мм",
        tip: "Круг"
      },
      specs: [
        {
          label: "Бренд",
          value: "Вихрь"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Диаметр",
          value: "115 мм"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Посадочный диаметр",
          value: "22, 2 мм"
        },
        {
          label: "Толщина",
          value: "1, 6 мм"
        },
        {
          label: "Тип товара",
          value: "Круг"
        }
      ]
    }
  ]
};
