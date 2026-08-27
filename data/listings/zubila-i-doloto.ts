import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/instrument/yelektroinstrument/raskhodnye-materialy-i-osnastka-dlya-yel/zubila-i-doloto/ */
export const zubilaIDolotoListing: CatalogListingData = {
  path: "instrument/yelektroinstrument/raskhodnye-materialy-i-osnastka-dlya-yel/zubila-i-doloto",
  title: "Зубила и долото",
  totalCountLabel: "62 товара",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Калибр",
        "Профи",
        "Derzhi",
        "FIT",
        "Hilti"
      ],
      truncate: false
    },
    {
      id: "strana",
      title: "Страна производитель",
      options: [
        "Германия",
        "Китай",
        "Россия"
      ],
      truncate: false
    },
    {
      id: "tip",
      title: "Тип товара",
      options: [
        "Зубило",
        "Пика"
      ],
      truncate: false
    },
    {
      id: "diametr",
      title: "Диаметр",
      options: [
        "36 мм",
        "50 мм"
      ],
      truncate: false
    },
    {
      id: "dlina",
      title: "Длина",
      options: [
        "50 мм",
        "250 мм",
        "300 мм",
        "400 мм",
        "600 мм"
      ],
      truncate: false
    },
    {
      id: "naznachenie",
      title: "Назначение",
      options: [
        "Демонтаж бетона",
        "Точный демонтаж"
      ],
      truncate: false
    },
    {
      id: "osobennosti",
      title: "Особенности",
      options: [
        "Защита от вибрации",
        "Компактное"
      ],
      truncate: false
    },
    {
      id: "tip-dolota",
      title: "Тип долота",
      options: [
        "Узкое",
        "Широкое"
      ],
      truncate: false
    },
    {
      id: "tip-instrumenta",
      title: "Тип инструмента",
      options: [
        "Зенкер",
        "Зубило"
      ],
      truncate: false
    },
    {
      id: "tolshhina",
      title: "Толщина",
      options: [
        "22 мм",
        "25 мм",
        "30 мм",
        "40 мм"
      ],
      truncate: false
    },
    {
      id: "shirina",
      title: "Ширина",
      options: [
        "16 мм",
        "18 мм"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "bucharda-sds-max-35-35-210-16-zubov-praktika-918-657",
      articul: "12134",
      title: "Бучарда SDS-MAX 35х35х210 16 зубов Практика 918-657",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 1955,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Derzhi",
        tip: "Пика"
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
          value: "Derzhi"
        },
        {
          label: "Тип товара",
          value: "Пика"
        }
      ]
    },
    {
      id: "bucharda-sds-max-45-45-240-16-zubov-praktika-791-660",
      articul: "12133",
      title: "Бучарда SDS-MAX 45*45*240 16 зубов Практика 791-660",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 2070,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Derzhi",
        tip: "Пика"
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
          value: "Derzhi"
        },
        {
          label: "Тип товара",
          value: "Пика"
        }
      ]
    },
    {
      id: "doloto-kalibr-sds-max-18-400-30-mm",
      articul: "126114",
      title: "Долото Калибр SDS-mаx 18/400/30 мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/da3ac3d2-30c6-11e2-a1f1-c8600046bc56_47baccb8-9fee-11ea-937f-002590ba8283-372x209.jpeg",
      price: 350,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Калибр",
        "tip-hvostovika": "SDS-max",
        shirina: "18 мм",
        dlina: "400 мм",
        tolshhina: "30 мм"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Калибр"
        },
        {
          label: "Тип хвостовика",
          value: "SDS-max"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Ширина",
          value: "18 мм"
        },
        {
          label: "Длина",
          value: "400 мм"
        },
        {
          label: "Толщина",
          value: "30 мм"
        }
      ]
    },
    {
      id: "doloto-kalibr-sds-max-18-600-40-mm",
      articul: "126081",
      title: "Долото Калибр SDS-mаx 18/600/40 мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/1d0c24b2-30c7-11e2-a1f1-c8600046bc56_47baccb6-9fee-11ea-937f-002590ba8283-372x209.jpeg",
      price: 560,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Калибр",
        "tip-hvostovika": "SDS-max",
        shirina: "18 мм",
        dlina: "600 мм",
        tolshhina: "40 мм"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Калибр"
        },
        {
          label: "Тип хвостовика",
          value: "SDS-max"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Ширина",
          value: "18 мм"
        },
        {
          label: "Длина",
          value: "600 мм"
        },
        {
          label: "Толщина",
          value: "40 мм"
        }
      ]
    },
    {
      id: "doloto-uzkoe-eprjt-te-sp-fm-50-hilti",
      articul: "009621",
      title: "Долото узкое EPRJT TE SP FM 50 HILTI",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/009621-305x303.jpeg",
      price: 5700,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Германия",
        brend: "Hilti",
        "tip-hvostovika": "SDS-max",
        "tip-dolota": "Узкое",
        diametr: "50 мм",
        naznachenie: "Точный демонтаж"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Германия"
        },
        {
          label: "Бренд",
          value: "Hilti"
        },
        {
          label: "Тип хвостовика",
          value: "SDS-max"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип долота",
          value: "Узкое"
        },
        {
          label: "Диаметр",
          value: "50 мм"
        },
        {
          label: "Назначение",
          value: "Точный демонтаж"
        }
      ]
    },
    {
      id: "doloto-shirokoe-te-yp-spm-5-36-hilti",
      articul: "009620",
      title: "Долото широкое TE-YP SPM 5/36 HILTI",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/009620-303x303.jpeg",
      price: 7600,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Германия",
        brend: "Hilti",
        "tip-hvostovika": "SDS-max",
        "tip-dolota": "Широкое",
        diametr: "36 мм",
        naznachenie: "Демонтаж бетона"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Германия"
        },
        {
          label: "Бренд",
          value: "Hilti"
        },
        {
          label: "Тип хвостовика",
          value: "SDS-max"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип долота",
          value: "Широкое"
        },
        {
          label: "Диаметр",
          value: "36 мм"
        },
        {
          label: "Назначение",
          value: "Демонтаж бетона"
        }
      ]
    },
    {
      id: "zenker-ruchnoy-3-nasadki-121619mm-36440-ucenka",
      articul: "022475",
      title: "Зенкер ручной 3 насадки (12,16,19мм) 36440 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 303,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "FIT",
        "tip-instrumenta": "Зенкер",
        "kolichestvo-nasadok": "3 шт",
        "diametr-nasadok": "12, 16, 19 мм",
        sostoyanie: "Уценка"
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
          label: "Тип инструмента",
          value: "Зенкер"
        },
        {
          label: "Количество насадок",
          value: "3 шт"
        },
        {
          label: "Диаметр насадок",
          value: "12, 16, 19 мм"
        },
        {
          label: "Состояние",
          value: "Уценка"
        }
      ]
    },
    {
      id: "zubilo-10-s-rezin-protekt-2501622mm-46722",
      articul: "023358",
      title: "Зубило 10 с резин протект 250*16*22мм 46722",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/023358-303x303.jpeg",
      price: 333,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        "tip-instrumenta": "Зубило",
        dlina: "250 мм",
        brend: "FIT",
        shirina: "16 мм",
        tolshhina: "22 мм",
        osobennosti: "Защита от вибрации"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип инструмента",
          value: "Зубило"
        },
        {
          label: "Длина",
          value: "250 мм"
        },
        {
          label: "Бренд",
          value: "FIT"
        },
        {
          label: "Ширина",
          value: "16 мм"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Толщина",
          value: "22 мм"
        },
        {
          label: "Особенности",
          value: "Защита от вибрации"
        }
      ]
    },
    {
      id: "zubilo-12-s-rezin-protekt-3001625mm-46723",
      articul: "023359",
      title: "Зубило 12 с резин протект 300*16*25мм 46723",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/023359-372x279.jpeg",
      price: 360,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        "tip-instrumenta": "Зубило",
        brend: "FIT",
        dlina: "300 мм",
        shirina: "16 мм",
        tolshhina: "25 мм",
        osobennosti: "Защита от вибрации"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Тип инструмента",
          value: "Зубило"
        },
        {
          label: "Бренд",
          value: "FIT"
        },
        {
          label: "Длина",
          value: "300 мм"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Ширина",
          value: "16 мм"
        },
        {
          label: "Толщина",
          value: "25 мм"
        },
        {
          label: "Особенности",
          value: "Защита от вибрации"
        }
      ]
    },
    {
      id: "zubilo-300-mm-profi-plast-prot-46783",
      articul: "023360",
      title: "Зубило 300 мм Профи пласт.прот. 46783",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/023360-315x303.jpeg",
      price: 305,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Профи",
        "tip-instrumenta": "Зубило",
        dlina: "300 мм",
        shirina: "16 мм",
        tolshhina: "22 мм"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Профи"
        },
        {
          label: "Тип инструмента",
          value: "Зубило"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Длина",
          value: "300 мм"
        },
        {
          label: "Ширина",
          value: "16 мм"
        },
        {
          label: "Толщина",
          value: "22 мм"
        }
      ]
    },
    {
      id: "zubilo-3001625mm-kvadr-prot-profi-46773",
      articul: "402522",
      title: "Зубило 300*16*25мм квадр прот Профи 46773",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/402522-346x303.jpeg",
      price: 43550,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Профи",
        "tip-instrumenta": "Зубило",
        dlina: "300 мм",
        tip: "Зубило",
        shirina: "16 мм",
        tolshhina: "25 мм"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Профи"
        },
        {
          label: "Тип инструмента",
          value: "Зубило"
        },
        {
          label: "Длина",
          value: "300 мм"
        },
        {
          label: "Тип товара",
          value: "Зубило"
        },
        {
          label: "Ширина",
          value: "16 мм"
        },
        {
          label: "Толщина",
          value: "25 мм"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "zubilo-50mm-46755",
      articul: "023361",
      title: "Зубило 50мм 46755",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/023361-372x279.jpeg",
      price: 477,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        "tip-instrumenta": "Зубило",
        dlina: "50 мм",
        shirina: "16 мм",
        tolshhina: "22 мм",
        osobennosti: "Компактное"
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
          label: "Тип инструмента",
          value: "Зубило"
        },
        {
          label: "Длина",
          value: "50 мм"
        },
        {
          label: "Ширина",
          value: "16 мм"
        },
        {
          label: "Толщина",
          value: "22 мм"
        },
        {
          label: "Особенности",
          value: "Компактное"
        }
      ]
    }
  ]
};
