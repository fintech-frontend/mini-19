import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/specodezhda-i-sredstva-individualno/pozharnyy-inventar/shkafy-krany/ */
export const shkafyKranyListing: CatalogListingData = {
  path: "specodezhda-i-sredstva-individualno/pozharnyy-inventar/shkafy-krany",
  title: "Шкафы, краны",
  totalCountLabel: "28 товаров",
  filterFields: [
    {
      id: "razmer",
      title: "Размер зубьев",
      options: [
        "50мм",
        "100*163*143",
        "101*151*163",
        "116*140*155",
        "120*140*155",
        "160*140*175",
        "650х540х230"
      ],
      truncate: true
    },
    {
      id: "strana",
      title: "Страна производитель",
      options: [
        "Беларусь",
        "Россия"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "klapan-du-50",
      articul: "026904",
      title: "Клапан ДУ-50 латунь угловой 125гр. муфта/цапка пож.",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/f3a57786-4f88-11e4-84d1-c8600046bc56_93a5e5c2-a019-11ea-937f-002590ba8283-250x303.jpeg",
      price: 2440,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Беларусь",
        primenenie: "пожарный инвентарь",
        razmer: "50мм"
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
          label: "Применение",
          value: "пожарный инвентарь"
        },
        {
          label: "Размер зубьев",
          value: "50мм"
        }
      ]
    },
    {
      id: "klapan-du50-pryamoy-latunnyy-15bzr-mufta-m",
      articul: "412798",
      title: "Клапан ДУ50 прямой латунный 15БЗР муфта/муфта",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 1800,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Беларусь",
        primenenie: "пожарный инвентарь",
        razmer: "100*163*143"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Беларусь"
        },
        {
          label: "Применение",
          value: "пожарный инвентарь"
        },
        {
          label: "Размер зубьев",
          value: "100*163*143"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "klapan-du50-pryamoy-latunnyy-15bzr-mufta-c",
      articul: "026906",
      title: "Клапан ДУ50 прямой латунный 15БЗР муфта/цапка УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/a2663992-dfab-11e6-98af-c8600046bc56_93a5e5c3-a019-11ea-937f-002590ba8283-303x303.jpeg",
      price: 1308,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Беларусь",
        razmer: "101*151*163"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Беларусь"
        },
        {
          label: "Размер зубьев",
          value: "101*151*163"
        }
      ]
    },
    {
      id: "klapan-pk-50-mufta-capka-chugun-uglovoy-125-g",
      articul: "205104",
      title: "Клапан ПК-50 муфта/цапка чугун угловой 125 гр",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 1075,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Беларусь",
        primenenie: "пожарный инвентарь",
        razmer: "120*140*155"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Беларусь"
        },
        {
          label: "Применение",
          value: "пожарный инвентарь"
        },
        {
          label: "Размер зубьев",
          value: "120*140*155"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "klapan-pk-65-mufta-capka-chugun-uglovoy-125-g",
      articul: "410544",
      title: "Клапан ПК-65 муфта/цапка чугун угловой 125 гр",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 1305,
      inStock: false,
      quickBuy: true,
      filterValues: {
        razmer: "160*140*175",
        primenenie: "пожарный инвентарь",
        strana: "Беларусь"
      },
      specs: [
        {
          label: "Размер",
          value: "160*140*175"
        },
        {
          label: "Применение",
          value: "пожарный инвентарь"
        },
        {
          label: "Страна производитель",
          value: "Беларусь"
        }
      ]
    },
    {
      id: "klapan-pozharnogo-krana-kpk-50p-m-makh",
      articul: "026935",
      title: "Клапан пожарного крана КПК-50П м.мах",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/598cc136-30c6-11e2-a1f1-c8600046bc56_93a5e5c4-a019-11ea-937f-002590ba8283-303x303.jpeg",
      price: 990,
      inStock: false,
      quickBuy: true,
      filterValues: {
        razmer: "116*140*155",
        primenenie: "пожарный инвентарь",
        strana: "Беларусь"
      },
      specs: [
        {
          label: "Размер",
          value: "116*140*155"
        },
        {
          label: "Применение",
          value: "пожарный инвентарь"
        },
        {
          label: "Страна производитель",
          value: "Беларусь"
        }
      ]
    },
    {
      id: "klapan-pozharnyy-kplp-50-1-mufta-capka",
      articul: "131356",
      title: "Клапан пожарный КПЛП 50-1 муфта-цапка",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/b507c271-05b6-11e9-ad07-c8600046bc56_93a5e5c5-a019-11ea-937f-002590ba8283-228x303.jpeg",
      price: 3300,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Беларусь"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Беларусь"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "shkaf-pozharnyj-shp-k-310-vzb-evro-2",
      articul: "5200",
      title: "Шкаф пожарный ШП-К (310 ВЗБ) ЕВРО",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 2500,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        }
      ]
    },
    {
      id: "shkaf-pozharnyy-shp-k-310-vzk-evro",
      articul: "078946",
      title: "Шкаф пожарный ШП-К (310 ВЗК) ЕВРО",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/0efd5729-fa24-11e8-925f-c8600046bc56_93a5e5c7-a019-11ea-937f-002590ba8283-303x303.jpeg",
      price: 1700,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        primenenie: "пожарный инвентарь",
        razmer: "650х540х230",
        osnovnoj: "Металл"
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
          label: "Применение",
          value: "пожарный инвентарь"
        },
        {
          label: "Размер зубьев",
          value: "650х540х230"
        },
        {
          label: "Основной материал",
          value: "Металл"
        }
      ]
    },
    {
      id: "shkaf-pozharnyy-shp-k-310-nok",
      articul: "078947",
      title: "Шкаф пожарный ШП-К 310 НОК",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/8466c02e-16eb-11e3-a27a-c8600046bc56_93a5e5c8-a019-11ea-937f-002590ba8283-268x303.jpeg",
      price: 2100,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "shkaf-pozharnyj-shp-k-310-vzb-evro",
      articul: "2634",
      title: "Шкаф пожарный ШП-К-310 ВЗБ ЕВРО",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 2500,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        }
      ]
    },
    {
      id: "shkaf-pozharnyj-shp-k-o-320-vzb-evro",
      articul: "5201",
      title: "Шкаф пожарный ШП-К-О (320 ВЗБ) ЕВРО",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 4300,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        }
      ]
    }
  ]
};
