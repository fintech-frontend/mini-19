import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/obshhestroitelnye-materialy/metalloprokat/provoloka/ */
export const provolokaListing: CatalogListingData = {
  path: "obshhestroitelnye-materialy/metalloprokat/provoloka",
  title: "Проволока",
  totalCountLabel: "17 товаров",
  filterFields: [
    {
      id: "diametr",
      title: "Диаметр диска",
      options: [
        "1,2мм",
        "2,2мм",
        "2,8мм",
        "2мм",
        "3мм"
      ],
      truncate: false
    },
    {
      id: "dlina",
      title: "Длина",
      options: [
        "10м",
        "60 мм"
      ],
      truncate: false
    },
    {
      id: "tip",
      title: "Тип товара",
      options: [
        "Лист г/к",
        "Проволока"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "provoloka-egoza-diam-500mm-dl-10p-m",
      articul: "059812",
      title: "Проволока “Егоза” (диам -500мм, дл. -10п/м)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/61f7fa35-30c8-11e2-a1f1-c8600046bc56_54f4808d-89d8-11ea-937a-002590ba8283-372x280.jpeg",
      price: 2096,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        dlina: "10м",
        material: "Сталь",
        tip: "Проволока",
        vysota: "500 мм",
        pokrytie: "Оцинкованное",
        diametr: "2,2мм",
        v: "да"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Длина",
          value: "10м"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Тип товара",
          value: "Проволока"
        },
        {
          label: "Высота",
          value: "500 мм"
        },
        {
          label: "Покрытие",
          value: "Оцинкованное"
        },
        {
          label: "Диаметр диска",
          value: "2,2мм"
        },
        {
          label: "В бухтах",
          value: "да"
        }
      ]
    },
    {
      id: "provoloka-kolyuchaya-ocinkovannaya-d-2-8-mm",
      articul: "423433",
      title: "Проволока колючая оцинкованная d 2.8 мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/61f7fa47-30c8-11e2-a1f1-c8600046bc56_54f4808e-89d8-11ea-937a-002590ba8283-372x279.jpeg",
      price: 230,
      inStock: true,
      quickBuy: true,
      filterValues: {
        ves: "≈94,2кг/м2",
        strana: "Россия",
        dlina: "60 мм",
        material: "Сталь",
        tip: "Лист г/к",
        marka: "Ст3пс/сп",
        faktura: "Гладкая",
        v: "да",
        izgotovlenie: "Горячекатаный",
        shirina: "1200 мм",
        tolshhina: "12мм",
        pokrytie: "Оцинкованное",
        diametr: "2,8мм"
      },
      specs: [
        {
          label: "Вес",
          value: "≈94,2кг/м2"
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
          label: "Длина",
          value: "60 мм"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Тип товара",
          value: "Лист г/к"
        },
        {
          label: "Марка стали",
          value: "Ст3пс/сп"
        },
        {
          label: "Фактура",
          value: "Гладкая"
        },
        {
          label: "В 1 тонне",
          value: "≈10,4м2"
        },
        {
          label: "Изготовление",
          value: "Горячекатаный"
        },
        {
          label: "Ширина",
          value: "1200 мм"
        },
        {
          label: "Толщина",
          value: "12мм"
        },
        {
          label: "Покрытие",
          value: "Оцинкованное"
        },
        {
          label: "Диаметр диска",
          value: "2,8мм"
        },
        {
          label: "В бухтах",
          value: "да"
        }
      ]
    },
    {
      id: "provoloka-ocinkovannaya-d-20-mm",
      articul: "0575",
      title: "Проволока оцинкованная d.2,0 мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/61f7fa53-30c8-11e2-a1f1-c8600046bc56_54f4808f-89d8-11ea-937a-002590ba8283-303x303.jpeg",
      price: 185,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        material: "Сталь",
        tip: "Проволока",
        faktura: "Гладкая",
        pokrytie: "Оцинкованное",
        diametr: "2мм",
        v: "да"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Тип товара",
          value: "Проволока"
        },
        {
          label: "Фактура",
          value: "Гладкая"
        },
        {
          label: "Покрытие",
          value: "Оцинкованное"
        },
        {
          label: "Диаметр диска",
          value: "2мм"
        },
        {
          label: "В бухтах",
          value: "да"
        }
      ]
    },
    {
      id: "provoloka-ocinkovannaya-d-30-mm",
      articul: "0576",
      title: "Проволока оцинкованная d.3,0 мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/61f7fa57-30c8-11e2-a1f1-c8600046bc56_54f48090-89d8-11ea-937a-002590ba8283-303x303.jpeg",
      price: 187,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        material: "Сталь",
        tip: "Проволока",
        faktura: "Гладкая",
        pokrytie: "Оцинкованное",
        diametr: "3мм",
        v: "да"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Тип товара",
          value: "Проволока"
        },
        {
          label: "Фактура",
          value: "Гладкая"
        },
        {
          label: "Покрытие",
          value: "Оцинкованное"
        },
        {
          label: "Диаметр диска",
          value: "3мм"
        },
        {
          label: "В бухтах",
          value: "да"
        }
      ]
    },
    {
      id: "provoloka-svarnaya-d-3mm",
      articul: "0577",
      title: "Проволока сварная d 3мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/61f7fa63-30c8-11e2-a1f1-c8600046bc56_54f48091-89d8-11ea-937a-002590ba8283-372x289.jpeg",
      price: 171,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        material: "Сталь",
        tip: "Проволока",
        faktura: "Гладкая",
        pokrytie: "Оцинкованное",
        diametr: "3мм",
        v: "да"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Тип товара",
          value: "Проволока"
        },
        {
          label: "Фактура",
          value: "Гладкая"
        },
        {
          label: "Покрытие",
          value: "Оцинкованное"
        },
        {
          label: "Диаметр диска",
          value: "3мм"
        },
        {
          label: "В бухтах",
          value: "да"
        }
      ]
    },
    {
      id: "provoloka-t-o-ocinkovannaya-d-12",
      articul: "059839",
      title: "Проволока Т/О оцинкованная d 1,2",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/68d973f6-30c8-11e2-a1f1-c8600046bc56_54f48092-89d8-11ea-937a-002590ba8283-303x303.jpeg",
      price: 193,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        material: "Сталь",
        tip: "Проволока",
        faktura: "Гладкая",
        pokrytie: "Оцинкованное",
        diametr: "1,2мм",
        v: "да"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Тип товара",
          value: "Проволока"
        },
        {
          label: "Фактура",
          value: "Гладкая"
        },
        {
          label: "Покрытие",
          value: "Оцинкованное"
        },
        {
          label: "Диаметр диска",
          value: "1,2мм"
        },
        {
          label: "В бухтах",
          value: "да"
        }
      ]
    },
    {
      id: "provoloka-t-o-ocinkovannaja-d-1-4",
      articul: "201449",
      title: "Проволока Т/О оцинкованная d 1,4",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 175,
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
      id: "provoloka-t-o-ocinkovannaja-d-2-0",
      articul: "059842",
      title: "Проволока Т/О оцинкованная d 2,0",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 162,
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
      id: "provoloka-t-o-ocinkovannaja-d-3-0",
      articul: "0587",
      title: "Проволока Т/О оцинкованная d 3,0",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 126,
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
      id: "provoloka-t-o-chernaya-vyazalnaya-d-12-mm",
      articul: "0578",
      title: "Проволока Т/О черная, вязальная d. 1,2 мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/68d97406-30c8-11e2-a1f1-c8600046bc56_54f48093-89d8-11ea-937a-002590ba8283-303x303.jpeg",
      price: 170,
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
      id: "provoloka-t-o-chernaja-vjazalnaja-d-1-2-mm",
      articul: "7977",
      title: "Проволока Т/О черная, вязальная d. 1,2 мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 0,
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
      id: "provoloka-t-o-chernaya-vyazalnaya-d-2-mm",
      articul: "054378",
      title: "Проволока Т/О черная, вязальная d. 2 мм.",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/68d9740a-30c8-11e2-a1f1-c8600046bc56_54f48094-89d8-11ea-937a-002590ba8283-303x303.jpeg",
      price: 149,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        material: "Сталь",
        tip: "Проволока",
        faktura: "Гладкая",
        pokrytie: "Оцинкованное",
        diametr: "2мм",
        v: "да"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Тип товара",
          value: "Проволока"
        },
        {
          label: "Фактура",
          value: "Гладкая"
        },
        {
          label: "Покрытие",
          value: "Оцинкованное"
        },
        {
          label: "Диаметр диска",
          value: "2мм"
        },
        {
          label: "В бухтах",
          value: "да"
        }
      ]
    }
  ]
};
