import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/obshhestroitelnye-materialy/kirpich-i-bloki/kirpich/ */
export const kirpichListing: CatalogListingData = {
  path: "obshhestroitelnye-materialy/kirpich-i-bloki/kirpich",
  title: "Кирпич",
  totalCountLabel: "35 товаров",
  filterFields: [
    {
      id: "klass",
      title: "Класс прочности",
      options: [
        "F 35",
        "F 50"
      ],
      truncate: false
    },
    {
      id: "kolichestvo",
      title: "Количество на м²",
      options: [
        "168",
        "261"
      ],
      truncate: false
    },
    {
      id: "razmer",
      title: "Размер зубьев",
      options: [
        "250x120x65мм",
        "250x120x88мм"
      ],
      truncate: false
    },
    {
      id: "ves",
      title: "Вес",
      options: [
        "2 кг",
        "3,5 кг",
        "4 кг"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "kirpich-keramicheskiy-m-125-suvorovskiy-261-sh",
      articul: "026701",
      title: "Кирпич керамический М-125 Суворовский (261 шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/7f559cdb-30c4-11e2-a1f1-c8600046bc56_8117d972-9b6d-11ea-937e-002590ba8283-303x303.jpeg",
      price: 1850,
      inStock: true,
      quickBuy: true,
      filterValues: {
        ves: "3,5 кг",
        strana: "Россия",
        klass: "F 35",
        kolichestvo: "261",
        razmer: "250x120x65мм"
      },
      specs: [
        {
          label: "Вес",
          value: "3,5 кг"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Класс прочности",
          value: "М-125"
        },
        {
          label: "Класс морозостойкости",
          value: "F 35"
        },
        {
          label: "Количество на м²",
          value: "261"
        },
        {
          label: "Размер зубьев",
          value: "250x120x65мм"
        }
      ]
    },
    {
      id: "kirpich-vibropressovannyj-zheltyj-odinarnyj-akvarid-270sht",
      articul: "9595",
      title: "Кирпич вибропрессованный желтый одинарный Акварид (270шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 49,
      inStock: true,
      quickBuy: true,
      filterValues: {
        ves: "4 кг",
        strana: "Россия",
        klass: "F 50",
        kolichestvo: "168",
        razmer: "250x120x88мм"
      },
      specs: [
        {
          label: "Вес",
          value: "4 кг"
        },
        {
          label: "Максимальный размер скидки",
          value: "5"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Класс прочности",
          value: "М-150"
        },
        {
          label: "Класс морозостойкости",
          value: "F 50"
        },
        {
          label: "Количество на м²",
          value: "168"
        },
        {
          label: "Размер зубьев",
          value: "250x120x88мм"
        }
      ]
    },
    {
      id: "kirpich-vibropressovannyj-zheltyj-polovinka-akvarid-540sht",
      articul: "10715",
      title: "Кирпич вибропрессованный желтый половинка Акварид (540шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 29,
      inStock: true,
      quickBuy: true,
      filterValues: {
        ves: "2 кг",
        strana: "Россия",
        klass: "F 50",
        kolichestvo: "168",
        razmer: "250x120x88мм"
      },
      specs: [
        {
          label: "Вес",
          value: "2 кг"
        },
        {
          label: "Максимальный размер скидки",
          value: "5"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Класс прочности",
          value: "М-150"
        },
        {
          label: "Класс морозостойкости",
          value: "F 50"
        },
        {
          label: "Количество на м²",
          value: "168"
        },
        {
          label: "Размер зубьев",
          value: "250x120x88мм"
        }
      ]
    },
    {
      id: "kirpich-vibropressovannyj-kolormiks-volfram-odinarnyj-akvarid-270sht",
      articul: "8881",
      title: "Кирпич вибропрессованный Колормикс Вольфрам одинарный Акварид (270шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 0,
      inStock: false,
      quickBuy: true,
      filterValues: {
        ves: "3,5 кг",
        strana: "Россия",
        klass: "F 50",
        kolichestvo: "168",
        razmer: "250x120x88мм"
      },
      specs: [
        {
          label: "Вес",
          value: "3,5 кг"
        },
        {
          label: "Максимальный размер скидки",
          value: "5"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Класс прочности",
          value: "М-150"
        },
        {
          label: "Класс морозостойкости",
          value: "F 50"
        },
        {
          label: "Количество на м²",
          value: "168"
        },
        {
          label: "Размер зубьев",
          value: "250x120x88мм"
        }
      ]
    },
    {
      id: "kirpich-vibropressovannyj-kolormiks-volfram-polovinka-akvarid-540sht",
      articul: "8884",
      title: "Кирпич вибропрессованный Колормикс Вольфрам половинка Акварид (540шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 0,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        klass: "F 50",
        razmer: "250x120x88мм"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "5"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Класс прочности",
          value: "М-150"
        },
        {
          label: "Класс морозостойкости",
          value: "F 50"
        },
        {
          label: "Размер зубьев",
          value: "250x120x88мм"
        }
      ]
    },
    {
      id: "kirpich-vibropressovannyj-kolormiks-sero-belyj-odinarnyj-akvarid-270sht",
      articul: "12129",
      title: "Кирпич вибропрессованный Колормикс Серо-Белый одинарный Акварид (270шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 0,
      inStock: false,
      quickBuy: true,
      filterValues: {
        ves: "3,5 кг",
        strana: "Россия",
        klass: "F 50",
        kolichestvo: "168",
        razmer: "250x120x88мм"
      },
      specs: [
        {
          label: "Вес",
          value: "3,5 кг"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Класс прочности",
          value: "М-150"
        },
        {
          label: "Класс морозостойкости",
          value: "F 50"
        },
        {
          label: "Количество на м²",
          value: "168"
        },
        {
          label: "Размер зубьев",
          value: "250x120x88мм"
        }
      ]
    },
    {
      id: "kirpich-vibropressovannyj-kolormiks-cherno-belyj-kraft-odinarnyj-akvarid-270sht",
      articul: "8882",
      title: "Кирпич вибропрессованный Колормикс Черно-Белый Крафт одинарный Акварид (270шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 0,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        klass: "F 50",
        razmer: "250x120x88мм"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "5"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Класс прочности",
          value: "М-150"
        },
        {
          label: "Класс морозостойкости",
          value: "F 50"
        },
        {
          label: "Размер зубьев",
          value: "250x120x88мм"
        }
      ]
    },
    {
      id: "kirpich-vibropressovannyj-kolormiks-cherno-belyj-kraft-polovinka-akvarid-540sht",
      articul: "8883",
      title: "Кирпич вибропрессованный Колормикс Черно-Белый Крафт половинка Акварид (540шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 0,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        klass: "F 50",
        razmer: "250x120x88мм"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "5"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Класс прочности",
          value: "М-150"
        },
        {
          label: "Класс морозостойкости",
          value: "F 50"
        },
        {
          label: "Размер зубьев",
          value: "250x120x88мм"
        }
      ]
    },
    {
      id: "kirpich-vibropressovannyj-kolormiks-cherno-belyj-odinarnyj-akvarid-270sht",
      articul: "8427",
      title: "Кирпич вибропрессованный Колормикс Черно-Белый одинарный Акварид (270шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 65,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        klass: "F 50",
        razmer: "250x120x88мм"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "5"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Класс прочности",
          value: "М-150"
        },
        {
          label: "Класс морозостойкости",
          value: "F 50"
        },
        {
          label: "Размер зубьев",
          value: "250x120x88мм"
        }
      ]
    },
    {
      id: "kirpich-vibropressovannyj-korichnevyj-odinarnyj-akvarid-270sht",
      articul: "8840",
      title: "Кирпич вибропрессованный коричневый одинарный Акварид (270шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 50,
      inStock: true,
      quickBuy: true,
      filterValues: {
        ves: "4 кг",
        strana: "Россия",
        klass: "F 50",
        kolichestvo: "168",
        razmer: "250x120x88мм"
      },
      specs: [
        {
          label: "Вес",
          value: "4 кг"
        },
        {
          label: "Максимальный размер скидки",
          value: "5"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Класс прочности",
          value: "М-150"
        },
        {
          label: "Класс морозостойкости",
          value: "F 50"
        },
        {
          label: "Количество на м²",
          value: "168"
        },
        {
          label: "Размер зубьев",
          value: "250x120x88мм"
        }
      ]
    },
    {
      id: "kirpich-vibropressovannyj-korichnevyj-polovinka-akvarid-540-sht",
      articul: "201107",
      title: "Кирпич вибропрессованный коричневый половинка Акварид (540 шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 41,
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
      id: "kirpich-vibropressovannyj-pesok-odinarnyj-akvarid-270sht",
      articul: "11691",
      title: "Кирпич вибропрессованный Песок одинарный Акварид (270шт)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 45,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        ves: "4 кг",
        klass: "F 50",
        kolichestvo: "168"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Вес",
          value: "4 кг"
        },
        {
          label: "Класс прочности",
          value: "М-150"
        },
        {
          label: "Класс морозостойкости",
          value: "F 50"
        },
        {
          label: "Количество на м²",
          value: "168"
        }
      ]
    }
  ]
};
