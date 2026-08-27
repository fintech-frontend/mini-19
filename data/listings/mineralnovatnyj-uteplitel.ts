import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/utepliteli-i-shumoizoljacija/mineralnovatnyj-uteplitel/ */
export const mineralnovatnyjUteplitelListing: CatalogListingData = {
  path: "utepliteli-i-shumoizoljacija/mineralnovatnyj-uteplitel",
  title: "Минеральноватный утеплитель",
  totalCountLabel: "20 товаров",
  filterFields: [
    {
      id: "gruppa",
      title: "Группа горючести",
      options: [
        "Г1",
        "НГ"
      ],
      truncate: false
    },
    {
      id: "plotnost",
      title: "Плотность",
      options: [
        "6.7кг/м3",
        "8.5кг/м3",
        "9кг/м3",
        "10кг/м3",
        "11кг/м3",
        "15кг/м3",
        "18кг/м3"
      ],
      truncate: true
    },
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Тисма",
        "Knauf",
        "Ursa"
      ],
      truncate: false
    },
    {
      id: "ves",
      title: "Вес",
      options: [
        "6.8",
        "9",
        "13.2",
        "25"
      ],
      truncate: false
    },
    {
      id: "dlina",
      title: "Длина",
      options: [
        "1230мм",
        "1250мм",
        "1300мм",
        "5500мм",
        "6560мм",
        "8300мм",
        "10000мм"
      ],
      truncate: true
    },
    {
      id: "kvadrat-1-oj-upak",
      title: "Квадрат 1-ой упак",
      options: [
        "6.2м2",
        "6.7м2",
        "7.62м2",
        "12.5м2",
        "12м2",
        "16м2",
        "20м2",
        "24.4м2"
      ],
      truncate: true
    },
    {
      id: "koefficent-teploprovodnosti",
      title: "Коэффицент теплопроводности",
      options: [
        "0.038Вт/м С",
        "0.044Вт/м С"
      ],
      truncate: false
    },
    {
      id: "tolshhina",
      title: "Толщина",
      options: [
        "50мм",
        "100мм",
        "150мм"
      ],
      truncate: false
    },
    {
      id: "shirina",
      title: "Ширина",
      options: [
        "600мм",
        "610 мм",
        "1220мм",
        "1250мм"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "uteplitel-knauf-greenterm-tr041-17-m2-50-1220-6970-mm-2-rul-up-17-m2-up-0-85-m3-11kg-m3",
      articul: "129730",
      title: "Утеплитель KNAUF GreenTERM TR041 17 м2 50*1220*6970 мм (2 рул/уп,17 м2/уп,0,85 м3/11кг/м3)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 3260,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        shirina: "1250мм",
        gruppa: "НГ",
        plotnost: "18кг/м3",
        mesto: "Внутренний/ наружный"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Ширина",
          value: "1250мм"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Группа горючести",
          value: "НГ"
        },
        {
          label: "Плотность",
          value: "18кг/м3"
        },
        {
          label: "Место использования",
          value: "Внутренний/ наружный"
        }
      ]
    },
    {
      id: "uteplitel-knauf-dlja-kottedzha-1230h610h50-mm-12-m2-up-0-6-m3-25kg-m3-16-sht",
      articul: "404248",
      title: "Утеплитель KNAUF для Коттеджа 1230х610х50 мм (12 м2/уп, 0,6 м3/25кг/м3) (16 шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 180,
      inStock: false,
      quickBuy: true,
      filterValues: {
        ves: "25",
        strana: "Россия",
        dlina: "1230мм",
        brend: "Knauf",
        "tip-tovara": "Утеплитель",
        shirina: "610 мм",
        tolshhina: "50мм",
        plotnost: "18кг/м3",
        gruppa: "НГ",
        "kvadrat-1-oj-upak": "12м2",
        mesto: "Внутренний/ наружный"
      },
      specs: [
        {
          label: "Вес",
          value: "25"
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
          label: "Длина",
          value: "1230мм"
        },
        {
          label: "Бренд",
          value: "Knauf"
        },
        {
          label: "Тип товара",
          value: "Утеплитель"
        },
        {
          label: "Ширина",
          value: "610 мм"
        },
        {
          label: "Толщина",
          value: "50мм"
        },
        {
          label: "Плотность",
          value: "18кг/м3"
        },
        {
          label: "Группа горючести",
          value: "НГ"
        },
        {
          label: "Квадрат 1-ой упак",
          value: "12м2"
        },
        {
          label: "Место использования",
          value: "Внутренний/ наружный"
        }
      ]
    },
    {
      id: "uteplitel-ursa-terra-shumozashhita-50h610h1250-0-381-m3-7-62-m2-up-10sht",
      articul: "401070",
      title: "Утеплитель URSA TERRA (Шумозащита) 50х610х1250 (0,381 м3-7,62 м2) уп (10шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 105,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "1250мм",
        shirina: "610 мм",
        tolshhina: "50мм",
        brend: "Ursa",
        "kvadrat-1-oj-upak": "7.62м2",
        "tip-tovara": "Утеплитель",
        gruppa: "НГ",
        mesto: "Внутренний/ наружный"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "1250мм"
        },
        {
          label: "Ширина",
          value: "610 мм"
        },
        {
          label: "Толщина",
          value: "50мм"
        },
        {
          label: "Бренд",
          value: "Ursa"
        },
        {
          label: "Квадрат 1-ой упак",
          value: "7.62м2"
        },
        {
          label: "Тип товара",
          value: "Утеплитель"
        },
        {
          label: "Группа горючести",
          value: "НГ"
        },
        {
          label: "Место использования",
          value: "Внутренний/ наружный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "uteplitel-ursa-m-11-50-15-kv-m-folga",
      articul: "076232",
      title: "Утеплитель URSA М 11-50 (15 кв.м) фольга",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 4700,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        gruppa: "Г1",
        plotnost: "9кг/м3",
        mesto: "Внутренний/ наружный"
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
          label: "Группа горючести",
          value: "Г1"
        },
        {
          label: "Плотность",
          value: "9кг/м3"
        },
        {
          label: "Место использования",
          value: "Внутренний/ наружный"
        }
      ]
    },
    {
      id: "uteplitel-ursa-m11-1800-1200-50-21-6-kv-m-folga",
      articul: "114276",
      title: "Утеплитель URSA М11-1800-1200-50 (21,6 кв.м.) фольга",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 3500,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        gruppa: "НГ",
        plotnost: "11кг/м3",
        mesto: "Внутренний/ наружный"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Группа горючести",
          value: "НГ"
        },
        {
          label: "Плотность",
          value: "11кг/м3"
        },
        {
          label: "Место использования",
          value: "Внутренний/ наружный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "uteplitel-ursa-teplostandart-2h10000h1220h50-24-4-m2-1-22-m3",
      articul: "413993",
      title: "Утеплитель URSA ТеплоСтандарт 2х10000х1220х50 (24.4 м2/1,22 м3)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 2700,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "10000мм",
        shirina: "1220мм",
        tolshhina: "50мм",
        brend: "Ursa",
        "kvadrat-1-oj-upak": "24.4м2",
        ves: "13.2",
        "tip-tovara": "Утеплитель",
        gruppa: "НГ",
        plotnost: "11кг/м3",
        mesto: "Внутренний/ наружный"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "10000мм"
        },
        {
          label: "Ширина",
          value: "1220мм"
        },
        {
          label: "Толщина",
          value: "50мм"
        },
        {
          label: "Бренд",
          value: "Ursa"
        },
        {
          label: "Квадрат 1-ой упак",
          value: "24.4м2"
        },
        {
          label: "Вес",
          value: "13.2"
        },
        {
          label: "Тип товара",
          value: "Утеплитель"
        },
        {
          label: "Группа горючести",
          value: "НГ"
        },
        {
          label: "Плотность",
          value: "11кг/м3"
        },
        {
          label: "Место использования",
          value: "Внутренний/ наружный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "uteplitel-ursa-teplostandart-2h6560h1220h50-16-m2-0-8-m3",
      articul: "402700",
      title: "Утеплитель URSA ТеплоСтандарт 2х6560х1220х50 (16 м2/0,8 м3)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 2380,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "6560мм",
        shirina: "1220мм",
        tolshhina: "50мм",
        brend: "Ursa",
        "kvadrat-1-oj-upak": "16м2",
        "tip-tovara": "Утеплитель",
        gruppa: "НГ",
        plotnost: "8.5кг/м3",
        "koefficent-teploprovodnosti": "0.044Вт/м С",
        mesto: "Внутренний/ наружный"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "6560мм"
        },
        {
          label: "Ширина",
          value: "1220мм"
        },
        {
          label: "Толщина",
          value: "50мм"
        },
        {
          label: "Бренд",
          value: "Ursa"
        },
        {
          label: "Квадрат 1-ой упак",
          value: "16м2"
        },
        {
          label: "Тип товара",
          value: "Утеплитель"
        },
        {
          label: "Группа горючести",
          value: "НГ"
        },
        {
          label: "Плотность",
          value: "8.5кг/м3"
        },
        {
          label: "Коэффицент теплопроводности",
          value: "0.044Вт/м С"
        },
        {
          label: "Место использования",
          value: "Внутренний/ наружный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "uteplitel-teploknauf-dlja-krovli-1220h5500h150mm-6-7-m2-1-007-m3",
      articul: "406110",
      title: "Утеплитель ТеплоKNAUF для кровли 1220х5500х150мм (6,7 м2/1,007 м3)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 4700,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "5500мм",
        shirina: "1220мм",
        tolshhina: "150мм",
        brend: "Knauf",
        "kvadrat-1-oj-upak": "6.7м2",
        "tip-tovara": "Утеплитель",
        gruppa: "НГ",
        plotnost: "6.7кг/м3",
        mesto: "Внутренний/ наружный"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "5500мм"
        },
        {
          label: "Ширина",
          value: "1220мм"
        },
        {
          label: "Толщина",
          value: "150мм"
        },
        {
          label: "Бренд",
          value: "Knauf"
        },
        {
          label: "Квадрат 1-ой упак",
          value: "6.7м2"
        },
        {
          label: "Тип товара",
          value: "Утеплитель"
        },
        {
          label: "Группа горючести",
          value: "НГ"
        },
        {
          label: "Плотность",
          value: "6.7кг/м3"
        },
        {
          label: "Место использования",
          value: "Внутренний/ наружный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "uteplitel-teploknauf-dlja-krovli-2h1220h6148h50mm-15-m2",
      articul: "076284",
      title: "Утеплитель ТеплоKNAUF для кровли 2х1220х6148х50мм 15 м2",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 2850,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        gruppa: "НГ",
        plotnost: "15кг/м3",
        mesto: "Внутренний/ наружный"
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
          label: "Группа горючести",
          value: "НГ"
        },
        {
          label: "Плотность",
          value: "15кг/м3"
        },
        {
          label: "Место использования",
          value: "Внутренний/ наружный"
        }
      ]
    },
    {
      id: "uteplitel-tisma-tr-044-50h1200h8300-mm-19-92-m2-2-rul-up-20-m2-up-0-996-m3-9kg-m3",
      articul: "205222",
      title: "Утеплитель Тисма TR 044 50х1200х8300 мм 19,92 м2 (2 рул/уп,20 м2/уп,0,996 м3/9кг/м3)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 2500,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "8300мм",
        shirina: "1220мм",
        tolshhina: "50мм",
        brend: "Тисма",
        "kvadrat-1-oj-upak": "20м2",
        ves: "9",
        "tip-tovara": "Утеплитель",
        gruppa: "НГ",
        plotnost: "10кг/м3",
        mesto: "Внутренний/ наружный"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "8300мм"
        },
        {
          label: "Ширина",
          value: "1220мм"
        },
        {
          label: "Толщина",
          value: "50мм"
        },
        {
          label: "Бренд",
          value: "Тисма"
        },
        {
          label: "Квадрат 1-ой упак",
          value: "20м2"
        },
        {
          label: "Вес",
          value: "9"
        },
        {
          label: "Тип товара",
          value: "Утеплитель"
        },
        {
          label: "Группа горючести",
          value: "НГ"
        },
        {
          label: "Плотность",
          value: "10кг/м3"
        },
        {
          label: "Место использования",
          value: "Внутренний/ наружный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "uteplitel-tisma-ts-038-100h600h1300-mm-6-2m2-0-62m3-8-sht-plotnost-11kg-m3",
      articul: "412439",
      title: "Утеплитель Тисма TS 038 100х600х1300 мм (6.2м2 /0.62м3) (8 шт) плотность 11кг/м3",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 340,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "1300мм",
        shirina: "600мм",
        tolshhina: "100мм",
        brend: "Тисма",
        "kvadrat-1-oj-upak": "6.2м2",
        ves: "6.8",
        "tip-tovara": "Утеплитель",
        gruppa: "НГ",
        plotnost: "11кг/м3",
        "koefficent-teploprovodnosti": "0.038Вт/м С",
        mesto: "Внутренний/ наружный"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "1300мм"
        },
        {
          label: "Ширина",
          value: "600мм"
        },
        {
          label: "Толщина",
          value: "100мм"
        },
        {
          label: "Бренд",
          value: "Тисма"
        },
        {
          label: "Квадрат 1-ой упак",
          value: "6.2м2"
        },
        {
          label: "Вес",
          value: "6.8"
        },
        {
          label: "Тип товара",
          value: "Утеплитель"
        },
        {
          label: "Группа горючести",
          value: "НГ"
        },
        {
          label: "Плотность",
          value: "11кг/м3"
        },
        {
          label: "Коэффицент теплопроводности",
          value: "0.038Вт/м С"
        },
        {
          label: "Место использования",
          value: "Внутренний/ наружный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "uteplitel-tisma-ts-038-50h600h1300-mm-12-5m2-0-62m3-16-sht-plotnost-11kg-m3",
      articul: "412438",
      title: "Утеплитель Тисма TS 038 50х600х1300 мм (12.5м2 /0.62м3) (16 шт) плотность 11кг/м3",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 155,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "1300мм",
        shirina: "600мм",
        tolshhina: "50мм",
        brend: "Тисма",
        "kvadrat-1-oj-upak": "12.5м2",
        ves: "6.8",
        "tip-tovara": "Утеплитель",
        gruppa: "НГ",
        plotnost: "11кг/м3",
        "koefficent-teploprovodnosti": "0.038Вт/м С",
        mesto: "Внутренний/ наружный"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "1300мм"
        },
        {
          label: "Ширина",
          value: "600мм"
        },
        {
          label: "Толщина",
          value: "50мм"
        },
        {
          label: "Бренд",
          value: "Тисма"
        },
        {
          label: "Квадрат 1-ой упак",
          value: "12.5м2"
        },
        {
          label: "Вес",
          value: "6.8"
        },
        {
          label: "Тип товара",
          value: "Утеплитель"
        },
        {
          label: "Группа горючести",
          value: "НГ"
        },
        {
          label: "Плотность",
          value: "11кг/м3"
        },
        {
          label: "Коэффицент теплопроводности",
          value: "0.038Вт/м С"
        },
        {
          label: "Место использования",
          value: "Внутренний/ наружный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    }
  ]
};
