import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/instrument/yelektroinstrument/generatory-i-komplektuyushhie/komplektuyushhie-dlya-generatorov/ */
export const komplektuyushhieDlyaGeneratorovListing: CatalogListingData = {
  path: "instrument/yelektroinstrument/generatory-i-komplektuyushhie/komplektuyushhie-dlya-generatorov",
  title: "Комплектующие для генераторов",
  totalCountLabel: "26 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Center",
        "Delta",
        "Denzel",
        "Huter"
      ],
      truncate: false
    },
    {
      id: "moshhnost",
      title: "Мощность",
      options: [
        "0.36",
        "4.5Ач",
        "10Ач",
        "12Ач",
        "600В (Вт)"
      ],
      truncate: false
    },
    {
      id: "napryazhenie",
      title: "Напряжение",
      options: [
        "6В",
        "12В",
        "220 В"
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
        "Аккумулятор",
        "Блок",
        "Клещи"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "akb-12v-26ah-security-force-sf-1226",
      articul: "433732",
      title: "АКБ 12V/26Ah Security Force SF 1226",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 6700,
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
      id: "akb-12v-12ah-huter",
      articul: "012944",
      title: "АКБ 12В 12Ah Huter",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/1f631dec-3f32-11ea-a9ec-c8600046bc56_8327d148-a01b-11ea-937f-002590ba8283-303x303.jpeg",
      price: 3800,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Германия",
        brend: "Huter",
        tip: "Аккумулятор",
        napryazhenie: "12В",
        moshhnost: "12Ач"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Германия"
        },
        {
          label: "Бренд",
          value: "Huter"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип товара",
          value: "Аккумулятор"
        },
        {
          label: "Напряжение",
          value: "12В"
        },
        {
          label: "Мощность",
          value: "12Ач"
        }
      ]
    },
    {
      id: "akb-12v-12ah-siltech-gel",
      articul: "433602",
      title: "АКБ 12В 12Ah SILTECH GEL",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 3700,
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
      id: "akkumulyator-delta-6v-45-a-ch",
      articul: "129368",
      title: "Аккумулятор DELTA 6В/4,5 А/ч",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/0a83e547-ff2d-11ea-9392-002590ba8283_4cd12e48-c5bd-11eb-93ac-002590ba8282-303x303.jpeg",
      price: 650,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Delta",
        tip: "Аккумулятор",
        napryazhenie: "6В",
        vid: "Самозаряд",
        moshhnost: "4.5Ач"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Delta"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип товара",
          value: "Аккумулятор"
        },
        {
          label: "Напряжение",
          value: "6В"
        },
        {
          label: "Вид топлива",
          value: "Самозаряд"
        },
        {
          label: "Мощность",
          value: "4.5Ач"
        }
      ]
    },
    {
      id: "batareya-akkum-12v-17ach-nm-12-17-so-srokom-sluzhb",
      articul: "419878",
      title: "Батарея аккум 12В 17Ач НМ-12-17 со сроком службы 6-8 лет",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/10/419878-294x303.jpeg",
      price: 6200,
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
      id: "blok-avtomatiki-energomatik-ps-115-denzel-946714",
      articul: "204258",
      title: "Блок автоматики ENERGOMATIK PS 115 Denzel 946714",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/1a8650ea-6b6b-11eb-93a5-002590ba8282_774b3d48-6cf2-11eb-93a5-002590ba8282-243x303.jpeg",
      price: 21600,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Denzel",
        tip: "Блок",
        napryazhenie: "220 В",
        vid: "Самозаряд",
        moshhnost: "10Ач"
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
          label: "Тип товара",
          value: "Блок"
        },
        {
          label: "Напряжение",
          value: "220 В"
        },
        {
          label: "Вид топлива",
          value: "Самозаряд"
        },
        {
          label: "Мощность",
          value: "10Ач"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "blok-zashhity-yelektroseti-albatros-500-uc",
      articul: "014785",
      title: "Блок защиты электросети Альбатрос 500 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/85278198-bedd-11e6-9f67-c8600046bc56_8327d14b-a01b-11ea-937f-002590ba8283-242x303.jpeg",
      price: 900,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        napryazhenie: "220 В",
        moshhnost: "0.36"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Напряжение",
          value: "220 В"
        },
        {
          label: "Мощность",
          value: "0.36"
        }
      ]
    },
    {
      id: "kleshhi-tokoizmeritelnye-center-250",
      articul: "407041",
      title: "Клещи токоизмерительные CENTER 250",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/37820fc9-8330-11ec-93c5-002590ba8282_054f03d5-8333-11ec-93c5-002590ba8282-303x303.jpeg",
      price: 13400,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Center",
        tip: "Клещи",
        napryazhenie: "220 В",
        moshhnost: "600В (Вт)"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Center"
        },
        {
          label: "Тип товара",
          value: "Клещи"
        },
        {
          label: "Напряжение",
          value: "220 В"
        },
        {
          label: "Мощность",
          value: "600В (Вт)"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "knopka-zazhiganiya",
      articul: "027732",
      title: "Кнопка зажигания",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/027732-334x303.jpeg",
      price: 200,
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
      id: "kozhukh-makhovika-pod-starter",
      articul: "030905",
      title: "Кожух маховика под стартер",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/4e5c5b21-9493-11e8-bee0-c8600046bc53_541e5a1d-1bfd-11ee-9400-002590ba8282-372x248.jpeg",
      price: 500,
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
      id: "korpus-vozdushnogo-filtra-v-sbore",
      articul: "032835",
      title: "Корпус воздушного фильтра в сборе",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/032835-337x303.jpeg",
      price: 500,
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
      id: "pompa-dlya-generatora",
      articul: "417321",
      title: "Помпа для генератора",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/10/417321-289x303.jpeg",
      price: 29500,
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
