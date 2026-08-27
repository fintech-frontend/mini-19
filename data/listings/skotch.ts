import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/instrument/shtukaturno-otdelochnye-materialy/skotch/ */
export const skotchListing: CatalogListingData = {
  path: "instrument/shtukaturno-otdelochnye-materialy/skotch",
  title: "Скотч",
  totalCountLabel: "189 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "SmartFix",
        "Stayer"
      ],
      truncate: false
    },
    {
      id: "dlina",
      title: "Длина",
      options: [
        "3см",
        "10м",
        "20м",
        "25м",
        "40м",
        "40см"
      ],
      truncate: false
    },
    {
      id: "sostav",
      title: "Состав материала",
      options: [
        "Бумага",
        "Лента"
      ],
      truncate: false
    },
    {
      id: "tip",
      title: "Тип материала",
      options: [
        "Двусторонняя клейкая лента",
        "Клейкая лента",
        "Малярная лента",
        "Строительный скотч"
      ],
      truncate: false
    },
    {
      id: "tsvet",
      title: "Цвет",
      options: [
        "Белый",
        "Желтый",
        "Молочно-белый",
        "Прозрачный"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "kvadraty-dlya-mnogoraz-montazha-3kh3-sm-12-sht-sm",
      articul: "402911",
      title: "Квадраты для многораз монтажа 3х3 см 12 шт SMN3030T",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/51ef4a0f-ec70-11eb-93b6-002590ba8282_9e23c5d2-2e19-11ee-9406-002590ba8282-227x303.png",
      price: 288,
      inStock: true,
      quickBuy: true,
      filterValues: {
        dlina: "3см",
        brend: "SmartFix",
        tip: "Строительный скотч",
        sostav: "Бумага"
      },
      specs: [
        {
          label: "Длина",
          value: "3см"
        },
        {
          label: "Бренд",
          value: "SmartFix"
        },
        {
          label: "Тип материала",
          value: "Строительный скотч"
        },
        {
          label: "Состав материала",
          value: "Бумага"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "lenta-stayer-master-malyarnaya-krepovaya-25mmx40m-1211-25",
      articul: "036638",
      title: "Лента STAYER MASTER малярная креповая 25ммx40м 1211-25",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/33d391fe-30c6-11e2-a1f1-c8600046bc56_ca03f6ca-a028-11ea-9380-002590ba8283-303x303.jpeg",
      price: 150,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        dlina: "40см",
        brend: "Stayer",
        tsvet: "Молочно-белый",
        tip: "Малярная лента",
        sostav: "Лента"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Длина",
          value: "40см"
        },
        {
          label: "Бренд",
          value: "Stayer"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Молочно-белый"
        },
        {
          label: "Тип материала",
          value: "Малярная лента"
        },
        {
          label: "Состав материала",
          value: "Лента"
        }
      ]
    },
    {
      id: "lenta-stayer-master-malyarnaya-krepovaya-38mmx40m-1211-38",
      articul: "036639",
      title: "Лента STAYER MASTER малярная креповая 38ммx40м 1211-38",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/33d39200-30c6-11e2-a1f1-c8600046bc56_ca03f6cb-a028-11ea-9380-002590ba8283-335x303.jpeg",
      price: 230,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        dlina: "40м",
        brend: "Stayer",
        tsvet: "Белый",
        sostav: "Бумага"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Длина",
          value: "40м"
        },
        {
          label: "Бренд",
          value: "Stayer"
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
          label: "Состав материала",
          value: "Бумага"
        }
      ]
    },
    {
      id: "lenta-stayer-master-malyarnaya-krepovaya-48mmx20m-12111-50",
      articul: "036640",
      title: "Лента STAYER MASTER малярная креповая 48ммx20м 12111-50",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/8d748098-4939-11e4-84d1-c8600046bc56_ca03f6cc-a028-11ea-9380-002590ba8283-335x303.jpeg",
      price: 210,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        dlina: "20м",
        brend: "Stayer",
        tsvet: "Белый",
        sostav: "Бумага"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Длина",
          value: "20м"
        },
        {
          label: "Бренд",
          value: "Stayer"
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
          label: "Состав материала",
          value: "Бумага"
        }
      ]
    },
    {
      id: "lenta-stayer-master-malyarnaya-krepovaya-50mmx40m-1211-50",
      articul: "036641",
      title: "Лента STAYER MASTER малярная креповая 50ммx40м 1211-50",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/33d39202-30c6-11e2-a1f1-c8600046bc56_ca03f6cd-a028-11ea-9380-002590ba8283-335x303.jpeg",
      price: 315,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        dlina: "40м",
        brend: "Stayer",
        tsvet: "Белый",
        tip: "Малярная лента",
        sostav: "Бумага"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Длина",
          value: "40м"
        },
        {
          label: "Бренд",
          value: "Stayer"
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
          label: "Тип материала",
          value: "Малярная лента"
        },
        {
          label: "Состав материала",
          value: "Бумага"
        }
      ]
    },
    {
      id: "lenta-stayer-profi-2-kh-storon-kl-armir-tkan-38mmkh05m-1221",
      articul: "036642",
      title: "Лента STAYER PROFI 2-х сторон кл армир ткань 38ммх0,5м 1221-38-05",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/33d39204-30c6-11e2-a1f1-c8600046bc56_9e23c5af-2e19-11ee-9406-002590ba8282-303x303.jpeg",
      price: 35,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "lenta-stayer-profi-2-kh-storon-kl-armir-tkan-38mmkh010m-1221",
      articul: "036643",
      title: "Лента STAYER PROFI 2-х сторон кл армир ткань 38ммх010м 1221-38-10(1217-38-10)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/33d39206-30c6-11e2-a1f1-c8600046bc56_ca03f6ce-a028-11ea-9380-002590ba8283-372x259.jpeg",
      price: 270,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        dlina: "10м",
        brend: "Stayer",
        tsvet: "Прозрачный",
        tip: "Двусторонняя клейкая лента",
        sostav: "Лента"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Длина",
          value: "10м"
        },
        {
          label: "Бренд",
          value: "Stayer"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Прозрачный"
        },
        {
          label: "Тип материала",
          value: "Двусторонняя клейкая лента"
        },
        {
          label: "Состав материала",
          value: "Лента"
        }
      ]
    },
    {
      id: "lenta-stayer-profi-2-kh-storon-kl-armir-tkan-48mmx25m-1217-25",
      articul: "036644",
      title: "Лента STAYER PROFI 2-х сторон кл армир ткань 48ммx25м 1217-25",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/33d39208-30c6-11e2-a1f1-c8600046bc56_ca03f6cf-a028-11ea-9380-002590ba8283-332x303.jpeg",
      price: 725,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        dlina: "25м",
        brend: "Stayer",
        tsvet: "Желтый",
        tip: "Клейкая лента",
        sostav: "Лента"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Длина",
          value: "25м"
        },
        {
          label: "Бренд",
          value: "Stayer"
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
          label: "Тип материала",
          value: "Клейкая лента"
        },
        {
          label: "Состав материала",
          value: "Лента"
        }
      ]
    },
    {
      id: "lenta-stayer-profi-2-kh-storon-kl-armir-tkan-50mmx10m-1217-10",
      articul: "036645",
      title: "Лента STAYER PROFI 2-х сторон кл армир ткань 50ммx10м 1217-10",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/33d3920a-30c6-11e2-a1f1-c8600046bc56_9e23c5b0-2e19-11ee-9406-002590ba8282-303x303.jpeg",
      price: 190,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        tsvet: "Желтый"
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
          value: "Желтый"
        }
      ]
    },
    {
      id: "lenta-stayer-profi-2-kh-storon-kleykaya-50mmx25m-1221-50-25",
      articul: "036646",
      title: "Лента STAYER PROFI 2-х сторон клейкая 50ммx25м 1221-50-25",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/33d3920c-30c6-11e2-a1f1-c8600046bc56_9e23c5b1-2e19-11ee-9406-002590ba8282-301x303.jpeg",
      price: 602,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        dlina: "25м",
        brend: "Stayer",
        tsvet: "Прозрачный",
        sostav: "Лента"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Длина",
          value: "25м"
        },
        {
          label: "Бренд",
          value: "Stayer"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Прозрачный"
        },
        {
          label: "Состав материала",
          value: "Лента"
        }
      ]
    },
    {
      id: "lenta-stayer-profi-v-yel-dlya-s-p-zheltyy-50mmx25m-12123-50-25",
      articul: "036647",
      title: "Лента STAYER PROFI в/эл для с/п желтый 50ммx25м 12123-50-25",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/036647-325x303.jpeg",
      price: 110,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        dlina: "25м",
        tsvet: "Желтый"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Длина",
          value: "25м"
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
      id: "lenta-stayer-profi-malyarnaya-vodostoykaya-re-50mmx25m-121",
      articul: "036648",
      title: "Лента STAYER PROFI малярная водостойкая РЕ 50ммx25м 12120-50-25",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/036648-327x303.jpeg",
      price: 106,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        dlina: "25м"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Длина",
          value: "25м"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    }
  ]
};
