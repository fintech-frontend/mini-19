import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/instrument/yelektroinstrument/raskhodnye-materialy-i-osnastka-dlya-yel/bury-i-sverla/bury/ */
export const buryListing: CatalogListingData = {
  path: "instrument/yelektroinstrument/raskhodnye-materialy-i-osnastka-dlya-yel/bury-i-sverla/bury",
  title: "Буры",
  totalCountLabel: "230 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Волжский",
        "Bosch",
        "CUTOP"
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
      id: "diametr",
      title: "Диаметр",
      options: [
        "8мм",
        "10мм",
        "12мм",
        "18мм"
      ],
      truncate: false
    },
    {
      id: "dlina",
      title: "Длина",
      options: [
        "160мм",
        "210мм",
        "260мм",
        "310мм",
        "460мм",
        "540мм",
        "600мм"
      ],
      truncate: true
    },
    {
      id: "tip-hvostovika",
      title: "Тип хвостовика",
      options: [
        "SDS-max",
        "SDS-plus"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "bur-18kh540-mm-sds-max-bosch-germaniya",
      articul: "406466",
      title: "Бур 18х540 мм SDS-max Bosch Германия",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/406466-311x303.jpeg",
      price: 4150,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Германия",
        brend: "Bosch",
        "tip-hvostovika": "SDS-max",
        diametr: "18мм",
        dlina: "540мм",
        opisanie: "Профессиональный бур для перфораторов SDS-max. Высокое качество и долговечность немецкого производства."
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Германия"
        },
        {
          label: "Бренд",
          value: "Bosch"
        },
        {
          label: "Тип хвостовика",
          value: "SDS-max"
        },
        {
          label: "Диаметр",
          value: "18мм"
        },
        {
          label: "Длина",
          value: "540мм"
        },
        {
          label: "Описание",
          value: "Профессиональный бур для перфораторов SDS-max. Высокое качество и долговечность немецкого производства."
        }
      ]
    },
    {
      id: "bur-8kh160-mm-sds-volzhskiy",
      articul: "406452",
      title: "Бур 8х160 мм SDS + Волжский",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/04/4064521-337x303.jpeg",
      price: 98,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Волжский",
        "tip-hvostovika": "SDS-plus",
        diametr: "8мм",
        dlina: "160мм",
        opisanie: "Надежный бур для бытового и профессионального использования. Проверенное качество."
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Волжский"
        },
        {
          label: "Тип хвостовика",
          value: "SDS-plus"
        },
        {
          label: "Диаметр",
          value: "8мм"
        },
        {
          label: "Длина",
          value: "160мм"
        },
        {
          label: "Описание",
          value: "Надежный бур для бытового и профессионального использования. Проверенное качество."
        }
      ]
    },
    {
      id: "bur-sds-cutop-10kh160-49-10160",
      articul: "420733",
      title: "Бур SDS + CUTOP 10х160 49-10160",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/04/4207332-337x303.jpeg",
      price: 152,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "CUTOP",
        "tip-hvostovika": "SDS-plus",
        diametr: "10мм",
        dlina: "160мм",
        opisanie: "Качественный бур для ежедневных работ. Оптимальное соотношение цены и качества."
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "CUTOP"
        },
        {
          label: "Тип хвостовика",
          value: "SDS-plus"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Диаметр",
          value: "10мм"
        },
        {
          label: "Длина",
          value: "160мм"
        },
        {
          label: "Описание",
          value: "Качественный бур для ежедневных работ. Оптимальное соотношение цены и качества."
        }
      ]
    },
    {
      id: "bur-sds-cutop-10kh210-49-10210",
      articul: "420734",
      title: "Бур SDS + CUTOP 10х210 49-10210",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/04/420734-337x303.jpeg",
      price: 180,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "CUTOP",
        "tip-hvostovika": "SDS-plus",
        diametr: "10мм",
        dlina: "210мм",
        opisanie: "Универсальный бур средней длины. Подходит для большинства монтажных задач."
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "CUTOP"
        },
        {
          label: "Тип хвостовика",
          value: "SDS-plus"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Диаметр",
          value: "10мм"
        },
        {
          label: "Длина",
          value: "210мм"
        },
        {
          label: "Описание",
          value: "Универсальный бур средней длины. Подходит для большинства монтажных задач."
        }
      ]
    },
    {
      id: "bur-sds-cutop-10kh260-49-10260",
      articul: "420735",
      title: "Бур SDS + CUTOP 10х260 49-10260",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/04/4207351-337x303.jpeg",
      price: 235,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "CUTOP",
        "tip-hvostovika": "SDS-plus",
        diametr: "10мм",
        dlina: "260мм",
        opisanie: "Бур для глубокого сверления. Эффективный отвод пыли и высокая точность."
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "CUTOP"
        },
        {
          label: "Тип хвостовика",
          value: "SDS-plus"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Диаметр",
          value: "10мм"
        },
        {
          label: "Длина",
          value: "260мм"
        },
        {
          label: "Описание",
          value: "Бур для глубокого сверления. Эффективный отвод пыли и высокая точность."
        }
      ]
    },
    {
      id: "bur-sds-cutop-10kh310-49-10310",
      articul: "420736",
      title: "Бур SDS + CUTOP 10х310 49-10310",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/04/420736-337x303.jpeg",
      price: 230,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "CUTOP",
        "tip-hvostovika": "SDS-plus",
        diametr: "10мм",
        dlina: "310мм",
        opisanie: "Длинный бур для профессионального использования. Надежность и долговечность."
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "CUTOP"
        },
        {
          label: "Тип хвостовика",
          value: "SDS-plus"
        },
        {
          label: "Диаметр",
          value: "10мм"
        },
        {
          label: "Длина",
          value: "310мм"
        },
        {
          label: "Описание",
          value: "Длинный бур для профессионального использования. Надежность и долговечность."
        }
      ]
    },
    {
      id: "bur-sds-cutop-10kh460-49-10460",
      articul: "420737",
      title: "Бур SDS + CUTOP 10х460 49-10460",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/04/4207373-337x303.jpeg",
      price: 390,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "CUTOP",
        "tip-hvostovika": "SDS-plus",
        diametr: "10мм",
        dlina: "460мм",
        opisanie: "Бур увеличенной длины для сложных задач. Прочная конструкция."
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "CUTOP"
        },
        {
          label: "Тип хвостовика",
          value: "SDS-plus"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Диаметр",
          value: "10мм"
        },
        {
          label: "Длина",
          value: "460мм"
        },
        {
          label: "Описание",
          value: "Бур увеличенной длины для сложных задач. Прочная конструкция."
        }
      ]
    },
    {
      id: "bur-sds-cutop-10kh600-49-10600",
      articul: "420738",
      title: "Бур SDS + CUTOP 10х600 49-10600",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/04/420738-337x303.jpeg",
      price: 495,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "CUTOP",
        "tip-hvostovika": "SDS-plus",
        diametr: "10мм",
        dlina: "600мм",
        opisanie: "Сверхдлинный бур для специальных работ. Максимальная глубина сверления."
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "CUTOP"
        },
        {
          label: "Тип хвостовика",
          value: "SDS-plus"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Диаметр",
          value: "10мм"
        },
        {
          label: "Длина",
          value: "600мм"
        },
        {
          label: "Описание",
          value: "Сверхдлинный бур для специальных работ. Максимальная глубина сверления."
        }
      ]
    },
    {
      id: "bur-sds-cutop-12kh160-49-12160",
      articul: "420739",
      title: "Бур SDS + CUTOP 12х160 49-12160 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/04/420739-337x303.jpeg",
      price: 11461,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "CUTOP",
        "tip-hvostovika": "SDS-plus",
        diametr: "12мм",
        dlina: "160мм",
        opisanie: "Компактный бур для точного монтажа. Качественное исполнение."
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "CUTOP"
        },
        {
          label: "Тип хвостовика",
          value: "SDS-plus"
        },
        {
          label: "Диаметр",
          value: "12мм"
        },
        {
          label: "Длина",
          value: "160мм"
        },
        {
          label: "Описание",
          value: "Компактный бур для точного монтажа. Качественное исполнение."
        }
      ]
    },
    {
      id: "bur-sds-cutop-12kh210-49-12210",
      articul: "420740",
      title: "Бур SDS + CUTOP 12х210 49-12210",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/04/420740-337x303.jpeg",
      price: 221,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "CUTOP",
        "tip-hvostovika": "SDS-plus",
        diametr: "12мм",
        dlina: "210мм",
        opisanie: "Универсальный бур для повседневного использования. Хорошая балансировка."
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "CUTOP"
        },
        {
          label: "Тип хвостовика",
          value: "SDS-plus"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Диаметр",
          value: "12мм"
        },
        {
          label: "Длина",
          value: "210мм"
        },
        {
          label: "Описание",
          value: "Универсальный бур для повседневного использования. Хорошая балансировка."
        }
      ]
    },
    {
      id: "bur-sds-cutop-12kh260-49-12260",
      articul: "420741",
      title: "Бур SDS + CUTOP 12х260 49-12260",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/04/420741-337x303.jpeg",
      price: 225,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "CUTOP",
        "tip-hvostovika": "SDS-plus",
        diametr: "12мм",
        dlina: "260мм",
        opisanie: "Надежный бур для профессионального монтажа. Долгий срок службы."
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "CUTOP"
        },
        {
          label: "Тип хвостовика",
          value: "SDS-plus"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Диаметр",
          value: "12мм"
        },
        {
          label: "Длина",
          value: "260мм"
        },
        {
          label: "Описание",
          value: "Надежный бур для профессионального монтажа. Долгий срок службы."
        }
      ]
    },
    {
      id: "bur-sds-cutop-12kh310-49-12310",
      articul: "420742",
      title: "Бур SDS + CUTOP 12х310 49-12310",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/04/4207421-337x303.jpeg",
      price: 242,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "CUTOP",
        "tip-hvostovika": "SDS-plus",
        diametr: "12мм",
        dlina: "310мм",
        opisanie: "Длинный бур для глубокого сверления. Стабильная работа в тяжелых условиях."
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "CUTOP"
        },
        {
          label: "Тип хвостовика",
          value: "SDS-plus"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Диаметр",
          value: "12мм"
        },
        {
          label: "Длина",
          value: "310мм"
        },
        {
          label: "Описание",
          value: "Длинный бур для глубокого сверления. Стабильная работа в тяжелых условиях."
        }
      ]
    }
  ]
};
