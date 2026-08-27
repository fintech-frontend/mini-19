import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/instrument/yelektroinstrument/pnevmoinstrumenty-kompressory-i-kom/kompressory/ */
export const kompressoryListing: CatalogListingData = {
  path: "instrument/yelektroinstrument/pnevmoinstrumenty-kompressory-i-kom/kompressory",
  title: "Компрессоры",
  totalCountLabel: "48 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "ELECTROLITE",
        "Fubag"
      ],
      truncate: false
    },
    {
      id: "moshhnost",
      title: "Мощность",
      options: [
        "1.5 кВт",
        "1.8 кВт",
        "2.2 кВт"
      ],
      truncate: false
    },
    {
      id: "proizvoditelnost",
      title: "Производительность",
      options: [
        "270 л/мин",
        "320 л/мин",
        "330 л/мин",
        "340 л/мин",
        "360 л/мин",
        "410 л/мин",
        "420 л/мин",
        "440 л/мин",
        "470 л/мин",
        "490 л/мин",
        "1500 л/мин"
      ],
      truncate: true
    },
    {
      id: "davlenie",
      title: "Давление",
      options: [
        "8 бар",
        "8-10 бар",
        "10 бар"
      ],
      truncate: false
    },
    {
      id: "model",
      title: "Модель",
      options: [
        "1500/50-OL",
        "VCF/100 СМЗ",
        "VDC/100 СМ3"
      ],
      truncate: false
    },
    {
      id: "naznachenie",
      title: "Назначение",
      options: [
        "Бытовое использование",
        "Профессиональное использование"
      ],
      truncate: false
    },
    {
      id: "obem-resivera",
      title: "Объем ресивера",
      options: [
        "24 л",
        "50 л",
        "60 л",
        "80 л",
        "100 л"
      ],
      truncate: false
    },
    {
      id: "tip",
      title: "Тип",
      options: [
        "Безмасляный компрессор",
        "Поршневой компрессор"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "kompressor-100-fubag-vcf-100-smz-440-l-min-10b-22-kvt",
      articul: "031675",
      title: "Компрессор 100 Fubag VCF/100 СМЗ 440 л/мин 10б 2,2 кВт",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/0a97e58f-1d39-11e4-9943-c8600046bc56_b1ea43c1-9feb-11ea-937f-002590ba8283.jpeg",
      price: 57305,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Fubag",
        tip: "Поршневой компрессор",
        proizvoditelnost: "440 л/мин",
        moshhnost: "2.2 кВт",
        davlenie: "10 бар",
        "obem-resivera": "100 л",
        model: "VCF/100 СМЗ"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Fubag"
        },
        {
          label: "Тип",
          value: "Поршневой компрессор"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Производительность",
          value: "440 л/мин"
        },
        {
          label: "Мощность",
          value: "2.2 кВт"
        },
        {
          label: "Давление",
          value: "10 бар"
        },
        {
          label: "Объем ресивера",
          value: "100 л"
        },
        {
          label: "Модель",
          value: "VCF/100 СМЗ"
        }
      ]
    },
    {
      id: "kompressor-100-fubag-vdc-100-sm3-new",
      articul: "031676",
      title: "Компрессор 100 Fubag VDC/100 СМ3 NEW",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/c3d8f73e-4929-11e4-84d1-c8600046bc56_b1ea43c0-9feb-11ea-937f-002590ba8283-372x285.jpeg",
      price: 27900,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Fubag",
        tip: "Поршневой компрессор",
        "obem-resivera": "100 л",
        model: "VDC/100 СМ3",
        naznachenie: "Профессиональное использование",
        osobennosti: "Новая модель",
        davlenie: "8-10 бар"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Fubag"
        },
        {
          label: "Тип",
          value: "Поршневой компрессор"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Объем ресивера",
          value: "100 л"
        },
        {
          label: "Модель",
          value: "VDC/100 СМ3"
        },
        {
          label: "Назначение",
          value: "Профессиональное использование"
        },
        {
          label: "Особенности",
          value: "Новая модель"
        },
        {
          label: "Давление",
          value: "8-10 бар"
        }
      ]
    },
    {
      id: "kompressor-electrolite-1500-50-ol-220v-15kvt-bezmaslyanyy",
      articul: "416298",
      title: "Компрессор ELECTROLITE 1500/50-OL 220В 1,5кВт безмасляный",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/46d59f6c-be5b-11ed-93eb-002590ba8282_b92889e1-22f7-11ee-9403-002590ba8282-303x303.jpeg",
      price: 16000,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "ELECTROLITE",
        tip: "Безмасляный компрессор",
        moshhnost: "1.5 кВт",
        "obem-resivera": "50 л",
        napryazhenie: "220 В",
        proizvoditelnost: "1500 л/мин",
        model: "1500/50-OL"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "ELECTROLITE"
        },
        {
          label: "Тип",
          value: "Безмасляный компрессор"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "1.5 кВт"
        },
        {
          label: "Объем ресивера",
          value: "50 л"
        },
        {
          label: "Напряжение",
          value: "220 В"
        },
        {
          label: "Производительность",
          value: "1500 л/мин"
        },
        {
          label: "Модель",
          value: "1500/50-OL"
        }
      ]
    },
    {
      id: "kompressor-electrolite-270-24",
      articul: "031677",
      title: "Компрессор ELECTROLITE 270/24",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/b8ca29d3-5dbb-11e9-8f64-c8600046bc56_b1ea43bf-9feb-11ea-937f-002590ba8283-303x303.jpeg",
      price: 12500,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "ELECTROLITE",
        tip: "Поршневой компрессор",
        proizvoditelnost: "270 л/мин",
        "obem-resivera": "24 л",
        moshhnost: "1.5 кВт",
        davlenie: "8 бар",
        naznachenie: "Бытовое использование"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "ELECTROLITE"
        },
        {
          label: "Тип",
          value: "Поршневой компрессор"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Производительность",
          value: "270 л/мин"
        },
        {
          label: "Объем ресивера",
          value: "24 л"
        },
        {
          label: "Мощность",
          value: "1.5 кВт"
        },
        {
          label: "Давление",
          value: "8 бар"
        },
        {
          label: "Назначение",
          value: "Бытовое использование"
        }
      ]
    },
    {
      id: "kompressor-electrolite-320-50",
      articul: "405001",
      title: "Компрессор ELECTROLITE 320/50",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/469f890d-33d7-11ec-93bf-002590ba8282_725db23d-3568-11ec-93bf-002590ba8282-303x303.jpeg",
      price: 16000,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "ELECTROLITE",
        tip: "Поршневой компрессор",
        proizvoditelnost: "320 л/мин",
        "obem-resivera": "50 л",
        moshhnost: "1.8 кВт",
        davlenie: "8 бар",
        naznachenie: "Профессиональное использование"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "ELECTROLITE"
        },
        {
          label: "Тип",
          value: "Поршневой компрессор"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Производительность",
          value: "320 л/мин"
        },
        {
          label: "Объем ресивера",
          value: "50 л"
        },
        {
          label: "Мощность",
          value: "1.8 кВт"
        },
        {
          label: "Давление",
          value: "8 бар"
        },
        {
          label: "Назначение",
          value: "Профессиональное использование"
        }
      ]
    },
    {
      id: "kompressor-electrolite-330-50",
      articul: "031678",
      title: "Компрессор ELECTROLITE 330/50",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/cdde7961-5dbb-11e9-8f64-c8600046bc56_b1ea43be-9feb-11ea-937f-002590ba8283-303x303.jpeg",
      price: 11300,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "ELECTROLITE",
        tip: "Поршневой компрессор",
        proizvoditelnost: "330 л/мин",
        "obem-resivera": "50 л",
        moshhnost: "1.8 кВт",
        davlenie: "8 бар",
        naznachenie: "Профессиональное использование"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "ELECTROLITE"
        },
        {
          label: "Тип",
          value: "Поршневой компрессор"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Производительность",
          value: "330 л/мин"
        },
        {
          label: "Объем ресивера",
          value: "50 л"
        },
        {
          label: "Мощность",
          value: "1.8 кВт"
        },
        {
          label: "Давление",
          value: "8 бар"
        },
        {
          label: "Назначение",
          value: "Профессиональное использование"
        }
      ]
    },
    {
      id: "kompressor-electrolite-340-50",
      articul: "004505",
      title: "Компрессор ELECTROLITE 340/50",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/5f6e2f95-d8bb-11ea-938a-002590ba8283_92445b29-672c-11ed-93dc-002590ba8282-340x303.jpeg",
      price: 12400,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "ELECTROLITE",
        tip: "Поршневой компрессор",
        proizvoditelnost: "340 л/мин",
        "obem-resivera": "50 л",
        moshhnost: "1.8 кВт",
        davlenie: "8 бар",
        naznachenie: "Профессиональное использование"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "ELECTROLITE"
        },
        {
          label: "Тип",
          value: "Поршневой компрессор"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Производительность",
          value: "340 л/мин"
        },
        {
          label: "Объем ресивера",
          value: "50 л"
        },
        {
          label: "Мощность",
          value: "1.8 кВт"
        },
        {
          label: "Давление",
          value: "8 бар"
        },
        {
          label: "Назначение",
          value: "Профессиональное использование"
        }
      ]
    },
    {
      id: "kompressor-electrolite-360-60",
      articul: "031679",
      title: "Компрессор ELECTROLITE 360/60",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/dbe1b31e-5dbb-11e9-8f64-c8600046bc56_b1ea43bd-9feb-11ea-937f-002590ba8283-303x303.jpeg",
      price: 21300,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "ELECTROLITE",
        tip: "Поршневой компрессор",
        proizvoditelnost: "360 л/мин",
        "obem-resivera": "60 л",
        moshhnost: "2.2 кВт",
        davlenie: "8 бар",
        naznachenie: "Профессиональное использование"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "ELECTROLITE"
        },
        {
          label: "Тип",
          value: "Поршневой компрессор"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Производительность",
          value: "360 л/мин"
        },
        {
          label: "Объем ресивера",
          value: "60 л"
        },
        {
          label: "Мощность",
          value: "2.2 кВт"
        },
        {
          label: "Давление",
          value: "8 бар"
        },
        {
          label: "Назначение",
          value: "Профессиональное использование"
        }
      ]
    },
    {
      id: "kompressor-electrolite-410-50-220v-22kvt-8-bar",
      articul: "416299",
      title: "Компрессор ELECTROLITE 410/50 220В 2,2кВт 8 бар",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/9189813e-be5b-11ed-93eb-002590ba8282_b92889e2-22f7-11ee-9403-002590ba8282-303x303.jpeg",
      price: 21500,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "ELECTROLITE",
        tip: "Поршневой компрессор",
        proizvoditelnost: "410 л/мин",
        "obem-resivera": "50 л",
        moshhnost: "2.2 кВт",
        davlenie: "8 бар",
        napryazhenie: "220 В"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "ELECTROLITE"
        },
        {
          label: "Тип",
          value: "Поршневой компрессор"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Производительность",
          value: "410 л/мин"
        },
        {
          label: "Объем ресивера",
          value: "50 л"
        },
        {
          label: "Мощность",
          value: "2.2 кВт"
        },
        {
          label: "Давление",
          value: "8 бар"
        },
        {
          label: "Напряжение",
          value: "220 В"
        }
      ]
    },
    {
      id: "kompressor-electrolite-420-50",
      articul: "031680",
      title: "Компрессор ELECTROLITE 420/50",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/9e31508e-83aa-11e9-a98c-c8600046bc56_abe68e09-9feb-11ea-937f-002590ba8283-303x303.jpeg",
      price: 28300,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "ELECTROLITE",
        tip: "Поршневой компрессор",
        proizvoditelnost: "420 л/мин",
        "obem-resivera": "50 л",
        moshhnost: "2.2 кВт",
        davlenie: "8 бар",
        naznachenie: "Профессиональное использование"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "ELECTROLITE"
        },
        {
          label: "Тип",
          value: "Поршневой компрессор"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Производительность",
          value: "420 л/мин"
        },
        {
          label: "Объем ресивера",
          value: "50 л"
        },
        {
          label: "Мощность",
          value: "2.2 кВт"
        },
        {
          label: "Давление",
          value: "8 бар"
        },
        {
          label: "Назначение",
          value: "Профессиональное использование"
        }
      ]
    },
    {
      id: "kompressor-electrolite-470-80",
      articul: "031682",
      title: "Компрессор ELECTROLITE 470/80",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/fc8bf540-5dbb-11e9-8f64-c8600046bc56_abe68e06-9feb-11ea-937f-002590ba8283-303x303.jpeg",
      price: 39000,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "ELECTROLITE",
        tip: "Поршневой компрессор",
        proizvoditelnost: "470 л/мин",
        "obem-resivera": "80 л",
        moshhnost: "2.2 кВт",
        davlenie: "8 бар",
        naznachenie: "Профессиональное использование"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "ELECTROLITE"
        },
        {
          label: "Тип",
          value: "Поршневой компрессор"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Производительность",
          value: "470 л/мин"
        },
        {
          label: "Объем ресивера",
          value: "80 л"
        },
        {
          label: "Мощность",
          value: "2.2 кВт"
        },
        {
          label: "Давление",
          value: "8 бар"
        },
        {
          label: "Назначение",
          value: "Профессиональное использование"
        }
      ]
    },
    {
      id: "kompressor-electrolite-470-100",
      articul: "031681",
      title: "Компрессор ELECTROLITE 490/100",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/a7cafc8a-906f-11ea-937d-002590ba8283_abe68e07-9feb-11ea-937f-002590ba8283-303x303.jpeg",
      price: 37200,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "ELECTROLITE",
        tip: "Поршневой компрессор",
        proizvoditelnost: "490 л/мин",
        "obem-resivera": "100 л",
        moshhnost: "2.2 кВт",
        davlenie: "8 бар",
        naznachenie: "Профессиональное использование"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "ELECTROLITE"
        },
        {
          label: "Тип",
          value: "Поршневой компрессор"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Производительность",
          value: "490 л/мин"
        },
        {
          label: "Объем ресивера",
          value: "100 л"
        },
        {
          label: "Мощность",
          value: "2.2 кВт"
        },
        {
          label: "Давление",
          value: "8 бар"
        },
        {
          label: "Назначение",
          value: "Профессиональное использование"
        }
      ]
    }
  ]
};
