import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/instrument/yelektroinstrument/miksery-stroitelnye/ */
export const mikseryStroitelnyeListing: CatalogListingData = {
  path: "instrument/yelektroinstrument/miksery-stroitelnye",
  title: "Строительные миксеры",
  totalCountLabel: "20 товаров",
  filterFields: [
    {
      id: "moshhnost",
      title: "Мощность",
      options: [
        "720 Вт",
        "1100 Вт",
        "1200 Вт",
        "1400 Вт",
        "1600 Вт"
      ],
      truncate: false
    },
    {
      id: "plavnyj",
      title: "Плавный пуск",
      options: [
        "Да",
        "Нет"
      ],
      truncate: false
    },
    {
      id: "brend",
      title: "Бренд",
      options: [
        "ИНСТАР",
        "CROWN",
        "ELECTROLITE",
        "FIT"
      ],
      truncate: false
    },
    {
      id: "model",
      title: "Модель",
      options: [
        "ЭДМ 1400",
        "CT10049",
        "M 1400",
        "M 1600",
        "M 1600/2"
      ],
      truncate: false
    },
    {
      id: "naznachenie",
      title: "Назначение",
      options: [
        "Смешивание растворов",
        "Смешивание строительных смесей"
      ],
      truncate: false
    },
    {
      id: "obem-smesi",
      title: "Объем смеси",
      options: [
        "120 л",
        "145 л"
      ],
      truncate: false
    },
    {
      id: "tip",
      title: "Тип",
      options: [
        "Дрель-миксер",
        "Строительный миксер"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "drel-mikser-fit-1200vt-3-16-mm-80038",
      articul: "406986",
      title: "Дрель-миксер FIT 1200Вт 3-16 мм 80038 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/bc08ad9e-7ffa-11ec-93c5-002590ba8282_9352883c-8017-11ec-93c5-002590ba8282-343x303.jpeg",
      price: 5950,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "FIT",
        tip: "Дрель-миксер",
        moshhnost: "1200 Вт",
        "diametr-patrona": "3-16 мм",
        naznachenie: "Смешивание растворов",
        kolichestvo: "1",
        osobennosti: "Регулировка скорости",
        plavnyj: "Нет",
        elektr: "Есть",
        nelikvid: "Да"
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
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип",
          value: "Дрель-миксер"
        },
        {
          label: "Мощность",
          value: "1200 Вт"
        },
        {
          label: "Диаметр патрона",
          value: "3-16 мм"
        },
        {
          label: "Назначение",
          value: "Смешивание растворов"
        },
        {
          label: "Количество венчиков",
          value: "1"
        },
        {
          label: "Особенности",
          value: "Регулировка скорости"
        },
        {
          label: "Плавный пуск",
          value: "Нет"
        },
        {
          label: "Электр. регулировка оборотов",
          value: "Есть"
        },
        {
          label: "Неликвид",
          value: "Да"
        }
      ]
    },
    {
      id: "drel-mikser-fit-720vt-3-16-mm-80036",
      articul: "406985",
      title: "Дрель-миксер FIT 720Вт 3-16 мм 80036 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/87959511-7ffa-11ec-93c5-002590ba8282_99abf288-8016-11ec-93c5-002590ba8282-246x303.jpeg",
      price: 4285,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "FIT",
        tip: "Дрель-миксер",
        moshhnost: "720 Вт",
        "diametr-patrona": "3-16 мм",
        naznachenie: "Смешивание растворов",
        kolichestvo: "1",
        osobennosti: "Регулировка скорости",
        plavnyj: "Нет",
        elektr: "Есть",
        nelikvid: "Да"
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
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип",
          value: "Дрель-миксер"
        },
        {
          label: "Мощность",
          value: "720 Вт"
        },
        {
          label: "Диаметр патрона",
          value: "3-16 мм"
        },
        {
          label: "Назначение",
          value: "Смешивание растворов"
        },
        {
          label: "Количество венчиков",
          value: "1"
        },
        {
          label: "Особенности",
          value: "Регулировка скорости"
        },
        {
          label: "Плавный пуск",
          value: "Нет"
        },
        {
          label: "Электр. регулировка оборотов",
          value: "Есть"
        },
        {
          label: "Неликвид",
          value: "Да"
        }
      ]
    },
    {
      id: "drel-mikser-instar-yedm-1400vt-14016",
      articul: "406956",
      title: "Дрель-миксер ИНСТАР ЭДМ 1400Вт 14016 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/fbd6bec4-7dca-11ec-93c5-002590ba8282_ccd4b511-8195-11ec-93c5-002590ba8282-303x303.jpeg",
      price: 3930,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "ИНСТАР",
        tip: "Дрель-миксер",
        moshhnost: "1400 Вт",
        model: "ЭДМ 1400",
        naznachenie: "Смешивание растворов",
        kolichestvo: "1",
        osobennosti: "Регулировка скорости",
        plavnyj: "Нет",
        elektr: "Есть",
        nelikvid: "Да"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "ИНСТАР"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип",
          value: "Дрель-миксер"
        },
        {
          label: "Мощность",
          value: "1400 Вт"
        },
        {
          label: "Модель",
          value: "ЭДМ 1400"
        },
        {
          label: "Назначение",
          value: "Смешивание растворов"
        },
        {
          label: "Количество венчиков",
          value: "1"
        },
        {
          label: "Особенности",
          value: "Регулировка скорости"
        },
        {
          label: "Плавный пуск",
          value: "Нет"
        },
        {
          label: "Электр. регулировка оборотов",
          value: "Есть"
        },
        {
          label: "Неликвид",
          value: "Да"
        }
      ]
    },
    {
      id: "mikser-crown-ct10049-1100-vt",
      articul: "040623",
      title: "Миксер CROWN CT10049 1100 Вт",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/991459d3-d1d0-11e8-8c39-c8600046bc56_1eb2be9e-9fec-11ea-937f-002590ba8283-372x289.jpeg",
      price: 13000,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "CROWN",
        tip: "Строительный миксер",
        moshhnost: "1100 Вт",
        model: "CT10049",
        kolichestvo: "1",
        naznachenie: "Смешивание строительных смесей",
        plavnyj: "Да",
        "tip-pitaniya": "Сетевой",
        elektr: "Есть"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "CROWN"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип",
          value: "Строительный миксер"
        },
        {
          label: "Мощность",
          value: "1100 Вт"
        },
        {
          label: "Модель",
          value: "CT10049"
        },
        {
          label: "Количество венчиков",
          value: "1"
        },
        {
          label: "Назначение",
          value: "Смешивание строительных смесей"
        },
        {
          label: "Плавный пуск",
          value: "Да"
        },
        {
          label: "Тип питания",
          value: "Сетевой"
        },
        {
          label: "Электр. регулировка оборотов",
          value: "Есть"
        }
      ]
    },
    {
      id: "mikser-electrolite-m-1400",
      articul: "040624",
      title: "Миксер ELECTROLITE M 1400",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/baa7d2ca-3862-11ea-a9e2-c8600046bc56_1eb2be9f-9fec-11ea-937f-002590ba8283-303x303.jpeg",
      price: 7800,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "ELECTROLITE",
        tip: "Строительный миксер",
        moshhnost: "1400 Вт",
        model: "M 1400",
        naznachenie: "Смешивание строительных смесей",
        "tip-pitaniya": "Сетевой"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "ELECTROLITE"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип",
          value: "Строительный миксер"
        },
        {
          label: "Мощность",
          value: "1400 Вт"
        },
        {
          label: "Модель",
          value: "M 1400"
        },
        {
          label: "Назначение",
          value: "Смешивание строительных смесей"
        },
        {
          label: "Тип питания",
          value: "Сетевой"
        }
      ]
    },
    {
      id: "mikser-electrolite-m-1600",
      articul: "414429",
      title: "Миксер ELECTROLITE M 1600",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/d04d718c-717b-11ed-93dd-002590ba8282_61e2dab3-22ff-11ee-9403-002590ba8282-303x303.jpeg",
      price: 5300,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "ELECTROLITE",
        tip: "Строительный миксер",
        moshhnost: "1600 Вт",
        model: "M 1600",
        naznachenie: "Смешивание строительных смесей",
        "tip-pitaniya": "Сетевой"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "ELECTROLITE"
        },
        {
          label: "Тип",
          value: "Строительный миксер"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "1600 Вт"
        },
        {
          label: "Модель",
          value: "M 1600"
        },
        {
          label: "Назначение",
          value: "Смешивание строительных смесей"
        },
        {
          label: "Тип питания",
          value: "Сетевой"
        }
      ]
    },
    {
      id: "mikser-electrolite-m-1600-2",
      articul: "040625",
      title: "Миксер ELECTROLITE M 1600/2",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/d171efa7-3862-11ea-a9e2-c8600046bc56_1eb2bea0-9fec-11ea-937f-002590ba8283-303x303.jpeg",
      price: 11891,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "ELECTROLITE",
        tip: "Строительный миксер",
        moshhnost: "1600 Вт",
        model: "M 1600/2",
        naznachenie: "Смешивание строительных смесей",
        "tip-pitaniya": "Сетевой"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "ELECTROLITE"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип",
          value: "Строительный миксер"
        },
        {
          label: "Мощность",
          value: "1600 Вт"
        },
        {
          label: "Модель",
          value: "M 1600/2"
        },
        {
          label: "Назначение",
          value: "Смешивание строительных смесей"
        },
        {
          label: "Тип питания",
          value: "Сетевой"
        }
      ]
    },
    {
      id: "mikser-em1500-pro-1500vt-220v-2skor-venchik-m14-1",
      articul: "9154",
      title: "Миксер EM1500-PRO (1500Вт,220В,2скор,венчик М14) №1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 7300,
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
      id: "mikser-em1600-2-1600vt-220v-2skor-120mm-1",
      articul: "9134",
      title: "Миксер EM1600-2 (1600Вт,220В,2скор,120мм) №1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 11450,
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
      id: "mikser-em1850-pro-1850vt-reg-oborot-venchik-m14",
      articul: "9152",
      title: "Миксер EM1850-PRO (1850Вт,рег.оборот,венчик М14) №1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 10750,
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
      id: "mikser-fit-1400-vt-120l-dvukhskorosnoy-80040",
      articul: "404972",
      title: "Миксер FIT 1400 Вт 120л двухскоросной 80040",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/c496194f-3278-11ec-93bf-002590ba8282_ad354d87-22f7-11ee-9403-002590ba8282-303x303.jpeg",
      price: 10400,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "FIT",
        tip: "Строительный миксер",
        moshhnost: "1400 Вт",
        "obem-smesi": "120 л",
        kolichestvo: "1",
        skorosti: "Двухскоростной",
        plavnyj: "Нет",
        naznachenie: "Смешивание строительных смесей",
        elektr: "Есть"
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
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип",
          value: "Строительный миксер"
        },
        {
          label: "Мощность",
          value: "1400 Вт"
        },
        {
          label: "Объем смеси",
          value: "120 л"
        },
        {
          label: "Количество венчиков",
          value: "1"
        },
        {
          label: "Скорости",
          value: "Двухскоростной"
        },
        {
          label: "Плавный пуск",
          value: "Нет"
        },
        {
          label: "Назначение",
          value: "Смешивание строительных смесей"
        },
        {
          label: "Электр. регулировка оборотов",
          value: "Есть"
        }
      ]
    },
    {
      id: "mikser-fit-1600-vt-120l-dvukhskorostnoy-80042",
      articul: "424819",
      title: "Миксер FIT 1600 Вт 145л двухскоростной 80042",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/424819-372x254.jpg",
      price: 11400,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "FIT",
        tip: "Строительный миксер",
        moshhnost: "1600 Вт",
        "obem-smesi": "145 л",
        skorosti: "Двухскоростной",
        naznachenie: "Смешивание строительных смесей"
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
          label: "Тип",
          value: "Строительный миксер"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "1600 Вт"
        },
        {
          label: "Объем смеси",
          value: "145 л"
        },
        {
          label: "Скорости",
          value: "Двухскоростной"
        },
        {
          label: "Назначение",
          value: "Смешивание строительных смесей"
        }
      ]
    }
  ]
};
