import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/vodo-gazosnabzhenie/zapornaya-armatura-i-dobornye-yelement/perekhody/ */
export const perekhodyListing: CatalogListingData = {
  path: "vodo-gazosnabzhenie/zapornaya-armatura-i-dobornye-yelement/perekhody",
  title: "Переходы",
  totalCountLabel: "44 товара",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "–",
        "FOX"
      ],
      truncate: false
    },
    {
      id: "diametr",
      title: "Диаметр",
      options: [
        "70, 0х53, 0 мм",
        "108х57 мм",
        "108х76 мм",
        "108х89 мм",
        "114х108 мм",
        "133х57 мм",
        "133х89 мм",
        "133х108 мм",
        "159х89 мм",
        "159х108 мм",
        "160/90 мм"
      ],
      truncate: true
    },
    {
      id: "material",
      title: "Материал",
      options: [
        "Нержавеющая сталь",
        "Сталь"
      ],
      truncate: false
    },
    {
      id: "tip",
      title: "Тип",
      options: [
        "Муфта электросварная",
        "Накладной уход",
        "Переход"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "mufta-je-s-du090-sdr-11-a-f",
      articul: "5941",
      title: "Муфта э с Ду090 SDR 11 (A/F)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 850,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "–",
        "strana-proizvoditel": "Россия",
        tip: "Муфта электросварная",
        "diametr-du": "90",
        sdr: "11"
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
          value: "Муфта электросварная"
        },
        {
          label: "Диаметр (Ду)",
          value: "90"
        },
        {
          label: "SDR",
          value: "11"
        }
      ]
    },
    {
      id: "nakladnoj-uhod-160-90-fox",
      articul: "5937",
      title: "Накладной уход 160/90 FOX",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 10550,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "FOX",
        "strana-proizvoditel": "Россия",
        tip: "Накладной уход",
        diametr: "160/90 мм"
      },
      specs: [
        {
          label: "Бренд",
          value: "FOX"
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
          value: "Накладной уход"
        },
        {
          label: "Диаметр",
          value: "160/90 мм"
        }
      ]
    },
    {
      id: "perekhod-700kh530-nerzh-ucenka",
      articul: "052716",
      title: "Переход 70,0х53,0 нерж УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/56d24630-e976-11e4-8325-c8600046bc56_eecb2922-7082-11ed-93dd-002590ba8282-372x262.jpeg",
      price: 41820,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "–",
        "strana-proizvoditel": "Россия",
        tip: "Переход",
        material: "Нержавеющая сталь",
        diametr: "70, 0х53, 0 мм"
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
          value: "Переход"
        },
        {
          label: "Материал",
          value: "Нержавеющая сталь"
        },
        {
          label: "Диаметр",
          value: "70, 0х53, 0 мм"
        }
      ]
    },
    {
      id: "perekhod-st-133kh89",
      articul: "052764",
      title: "Переход ст 133х89 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/befbc6f4-30c5-11e2-a1f1-c8600046bc56_c64229c8-9e52-11ea-937e-002590ba8283-353x303.jpeg",
      price: 444,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "–",
        "strana-proizvoditel": "Россия",
        tip: "Переход",
        material: "Сталь",
        diametr: "133х89 мм"
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
          value: "Переход"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Диаметр",
          value: "133х89 мм"
        }
      ]
    },
    {
      id: "perekhod-st-108kh57",
      articul: "052756",
      title: "Переход ст. 108х57",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/befbc6ea-30c5-11e2-a1f1-c8600046bc56_c64229c2-9e52-11ea-937e-002590ba8283-353x303.jpeg",
      price: 380,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "–",
        "strana-proizvoditel": "Россия",
        tip: "Переход",
        material: "Сталь",
        diametr: "108х57 мм"
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
          value: "Переход"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Диаметр",
          value: "108х57 мм"
        }
      ]
    },
    {
      id: "perekhod-st-108kh76",
      articul: "052757",
      title: "Переход ст. 108х76",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/befbc6ec-30c5-11e2-a1f1-c8600046bc56_c64229c3-9e52-11ea-937e-002590ba8283-353x303.jpeg",
      price: 390,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "–",
        "strana-proizvoditel": "Россия",
        tip: "Переход",
        material: "Сталь",
        diametr: "108х76 мм"
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
          value: "Переход"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Диаметр",
          value: "108х76 мм"
        }
      ]
    },
    {
      id: "perekhod-st-108kh89",
      articul: "052758",
      title: "Переход ст. 108х89",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/befbc6ee-30c5-11e2-a1f1-c8600046bc56_c64229c4-9e52-11ea-937e-002590ba8283-353x303.jpeg",
      price: 400,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "–",
        "strana-proizvoditel": "Россия",
        tip: "Переход",
        material: "Сталь",
        diametr: "108х89 мм"
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
          value: "Переход"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Диаметр",
          value: "108х89 мм"
        }
      ]
    },
    {
      id: "perekhod-st-114kh108",
      articul: "052759",
      title: "Переход ст. 114х108",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/a85589da-c885-11e8-8c39-c8600046bc56_c64229c5-9e52-11ea-937e-002590ba8283-353x303.jpeg",
      price: 288,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "–",
        "strana-proizvoditel": "Россия",
        tip: "Переход",
        material: "Сталь",
        diametr: "114х108 мм"
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
          value: "Переход"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Диаметр",
          value: "114х108 мм"
        }
      ]
    },
    {
      id: "perekhod-st-133kh108",
      articul: "052761",
      title: "Переход ст. 133х108",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/befbc6f0-30c5-11e2-a1f1-c8600046bc56_c64229c6-9e52-11ea-937e-002590ba8283-353x303.jpeg",
      price: 580,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "–",
        "strana-proizvoditel": "Россия",
        tip: "Переход",
        material: "Сталь",
        diametr: "133х108 мм"
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
          value: "Переход"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Диаметр",
          value: "133х108 мм"
        }
      ]
    },
    {
      id: "perekhod-st-133kh57",
      articul: "052762",
      title: "Переход ст. 133х57 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/e1b12997-ec24-11e9-a9be-c8600046bc54_c64229c7-9e52-11ea-937e-002590ba8283-353x303.jpeg",
      price: 19712,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "–",
        "strana-proizvoditel": "Россия",
        tip: "Переход",
        material: "Сталь",
        diametr: "133х57 мм"
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
          value: "Переход"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Диаметр",
          value: "133х57 мм"
        }
      ]
    },
    {
      id: "perekhod-st-15945-8935",
      articul: "052765",
      title: "Переход ст. 159*4,5 – 89*3,5",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/4682ba7d-30c8-11e2-a1f1-c8600046bc56_c64229c9-9e52-11ea-937e-002590ba8283-353x303.jpeg",
      price: 860,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "–",
        "strana-proizvoditel": "Россия",
        tip: "Переход",
        material: "Сталь",
        diametr: "159х89 мм"
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
          value: "Переход"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Диаметр",
          value: "159х89 мм"
        }
      ]
    },
    {
      id: "perekhod-st-159kh108",
      articul: "052766",
      title: "Переход ст. 159х108",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/c616614a-30c5-11e2-a1f1-c8600046bc56_c64229ca-9e52-11ea-937e-002590ba8283-353x303.jpeg",
      price: 820,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "–",
        "strana-proizvoditel": "Россия",
        tip: "Переход",
        material: "Сталь",
        diametr: "159х108 мм"
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
          value: "Переход"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Диаметр",
          value: "159х108 мм"
        }
      ]
    }
  ]
};
