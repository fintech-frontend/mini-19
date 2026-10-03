import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/instrument/yelektroinstrument/raskhodnye-materialy-i-osnastka-dlya-yel/krugi-i-diski-dlya-yelektroinstrumenta/diski-shlifovalnye/ */
export const diskiShlifovalnyeListing: CatalogListingData = {
  path: "instrument/yelektroinstrument/raskhodnye-materialy-i-osnastka-dlya-yel/krugi-i-diski-dlya-yelektroinstrumenta/diski-shlifovalnye",
  title: "Диски шлифовальные",
  totalCountLabel: "32 товара",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Кратон",
        "ЛУГА",
        "CUTOP",
        "DERZHI",
        "TIGER"
      ],
      truncate: false
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
      id: "diametr",
      title: "Диаметр",
      options: [
        "115 мм",
        "125 мм",
        "150 мм"
      ],
      truncate: false
    },
    {
      id: "posadochnyj-diametr",
      title: "Посадочный диаметр",
      options: [
        "22 мм",
        "22, 2 мм"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "krug-115kh6022-14a-luga",
      articul: "034506",
      title: "Круг 115х6,0*22 14А Луга",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/0f4f588f-30c5-11e2-a1f1-c8600046bc56_41b971e4-9fee-11ea-937f-002590ba8283-372x235.jpeg",
      price: 37,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "ЛУГА",
        strana: "Россия",
        diametr: "115 мм",
        "posadochnyj-diametr": "22 мм",
        naznachenie: "Зачистка",
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
          value: "Зачистка"
        },
        {
          label: "Тип товара",
          value: "Круг"
        }
      ]
    },
    {
      id: "krug-115kh60kh22-kraton",
      articul: "034515",
      title: "Круг 115х6,0х22 Кратон",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/9938e200-683a-11e5-a391-c8600046bc56_41b971de-9fee-11ea-937f-002590ba8283-372x283.jpeg",
      price: 108,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Кратон",
        strana: "Китай",
        diametr: "115 мм",
        "posadochnyj-diametr": "22 мм",
        naznachenie: "Зачистка",
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
          value: "22 мм"
        },
        {
          label: "Назначение",
          value: "Зачистка"
        },
        {
          label: "Тип товара",
          value: "Круг"
        }
      ]
    },
    {
      id: "krug-125h6-0-22-14a-luga",
      articul: "034522",
      title: "Круг 125х6,0*22 14А Луга",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 104,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        tip: "Круг"
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
          label: "Тип товара",
          value: "Круг"
        }
      ]
    },
    {
      id: "krug-125h6022-23-lvzhou",
      articul: "429793",
      title: "Круг 125х6,0*22.23 Lvzhou",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/10/429793-372x303.jpeg",
      price: 116,
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
      id: "krug-125kh60kh22-cutop",
      articul: "034541",
      title: "Круг 125х6,0х22 CUTOP",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/c647ac31-3762-11e5-af92-c8600046bc56_3bbcd684-9fee-11ea-937f-002590ba8283-303x303.jpeg",
      price: 175,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "CUTOP",
        strana: "Китай",
        diametr: "125 мм",
        "posadochnyj-diametr": "22 мм",
        naznachenie: "Зачистка",
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
          value: "125 мм"
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
          value: "Зачистка"
        },
        {
          label: "Тип товара",
          value: "Круг"
        }
      ]
    },
    {
      id: "krug-125kh6kh222-kraton",
      articul: "034523",
      title: "Круг 125х6х22,2 Кратон",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/d0bc989d-e41b-11e4-b913-c8600046bc56_41b971d9-9fee-11ea-937f-002590ba8283-372x283.jpeg",
      price: 115,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Кратон",
        strana: "Россия",
        diametr: "125 мм",
        "posadochnyj-diametr": "22, 2 мм",
        naznachenie: "Зачистка",
        tip: "Круг"
      },
      specs: [
        {
          label: "Бренд",
          value: "Кратон"
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
          label: "Диаметр",
          value: "125 мм"
        },
        {
          label: "Посадочный диаметр",
          value: "22, 2 мм"
        },
        {
          label: "Назначение",
          value: "Зачистка"
        },
        {
          label: "Тип товара",
          value: "Круг"
        }
      ]
    },
    {
      id: "krug-125kh6kh222-derzhi",
      articul: "034542",
      title: "Круг 125х6х22,2 DERZHI",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/e599f5ec-182e-11ea-a9d3-c8600046bc54_3bbcd683-9fee-11ea-937f-002590ba8283-303x303.jpeg",
      price: 98,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "DERZHI",
        strana: "Китай",
        diametr: "125 мм",
        "posadochnyj-diametr": "22, 2 мм",
        naznachenie: "Зачистка",
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
          value: "125 мм"
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
          label: "Назначение",
          value: "Зачистка"
        },
        {
          label: "Тип товара",
          value: "Круг"
        }
      ]
    },
    {
      id: "krug-125kh6kh222-tiger",
      articul: "129629",
      title: "Круг 125х6х22,2 TIGER",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/949b83c7-07d9-11eb-9393-002590ba8282_db6dc5c4-085a-11eb-9393-002590ba8282.jpeg",
      price: 143,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "TIGER",
        strana: "Китай",
        diametr: "125 мм",
        "posadochnyj-diametr": "22, 2 мм",
        naznachenie: "Зачистка",
        tip: "Круг"
      },
      specs: [
        {
          label: "Бренд",
          value: "TIGER"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Диаметр",
          value: "125 мм"
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
          label: "Назначение",
          value: "Зачистка"
        },
        {
          label: "Тип товара",
          value: "Круг"
        }
      ]
    },
    {
      id: "krug-150kh6022-14a-luga",
      articul: "034549",
      title: "Круг 150х6,0*22 14А Луга",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/0f4f58ab-30c5-11e2-a1f1-c8600046bc56_3bbcd67d-9fee-11ea-937f-002590ba8283-372x235.jpeg",
      price: 8450,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "ЛУГА",
        strana: "Россия",
        diametr: "150 мм",
        "posadochnyj-diametr": "22 мм",
        naznachenie: "Зачистка",
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
          value: "150 мм"
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
          value: "Зачистка"
        },
        {
          label: "Тип товара",
          value: "Круг"
        }
      ]
    },
    {
      id: "krug-150h6022-23-lvzhou",
      articul: "429794",
      title: "Круг 150х6,0*22.23 Lvzhou",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/07/429783-300x303.jpeg",
      price: 170,
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
      id: "krug-150kh60kh22-cutop",
      articul: "034557",
      title: "Круг 150х6,0х22 CUTOP",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/5ecc9bfe-2ad7-11e9-aca1-c8600046bc56_3bbcd679-9fee-11ea-937f-002590ba8283-303x303.jpeg",
      price: 247,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "CUTOP",
        strana: "Китай",
        diametr: "150 мм",
        "posadochnyj-diametr": "22 мм",
        naznachenie: "Зачистка",
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
          value: "150 мм"
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
          value: "Зачистка"
        },
        {
          label: "Тип товара",
          value: "Круг"
        }
      ]
    },
    {
      id: "krug-150kh6kh222-derzhi",
      articul: "034558",
      title: "Круг 150х6х22,2 DERZHI УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/faff7294-182e-11ea-a9d3-c8600046bc54_3bbcd678-9fee-11ea-937f-002590ba8283-303x303.jpeg",
      price: 101,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "DERZHI",
        strana: "Китай",
        diametr: "150 мм",
        "posadochnyj-diametr": "22, 2 мм",
        naznachenie: "Зачистка",
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
          value: "150 мм"
        },
        {
          label: "Посадочный диаметр",
          value: "22, 2 мм"
        },
        {
          label: "Назначение",
          value: "Зачистка"
        },
        {
          label: "Тип товара",
          value: "Круг"
        }
      ]
    }
  ]
};
