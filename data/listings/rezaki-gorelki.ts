import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/svarochnoe-oborudovanie/gorelki-gazovye-rezaki-ballony/rezaki-gorelki/ */
export const rezakiGorelkiListing: CatalogListingData = {
  path: "svarochnoe-oborudovanie/gorelki-gazovye-rezaki-ballony/rezaki-gorelki",
  title: "Резаки,горелки",
  totalCountLabel: "34 товара",
  filterFields: [
    {
      id: "diametr",
      title: "Диаметр стакана, мм",
      options: [
        "35",
        "50",
        "70"
      ],
      truncate: false
    },
    {
      id: "rabochij",
      title: "Рабочий газ",
      options: [
        "Пропан",
        "Пропан/бутан"
      ],
      truncate: false
    },
    {
      id: "razmer",
      title: "Размер зубьев",
      options: [
        "470х80х60",
        "870х80х60",
        "880х90х70",
        "890х90х80",
        "960х80х80",
        "970х80х60",
        "1020х80х60",
        "1032х90х90"
      ],
      truncate: true
    },
    {
      id: "soedinenie",
      title: "Соединение для шланга",
      options: [
        "Ниппель 6 мм",
        "Ниппель 6/9 мм"
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
    }
  ],
  products: [
    {
      id: "gorelka-acetilenovaja-krass-g2s-23-2117534",
      articul: "431860",
      title: "Горелка ацетиленовая KRASS Г2С-23 2117534",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/06/431860-303x303.jpeg",
      price: 3450,
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
      id: "gorelka-gazovaja-gi-2-3-2-3kvt-inf-izluchenija",
      articul: "10118",
      title: "Горелка газовая ГИ-2,3 (2,3кВт) инф излучения",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/06/10-118-328x303.jpeg",
      price: 2180,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        rabochij: "Пропан",
        ploshhad: "50",
        teplovaya: "5,8",
        max: "0,227"
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
          label: "Рабочий газ",
          value: "Пропан"
        },
        {
          label: "Площадь обогрева, м2",
          value: "50"
        },
        {
          label: "Тепловая мощность, кВт",
          value: "5,8"
        },
        {
          label: "Max расход сжиж. газа, кг/ч",
          value: "0,227"
        }
      ]
    },
    {
      id: "gorelka-gazovozdushnaya-gv-100-krass-2117539",
      articul: "400970",
      title: "Горелка газовоздушная ГВ-100 KRASS 2117539",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/8ad040ef-a660-11eb-93ab-002590ba8282_48170acc-a685-11eb-93ab-002590ba8282-372x118.jpeg",
      price: 1700,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "KRASS",
        razmer: "470х80х60",
        rabochij: "Пропан",
        davlenie: "0,2-0,4",
        soedinenie: "Ниппель 6 мм",
        diametr: "35"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "KRASS"
        },
        {
          label: "Размер зубьев",
          value: "470х80х60"
        },
        {
          label: "Рабочий газ",
          value: "Пропан"
        },
        {
          label: "Давление пропана (МПа)",
          value: "0,2-0,4"
        },
        {
          label: "Соединение для шланга",
          value: "Ниппель 6 мм"
        },
        {
          label: "Диаметр стакана, мм",
          value: "35"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "gorelka-gazovozdushnaya-gv-100-r-krass-2117538",
      articul: "400971",
      title: "Горелка газовоздушная ГВ-100-Р KRASS 2117538",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/b1c29642-a660-11eb-93ab-002590ba8282_5461410f-a685-11eb-93ab-002590ba8282-372x159.jpeg",
      price: 1890,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "KRASS",
        razmer: "470х80х60",
        rabochij: "Пропан",
        davlenie: "0,2-0,4",
        soedinenie: "Ниппель 6 мм",
        diametr: "35"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "KRASS"
        },
        {
          label: "Размер зубьев",
          value: "470х80х60"
        },
        {
          label: "Рабочий газ",
          value: "Пропан"
        },
        {
          label: "Давление пропана (МПа)",
          value: "0,2-0,4"
        },
        {
          label: "Соединение для шланга",
          value: "Ниппель 6 мм"
        },
        {
          label: "Диаметр стакана, мм",
          value: "35"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "gorelka-gazovozdushnaya-gv-111-krass-2117537",
      articul: "400972",
      title: "Горелка газовоздушная ГВ-111 KRASS 2117537",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/c9b9e2bd-a660-11eb-93ab-002590ba8282_5b2148c7-a685-11eb-93ab-002590ba8282-372x73.jpeg",
      price: 1915,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "KRASS",
        razmer: "970х80х60",
        rabochij: "Пропан",
        davlenie: "0,2-0,4",
        soedinenie: "Ниппель 6 мм",
        diametr: "35"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "KRASS"
        },
        {
          label: "Размер зубьев",
          value: "970х80х60"
        },
        {
          label: "Рабочий газ",
          value: "Пропан"
        },
        {
          label: "Давление пропана (МПа)",
          value: "0,2-0,4"
        },
        {
          label: "Соединение для шланга",
          value: "Ниппель 6 мм"
        },
        {
          label: "Диаметр стакана, мм",
          value: "35"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "gorelka-gazovozdushnaya-gv-111-r-krass-2117536",
      articul: "400973",
      title: "Горелка газовоздушная ГВ-111-Р KRASS 2117536",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/e47e66f3-a660-11eb-93ab-002590ba8282_5b2148c8-a685-11eb-93ab-002590ba8282-372x54.jpeg",
      price: 2300,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "KRASS",
        razmer: "870х80х60",
        rabochij: "Пропан",
        davlenie: "0,2-0,4",
        soedinenie: "Ниппель 6/9 мм",
        diametr: "50"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "KRASS"
        },
        {
          label: "Размер зубьев",
          value: "870х80х60"
        },
        {
          label: "Рабочий газ",
          value: "Пропан"
        },
        {
          label: "Давление пропана (МПа)",
          value: "0,2-0,4"
        },
        {
          label: "Соединение для шланга",
          value: "Ниппель 6/9 мм"
        },
        {
          label: "Диаметр стакана, мм",
          value: "50"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "gorelka-gazovozdushnaya-gv-121-krass-2117541",
      articul: "400974",
      title: "Горелка газовоздушная ГВ-121 KRASS 2117541",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/f911e4b5-a660-11eb-93ab-002590ba8282_66204b76-a685-11eb-93ab-002590ba8282-372x195.jpeg",
      price: 2447,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "KRASS",
        razmer: "960х80х80",
        rabochij: "Пропан",
        davlenie: "0,2-0,4",
        soedinenie: "Ниппель 6/9 мм",
        diametr: "70"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "KRASS"
        },
        {
          label: "Размер зубьев",
          value: "960х80х80"
        },
        {
          label: "Рабочий газ",
          value: "Пропан"
        },
        {
          label: "Давление пропана (МПа)",
          value: "0,2-0,4"
        },
        {
          label: "Соединение для шланга",
          value: "Ниппель 6/9 мм"
        },
        {
          label: "Диаметр стакана, мм",
          value: "70"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "gorelka-gazovozdushnaya-gv-121-r-krass-2117540",
      articul: "400975",
      title: "Горелка газовоздушная ГВ-121-Р KRASS 2117540",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/120f3a64-a661-11eb-93ab-002590ba8282_6c1f401a-a685-11eb-93ab-002590ba8282-372x65.jpeg",
      price: 2990,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "KRASS",
        razmer: "880х90х70",
        rabochij: "Пропан/бутан",
        davlenie: "0,2-0,4",
        soedinenie: "Ниппель 6/9 мм",
        diametr: "70"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "KRASS"
        },
        {
          label: "Размер зубьев",
          value: "880х90х70"
        },
        {
          label: "Рабочий газ",
          value: "Пропан/бутан"
        },
        {
          label: "Давление пропана (МПа)",
          value: "0,2-0,4"
        },
        {
          label: "Соединение для шланга",
          value: "Ниппель 6/9 мм"
        },
        {
          label: "Диаметр стакана, мм",
          value: "70"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "gorelka-gazovozdushnaya-gv-131-krass-2117543",
      articul: "400976",
      title: "Горелка газовоздушная ГВ-131 KRASS 2117543",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/28affb63-a661-11eb-93ab-002590ba8282_6c1f401b-a685-11eb-93ab-002590ba8282.jpeg",
      price: 2750,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "KRASS",
        razmer: "1020х80х60",
        rabochij: "Пропан",
        davlenie: "0,2-0,4",
        soedinenie: "Ниппель 6/9 мм",
        diametr: "50"
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
          value: "KRASS"
        },
        {
          label: "Размер зубьев",
          value: "1020х80х60"
        },
        {
          label: "Рабочий газ",
          value: "Пропан"
        },
        {
          label: "Давление пропана (МПа)",
          value: "0,2-0,4"
        },
        {
          label: "Соединение для шланга",
          value: "Ниппель 6/9 мм"
        },
        {
          label: "Диаметр стакана, мм",
          value: "50"
        }
      ]
    },
    {
      id: "gorelka-gazovozdushnaya-gv-131-r-krass-2117542",
      articul: "400977",
      title: "Горелка газовоздушная ГВ-131-Р KRASS 2117542 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/3fd7b7b0-a661-11eb-93ab-002590ba8282_78671c0a-a685-11eb-93ab-002590ba8282-372x108.jpeg",
      price: 220248,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "KRASS",
        razmer: "1032х90х90",
        rabochij: "Пропан",
        davlenie: "0,2-0,4",
        soedinenie: "Ниппель 6 мм",
        diametr: "50",
        nelikvid: "Да"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "KRASS"
        },
        {
          label: "Размер зубьев",
          value: "1032х90х90"
        },
        {
          label: "Рабочий газ",
          value: "Пропан"
        },
        {
          label: "Давление пропана (МПа)",
          value: "0,2-0,4"
        },
        {
          label: "Соединение для шланга",
          value: "Ниппель 6 мм"
        },
        {
          label: "Диаметр стакана, мм",
          value: "50"
        },
        {
          label: "Неликвид",
          value: "Да"
        }
      ]
    },
    {
      id: "gorelka-gazovozdushnaya-gv-211-krass-s-swivel-sistem",
      articul: "400978",
      title: "Горелка газовоздушная ГВ-211 KRASS с SWIVEL системой 2630544",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/544773e2-a661-11eb-93ab-002590ba8282_7ea6730f-a685-11eb-93ab-002590ba8282-303x303.jpeg",
      price: 2850,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "KRASS",
        razmer: "890х90х80",
        rabochij: "Пропан/бутан",
        davlenie: "0,2-0,4",
        soedinenie: "Ниппель 6/9 мм",
        diametr: "50"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "KRASS"
        },
        {
          label: "Размер зубьев",
          value: "890х90х80"
        },
        {
          label: "Рабочий газ",
          value: "Пропан/бутан"
        },
        {
          label: "Давление пропана (МПа)",
          value: "0,2-0,4"
        },
        {
          label: "Соединение для шланга",
          value: "Ниппель 6/9 мм"
        },
        {
          label: "Диаметр стакана, мм",
          value: "50"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "gorelka-gazovozdushnaya-gv-211-pezo-krass-s-swivel-s",
      articul: "400979",
      title: "Горелка газовоздушная ГВ-211-пьезо KRASS с SWIVEL системой 2630545",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/79e82cfe-a661-11eb-93ab-002590ba8282_7ea67310-a685-11eb-93ab-002590ba8282-372x124.jpeg",
      price: 4030,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "KRASS",
        razmer: "890х90х80",
        rabochij: "Пропан/бутан",
        davlenie: "0,2-0,4",
        soedinenie: "Ниппель 6/9 мм",
        diametr: "50"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "KRASS"
        },
        {
          label: "Размер зубьев",
          value: "890х90х80"
        },
        {
          label: "Рабочий газ",
          value: "Пропан/бутан"
        },
        {
          label: "Давление пропана (МПа)",
          value: "0,2-0,4"
        },
        {
          label: "Соединение для шланга",
          value: "Ниппель 6/9 мм"
        },
        {
          label: "Диаметр стакана, мм",
          value: "50"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    }
  ]
};
