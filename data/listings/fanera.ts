import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/stolyarnye-izdeliya/drevesno-plitnye-materialy/fanera/ */
export const faneraListing: CatalogListingData = {
  path: "stolyarnye-izdeliya/drevesno-plitnye-materialy/fanera",
  title: "Фанера",
  totalCountLabel: "78 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Мвуд",
        "Свеза",
        "ФОФ",
        "ФСФ",
        "Segezha Group"
      ],
      truncate: false
    },
    {
      id: "dlina",
      title: "Длина",
      options: [
        "1220мм",
        "1525мм"
      ],
      truncate: false
    },
    {
      id: "shirina",
      title: "Ширина",
      options: [
        "1525мм",
        "2440мм"
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
      id: "tolshhina",
      title: "Толщина стенки",
      options: [
        "4мм",
        "12мм",
        "18мм",
        "21мм"
      ],
      truncate: false
    },
    {
      id: "tsvet",
      title: "Цвет",
      options: [
        "Коричневый",
        "Светлый"
      ],
      truncate: false
    },
    {
      id: "ves",
      title: "Вес",
      options: [
        "6.5кг",
        "24кг",
        "34кг",
        "37.5кг",
        "38кг",
        "43кг"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "fanera-laminirovannaya-1220kh2440kh18-mm-1-1-rf",
      articul: "004158",
      title: "Фанера ламинированная 1220х2440х18 мм 1/1 РФ",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/004158-372x271.jpeg",
      price: 4330,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "1220мм",
        shirina: "2440мм",
        brend: "ФОФ",
        tsvet: "Коричневый",
        ves: "34кг",
        tip: "Фанера",
        tolshhina: "18мм",
        poroda: "Береза"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "1220мм"
        },
        {
          label: "Ширина",
          value: "2440мм"
        },
        {
          label: "Бренд",
          value: "ФОФ"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Коричневый"
        },
        {
          label: "Вес",
          value: "34кг"
        },
        {
          label: "Тип товара",
          value: "Фанера"
        },
        {
          label: "Толщина стенки",
          value: "18мм"
        },
        {
          label: "Порода древесины",
          value: "Береза"
        }
      ]
    },
    {
      id: "fanera-fk-415251525-mm-2-4-sort-sh2-parizhskaya-kommu",
      articul: "076338",
      title: "Фанера ФК- 4*1525*1525 мм 2/4 сорт Ш2 Парижская Коммуна (108 шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/ab097d39-d82e-11e3-bb44-c8600046bc56_1352efda-95e0-11ea-937d-002590ba8283-302x303.jpeg",
      price: 590,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "1525мм",
        shirina: "1525мм",
        tsvet: "Светлый",
        ves: "6.5кг",
        tip: "Фанера",
        tolshhina: "4мм",
        poroda: "Береза"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "1525мм"
        },
        {
          label: "Ширина",
          value: "1525мм"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Светлый"
        },
        {
          label: "Вес",
          value: "6.5кг"
        },
        {
          label: "Тип товара",
          value: "Фанера"
        },
        {
          label: "Толщина стенки",
          value: "4мм"
        },
        {
          label: "Порода древесины",
          value: "Береза"
        }
      ]
    },
    {
      id: "fanera-fk-1015251525-mm-3-4-sort-sh-1",
      articul: "076359",
      title: "Фанера ФК-10*1525*1525 мм 3/4 сорт ш/1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/f8393ca8-5453-11e8-bc6a-c8600046bc56_9339584d-9ffd-11ea-937f-002590ba8283-302x303.jpeg",
      price: 1240,
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
      id: "fanera-laminirovannaya-1220kh2440kh12-sort-1-1-33-sht",
      articul: "076323",
      title: "Фанера ламинированная 1220х2440х12 сорт 1/1 (33 шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/7f5360b9-4c78-11e9-9b5e-c8600046bc56_af190020-9b6a-11ea-937e-002590ba8283-372x211.jpeg",
      price: 3500,
      inStock: true,
      quickBuy: true,
      filterValues: {
        ves: "24кг",
        strana: "Россия",
        dlina: "1220мм",
        brend: "Segezha Group",
        tip: "Фанера",
        shirina: "2440мм",
        tsvet: "Коричневый",
        tolshhina: "12мм",
        poroda: "Береза",
        "otvetsvennyj-menedzher": "Шебзухова Д.А",
        "otvetstvennyj-otdel-podrazdelenie": "Отдел снабжения – отдел № 2 строительных материалов",
        "maksimalnyj-razmer-skidki-ip": "15"
      },
      specs: [
        {
          label: "Вес",
          value: "24кг"
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
          label: "Длина",
          value: "1220мм"
        },
        {
          label: "Бренд",
          value: "Segezha Group"
        },
        {
          label: "Тип товара",
          value: "Фанера"
        },
        {
          label: "Ширина",
          value: "2440мм"
        },
        {
          label: "Цвет",
          value: "Коричневый"
        },
        {
          label: "Толщина стенки",
          value: "12мм"
        },
        {
          label: "Порода древесины",
          value: "Береза"
        },
        {
          label: "Ответсвенный менеджер",
          value: "Шебзухова Д.А"
        },
        {
          label: "Ответственный отдел (подразделение)",
          value: "Отдел снабжения – отдел № 2 строительных материалов"
        },
        {
          label: "Максимальный размер скидки ИП",
          value: "15"
        }
      ]
    },
    {
      id: "fanera-laminirovannaja-1220h2440h12-sort-1-2",
      articul: "428942",
      title: "Фанера ламинированная 1220х2440х12 сорт 1/2",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 3620,
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
      id: "fanera-laminirovannaya-1220kh2440kh15-sort-1-1-26-sht",
      articul: "076324",
      title: "Фанера ламинированная 1220х2440х15 сорт 1/1 (26 шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/7b4add19-4289-11ea-a9ee-c8600046bc56_93395838-9ffd-11ea-937f-002590ba8283-372x211.jpeg",
      price: 3460,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "1220мм",
        shirina: "2440мм",
        tsvet: "Коричневый",
        tip: "Фанера",
        poroda: "Береза"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "1220мм"
        },
        {
          label: "Ширина",
          value: "2440мм"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Коричневый"
        },
        {
          label: "Тип товара",
          value: "Фанера"
        },
        {
          label: "Порода древесины",
          value: "Береза"
        }
      ]
    },
    {
      id: "fanera-laminirovannaya-1220kh2440kh18-mm-kitay",
      articul: "076325",
      title: "Фанера ламинированная 1220х2440х18 мм Китай",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/a5d8cb98-30cd-11e2-a1f1-c8600046bc56_1352efd8-95e0-11ea-937d-002590ba8283-372x279.jpeg",
      price: 3100,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        dlina: "1220мм",
        shirina: "2440мм",
        tsvet: "Коричневый",
        tip: "Фанера"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Длина",
          value: "1220мм"
        },
        {
          label: "Ширина",
          value: "2440мм"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Коричневый"
        },
        {
          label: "Тип товара",
          value: "Фанера"
        }
      ]
    },
    {
      id: "fanera-laminirovannaya-1220kh2440kh18-mm-rf-m-vud",
      articul: "124405",
      title: "Фанера ламинированная 1220х2440х18 мм М-Вуд",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/e33225da-b9f1-11ea-9385-002590ba8283_4f696353-bc2c-11ea-9385-002590ba8283-372x222.jpeg",
      price: 4330,
      inStock: true,
      quickBuy: true,
      filterValues: {
        ves: "38кг",
        strana: "Россия",
        dlina: "1220мм",
        brend: "Мвуд",
        tip: "Фанера",
        shirina: "2440мм",
        tsvet: "Коричневый",
        tolshhina: "18мм",
        poroda: "Береза",
        "otvetsvennyj-menedzher": "Шебзухова Д.А",
        "otvetstvennyj-otdel-podrazdelenie": "Отдел снабжения – отдел № 2 строительных материалов",
        "maksimalnyj-razmer-skidki-ip": "15"
      },
      specs: [
        {
          label: "Вес",
          value: "38кг"
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
          label: "Длина",
          value: "1220мм"
        },
        {
          label: "Бренд",
          value: "Мвуд"
        },
        {
          label: "Тип товара",
          value: "Фанера"
        },
        {
          label: "Ширина",
          value: "2440мм"
        },
        {
          label: "Цвет",
          value: "Коричневый"
        },
        {
          label: "Толщина стенки",
          value: "18мм"
        },
        {
          label: "Порода древесины",
          value: "Береза"
        },
        {
          label: "Ответсвенный менеджер",
          value: "Шебзухова Д.А"
        },
        {
          label: "Ответственный отдел (подразделение)",
          value: "Отдел снабжения – отдел № 2 строительных материалов"
        },
        {
          label: "Максимальный размер скидки ИП",
          value: "15"
        }
      ]
    },
    {
      id: "fanera-laminirovannaya-1220kh2440kh18-mm-rf",
      articul: "076326",
      title: "Фанера ламинированная 1220х2440х18 мм РФ",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/a5d8cb9a-30cd-11e2-a1f1-c8600046bc56_93395839-9ffd-11ea-937f-002590ba8283-372x211.jpeg",
      price: 4330,
      inStock: true,
      quickBuy: true,
      filterValues: {
        ves: "38кг",
        strana: "Россия",
        dlina: "1220мм",
        brend: "ФСФ",
        tip: "Фанера",
        shirina: "2440мм",
        tsvet: "Коричневый",
        tolshhina: "18мм",
        poroda: "Береза",
        "otvetsvennyj-menedzher": "Шебзухова Д.А",
        "otvetstvennyj-otdel-podrazdelenie": "Отдел снабжения – отдел № 2 строительных материалов",
        "maksimalnyj-razmer-skidki-ip": "15"
      },
      specs: [
        {
          label: "Вес",
          value: "38кг"
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
          label: "Длина",
          value: "1220мм"
        },
        {
          label: "Бренд",
          value: "ФСФ"
        },
        {
          label: "Тип товара",
          value: "Фанера"
        },
        {
          label: "Ширина",
          value: "2440мм"
        },
        {
          label: "Цвет",
          value: "Коричневый"
        },
        {
          label: "Толщина стенки",
          value: "18мм"
        },
        {
          label: "Порода древесины",
          value: "Береза"
        },
        {
          label: "Ответсвенный менеджер",
          value: "Шебзухова Д.А"
        },
        {
          label: "Ответственный отдел (подразделение)",
          value: "Отдел снабжения – отдел № 2 строительных материалов"
        },
        {
          label: "Максимальный размер скидки ИП",
          value: "15"
        }
      ]
    },
    {
      id: "fanera-laminirovannaya-1220kh2440kh18-mm-rf-svez",
      articul: "076327",
      title: "Фанера ламинированная 1220х2440х18 мм РФ Свеза",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/50b3c153-661c-11e6-ab2a-c8600046bc56_9339583a-9ffd-11ea-937f-002590ba8283-372x211.jpeg",
      price: 4450,
      inStock: true,
      quickBuy: true,
      filterValues: {
        ves: "37.5кг",
        strana: "Россия",
        dlina: "1220мм",
        brend: "Свеза",
        tip: "Фанера",
        shirina: "2440мм",
        tsvet: "Коричневый",
        tolshhina: "18мм",
        poroda: "Береза"
      },
      specs: [
        {
          label: "Вес",
          value: "37.5кг"
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
          label: "Длина",
          value: "1220мм"
        },
        {
          label: "Бренд",
          value: "Свеза"
        },
        {
          label: "Тип товара",
          value: "Фанера"
        },
        {
          label: "Ширина",
          value: "2440мм"
        },
        {
          label: "Цвет",
          value: "Коричневый"
        },
        {
          label: "Толщина стенки",
          value: "18мм"
        },
        {
          label: "Порода древесины",
          value: "Береза"
        }
      ]
    },
    {
      id: "fanera-laminirovannaja-1220h2440h18-mm-rf-sort-2-2",
      articul: "8309",
      title: "Фанера ламинированная 1220х2440х18 мм РФ сорт 2/2",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 3690,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "1220мм",
        tip: "Фанера",
        shirina: "2440мм",
        tsvet: "Коричневый",
        poroda: "Береза",
        "otvetsvennyj-menedzher": "Шебзухова Д.А",
        "otvetstvennyj-otdel-podrazdelenie": "Отдел снабжения – отдел № 2 строительных материалов",
        "maksimalnyj-razmer-skidki-ip": "15"
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
          value: "1220мм"
        },
        {
          label: "Тип товара",
          value: "Фанера"
        },
        {
          label: "Ширина",
          value: "2440мм"
        },
        {
          label: "Цвет",
          value: "Коричневый"
        },
        {
          label: "Порода древесины",
          value: "Береза"
        },
        {
          label: "Ответсвенный менеджер",
          value: "Шебзухова Д.А"
        },
        {
          label: "Ответственный отдел (подразделение)",
          value: "Отдел снабжения – отдел № 2 строительных материалов"
        },
        {
          label: "Максимальный размер скидки ИП",
          value: "15"
        }
      ]
    },
    {
      id: "fanera-laminirovannaya-1220kh2440kh21-mm-rf",
      articul: "076331",
      title: "Фанера ламинированная 1220х2440х21 мм РФ",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/6d77ade6-f7a4-11e4-b386-c8600046bc56_9339583c-9ffd-11ea-937f-002590ba8283-372x211.jpeg",
      price: 4800,
      inStock: true,
      quickBuy: true,
      filterValues: {
        ves: "43кг",
        strana: "Россия",
        dlina: "1220мм",
        brend: "ФОФ",
        tip: "Фанера",
        shirina: "2440мм",
        tsvet: "Коричневый",
        tolshhina: "21мм",
        poroda: "Береза",
        "otvetsvennyj-menedzher": "Шебзухова Д.А",
        "otvetstvennyj-otdel-podrazdelenie": "Отдел снабжения – отдел № 2 строительных материалов",
        "maksimalnyj-razmer-skidki-ip": "15"
      },
      specs: [
        {
          label: "Вес",
          value: "43кг"
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
          label: "Длина",
          value: "1220мм"
        },
        {
          label: "Бренд",
          value: "ФОФ"
        },
        {
          label: "Тип товара",
          value: "Фанера"
        },
        {
          label: "Ширина",
          value: "2440мм"
        },
        {
          label: "Цвет",
          value: "Коричневый"
        },
        {
          label: "Толщина стенки",
          value: "21мм"
        },
        {
          label: "Порода древесины",
          value: "Береза"
        },
        {
          label: "Ответсвенный менеджер",
          value: "Шебзухова Д.А"
        },
        {
          label: "Ответственный отдел (подразделение)",
          value: "Отдел снабжения – отдел № 2 строительных материалов"
        },
        {
          label: "Максимальный размер скидки ИП",
          value: "15"
        }
      ]
    }
  ]
};
