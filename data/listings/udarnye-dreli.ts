import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/instrument/yelektroinstrument/dreli-shurupoverty-i-gaykoverty/udarnye-dreli/ */
export const udarnyeDreliListing: CatalogListingData = {
  path: "instrument/yelektroinstrument/dreli-shurupoverty-i-gaykoverty/udarnye-dreli",
  title: "Ударные дрели",
  totalCountLabel: "39 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Интерскол",
        "DERZHI",
        "Makita",
        "MAX-PRO"
      ],
      truncate: false
    },
    {
      id: "moshhnost",
      title: "Мощность",
      options: [
        "450 Вт",
        "580 Вт",
        "650 Вт",
        "710Вт",
        "720Вт",
        "750 Вт",
        "780 Вт",
        "810 Вт",
        "820 Вт",
        "1050 Вт"
      ],
      truncate: true
    },
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
      id: "diametr-patrona",
      title: "Диаметр патрона",
      options: [
        "13 мм",
        "16 мм"
      ],
      truncate: false
    },
    {
      id: "osobennosti",
      title: "Особенности",
      options: [
        "Может иметь незначительные косметические дефекты",
        "Мощная ударная дрель для профессионального использования",
        "Мощная ударная дрель для строительных работ",
        "Надежная ударная дрель от российского производителя",
        "Надежная ударная дрель средней мощности",
        "Профессиональная ударная дрель высокой мощности",
        "Сбалансированная мощность для различных задач",
        "Ударная дрель для бытового использования",
        "Ударная дрель для сверления в бетоне и кирпиче"
      ],
      truncate: true
    },
    {
      id: "tip",
      title: "Тип",
      options: [
        "Дрель",
        "Ударная дрель"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "drel-electrolite-id-1000",
      articul: "7817",
      title: "Дрель ELECTROLITE ID 1000 Акция",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 1711,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        nalichie: "Да"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Наличие удара",
          value: "Да"
        }
      ]
    },
    {
      id: "drel-max-pro-450vt-2700-ob-min-08-10-mm-85051",
      articul: "418487",
      title: "Дрель MAX-PRO 450Вт 2700 об/мин 0,8-10 мм 85051 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/10/418487-354x303.jpeg",
      price: 2600,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "MAX-PRO",
        tip: "Дрель",
        moshhnost: "450 Вт",
        nelikvid: "Да",
        oboroty: "2700 об/мин",
        sostoyanie: "Уцененный товар",
        osobennosti: "Может иметь незначительные косметические дефекты"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "MAX-PRO"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип",
          value: "Дрель"
        },
        {
          label: "Мощность",
          value: "450 Вт"
        },
        {
          label: "Неликвид",
          value: "Да"
        },
        {
          label: "Обороты",
          value: "2700 об/мин"
        },
        {
          label: "Состояние",
          value: "Уцененный товар"
        },
        {
          label: "Особенности",
          value: "Может иметь незначительные косметические дефекты"
        }
      ]
    },
    {
      id: "drel-du-13-750-yer-750-vt-13mm-revers-udarnaya-inte",
      articul: "018920",
      title: "Дрель ДУ-13/750 ЭР 750 Вт 13мм реверс ударная Интерскол",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/948cb9c4-30c7-11e2-a1f1-c8600046bc56_8f79e6f4-9feb-11ea-937f-002590ba8283-321x303.jpeg",
      price: 5450,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Интерскол",
        tip: "Ударная дрель",
        moshhnost: "750 Вт",
        "diametr-patrona": "13 мм",
        rezhim: "Ударный",
        osobennosti: "Ударная дрель для сверления в бетоне и кирпиче",
        nalichie: "Да"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Интерскол"
        },
        {
          label: "Тип",
          value: "Ударная дрель"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "750 Вт"
        },
        {
          label: "Диаметр патрона",
          value: "13 мм"
        },
        {
          label: "Режим",
          value: "Ударный"
        },
        {
          label: "Особенности",
          value: "Ударная дрель для сверления в бетоне и кирпиче"
        },
        {
          label: "Наличие удара",
          value: "Да"
        }
      ]
    },
    {
      id: "drel-du-13-750d-750-vt-13-mm-revers-udarnaya-derzhi",
      articul: "414299",
      title: "Дрель ДУ-13/750Д 750 Вт 13 мм реверс ударная DERZHI",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/414299-316x303.jpeg",
      price: 3300,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "DERZHI",
        tip: "Ударная дрель",
        moshhnost: "750 Вт",
        "diametr-patrona": "13 мм",
        rezhim: "Ударный",
        osobennosti: "Мощная ударная дрель для строительных работ"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "DERZHI"
        },
        {
          label: "Тип",
          value: "Ударная дрель"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "750 Вт"
        },
        {
          label: "Диаметр патрона",
          value: "13 мм"
        },
        {
          label: "Режим",
          value: "Ударный"
        },
        {
          label: "Особенности",
          value: "Мощная ударная дрель для строительных работ"
        }
      ]
    },
    {
      id: "drel-du-780-yer-780-vt-13mm-revers-udarnaya-inte",
      articul: "018921",
      title: "Дрель ДУ-13/780 ЭР 780 Вт 13мм реверс ударная Интерскол",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/948cb9c6-30c7-11e2-a1f1-c8600046bc56_8f79e6f5-9feb-11ea-937f-002590ba8283-303x303.jpeg",
      price: 4100,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Интерскол",
        tip: "Ударная дрель",
        moshhnost: "780 Вт",
        "diametr-patrona": "13 мм",
        rezhim: "Ударный",
        osobennosti: "Сбалансированная мощность для различных задач",
        nalichie: "Да"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Интерскол"
        },
        {
          label: "Тип",
          value: "Ударная дрель"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "780 Вт"
        },
        {
          label: "Диаметр патрона",
          value: "13 мм"
        },
        {
          label: "Режим",
          value: "Ударный"
        },
        {
          label: "Особенности",
          value: "Сбалансированная мощность для различных задач"
        },
        {
          label: "Наличие удара",
          value: "Да"
        }
      ]
    },
    {
      id: "drel-du-16-1000-yer-1000-vt-16mm-revers-udarnaya-int",
      articul: "018916",
      title: "Дрель ДУ-16/1050 ЭР 1050 Вт 16мм реверс ударная Интерскол",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/948cb9be-30c7-11e2-a1f1-c8600046bc56_8f79e6f0-9feb-11ea-937f-002590ba8283-265x303.jpeg",
      price: 6950,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Интерскол",
        tip: "Ударная дрель",
        moshhnost: "1050 Вт",
        "diametr-patrona": "16 мм",
        rezhim: "Ударный",
        osobennosti: "Профессиональная ударная дрель высокой мощности",
        nalichie: "Да"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Интерскол"
        },
        {
          label: "Тип",
          value: "Ударная дрель"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "1050 Вт"
        },
        {
          label: "Диаметр патрона",
          value: "16 мм"
        },
        {
          label: "Режим",
          value: "Ударный"
        },
        {
          label: "Особенности",
          value: "Профессиональная ударная дрель высокой мощности"
        },
        {
          label: "Наличие удара",
          value: "Да"
        }
      ]
    },
    {
      id: "drel-du-580-yer-580-vt-13mm-revers-udarnaya-inte",
      articul: "018918",
      title: "Дрель ДУ-580 ЭР 580 Вт 13мм реверс ударная Интерскол",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/948cb9c0-30c7-11e2-a1f1-c8600046bc56_8f79e6f2-9feb-11ea-937f-002590ba8283-303x303.jpeg",
      price: 2850,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Интерскол",
        tip: "Ударная дрель",
        moshhnost: "580 Вт",
        "diametr-patrona": "13 мм",
        rezhim: "Ударный",
        osobennosti: "Ударная дрель для бытового использования",
        nalichie: "Да"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Интерскол"
        },
        {
          label: "Тип",
          value: "Ударная дрель"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "580 Вт"
        },
        {
          label: "Диаметр патрона",
          value: "13 мм"
        },
        {
          label: "Режим",
          value: "Ударный"
        },
        {
          label: "Особенности",
          value: "Ударная дрель для бытового использования"
        },
        {
          label: "Наличие удара",
          value: "Да"
        }
      ]
    },
    {
      id: "drel-du-650-yer-650-vt-13mm-revers-udarnaya-inte",
      articul: "018919",
      title: "Дрель ДУ-650 ЭР 650 Вт 13мм реверс ударная Интерскол",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/948cb9c2-30c7-11e2-a1f1-c8600046bc56_8f79e6f3-9feb-11ea-937f-002590ba8283-303x303.jpeg",
      price: 4165,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Интерскол",
        tip: "Ударная дрель",
        moshhnost: "650 Вт",
        "diametr-patrona": "13 мм",
        rezhim: "Ударный",
        osobennosti: "Надежная ударная дрель средней мощности",
        nalichie: "Да"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Интерскол"
        },
        {
          label: "Тип",
          value: "Ударная дрель"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "650 Вт"
        },
        {
          label: "Диаметр патрона",
          value: "13 мм"
        },
        {
          label: "Режим",
          value: "Ударный"
        },
        {
          label: "Особенности",
          value: "Надежная ударная дрель средней мощности"
        },
        {
          label: "Наличие удара",
          value: "Да"
        }
      ]
    },
    {
      id: "drel-interskol-du-13-810-yer",
      articul: "018927",
      title: "Дрель Интерскол ДУ-13/810 ЭР",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/948cb9da-30c7-11e2-a1f1-c8600046bc56_8f79e6fb-9feb-11ea-937f-002590ba8283-303x303.jpeg",
      price: 6600,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Интерскол",
        tip: "Ударная дрель",
        moshhnost: "810 Вт",
        "diametr-patrona": "13 мм",
        rezhim: "Ударный",
        nalichie: "Да",
        osobennosti: "Мощная ударная дрель для профессионального использования"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Интерскол"
        },
        {
          label: "Тип",
          value: "Ударная дрель"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "810 Вт"
        },
        {
          label: "Диаметр патрона",
          value: "13 мм"
        },
        {
          label: "Режим",
          value: "Ударный"
        },
        {
          label: "Наличие удара",
          value: "Да"
        },
        {
          label: "Особенности",
          value: "Мощная ударная дрель для профессионального использования"
        }
      ]
    },
    {
      id: "drel-interskol-du-13-820-yer",
      articul: "018928",
      title: "Дрель Интерскол ДУ-13/820 ЭР",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/5c2fe611-6c89-11e4-9002-c8600046bc56_8f79e6fc-9feb-11ea-937f-002590ba8283-303x303.jpeg",
      price: 5500,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Интерскол",
        tip: "Дрель",
        moshhnost: "820 Вт",
        "diametr-patrona": "13 мм",
        rezhim: "Ударный",
        osobennosti: "Надежная ударная дрель от российского производителя",
        nalichie: "Да"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Интерскол"
        },
        {
          label: "Тип",
          value: "Ударная дрель"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "820 Вт"
        },
        {
          label: "Диаметр патрона",
          value: "13 мм"
        },
        {
          label: "Тип товара",
          value: "Дрель"
        },
        {
          label: "Режим",
          value: "Ударный"
        },
        {
          label: "Особенности",
          value: "Надежная ударная дрель от российского производителя"
        },
        {
          label: "Наличие удара",
          value: "Да"
        }
      ]
    },
    {
      id: "drel-makita-nr-2070-16mm-1010vt-2-h-skor-rev-udar",
      articul: "018936",
      title: "Дрель Макита НР 2070 16мм 1010Вт 2-х скор рев удар",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 0,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        moshhnost: "720Вт",
        nalichie: "Да"
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
          label: "Мощность",
          value: "720Вт"
        },
        {
          label: "Наличие удара",
          value: "Да"
        }
      ]
    },
    {
      id: "drel-makita-nr-1630-13-710vt-kejs",
      articul: "018937",
      title: "Дрель Макита НР-1630 13-710Вт кейс",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 8700,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Makita",
        tip: "Дрель",
        moshhnost: "710Вт",
        nalichie: "Да"
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
          label: "Бренд",
          value: "Makita"
        },
        {
          label: "Тип товара",
          value: "Дрель"
        },
        {
          label: "Мощность",
          value: "710Вт"
        },
        {
          label: "Наличие удара",
          value: "Да"
        }
      ]
    }
  ]
};
