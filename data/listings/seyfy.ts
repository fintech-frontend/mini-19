import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/tovary-dlya-doma-sada-i-ogoroda/tovary-dlya-bezopastnosti/seyfy/ */
export const seyfyListing: CatalogListingData = {
  path: "tovary-dlya-doma-sada-i-ogoroda/tovary-dlya-bezopastnosti/seyfy",
  title: "Сейфы",
  totalCountLabel: "120 товаров",
  filterFields: [
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
      id: "tip",
      title: "Тип замка",
      options: [
        "Ключевой",
        "Магнитный",
        "Электронный"
      ],
      truncate: false
    },
    {
      id: "tsvet",
      title: "Цвет",
      options: [
        "Белый",
        "Чёрный"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "aptechka-amd-39",
      articul: "013206",
      title: "Аптечка AMD-39",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/03/013206-308x303.jpeg",
      price: 1150,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        tsvet: "Белый",
        tip: "Ключевой"
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
          label: "Цвет",
          value: "Белый"
        },
        {
          label: "Тип замка",
          value: "Ключевой"
        }
      ]
    },
    {
      id: "aptechka-amd-39-g-stekl-dver",
      articul: "013207",
      title: "Аптечка AMD-39 G (стекл дверь)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/03/013207-283x303.jpeg",
      price: 1550,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        tsvet: "Белый",
        tip: "Ключевой"
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
          label: "Цвет",
          value: "Белый"
        },
        {
          label: "Тип замка",
          value: "Ключевой"
        }
      ]
    },
    {
      id: "aptechka-am-1",
      articul: "013209",
      title: "Аптечка АМ-1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/067d70bd-fcba-11e5-a26e-c8600046bc56_20a705ad-a02a-11ea-9380-002590ba8283-303x303.jpeg",
      price: 1070,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        tsvet: "Белый",
        tip: "Ключевой"
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
          label: "Цвет",
          value: "Белый"
        },
        {
          label: "Тип замка",
          value: "Ключевой"
        }
      ]
    },
    {
      id: "aptechka-au-1",
      articul: "013210",
      title: "Аптечка АУ-1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/e37e7f33-0d5f-11e8-a3d2-c8600046bc56_20a705ae-a02a-11ea-9380-002590ba8283-303x303.jpeg",
      price: 1320,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        tsvet: "Белый",
        tip: "Ключевой"
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
          label: "Цвет",
          value: "Белый"
        },
        {
          label: "Тип замка",
          value: "Ключевой"
        }
      ]
    },
    {
      id: "aptechka-2-bez-stekla",
      articul: "5560",
      title: "Аптечка-2 без стекла",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 1300,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        tsvet: "Белый",
        tip: "Магнитный"
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
          label: "Цвет",
          value: "Белый"
        },
        {
          label: "Тип замка",
          value: "Магнитный"
        }
      ]
    },
    {
      id: "aptechka-3-so-steklom",
      articul: "205080",
      title: "Аптечка-3 со стеклом",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/03/205080-303x303.jpeg",
      price: 1320,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Onix",
        tsvet: "Белый",
        ves: "3кг",
        osnovnoj: "Металл",
        tip: "Магнитный"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Onix"
        },
        {
          label: "Цвет",
          value: "Белый"
        },
        {
          label: "Вес",
          value: "3кг"
        },
        {
          label: "Основной материал",
          value: "Металл"
        },
        {
          label: "Тип замка",
          value: "Магнитный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "seyf-btv-promo-2",
      articul: "065638",
      title: "Сейф BTV Promo-2",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/421ecc1b-1187-11e3-a27a-c8600046bc56_20a705af-a02a-11ea-9380-002590ba8283-372x279.jpeg",
      price: 2975,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        tsvet: "Чёрный",
        tip: "Электронный"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Чёрный"
        },
        {
          label: "Тип замка",
          value: "Электронный"
        }
      ]
    },
    {
      id: "seyf-new-25",
      articul: "065639",
      title: "Сейф New-25",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/69676409-1186-11e3-a27a-c8600046bc56_20a705b0-a02a-11ea-9380-002590ba8283-372x259.jpeg",
      price: 4150,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        tsvet: "Чёрный",
        tip: "Электронный"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Чёрный"
        },
        {
          label: "Тип замка",
          value: "Электронный"
        }
      ]
    },
    {
      id: "seyf-new-30",
      articul: "065640",
      title: "Сейф New-30",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/7506dc20-1186-11e3-a27a-c8600046bc56_20a705b1-a02a-11ea-9380-002590ba8283-372x279.jpeg",
      price: 8450,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        tsvet: "Чёрный",
        tip: "Электронный"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Чёрный"
        },
        {
          label: "Тип замка",
          value: "Электронный"
        }
      ]
    },
    {
      id: "seyf-ntl-24m",
      articul: "065641",
      title: "Сейф NTL 24М",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/c90ba6cd-0a5c-11e3-a27a-c8600046bc56_20a705b2-a02a-11ea-9380-002590ba8283-372x286.jpeg",
      price: 6760,
      inStock: false,
      quickBuy: true,
      filterValues: {
        tip: "Ключевой"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип замка",
          value: "Ключевой"
        }
      ]
    },
    {
      id: "seyf-sft-17-en",
      articul: "065642",
      title: "Сейф SFT-17 EN",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/d5098878-7a3b-11e5-9aea-c8600046bc56_20a705b3-a02a-11ea-9380-002590ba8283-303x303.jpeg",
      price: 5500,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        razmer: "17х23х17",
        osnovnoj: "Металл",
        tip: "Электронный"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Размер зубьев",
          value: "17х23х17"
        },
        {
          label: "Основной материал",
          value: "Металл"
        },
        {
          label: "Тип замка",
          value: "Электронный"
        }
      ]
    },
    {
      id: "seyf-sft-20-er",
      articul: "065643",
      title: "Сейф SFT-20 ER",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/e6230b10-7a3b-11e5-9aea-c8600046bc56_20a705b4-a02a-11ea-9380-002590ba8283-303x303.jpeg",
      price: 4050,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        osnovnoj: "Металл",
        tip: "Электронный"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Основной материал",
          value: "Металл"
        },
        {
          label: "Тип замка",
          value: "Электронный"
        }
      ]
    }
  ]
};
