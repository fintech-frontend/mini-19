import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/utepliteli-i-shumoizoljacija/penopolistirol/ */
export const penopolistirolListing: CatalogListingData = {
  path: "utepliteli-i-shumoizoljacija/penopolistirol",
  title: "Пенополистирол",
  totalCountLabel: "44 товара",
  filterFields: [
    {
      id: "dlina",
      title: "Длина",
      options: [
        "1000мм",
        "1185мм"
      ],
      truncate: false
    },
    {
      id: "naznachenie",
      title: "Назначение",
      options: [
        "Стена",
        "Фундамент"
      ],
      truncate: false
    },
    {
      id: "obem",
      title: "Объем в упаковке (м3)",
      options: [
        "0,2429",
        "0,2493",
        "0,2704",
        "0,2780"
      ],
      truncate: false
    },
    {
      id: "plotnost",
      title: "Плотность, кг/м3",
      options: [
        "7кг/м3",
        "13.5-15кг/м3",
        "20кг/м3",
        "27-35кг/м3",
        "от 19"
      ],
      truncate: false
    },
    {
      id: "shirina",
      title: "Ширина",
      options: [
        "585 мм",
        "1000 мм"
      ],
      truncate: false
    },
    {
      id: "tip",
      title: "Тип кромки",
      options: [
        "Пенополистирол",
        "С (прямая)",
        "Т-15 (Г-образная, 15 мм)"
      ],
      truncate: false
    },
    {
      id: "vlagostojkost",
      title: "Влагостойкость",
      options: [
        "0.4",
        "Да"
      ],
      truncate: false
    },
    {
      id: "kubicheskij-metr-odnoj-plity-penopleks",
      title: "Кубический метр одной плиты пеноплекс",
      options: [
        "0,0139",
        "0,0208",
        "0,0277",
        "0,0347",
        "0,0693"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "penopljeks-1185h585h100-4sht",
      articul: "052632",
      title: "Пеноплэкс 1185х585х100 (4шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 930,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "kubicheskij-metr-odnoj-plity-penopleks": "0,0693"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Кубический метр одной плиты пеноплекс",
          value: "0,0693"
        }
      ]
    },
    {
      id: "penopljeks-1185h585h20-l-20sht",
      articul: "052634",
      title: "Пеноплэкс 1185х585х20-L (20шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 190,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        tip: "С (прямая)",
        obem: "0,2780",
        teploprovodnost: "при (10±0,3) °C, Вт/(м•К): 0,034",
        plotnost: "20кг/м3",
        gruppa: "Г4",
        prochnost: "относительной деформации, МПа, не менее 0,12",
        vodopogloshhenie: "0,4",
        vlagostojkost: "0.4",
        "kubicheskij-metr-odnoj-plity-penopleks": "0,0139"
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
          label: "Тип кромки",
          value: "С (прямая)"
        },
        {
          label: "Объем в упаковке (м3)",
          value: "0,2780"
        },
        {
          label: "Теплопроводность",
          value: "при (10±0,3) °C, Вт/(м•К): 0,034"
        },
        {
          label: "Плотность, кг/м3",
          value: "от 19"
        },
        {
          label: "Группа горючести",
          value: "Г4"
        },
        {
          label: "Прочность на сжатие при 10 %",
          value: "относительной деформации, МПа, не менее 0,12"
        },
        {
          label: "Водопоглощение за 24 часа, % по объему, не более",
          value: "0,4"
        },
        {
          label: "Плотность",
          value: "20кг/м3"
        },
        {
          label: "Влагостойкость",
          value: "0.4"
        },
        {
          label: "Кубический метр одной плиты пеноплекс",
          value: "0,0139"
        }
      ]
    },
    {
      id: "penopljeks-1185h585h30-l-13sht",
      articul: "052635",
      title: "Пеноплэкс 1185х585х30-L (13шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 275,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        tip: "Т-15 (Г-образная, 15 мм)",
        obem: "0,2704",
        teploprovodnost: "при (10±0,3) °C, Вт/(м•К): 0,034",
        plotnost: "от 19",
        gruppa: "Г4",
        prochnost: "относительной деформации, МПа, не менее 0,12",
        vodopogloshhenie: "0,4",
        vlagostojkost: "0.4",
        "kubicheskij-metr-odnoj-plity-penopleks": "0,0208"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Максимальный размер скидки",
          value: "20"
        },
        {
          label: "Тип кромки",
          value: "Т-15 (Г-образная, 15 мм)"
        },
        {
          label: "Объем в упаковке (м3)",
          value: "0,2704"
        },
        {
          label: "Теплопроводность",
          value: "при (10±0,3) °C, Вт/(м•К): 0,034"
        },
        {
          label: "Плотность, кг/м3",
          value: "от 19"
        },
        {
          label: "Группа горючести",
          value: "Г4"
        },
        {
          label: "Прочность на сжатие при 10 %",
          value: "относительной деформации, МПа, не менее 0,12"
        },
        {
          label: "Водопоглощение за 24 часа, % по объему, не более",
          value: "0,4"
        },
        {
          label: "Влагостойкость",
          value: "0.4"
        },
        {
          label: "Кубический метр одной плиты пеноплекс",
          value: "0,0208"
        }
      ]
    },
    {
      id: "penopljeks-1185h585h30-l-stena-13sht",
      articul: "420664",
      title: "Пеноплэкс 1185х585х30-L Стена (13шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 255,
      inStock: false,
      quickBuy: true,
      filterValues: {
        "kubicheskij-metr-odnoj-plity-penopleks": "0,0208"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Кубический метр одной плиты пеноплекс",
          value: "0,0208"
        }
      ]
    },
    {
      id: "penopljeks-1185h585h40-l-10sht",
      articul: "052636",
      title: "Пеноплэкс 1185х585х40-L (10шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 365,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        kol: "9 шт",
        tip: "Т-15 (Г-образная, 15 мм)",
        obem: "0,2493",
        teploprovodnost: "при (10±0,3) °C, Вт/(м•К): 0,034",
        plotnost: "20кг/м3",
        gruppa: "Г4",
        prochnost: "относительной деформации, МПа, не менее 0,12",
        vodopogloshhenie: "0,4",
        vlagostojkost: "0.4",
        "kubicheskij-metr-odnoj-plity-penopleks": "0,0277"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Кол-во шт в 1-ой упак",
          value: "9 шт"
        },
        {
          label: "Максимальный размер скидки",
          value: "20"
        },
        {
          label: "Тип кромки",
          value: "Т-15 (Г-образная, 15 мм)"
        },
        {
          label: "Объем в упаковке (м3)",
          value: "0,2493"
        },
        {
          label: "Теплопроводность",
          value: "при (10±0,3) °C, Вт/(м•К): 0,034"
        },
        {
          label: "Плотность, кг/м3",
          value: "от 19"
        },
        {
          label: "Группа горючести",
          value: "Г4"
        },
        {
          label: "Прочность на сжатие при 10 %",
          value: "относительной деформации, МПа, не менее 0,12"
        },
        {
          label: "Водопоглощение за 24 часа, % по объему, не более",
          value: "0,4"
        },
        {
          label: "Плотность",
          value: "20кг/м3"
        },
        {
          label: "Влагостойкость",
          value: "0.4"
        },
        {
          label: "Кубический метр одной плиты пеноплекс",
          value: "0,0277"
        }
      ]
    },
    {
      id: "penopljeks-1185h585h50-stena-7-sht",
      articul: "404910",
      title: "Пеноплэкс 1185х585х50 Стена (7 шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 460,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "1185мм",
        shirina: "585 мм",
        tolshhina: "50мм",
        brend: "Пеноплэкс",
        ves: "5",
        tip: "Пенополистирол",
        gruppa: "Г4",
        plotnost: "20кг/м3",
        naznachenie: "Стена",
        vlagostojkost: "Да",
        "kubicheskij-metr-odnoj-plity-penopleks": "0,0347"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "1185мм"
        },
        {
          label: "Ширина",
          value: "585 мм"
        },
        {
          label: "Толщина",
          value: "50мм"
        },
        {
          label: "Бренд",
          value: "Пеноплэкс"
        },
        {
          label: "Вес",
          value: "5"
        },
        {
          label: "Тип товара",
          value: "Пенополистирол"
        },
        {
          label: "Группа горючести",
          value: "Г4"
        },
        {
          label: "Плотность",
          value: "20кг/м3"
        },
        {
          label: "Назначение",
          value: "Стена"
        },
        {
          label: "Влагостойкость",
          value: "Да"
        },
        {
          label: "Кубический метр одной плиты пеноплекс",
          value: "0,0347"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "penopljeks-1185h585h50-fundament-7-sht",
      articul: "052637",
      title: "Пеноплэкс 1185х585х50 Фундамент (7 шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 490,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        tip: "Т-15 (Г-образная, 15 мм)",
        obem: "0,2429",
        teploprovodnost: "при (10±0,3) °C, Вт/(м•К): 0,034",
        plotnost: "27-35кг/м3",
        gruppa: "Г4",
        prochnost: "относительной деформации, МПа, не менее 0,12",
        vodopogloshhenie: "0,4",
        naznachenie: "Фундамент",
        "kubicheskij-metr-odnoj-plity-penopleks": "0,0347"
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
          label: "Тип кромки",
          value: "Т-15 (Г-образная, 15 мм)"
        },
        {
          label: "Объем в упаковке (м3)",
          value: "0,2429"
        },
        {
          label: "Теплопроводность",
          value: "при (10±0,3) °C, Вт/(м•К): 0,034"
        },
        {
          label: "Плотность, кг/м3",
          value: "от 27 до 35"
        },
        {
          label: "Группа горючести",
          value: "Г4"
        },
        {
          label: "Прочность на сжатие при 10 %",
          value: "относительной деформации, МПа, не менее 0,12"
        },
        {
          label: "Водопоглощение за 24 часа, % по объему, не более",
          value: "0,4"
        },
        {
          label: "Плотность",
          value: "27-35кг/м3"
        },
        {
          label: "Назначение",
          value: "Фундамент"
        },
        {
          label: "Кубический метр одной плиты пеноплекс",
          value: "0,0347"
        }
      ]
    },
    {
      id: "penopljeks-1185h585h50-l-7sht",
      articul: "052638",
      title: "Пеноплэкс 1185х585х50-L (7шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 450,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        tip: "Т-15 (Г-образная, 15 мм)",
        obem: "0,2429",
        teploprovodnost: "при (10±0,3) °C, Вт/(м•К): 0,034",
        plotnost: "20кг/м3",
        gruppa: "Г4",
        prochnost: "относительной деформации, МПа, не менее 0,12",
        vodopogloshhenie: "0,4",
        vlagostojkost: "0.4",
        "kubicheskij-metr-odnoj-plity-penopleks": "0,0347"
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
          label: "Тип кромки",
          value: "Т-15 (Г-образная, 15 мм)"
        },
        {
          label: "Объем в упаковке (м3)",
          value: "0,2429"
        },
        {
          label: "Теплопроводность",
          value: "при (10±0,3) °C, Вт/(м•К): 0,034"
        },
        {
          label: "Плотность, кг/м3",
          value: "от 19"
        },
        {
          label: "Группа горючести",
          value: "Г4"
        },
        {
          label: "Прочность на сжатие при 10 %",
          value: "относительной деформации, МПа, не менее 0,12"
        },
        {
          label: "Водопоглощение за 24 часа, % по объему, не более",
          value: "0,4"
        },
        {
          label: "Плотность",
          value: "20кг/м3"
        },
        {
          label: "Влагостойкость",
          value: "0.4"
        },
        {
          label: "Кубический метр одной плиты пеноплекс",
          value: "0,0347"
        }
      ]
    },
    {
      id: "penopolistirol-psb-s-15-1000h1000h100-mm-5-sht",
      articul: "052641",
      title: "Пенополистирол ПСБ-С-15 1000х1000х100 мм (5 шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 220,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "1000мм",
        shirina: "1000 мм",
        plotnost: "13.5-15кг/м3"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "1000мм"
        },
        {
          label: "Ширина",
          value: "1000 мм"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Плотность",
          value: "13.5-15кг/м3"
        }
      ]
    },
    {
      id: "penopolistirol-psb-s-15-1000h1000h20-mm-25-sht",
      articul: "052642",
      title: "Пенополистирол ПСБ-С-15 1000х1000х20 мм (25 шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 44,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "1000мм",
        shirina: "1000 мм"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "1000мм"
        },
        {
          label: "Ширина",
          value: "1000 мм"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "penopolistirol-psb-s-15-1000h1000h30-mm-15-sht",
      articul: "052643",
      title: "Пенополистирол ПСБ-С-15 1000х1000х30 мм (15 шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 65,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "1000мм",
        shirina: "1000 мм",
        plotnost: "7кг/м3"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "1000мм"
        },
        {
          label: "Ширина",
          value: "1000 мм"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Плотность",
          value: "7кг/м3"
        }
      ]
    },
    {
      id: "penopolistirol-psb-s-15-1000h1000h40mm",
      articul: "052644",
      title: "Пенополистирол ПСБ-С-15 1000х1000х40мм.",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 88,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "1000мм",
        shirina: "1000 мм"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "1000мм"
        },
        {
          label: "Ширина",
          value: "1000 мм"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    }
  ]
};
