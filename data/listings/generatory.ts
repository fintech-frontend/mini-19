import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/instrument/yelektroinstrument/generatory-i-komplektuyushhie/generatory/ */
export const generatoryListing: CatalogListingData = {
  path: "instrument/yelektroinstrument/generatory-i-komplektuyushhie/generatory",
  title: "Генераторы",
  totalCountLabel: "43 товара",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Амперос",
        "Denzel"
      ],
      truncate: false
    },
    {
      id: "moshhnost",
      title: "Мощность",
      options: [
        "2,5 кВт",
        "5.5кВт",
        "8кВт",
        "9кВт",
        "16кВт"
      ],
      truncate: false
    },
    {
      id: "starter",
      title: "Стартер",
      options: [
        "Ручной",
        "Ручной стартер/Электростартер"
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
      id: "generator-benzinovyj-ng8000-so-pro-6-8-7-5kvt-17ls-25l-jel-start-1",
      articul: "10723",
      title: "Генератор бензиновый NG8000-SO-PRO (6,8/7,5кВт,17лс,25л ‘эл.старт) №1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 75600,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        napryazhenie: "220 В",
        vid: "Бензин",
        starter: "Ручной стартер/Электростартер"
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
          label: "Напряжение",
          value: "220 В"
        },
        {
          label: "Вид топлива",
          value: "Бензин"
        },
        {
          label: "Стартер",
          value: "Ручной стартер/Электростартер"
        }
      ]
    },
    {
      id: "generator-invertornyj-fubag-ti-11000-a-es-benz-10kvt-220v-32a",
      articul: "8595",
      title: "Генератор инверторный Fubag TI 11000 A ES бенз (10кВт,220В,32А)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 0,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        napryazhenie: "220 В",
        vid: "Бензин",
        starter: "Ручной стартер/Электростартер"
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
          label: "Напряжение",
          value: "220 В"
        },
        {
          label: "Вид топлива",
          value: "Бензин"
        },
        {
          label: "Стартер",
          value: "Ручной стартер/Электростартер"
        }
      ]
    },
    {
      id: "dizel-generator-amperos-ad-16-t230v",
      articul: "407533",
      title: "Дизель генератор АМПЕРОС АД 16-Т230В",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/407533-372x287.jpeg",
      price: 490000,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Амперос",
        moshhnost: "16кВт"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Амперос"
        },
        {
          label: "Мощность",
          value: "16кВт"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "invertornyj-generator-huter-dn2700si",
      articul: "787",
      title: "Инверторный генератор Huter DN2700Si",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 49500,
      inStock: false,
      quickBuy: true,
      filterValues: {},
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "10"
        }
      ]
    },
    {
      id: "yelektrogenerator-denzel-ps-25-25kvt-230v",
      articul: "128926",
      title: "Электрогенератор DENZEL PS 25 2,5кВт 230В",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/592a0510-f0ff-11ea-9392-002590ba8283_57c103f8-f116-11ea-9392-002590ba8283-372x303.jpeg",
      price: 22500,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Denzel",
        tip: "Электрогенератор",
        napryazhenie: "220 В",
        vid: "Бензин",
        starter: "Ручной",
        moshhnost: "2,5 кВт"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Denzel"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип товара",
          value: "Электрогенератор"
        },
        {
          label: "Напряжение",
          value: "220 В"
        },
        {
          label: "Вид топлива",
          value: "Бензин"
        },
        {
          label: "Стартер",
          value: "Ручной"
        },
        {
          label: "Мощность",
          value: "2,5 кВт"
        }
      ]
    },
    {
      id: "yelektrogenerator-denzel-ps-33e-33kvt-230v-94537",
      articul: "415269",
      title: "Электрогенератор DENZEL PS 33Е 3,3кВт 230В 94537",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/15d1e88d-8833-11ed-93e0-002590ba8282_b6cbf79a-c7f2-11ed-93ec-002590ba8282-372x283.jpeg",
      price: 35000,
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
      id: "yelektrogenerator-denzel-ps-55ea-5-5kvt-230v",
      articul: "128927",
      title: "Электрогенератор DENZEL PS 55EA 5.5кВт 230В",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/89caef76-f0ff-11ea-9392-002590ba8283_6353f5dd-f116-11ea-9392-002590ba8283-303x303.jpeg",
      price: 69000,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Denzel",
        tip: "Электрогенератор",
        napryazhenie: "220 В",
        vid: "Бензин",
        starter: "Ручной стартер/Электростартер",
        moshhnost: "5.5кВт"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Denzel"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип товара",
          value: "Электрогенератор"
        },
        {
          label: "Напряжение",
          value: "220 В"
        },
        {
          label: "Вид топлива",
          value: "Бензин"
        },
        {
          label: "Стартер",
          value: "Ручной стартер/Электростартер"
        },
        {
          label: "Мощность",
          value: "5.5кВт"
        }
      ]
    },
    {
      id: "yelektrogenerator-denzel-ps-80ea-8kvt-230v-946924",
      articul: "128928",
      title: "Электрогенератор DENZEL PS 80EA 8кВт 230В 946924",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/fcdf9f8b-f0ff-11ea-9392-002590ba8283_6a0f4466-f116-11ea-9392-002590ba8283-303x303.jpeg",
      price: 74990,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Denzel",
        tip: "Электрогенератор",
        napryazhenie: "220 В",
        vid: "Бензин",
        starter: "Ручной стартер/Электростартер",
        moshhnost: "8кВт"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Denzel"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип товара",
          value: "Электрогенератор"
        },
        {
          label: "Напряжение",
          value: "220 В"
        },
        {
          label: "Вид топлива",
          value: "Бензин"
        },
        {
          label: "Стартер",
          value: "Ручной стартер/Электростартер"
        },
        {
          label: "Мощность",
          value: "8кВт"
        }
      ]
    },
    {
      id: "yelektrogenerator-denzel-ps-90ea-9kvt-230v-946934",
      articul: "128929",
      title: "Электрогенератор DENZEL PS 90EA 9кВт 230В 946934",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/1ba2a1ce-f100-11ea-9392-002590ba8283_70a931c3-f116-11ea-9392-002590ba8283-326x303.jpeg",
      price: 98000,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Denzel",
        tip: "Электрогенератор",
        napryazhenie: "220 В",
        vid: "Бензин",
        starter: "Ручной стартер/Электростартер",
        moshhnost: "9кВт"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Denzel"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип товара",
          value: "Электрогенератор"
        },
        {
          label: "Напряжение",
          value: "220 В"
        },
        {
          label: "Вид топлива",
          value: "Бензин"
        },
        {
          label: "Стартер",
          value: "Ручной стартер/Электростартер"
        },
        {
          label: "Мощность",
          value: "9кВт"
        }
      ]
    },
    {
      id: "yelektrogenerator-denzel-ps-90ed-3-9kvt-230v-400v-946944",
      articul: "128930",
      title: "Электрогенератор DENZEL PS 90ED-3 9кВт 230В/400В 946944",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/3b1872bc-f100-11ea-9392-002590ba8283_78e6a342-f116-11ea-9392-002590ba8283-303x303.jpeg",
      price: 89700,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Denzel",
        tip: "Электрогенератор",
        napryazhenie: "220 В",
        vid: "Бензин",
        starter: "Ручной стартер/Электростартер",
        moshhnost: "9кВт"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Denzel"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип товара",
          value: "Электрогенератор"
        },
        {
          label: "Напряжение",
          value: "220 В"
        },
        {
          label: "Вид топлива",
          value: "Бензин"
        },
        {
          label: "Стартер",
          value: "Ручной стартер/Электростартер"
        },
        {
          label: "Мощность",
          value: "9кВт"
        }
      ]
    },
    {
      id: "yelektrogenerator-denzel-ps-95ea-pro-95kvt-230v-946935",
      articul: "416295",
      title: "Электрогенератор DENZEL PS 95EA-PRO 9,5кВт 230В 946935",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/345221a0-be54-11ed-93eb-002590ba8282_bfd81fa1-c7f2-11ed-93ec-002590ba8282-303x303.jpeg",
      price: 95000,
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
      id: "yelektrogenerator-dy11000lkh-9kvt-64-1-72-220v",
      articul: "411165",
      title: "Электрогенератор DY11000LХ 9кВт 64/1/72 220В",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/b30ced2e-14b0-11ed-93d0-002590ba8282_cec18d96-c7f2-11ed-93ec-002590ba8282-372x248.jpeg",
      price: 108000,
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
