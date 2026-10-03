import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/tovary-dlya-doma-sada-i-ogoroda/oborudovanie-dlya-moyki-mashin/pylesosy/ */
export const pylesosyListing: CatalogListingData = {
  path: "tovary-dlya-doma-sada-i-ogoroda/oborudovanie-dlya-moyki-mashin/pylesosy",
  title: "Пылесосы",
  totalCountLabel: "16 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Вихрь",
        "Ресанта",
        "Champion",
        "Huter",
        "Karcher",
        "STIHL"
      ],
      truncate: false
    },
    {
      id: "ves",
      title: "Вес",
      options: [
        "2.6 кг",
        "4.22 кг"
      ],
      truncate: false
    },
    {
      id: "material-baka",
      title: "Материал бака",
      options: [
        "алюминий",
        "нержавеющая сталь",
        "пластик"
      ],
      truncate: false
    },
    {
      id: "moshhnost",
      title: "Мощность",
      options: [
        "0.7 кВт",
        "0.75 кВт",
        "2.15 кВт",
        "600 Вт",
        "1400 Вт",
        "1500 Вт"
      ],
      truncate: false
    },
    {
      id: "obem-baka",
      title: "Объем бака",
      options: [
        "0.5 л",
        "0.75 л",
        "1.2 л",
        "17 л",
        "20 л",
        "30 л"
      ],
      truncate: false
    },
    {
      id: "obem-dvigatelya",
      title: "Объем двигателя",
      options: [
        "26 см3",
        "52 см3"
      ],
      truncate: false
    },
    {
      id: "proizvoditelnost-vozduha",
      title: "Производительность воздуха",
      options: [
        "500 м3/ч",
        "710 м3/ч",
        "720 м3/ч",
        "1350 м3/ч"
      ],
      truncate: false
    },
    {
      id: "skorost-vozduha",
      title: "Скорость воздуха",
      options: [
        "60 м/с",
        "65 м/с"
      ],
      truncate: false
    },
    {
      id: "strana-proizvoditelya",
      title: "Страна производителя",
      options: [
        "Германия",
        "Китай",
        "Россия"
      ],
      truncate: false
    },
    {
      id: "tip",
      title: "Тип",
      options: [
        "Воздуходувка",
        "Воздуходувка бензиновая",
        "Воздуходувка-пылесос",
        "Пылесос",
        "Пылесос строительный"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "vozdukhoduvka-br-500-stihl",
      articul: "202678",
      title: "Воздуходувка BR 500 STIHL",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/21ea8e00-295e-11eb-9397-002590ba8282_4c8066ab-b0fc-11ed-93ea-002590ba8282-372x248.jpeg",
      price: 55700,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "STIHL",
        "strana-proizvoditelya": "Германия",
        tip: "Воздуходувка",
        moshhnost: "600 Вт",
        "proizvoditelnost-vozduha": "500 м3/ч",
        "skorost-vozduha": "65 м/с",
        "uroven-shuma": "91 дБ",
        ves: "2.6 кг"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Бренд",
          value: "STIHL"
        },
        {
          label: "Страна производителя",
          value: "Германия"
        },
        {
          label: "Тип",
          value: "Воздуходувка"
        },
        {
          label: "Мощность",
          value: "600 Вт"
        },
        {
          label: "Производительность воздуха",
          value: "500 м3/ч"
        },
        {
          label: "Скорость воздуха",
          value: "65 м/с"
        },
        {
          label: "Уровень шума",
          value: "91 дБ"
        },
        {
          label: "Вес",
          value: "2.6 кг"
        }
      ]
    },
    {
      id: "vozdukhoduvka-champion-gb227-07-kvt-26-sm-3422-kg-720-m3-chas",
      articul: "414753",
      title: "Воздуходувка Champion GB227 0,7 кВт 26 см 3,4,22 кг 720 м3/час",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/7b782e6a-7b72-11ed-93dd-002590ba8282_3958ade8-b0fc-11ed-93ea-002590ba8282-372x248.jpeg",
      price: 13900,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Champion",
        "strana-proizvoditelya": "Китай",
        tip: "Воздуходувка бензиновая",
        moshhnost: "0.7 кВт",
        "obem-dvigatelya": "26 см3",
        "proizvoditelnost-vozduha": "720 м3/ч",
        "skorost-vozduha": "60 м/с",
        "obem-baka": "0.5 л",
        ves: "4.22 кг"
      },
      specs: [
        {
          label: "Бренд",
          value: "Champion"
        },
        {
          label: "Страна производителя",
          value: "Китай"
        },
        {
          label: "Тип",
          value: "Воздуходувка бензиновая"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "0.7 кВт"
        },
        {
          label: "Объем двигателя",
          value: "26 см3"
        },
        {
          label: "Производительность воздуха",
          value: "720 м3/ч"
        },
        {
          label: "Скорость воздуха",
          value: "60 м/с"
        },
        {
          label: "Объем бака",
          value: "0.5 л"
        },
        {
          label: "Вес",
          value: "4.22 кг"
        }
      ]
    },
    {
      id: "vozduhoduvka-huter-gb-26-075-kvt-26-sm3-710-m3-chas",
      articul: "427369",
      title: "Воздуходувка HUTER GB-26 0,75 кВт 26 см3 710 м3/час",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 13200,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "Huter",
        "strana-proizvoditelya": "Китай",
        tip: "Воздуходувка бензиновая",
        moshhnost: "0.75 кВт",
        "obem-dvigatelya": "26 см3",
        "proizvoditelnost-vozduha": "710 м3/ч",
        "obem-baka": "0.75 л"
      },
      specs: [
        {
          label: "Бренд",
          value: "Huter"
        },
        {
          label: "Страна производителя",
          value: "Китай"
        },
        {
          label: "Тип",
          value: "Воздуходувка бензиновая"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "0.75 кВт"
        },
        {
          label: "Объем двигателя",
          value: "26 см3"
        },
        {
          label: "Производительность воздуха",
          value: "710 м3/ч"
        },
        {
          label: "Объем бака",
          value: "0.75 л"
        }
      ]
    },
    {
      id: "vozduhoduvka-huter-gb-26v-0-75kvt-26-sm3-710-m3-chas-obduv-izmelchenie-vsasyvanie",
      articul: "432376",
      title: "Воздуходувка HUTER GB-26V 0,75кВт 26 см3 710 м3/час (обдув, измельчение, всасывание)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 15600,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Huter",
        "strana-proizvoditelya": "Китай",
        tip: "Воздуходувка-пылесос",
        moshhnost: "0.75 кВт",
        "obem-dvigatelya": "26 см3",
        "proizvoditelnost-vozduha": "710 м3/ч",
        funkcii: "обдув/измельчение/всасывание",
        "obem-meshka": "40 л"
      },
      specs: [
        {
          label: "Бренд",
          value: "Huter"
        },
        {
          label: "Страна производителя",
          value: "Китай"
        },
        {
          label: "Тип",
          value: "Воздуходувка-пылесос"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "0.75 кВт"
        },
        {
          label: "Объем двигателя",
          value: "26 см3"
        },
        {
          label: "Производительность воздуха",
          value: "710 м3/ч"
        },
        {
          label: "Функции",
          value: "обдув/измельчение/всасывание"
        },
        {
          label: "Объем мешка",
          value: "40 л"
        }
      ]
    },
    {
      id: "vozduhoduvka-huter-gb-52s-215-kvt-52-sm3-1350-m3-chas",
      articul: "427370",
      title: "Воздуходувка HUTER GB-52S 2,15 кВт 52 см3 1350 м3/час",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 19500,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Huter",
        "strana-proizvoditelya": "Китай",
        tip: "Воздуходувка бензиновая",
        moshhnost: "2.15 кВт",
        "obem-dvigatelya": "52 см3",
        "proizvoditelnost-vozduha": "1350 м3/ч",
        "obem-baka": "1.2 л"
      },
      specs: [
        {
          label: "Бренд",
          value: "Huter"
        },
        {
          label: "Страна производителя",
          value: "Китай"
        },
        {
          label: "Тип",
          value: "Воздуходувка бензиновая"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "2.15 кВт"
        },
        {
          label: "Объем двигателя",
          value: "52 см3"
        },
        {
          label: "Производительность воздуха",
          value: "1350 м3/ч"
        },
        {
          label: "Объем бака",
          value: "1.2 л"
        }
      ]
    },
    {
      id: "mojushhij-pylesos-mp-1600-20-resanta-1600vt-vlazhnaja-uborka-75-19-5",
      articul: "11234",
      title: "Моющий пылесос МП-1600/20 Ресанта 1600Вт,влажная уборка 75/19/5",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 13950,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "maksimalnyj-razmer-skidki-ip": "15"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Максимальный размер скидки ИП",
          value: "15"
        }
      ]
    },
    {
      id: "pylesos-stroitelnyj-ps-1500-20-resanta-75-19-1",
      articul: "7274",
      title: "Пылесос строительный ПС-1500/20 Ресанта 75/19/1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 9050,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "Ресанта",
        "strana-proizvoditelya": "Россия",
        tip: "Пылесос строительный",
        moshhnost: "1500 Вт",
        "obem-baka": "20 л",
        "tip-uborki": "сухая/влажная",
        "material-baka": "нержавеющая сталь"
      },
      specs: [
        {
          label: "Бренд",
          value: "Ресанта"
        },
        {
          label: "Страна производителя",
          value: "Россия"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип",
          value: "Пылесос строительный"
        },
        {
          label: "Мощность",
          value: "1500 Вт"
        },
        {
          label: "Объем бака",
          value: "20 л"
        },
        {
          label: "Тип уборки",
          value: "сухая/влажная"
        },
        {
          label: "Материал бака",
          value: "нержавеющая сталь"
        }
      ]
    },
    {
      id: "pylesos-stroitelnyj-ps-1500-30-resanta-1-5kvt-30l",
      articul: "8337",
      title: "Пылесос строительный ПС-1500/30 Ресанта 1,5кВт,30л",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 10200,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Ресанта",
        "strana-proizvoditelya": "Россия",
        tip: "Пылесос строительный",
        moshhnost: "1500 Вт",
        "maksimalnyj-razmer-skidki-ip": "15",
        "obem-baka": "30 л",
        "tip-uborki": "сухая/влажная",
        "material-baka": "нержавеющая сталь"
      },
      specs: [
        {
          label: "Бренд",
          value: "Ресанта"
        },
        {
          label: "Страна производителя",
          value: "Россия"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип",
          value: "Пылесос строительный"
        },
        {
          label: "Мощность",
          value: "1500 Вт"
        },
        {
          label: "Максимальный размер скидки ИП",
          value: "15"
        },
        {
          label: "Объем бака",
          value: "30 л"
        },
        {
          label: "Тип уборки",
          value: "сухая/влажная"
        },
        {
          label: "Материал бака",
          value: "нержавеющая сталь"
        }
      ]
    },
    {
      id: "pylesos-stroitelnyy-sp-1500-20-vikhr-72-19-1",
      articul: "060876",
      title: "Пылесос строительный СП-1500/20 Вихрь 72/19/1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/89727728-015f-11ea-a9c6-c8600046bc56_5727e6b8-9fed-11ea-937f-002590ba8283-303x303.jpeg",
      price: 8500,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Вихрь",
        "strana-proizvoditelya": "Россия",
        tip: "Пылесос строительный",
        moshhnost: "1500 Вт",
        "obem-baka": "20 л",
        "tip-uborki": "сухая/влажная",
        "material-baka": "нержавеющая сталь"
      },
      specs: [
        {
          label: "Бренд",
          value: "Вихрь"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производителя",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Пылесос строительный"
        },
        {
          label: "Мощность",
          value: "1500 Вт"
        },
        {
          label: "Объем бака",
          value: "20 л"
        },
        {
          label: "Тип уборки",
          value: "сухая/влажная"
        },
        {
          label: "Материал бака",
          value: "нержавеющая сталь"
        }
      ]
    },
    {
      id: "pylesos-stroitelnyy-sp-1500-20a-vikhr-72-19-4",
      articul: "421538",
      title: "Пылесос строительный СП-1500/20А Вихрь 72/19/4",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 7300,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Вихрь",
        "strana-proizvoditelya": "Россия",
        tip: "Пылесос строительный",
        moshhnost: "1500 Вт",
        "obem-baka": "20 л",
        "tip-uborki": "сухая/влажная",
        "material-baka": "алюминий",
        osobennost: "автоочистка фильтра"
      },
      specs: [
        {
          label: "Бренд",
          value: "Вихрь"
        },
        {
          label: "Страна производителя",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Пылесос строительный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "1500 Вт"
        },
        {
          label: "Объем бака",
          value: "20 л"
        },
        {
          label: "Тип уборки",
          value: "сухая/влажная"
        },
        {
          label: "Материал бака",
          value: "алюминий"
        },
        {
          label: "Особенность",
          value: "автоочистка фильтра"
        }
      ]
    },
    {
      id: "pylesos-stroitelnyy-sp-1500-30-vikhr-72-19-2",
      articul: "060877",
      title: "Пылесос строительный СП-1500/30 Вихрь 72/19/2",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/96e3aa7e-015f-11ea-a9c6-c8600046bc56_5727e6b7-9fed-11ea-937f-002590ba8283-303x303.jpeg",
      price: 10600,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Вихрь",
        "strana-proizvoditelya": "Россия",
        tip: "Пылесос строительный",
        moshhnost: "1500 Вт",
        "obem-baka": "30 л",
        "tip-uborki": "сухая/влажная",
        "material-baka": "нержавеющая сталь"
      },
      specs: [
        {
          label: "Бренд",
          value: "Вихрь"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производителя",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Пылесос строительный"
        },
        {
          label: "Мощность",
          value: "1500 Вт"
        },
        {
          label: "Объем бака",
          value: "30 л"
        },
        {
          label: "Тип уборки",
          value: "сухая/влажная"
        },
        {
          label: "Материал бака",
          value: "нержавеющая сталь"
        }
      ]
    },
    {
      id: "pylesos-khozyaystvennyy-wd-3-p-premium-1-628-190-0",
      articul: "401367",
      title: "Пылесос хозяйственный WD 3 P 1.628-190.0",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/2309bd58-b19c-11eb-93ab-002590ba8282_56773a1c-953f-11ec-93c5-002590ba8282-303x303.jpeg",
      price: 19400,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Karcher",
        "strana-proizvoditelya": "Германия",
        tip: "Пылесос",
        moshhnost: "1400 Вт",
        "obem-baka": "17 л",
        "tip-uborki": "сухая/влажная",
        "material-baka": "пластик",
        "radius-dejstviya": "8 м"
      },
      specs: [
        {
          label: "Бренд",
          value: "Karcher"
        },
        {
          label: "Страна производителя",
          value: "Германия"
        },
        {
          label: "Тип",
          value: "Пылесос"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "1400 Вт"
        },
        {
          label: "Объем бака",
          value: "17 л"
        },
        {
          label: "Тип уборки",
          value: "сухая/влажная"
        },
        {
          label: "Материал бака",
          value: "пластик"
        },
        {
          label: "Радиус действия",
          value: "8 м"
        }
      ]
    }
  ]
};
