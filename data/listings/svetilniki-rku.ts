import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/yelektrotovary/svetilniki/svetilniki-rku/ */
export const svetilnikiRkuListing: CatalogListingData = {
  path: "yelektrotovary/svetilniki/svetilniki-rku",
  title: "Светильники РКУ",
  totalCountLabel: "28 товаров",
  filterFields: [
    {
      id: "strana",
      title: "Страна производитель",
      options: [
        "Беларусь",
        "Китай",
        "Россия"
      ],
      truncate: false
    },
    {
      id: "tip",
      title: "Тип цоколя",
      options: [
        "E27",
        "E40"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "kreplenie-na-stolby-kronshteyn",
      articul: "085135",
      title: "Крепление на столбы (кронштейн)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 365,
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
      id: "kronshtejn-dlja-ulichnyh-svetilnikov-l-350mm-d-48mm-s-1-homutom-seryj-na-oporu-spp-ac3-0-350-048-jera",
      articul: "433243",
      title: "Кронштейн для уличных светильников L=350мм d=48мм с 1 хомутом серый на опору SPP-AC3-0-350-048 ЭРА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/04/433243-303x303.jpeg",
      price: 1365,
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
      id: "kronshteyn-ds-1",
      articul: "034464",
      title: "Кронштейн ДС-03 на столб",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 630,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Беларусь",
        material: "Сталь"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Беларусь"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Материал",
          value: "Сталь"
        }
      ]
    },
    {
      id: "kronshteyn-na-oporu",
      articul: "409799",
      title: "Кронштейн на опору",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 900,
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
      id: "kronshteyn-nasten-rg-zhku-reg-ugol-naklo",
      articul: "034463",
      title: "Кронштейн настен Р*Г/ЖКУ рег угол наклона",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/3b43df40-30c6-11e2-a1f1-c8600046bc56_d03b0399-554c-11ee-9413-002590ba8282-337x303.jpeg",
      price: 500,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        material: "Сталь"
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
          label: "Материал",
          value: "Сталь"
        }
      ]
    },
    {
      id: "svetilnik-led-konsolnyj-dku-1013-50d-5000k-ip65",
      articul: "430160",
      title: "Светильник LED консольный ДКУ 1013-50Д 5000к IP65",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/04/430160-311x303.jpeg",
      price: 1600,
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
      id: "svetilnik-nku-97-200-002-e-27-so-steklom",
      articul: "065150",
      title: "Светильник НКУ 97-200-002 Е-27 со стеклом",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/326745d7-f03f-11e2-8290-c8600046bc56_fc8a6221-c484-11ec-93cd-002590ba8282-372x248.jpeg",
      price: 1650,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        material: "Сталь",
        tip: "E27"
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
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Тип цоколя",
          value: "E27"
        }
      ]
    },
    {
      id: "svetilnik-nku-02-125-002-e-27-so-steklom",
      articul: "430307",
      title: "Светильник НКУ 97-200-004 Е-27 без стекла",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/04/430307-311x303.jpeg",
      price: 1300,
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
      id: "svetilnik-rku-02-250-003-s-steklom",
      articul: "065250",
      title: "Светильник РКУ 02-250-003 с/стеклом",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/17466be3-30c8-11e2-a1f1-c8600046bc56_e24582cd-554c-11ee-9413-002590ba8282-337x303.jpeg",
      price: 1350,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        material: "Сталь",
        tip: "E27"
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
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Тип цоколя",
          value: "E27"
        }
      ]
    },
    {
      id: "svetilnik-rku-03-250-001-s-steklom",
      articul: "065251",
      title: "Светильник РКУ 03-250-001 с/стеклом",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/38445cfa-8115-11e4-9002-c8600046bc56_e24582ce-554c-11ee-9413-002590ba8282-297x303.jpeg",
      price: 2000,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        material: "Сталь",
        tip: "E27"
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
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Тип цоколя",
          value: "E27"
        }
      ]
    },
    {
      id: "svetilnik-rku-06-250-bez-stekla-r",
      articul: "065252",
      title: "Светильник РКУ 06-250 без стекла (Р)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/17466be5-30c8-11e2-a1f1-c8600046bc56_e24582cf-554c-11ee-9413-002590ba8282-337x303.jpeg",
      price: 910,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        material: "Сталь",
        tip: "E27"
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
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Тип цоколя",
          value: "E27"
        }
      ]
    },
    {
      id: "svetilnik-rku-06-250-vypukloe-antivandal",
      articul: "065253",
      title: "Светильник РКУ 06-250 выпуклое антивандальное стекло",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/17466be7-30c8-11e2-a1f1-c8600046bc56_e24582d0-554c-11ee-9413-002590ba8282-337x303.jpeg",
      price: 1350,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        material: "Сталь",
        tip: "E40"
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
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Тип цоколя",
          value: "E40"
        }
      ]
    }
  ]
};
