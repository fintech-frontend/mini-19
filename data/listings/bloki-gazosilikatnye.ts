import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/obshhestroitelnye-materialy/kirpich-i-bloki/bloki-gazosilikatnye/ */
export const blokiGazosilikatnyeListing: CatalogListingData = {
  path: "obshhestroitelnye-materialy/kirpich-i-bloki/bloki-gazosilikatnye",
  title: "Блоки газосиликатные",
  totalCountLabel: "19 товаров",
  filterFields: [
    {
      id: "klass",
      title: "Класс морозостойкости",
      options: [
        "В2,5",
        "F100",
        "F150"
      ],
      truncate: false
    },
    {
      id: "kolichestvo",
      title: "Количество на м²",
      options: [
        "6,4",
        "7",
        "17",
        "23"
      ],
      truncate: false
    },
    {
      id: "razmer",
      title: "Размер зубьев",
      options: [
        "600х100х400мм",
        "600х125х400мм",
        "600х250х300 мм",
        "625х100х250мм",
        "625х150х250мм",
        "625х200х250мм"
      ],
      truncate: false
    },
    {
      id: "ves",
      title: "Вес",
      options: [
        "10 кг",
        "11 кг",
        "15 кг",
        "18 кг",
        "21 кг",
        "30 кг"
      ],
      truncate: false
    },
    {
      id: "razmer-cangi",
      title: "Размер цанги",
      options: [
        "600х250х150 мм",
        "600х250х300 мм"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "blok-gazosilikatnyy-d500-600kh100kh400-90-sht",
      articul: "405751",
      title: "Блок газосиликатный D500 600х100х400 (90 шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/a105188a-529d-11ec-93c0-002590ba8282_12c9ac99-6743-11ed-93dc-002590ba8282-372x286.jpeg",
      price: 220,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        klass: "F150",
        ves: "11 кг",
        plotnost: "500 кг/м²",
        razmer: "600х100х400мм",
        kolichestvo: "17"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Класс прочности",
          value: "В2,5"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Вес",
          value: "11 кг"
        },
        {
          label: "Плотность",
          value: "500 кг/м²"
        },
        {
          label: "Размер зубьев",
          value: "600х100х400мм"
        },
        {
          label: "Класс морозостойкости",
          value: "F150"
        },
        {
          label: "Количество на м²",
          value: "17"
        }
      ]
    },
    {
      id: "blok-gazosilikatnyy-d500-600kh125kh400-72sht",
      articul: "407968",
      title: "Блок газосиликатный D500 600х125х400 (72шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/f8e835a6-ac3e-11ec-93c8-002590ba8282_efc31f3b-6743-11ed-93dc-002590ba8282-372x274.jpeg",
      price: 290,
      inStock: false,
      quickBuy: true,
      filterValues: {
        ves: "18 кг",
        plotnost: "500 кг/м²",
        razmer: "600х125х400мм",
        klass: "В2,5",
        kolichestvo: "7",
        strana: "Россия"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Вес",
          value: "18 кг"
        },
        {
          label: "Плотность",
          value: "500 кг/м²"
        },
        {
          label: "Размер зубьев",
          value: "600х125х400мм"
        },
        {
          label: "Класс морозостойкости",
          value: "F150"
        },
        {
          label: "Количество на м²",
          value: "7"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Класс прочности",
          value: "В2,5"
        }
      ]
    },
    {
      id: "blok-gazosilikatnyy-d500-600kh250kh125-96sht",
      articul: "407967",
      title: "Блок газосиликатный D500 600х250х125 (96шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/bc8208f0-ac3e-11ec-93c8-002590ba8282_dab4cde2-6743-11ed-93dc-002590ba8282-372x248.jpeg",
      price: 175,
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
      id: "blok-gazosilikatnyy-d500-600kh250kh150-80-sht",
      articul: "407635",
      title: "Блок газосиликатный D500 600х250х150 (80 шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/2df0d2ae-9bb3-11ec-93c5-002590ba8282_8d1274dd-6743-11ed-93dc-002590ba8282-336x303.jpeg",
      price: 50,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        klass: "F150",
        ves: "15 кг",
        plotnost: "500 кг/м²",
        "razmer-cangi": "600х250х150 мм",
        kolichestvo: "7"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Класс прочности",
          value: "В2,5"
        },
        {
          label: "Вес",
          value: "15 кг"
        },
        {
          label: "Плотность",
          value: "500 кг/м²"
        },
        {
          label: "Размер цанги",
          value: "600х250х150 мм"
        },
        {
          label: "Класс морозостойкости",
          value: "F150"
        },
        {
          label: "Количество на м²",
          value: "7"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "blok-gazosilikatnyy-d500-600kh250kh300-40sht-48-sht",
      articul: "407634",
      title: "Блок газосиликатный D500 600х250х300 (40шт/48 шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/e11a132d-9bb2-11ec-93c5-002590ba8282_64a6c0a9-6743-11ed-93dc-002590ba8282-303x303.jpeg",
      price: 430,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        klass: "F150",
        ves: "30 кг",
        plotnost: "500 кг/м²",
        "razmer-cangi": "600х250х300 мм",
        kolichestvo: "23"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Класс прочности",
          value: "В2,5"
        },
        {
          label: "Вес",
          value: "30 кг"
        },
        {
          label: "Плотность",
          value: "500 кг/м²"
        },
        {
          label: "Размер цанги",
          value: "600х250х300 мм"
        },
        {
          label: "Класс морозостойкости",
          value: "F150"
        },
        {
          label: "Количество на м²",
          value: "23"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "blok-gazosilikatnyy-d500-600kh250kh300-48-sht",
      articul: "405752",
      title: "Блок газосиликатный D500 600х250х300 (48 шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/c70c4fa2-529d-11ec-93c0-002590ba8282_3001383d-6743-11ed-93dc-002590ba8282-372x234.jpeg",
      price: 345,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        klass: "F150",
        ves: "30 кг",
        plotnost: "500 кг/м²",
        razmer: "600х250х300 мм",
        kolichestvo: "23"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Класс прочности",
          value: "В2,5"
        },
        {
          label: "Вес",
          value: "30 кг"
        },
        {
          label: "Плотность",
          value: "500 кг/м²"
        },
        {
          label: "Размер зубьев",
          value: "600х250х300 мм"
        },
        {
          label: "Класс морозостойкости",
          value: "F150"
        },
        {
          label: "Количество на м²",
          value: "23"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "blok-gazosilikatnyy-d500-600kh250kh400-36sht",
      articul: "407966",
      title: "Блок газосиликатный D500 600х250х400 (36шт) УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/1b673b3c-ac3e-11ec-93c8-002590ba8282_c9773a5e-6743-11ed-93dc-002590ba8282-372x279.jpeg",
      price: 50,
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
      id: "blok-gazosilikatnyy-d500-625kh100kh250-120sht",
      articul: "014742",
      title: "Блок газосиликатный D500 625х100х250 (120шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/ce4a5dc3-8dde-11e6-8dc1-c8600046bc56_8bcbba2d-95e0-11ea-937d-002590ba8283-303x303.jpeg",
      price: 175,
      inStock: true,
      quickBuy: true,
      filterValues: {
        ves: "10 кг",
        strana: "Россия",
        plotnost: "500 кг/м²",
        klass: "F100",
        kolichestvo: "6,4",
        razmer: "625х100х250мм"
      },
      specs: [
        {
          label: "Вес",
          value: "10 кг"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Плотность",
          value: "500 кг/м²"
        },
        {
          label: "Класс прочности",
          value: "В3,5"
        },
        {
          label: "Класс морозостойкости",
          value: "F100"
        },
        {
          label: "Количество на м²",
          value: "6,4"
        },
        {
          label: "Размер зубьев",
          value: "625х100х250мм"
        }
      ]
    },
    {
      id: "blok-gazosilikatnyj-d500-625h125h250-96sht",
      articul: "4807",
      title: "Блок газосиликатный D500 625х125х250 (96шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 200,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        plotnost: "500 кг/м²"
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
          label: "Плотность",
          value: "500 кг/м²"
        }
      ]
    },
    {
      id: "blok-gazosilikatnyy-d500-625kh150kh250-80sht",
      articul: "014744",
      title: "Блок газосиликатный D500 625х150х250 (80шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/eb201005-8dde-11e6-8dc1-c8600046bc56_8bcbba2e-95e0-11ea-937d-002590ba8283-303x303.jpeg",
      price: 260,
      inStock: true,
      quickBuy: true,
      filterValues: {
        ves: "15 кг",
        strana: "Россия",
        plotnost: "500 кг/м²",
        klass: "F100",
        kolichestvo: "7",
        razmer: "625х150х250мм"
      },
      specs: [
        {
          label: "Вес",
          value: "15 кг"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Плотность",
          value: "500 кг/м²"
        },
        {
          label: "Класс прочности",
          value: "В3,5"
        },
        {
          label: "Класс морозостойкости",
          value: "F100"
        },
        {
          label: "Количество на м²",
          value: "7"
        },
        {
          label: "Размер зубьев",
          value: "625х150х250мм"
        }
      ]
    },
    {
      id: "blok-gazosilikatnyy-d500-625kh200kh250-56sht",
      articul: "014746",
      title: "Блок газосиликатный D500 625х200х250 (56шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/d58bbc0b-8ddf-11e6-8dc1-c8600046bc56_8bcbba2f-95e0-11ea-937d-002590ba8283-303x303.jpeg",
      price: 310,
      inStock: true,
      quickBuy: true,
      filterValues: {
        ves: "21 кг",
        strana: "Россия",
        plotnost: "500 кг/м²",
        klass: "F100",
        kolichestvo: "7",
        razmer: "625х200х250мм"
      },
      specs: [
        {
          label: "Вес",
          value: "21 кг"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Плотность",
          value: "500 кг/м²"
        },
        {
          label: "Класс прочности",
          value: "В3,5"
        },
        {
          label: "Класс морозостойкости",
          value: "F100"
        },
        {
          label: "Количество на м²",
          value: "7"
        },
        {
          label: "Размер зубьев",
          value: "625х200х250мм"
        }
      ]
    },
    {
      id: "blok-gazosilikatnyj-d500-625h200h250-gsb-64-sht",
      articul: "1227",
      title: "Блок газосиликатный D500 625х200х250 ГСБ (64 шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 330,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        plotnost: "500 кг/м²"
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
          label: "Плотность",
          value: "500 кг/м²"
        }
      ]
    }
  ]
};
