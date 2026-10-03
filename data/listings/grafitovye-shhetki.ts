import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/instrument/yelektroinstrument/raskhodnye-materialy-i-osnastka-dlya-yel/grafitovye-shhetki/ */
export const grafitovyeShhetkiListing: CatalogListingData = {
  path: "instrument/yelektroinstrument/raskhodnye-materialy-i-osnastka-dlya-yel/grafitovye-shhetki",
  title: "Графитовые щетки",
  totalCountLabel: "22 товара",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Интерскол",
        "Bosch",
        "Makita"
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
      id: "artikul-proizvoditelya",
      title: "Артикул производителя",
      options: [
        "00.10.01.01.19",
        "97.04.03.03.00",
        "1619P06346"
      ],
      truncate: false
    },
    {
      id: "model-instrumenta",
      title: "Модель инструмента",
      options: [
        "ДП-190",
        "GKS 190"
      ],
      truncate: false
    },
    {
      id: "naznachenie",
      title: "Назначение",
      options: [
        "Перфоратор",
        "Точило",
        "Электроинструмент"
      ],
      truncate: false
    },
    {
      id: "opisanie",
      title: "Описание",
      options: [
        "Выключатель в сборе для электроинструмента Интерскол. Оригинальная запасная часть. Легкая установка и надежная работа.",
        "Выключатель для точильного станка. Надежная конструкция, рассчитана на ток 20А. Подходит для замены в электроинструменте.",
        "Графитовые щетки для перфоратора Интерскол ДП-190. Оригинальная запасная часть. Обеспечивают надежный контакт и длительную работу двигателя.",
        "Уцененные щетки для циркулярной пилы Bosch GKS 190. Могут иметь незначительные косметические дефекты. Полностью исправны."
      ],
      truncate: false
    },
    {
      id: "sostoyanie",
      title: "Состояние",
      options: [
        "В сборе",
        "Уценка"
      ],
      truncate: false
    },
    {
      id: "tip-tovara",
      title: "Тип товара",
      options: [
        "Выключатель",
        "Щетки графитовые"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "vyklyuchatel-n-130-20a-tochilo-1-polozhenie",
      articul: "409187",
      title: "Выключатель № 130 (20А) точило 1 положение",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/3c249e0e-d525-11ec-93ce-002590ba8282_ad354d90-22f7-11ee-9403-002590ba8282-303x303.jpeg",
      price: 235,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Интерскол",
        "tip-tovara": "Выключатель",
        tok: "20А",
        naznachenie: "Точило",
        "kolichestvo-polozhenij": "1",
        opisanie: "Выключатель для точильного станка. Надежная конструкция, рассчитана на ток 20А. Подходит для замены в электроинструменте."
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
          label: "Тип товара",
          value: "Выключатель"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Ток",
          value: "20А"
        },
        {
          label: "Назначение",
          value: "Точило"
        },
        {
          label: "Количество положений",
          value: "1"
        },
        {
          label: "Описание",
          value: "Выключатель для точильного станка. Надежная конструкция, рассчитана на ток 20А. Подходит для замены в электроинструменте."
        }
      ]
    },
    {
      id: "vyklyuchatel-v-sbore-00-10-01-01-19-interskol",
      articul: "409186",
      title: "Выключатель в сборе 00.10.01.01.19 Интерскол",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/10/409186-372x233.jpeg",
      price: 1225,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Интерскол",
        "tip-tovara": "Выключатель",
        sostoyanie: "В сборе",
        "artikul-proizvoditelya": "00.10.01.01.19",
        naznachenie: "Электроинструмент",
        opisanie: "Выключатель в сборе для электроинструмента Интерскол. Оригинальная запасная часть. Легкая установка и надежная работа."
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
          label: "Тип товара",
          value: "Выключатель"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Состояние",
          value: "В сборе"
        },
        {
          label: "Артикул производителя",
          value: "00.10.01.01.19"
        },
        {
          label: "Назначение",
          value: "Электроинструмент"
        },
        {
          label: "Описание",
          value: "Выключатель в сборе для электроинструмента Интерскол. Оригинальная запасная часть. Легкая установка и надежная работа."
        }
      ]
    },
    {
      id: "shhetki-bosh-gks-190-1619p06346",
      articul: "410642",
      title: "Щетки БОШ GKS 190 1619P06346 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/410642-272x303.jpeg",
      price: 975,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Германия",
        brend: "Bosch",
        "tip-tovara": "Щетки графитовые",
        "model-instrumenta": "GKS 190",
        "artikul-proizvoditelya": "1619P06346",
        sostoyanie: "Уценка",
        opisanie: "Уцененные щетки для циркулярной пилы Bosch GKS 190. Могут иметь незначительные косметические дефекты. Полностью исправны."
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
          label: "Тип товара",
          value: "Щетки графитовые"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Модель инструмента",
          value: "GKS 190"
        },
        {
          label: "Артикул производителя",
          value: "1619P06346"
        },
        {
          label: "Состояние",
          value: "Уценка"
        },
        {
          label: "Описание",
          value: "Уцененные щетки для циркулярной пилы Bosch GKS 190. Могут иметь незначительные косметические дефекты. Полностью исправны."
        }
      ]
    },
    {
      id: "shhetki-interskol-dp-190-97-04-03-03-00",
      articul: "080088",
      title: "Щетки Интерскол ДП-190 97.04.03.03.00 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/8c7fc602-26c3-11e9-bf13-c8600046bc56_44158c3a-9fed-11ea-937f-002590ba8283-303x303.jpeg",
      price: 156,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Интерскол",
        "tip-tovara": "Щетки графитовые",
        "model-instrumenta": "ДП-190",
        "artikul-proizvoditelya": "97.04.03.03.00",
        naznachenie: "Перфоратор",
        opisanie: "Графитовые щетки для перфоратора Интерскол ДП-190. Оригинальная запасная часть. Обеспечивают надежный контакт и длительную работу двигателя."
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
          label: "Тип товара",
          value: "Щетки графитовые"
        },
        {
          label: "Модель инструмента",
          value: "ДП-190"
        },
        {
          label: "Артикул производителя",
          value: "97.04.03.03.00"
        },
        {
          label: "Назначение",
          value: "Перфоратор"
        },
        {
          label: "Описание",
          value: "Графитовые щетки для перфоратора Интерскол ДП-190. Оригинальная запасная часть. Обеспечивают надежный контакт и длительную работу двигателя."
        }
      ]
    },
    {
      id: "shhetki-makita-sv-419-makita-191962-4",
      articul: "080090",
      title: "Щетки Макита СВ-419 Макита 191962-4",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 0,
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
      id: "shhetki-makita-sv-459-makita-194722-3",
      articul: "080091",
      title: "Щетки Макита СВ-459 Макита 194722-3",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 0,
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
      id: "shhetki-praktika-dlja-bosch-790-755",
      articul: "6564",
      title: "Щетки Практика для BOSCH 790-755",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 325,
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
      id: "shhetki-sv-155-makita-181048-2",
      articul: "203806",
      title: "Щетки СВ-155 Макита 181048-2",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 0,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Makita"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Makita"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "shhetki-sv-155-praktika-makita-790-915",
      articul: "422693",
      title: "Щетки СВ-155 Практика MAKITA 790-915",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 390,
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
      id: "shhetki-sv-175-praktika-790-922-dlja-makita-195844-2-ucenka",
      articul: "080093",
      title: "Щетки СВ-175 Практика (790-922) для Макита 195844-2 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 20856,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Makita"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Makita"
        }
      ]
    },
    {
      id: "shhetki-sv-203-makita-191953-5",
      articul: "080094",
      title: "Щетки СВ-203 Макита 191953-5",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 0,
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
      id: "shhetki-sv-203-praktika-makita-790-939",
      articul: "432836",
      title: "Щетки СВ-203 Практика MAKITA 790-939",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 220,
      inStock: true,
      quickBuy: true,
      filterValues: {},
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    }
  ]
};
