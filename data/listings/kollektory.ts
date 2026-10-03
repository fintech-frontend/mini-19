import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/otoplenie/metalloplastikovye-truby-i-fitingi-v/kollektory/ */
export const kollektoryListing: CatalogListingData = {
  path: "otoplenie/metalloplastikovye-truby-i-fitingi-v/kollektory",
  title: "Коллекторы",
  totalCountLabel: "31 товар",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "–",
        "Север",
        "HLV",
        "RISPA",
        "STI",
        "VALFEX",
        "WAYS"
      ],
      truncate: true
    },
    {
      id: "kolichestvo-vyhodov",
      title: "Количество выходов",
      options: [
        "2",
        "3",
        "4",
        "11"
      ],
      truncate: false
    },
    {
      id: "kolichestvo-konturov",
      title: "Количество контуров",
      options: [
        "3",
        "5"
      ],
      truncate: false
    },
    {
      id: "komplektaciya",
      title: "Комплектация",
      options: [
        "С 3 кронштейнами",
        "С кронштейнами",
        "С расходомерами"
      ],
      truncate: false
    },
    {
      id: "material",
      title: "Материал",
      options: [
        "Нержавеющая сталь",
        "Сталь"
      ],
      truncate: false
    },
    {
      id: "model",
      title: "Модель",
      options: [
        "8522",
        "109560",
        "ГРУ+КМГ 60-3ВН",
        "ГРУ+КМГ 60-3ВУ",
        "ГРУ+КМГ 60-5ВУ"
      ],
      truncate: false
    },
    {
      id: "podklyuchenie",
      title: "Подключение",
      options: [
        "1\" х 1/2\"",
        "1\" х 3/4\""
      ],
      truncate: false
    },
    {
      id: "seriya",
      title: "Серия",
      options: [
        "М3",
        "М5"
      ],
      truncate: false
    },
    {
      id: "tip",
      title: "Тип",
      options: [
        "Гидравлический разделитель с коллектором",
        "Коллектор в сборе",
        "Коллекторная группа"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "gidrorazdelitel-gru-kmg-60-3vn-stal-s-3-m",
      articul: "414062",
      title: "Гидроразделитель ГРУ + КМГ 60-3ВН сталь с 3-мя кронштейнами",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/09/414062-372x259.jpeg",
      price: 9290,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "–",
        "strana-proizvoditel": "Россия",
        tip: "Гидравлический разделитель с коллектором",
        "kolichestvo-konturov": "3",
        material: "Сталь",
        komplektaciya: "С кронштейнами",
        model: "ГРУ+КМГ 60-3ВН",
        naznachenie: "Для систем отопления"
      },
      specs: [
        {
          label: "Бренд",
          value: "–"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Гидравлический разделитель с коллектором"
        },
        {
          label: "Количество контуров",
          value: "3"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Комплектация",
          value: "С кронштейнами"
        },
        {
          label: "Модель",
          value: "ГРУ+КМГ 60-3ВН"
        },
        {
          label: "Назначение",
          value: "Для систем отопления"
        }
      ]
    },
    {
      id: "gidrorazdelitel-gru-kmg-60-3vu-stal-s-3-ja-kronsht-rispa-m3",
      articul: "434582",
      title: "Гидроразделитель ГРУ+КМГ 60-3ВУ сталь с 3-я кроншт RISPA (М3)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 9550,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "RISPA",
        "strana-proizvoditel": "Россия",
        tip: "Гидравлический разделитель с коллектором",
        "kolichestvo-konturov": "3",
        material: "Сталь",
        komplektaciya: "С 3 кронштейнами",
        model: "ГРУ+КМГ 60-3ВУ",
        seriya: "М3"
      },
      specs: [
        {
          label: "Бренд",
          value: "RISPA"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Гидравлический разделитель с коллектором"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Количество контуров",
          value: "3"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Комплектация",
          value: "С 3 кронштейнами"
        },
        {
          label: "Модель",
          value: "ГРУ+КМГ 60-3ВУ"
        },
        {
          label: "Серия",
          value: "М3"
        }
      ]
    },
    {
      id: "gidrorazdelitel-gru-kmg-60-5vu-stal-s-3-ja-kronsht-rispa-m5",
      articul: "434583",
      title: "Гидроразделитель ГРУ+КМГ 60-5ВУ сталь с 3-я кроншт RISPA (М5)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/09/434583-372x246.jpeg",
      price: 12000,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "RISPA",
        "strana-proizvoditel": "Россия",
        tip: "Гидравлический разделитель с коллектором",
        "kolichestvo-konturov": "5",
        material: "Сталь",
        komplektaciya: "С 3 кронштейнами",
        model: "ГРУ+КМГ 60-5ВУ",
        seriya: "М5"
      },
      specs: [
        {
          label: "Бренд",
          value: "RISPA"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Гидравлический разделитель с коллектором"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Количество контуров",
          value: "5"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Комплектация",
          value: "С 3 кронштейнами"
        },
        {
          label: "Модель",
          value: "ГРУ+КМГ 60-5ВУ"
        },
        {
          label: "Серия",
          value: "М5"
        }
      ]
    },
    {
      id: "gidrorazdelitel-sever-v3",
      articul: "204297",
      title: "Гидроразделитель Север-V3",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/9b89511f-6d09-11eb-93a5-002590ba8282_afe19334-9aab-11eb-93aa-002590ba8282-164x303.jpeg",
      price: 11300,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "Север",
        "strana-proizvoditel": "Россия",
        tip: "Гидравлический разделитель с коллектором",
        "kolichestvo-konturov": "3",
        moshhnost: "70 кВт",
        davlenie: "6 бар",
        "podklyuchenie-kotla": "1 1/4\" НР",
        "podklyuchenie-konturov": "1\" НР"
      },
      specs: [
        {
          label: "Бренд",
          value: "Север"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Гидравлический разделитель с коллектором"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Количество контуров",
          value: "3"
        },
        {
          label: "Мощность",
          value: "70 кВт"
        },
        {
          label: "Давление",
          value: "6 бар"
        },
        {
          label: "Подключение котла",
          value: "1 1/4\" НР"
        },
        {
          label: "Подключение контуров",
          value: "1\" НР"
        }
      ]
    },
    {
      id: "gidrorazdelitel-sever-m3",
      articul: "009360",
      title: "Гидроразделитель Север-М3",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/4654a6c1-5a13-11ea-a9f6-c8600046bc54_bf9cf0eb-9e55-11ea-937e-002590ba8283-242x303.jpeg",
      price: 11595,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "Север",
        "strana-proizvoditel": "Россия",
        tip: "Гидравлический разделитель с коллектором",
        "kolichestvo-konturov": "3",
        moshhnost: "70 кВт",
        davlenie: "6 бар",
        "podklyuchenie-kotla": "1 1/4\" НР",
        "podklyuchenie-konturov": "1\" НР"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Бренд",
          value: "Север"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Гидравлический разделитель с коллектором"
        },
        {
          label: "Количество контуров",
          value: "3"
        },
        {
          label: "Мощность",
          value: "70 кВт"
        },
        {
          label: "Давление",
          value: "6 бар"
        },
        {
          label: "Подключение котла",
          value: "1 1/4\" НР"
        },
        {
          label: "Подключение контуров",
          value: "1\" НР"
        }
      ]
    },
    {
      id: "gidrorazdelitel-sever-m5",
      articul: "116692",
      title: "Гидроразделитель Север-М5",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/170c9d22-62ca-11eb-93a2-002590ba8282_879ed633-d1b0-11ec-93ce-002590ba8282-372x303.jpeg",
      price: 15960,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Север",
        "strana-proizvoditel": "Россия",
        tip: "Гидравлический разделитель с коллектором",
        "kolichestvo-konturov": "5",
        moshhnost: "70 кВт",
        davlenie: "6 бар",
        "podklyuchenie-kotla": "1 1/4\" НР",
        "podklyuchenie-konturov": "1\" НР"
      },
      specs: [
        {
          label: "Бренд",
          value: "Север"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Гидравлический разделитель с коллектором"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Количество контуров",
          value: "5"
        },
        {
          label: "Мощность",
          value: "70 кВт"
        },
        {
          label: "Давление",
          value: "6 бар"
        },
        {
          label: "Подключение котла",
          value: "1 1/4\" НР"
        },
        {
          label: "Подключение контуров",
          value: "1\" НР"
        }
      ]
    },
    {
      id: "kollektor-v-sbore-s-reg-vent-2-vykh-1kh1-2-hlv-109560",
      articul: "031083",
      title: "Коллектор в сборе с рег Вент 2 вых 1х1/2 HLV 109560 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/ae8223f7-e772-11e5-80a4-c8600046bc56_bf9cf0f1-9e55-11ea-937e-002590ba8283-372x279.jpeg",
      price: 498,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "HLV",
        "strana-proizvoditel": "Россия",
        tip: "Коллектор в сборе",
        "kolichestvo-vyhodov": "2",
        podklyuchenie: "1\" х 1/2\"",
        model: "109560",
        naznachenie: "Для систем отопления"
      },
      specs: [
        {
          label: "Бренд",
          value: "HLV"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Коллектор в сборе"
        },
        {
          label: "Количество выходов",
          value: "2"
        },
        {
          label: "Подключение",
          value: "1\" х 1/2\""
        },
        {
          label: "Модель",
          value: "109560"
        },
        {
          label: "Назначение",
          value: "Для систем отопления"
        }
      ]
    },
    {
      id: "kollektor-gr-nerzh-v-sbore-s-rash-1h11-vyh-3-4-sti",
      articul: "434412",
      title: "Коллектор гр нерж в сборе с расх 1х11 вых 3/4 STI",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/09/434412-372x279.jpeg",
      price: 16250,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "STI",
        "strana-proizvoditel": "Россия",
        tip: "Коллекторная группа",
        material: "Нержавеющая сталь",
        "kolichestvo-vyhodov": "11",
        podklyuchenie: "1\" х 3/4\"",
        komplektaciya: "С расходомерами",
        naznachenie: "Для систем отопления"
      },
      specs: [
        {
          label: "Бренд",
          value: "STI"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Коллекторная группа"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Материал",
          value: "Нержавеющая сталь"
        },
        {
          label: "Количество выходов",
          value: "11"
        },
        {
          label: "Подключение",
          value: "1\" х 3/4\""
        },
        {
          label: "Комплектация",
          value: "С расходомерами"
        },
        {
          label: "Назначение",
          value: "Для систем отопления"
        }
      ]
    },
    {
      id: "kollektor-gr-nerzh-v-sbore-s-raskh-1kh2-vykh-3-4-valfe",
      articul: "425110",
      title: "Коллектор гр нерж в сборе с расх 1х2 вых 3/4 VALFEX",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/09/425110-302x303.jpeg",
      price: 5450,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "VALFEX",
        "strana-proizvoditel": "Россия",
        tip: "Коллекторная группа",
        material: "Нержавеющая сталь",
        "kolichestvo-vyhodov": "2",
        podklyuchenie: "1\" х 3/4\"",
        komplektaciya: "С расходомерами",
        naznachenie: "Для систем отопления"
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
          value: "Коллекторная группа"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Материал",
          value: "Нержавеющая сталь"
        },
        {
          label: "Количество выходов",
          value: "2"
        },
        {
          label: "Подключение",
          value: "1\" х 3/4\""
        },
        {
          label: "Комплектация",
          value: "С расходомерами"
        },
        {
          label: "Назначение",
          value: "Для систем отопления"
        }
      ]
    },
    {
      id: "kollektor-gr-nerzh-v-sbore-s-rash-1h2-vyh-wa",
      articul: "414060",
      title: "Коллектор гр нерж в сборе с расх 1х2 вых ¾ WAYS 8522",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/09/414060-303x303.jpeg",
      price: 5160,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "WAYS",
        "strana-proizvoditel": "Россия",
        tip: "Коллекторная группа",
        material: "Нержавеющая сталь",
        "kolichestvo-vyhodov": "2",
        podklyuchenie: "1\" х 3/4\"",
        komplektaciya: "С расходомерами",
        model: "8522"
      },
      specs: [
        {
          label: "Бренд",
          value: "WAYS"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип",
          value: "Коллекторная группа"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Материал",
          value: "Нержавеющая сталь"
        },
        {
          label: "Количество выходов",
          value: "2"
        },
        {
          label: "Подключение",
          value: "1\" х 3/4\""
        },
        {
          label: "Комплектация",
          value: "С расходомерами"
        },
        {
          label: "Модель",
          value: "8522"
        }
      ]
    },
    {
      id: "kollektor-gr-nerzh-v-sbore-s-raskh-1kh3-vykh-3-4-valfe",
      articul: "422956",
      title: "Коллектор гр нерж в сборе с расх 1х3 вых 3/4 VALFEX",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/09/422956-300x303.jpeg",
      price: 5600,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "VALFEX",
        "strana-proizvoditel": "Россия",
        tip: "Коллекторная группа",
        material: "Нержавеющая сталь",
        "kolichestvo-vyhodov": "3",
        podklyuchenie: "1\" х 3/4\"",
        komplektaciya: "С расходомерами",
        naznachenie: "Для систем отопления"
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
          value: "Коллекторная группа"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Материал",
          value: "Нержавеющая сталь"
        },
        {
          label: "Количество выходов",
          value: "3"
        },
        {
          label: "Подключение",
          value: "1\" х 3/4\""
        },
        {
          label: "Комплектация",
          value: "С расходомерами"
        },
        {
          label: "Назначение",
          value: "Для систем отопления"
        }
      ]
    },
    {
      id: "kollektor-gr-nerzh-v-sbore-s-raskh-1kh4-vykh-3-4-valfe",
      articul: "422957",
      title: "Коллектор гр нерж в сборе с расх 1х4 вых 3/4 VALFEX",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/09/422957-351x303.jpeg",
      price: 6000,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "VALFEX",
        "strana-proizvoditel": "Россия",
        tip: "Коллекторная группа",
        material: "Нержавеющая сталь",
        "kolichestvo-vyhodov": "4",
        podklyuchenie: "1\" х 3/4\"",
        komplektaciya: "С расходомерами",
        naznachenie: "Для систем отопления"
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
          value: "Коллекторная группа"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Материал",
          value: "Нержавеющая сталь"
        },
        {
          label: "Количество выходов",
          value: "4"
        },
        {
          label: "Подключение",
          value: "1\" х 3/4\""
        },
        {
          label: "Комплектация",
          value: "С расходомерами"
        },
        {
          label: "Назначение",
          value: "Для систем отопления"
        }
      ]
    }
  ]
};
