import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/obshhestroitelnye-materialy/metalloprokat/balki-shvellera-ugolki/ */
export const balkiShvelleraUgolkiListing: CatalogListingData = {
  path: "obshhestroitelnye-materialy/metalloprokat/balki-shvellera-ugolki",
  title: "Балки, швеллера, уголки",
  totalCountLabel: "38 товаров",
  filterFields: [
    {
      id: "shirina",
      title: "Ширина",
      options: [
        "55 мм",
        "64мм",
        "81мм"
      ],
      truncate: false
    },
    {
      id: "tolshhina",
      title: "Толщина",
      options: [
        "3.8мм",
        "4,1",
        "4,8",
        "4.5мм",
        "5,0"
      ],
      truncate: false
    },
    {
      id: "v",
      title: "В 1 тонне",
      options: [
        "≈62м",
        "≈72м",
        "≈86м",
        "≈105м",
        "≈114м",
        "≈120м"
      ],
      truncate: false
    },
    {
      id: "vysota",
      title: "Высота",
      options: [
        "100мм",
        "117,6 мм",
        "120мм",
        "160мм"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "balka-14-b2",
      articul: "419155",
      title: "Балка 14 Б2",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/04/419155-372x234.jpeg",
      price: 1540,
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
      id: "balka-25-b2",
      articul: "419153",
      title: "Балка 25 Б2",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/04/419153-372x260.jpeg",
      price: 3500,
      inStock: false,
      quickBuy: true,
      filterValues: {}
    },
    {
      id: "balka-dvutavrovaya-20-b1-stsp-ps-sto-aschm-20-93",
      articul: "014255",
      title: "Балка двутавровая 20 Б1 Ст,сп/пс СТО АСЧМ 20-93",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/68d97429-30c8-11e2-a1f1-c8600046bc56_5b31a952-1eb6-11ed-93d1-002590ba8282-372x195.jpeg",
      price: 3275,
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
      id: "balka-dvutavrovaya-g-k-10-b1",
      articul: "204465",
      title: "Балка двутавровая Г/к 10 Б1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/454421b9-7448-11eb-93a5-002590ba8282_445e99c1-c542-11eb-93ac-002590ba8282-372x195.jpeg",
      price: 1500,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "12м",
        material: "Сталь",
        tip: "Балка двутавровая",
        marka: "Ст3пс/сп5",
        v: "≈120м",
        izgotovlenie: "Горячекатаная",
        shirina: "55 мм",
        tolshhina: "4,1",
        vysota: "100мм"
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
          value: "12м"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Тип товара",
          value: "Балка двутавровая"
        },
        {
          label: "Марка стали",
          value: "Ст3пс/сп5"
        },
        {
          label: "В 1 тонне",
          value: "≈120м"
        },
        {
          label: "Изготовление",
          value: "Горячекатаная"
        },
        {
          label: "Ширина",
          value: "55 мм"
        },
        {
          label: "Толщина",
          value: "4,1"
        },
        {
          label: "Высота",
          value: "100мм"
        }
      ]
    },
    {
      id: "balka-dvutavrovaja-g-k-12-b1",
      articul: "014283",
      title: "Балка двутавровая Г/к 12 Б1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 1650,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "12м",
        material: "Сталь",
        tip: "Балка двутавровая",
        marka: "Ст3пс/сп5",
        v: "≈114м",
        izgotovlenie: "Горячекатаная",
        shirina: "64мм",
        tolshhina: "3.8мм",
        vysota: "117,6 мм"
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
          value: "12м"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Тип товара",
          value: "Балка двутавровая"
        },
        {
          label: "Марка стали",
          value: "Ст3пс/сп5"
        },
        {
          label: "В 1 тонне",
          value: "≈114м"
        },
        {
          label: "Изготовление",
          value: "Горячекатаная"
        },
        {
          label: "Ширина",
          value: "64мм"
        },
        {
          label: "Толщина",
          value: "3.8мм"
        },
        {
          label: "Высота",
          value: "117,6 мм"
        }
      ]
    },
    {
      id: "balka-dvutavrovaya-g-k-14-st-sp-ps-gost-8239-89",
      articul: "131136",
      title: "Балка двутавровая Г/к 14 Ст.сп/пс ГОСТ 8239-89",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/68d9744f-30c8-11e2-a1f1-c8600046bc56_4ef583a2-89d8-11ea-937a-002590ba8283-372x195.jpeg",
      price: 1926,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        material: "Сталь",
        marka: "Ст3пс/сп5",
        v: "≈72м",
        izgotovlenie: "Горячекатаная"
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
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Марка стали",
          value: "Ст3пс/сп5"
        },
        {
          label: "В 1 тонне",
          value: "≈72м"
        },
        {
          label: "Изготовление",
          value: "Горячекатаная"
        }
      ]
    },
    {
      id: "balka-dvutavrovaja-g-k-14b1",
      articul: "416233",
      title: "Балка двутавровая Г/к 14Б1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 1872,
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
      id: "balka-dvutavrovaya-g-k-16-b1",
      articul: "413635",
      title: "Балка двутавровая Г/к 16 Б1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/bc6f5b4d-550b-11ed-93da-002590ba8282_d6c40131-6b01-11ed-93dc-002590ba8282-372x195.jpeg",
      price: 2238,
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
      id: "balka-dvutavrovaja-g-k-18-b1",
      articul: "431312",
      title: "Балка двутавровая Г/к 18 Б1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 2715,
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
      id: "balka-dvutavrovaya-g-k-10-st-sp-ps-gost-8239-89",
      articul: "014278",
      title: "Балка двутавровая Г/к.,10 Ст.сп/пс ГОСТ 8239-89",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/68d9744b-30c8-11e2-a1f1-c8600046bc56_4ef5839d-89d8-11ea-937a-002590ba8283-372x195.jpeg",
      price: 1447,
      inStock: false,
      quickBuy: true,
      filterValues: {
        tip: "Балка двутавровая",
        dlina: "12м",
        vysota: "100мм",
        v: "≈105м",
        tolshhina: "4.5мм",
        izgotovlenie: "Горячекатаная",
        material: "Сталь",
        marka: "Ст3пс/сп5",
        shirina: "55 мм",
        strana: "Россия"
      },
      specs: [
        {
          label: "Тип товара",
          value: "Балка двутавровая"
        },
        {
          label: "Длина",
          value: "12м"
        },
        {
          label: "Высота",
          value: "100мм"
        },
        {
          label: "В 1 тонне",
          value: "≈105м"
        },
        {
          label: "Толщина",
          value: "4.5мм"
        },
        {
          label: "Изготовление",
          value: "Горячекатаная"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Марка стали",
          value: "Ст3пс/сп5"
        },
        {
          label: "Ширина",
          value: "55 мм"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        }
      ]
    },
    {
      id: "balka-dvutavrovaya-g-k-12-st-sp-ps-gost-8239-89",
      articul: "014281",
      title: "Балка двутавровая Г/к.,12 Ст.сп/пс ГОСТ 8239-89",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/68d9744d-30c8-11e2-a1f1-c8600046bc56_4ef5839f-89d8-11ea-937a-002590ba8283-372x195.jpeg",
      price: 1840,
      inStock: false,
      quickBuy: true,
      filterValues: {
        tip: "Балка двутавровая",
        dlina: "12м",
        vysota: "120мм",
        v: "≈86м",
        tolshhina: "4,8",
        izgotovlenie: "Горячекатаная",
        material: "Сталь",
        marka: "Ст3пс/сп5",
        shirina: "64мм",
        strana: "Россия"
      },
      specs: [
        {
          label: "Тип товара",
          value: "Балка двутавровая"
        },
        {
          label: "Длина",
          value: "12м"
        },
        {
          label: "Высота",
          value: "120мм"
        },
        {
          label: "В 1 тонне",
          value: "≈86м"
        },
        {
          label: "Толщина",
          value: "4,8"
        },
        {
          label: "Изготовление",
          value: "Горячекатаная"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Марка стали",
          value: "Ст3пс/сп5"
        },
        {
          label: "Ширина",
          value: "64мм"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        }
      ]
    },
    {
      id: "balka-dvutavrovaya-g-k-16-st-sp-ps-gost-8239-89",
      articul: "131137",
      title: "Балка двутавровая Г/к.,16 Ст.сп/пс ГОСТ 8239-89",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/68d97453-30c8-11e2-a1f1-c8600046bc56_4ef583a4-89d8-11ea-937a-002590ba8283-372x195.jpeg",
      price: 2320,
      inStock: false,
      quickBuy: true,
      filterValues: {
        tip: "Балка двутавровая",
        dlina: "12м",
        vysota: "160мм",
        v: "≈62м",
        tolshhina: "5,0",
        izgotovlenie: "Горячекатаная",
        material: "Сталь",
        marka: "Ст3пс/сп5",
        shirina: "81мм",
        strana: "Россия"
      },
      specs: [
        {
          label: "Тип товара",
          value: "Балка двутавровая"
        },
        {
          label: "Длина",
          value: "12м"
        },
        {
          label: "Высота",
          value: "160мм"
        },
        {
          label: "В 1 тонне",
          value: "≈62м"
        },
        {
          label: "Толщина",
          value: "5,0"
        },
        {
          label: "Изготовление",
          value: "Горячекатаная"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Марка стали",
          value: "Ст3пс/сп5"
        },
        {
          label: "Ширина",
          value: "81мм"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        }
      ]
    }
  ]
};
