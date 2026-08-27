import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/obshhestroitelnye-materialy/polikarbonat/komplektuyushhie-dlya-polikarbonata/ */
export const komplektuyushhieDlyaPolikarbonataListing: CatalogListingData = {
  path: "obshhestroitelnye-materialy/polikarbonat/komplektuyushhie-dlya-polikarbonata",
  title: "Комплектующие для поликарбоната",
  totalCountLabel: "34 товара",
  filterFields: [
    {
      id: "dlina",
      title: "Длина",
      options: [
        "255 мм",
        "6000 мм"
      ],
      truncate: false
    },
    {
      id: "tolshhina",
      title: "Толщина",
      options: [
        "0,9мм",
        "4мм"
      ],
      truncate: false
    },
    {
      id: "tsvet",
      title: "Цвет",
      options: [
        "Бронза",
        "Зеленый",
        "Опал",
        "Прозрачный",
        "Серебро"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "lenta-perfor-lm-p-255-mm",
      articul: "036746",
      title: "Лента перфор. ЛМ п -255 мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/f5f96810-2156-11e5-bc64-c8600046bc56_8bcbba39-95e0-11ea-937d-002590ba8283-303x303.jpeg",
      price: 45,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "255 мм",
        tolshhina: "0,9мм",
        tsvet: "Серебро"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "255 мм"
        },
        {
          label: "Толщина",
          value: "0,9мм"
        },
        {
          label: "Цвет",
          value: "Серебро"
        }
      ]
    },
    {
      id: "profil-p-10mm-korichnevyj",
      articul: "429587",
      title: "Профиль П 10мм коричневый",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 140,
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
      id: "profil-pristennyy-fp-8-10-mm-l-6m-prozrachnyy",
      articul: "060181",
      title: "Профиль пристенный FP 8-10 мм L-6м прозрачный",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/c5a7c3bf-0b6e-11e6-a26e-c8600046bc56_2ededb71-9b6d-11ea-937e-002590ba8283-372x233.jpeg",
      price: 920,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        tsvet: "Прозрачный"
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
          label: "Цвет",
          value: "Прозрачный"
        }
      ]
    },
    {
      id: "profil-psn-4-mm-belyj",
      articul: "8199",
      title: "Профиль ПСН 4 мм белый",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 0,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        tsvet: "Прозрачный"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Цвет",
          value: "Прозрачный"
        }
      ]
    },
    {
      id: "profil-psn-4-mm-prozrachnyy",
      articul: "060193",
      title: "Профиль ПСН 4 мм прозрачный",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/5fbd1502-8c5e-11e2-ac56-c8600046bc56_8bcbba3a-95e0-11ea-937d-002590ba8283-372x246.jpeg",
      price: 600,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "6000 мм",
        tolshhina: "4мм",
        tsvet: "Прозрачный"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "6000 мм"
        },
        {
          label: "Толщина",
          value: "4мм"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Прозрачный"
        }
      ]
    },
    {
      id: "profil-rsb-bronza",
      articul: "060201",
      title: "Профиль РСБ бронза",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/d1cf9fb3-30c9-11e2-a1f1-c8600046bc56_8bcbba3b-95e0-11ea-937d-002590ba8283-372x245.jpeg",
      price: 950,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "6000 мм",
        tolshhina: "4мм",
        tsvet: "Бронза"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "6000 мм"
        },
        {
          label: "Толщина",
          value: "4мм"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Бронза"
        }
      ]
    },
    {
      id: "profil-rsb-zelenyy",
      articul: "060202",
      title: "Профиль РСБ зеленый",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/d1cf9fb5-30c9-11e2-a1f1-c8600046bc56_8bcbba3c-95e0-11ea-937d-002590ba8283-372x248.jpeg",
      price: 600,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        tsvet: "Зеленый"
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
          label: "Цвет",
          value: "Зеленый"
        }
      ]
    },
    {
      id: "profil-rsb-opal",
      articul: "060204",
      title: "Профиль РСБ опал",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/d1cf9fb9-30c9-11e2-a1f1-c8600046bc56_8bcbba3d-95e0-11ea-937d-002590ba8283-303x303.jpeg",
      price: 800,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "6000 мм",
        tolshhina: "4мм",
        tsvet: "Опал"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "6000 мм"
        },
        {
          label: "Толщина",
          value: "4мм"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Опал"
        }
      ]
    },
    {
      id: "profil-rsb-prozrachnyy",
      articul: "060206",
      title: "Профиль РСБ прозрачный",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/d1cf9fbd-30c9-11e2-a1f1-c8600046bc56_5d41a71d-9b6d-11ea-937e-002590ba8283-372x247.jpeg",
      price: 800,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "6000 мм",
        tolshhina: "4мм",
        tsvet: "Прозрачный"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "6000 мм"
        },
        {
          label: "Толщина",
          value: "4мм"
        },
        {
          label: "Цвет",
          value: "Прозрачный"
        }
      ]
    },
    {
      id: "profil-rsk-bronza",
      articul: "060210",
      title: "Профиль РСК бронза",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/d9613f26-30c9-11e2-a1f1-c8600046bc56_8bcbba3e-95e0-11ea-937d-002590ba8283-372x245.jpeg",
      price: 950,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "6000 мм",
        tolshhina: "4мм",
        tsvet: "Бронза"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "6000 мм"
        },
        {
          label: "Толщина",
          value: "4мм"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Бронза"
        }
      ]
    },
    {
      id: "profil-rsk-zelenyy",
      articul: "060212",
      title: "Профиль РСК зеленый",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/d9613f2a-30c9-11e2-a1f1-c8600046bc56_8bcbba3f-95e0-11ea-937d-002590ba8283-372x248.jpeg",
      price: 600,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        tsvet: "Зеленый"
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
          label: "Цвет",
          value: "Зеленый"
        }
      ]
    },
    {
      id: "profil-rsk-opal",
      articul: "060214",
      title: "Профиль РСК опал",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/d9613f2e-30c9-11e2-a1f1-c8600046bc56_8bcbba40-95e0-11ea-937d-002590ba8283-303x303.jpeg",
      price: 800,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "6000 мм",
        tolshhina: "4мм",
        tsvet: "Опал"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "6000 мм"
        },
        {
          label: "Толщина",
          value: "4мм"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Опал"
        }
      ]
    }
  ]
};
