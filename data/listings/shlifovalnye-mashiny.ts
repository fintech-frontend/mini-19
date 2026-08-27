import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/instrument/yelektroinstrument/shlifovalnye-mashiny-i-mnogofunkcion/shlifovalnye-mashiny/ */
export const shlifovalnyeMashinyListing: CatalogListingData = {
  path: "instrument/yelektroinstrument/shlifovalnye-mashiny-i-mnogofunkcion/shlifovalnye-mashiny",
  title: "Шлифовальные машины",
  totalCountLabel: "36 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "ДИОЛД",
        "Интерскол",
        "Не указан",
        "ПРЕМОСТ-Т",
        "Hanskonner",
        "MAX-PRO",
        "Sturm"
      ],
      truncate: true
    },
    {
      id: "moshhnost",
      title: "Мощность",
      options: [
        "220 Вт",
        "230 Вт",
        "270 Вт",
        "300 Вт",
        "420 Вт",
        "1000 Вт",
        "1300 Вт",
        "1400 Вт"
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
      id: "oboroty",
      title: "Обороты",
      options: [
        "1000-2200 об/мин",
        "8500 об/мин",
        "10000 об/мин",
        "12000 об/мин",
        "13500 об/мин",
        "регулируемые"
      ],
      truncate: false
    },
    {
      id: "osobennosti",
      title: "Особенности",
      options: [
        "Для монтажа гипсокартонных листов, телескопическая стойка",
        "Для полировки кузова автомобиля, регулировка оборотов",
        "Для шлифовки плоских поверхностей",
        "Может иметь незначительные косметические дефекты",
        "Мощный двигатель, для тяжелых работ",
        "Острое лезвие, эргономичная ручка",
        "Подсветка, для шлифовки стен и потолков",
        "Пылеотвод, удобная рукоятка",
        "Увеличенная подошва, высокая производительность"
      ],
      truncate: true
    },
    {
      id: "razmer-podoshvy",
      title: "Размер подошвы",
      options: [
        "104×204 мм",
        "115×230 мм"
      ],
      truncate: false
    },
    {
      id: "tip",
      title: "Тип",
      options: [
        "Орбитальная шлифмашина",
        "Плоскошлифмашина",
        "Подъемник для ГКЛ",
        "Полировальная машина",
        "Специализированный нож",
        "Углошлифмашина",
        "Шлифмашина",
        "Шлифмашина для стен"
      ],
      truncate: true
    }
  ],
  products: [
    {
      id: "mashina-polirov-interskol-upm-180ye-1300ye13-kvt",
      articul: "040154",
      title: "Машина полиров Интерскол УПМ-180Э/1300Э1,3 кВт",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/545d9984-3497-11e2-a1f1-c8600046bc56_3e16691a-9fed-11ea-937f-002590ba8283-372x256.jpeg",
      price: 6750,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Интерскол",
        tip: "Полировальная машина",
        moshhnost: "1300 Вт",
        "diametr-kruga": "180 мм",
        napryazhenie: "220 В",
        oboroty: "регулируемые",
        osobennosti: "Для полировки кузова автомобиля, регулировка оборотов"
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
          value: "Полировальная машина"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "1300 Вт"
        },
        {
          label: "Диаметр круга",
          value: "180 мм"
        },
        {
          label: "Напряжение",
          value: "220 В"
        },
        {
          label: "Обороты",
          value: "регулируемые"
        },
        {
          label: "Особенности",
          value: "Для полировки кузова автомобиля, регулировка оборотов"
        }
      ]
    },
    {
      id: "nozh-dlya-strizhki-ovec",
      articul: "408609",
      title: "Нож для стрижки овец",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/ff80d303-c2cc-11ec-93cd-002590ba8282_01edc8a1-c2d8-11ec-93cd-002590ba8282-372x233.jpeg",
      price: 1600,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Не указан",
        tip: "Специализированный нож",
        naznachenie: "Стрижка овец",
        material: "Сталь",
        "dlina-lezviya": "150 мм",
        osobennosti: "Острое лезвие, эргономичная ручка"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Не указан"
        },
        {
          label: "Тип",
          value: "Специализированный нож"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Назначение",
          value: "Стрижка овец"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Длина лезвия",
          value: "150 мм"
        },
        {
          label: "Особенности",
          value: "Острое лезвие, эргономичная ручка"
        }
      ]
    },
    {
      id: "orbitoshlifmashina-makita-vo-5030-125-300-vt",
      articul: "050713",
      title: "Орбитошлифмашина Makita ВО-5030 125-300 Вт",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 0,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        plavnyj: "Нет"
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
          label: "Плавный пуск",
          value: "Нет"
        }
      ]
    },
    {
      id: "orbitoshlifmashina-diold-mp-042-420vt-125mm-10044020",
      articul: "412224",
      title: "Орбитошлифмашина ДИОЛД МП-0,42 420Вт 125мм 10044020 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/7238bd6e-31d9-11ed-93d5-002590ba8282_663217c1-c964-11ed-93ec-002590ba8282-227x303.jpeg",
      price: 3320,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "ДИОЛД",
        tip: "Орбитальная шлифмашина",
        moshhnost: "420 Вт",
        "diametr-podoshvy": "125 мм",
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
          value: "ДИОЛД"
        },
        {
          label: "Тип",
          value: "Орбитальная шлифмашина"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "420 Вт"
        },
        {
          label: "Диаметр подошвы",
          value: "125 мм"
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
      id: "orbitoshlifmashina-interskol-yeshm-125-270ye-270vt",
      articul: "050714",
      title: "Орбитошлифмашина Интерскол ЭШМ 125/270Э 270Вт",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/b1b592f2-0a4a-11e3-a27a-c8600046bc56_3e16691d-9fed-11ea-937f-002590ba8283-372x198.jpeg",
      price: 5300,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Интерскол",
        tip: "Орбитальная шлифмашина",
        moshhnost: "270 Вт",
        "diametr-podoshvy": "125 мм",
        napryazhenie: "220 В",
        oboroty: "12000 об/мин",
        osobennosti: "Пылеотвод, удобная рукоятка"
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
          value: "Орбитальная шлифмашина"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "270 Вт"
        },
        {
          label: "Диаметр подошвы",
          value: "125 мм"
        },
        {
          label: "Напряжение",
          value: "220 В"
        },
        {
          label: "Обороты",
          value: "12000 об/мин"
        },
        {
          label: "Особенности",
          value: "Пылеотвод, удобная рукоятка"
        }
      ]
    },
    {
      id: "ploskoshlifmashina-interskol-pshm-104-220",
      articul: "056975",
      title: "Плоскошлифмашина Интерскол ПШМ-104/220",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/c0f0a0f6-0a4a-11e3-a27a-c8600046bc56_3e166920-9fed-11ea-937f-002590ba8283-372x248.jpeg",
      price: 4200,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Интерскол",
        tip: "Плоскошлифмашина",
        moshhnost: "220 Вт",
        "razmer-podoshvy": "104×204 мм",
        napryazhenie: "220 В",
        oboroty: "10000 об/мин",
        osobennosti: "Для шлифовки плоских поверхностей"
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
          value: "Плоскошлифмашина"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "220 Вт"
        },
        {
          label: "Размер подошвы",
          value: "104×204 мм"
        },
        {
          label: "Напряжение",
          value: "220 В"
        },
        {
          label: "Обороты",
          value: "10000 об/мин"
        },
        {
          label: "Особенности",
          value: "Для шлифовки плоских поверхностей"
        }
      ]
    },
    {
      id: "ploskoshlifmashina-interskol-pshm-115-300ye-115230-m",
      articul: "056976",
      title: "Плоскошлифмашина Интерскол ПШМ-115/300Э 115*230 мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/545d9982-3497-11e2-a1f1-c8600046bc56_3e166921-9fed-11ea-937f-002590ba8283-303x303.jpeg",
      price: 6900,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Интерскол",
        tip: "Плоскошлифмашина",
        moshhnost: "300 Вт",
        "razmer-podoshvy": "115×230 мм",
        napryazhenie: "220 В",
        oboroty: "8500 об/мин",
        osobennosti: "Увеличенная подошва, высокая производительность"
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
          value: "Плоскошлифмашина"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "300 Вт"
        },
        {
          label: "Размер подошвы",
          value: "115×230 мм"
        },
        {
          label: "Напряжение",
          value: "220 В"
        },
        {
          label: "Обороты",
          value: "8500 об/мин"
        },
        {
          label: "Особенности",
          value: "Увеличенная подошва, высокая производительность"
        }
      ]
    },
    {
      id: "ploskoshlifmashina-makita-3710-vo-93-185-190vt",
      articul: "114494",
      title: "Плоскошлифмашина Макита 3710 ВО 93*185-190Вт",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 0,
      inStock: false,
      quickBuy: true,
      filterValues: {},
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "10"
        }
      ]
    },
    {
      id: "podemnik-dlya-gkl-premost-t-gruzopod",
      articul: "416907",
      title: "Подъемник для ГКЛ ПРЕМОСТ-Т грузоподъеность 60 кг высота 3,3 м УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/416907-372x248.jpg",
      price: 17200,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "ПРЕМОСТ-Т",
        tip: "Подъемник для ГКЛ",
        gruzopodemnost: "60 кг",
        "vysota-podema": "3, 3 м",
        sostoyanie: "Уцененный товар",
        osobennosti: "Для монтажа гипсокартонных листов, телескопическая стойка"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "ПРЕМОСТ-Т"
        },
        {
          label: "Тип",
          value: "Подъемник для ГКЛ"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Грузоподъемность",
          value: "60 кг"
        },
        {
          label: "Высота подъема",
          value: "3, 3 м"
        },
        {
          label: "Состояние",
          value: "Уцененный товар"
        },
        {
          label: "Особенности",
          value: "Для монтажа гипсокартонных листов, телескопическая стойка"
        }
      ]
    },
    {
      id: "shlifmashina-230vt-max-pro-13500-ob-min-115-100-mm-85235",
      articul: "079250",
      title: "Шлифмашина 230Вт MAX-PRO 13500 об/мин 115-100 мм 85235 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/5f8d8934-622d-11e7-ab8a-c8600046bc56_944fba6c-9fed-11ea-937f-002590ba8283-372x259.jpeg",
      price: 2270,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "MAX-PRO",
        tip: "Шлифмашина",
        moshhnost: "230 Вт",
        oboroty: "13500 об/мин",
        sostoyanie: "Уцененный товар",
        plavnyj: "Нет",
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
          label: "Тип",
          value: "Шлифмашина"
        },
        {
          label: "Мощность",
          value: "230 Вт"
        },
        {
          label: "Обороты",
          value: "13500 об/мин"
        },
        {
          label: "Состояние",
          value: "Уцененный товар"
        },
        {
          label: "Плавный пуск",
          value: "Нет"
        },
        {
          label: "Особенности",
          value: "Может иметь незначительные косметические дефекты"
        }
      ]
    },
    {
      id: "shlifmashina-hanskonner-hag918cp-1400vt-180mm",
      articul: "408922",
      title: "Шлифмашина Hanskonner HAG918CP 1400Вт 180мм",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/d8ee7942-c799-11ec-93cd-002590ba8282_724c4804-cea7-11ec-93ce-002590ba8282-372x278.jpeg",
      price: 12700,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Hanskonner",
        tip: "Углошлифмашина",
        moshhnost: "1400 Вт",
        diametr: "180 мм",
        oboroty: "8500 об/мин",
        osobennosti: "Мощный двигатель, для тяжелых работ"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Hanskonner"
        },
        {
          label: "Тип",
          value: "Углошлифмашина"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "1400 Вт"
        },
        {
          label: "Диаметр диска",
          value: "180 мм"
        },
        {
          label: "Обороты",
          value: "8500 об/мин"
        },
        {
          label: "Особенности",
          value: "Мощный двигатель, для тяжелых работ"
        }
      ]
    },
    {
      id: "shlifmashina-sturm-dws6010-1000vt-1000-2200-ob-min-podsvetka-d",
      articul: "425042",
      title: "Шлифмашина Sturm DWS6010 1000Вт 1000-2200 об/мин подсветка д/стен и потолков",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/425042-372x248.jpg",
      price: 10700,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Sturm",
        tip: "Шлифмашина для стен",
        moshhnost: "1000 Вт",
        oboroty: "1000-2200 об/мин",
        osobennosti: "Подсветка, для шлифовки стен и потолков"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Sturm"
        },
        {
          label: "Тип",
          value: "Шлифмашина для стен"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "1000 Вт"
        },
        {
          label: "Обороты",
          value: "1000-2200 об/мин"
        },
        {
          label: "Особенности",
          value: "Подсветка, для шлифовки стен и потолков"
        }
      ]
    }
  ]
};
