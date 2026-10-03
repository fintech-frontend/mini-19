import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/otdelochnye-materialy/lakokrasochnye-materialy/dobavki-v-beton/ */
export const dobavkiVBetonListing: CatalogListingData = {
  path: "otdelochnye-materialy/lakokrasochnye-materialy/dobavki-v-beton",
  title: "Добавки в бетон",
  totalCountLabel: "30 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Оптимист",
        "Uni-Bet"
      ],
      truncate: false
    },
    {
      id: "tsvet",
      title: "Цвет",
      options: [
        "Желтый",
        "Коричневый",
        "Красный",
        "Чёрный"
      ],
      truncate: false
    },
    {
      id: "ves",
      title: "Вес",
      options: [
        "0.5 кг",
        "4,5",
        "5 л",
        "10 л",
        "700 г"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "krasitel-sukhoy-chernyy-25-kg",
      articul: "033696",
      title: "Краситель сухой черный 2,5 кг",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/3bbbb946-9390-11e2-ac56-c8600046bc56_6972cc61-9beb-11ea-937e-002590ba8283-271x303.jpeg",
      price: 1260,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Uni-Bet",
        tsvet: "Чёрный"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Uni-Bet"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Чёрный"
        }
      ]
    },
    {
      id: "plastifikator-s-3-10-l",
      articul: "400571",
      title: "Пластификатор С-3 10 л",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/ca994309-9e9c-11eb-93ab-002590ba8282_4b517eaf-76b3-11ec-93c5-002590ba8282.jpeg",
      price: 550,
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
      id: "fibrovolokno-12mm-700gr",
      articul: "076733",
      title: "Фиброволокно (12мм) 700гр",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/68e948f2-cad6-11e4-9433-c8600046bc56_6373d15b-9beb-11ea-937e-002590ba8283-303x303.jpeg",
      price: 455,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Uni-Bet",
        ves: "700 г"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Uni-Bet"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Вес",
          value: "700 г"
        }
      ]
    },
    {
      id: "vodostop-beton-3-kg",
      articul: "017539",
      title: "Водостоп бетон 3 кг",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/8e069b46-30c4-11e2-a1f1-c8600046bc56_6972cc6b-9beb-11ea-937e-002590ba8283-257x303.jpeg",
      price: 610,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        }
      ]
    },
    {
      id: "vodostop-beton-45-kg",
      articul: "017540",
      title: "Водостоп бетон 4,5 кг",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/30ab09b8-5b8f-11e5-a391-c8600046bc56_6373d15a-9beb-11ea-937e-002590ba8283-257x303.jpeg",
      price: 930,
      inStock: true,
      quickBuy: true,
      filterValues: {
        ves: "4,5",
        strana: "Россия",
        brend: "Uni-Bet"
      },
      specs: [
        {
          label: "Вес",
          value: "4,5"
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
          label: "Бренд",
          value: "Uni-Bet"
        }
      ]
    },
    {
      id: "dobavka-plastificiruyushhaya-optiplast",
      articul: "007457",
      title: "Добавка пластифицирующая Оптипласт для бетонов и стр р-ров 10л C409",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/f13a438a-61f7-11e5-a391-c8600046bc56_6373d159-9beb-11ea-937e-002590ba8283-372x279.jpeg",
      price: 1005,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Оптимист",
        ves: "10 л"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Оптимист"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Вес",
          value: "10 л"
        }
      ]
    },
    {
      id: "dobavka-plastificiruyushhaya-optiplast-2",
      articul: "007458",
      title: "Добавка пластифицирующая Оптипласт для бетонов и стр р-ров 5л C409",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/082aa64d-61f8-11e5-a391-c8600046bc56_6373d158-9beb-11ea-937e-002590ba8283-372x279.jpeg",
      price: 595,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Оптимист",
        ves: "5 л"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Оптимист"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Вес",
          value: "5 л"
        }
      ]
    },
    {
      id: "krasitel-sukhoy-zheltyy-05-kg",
      articul: "033686",
      title: "Краситель сухой желтый 0,5 кг",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/38854085-f905-11e2-8211-c8600046bc56_6972cc60-9beb-11ea-937e-002590ba8283-271x303.jpeg",
      price: 395,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Uni-Bet",
        tsvet: "Желтый",
        ves: "0.5 кг"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Uni-Bet"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Желтый"
        },
        {
          label: "Вес",
          value: "0.5 кг"
        }
      ]
    },
    {
      id: "krasitel-sukhoy-zheltyy-25-kg",
      articul: "033687",
      title: "Краситель сухой желтый 2,5 кг",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/3bbbb93c-9390-11e2-ac56-c8600046bc56_6972cc65-9beb-11ea-937e-002590ba8283-271x303.jpeg",
      price: 1305,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        tsvet: "Желтый"
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
          value: "Желтый"
        }
      ]
    },
    {
      id: "krasitel-sukhoy-korichnevyy-05-kg",
      articul: "033690",
      title: "Краситель сухой коричневый 0,5 кг",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/4211e5c2-f905-11e2-8211-c8600046bc56_6972cc5f-9beb-11ea-937e-002590ba8283-271x303.jpeg",
      price: 385,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Uni-Bet",
        tsvet: "Коричневый",
        ves: "0.5 кг"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Uni-Bet"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Коричневый"
        },
        {
          label: "Вес",
          value: "0.5 кг"
        }
      ]
    },
    {
      id: "krasitel-sukhoy-korichnevyy-25-kg",
      articul: "033691",
      title: "Краситель сухой коричневый 2,5 кг",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/3bbbb940-9390-11e2-ac56-c8600046bc56_6972cc63-9beb-11ea-937e-002590ba8283-271x303.jpeg",
      price: 1260,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Uni-Bet",
        tsvet: "Коричневый"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Uni-Bet"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Коричневый"
        }
      ]
    },
    {
      id: "krasitel-sukhoy-krasnyy-05-kg",
      articul: "033692",
      title: "Краситель сухой красный 0,5 кг",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/56da0944-f905-11e2-8211-c8600046bc56_6972cc5d-9beb-11ea-937e-002590ba8283-271x303.jpeg",
      price: 385,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Uni-Bet",
        tsvet: "Красный",
        ves: "0.5 кг"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Uni-Bet"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Красный"
        },
        {
          label: "Вес",
          value: "0.5 кг"
        }
      ]
    }
  ]
};
