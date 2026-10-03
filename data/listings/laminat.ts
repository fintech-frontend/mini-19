import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/otdelochnye-materialy/napolnye-pokrytiya/laminat/ */
export const laminatListing: CatalogListingData = {
  path: "otdelochnye-materialy/napolnye-pokrytiya/laminat",
  title: "Ламинат",
  totalCountLabel: "505 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Ламинели",
        "Матфлоринг",
        "Eurohome",
        "tarkett",
        "Woodstyle"
      ],
      truncate: false
    },
    {
      id: "dizajn",
      title: "Дизайн",
      options: [
        "Белый 9259-5",
        "Дуб Альбервиле Янтарный 2651",
        "Дуб Данвиль белый",
        "Дуб Норвежский",
        "Дуб Себу",
        "Кимберли 004",
        "Ларош"
      ],
      truncate: true
    },
    {
      id: "dlina",
      title: "Длина",
      options: [
        "1215",
        "1285",
        "1292",
        "1382"
      ],
      truncate: false
    },
    {
      id: "klass",
      title: "Класс",
      options: [
        "33",
        "34"
      ],
      truncate: false
    },
    {
      id: "kol",
      title: "Кол-во шт в 1-ой упак",
      options: [
        "5 шт",
        "6 шт",
        "7 шт",
        "8",
        "8 шт"
      ],
      truncate: false
    },
    {
      id: "kollektsiya",
      title: "Коллекция",
      options: [
        "бриллиант",
        "Карелия Плюс",
        "Пилот",
        "Art",
        "ESTETICA",
        "Magic Wide",
        "Matrix"
      ],
      truncate: true
    },
    {
      id: "kvadrat",
      title: "Квадрат 1-ой упак",
      options: [
        "1,48",
        "1,75",
        "1,233 м²",
        "1,3475 м²",
        "1,7542 м²",
        "2,128",
        "2.3128 м²"
      ],
      truncate: true
    },
    {
      id: "ploshhad",
      title: "Площадь 1-ой Доски",
      options: [
        "0,2055 м²",
        "0,2467 м²",
        "0,2506 м²",
        "0,2667",
        "0,2695 м²",
        "0,2916 м²",
        "0.2891 м²"
      ],
      truncate: true
    },
    {
      id: "shirina",
      title: "Ширина",
      options: [
        "159",
        "192",
        "193",
        "194",
        "195",
        "238",
        "240"
      ],
      truncate: true
    },
    {
      id: "strana",
      title: "Страна производитель",
      options: [
        "Беларусь",
        "Китай",
        "Россия",
        "Россия-Германия"
      ],
      truncate: false
    },
    {
      id: "tolshhina",
      title: "Толщина",
      options: [
        "8мм",
        "9мм",
        "10мм",
        "12",
        "12мм"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "laminat-matfloring-brilliant-0-2916-kimberli-004-12-34",
      articul: "1163",
      title: "Ламинат Матфлоринг Бриллиант (0,2916) Кимберли 004 12/34",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/07/1-163-303x303.jpeg",
      price: 415,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        dlina: "1215",
        brend: "Матфлоринг",
        klass: "34",
        shirina: "240",
        tolshhina: "12",
        dizajn: "Кимберли 004",
        kollektsiya: "бриллиант",
        "edinicaizmereniya-v-mm": "мм",
        kvadrat: "1,75",
        kol: "6 шт",
        ploshhad: "0,2916 м²"
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
          value: "1215"
        },
        {
          label: "Бренд",
          value: "Матфлоринг"
        },
        {
          label: "Класс",
          value: "34"
        },
        {
          label: "Ширина",
          value: "240"
        },
        {
          label: "Толщина",
          value: "12"
        },
        {
          label: "Дизайн",
          value: "Кимберли 004"
        },
        {
          label: "Коллекция",
          value: "бриллиант"
        },
        {
          label: "ЕдиницаИзмерения(в мм)",
          value: "мм"
        },
        {
          label: "Квадрат 1-ой упак",
          value: "1,75"
        },
        {
          label: "Кол-во шт в 1-ой упак",
          value: "6 шт"
        },
        {
          label: "Класс прочности",
          value: "34"
        },
        {
          label: "Площадь 1-ой Доски",
          value: "0,2916 м²"
        }
      ]
    },
    {
      id: "laminat-eurohome-art-02467-albervile-jantarnyj-2651-33-12",
      articul: "428052",
      title: "Ламинат Eurohome ART (0,2467) Дуб Альбервиле Янтарный 2651 33/12 (Акция)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/07/428052-214x303.jpeg",
      price: 207,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Беларусь",
        dlina: "1285",
        brend: "Eurohome",
        shirina: "192",
        tolshhina: "12мм",
        dizajn: "Дуб Альбервиле Янтарный 2651",
        kollektsiya: "Art",
        "edinicaizmereniya-v-mm": "мм",
        kvadrat: "1,48",
        kol: "6 шт",
        klass: "33",
        ploshhad: "0,2467 м²"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Беларусь"
        },
        {
          label: "Длина",
          value: "1285"
        },
        {
          label: "Бренд",
          value: "Eurohome"
        },
        {
          label: "Ширина",
          value: "192"
        },
        {
          label: "Толщина",
          value: "12мм"
        },
        {
          label: "Дизайн",
          value: "Дуб Альбервиле Янтарный 2651"
        },
        {
          label: "Коллекция",
          value: "Art"
        },
        {
          label: "ЕдиницаИзмерения(в мм)",
          value: "мм"
        },
        {
          label: "Квадрат 1-ой упак",
          value: "1,48"
        },
        {
          label: "Кол-во шт в 1-ой упак",
          value: "6 шт"
        },
        {
          label: "Класс прочности",
          value: "33"
        },
        {
          label: "Площадь 1-ой Доски",
          value: "0,2467 м²"
        }
      ]
    },
    {
      id: "laminat-rojs-matriks-0-2667-dub-sebu-8-33-v",
      articul: "435025",
      title: "Ламинат Ройс Матрикс (0,2667) Дуб Себу 8/33 V (Акция) У",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/08/435025-303x303.jpeg",
      price: 200,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "1382",
        klass: "33",
        shirina: "193",
        tolshhina: "8мм",
        dizajn: "Дуб Себу",
        kollektsiya: "Matrix",
        kvadrat: "2,128",
        kol: "8",
        ploshhad: "0,2667"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "1382"
        },
        {
          label: "Класс",
          value: "33"
        },
        {
          label: "Ширина",
          value: "193"
        },
        {
          label: "Толщина",
          value: "8мм"
        },
        {
          label: "Дизайн",
          value: "Дуб Себу"
        },
        {
          label: "Коллекция",
          value: "Matrix"
        },
        {
          label: "Квадрат 1-ой упак",
          value: "2,128"
        },
        {
          label: "Кол-во шт в 1-ой упак",
          value: "8"
        },
        {
          label: "Класс прочности",
          value: "33"
        },
        {
          label: "Площадь 1-ой Доски",
          value: "0,2667"
        }
      ]
    },
    {
      id: "laminat-tarkett-estetica-02506-dub-danvil-belyy-zamok-nl",
      articul: "035775",
      title: "Ламинат Tarkett Estetica (0,2506) Дуб Данвиль белый (замок NL)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/9ef0d8ad-116c-11e8-a3d2-c8600046bc56_391c0353-969a-11ea-937d-002590ba8283-303x303.jpeg",
      price: 530,
      inStock: true,
      quickBuy: true,
      filterValues: {
        dizajn: "Дуб Данвиль белый",
        kollektsiya: "ESTETICA",
        strana: "Россия-Германия",
        dlina: "1292",
        shirina: "194",
        tolshhina: "9мм",
        brend: "tarkett",
        klass: "33",
        ploshhad: "0,2506 м²",
        kol: "7 шт",
        kvadrat: "1,7542 м²",
        edinitsaizmereniya: "м",
        "edinicaizmereniya-v-mm": "мм"
      },
      specs: [
        {
          label: "Дизайн",
          value: "Дуб Данвиль белый"
        },
        {
          label: "Коллекция",
          value: "ESTETICA"
        },
        {
          label: "Страна производитель",
          value: "Россия-Германия"
        },
        {
          label: "Длина",
          value: "1292"
        },
        {
          label: "Ширина",
          value: "194"
        },
        {
          label: "Толщина",
          value: "9мм"
        },
        {
          label: "Бренд",
          value: "tarkett"
        },
        {
          label: "Класс прочности",
          value: "33"
        },
        {
          label: "Площадь 1-ой Доски",
          value: "0,2506 м²"
        },
        {
          label: "Кол-во шт в 1-ой упак",
          value: "7 шт"
        },
        {
          label: "Квадрат 1-ой упак",
          value: "1,7542 м²"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "ЕдиницаИзмерения (в метре)",
          value: "м"
        },
        {
          label: "ЕдиницаИзмерения(в мм)",
          value: "мм"
        }
      ]
    },
    {
      id: "laminat-lamineli-kareliya-plyus-02695-dub-no",
      articul: "408062",
      title: "Ламинат Ламинели Карелия Плюс (0,2668) Дуб Норвежский (замок NL) Акция У",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/b616e3e3-aff7-11ec-93c8-002590ba8282_2dcac12f-be27-11ec-93ca-002590ba8282-303x303.jpeg",
      price: 228,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "1382",
        brend: "Ламинели",
        shirina: "195",
        tolshhina: "12мм",
        dizajn: "Дуб Норвежский",
        kollektsiya: "Карелия Плюс",
        "edinicaizmereniya-v-mm": "мм",
        kvadrat: "1,3475 м²",
        kol: "5 шт",
        klass: "33",
        ploshhad: "0,2695 м²"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "1382"
        },
        {
          label: "Бренд",
          value: "Ламинели"
        },
        {
          label: "Ширина",
          value: "195"
        },
        {
          label: "Толщина",
          value: "12мм"
        },
        {
          label: "Дизайн",
          value: "Дуб Норвежский"
        },
        {
          label: "Коллекция",
          value: "Карелия Плюс"
        },
        {
          label: "ЕдиницаИзмерения(в мм)",
          value: "мм"
        },
        {
          label: "Квадрат 1-ой упак",
          value: "1,3475 м²"
        },
        {
          label: "Кол-во шт в 1-ой упак",
          value: "5 шт"
        },
        {
          label: "Класс прочности",
          value: "33"
        },
        {
          label: "Площадь 1-ой Доски",
          value: "0,2695 м²"
        }
      ]
    },
    {
      id: "laminat-woodstyle-magic-wide-02891-belyy-9259-5",
      articul: "036022",
      title: "Ламинат Woodstyle Magic Wide (0,2891) Белый 9259-5",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/43d95afa-9a94-11ea-937e-002590ba8283_d9358dca-8bcf-11eb-93a9-002590ba8282-372x209.jpeg",
      price: 500,
      inStock: true,
      quickBuy: true,
      filterValues: {
        dizajn: "Белый 9259-5",
        kollektsiya: "Magic Wide",
        strana: "Китай",
        dlina: "1215",
        shirina: "238",
        tolshhina: "12мм",
        brend: "Woodstyle",
        klass: "34",
        ploshhad: "0.2891 м²",
        kol: "8 шт",
        kvadrat: "2.3128 м²",
        edinitsaizmereniya: "м",
        "edinicaizmereniya-v-mm": "мм"
      },
      specs: [
        {
          label: "Дизайн",
          value: "Белый 9259-5"
        },
        {
          label: "Коллекция",
          value: "Magic Wide"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Длина",
          value: "1215"
        },
        {
          label: "Ширина",
          value: "238"
        },
        {
          label: "Толщина",
          value: "12мм"
        },
        {
          label: "Бренд",
          value: "Woodstyle"
        },
        {
          label: "Класс прочности",
          value: "34"
        },
        {
          label: "Площадь 1-ой Доски",
          value: "0.2891 м²"
        },
        {
          label: "Кол-во шт в 1-ой упак",
          value: "8 шт"
        },
        {
          label: "Квадрат 1-ой упак",
          value: "2.3128 м²"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "ЕдиницаИзмерения (в метре)",
          value: "м"
        },
        {
          label: "ЕдиницаИзмерения(в мм)",
          value: "мм"
        }
      ]
    },
    {
      id: "laminat-tarkett-pilot-02055-larosh",
      articul: "035935",
      title: "Ламинат Tarkett Пилот (0,2055) Ларош УМ",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/05/e773e79c-8af6-11e6-8dc1-c8600046bc56_4efffc7d-8bcd-11eb-93a9-002590ba8282-303x303.jpeg",
      price: 328,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия-Германия",
        dlina: "1292",
        brend: "tarkett",
        shirina: "159",
        tolshhina: "10мм",
        dizajn: "Ларош",
        kollektsiya: "Пилот",
        edinitsaizmereniya: "м",
        "edinicaizmereniya-v-mm": "мм",
        kvadrat: "1,233 м²",
        kol: "6 шт",
        klass: "33",
        ploshhad: "0,2055 м²"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия-Германия"
        },
        {
          label: "Длина",
          value: "1292"
        },
        {
          label: "Бренд",
          value: "tarkett"
        },
        {
          label: "Ширина",
          value: "159"
        },
        {
          label: "Толщина",
          value: "10мм"
        },
        {
          label: "Дизайн",
          value: "Ларош"
        },
        {
          label: "Коллекция",
          value: "Пилот"
        },
        {
          label: "ЕдиницаИзмерения (в метре)",
          value: "м"
        },
        {
          label: "ЕдиницаИзмерения(в мм)",
          value: "мм"
        },
        {
          label: "Квадрат 1-ой упак",
          value: "1,233 м²"
        },
        {
          label: "Кол-во шт в 1-ой упак",
          value: "6 шт"
        },
        {
          label: "Класс прочности",
          value: "33"
        },
        {
          label: "Площадь 1-ой Доски",
          value: "0,2055 м²"
        }
      ]
    },
    {
      id: "spc-kvarc-vinil-primavera-0-078-salomon-5614",
      articul: "3838",
      title: "SPC кварц винил Primavera (0,078) Саломон 5614",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/03/3-838-296x303.jpeg",
      price: 235,
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
      id: "inzhenernaja-doska-primavera-ae-0-066-dub-mora-rustik",
      articul: "3517",
      title: "Инженерная доска PrimaVera AE (0,066) Дуб Мора Рустик",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 470,
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
      id: "inzhenernaja-doska-primavera-ae-0066-dub-palta-natur",
      articul: "427539",
      title: "Инженерная доска PrimaVera AE (0,066) Дуб Палта Натур",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/07/427539-372x281.jpeg",
      price: 475,
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
      id: "inzhenernaja-doska-ae-006-dub-rustik-vestern",
      articul: "427801",
      title: "Инженерная доска PrimaVera AE (0,066) Дуб Рустик Вестерн Бархатное",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/07/427801-311x303.jpeg",
      price: 7800,
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
      id: "laminat-agt-armonia-large-0339-napoli-302",
      articul: "421072",
      title: "Ламинат AGT Armonia Large (0,339) Наполи 302",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/1dc759c0-5855-11ee-9416-002590ba8282_557fab5b-6833-11ee-9416-002590ba8282-328x303.jpeg",
      price: 510,
      inStock: true,
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
