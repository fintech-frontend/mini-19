import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/instrument/yelektroinstrument/raskhodnye-materialy-i-osnastka-dlya-yel/korshhetki-i-sharoshki/korshhetki/ */
export const korshhetkiListing: CatalogListingData = {
  path: "instrument/yelektroinstrument/raskhodnye-materialy-i-osnastka-dlya-yel/korshhetki-i-sharoshki/korshhetki",
  title: "Корщетки",
  totalCountLabel: "55 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Derzhi",
        "FIT",
        "STAYER"
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
      id: "diametr",
      title: "Диаметр",
      options: [
        "20/25 мм",
        "63 мм",
        "100 мм",
        "125 мм",
        "150 мм",
        "175 мм"
      ],
      truncate: false
    },
    {
      id: "material-shhetiny",
      title: "Материал щетины",
      options: [
        "Нейлон",
        "Сталь"
      ],
      truncate: false
    },
    {
      id: "naznachenie",
      title: "Назначение",
      options: [
        "Для дрели",
        "Зачистка, удаление ржавчины",
        "Зачистка, шлифовка"
      ],
      truncate: false
    },
    {
      id: "posadka",
      title: "Посадка",
      options: [
        "22 мм",
        "М14"
      ],
      truncate: false
    },
    {
      id: "tip-shhetiny",
      title: "Тип щетины",
      options: [
        "Волнистая",
        "Волнистая с наклоном"
      ],
      truncate: false
    },
    {
      id: "tip-shhetki",
      title: "Тип щетки",
      options: [
        "Венчиковая",
        "Дисковая",
        "Колесная",
        "Коническая",
        "Чашечная",
        "Чашечная витая"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "korshhetka-neylon-chashka-100-mm-r80-38662",
      articul: "400318",
      title: "Корщетка нейлон “Чашка” 100 мм Р80 38662 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/400318-372x276.jpeg",
      price: 747,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        "tip-instrumenta": "Корщетка",
        "tip-shhetki": "Чашечная",
        diametr: "100 мм",
        "material-shhetiny": "Нейлон",
        zernistost: "Р80"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип инструмента",
          value: "Корщетка"
        },
        {
          label: "Тип щетки",
          value: "Чашечная"
        },
        {
          label: "Диаметр",
          value: "100 мм"
        },
        {
          label: "Материал щетины",
          value: "Нейлон"
        },
        {
          label: "Зернистость",
          value: "Р80"
        }
      ]
    },
    {
      id: "korshhetka-koleso-100-mm-volnistaya-s-naklo",
      articul: "400327",
      title: "Корщетка “Колесо” 100 мм, волнистая, с наклоном, гайка М14 39050",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/07/400327-372x295.jpeg",
      price: 365,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "FIT",
        "tip-instrumenta": "Корщетка",
        "tip-shhetki": "Колесная",
        tip: "Корщетка",
        diametr: "100 мм",
        "tip-shhetiny": "Волнистая с наклоном",
        posadka: "М14"
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
          value: "Корщетка"
        },
        {
          label: "Тип щетки",
          value: "Колесная"
        },
        {
          label: "Тип товара",
          value: "Корщетка"
        },
        {
          label: "Диаметр",
          value: "100 мм"
        },
        {
          label: "Тип щетины",
          value: "Волнистая с наклоном"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Посадка",
          value: "М14"
        }
      ]
    },
    {
      id: "korshhetka-koleso-125-mm-volnistaya-s-naklo",
      articul: "400328",
      title: "Корщетка “Колесо” 125 мм, волнистая, с наклоном, гайка М14 39052",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/07/400328-372x300.jpeg",
      price: 420,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "FIT",
        "tip-instrumenta": "Корщетка",
        "tip-shhetki": "Колесная",
        tip: "Корщетка",
        diametr: "125 мм",
        "tip-shhetiny": "Волнистая с наклоном",
        posadka: "М14"
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
          value: "Корщетка"
        },
        {
          label: "Тип щетки",
          value: "Колесная"
        },
        {
          label: "Тип товара",
          value: "Корщетка"
        },
        {
          label: "Диаметр",
          value: "125 мм"
        },
        {
          label: "Тип щетины",
          value: "Волнистая с наклоном"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Посадка",
          value: "М14"
        }
      ]
    },
    {
      id: "korshhetka-derzhi-koleso-d-150mm-874664",
      articul: "426260",
      title: "Корщетка DERZHI колесо д 150мм 874664",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/07/426260-297x303.jpeg",
      price: 380,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Derzhi",
        strana: "Россия",
        "tip-instrumenta": "Корщетка",
        "tip-shhetki": "Колесная",
        diametr: "150 мм",
        naznachenie: "Зачистка, шлифовка"
      },
      specs: [
        {
          label: "Бренд",
          value: "Derzhi"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип инструмента",
          value: "Корщетка"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип щетки",
          value: "Колесная"
        },
        {
          label: "Диаметр",
          value: "150 мм"
        },
        {
          label: "Назначение",
          value: "Зачистка, шлифовка"
        }
      ]
    },
    {
      id: "korshhetka-derzhi-chash-vit-d-125-mm-m14-874627",
      articul: "005022",
      title: "Корщетка DERZHI чаш вит. д.125 мм М14 874627",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/005022-337x303.jpeg",
      price: 865,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Derzhi",
        strana: "Китай",
        "tip-instrumenta": "Корщетка",
        "tip-shhetki": "Чашечная витая",
        diametr: "125 мм",
        tip: "Корщетка",
        posadka: "М14",
        naznachenie: "Зачистка, удаление ржавчины"
      },
      specs: [
        {
          label: "Бренд",
          value: "Derzhi"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Тип инструмента",
          value: "Корщетка"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип щетки",
          value: "Чашечная витая"
        },
        {
          label: "Диаметр",
          value: "125 мм"
        },
        {
          label: "Тип товара",
          value: "Корщетка"
        },
        {
          label: "Посадка",
          value: "М14"
        },
        {
          label: "Назначение",
          value: "Зачистка, удаление ржавчины"
        }
      ]
    },
    {
      id: "korshhetka-derzhi-chash-d-150-mm-m14-874607",
      articul: "005023",
      title: "Корщетка DERZHI чаш д.150 мм М14 874607",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/005023-303x303.jpeg",
      price: 1035,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Derzhi",
        strana: "Китай",
        "tip-instrumenta": "Корщетка",
        "tip-shhetki": "Чашечная",
        diametr: "150 мм",
        tip: "Корщетка",
        posadka: "М14",
        naznachenie: "Зачистка, удаление ржавчины"
      },
      specs: [
        {
          label: "Бренд",
          value: "Derzhi"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Тип инструмента",
          value: "Корщетка"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип щетки",
          value: "Чашечная"
        },
        {
          label: "Диаметр",
          value: "150 мм"
        },
        {
          label: "Тип товара",
          value: "Корщетка"
        },
        {
          label: "Посадка",
          value: "М14"
        },
        {
          label: "Назначение",
          value: "Зачистка, удаление ржавчины"
        }
      ]
    },
    {
      id: "korshhyotka-stayer-disk-d-ushm-splet-v-puch-stal-150m",
      articul: "080051",
      title: "Корщётка STAYER диск.д/УШМ сплет в пуч стал 150мм/22 35190-150 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/1c328c06-30c5-11e2-a1f1-c8600046bc56_fa9dc8fa-a029-11ea-9380-002590ba8283-303x303.jpeg",
      price: 1042,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "STAYER",
        strana: "Россия",
        "tip-instrumenta": "Корщетка",
        "tip-shhetki": "Дисковая",
        diametr: "150 мм",
        "material-shhetiny": "Сталь",
        posadka: "22 мм"
      },
      specs: [
        {
          label: "Бренд",
          value: "STAYER"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип инструмента",
          value: "Корщетка"
        },
        {
          label: "Тип щетки",
          value: "Дисковая"
        },
        {
          label: "Диаметр",
          value: "150 мм"
        },
        {
          label: "Материал щетины",
          value: "Сталь"
        },
        {
          label: "Посадка",
          value: "22 мм"
        }
      ]
    },
    {
      id: "korshhyotka-stayer-disk-d-ushm-splet-v-puch-stal-z",
      articul: "080053",
      title: "Корщётка STAYER диск.д/УШМ сплет в пуч стал зак пров 0,5 мм 175мм/М14 351",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/1c328c0c-30c5-11e2-a1f1-c8600046bc56_fa9dc8fc-a029-11ea-9380-002590ba8283-372x296.jpeg",
      price: 256,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "STAYER",
        strana: "Китай",
        "tip-instrumenta": "Корщетка",
        "tip-shhetki": "Дисковая",
        diametr: "175 мм",
        "material-shhetiny": "Сталь",
        "tolshhina-provoloki": "0.5 мм"
      },
      specs: [
        {
          label: "Бренд",
          value: "STAYER"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Тип инструмента",
          value: "Корщетка"
        },
        {
          label: "Тип щетки",
          value: "Дисковая"
        },
        {
          label: "Диаметр",
          value: "175 мм"
        },
        {
          label: "Материал щетины",
          value: "Сталь"
        },
        {
          label: "Толщина проволоки",
          value: "0.5 мм"
        }
      ]
    },
    {
      id: "korshhyotka-stayer-konich-d-ushm-splet-stal-zak-p",
      articul: "080055",
      title: "Корщётка STAYER конич .д/УШМ сплет стал зак пров 0,5 мм 125мм/М14",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/22b26cfc-30c5-11e2-a1f1-c8600046bc56_fa9dc8fe-a029-11ea-9380-002590ba8283-372x279.jpeg",
      price: 430,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "STAYER",
        strana: "Китай",
        "tip-instrumenta": "Корщетка",
        "tip-shhetki": "Коническая",
        diametr: "125 мм",
        "material-shhetiny": "Сталь",
        "tolshhina-provoloki": "0.5 мм"
      },
      specs: [
        {
          label: "Бренд",
          value: "STAYER"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Тип инструмента",
          value: "Корщетка"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип щетки",
          value: "Коническая"
        },
        {
          label: "Диаметр",
          value: "125 мм"
        },
        {
          label: "Материал щетины",
          value: "Сталь"
        },
        {
          label: "Толщина проволоки",
          value: "0.5 мм"
        }
      ]
    },
    {
      id: "korshhetka-venchik-20-25mm-38525",
      articul: "032869",
      title: "Корщетка венчик 20/25мм 38525",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/b28f5988-3a0b-11e2-bc11-c8600046bc56_f460ca6f-a029-11ea-9380-002590ba8283-303x303.jpeg",
      price: 65,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        tip: "Корщетка",
        "tip-instrumenta": "Корщетка",
        "tip-shhetki": "Венчиковая",
        diametr: "20/25 мм",
        brend: "FIT",
        naznachenie: "Для дрели"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип товара",
          value: "Корщетка"
        },
        {
          label: "Тип инструмента",
          value: "Корщетка"
        },
        {
          label: "Тип щетки",
          value: "Венчиковая"
        },
        {
          label: "Диаметр",
          value: "20/25 мм"
        },
        {
          label: "Бренд",
          value: "FIT"
        },
        {
          label: "Назначение",
          value: "Для дрели"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "korshhetka-d-dreli-volnistaya-koleso-63mm-3850",
      articul: "409038",
      title: "Корщетка д/дрели волнистая “Колесо” 63мм 38502",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/409038-372x279.jpeg",
      price: 92,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        "tip-instrumenta": "Корщетка",
        material: "Стальная проволока",
        "tip-shhetki": "Колесная",
        diametr: "63 мм",
        "tip-shhetiny": "Волнистая",
        naznachenie: "Для дрели"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Тип инструмента",
          value: "Корщетка"
        },
        {
          label: "Материал основы",
          value: "Стальная проволока"
        },
        {
          label: "Тип щетки",
          value: "Колесная"
        },
        {
          label: "Диаметр",
          value: "63 мм"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип щетины",
          value: "Волнистая"
        },
        {
          label: "Назначение",
          value: "Для дрели"
        }
      ]
    },
    {
      id: "korshhetka-d-dreli-volnistaya-koleso-100-mm-3851",
      articul: "400648",
      title: "Корщетка д/дрели волнистая Колесо 100 мм 38510",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/07/400648-336x303.jpeg",
      price: 164,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "FIT",
        "tip-instrumenta": "Корщетка",
        "tip-shhetki": "Колесная",
        tip: "Корщетка",
        diametr: "100 мм",
        "tip-shhetiny": "Волнистая",
        naznachenie: "Для дрели"
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
          value: "Корщетка"
        },
        {
          label: "Тип щетки",
          value: "Колесная"
        },
        {
          label: "Тип товара",
          value: "Корщетка"
        },
        {
          label: "Диаметр",
          value: "100 мм"
        },
        {
          label: "Тип щетины",
          value: "Волнистая"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Назначение",
          value: "Для дрели"
        }
      ]
    }
  ]
};
