import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/otoplenie/metalloplastikovye-truby-i-fitingi-v/sgony-univ/ */
export const sgonyUnivListing: CatalogListingData = {
  path: "otoplenie/metalloplastikovye-truby-i-fitingi-v/sgony-univ",
  title: "Сгоны унив.",
  totalCountLabel: "15 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "VALFEX",
        "VALTEC",
        "Velfex"
      ],
      truncate: false
    },
    {
      id: "diametr",
      title: "Диаметр",
      options: [
        "1/2\"",
        "3/4\"",
        "15 мм",
        "20 мм",
        "25 мм",
        "32 мм",
        "40 мм",
        "50 мм"
      ],
      truncate: true
    },
    {
      id: "model",
      title: "Модель",
      options: [
        "VF.728.N.012",
        "VF.728.N.034",
        "VT.341"
      ],
      truncate: false
    },
    {
      id: "strana-proizvoditel",
      title: "Страна производитель",
      options: [
        "Италия",
        "Россия"
      ],
      truncate: false
    },
    {
      id: "tip",
      title: "Тип",
      options: [
        "Сгон прямой неразъемный",
        "Сгон разъемный (американка)",
        "Сгон угловой",
        "Сгон универсальный прямой"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "sgon-nikelir-1-2kh150-mm",
      articul: "415028",
      title: "Сгон никелир 1/2х150 мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/09/415028-372x238.jpeg",
      price: 315,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "Velfex",
        "strana-proizvoditel": "Россия",
        tip: "Сгон прямой неразъемный",
        material: "Латунь никелированная",
        diametr: "1/2\"",
        dlina: "150 мм",
        naznachenie: "Системы водоснабжения и отопления"
      },
      specs: [
        {
          label: "Бренд",
          value: "Velfex"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Сгон прямой неразъемный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Материал",
          value: "Латунь никелированная"
        },
        {
          label: "Диаметр",
          value: "1/2\""
        },
        {
          label: "Длина",
          value: "150 мм"
        },
        {
          label: "Назначение",
          value: "Системы водоснабжения и отопления"
        }
      ]
    },
    {
      id: "sgon-pryamoy-razemnyy-amerikanka-nr-n",
      articul: "424773",
      title: "Сгон прямой разъемный (американка) НР-НР VALFEX 1/2 НИК (200/10) К VF.728.N.012",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/09/424773-355x303.jpeg",
      price: 172,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "VALFEX",
        "strana-proizvoditel": "Россия",
        tip: "Сгон разъемный (американка)",
        material: "Латунь никелированная",
        diametr: "1/2\"",
        "tip-rezby": "НР-НР (наружная-наружная)",
        model: "VF.728.N.012"
      },
      specs: [
        {
          label: "Бренд",
          value: "VALFEX"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Сгон разъемный (американка)"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Материал",
          value: "Латунь никелированная"
        },
        {
          label: "Диаметр",
          value: "1/2\""
        },
        {
          label: "Тип резьбы",
          value: "НР-НР (наружная-наружная)"
        },
        {
          label: "Модель",
          value: "VF.728.N.012"
        }
      ]
    },
    {
      id: "sgon-pryamoy-razemnyy-amerikanka-nr-n-2",
      articul: "424775",
      title: "Сгон прямой разъемный (американка) НР-НР VALFEX 3/4 НИК (120/10) К VF.728.N.034",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/09/424775-372x280.jpeg",
      price: 257,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "VALFEX",
        "strana-proizvoditel": "Россия",
        tip: "Сгон разъемный (американка)",
        material: "Латунь никелированная",
        diametr: "3/4\"",
        "tip-rezby": "НР-НР (наружная-наружная)",
        model: "VF.728.N.034"
      },
      specs: [
        {
          label: "Бренд",
          value: "VALFEX"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Сгон разъемный (американка)"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Материал",
          value: "Латунь никелированная"
        },
        {
          label: "Диаметр",
          value: "3/4\""
        },
        {
          label: "Тип резьбы",
          value: "НР-НР (наружная-наружная)"
        },
        {
          label: "Модель",
          value: "VF.728.N.034"
        }
      ]
    },
    {
      id: "sgon-univ-pryam-nik-lat-d-15",
      articul: "065574",
      title: "Сгон унив прям ник лат Д 15",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/eb4bf147-338c-11ea-a9de-c8600046bc56_c5a0c98e-9e55-11ea-937e-002590ba8283-303x303.jpeg",
      price: 205,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Velfex",
        "strana-proizvoditel": "Россия",
        tip: "Сгон универсальный прямой",
        material: "Латунь никелированная",
        diametr: "15 мм",
        dlina: "150 мм",
        naznachenie: "Системы водоснабжения и отопления"
      },
      specs: [
        {
          label: "Бренд",
          value: "Velfex"
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
          label: "Тип",
          value: "Сгон универсальный прямой"
        },
        {
          label: "Материал",
          value: "Латунь никелированная"
        },
        {
          label: "Диаметр",
          value: "15 мм"
        },
        {
          label: "Длина",
          value: "150 мм"
        },
        {
          label: "Назначение",
          value: "Системы водоснабжения и отопления"
        }
      ]
    },
    {
      id: "sgon-univ-uglovoj-nik-d-15",
      articul: "428985",
      title: "Сгон унив угловой ник Д 15",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/09/428985-372x278.jpeg",
      price: 240,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "Velfex",
        "strana-proizvoditel": "Россия",
        tip: "Сгон угловой",
        material: "Латунь никелированная",
        diametr: "15 мм",
        forma: "Угловая (90°)",
        naznachenie: "Системы водоснабжения и отопления"
      },
      specs: [
        {
          label: "Бренд",
          value: "Velfex"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Сгон угловой"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Материал",
          value: "Латунь никелированная"
        },
        {
          label: "Диаметр",
          value: "15 мм"
        },
        {
          label: "Форма",
          value: "Угловая (90°)"
        },
        {
          label: "Назначение",
          value: "Системы водоснабжения и отопления"
        }
      ]
    },
    {
      id: "sgon-univ-pryam-nik-lat-d-20",
      articul: "065575",
      title: "Сгон унив.прям ник лат Д 20",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/176f956a-5933-11ea-a9f6-c8600046bc54_c5a0c98f-9e55-11ea-937e-002590ba8283-303x303.jpeg",
      price: 280,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Velfex",
        "strana-proizvoditel": "Россия",
        tip: "Сгон универсальный прямой",
        material: "Латунь никелированная",
        diametr: "20 мм",
        dlina: "150 мм",
        naznachenie: "Системы водоснабжения и отопления"
      },
      specs: [
        {
          label: "Бренд",
          value: "Velfex"
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
          label: "Тип",
          value: "Сгон универсальный прямой"
        },
        {
          label: "Материал",
          value: "Латунь никелированная"
        },
        {
          label: "Диаметр",
          value: "20 мм"
        },
        {
          label: "Длина",
          value: "150 мм"
        },
        {
          label: "Назначение",
          value: "Системы водоснабжения и отопления"
        }
      ]
    },
    {
      id: "sgon-univ-pryam-nik-lat-d-25",
      articul: "065576",
      title: "Сгон унив.прям ник лат Д 25",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/b6959d3f-5ded-11ea-a9f9-c8600046bc56_c5a0c990-9e55-11ea-937e-002590ba8283-303x303.jpeg",
      price: 630,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Velfex",
        "strana-proizvoditel": "Россия",
        tip: "Сгон универсальный прямой",
        material: "Латунь никелированная",
        diametr: "25 мм",
        dlina: "150 мм",
        naznachenie: "Системы водоснабжения и отопления"
      },
      specs: [
        {
          label: "Бренд",
          value: "Velfex"
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
          label: "Тип",
          value: "Сгон универсальный прямой"
        },
        {
          label: "Материал",
          value: "Латунь никелированная"
        },
        {
          label: "Диаметр",
          value: "25 мм"
        },
        {
          label: "Длина",
          value: "150 мм"
        },
        {
          label: "Назначение",
          value: "Системы водоснабжения и отопления"
        }
      ]
    },
    {
      id: "sgon-univ-pryam-nik-lat-d-32",
      articul: "065577",
      title: "Сгон унив.прям ник лат Д 32",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/26a30bab-5933-11ea-a9f6-c8600046bc54_c5a0c991-9e55-11ea-937e-002590ba8283-303x303.jpeg",
      price: 800,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Velfex",
        "strana-proizvoditel": "Россия",
        tip: "Сгон универсальный прямой",
        material: "Латунь никелированная",
        diametr: "32 мм",
        dlina: "150 мм",
        naznachenie: "Системы водоснабжения и отопления"
      },
      specs: [
        {
          label: "Бренд",
          value: "Velfex"
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
          label: "Тип",
          value: "Сгон универсальный прямой"
        },
        {
          label: "Материал",
          value: "Латунь никелированная"
        },
        {
          label: "Диаметр",
          value: "32 мм"
        },
        {
          label: "Длина",
          value: "150 мм"
        },
        {
          label: "Назначение",
          value: "Системы водоснабжения и отопления"
        }
      ]
    },
    {
      id: "sgon-univ-pryam-nik-lat-d-40",
      articul: "065582",
      title: "Сгон унив.прям ник лат Д 40",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/42dca338-30c6-11e2-a1f1-c8600046bc56_c5a0c996-9e55-11ea-937e-002590ba8283-303x303.jpeg",
      price: 1360,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Velfex",
        "strana-proizvoditel": "Россия",
        tip: "Сгон универсальный прямой",
        material: "Латунь никелированная",
        diametr: "40 мм",
        dlina: "150 мм",
        naznachenie: "Системы водоснабжения и отопления"
      },
      specs: [
        {
          label: "Бренд",
          value: "Velfex"
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
          label: "Тип",
          value: "Сгон универсальный прямой"
        },
        {
          label: "Материал",
          value: "Латунь никелированная"
        },
        {
          label: "Диаметр",
          value: "40 мм"
        },
        {
          label: "Длина",
          value: "150 мм"
        },
        {
          label: "Назначение",
          value: "Системы водоснабжения и отопления"
        }
      ]
    },
    {
      id: "sgon-univ-pryam-valtec-nik-lat-d-20-vt-341",
      articul: "065579",
      title: "Сгон унив.прям. (Valtec) ник.лат.Д 20 VT.341",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/42dca332-30c6-11e2-a1f1-c8600046bc56_c5a0c993-9e55-11ea-937e-002590ba8283-303x303.jpeg",
      price: 380,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "VALTEC",
        "strana-proizvoditel": "Италия",
        tip: "Сгон универсальный прямой",
        material: "Латунь никелированная",
        diametr: "20 мм",
        model: "VT.341",
        "rabochee-davlenie": "40 бар"
      },
      specs: [
        {
          label: "Бренд",
          value: "VALTEC"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Италия"
        },
        {
          label: "Тип",
          value: "Сгон универсальный прямой"
        },
        {
          label: "Материал",
          value: "Латунь никелированная"
        },
        {
          label: "Диаметр",
          value: "20 мм"
        },
        {
          label: "Модель",
          value: "VT.341"
        },
        {
          label: "Рабочее давление",
          value: "40 бар"
        }
      ]
    },
    {
      id: "sgon-univ-pryam-valtec-nik-lat-d-25-vt-341",
      articul: "065580",
      title: "Сгон унив.прям. (Valtec) ник.лат.Д 25 VT.341",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/42dca334-30c6-11e2-a1f1-c8600046bc56_c5a0c994-9e55-11ea-937e-002590ba8283-303x303.jpeg",
      price: 700,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "VALTEC",
        "strana-proizvoditel": "Италия",
        tip: "Сгон универсальный прямой",
        material: "Латунь никелированная",
        diametr: "25 мм",
        model: "VT.341",
        "rabochee-davlenie": "40 бар"
      },
      specs: [
        {
          label: "Бренд",
          value: "VALTEC"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Италия"
        },
        {
          label: "Тип",
          value: "Сгон универсальный прямой"
        },
        {
          label: "Материал",
          value: "Латунь никелированная"
        },
        {
          label: "Диаметр",
          value: "25 мм"
        },
        {
          label: "Модель",
          value: "VT.341"
        },
        {
          label: "Рабочее давление",
          value: "40 бар"
        }
      ]
    },
    {
      id: "sgon-univ-pryam-d-50",
      articul: "065583",
      title: "Сгон унив.прям. Д 50",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/42dca33a-30c6-11e2-a1f1-c8600046bc56_c5a0c997-9e55-11ea-937e-002590ba8283-303x303.jpeg",
      price: 1550,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Velfex",
        "strana-proizvoditel": "Россия",
        tip: "Сгон универсальный прямой",
        material: "Латунь никелированная",
        diametr: "50 мм",
        dlina: "150 мм",
        naznachenie: "Системы водоснабжения и отопления"
      },
      specs: [
        {
          label: "Бренд",
          value: "Velfex"
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
          label: "Тип",
          value: "Сгон универсальный прямой"
        },
        {
          label: "Материал",
          value: "Латунь никелированная"
        },
        {
          label: "Диаметр",
          value: "50 мм"
        },
        {
          label: "Длина",
          value: "150 мм"
        },
        {
          label: "Назначение",
          value: "Системы водоснабжения и отопления"
        }
      ]
    }
  ]
};
