import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/otdelochnye-materialy/plitka/keramicheskaya-plitka/ */
export const keramicheskayaPlitkaListing: CatalogListingData = {
  path: "otdelochnye-materialy/plitka/keramicheskaya-plitka",
  title: "Керамическая плитка",
  totalCountLabel: "95 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Евро-Керамика",
        "Керамин",
        "Global Tile"
      ],
      truncate: false
    },
    {
      id: "kol",
      title: "Кол-во шт в 1-ой упак",
      options: [
        "8 шт",
        "9 шт",
        "15 шт"
      ],
      truncate: false
    },
    {
      id: "kollektsiya",
      title: "Коллекция",
      options: [
        "Амстердам",
        "Гарда",
        "Aurora",
        "Loft"
      ],
      truncate: false
    },
    {
      id: "ploshhat",
      title: "Площать упаковки",
      options: [
        "1",
        "1,33",
        "1,41",
        "1,62"
      ],
      truncate: false
    },
    {
      id: "pokrytie",
      title: "Покрытие",
      options: [
        "Глянцевое",
        "Матовое"
      ],
      truncate: false
    },
    {
      id: "primenenie",
      title: "Применение",
      options: [
        "Напольная",
        "Настенная"
      ],
      truncate: false
    },
    {
      id: "razmer",
      title: "Размер зубьев",
      options: [
        "298х298мм",
        "400х400мм",
        "418х418мм",
        "450х450мм"
      ],
      truncate: false
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
      id: "dekor-nepal-25h50-5-na-0146",
      articul: "1336",
      title: "Декор Непал 25х50 5 NA 0146",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 300,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        material: "Керамика",
        primenenie: "Настенная",
        pokrytie: "Глянцевое"
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
          value: "Керамика"
        },
        {
          label: "Применение",
          value: "Настенная"
        },
        {
          label: "Покрытие",
          value: "Глянцевое"
        }
      ]
    },
    {
      id: "plitka-d-pola-aurora-chern_01-45kh45",
      articul: "202845",
      title: "Плитка д/пола Aurora Черн_01 45х45 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/189aeb5e-2fbc-11eb-9397-002590ba8282_8fcd470f-b1b9-11ec-93ca-002590ba8282-303x303.jpeg",
      price: 880,
      inStock: true,
      quickBuy: true,
      filterValues: {
        ves: "18",
        strana: "Россия",
        brend: "Global Tile",
        material: "Керамика",
        kollektsiya: "Aurora",
        primenenie: "Напольная",
        pokrytie: "Глянцевое",
        kol: "8 шт",
        ploshhat: "1,62",
        razmer: "450х450мм",
        nelikvid: "Да"
      },
      specs: [
        {
          label: "Вес",
          value: "18"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Global Tile"
        },
        {
          label: "Материал",
          value: "Керамика"
        },
        {
          label: "Коллекция",
          value: "Aurora"
        },
        {
          label: "Применение",
          value: "Напольная"
        },
        {
          label: "Покрытие",
          value: "Глянцевое"
        },
        {
          label: "Кол-во шт в 1-ой упак",
          value: "8 шт"
        },
        {
          label: "Площать упаковки",
          value: "1,62"
        },
        {
          label: "Размер зубьев",
          value: "450х450мм"
        },
        {
          label: "Неликвид",
          value: "Да"
        }
      ]
    },
    {
      id: "plitka-d-pola-istambul-grey-tem-ser-0008-40kh40",
      articul: "415016",
      title: "Плитка д/пола Istambul Grey тем сер 0008 40х40",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/c3a88ead-81f1-11ed-93dd-002590ba8282_11616f37-ce1c-11ed-93ec-002590ba8282-303x303.jpeg",
      price: 940,
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
      id: "plitka-d-pola-loft-ser-61vg-418x418",
      articul: "055254",
      title: "Плитка д/пола Loft сер 61VG 418×418 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/392594d9-8cb4-11e8-999a-c8600046bc56_89c9d411-b1b9-11ec-93ca-002590ba8282.jpeg",
      price: 7752,
      inStock: true,
      quickBuy: true,
      filterValues: {
        ves: "18",
        strana: "Россия",
        brend: "Global Tile",
        material: "Керамика",
        kollektsiya: "Loft",
        primenenie: "Напольная",
        pokrytie: "Матовое",
        kol: "8 шт",
        ploshhat: "1,41",
        razmer: "418х418мм",
        nelikvid: "Да"
      },
      specs: [
        {
          label: "Вес",
          value: "18"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Global Tile"
        },
        {
          label: "Материал",
          value: "Керамика"
        },
        {
          label: "Коллекция",
          value: "Loft"
        },
        {
          label: "Применение",
          value: "Напольная"
        },
        {
          label: "Покрытие",
          value: "Матовое"
        },
        {
          label: "Кол-во шт в 1-ой упак",
          value: "8 шт"
        },
        {
          label: "Площать упаковки",
          value: "1,41"
        },
        {
          label: "Размер зубьев",
          value: "418х418мм"
        },
        {
          label: "Неликвид",
          value: "Да"
        }
      ]
    },
    {
      id: "plitka-d-pola-statuario-gold-0001-40kh40",
      articul: "417935",
      title: "Плитка д/пола Statuario Gold 0001 40х40",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/09/417935-301x303.jpeg",
      price: 905,
      inStock: true,
      quickBuy: true,
      filterValues: {},
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "20"
        }
      ]
    },
    {
      id: "plitka-d-pola-statuario-white-3srw-0005-40h40",
      articul: "418564",
      title: "Плитка д/пола Statuario White 3SRW 0005 40х40",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/09/418564-304x303.jpeg",
      price: 960,
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
      id: "plitka-d-pola-amsterdam-298kh298-klinker-stu",
      articul: "055397",
      title: "Плитка д/пола Амстердам 29,8х29,8 клинкер ступени УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/4096de5d-58a2-11e7-ab8a-c8600046bc56_89c9d425-b1b9-11ec-93ca-002590ba8282-303x303.jpeg",
      price: 443,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Беларусь",
        brend: "Керамин",
        primenenie: "Напольная",
        pokrytie: "Матовое"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Беларусь"
        },
        {
          label: "Бренд",
          value: "Керамин"
        },
        {
          label: "Применение",
          value: "Напольная"
        },
        {
          label: "Покрытие",
          value: "Матовое"
        }
      ]
    },
    {
      id: "plitka-d-pola-amsterdam-298kh298-klinker",
      articul: "055395",
      title: "Плитка д/пола Амстердам 4 29,8х29,8 клинкер",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/1f6c11ec-58a2-11e7-ab8a-c8600046bc56_89c9d423-b1b9-11ec-93ca-002590ba8282-298x303.jpeg",
      price: 650,
      inStock: true,
      quickBuy: true,
      filterValues: {
        ves: "18",
        strana: "Беларусь",
        brend: "Керамин",
        material: "Керамика",
        kollektsiya: "Амстердам",
        primenenie: "Напольная",
        pokrytie: "Матовое",
        kol: "15 шт",
        ploshhat: "1,33",
        razmer: "298х298мм"
      },
      specs: [
        {
          label: "Вес",
          value: "18"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Беларусь"
        },
        {
          label: "Бренд",
          value: "Керамин"
        },
        {
          label: "Материал",
          value: "Керамика"
        },
        {
          label: "Коллекция",
          value: "Амстердам"
        },
        {
          label: "Применение",
          value: "Напольная"
        },
        {
          label: "Покрытие",
          value: "Матовое"
        },
        {
          label: "Кол-во шт в 1-ой упак",
          value: "15 шт"
        },
        {
          label: "Площать упаковки",
          value: "1,33"
        },
        {
          label: "Размер зубьев",
          value: "298х298мм"
        }
      ]
    },
    {
      id: "plitka-d-pola-argus-seryj-tr453602d-45h45",
      articul: "10034",
      title: "Плитка д/пола Аргус серый ТР453602D 45х45",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 1150,
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
      id: "plitka-d-pola-galera-0041-40h40-1-12m2",
      articul: "1401",
      title: "Плитка д/пола Галера 0041 40х40 (1,12м2)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 910,
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
      id: "plitka-d-pola-garda-0052-mat-40kh40",
      articul: "129246",
      title: "Плитка д/пола Гарда 0052 мат 40х40",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/a2cba139-fbd8-11ea-9392-002590ba8283_9b88b9de-c946-11ec-93cd-002590ba8282-303x303.jpeg",
      price: 940,
      inStock: true,
      quickBuy: true,
      filterValues: {
        kollektsiya: "Гарда",
        strana: "Россия",
        brend: "Евро-Керамика",
        kol: "9 шт",
        ves: "18",
        primenenie: "Напольная",
        material: "Керамика",
        pokrytie: "Глянцевое",
        ploshhat: "1",
        razmer: "400х400мм"
      },
      specs: [
        {
          label: "Коллекция",
          value: "Гарда"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Евро-Керамика"
        },
        {
          label: "Кол-во шт в 1-ой упак",
          value: "9 шт"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Вес",
          value: "18"
        },
        {
          label: "Применение",
          value: "Напольная"
        },
        {
          label: "Материал",
          value: "Керамика"
        },
        {
          label: "Покрытие",
          value: "Глянцевое"
        },
        {
          label: "Площать упаковки",
          value: "1"
        },
        {
          label: "Размер зубьев",
          value: "400х400мм"
        }
      ]
    },
    {
      id: "plitka-d-pola-gres-phoenix-ph0054-15h60-um",
      articul: "402774",
      title: "Плитка д/пола Грес Phoenix PH0054 15х60 УМ",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 895,
      inStock: false,
      quickBuy: true,
      filterValues: {}
    }
  ]
};
