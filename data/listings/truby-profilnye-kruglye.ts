import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/obshhestroitelnye-materialy/metalloprokat/truby-profilnye-kruglye/ */
export const trubyProfilnyeKruglyeListing: CatalogListingData = {
  path: "obshhestroitelnye-materialy/metalloprokat/truby-profilnye-kruglye",
  title: "Трубы профильные, круглые",
  totalCountLabel: "69 товаров",
  filterFields: [
    {
      id: "diametr",
      title: "Диаметр диска",
      options: [
        "20 мм",
        "25 мм",
        "32 мм",
        "40 мм"
      ],
      truncate: false
    },
    {
      id: "dlina",
      title: "Длина",
      options: [
        "6м",
        "6м – 7,8м",
        "7,8м"
      ],
      truncate: false
    },
    {
      id: "forma",
      title: "Форма",
      options: [
        "Квадратная",
        "Круглая"
      ],
      truncate: false
    },
    {
      id: "marka",
      title: "Марка стали",
      options: [
        "Ст1-Ст3пс/сп",
        "Ст3пс/сп"
      ],
      truncate: false
    },
    {
      id: "naruzhnij",
      title: "Наружний диаметр",
      options: [
        "26,8мм",
        "33,5мм",
        "42,3мм",
        "48мм"
      ],
      truncate: false
    },
    {
      id: "tolshhina",
      title: "Толщина",
      options: [
        "2.8мм",
        "3"
      ],
      truncate: false
    },
    {
      id: "v",
      title: "В 1 тонне",
      options: [
        "≈297м",
        "≈300м",
        "≈366м",
        "≈458м",
        "≈584м",
        "≈600м"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "truba-prof-40kh20kh18-mm",
      articul: "409878",
      title: "Труба проф 40х20х1,8 мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/88f23b93-e7c7-11ec-93ce-002590ba8282_923ac2d0-1eb5-11ed-93d1-002590ba8282-303x303.jpeg",
      price: 199,
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
      id: "truba-prof-40kh403mm",
      articul: "071704",
      title: "Труба проф 40х40х3мм.",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/4d6b58f4-30c8-11e2-a1f1-c8600046bc56_5af114fd-89d8-11ea-937a-002590ba8283-303x303.jpeg",
      price: 391,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "6м",
        material: "Сталь",
        tip: "Труба",
        marka: "Ст1-Ст3пс/сп",
        forma: "Квадратная",
        v: "≈297м",
        izgotovlenie: "Горячекатаная",
        shirina: "40 мм",
        tolshhina: "3",
        vysota: "40 мм"
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
          value: "6м"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Тип товара",
          value: "Труба"
        },
        {
          label: "Марка стали",
          value: "Ст1-Ст3пс/сп"
        },
        {
          label: "Форма",
          value: "Квадратная"
        },
        {
          label: "В 1 тонне",
          value: "≈297м"
        },
        {
          label: "Изготовление",
          value: "Горячекатаная"
        },
        {
          label: "Ширина",
          value: "40 мм"
        },
        {
          label: "Толщина",
          value: "3"
        },
        {
          label: "Высота",
          value: "40 мм"
        }
      ]
    },
    {
      id: "truba-vgp-15kh28-5600-gost-3262-75",
      articul: "000338",
      title: "Труба ВГП 15х2,8 ГОСТ 3262-75",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/4682bad1-30c8-11e2-a1f1-c8600046bc56_54f480cc-89d8-11ea-937a-002590ba8283-303x303.jpeg",
      price: 155,
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
      id: "truba-vgp-20kh28-5600-gost-3262-75",
      articul: "071307",
      title: "Труба ВГП 20х2,8 ГОСТ 3262-75",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/4682bad9-30c8-11e2-a1f1-c8600046bc56_54f480cd-89d8-11ea-937a-002590ba8283-303x303.jpeg",
      price: 201,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "6м – 7,8м",
        material: "Сталь",
        tip: "Труба",
        marka: "Ст3пс/сп",
        forma: "Круглая",
        v: "≈600м",
        izgotovlenie: "Горячекатаная",
        tolshhina: "2.8мм",
        diametr: "20 мм",
        naruzhnij: "26,8мм"
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
          value: "6м – 7,8м"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Тип товара",
          value: "Труба"
        },
        {
          label: "Марка стали",
          value: "Ст3пс/сп"
        },
        {
          label: "Форма",
          value: "Круглая"
        },
        {
          label: "В 1 тонне",
          value: "≈600м"
        },
        {
          label: "Изготовление",
          value: "Горячекатаная"
        },
        {
          label: "Толщина",
          value: "2.8мм"
        },
        {
          label: "Диаметр диска",
          value: "20 мм"
        },
        {
          label: "Наружний диаметр",
          value: "26,8мм"
        }
      ]
    },
    {
      id: "truba-vgp-25kh28-mm-gost-3262-75",
      articul: "071311",
      title: "Труба ВГП 25х2,8 ГОСТ 3262-75",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/4682badd-30c8-11e2-a1f1-c8600046bc56_54f480cf-89d8-11ea-937a-002590ba8283-303x303.jpeg",
      price: 257,
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
      id: "truba-vgp-32kh28-gost-3262-75",
      articul: "071316",
      title: "Труба ВГП 32х2,8 ГОСТ 3262-75",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/4d6b5893-30c8-11e2-a1f1-c8600046bc56_54f480d0-89d8-11ea-937a-002590ba8283-303x303.jpeg",
      price: 331,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "6м – 7,8м",
        material: "Сталь",
        tip: "Труба",
        marka: "Ст3пс/сп",
        forma: "Круглая",
        v: "≈366м",
        izgotovlenie: "Горячекатаная",
        tolshhina: "2.8мм",
        diametr: "32 мм",
        naruzhnij: "42,3мм"
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
          value: "6м – 7,8м"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Тип товара",
          value: "Труба"
        },
        {
          label: "Марка стали",
          value: "Ст3пс/сп"
        },
        {
          label: "Форма",
          value: "Круглая"
        },
        {
          label: "В 1 тонне",
          value: "≈366м"
        },
        {
          label: "Изготовление",
          value: "Горячекатаная"
        },
        {
          label: "Толщина",
          value: "2.8мм"
        },
        {
          label: "Диаметр диска",
          value: "32 мм"
        },
        {
          label: "Наружний диаметр",
          value: "42,3мм"
        }
      ]
    },
    {
      id: "truba-vgp-4030mm-gost-3232-75",
      articul: "071326",
      title: "Труба ВГП 40*3,0 ГОСТ 3232-75",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/4d6b589d-30c8-11e2-a1f1-c8600046bc56_54f480d4-89d8-11ea-937a-002590ba8283-303x303.jpeg",
      price: 403,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "6м – 7,8м",
        material: "Сталь",
        tip: "Труба",
        marka: "Ст3пс/сп",
        forma: "Круглая",
        v: "≈300м",
        izgotovlenie: "Горячекатаная",
        tolshhina: "3",
        diametr: "40 мм",
        naruzhnij: "48мм"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "6м – 7,8м"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Тип товара",
          value: "Труба"
        },
        {
          label: "Марка стали",
          value: "Ст3пс/сп"
        },
        {
          label: "Форма",
          value: "Круглая"
        },
        {
          label: "В 1 тонне",
          value: "≈300м"
        },
        {
          label: "Изготовление",
          value: "Горячекатаная"
        },
        {
          label: "Толщина",
          value: "3"
        },
        {
          label: "Диаметр диска",
          value: "40 мм"
        },
        {
          label: "Наружний диаметр",
          value: "48мм"
        },
        {
          label: "Максимальный размер скидки",
          value: "20"
        }
      ]
    },
    {
      id: "truba-vgp-40-3-0-gost-3232-75-inventar",
      articul: "7336",
      title: "Труба ВГП 40*3,0 ГОСТ 3232-75 (инвентарь)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 0,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "6м – 7,8м",
        material: "Сталь",
        tip: "Труба",
        marka: "Ст3пс/сп",
        forma: "Круглая",
        izgotovlenie: "Горячекатаная"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "6м – 7,8м"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Тип товара",
          value: "Труба"
        },
        {
          label: "Марка стали",
          value: "Ст3пс/сп"
        },
        {
          label: "Форма",
          value: "Круглая"
        },
        {
          label: "Изготовление",
          value: "Горячекатаная"
        },
        {
          label: "Максимальный размер скидки",
          value: "20"
        }
      ]
    },
    {
      id: "truba-ocinkovannaya-d-20-mm",
      articul: "071581",
      title: "Труба оцинкованная D 20 мм.",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/4d6b58ae-30c8-11e2-a1f1-c8600046bc56_54f480d7-89d8-11ea-937a-002590ba8283-345x303.jpeg",
      price: 351,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "7,8м",
        material: "Сталь",
        tip: "Труба",
        marka: "Ст3пс/сп",
        forma: "Круглая",
        v: "≈584м",
        izgotovlenie: "Горячекатаная",
        tolshhina: "2.8мм",
        diametr: "20 мм",
        naruzhnij: "26,8мм"
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
          value: "7,8м"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Тип товара",
          value: "Труба"
        },
        {
          label: "Марка стали",
          value: "Ст3пс/сп"
        },
        {
          label: "Форма",
          value: "Круглая"
        },
        {
          label: "В 1 тонне",
          value: "≈584м"
        },
        {
          label: "Изготовление",
          value: "Горячекатаная"
        },
        {
          label: "Толщина",
          value: "2.8мм"
        },
        {
          label: "Диаметр диска",
          value: "20 мм"
        },
        {
          label: "Наружний диаметр",
          value: "26,8мм"
        }
      ]
    },
    {
      id: "truba-ocinkovannaya-d-25-mm",
      articul: "071582",
      title: "Труба оцинкованная D 25 мм.",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/4d6b58b0-30c8-11e2-a1f1-c8600046bc56_54f480d8-89d8-11ea-937a-002590ba8283-345x303.jpeg",
      price: 458,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "7,8м",
        material: "Сталь",
        tip: "Труба",
        marka: "Ст3пс/сп",
        forma: "Круглая",
        v: "≈458м",
        izgotovlenie: "Горячекатаная",
        tolshhina: "2.8мм",
        diametr: "25 мм",
        naruzhnij: "33,5мм"
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
          value: "7,8м"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Тип товара",
          value: "Труба"
        },
        {
          label: "Марка стали",
          value: "Ст3пс/сп"
        },
        {
          label: "Форма",
          value: "Круглая"
        },
        {
          label: "В 1 тонне",
          value: "≈458м"
        },
        {
          label: "Изготовление",
          value: "Горячекатаная"
        },
        {
          label: "Толщина",
          value: "2.8мм"
        },
        {
          label: "Диаметр диска",
          value: "25 мм"
        },
        {
          label: "Наружний диаметр",
          value: "33,5мм"
        }
      ]
    },
    {
      id: "truba-prof-10kh10kh10mm-6m",
      articul: "410360",
      title: "Труба проф 10х10х1,0мм 6м",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/ccdd7cb8-fac1-11ec-93cf-002590ba8282_562fddce-1eb5-11ed-93d1-002590ba8282-303x303.jpeg",
      price: 42,
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
      id: "truba-prof-15kh15kh12",
      articul: "409018",
      title: "Труба проф 15х15х1,2",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/c18e779d-ccfd-11ec-93ce-002590ba8282_18ef40cb-e1b3-11ec-93ce-002590ba8282-303x303.jpeg",
      price: 77,
      inStock: false,
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
