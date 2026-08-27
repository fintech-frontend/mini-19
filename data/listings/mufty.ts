import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/vodo-gazosnabzhenie/zapornaya-armatura-i-dobornye-yelement/mufty/ */
export const muftyListing: CatalogListingData = {
  path: "vodo-gazosnabzhenie/zapornaya-armatura-i-dobornye-yelement/mufty",
  title: "Муфты",
  totalCountLabel: "22 товара",
  filterFields: [
    {
      id: "diametr-du",
      title: "Диаметр (Ду)",
      options: [
        "15",
        "20",
        "25",
        "32",
        "40",
        "50",
        "65",
        "100",
        "250"
      ],
      truncate: true
    },
    {
      id: "material",
      title: "Материал",
      options: [
        "Оцинкованная сталь",
        "Сталь"
      ],
      truncate: false
    },
    {
      id: "tip",
      title: "Тип",
      options: [
        "Втулка под фланец",
        "Муфта",
        "Ремонтная муфта"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "vtulka-pod-flanec-pje100-sdr17-d-250-mm-lit-l-105-mm",
      articul: "3961",
      title: "Втулка под фланец ПЭ100 SDR17 d=250 мм лит L=105 мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 2100,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "–",
        "strana-proizvoditel": "Россия",
        tip: "Втулка под фланец",
        "diametr-du": "250",
        "material-truby": "ПЭ100"
      },
      specs: [
        {
          label: "Бренд",
          value: "–"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип",
          value: "Втулка под фланец"
        },
        {
          label: "Диаметр (Ду)",
          value: "250"
        },
        {
          label: "Материал трубы",
          value: "ПЭ100"
        }
      ]
    },
    {
      id: "mufta-ocink-du-25-u",
      articul: "041950",
      title: "Муфта оцинк. Ду 25 У",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/b7f1d52b-30c5-11e2-a1f1-c8600046bc56_c034ee17-9e52-11ea-937e-002590ba8283-303x303.jpeg",
      price: 18,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "–",
        "strana-proizvoditel": "Россия",
        tip: "Муфта",
        "diametr-du": "25",
        material: "Оцинкованная сталь"
      },
      specs: [
        {
          label: "Бренд",
          value: "–"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Муфта"
        },
        {
          label: "Диаметр (Ду)",
          value: "25"
        },
        {
          label: "Материал",
          value: "Оцинкованная сталь"
        }
      ]
    },
    {
      id: "mufta-rem-soed-na-pje-trubu-du-65-pn-16",
      articul: "434757",
      title: "Муфта рем. соед. на ПЭ трубу Ду 65 PN 16",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 4350,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "–",
        "strana-proizvoditel": "Россия",
        tip: "Ремонтная муфта",
        "diametr-du": "65",
        "davlenie-pn": "16"
      },
      specs: [
        {
          label: "Бренд",
          value: "–"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Ремонтная муфта"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Диаметр (Ду)",
          value: "65"
        },
        {
          label: "Давление (PN)",
          value: "16"
        }
      ]
    },
    {
      id: "mufta-soed-1-ok-ucenka",
      articul: "042087",
      title: "Муфта соед 1″ ОК УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/b7f1d53f-30c5-11e2-a1f1-c8600046bc56_c034ee18-9e52-11ea-937e-002590ba8283-303x303.jpeg",
      price: 333,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "–",
        "strana-proizvoditel": "Россия",
        tip: "Муфта",
        razmer: "1'",
        status: "Уценка"
      },
      specs: [
        {
          label: "Бренд",
          value: "–"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Муфта"
        },
        {
          label: "Размер",
          value: "1'"
        },
        {
          label: "Статус",
          value: "Уценка"
        }
      ]
    },
    {
      id: "mufta-stalnaya-15",
      articul: "042131",
      title: "Муфта стальная 15",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/b7f1d547-30c5-11e2-a1f1-c8600046bc56_c034ee1b-9e52-11ea-937e-002590ba8283-303x303.jpeg",
      price: 33,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "–",
        "strana-proizvoditel": "Россия",
        tip: "Муфта",
        "diametr-du": "15",
        material: "Сталь"
      },
      specs: [
        {
          label: "Бренд",
          value: "–"
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
          value: "Муфта"
        },
        {
          label: "Диаметр (Ду)",
          value: "15"
        },
        {
          label: "Материал",
          value: "Сталь"
        }
      ]
    },
    {
      id: "mufta-stalnaya-20",
      articul: "042132",
      title: "Муфта стальная 20",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/befbc5f8-30c5-11e2-a1f1-c8600046bc56_c034ee1c-9e52-11ea-937e-002590ba8283-303x303.jpeg",
      price: 50,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "–",
        "strana-proizvoditel": "Россия",
        tip: "Муфта",
        "diametr-du": "20",
        material: "Сталь"
      },
      specs: [
        {
          label: "Бренд",
          value: "–"
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
          value: "Муфта"
        },
        {
          label: "Диаметр (Ду)",
          value: "20"
        },
        {
          label: "Материал",
          value: "Сталь"
        }
      ]
    },
    {
      id: "mufta-stalnaya-25",
      articul: "042133",
      title: "Муфта стальная 25",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/befbc5fa-30c5-11e2-a1f1-c8600046bc56_c034ee1d-9e52-11ea-937e-002590ba8283-303x303.jpeg",
      price: 66,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "–",
        "strana-proizvoditel": "Россия",
        tip: "Муфта",
        "diametr-du": "25",
        material: "Сталь"
      },
      specs: [
        {
          label: "Бренд",
          value: "–"
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
          value: "Муфта"
        },
        {
          label: "Диаметр (Ду)",
          value: "25"
        },
        {
          label: "Материал",
          value: "Сталь"
        }
      ]
    },
    {
      id: "mufta-stalnaya-32",
      articul: "042134",
      title: "Муфта стальная 32",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/befbc5fc-30c5-11e2-a1f1-c8600046bc56_c034ee1e-9e52-11ea-937e-002590ba8283-303x303.jpeg",
      price: 88,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "–",
        "strana-proizvoditel": "Россия",
        tip: "Муфта",
        "diametr-du": "32",
        material: "Сталь"
      },
      specs: [
        {
          label: "Бренд",
          value: "–"
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
          value: "Муфта"
        },
        {
          label: "Диаметр (Ду)",
          value: "32"
        },
        {
          label: "Материал",
          value: "Сталь"
        }
      ]
    },
    {
      id: "mufta-stalnaya-40",
      articul: "042135",
      title: "Муфта стальная 40",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/befbc5fe-30c5-11e2-a1f1-c8600046bc56_c034ee1f-9e52-11ea-937e-002590ba8283-303x303.jpeg",
      price: 190,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "–",
        "strana-proizvoditel": "Россия",
        tip: "Муфта",
        "diametr-du": "40",
        material: "Сталь"
      },
      specs: [
        {
          label: "Бренд",
          value: "–"
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
          value: "Муфта"
        },
        {
          label: "Диаметр (Ду)",
          value: "40"
        },
        {
          label: "Материал",
          value: "Сталь"
        }
      ]
    },
    {
      id: "mufta-stalnaya-50",
      articul: "042136",
      title: "Муфта стальная 50",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/befbc600-30c5-11e2-a1f1-c8600046bc56_c034ee20-9e52-11ea-937e-002590ba8283-303x303.jpeg",
      price: 290,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "–",
        "strana-proizvoditel": "Россия",
        tip: "Муфта",
        "diametr-du": "50",
        material: "Сталь"
      },
      specs: [
        {
          label: "Бренд",
          value: "–"
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
          value: "Муфта"
        },
        {
          label: "Диаметр (Ду)",
          value: "50"
        },
        {
          label: "Материал",
          value: "Сталь"
        }
      ]
    },
    {
      id: "mufta-stalnaya-100",
      articul: "423342",
      title: "Муфта стальная 100",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/423342-303x303.jpg",
      price: 900,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "–",
        "strana-proizvoditel": "Россия",
        tip: "Муфта",
        "diametr-du": "100",
        material: "Сталь"
      },
      specs: [
        {
          label: "Бренд",
          value: "–"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Муфта"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Диаметр (Ду)",
          value: "100"
        },
        {
          label: "Материал",
          value: "Сталь"
        }
      ]
    },
    {
      id: "mufta-stalnaya-65",
      articul: "042137",
      title: "Муфта стальная 65",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/befbc602-30c5-11e2-a1f1-c8600046bc56_c034ee21-9e52-11ea-937e-002590ba8283-303x303.jpeg",
      price: 633,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "–",
        "strana-proizvoditel": "Россия",
        tip: "Муфта",
        "diametr-du": "65",
        material: "Сталь"
      },
      specs: [
        {
          label: "Бренд",
          value: "–"
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
          value: "Муфта"
        },
        {
          label: "Диаметр (Ду)",
          value: "65"
        },
        {
          label: "Материал",
          value: "Сталь"
        }
      ]
    }
  ]
};
