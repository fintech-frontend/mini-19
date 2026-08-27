import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/instrument/shtukaturno-otdelochnye-materialy/stroitelnye-tazy-i-emkosti/ */
export const stroitelnyeTazyIEmkostiListing: CatalogListingData = {
  path: "instrument/shtukaturno-otdelochnye-materialy/stroitelnye-tazy-i-emkosti",
  title: "Строительные тазы и емкости",
  totalCountLabel: "40 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Россия",
        "Сибртех",
        "FIT"
      ],
      truncate: false
    },
    {
      id: "obem",
      title: "Объем контейнера л/мм",
      options: [
        "12 л",
        "14л",
        "20л",
        "290мм",
        "330мм",
        "350мм"
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
      id: "tsvet",
      title: "Цвет",
      options: [
        "Красный",
        "Синий",
        "Чёрный"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "vedro-plastmassovoe-20l",
      articul: "016701",
      title: "Ведро пластмассовое 20л",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/7fcd9e2b-30c6-11e2-a1f1-c8600046bc56_39703b05-983d-11eb-93aa-002590ba8282-372x248.jpeg",
      price: 192,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Сибртех",
        tsvet: "Чёрный",
        obem: "20л",
        konstruktsiya: "компрессия",
        osnovnoj: "Пластик"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Сибртех"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Чёрный"
        },
        {
          label: "Объем",
          value: "20 л"
        },
        {
          label: "Конструкция",
          value: "компрессия"
        },
        {
          label: "Основной материал",
          value: "Пластик"
        },
        {
          label: "Объем контейнера л/мм",
          value: "20л"
        }
      ]
    },
    {
      id: "vanna-d-kraski-290kh150-mm-04004-n",
      articul: "016530",
      title: "Ванна д/краски 290х150 мм 04004 н",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/2c65a6d7-30c6-11e2-a1f1-c8600046bc56_0fe37f23-a029-11ea-9380-002590ba8283-303x303.jpeg",
      price: 44,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        dlina: "290мм",
        brend: "FIT",
        tsvet: "Красный",
        osnovnoj: "Пластик",
        tip: "Ванночка для краски",
        sostav: "Пластик",
        obem: "290мм"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Длина",
          value: "290мм"
        },
        {
          label: "Бренд",
          value: "FIT"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Красный"
        },
        {
          label: "Основной материал",
          value: "Пластик"
        },
        {
          label: "Тип материала",
          value: "Ванночка для краски"
        },
        {
          label: "Состав материала",
          value: "Пластик"
        },
        {
          label: "Объем контейнера л/мм",
          value: "290мм"
        }
      ]
    },
    {
      id: "vanna-d-kraski-320h315-mm-04006-fit",
      articul: "12199",
      title: "Ванна д/краски 320х315 мм 04006 FIT",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 235,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "FIT",
        tsvet: "Красный",
        osnovnoj: "Пластик",
        obem: "350мм"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "FIT"
        },
        {
          label: "Цвет",
          value: "Красный"
        },
        {
          label: "Основной материал",
          value: "Пластик"
        },
        {
          label: "Объем контейнера л/мм",
          value: "350мм"
        }
      ]
    },
    {
      id: "vanna-d-kraski-350kh330-mm-04006",
      articul: "016531",
      title: "Ванна д/краски 350х330 мм 04006",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/2c65a6d9-30c6-11e2-a1f1-c8600046bc56_0fe37f24-a029-11ea-9380-002590ba8283-372x186.jpeg",
      price: 91,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "FIT",
        tsvet: "Красный",
        osnovnoj: "Пластик",
        obem: "350мм"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "FIT"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Красный"
        },
        {
          label: "Основной материал",
          value: "Пластик"
        },
        {
          label: "Объем контейнера л/мм",
          value: "350мм"
        }
      ]
    },
    {
      id: "vanna-d-kraski-250-330-mm-04005",
      articul: "016533",
      title: "Ванна д/краски 250/330 мм 04005",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/2c65a6db-30c6-11e2-a1f1-c8600046bc56_0fe37f25-a029-11ea-9380-002590ba8283-303x303.jpeg",
      price: 93,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "FIT",
        tsvet: "Красный",
        osnovnoj: "Пластик",
        obem: "330мм"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "FIT"
        },
        {
          label: "Цвет",
          value: "Красный"
        },
        {
          label: "Основной материал",
          value: "Пластик"
        },
        {
          label: "Объем контейнера л/мм",
          value: "330мм"
        }
      ]
    },
    {
      id: "vannochka-derzhi-270kh290-mm",
      articul: "016617",
      title: "Ванночка DERZHI 270х290 мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/c8dbe44c-a23f-11ea-9380-002590ba8283_e34ae317-b76e-11ea-9384-002590ba8283-303x303.jpeg",
      price: 110,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "FIT",
        tsvet: "Красный",
        osnovnoj: "Пластик",
        obem: "290мм"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "FIT"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Красный"
        },
        {
          label: "Основной материал",
          value: "Пластик"
        },
        {
          label: "Объем контейнера л/мм",
          value: "290мм"
        }
      ]
    },
    {
      id: "vannochka-dlya-kraski-245kh330-mm-1924332",
      articul: "016619",
      title: "Ванночка для краски 245х330 мм 1924332",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/03bef647-80cf-11e6-98c9-c8600046bc56_0a32587f-2e1c-11ee-9406-002590ba8282-303x303.jpeg",
      price: 55,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        osnovnoj: "Пластик",
        obem: "330мм"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Основной материал",
          value: "Пластик"
        },
        {
          label: "Объем контейнера л/мм",
          value: "330мм"
        }
      ]
    },
    {
      id: "vannochka-dlja-kraski-330h250mm-04005-fit",
      articul: "12435",
      title: "Ванночка для краски 330х250мм 04005 FIT",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 220,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "FIT",
        tsvet: "Красный",
        osnovnoj: "Пластик",
        obem: "330мм"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "FIT"
        },
        {
          label: "Цвет",
          value: "Красный"
        },
        {
          label: "Основной материал",
          value: "Пластик"
        },
        {
          label: "Объем контейнера л/мм",
          value: "330мм"
        }
      ]
    },
    {
      id: "vannochka-dlya-kraski-330kh350-mm-1933351",
      articul: "016620",
      title: "Ванночка для краски 330х350 мм 1933351",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/e1128aea-80ce-11e6-98c9-c8600046bc56_0a325880-2e1c-11ee-9406-002590ba8282-303x303.jpeg",
      price: 70,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        tsvet: "Чёрный",
        osnovnoj: "Пластик",
        obem: "350мм"
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
          value: "Чёрный"
        },
        {
          label: "Основной материал",
          value: "Пластик"
        },
        {
          label: "Объем контейнера л/мм",
          value: "350мм"
        }
      ]
    },
    {
      id: "vannochka-hhl-decor-625h440mm-dlja-rolikov-250-480mm-2-6l-670-2548",
      articul: "6996",
      title: "Ванночка ХХL DECOR 625х440мм для роликов 250-480мм 2,6л 670-2548",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/12/6-996-358x303.jpeg",
      price: 1945,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        dlina: "290мм",
        brend: "FIT",
        tip: "Ванночка для краски",
        tsvet: "Красный",
        osnovnoj: "Пластик",
        sostav: "Пластик",
        obem: "290мм"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Длина",
          value: "290мм"
        },
        {
          label: "Бренд",
          value: "FIT"
        },
        {
          label: "Тип материала",
          value: "Ванночка для краски"
        },
        {
          label: "Цвет",
          value: "Красный"
        },
        {
          label: "Основной материал",
          value: "Пластик"
        },
        {
          label: "Состав материала",
          value: "Пластик"
        },
        {
          label: "Объем контейнера л/мм",
          value: "290мм"
        }
      ]
    },
    {
      id: "vedro-dlya-kraski-12l-chyornoe-04020",
      articul: "202348",
      title: "Ведро для краски 12л чёрное 04020",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/c6fcb5bb-1a76-11eb-9396-002590ba8282_5ed7c77d-983c-11eb-93aa-002590ba8282-372x248.jpeg",
      price: 333,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        obem: "12 л",
        konstruktsiya: "компрессия"
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
          label: "Объем",
          value: "12 л"
        },
        {
          label: "Конструкция",
          value: "компрессия"
        }
      ]
    },
    {
      id: "vedro-malyar-14l-350kh250kh235mm-04034",
      articul: "411609",
      title: "Ведро маляр 14л 350х250х235мм 04034",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/12/411609-372x282.jpeg",
      price: 255,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Россия",
        tsvet: "Синий",
        osnovnoj: "Пластик",
        obem: "14л"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Россия"
        },
        {
          label: "Цвет",
          value: "Синий"
        },
        {
          label: "Основной материал",
          value: "Пластик"
        },
        {
          label: "Объем контейнера л/мм",
          value: "14л"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    }
  ]
};
