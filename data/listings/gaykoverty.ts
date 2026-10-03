import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/instrument/yelektroinstrument/dreli-shurupoverty-i-gaykoverty/gaykoverty/ */
export const gaykovertyListing: CatalogListingData = {
  path: "instrument/yelektroinstrument/dreli-shurupoverty-i-gaykoverty/gaykoverty",
  title: "Гайковерты",
  totalCountLabel: "22 товара",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "CROWN",
        "ELECTROLITE",
        "FIT",
        "Hanskonner",
        "P.I.T.",
        "Sturm"
      ],
      truncate: false
    },
    {
      id: "moshhnost",
      title: "Мощность",
      options: [
        "4Ач",
        "450 Вт"
      ],
      truncate: false
    },
    {
      id: "napryazhenie",
      title: "Напряжение",
      options: [
        "12 В",
        "18",
        "18 В",
        "20 В"
      ],
      truncate: false
    },
    {
      id: "krutyashhij-moment",
      title: "Крутящий момент",
      options: [
        "120 Нм",
        "170 Нм",
        "260 Нм",
        "280 Нм",
        "300 Нм",
        "340 Нм",
        "350 Нм",
        "420 Нм"
      ],
      truncate: true
    },
    {
      id: "osobennosti",
      title: "Особенности",
      options: [
        "Бесщеточный двигатель, высокая мощность",
        "Бесщеточный двигатель, высокая эффективность",
        "Бесщеточный двигатель, высокий крутящий момент",
        "Бесщеточный двигатель, три скорости",
        "Бесщеточный двигатель, ударный механизм",
        "Мощный гайковерт для профессионального использования",
        "Надежный винтоверт для регулярного использования",
        "Профессиональный винтоверт с высоким моментом",
        "Профессиональный гайковерт с двумя аккумуляторами",
        "Сетевой гайковерт для стабильной работы",
        "Увеличенный крутящий момент"
      ],
      truncate: true
    },
    {
      id: "pitanie",
      title: "Питание",
      options: [
        "Аккумулятор",
        "Сеть 220В"
      ],
      truncate: false
    },
    {
      id: "skorosti",
      title: "Скорости",
      options: [
        "2",
        "3"
      ],
      truncate: false
    },
    {
      id: "tip",
      title: "Тип",
      options: [
        "Аккумуляторный винтоверт",
        "Аккумуляторный гайковерт",
        "Винтоверт",
        "Гайковерт"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "vintovert-hanskonner-18v-hcd18280h-24ach-3skor-280hm",
      articul: "408811",
      title: "Винтоверт Hanskonner 18В HCD18280H 2,4Ач 3скор 280Hm",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/7484ca22-c785-11ec-93cd-002590ba8282_89811628-cea4-11ec-93ce-002590ba8282-303x303.jpeg",
      price: 18350,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Hanskonner",
        tip: "Винтоверт",
        napryazhenie: "18 В",
        "krutyashhij-moment": "280 Нм",
        skorosti: "3",
        osobennosti: "Профессиональный винтоверт с высоким моментом"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Hanskonner"
        },
        {
          label: "Тип",
          value: "Винтоверт"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Напряжение",
          value: "18 В"
        },
        {
          label: "Крутящий момент",
          value: "280 Нм"
        },
        {
          label: "Скорости",
          value: "3"
        },
        {
          label: "Особенности",
          value: "Профессиональный винтоверт с высоким моментом"
        }
      ]
    },
    {
      id: "vintovert-hanskonner-18v-hcd20280blc-udar-b-shhet-1x4ach-3skor-280hm",
      articul: "426905",
      title: "Винтоверт Hanskonner 18В HCD20280BLC удар б/щет 1×4Ач 3скор 280Hm",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/10/426905-372x277.jpeg",
      price: 20500,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Hanskonner",
        tip: "Аккумуляторный винтоверт",
        napryazhenie: "18 В",
        dvigatel: "Бесщеточный",
        "krutyashhij-moment": "280 Нм",
        osobennosti: "Бесщеточный двигатель, ударный механизм"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Hanskonner"
        },
        {
          label: "Тип",
          value: "Аккумуляторный винтоверт"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Напряжение",
          value: "18 В"
        },
        {
          label: "Двигатель",
          value: "Бесщеточный"
        },
        {
          label: "Крутящий момент",
          value: "280 Нм"
        },
        {
          label: "Особенности",
          value: "Бесщеточный двигатель, ударный механизм"
        }
      ]
    },
    {
      id: "vintovert-sturm-18v-cd300h-24ach-2skor-260hm",
      articul: "424749",
      title: "Винтоверт Sturm 18В CD300H 2,4Ач 2скор 260Hm",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/952d6498-9fc6-11ee-941d-002590ba8282_16ddfcb4-a0ab-11ee-941d-002590ba8282-303x303.jpeg",
      price: 12100,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Sturm",
        tip: "Винтоверт",
        napryazhenie: "18 В",
        "krutyashhij-moment": "260 Нм",
        skorosti: "2",
        osobennosti: "Надежный винтоверт для регулярного использования"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Sturm"
        },
        {
          label: "Тип",
          value: "Винтоверт"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Напряжение",
          value: "18 В"
        },
        {
          label: "Крутящий момент",
          value: "260 Нм"
        },
        {
          label: "Скорости",
          value: "2"
        },
        {
          label: "Особенности",
          value: "Надежный винтоверт для регулярного использования"
        }
      ]
    },
    {
      id: "vintovert-akk-besshhjot-p-i-t-psd12k-120a-2-12b-120nm-3sk-2akb-zu",
      articul: "433947",
      title: "Винтоверт акк бесщёт P.I.T. PSD12K-120A/2 (12B,120Нм,3ск,2акб,ЗУ)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 9350,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "P.I.T.",
        tip: "Аккумуляторный винтоверт",
        napryazhenie: "12 В",
        dvigatel: "Бесщеточный",
        "krutyashhij-moment": "120 Нм",
        osobennosti: "Бесщеточный двигатель, три скорости"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "P.I.T."
        },
        {
          label: "Тип",
          value: "Аккумуляторный винтоверт"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Напряжение",
          value: "12 В"
        },
        {
          label: "Двигатель",
          value: "Бесщеточный"
        },
        {
          label: "Крутящий момент",
          value: "120 Нм"
        },
        {
          label: "Особенности",
          value: "Бесщеточный двигатель, три скорости"
        }
      ]
    },
    {
      id: "vintovert-akk-besshhjot-p-i-t-psd20n-170a-2-20b-170nm-3sk-2akb-zu",
      articul: "433948",
      title: "Винтоверт акк бесщёт P.I.T. PSD20Н-170A/2 (20B,170Нм,3ск,2акб,ЗУ)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 12500,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "P.I.T.",
        tip: "Аккумуляторный винтоверт",
        napryazhenie: "20 В",
        dvigatel: "Бесщеточный",
        "krutyashhij-moment": "170 Нм",
        osobennosti: "Бесщеточный двигатель, высокая мощность"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "P.I.T."
        },
        {
          label: "Тип",
          value: "Аккумуляторный винтоверт"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Напряжение",
          value: "20 В"
        },
        {
          label: "Двигатель",
          value: "Бесщеточный"
        },
        {
          label: "Крутящий момент",
          value: "170 Нм"
        },
        {
          label: "Особенности",
          value: "Бесщеточный двигатель, высокая мощность"
        }
      ]
    },
    {
      id: "gajkovert-ciw30-4-0-pro-bl-udar-b-shhet-20v-1200hm-2h5-0ach-1",
      articul: "9163",
      title: "Гайковерт CIW30/4.0-PRO-BL удар б/щет (20В 1200Hm 2х5,0Ач) №1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 15600,
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
      id: "gaykovert-crown-st22016-l-4-tv-18v2kh40-a-ch",
      articul: "406542",
      title: "Гайковерт CROWN СТ22016 L-4 ТВ (18В,2х4,0 А/ч)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/75d141e0-6892-11ec-93c3-002590ba8282_340e1627-7903-11ec-93c5-002590ba8282-372x252.jpeg",
      price: 22300,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "CROWN",
        tip: "Гайковерт",
        napryazhenie: "18",
        komplektaciya: "2х4.0 Ач",
        pitanie: "Аккумулятор",
        moshhnost: "4Ач",
        osobennosti: "Профессиональный гайковерт с двумя аккумуляторами",
        nalichie: "Да"
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
          label: "Тип",
          value: "Гайковерт"
        },
        {
          label: "Напряжение",
          value: "18 В"
        },
        {
          label: "Тип товара",
          value: "Гайковерт"
        },
        {
          label: "Комплектация",
          value: "2х4.0 Ач"
        },
        {
          label: "Питание",
          value: "Аккумулятор"
        },
        {
          label: "Мощность",
          value: "4Ач"
        },
        {
          label: "Особенности",
          value: "Профессиональный гайковерт с двумя аккумуляторами"
        },
        {
          label: "Наличие удара",
          value: "Да"
        },
        {
          label: "Напряжение аккумулятора",
          value: "18"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "gaykovert-electrolite-pride-biw-340-2kh40a-ch",
      articul: "411765",
      title: "Гайковерт ELECTROLITE PRIDE BIW 340 (2х4,0А/ч) Акция",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/10/411765-270x303.jpeg",
      price: 4915,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "ELECTROLITE",
        tip: "Гайковерт",
        "krutyashhij-moment": "340 Нм",
        komplektaciya: "2х4.0 Ач",
        pitanie: "Аккумулятор",
        osobennosti: "Бесщеточный двигатель, высокая эффективность"
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
          value: "Гайковерт"
        },
        {
          label: "Крутящий момент",
          value: "340 Нм"
        },
        {
          label: "Комплектация",
          value: "2х4.0 Ач"
        },
        {
          label: "Питание",
          value: "Аккумулятор"
        },
        {
          label: "Особенности",
          value: "Бесщеточный двигатель, высокая эффективность"
        }
      ]
    },
    {
      id: "gaykovert-fit-450-vt-300hm-80642",
      articul: "008364",
      title: "Гайковерт FIT 450 Вт 300Hm 80642",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/ae1e6534-9e65-11e9-a995-c8600046bc56_8f79e6ba-9feb-11ea-937f-002590ba8283-303x303.jpeg",
      price: 9235,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "FIT",
        tip: "Гайковерт",
        moshhnost: "450 Вт",
        "krutyashhij-moment": "300 Нм",
        pitanie: "Сеть 220В",
        osobennosti: "Сетевой гайковерт для стабильной работы"
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
          value: "Гайковерт"
        },
        {
          label: "Мощность",
          value: "450 Вт"
        },
        {
          label: "Крутящий момент",
          value: "300 Нм"
        },
        {
          label: "Питание",
          value: "Сеть 220В"
        },
        {
          label: "Особенности",
          value: "Сетевой гайковерт для стабильной работы"
        }
      ]
    },
    {
      id: "gaykovert-fit-450-vt-350hm-80125",
      articul: "409480",
      title: "Гайковерт FIT 450 Вт 350Hm 80125",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/aaa908b4-dcf5-11ec-93ce-002590ba8282_b32f5aca-22f7-11ee-9403-002590ba8282-372x212.jpeg",
      price: 8990,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "FIT",
        tip: "Гайковерт",
        moshhnost: "450 Вт",
        "krutyashhij-moment": "350 Нм",
        pitanie: "Сеть 220В",
        osobennosti: "Увеличенный крутящий момент"
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
          value: "Гайковерт"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "450 Вт"
        },
        {
          label: "Крутящий момент",
          value: "350 Нм"
        },
        {
          label: "Питание",
          value: "Сеть 220В"
        },
        {
          label: "Особенности",
          value: "Увеличенный крутящий момент"
        }
      ]
    },
    {
      id: "gaykovert-hanskonner-hcd18350s-18v350hm-2kh40-a-ch",
      articul: "421336",
      title: "Гайковерт Hanskonner HCD18350S (18В,350Hm.2х4,0 А/ч)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/a768c6f9-5ebd-11ee-9416-002590ba8282_0bb1609c-8480-11ee-941b-002590ba8282-261x303.jpeg",
      price: 17400,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Hanskonner",
        tip: "Гайковерт",
        napryazhenie: "18 В",
        "krutyashhij-moment": "350 Нм",
        komplektaciya: "2х4.0 Ач",
        osobennosti: "Мощный гайковерт для профессионального использования"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Hanskonner"
        },
        {
          label: "Тип",
          value: "Гайковерт"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Напряжение",
          value: "18 В"
        },
        {
          label: "Крутящий момент",
          value: "350 Нм"
        },
        {
          label: "Комплектация",
          value: "2х4.0 Ач"
        },
        {
          label: "Особенности",
          value: "Мощный гайковерт для профессионального использования"
        }
      ]
    },
    {
      id: "gajkovert-hanskonner-hcd20420blc-udar-b-shhet-18v-420hm-1h40ach",
      articul: "426906",
      title: "Гайковерт Hanskonner HCD20420BLC удар б/щет (18В 420Hm 1х4,0Ач)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/04/426906-291x303.jpeg",
      price: 18900,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Hanskonner",
        tip: "Аккумуляторный гайковерт",
        napryazhenie: "18 В",
        dvigatel: "Бесщеточный",
        "krutyashhij-moment": "420 Нм",
        osobennosti: "Бесщеточный двигатель, высокий крутящий момент"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Hanskonner"
        },
        {
          label: "Тип",
          value: "Аккумуляторный гайковерт"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Напряжение",
          value: "18 В"
        },
        {
          label: "Двигатель",
          value: "Бесщеточный"
        },
        {
          label: "Крутящий момент",
          value: "420 Нм"
        },
        {
          label: "Особенности",
          value: "Бесщеточный двигатель, высокий крутящий момент"
        }
      ]
    }
  ]
};
