import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/vodo-gazosnabzhenie/zapornaya-armatura-i-dobornye-yelement/krany/ */
export const kranyListing: CatalogListingData = {
  path: "vodo-gazosnabzhenie/zapornaya-armatura-i-dobornye-yelement/krany",
  title: "Краны",
  totalCountLabel: "192 товара",
  filterFields: [
    {
      id: "davlenie",
      title: "Давление",
      options: [
        "16 бар",
        "40 бар"
      ],
      truncate: false
    },
    {
      id: "davlenie-ru",
      title: "Давление (Ру)",
      options: [
        "16",
        "25",
        "40"
      ],
      truncate: false
    },
    {
      id: "diametr",
      title: "Диаметр",
      options: [
        "Ду-32",
        "Ду-65",
        "Ду-100"
      ],
      truncate: false
    },
    {
      id: "diametr-du",
      title: "Диаметр (Ду)",
      options: [
        "25",
        "32",
        "50",
        "65/50",
        "100/80"
      ],
      truncate: false
    },
    {
      id: "prisoedinenie",
      title: "Присоединение",
      options: [
        "Под приварку",
        "Фланцевое"
      ],
      truncate: false
    },
    {
      id: "tip",
      title: "Тип",
      options: [
        "Кран шаровый",
        "Шаровый кран"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "kran-11-s67p-dn-20-rn-40-ci-pod-privarku",
      articul: "10783",
      title: "Кран 11 с67п DN 20 РN 40 Ci (под приварку)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 1800,
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
      id: "kran-11-s67p-dn100-ru-16-marshalflanc-polnoprokhod",
      articul: "002327",
      title: "Кран 11 с67п DN100 РУ-1,6 МАРШАЛФЛАНЦ полнопроходной",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/10/002327-310x303.jpeg",
      price: 19440,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Россия",
        brend: "11с67п",
        tip: "Кран шаровый",
        diametr: "Ду-100",
        davlenie: "16 бар",
        prohod: "Полнопроходной"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "11с67п"
        },
        {
          label: "Тип",
          value: "Кран шаровый"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Диаметр",
          value: "Ду-100"
        },
        {
          label: "Давление",
          value: "16 бар"
        },
        {
          label: "Проход",
          value: "Полнопроходной"
        }
      ]
    },
    {
      id: "kran-11-s67p-dn100-80-cp-marshalflanc",
      articul: "033366",
      title: "Кран 11 с67п Dn100/80 ЦП МАРШАЛФЛАНЦ",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/28ffaa6e-7d37-11e5-9aea-c8600046bc56_4188da6e-a7c8-11ea-9383-002590ba8283-303x303.jpeg",
      price: 8850,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "11с67п",
        "strana-proizvoditel": "Россия",
        tip: "Шаровый кран",
        "diametr-du": "100/80",
        "davlenie-ru": "25",
        prisoedinenie: "Фланцевое",
        "material-korpusa": "Сталь"
      },
      specs: [
        {
          label: "Бренд",
          value: "11с67п"
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
          label: "Тип",
          value: "Шаровый кран"
        },
        {
          label: "Диаметр (Ду)",
          value: "100/80"
        },
        {
          label: "Давление (Ру)",
          value: "25"
        },
        {
          label: "Присоединение",
          value: "Фланцевое"
        },
        {
          label: "Материал корпуса",
          value: "Сталь"
        }
      ]
    },
    {
      id: "kran-11-s67p-dn25-rn40-pod-priv",
      articul: "033367",
      title: "Кран 11 с67п Dn25 РN40 под прив",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/3f68a1d5-c186-11e8-8c39-c8600046bc56_b41f3d11-9e52-11ea-937e-002590ba8283-303x303.jpeg",
      price: 1700,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "11с67п",
        "strana-proizvoditel": "Россия",
        tip: "Шаровый кран",
        "diametr-du": "25",
        "davlenie-ru": "40",
        prisoedinenie: "Под приварку",
        "material-korpusa": "Сталь"
      },
      specs: [
        {
          label: "Бренд",
          value: "11с67п"
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
          label: "Тип",
          value: "Шаровый кран"
        },
        {
          label: "Диаметр (Ду)",
          value: "25"
        },
        {
          label: "Давление (Ру)",
          value: "40"
        },
        {
          label: "Присоединение",
          value: "Под приварку"
        },
        {
          label: "Материал корпуса",
          value: "Сталь"
        }
      ]
    },
    {
      id: "kran-11-s67p-dn32-pn40",
      articul: "033368",
      title: "Кран 11 с67п Dn32 PN40 под прив",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/cfc5a20d-8764-11e9-a98d-c8600046bc56_b41f3d12-9e52-11ea-937e-002590ba8283-303x303.jpeg",
      price: 1995,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "11с67п",
        "strana-proizvoditel": "Россия",
        tip: "Шаровый кран",
        "diametr-du": "32",
        "davlenie-ru": "40",
        prisoedinenie: "Под приварку",
        "material-korpusa": "Сталь"
      },
      specs: [
        {
          label: "Бренд",
          value: "11с67п"
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
          label: "Тип",
          value: "Шаровый кран"
        },
        {
          label: "Диаметр (Ду)",
          value: "32"
        },
        {
          label: "Давление (Ру)",
          value: "40"
        },
        {
          label: "Присоединение",
          value: "Под приварку"
        },
        {
          label: "Материал корпуса",
          value: "Сталь"
        }
      ]
    },
    {
      id: "kran-11-s67p-dn32-rn40-flanec",
      articul: "033369",
      title: "Кран 11 с67п Dn32 РN40 фланец",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/4b299638-9498-11e8-bee0-c8600046bc53_b41f3d13-9e52-11ea-937e-002590ba8283-303x303.jpeg",
      price: 3200,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Россия",
        brend: "11с67п",
        tip: "Кран шаровый",
        diametr: "Ду-32",
        davlenie: "40 бар",
        prisoedinenie: "Фланцевое"
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
          label: "Бренд",
          value: "11с67п"
        },
        {
          label: "Тип",
          value: "Кран шаровый"
        },
        {
          label: "Диаметр",
          value: "Ду-32"
        },
        {
          label: "Давление",
          value: "40 бар"
        },
        {
          label: "Присоединение",
          value: "Фланцевое"
        }
      ]
    },
    {
      id: "kran-11-s67p-dn50-pn40-ci-cp-flanc",
      articul: "422264",
      title: "Кран 11 с67п Dn50 PN40 Ci ЦП ФЛАНЦ",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/422264-2-303x303.jpg",
      price: 4200,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "11с67п",
        "strana-proizvoditel": "Россия",
        tip: "Шаровый кран",
        "diametr-du": "50",
        "davlenie-ru": "40",
        prisoedinenie: "Фланцевое",
        "material-korpusa": "Сталь"
      },
      specs: [
        {
          label: "Бренд",
          value: "11с67п"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Шаровый кран"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Диаметр (Ду)",
          value: "50"
        },
        {
          label: "Давление (Ру)",
          value: "40"
        },
        {
          label: "Присоединение",
          value: "Фланцевое"
        },
        {
          label: "Материал корпуса",
          value: "Сталь"
        }
      ]
    },
    {
      id: "kran-11-s67p-dn50-cp-polnoprohodnoj-priv",
      articul: "033370",
      title: "Кран 11 с67п DN50 ЦП полнопроходной прив.",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 3850,
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
      id: "kran-11-s67p-dn50-cp-marshalflanc",
      articul: "033371",
      title: "Кран 11 с67п Dn50 ЦП МАРШАЛФЛАНЦ",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/ffd5be93-7d36-11e5-9aea-c8600046bc56_b41f3d15-9e52-11ea-937e-002590ba8283-303x303.jpeg",
      price: 4050,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "11с67п",
        "strana-proizvoditel": "Россия",
        tip: "Шаровый кран",
        "diametr-du": "50",
        "davlenie-ru": "16",
        prisoedinenie: "Фланцевое",
        "material-korpusa": "Сталь"
      },
      specs: [
        {
          label: "Бренд",
          value: "11с67п"
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
          label: "Тип",
          value: "Шаровый кран"
        },
        {
          label: "Диаметр (Ду)",
          value: "50"
        },
        {
          label: "Давление (Ру)",
          value: "16"
        },
        {
          label: "Присоединение",
          value: "Фланцевое"
        },
        {
          label: "Материал корпуса",
          value: "Сталь"
        }
      ]
    },
    {
      id: "kran-11-s67p-f40-ru-40-shar-flanc-polnoprohodno",
      articul: "033375",
      title: "Кран 11 с67п ф40 Ру 40 шар фланц полнопроходной Маршал УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/10/033375-303x303.jpeg",
      price: 307778,
      inStock: true,
      quickBuy: true,
      filterValues: {}
    },
    {
      id: "kran-11-s67p-f65-ru-16-shar-flanc",
      articul: "033377",
      title: "Кран 11 с67п ф65 Ру 16 шар фланц",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/b465c3d8-abca-11e6-b3c9-c8600046bc56_b41f3d17-9e52-11ea-937e-002590ba8283-303x303.jpeg",
      price: 7110,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Россия",
        brend: "11с67п",
        tip: "Кран шаровый",
        diametr: "Ду-65",
        davlenie: "16 бар",
        prisoedinenie: "Фланцевое"
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
          label: "Бренд",
          value: "11с67п"
        },
        {
          label: "Тип",
          value: "Кран шаровый"
        },
        {
          label: "Диаметр",
          value: "Ду-65"
        },
        {
          label: "Давление",
          value: "16 бар"
        },
        {
          label: "Присоединение",
          value: "Фланцевое"
        }
      ]
    },
    {
      id: "kran-11-s67p-f65-50-ru-16-shar-pod-priv",
      articul: "033378",
      title: "Кран 11 с67п ф65/50 Ру 16 шар под прив",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/5371c2ce-b866-11ea-9385-002590ba8283_67119770-cdde-11ec-93ce-002590ba8282-372x244.jpeg",
      price: 3500,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "11с67п",
        "strana-proizvoditel": "Россия",
        tip: "Шаровый кран",
        "diametr-du": "65/50",
        "davlenie-ru": "16",
        prisoedinenie: "Под приварку",
        "material-korpusa": "Сталь"
      },
      specs: [
        {
          label: "Бренд",
          value: "11с67п"
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
          label: "Тип",
          value: "Шаровый кран"
        },
        {
          label: "Диаметр (Ду)",
          value: "65/50"
        },
        {
          label: "Давление (Ру)",
          value: "16"
        },
        {
          label: "Присоединение",
          value: "Под приварку"
        },
        {
          label: "Материал корпуса",
          value: "Сталь"
        }
      ]
    }
  ]
};
