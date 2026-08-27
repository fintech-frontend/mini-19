import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/otoplenie/polipropilenovye-truby/truby-2/ */
export const truby2Listing: CatalogListingData = {
  path: "otoplenie/polipropilenovye-truby/truby-2",
  title: "Трубы",
  totalCountLabel: "58 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "EKOPLASTIK",
        "Kalde",
        "VALFEX"
      ],
      truncate: false
    },
    {
      id: "davlenie",
      title: "Давление",
      options: [
        "PN 10",
        "PN 25"
      ],
      truncate: false
    },
    {
      id: "diametr",
      title: "Диаметр",
      options: [
        "20 мм",
        "25 мм",
        "32 мм",
        "40 мм",
        "50 мм",
        "63 мм",
        "110 мм"
      ],
      truncate: true
    },
    {
      id: "naznachenie",
      title: "Назначение",
      options: [
        "Для отопления и ГВС",
        "Для систем высокого давления",
        "Для специальных систем"
      ],
      truncate: false
    },
    {
      id: "nominalnoe-davlenie",
      title: "Номинальное давление",
      options: [
        "PN 25",
        "PN 40",
        "PN 50"
      ],
      truncate: false
    },
    {
      id: "primenenie",
      title: "Применение",
      options: [
        "Для отопления и водоснабжения",
        "Промышленные системы"
      ],
      truncate: false
    },
    {
      id: "strana-proizvoditel",
      title: "Страна производитель",
      options: [
        "Россия",
        "Турция",
        "Чехия"
      ],
      truncate: false
    },
    {
      id: "tip-truby",
      title: "Тип трубы",
      options: [
        "Полипропиленовая",
        "Полипропиленовая армированная"
      ],
      truncate: false
    },
    {
      id: "tolshhina-stenki",
      title: "Толщина стенки",
      options: [
        "1.9 мм",
        "2.3 мм",
        "2.8 мм",
        "2.9 мм",
        "3.5 мм",
        "3.7 мм",
        "4.6 мм",
        "5.8 мм",
        "10 мм"
      ],
      truncate: true
    }
  ],
  products: [
    {
      id: "truba-ekoplastik-bazalt-20kh28-chekhiya",
      articul: "071087",
      title: "Труба EKOPLASTIK Bazalt 20х2,8 Чехия УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/26c0e0a5-8d46-11e6-8dc1-c8600046bc56_5435c09a-9e57-11ea-937e-002590ba8283-372x279.jpeg",
      price: 96,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "EKOPLASTIK",
        "strana-proizvoditel": "Чехия",
        "tip-truby": "Полипропиленовая армированная",
        diametr: "20 мм",
        "tolshhina-stenki": "2.8 мм",
        armirovanie: "Базальтовое волокно",
        naznachenie: "Для отопления и ГВС"
      },
      specs: [
        {
          label: "Бренд",
          value: "EKOPLASTIK"
        },
        {
          label: "Страна производитель",
          value: "Чехия"
        },
        {
          label: "Тип трубы",
          value: "Полипропиленовая армированная"
        },
        {
          label: "Диаметр",
          value: "20 мм"
        },
        {
          label: "Толщина стенки",
          value: "2.8 мм"
        },
        {
          label: "Армирование",
          value: "Базальтовое волокно"
        },
        {
          label: "Назначение",
          value: "Для отопления и ГВС"
        }
      ]
    },
    {
      id: "truba-ekoplastik-bazalt-25kh35-chekhiya",
      articul: "071088",
      title: "Труба EKOPLASTIK Bazalt 25х3,5 Чехия",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/c07ab84c-dc4e-11e8-ba62-c8600046bc56_5435c09b-9e57-11ea-937e-002590ba8283-372x279.jpeg",
      price: 150,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "EKOPLASTIK",
        "strana-proizvoditel": "Чехия",
        "tip-truby": "Полипропиленовая армированная",
        diametr: "25 мм",
        "tolshhina-stenki": "3.5 мм",
        armirovanie: "Базальтовое волокно",
        davlenie: "PN 25"
      },
      specs: [
        {
          label: "Бренд",
          value: "EKOPLASTIK"
        },
        {
          label: "Страна производитель",
          value: "Чехия"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип трубы",
          value: "Полипропиленовая армированная"
        },
        {
          label: "Диаметр",
          value: "25 мм"
        },
        {
          label: "Толщина стенки",
          value: "3.5 мм"
        },
        {
          label: "Армирование",
          value: "Базальтовое волокно"
        },
        {
          label: "Давление",
          value: "PN 25"
        }
      ]
    },
    {
      id: "truba-ekoplastik-pn-40-chekhiya",
      articul: "071095",
      title: "Труба EKOPLASTIK PN 40 Чехия УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/87f490dd-6788-11ea-9379-002590ba8283_5435c0a2-9e57-11ea-937e-002590ba8283-372x278.jpeg",
      price: 191,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "EKOPLASTIK",
        "strana-proizvoditel": "Чехия",
        "tip-truby": "Полипропиленовая",
        "nominalnoe-davlenie": "PN 40",
        naznachenie: "Для систем высокого давления",
        primenenie: "Промышленные системы"
      },
      specs: [
        {
          label: "Бренд",
          value: "EKOPLASTIK"
        },
        {
          label: "Страна производитель",
          value: "Чехия"
        },
        {
          label: "Тип трубы",
          value: "Полипропиленовая"
        },
        {
          label: "Номинальное давление",
          value: "PN 40"
        },
        {
          label: "Назначение",
          value: "Для систем высокого давления"
        },
        {
          label: "Применение",
          value: "Промышленные системы"
        }
      ]
    },
    {
      id: "truba-ekoplastik-pn-50-chekhiya",
      articul: "071096",
      title: "Труба EKOPLASTIK PN 50 Чехия УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/9b3f20d3-6788-11ea-9379-002590ba8283_5435c0a3-9e57-11ea-937e-002590ba8283-372x278.jpeg",
      price: 26560,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "EKOPLASTIK",
        "strana-proizvoditel": "Чехия",
        "tip-truby": "Полипропиленовая",
        "nominalnoe-davlenie": "PN 50",
        naznachenie: "Для специальных систем",
        prochnost: "Максимальная"
      },
      specs: [
        {
          label: "Бренд",
          value: "EKOPLASTIK"
        },
        {
          label: "Страна производитель",
          value: "Чехия"
        },
        {
          label: "Тип трубы",
          value: "Полипропиленовая"
        },
        {
          label: "Номинальное давление",
          value: "PN 50"
        },
        {
          label: "Назначение",
          value: "Для специальных систем"
        },
        {
          label: "Прочность",
          value: "Максимальная"
        }
      ]
    },
    {
      id: "truba-kalde-q50-pn-25-supper-pipe-u",
      articul: "071106",
      title: "Труба Kalde Q50 PN 25 Supper Pipe УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/75a861c0-fc48-11e3-8414-c8600046bc53_5435c0a5-9e57-11ea-937e-002590ba8283-372x266.jpeg",
      price: 25277,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Kalde",
        "strana-proizvoditel": "Турция",
        "tip-truby": "Полипропиленовая",
        "nominalnoe-davlenie": "PN 25",
        seriya: "Supper Pipe",
        primenenie: "Для отопления и водоснабжения"
      },
      specs: [
        {
          label: "Бренд",
          value: "Kalde"
        },
        {
          label: "Страна производитель",
          value: "Турция"
        },
        {
          label: "Тип трубы",
          value: "Полипропиленовая"
        },
        {
          label: "Номинальное давление",
          value: "PN 25"
        },
        {
          label: "Серия",
          value: "Supper Pipe"
        },
        {
          label: "Применение",
          value: "Для отопления и водоснабжения"
        }
      ]
    },
    {
      id: "truba-pn-10-sdr11-d-110kh10-4-valfex-101030110",
      articul: "203050",
      title: "Труба PN 10 SDR11 d.110х10 (4) VALFEX 101030110 Уценка",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/0a7915e1-35f4-11eb-9397-002590ba8282_c74305d4-9ab1-11eb-93aa-002590ba8282-350x303.jpeg",
      price: 760,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "VALFEX",
        "strana-proizvoditel": "Россия",
        "tip-truby": "Полипропиленовая",
        diametr: "110 мм",
        "tolshhina-stenki": "10 мм",
        davlenie: "PN 10",
        standart: "SDR11"
      },
      specs: [
        {
          label: "Бренд",
          value: "VALFEX"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип трубы",
          value: "Полипропиленовая"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Диаметр",
          value: "110 мм"
        },
        {
          label: "Толщина стенки",
          value: "10 мм"
        },
        {
          label: "Давление",
          value: "PN 10"
        },
        {
          label: "Стандарт",
          value: "SDR11"
        }
      ]
    },
    {
      id: "truba-pn-10-sdr11-d-20kh19-140-valfex",
      articul: "071110",
      title: "Труба PN 10 SDR11 d.20х1,9 (140) VALFEX Уценка",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/e306b35c-8d66-11e7-bdc2-c8600046bc56_5435c0a6-9e57-11ea-937e-002590ba8283-350x303.jpeg",
      price: 31,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "VALFEX",
        "strana-proizvoditel": "Россия",
        "tip-truby": "Полипропиленовая",
        diametr: "20 мм",
        "tolshhina-stenki": "1.9 мм",
        davlenie: "PN 10",
        standart: "SDR11"
      },
      specs: [
        {
          label: "Бренд",
          value: "VALFEX"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип трубы",
          value: "Полипропиленовая"
        },
        {
          label: "Диаметр",
          value: "20 мм"
        },
        {
          label: "Толщина стенки",
          value: "1.9 мм"
        },
        {
          label: "Давление",
          value: "PN 10"
        },
        {
          label: "Стандарт",
          value: "SDR11"
        }
      ]
    },
    {
      id: "truba-pn-10-sdr11-d-25kh23-100-valfex-10103025",
      articul: "071111",
      title: "Труба PN 10 SDR11 d.25х2,3 (100) VALFEX 10103025 Уценка",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/f883bf75-8d66-11e7-bdc2-c8600046bc56_5435c0a7-9e57-11ea-937e-002590ba8283-350x303.jpeg",
      price: 45,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "VALFEX",
        "strana-proizvoditel": "Россия",
        "tip-truby": "Полипропиленовая",
        diametr: "25 мм",
        "tolshhina-stenki": "2.3 мм",
        davlenie: "PN 10",
        standart: "SDR11"
      },
      specs: [
        {
          label: "Бренд",
          value: "VALFEX"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип трубы",
          value: "Полипропиленовая"
        },
        {
          label: "Диаметр",
          value: "25 мм"
        },
        {
          label: "Толщина стенки",
          value: "2.3 мм"
        },
        {
          label: "Давление",
          value: "PN 10"
        },
        {
          label: "Стандарт",
          value: "SDR11"
        }
      ]
    },
    {
      id: "truba-pn-10-sdr11-d-32kh29-60-valfex-10103032",
      articul: "071112",
      title: "Труба PN 10 SDR11 d.32х2,9 (60) VALFEX 10103032 Уценка",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/3f9e7a45-8d67-11e7-bdc2-c8600046bc56_5435c0a8-9e57-11ea-937e-002590ba8283-350x303.jpeg",
      price: 77,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "VALFEX",
        "strana-proizvoditel": "Россия",
        "tip-truby": "Полипропиленовая",
        diametr: "32 мм",
        "tolshhina-stenki": "2.9 мм",
        davlenie: "PN 10",
        standart: "SDR11"
      },
      specs: [
        {
          label: "Бренд",
          value: "VALFEX"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип трубы",
          value: "Полипропиленовая"
        },
        {
          label: "Диаметр",
          value: "32 мм"
        },
        {
          label: "Толщина стенки",
          value: "2.9 мм"
        },
        {
          label: "Давление",
          value: "PN 10"
        },
        {
          label: "Стандарт",
          value: "SDR11"
        }
      ]
    },
    {
      id: "truba-pn-10-sdr11-d-40kh37-40-valfex-10103040",
      articul: "071113",
      title: "Труба PN 10 SDR11 d.40х3,7 (40) VALFEX 10103040 Уценка",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/553cd9a1-8d67-11e7-bdc2-c8600046bc56_5435c0a9-9e57-11ea-937e-002590ba8283-350x303.jpeg",
      price: 111,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "VALFEX",
        "strana-proizvoditel": "Россия",
        "tip-truby": "Полипропиленовая",
        diametr: "40 мм",
        "tolshhina-stenki": "3.7 мм",
        davlenie: "PN 10",
        standart: "SDR11"
      },
      specs: [
        {
          label: "Бренд",
          value: "VALFEX"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип трубы",
          value: "Полипропиленовая"
        },
        {
          label: "Диаметр",
          value: "40 мм"
        },
        {
          label: "Толщина стенки",
          value: "3.7 мм"
        },
        {
          label: "Давление",
          value: "PN 10"
        },
        {
          label: "Стандарт",
          value: "SDR11"
        }
      ]
    },
    {
      id: "truba-pn-10-sdr11-d-50kh46-24-valfex",
      articul: "071114",
      title: "Труба PN 10 SDR11 d.50х4,6 (24) VALFEX Уценка",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/a677ceff-8d67-11e7-bdc2-c8600046bc56_5435c0aa-9e57-11ea-937e-002590ba8283-350x303.jpeg",
      price: 120,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "VALFEX",
        "strana-proizvoditel": "Россия",
        "tip-truby": "Полипропиленовая",
        diametr: "50 мм",
        "tolshhina-stenki": "4.6 мм",
        davlenie: "PN 10",
        standart: "SDR11"
      },
      specs: [
        {
          label: "Бренд",
          value: "VALFEX"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип трубы",
          value: "Полипропиленовая"
        },
        {
          label: "Диаметр",
          value: "50 мм"
        },
        {
          label: "Толщина стенки",
          value: "4.6 мм"
        },
        {
          label: "Давление",
          value: "PN 10"
        },
        {
          label: "Стандарт",
          value: "SDR11"
        }
      ]
    },
    {
      id: "truba-pn-10-sdr11-d-63kh58-20-valfex",
      articul: "071115",
      title: "Труба PN 10 SDR11 d.63х5,8 (20) VALFEX",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/c4c31237-8d67-11e7-bdc2-c8600046bc56_5435c0ab-9e57-11ea-937e-002590ba8283-350x303.jpeg",
      price: 354,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "VALFEX",
        "strana-proizvoditel": "Россия",
        "tip-truby": "Полипропиленовая",
        diametr: "63 мм",
        "tolshhina-stenki": "5.8 мм",
        davlenie: "PN 10",
        standart: "SDR11"
      },
      specs: [
        {
          label: "Бренд",
          value: "VALFEX"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип трубы",
          value: "Полипропиленовая"
        },
        {
          label: "Диаметр",
          value: "63 мм"
        },
        {
          label: "Толщина стенки",
          value: "5.8 мм"
        },
        {
          label: "Давление",
          value: "PN 10"
        },
        {
          label: "Стандарт",
          value: "SDR11"
        }
      ]
    }
  ]
};
