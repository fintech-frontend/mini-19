import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/svarochnoe-oborudovanie/gorelki-gazovye-rezaki-ballony/reduktory-ventilja-reguljatory-klapany/ */
export const reduktoryVentiljaReguljatoryKlapanyListing: CatalogListingData = {
  path: "svarochnoe-oborudovanie/gorelki-gazovye-rezaki-ballony/reduktory-ventilja-reguljatory-klapany",
  title: "Редукторы,вентиля,регуляторы,клапаны",
  totalCountLabel: "27 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "БАМЗ",
        "KRASS"
      ],
      truncate: false
    },
    {
      id: "davlenie",
      title: "Давление пропана (МПа)",
      options: [
        "0,3",
        "0,15",
        "1,5"
      ],
      truncate: false
    },
    {
      id: "kolichestvo",
      title: "Количество манометров",
      options: [
        "1",
        "2"
      ],
      truncate: false
    },
    {
      id: "max",
      title: "Max пропускная способность, м³/ч",
      options: [
        "2,4",
        "5"
      ],
      truncate: false
    },
    {
      id: "rabochij",
      title: "Рабочий газ",
      options: [
        "Аргон, углекислота",
        "Ацетилен",
        "Кислород",
        "Пропан"
      ],
      truncate: false
    },
    {
      id: "razmer",
      title: "Размер зубьев",
      options: [
        "60х62х120",
        "82х27х21",
        "100х160х160",
        "120х110х125",
        "130х120х140",
        "130х130х130",
        "132х155х50",
        "140х120х140",
        "160х140х170",
        "220х157х88"
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
      id: "vhodnoe",
      title: "Входное давление, бар",
      options: [
        "25",
        "150",
        "Хомут",
        "G3/4"
      ],
      truncate: false
    },
    {
      id: "vyhodnoe",
      title: "Выходное соединение",
      options: [
        "1,5",
        "5,1",
        "М16х1.5LH"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "ventil-vk-1-kislorod",
      articul: "400635",
      title: "Вентиль ВК-1 кислород",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/d0b6e708-a04d-11eb-93ab-002590ba8282_6b6e310a-a0de-11eb-93ab-002590ba8282-372x209.jpeg",
      price: 2150,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "БАМЗ",
        material: "Латунь",
        razmer: "60х62х120",
        rabochee: "20",
        podklyuchenie: "27,8",
        rabochij: "Кислород",
        rezba: "G3/4"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "БАМЗ"
        },
        {
          label: "Материал",
          value: "Латунь"
        },
        {
          label: "Размер зубьев",
          value: "60х62х120"
        },
        {
          label: "Рабочее давление",
          value: "20"
        },
        {
          label: "Подключение баллона",
          value: "27,8"
        },
        {
          label: "Рабочий газ",
          value: "Кислород"
        },
        {
          label: "Резьба на выходе",
          value: "G3/4"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "klapan-obratnyy-krass-ko-g-20-vkhod-rezaka-gor",
      articul: "026931",
      title: "Клапан обратный KRASS КО-Г-20 вход резака/горелки 2855574",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/0ba0a758-b0a4-11ea-9384-002590ba8283_4b93bcf3-b5eb-11ea-9384-002590ba8283-308x303.jpeg",
      price: 761,
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
      id: "klapan-obratnyy-krass-ko-k-20-vkhod-rezaka-gor",
      articul: "026932",
      title: "Клапан обратный KRASS КО-К-20 вход резака/горелки 2855575",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/1c18ea34-b0a4-11ea-9384-002590ba8283_e293e2aa-b5ea-11ea-9384-002590ba8283-81x303.jpeg",
      price: 761,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "KRASS",
        razmer: "82х27х21",
        rabochij: "Кислород"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "KRASS"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Размер зубьев",
          value: "82х27х21"
        },
        {
          label: "Рабочий газ",
          value: "Кислород"
        }
      ]
    },
    {
      id: "reguljator-rashoda-gaza-u-30-krp-krass-2133577-ucenka",
      articul: "401001",
      title: "Регулятор расхода газа У 30 КРП KRASS 2133577 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/06/401001-308x303.jpeg",
      price: 6625,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "KRASS",
        razmer: "160х140х170",
        rabochij: "Аргон, углекислота",
        vyhodnoe: "5,1",
        vhodnoe: "150",
        max: "2,4",
        kolichestvo: "1"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "KRASS"
        },
        {
          label: "Размер зубьев",
          value: "160х140х170"
        },
        {
          label: "Рабочий газ",
          value: "Аргон, углекислота"
        },
        {
          label: "Выходное соединение",
          value: "М16х1.5; 6.3 мм; 9 мм"
        },
        {
          label: "Входное давление, бар",
          value: "150"
        },
        {
          label: "Max пропускная способность, м³/ч",
          value: "2,4"
        },
        {
          label: "Выходное давление, бар",
          value: "5,1"
        },
        {
          label: "Количество манометров",
          value: "1"
        }
      ]
    },
    {
      id: "reguljator-rashoda-gaza-u-30-ar-40-krass-2117509-ucenka",
      articul: "409758",
      title: "Регулятор расхода газа У 30/АР 40 KRASS 2117509 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/06/409758-306x303.jpeg",
      price: 185703,
      inStock: true,
      quickBuy: true,
      filterValues: {}
    },
    {
      id: "reguljator-rashoda-gaza-u-30-ar-40-kr-krass-2133518-2133508",
      articul: "401002",
      title: "Регулятор расхода газа У 30/АР 40 КР KRASS 2133518(2133508)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/06/401002-308x303.jpeg",
      price: 3783,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "KRASS",
        razmer: "130х120х140",
        rabochij: "Аргон, углекислота",
        vhodnoe: "150",
        vyhodnoe: "5,1",
        max: "2,4",
        kolichestvo: "1"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "KRASS"
        },
        {
          label: "Размер зубьев",
          value: "130х120х140"
        },
        {
          label: "Рабочий газ",
          value: "Аргон, углекислота"
        },
        {
          label: "Входное соединение",
          value: "G3/4"
        },
        {
          label: "Выходное соединение",
          value: "М16х1.5; 6.3 мм; 9 мм"
        },
        {
          label: "Входное давление, бар",
          value: "150"
        },
        {
          label: "Max пропускная способность, м³/ч",
          value: "2,4"
        },
        {
          label: "Выходное давление, бар",
          value: "5,1"
        },
        {
          label: "Количество манометров",
          value: "1"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "reguljator-rashoda-gaza-u-30-ar-40-kr-r-krass-2133519-ucenka",
      articul: "401003",
      title: "Регулятор расхода газа У 30/АР 40 КР Р KRASS 2133519 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/06/401003-304x303.jpeg",
      price: 4288,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "KRASS",
        razmer: "100х160х160",
        rabochij: "Аргон, углекислота",
        vyhodnoe: "5,1",
        vhodnoe: "G3/4",
        max: "2,4",
        kolichestvo: "1"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "KRASS"
        },
        {
          label: "Размер зубьев",
          value: "100х160х160"
        },
        {
          label: "Рабочий газ",
          value: "Аргон, углекислота"
        },
        {
          label: "Выходное соединение",
          value: "М16х1.5; 6.3 мм; 9 мм"
        },
        {
          label: "Входное давление, бар",
          value: "150"
        },
        {
          label: "Max пропускная способность, м³/ч",
          value: "2,4"
        },
        {
          label: "Выходное давление, бар",
          value: "5,1"
        },
        {
          label: "Количество манометров",
          value: "1"
        },
        {
          label: "Входное соединение",
          value: "G3/4"
        }
      ]
    },
    {
      id: "reduktor-acetilenovyj-bao-5-4-krass-2117579",
      articul: "401004",
      title: "Редуктор ацетиленовый БАО 5 4 KRASS 2117579 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/06/401004-312x303.jpeg",
      price: 383724,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "KRASS",
        razmer: "130х130х130",
        rabochij: "Ацетилен",
        vyhodnoe: "1,5",
        vhodnoe: "Хомут",
        max: "5",
        kolichestvo: "2"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "KRASS"
        },
        {
          label: "Размер зубьев",
          value: "130х130х130"
        },
        {
          label: "Рабочий газ",
          value: "Ацетилен"
        },
        {
          label: "Выходное соединение",
          value: "М16х1.5LH; 6.3 мм; 9 мм"
        },
        {
          label: "Входное давление, бар",
          value: "25"
        },
        {
          label: "Max пропускная способность, м³/ч",
          value: "5"
        },
        {
          label: "Выходное давление, бар",
          value: "1,5"
        },
        {
          label: "Количество манометров",
          value: "2"
        },
        {
          label: "Входное соединение",
          value: "Хомут"
        }
      ]
    },
    {
      id: "reduktor-acetilenovyj-bao-5-kp-krass-2117517",
      articul: "401005",
      title: "Редуктор ацетиленовый БАО 5 KP KRASS 2117517",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/06/401005-311x303.jpeg",
      price: 3750,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "KRASS",
        razmer: "140х120х140",
        rabochij: "Ацетилен",
        vhodnoe: "25",
        vyhodnoe: "1,5",
        max: "5",
        kolichestvo: "2"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "KRASS"
        },
        {
          label: "Размер зубьев",
          value: "140х120х140"
        },
        {
          label: "Рабочий газ",
          value: "Ацетилен"
        },
        {
          label: "Входное соединение",
          value: "Хомут"
        },
        {
          label: "Выходное соединение",
          value: "М16х1.5LH; 6.3 мм; 9 мм"
        },
        {
          label: "Входное давление, бар",
          value: "25"
        },
        {
          label: "Max пропускная способность, м³/ч",
          value: "5"
        },
        {
          label: "Выходное давление, бар",
          value: "1,5"
        },
        {
          label: "Количество манометров",
          value: "2"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "reduktor-acetilenovyj-bao-5-mini-krass-2117610-2117505-2117615-ucenka",
      articul: "401006",
      title: "Редуктор ацетиленовый БАО 5 mini KRASS 2117610 (2117505,2117615) УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/06/401006-310x303.jpeg",
      price: 160740,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "KRASS",
        razmer: "120х110х125",
        rabochij: "Ацетилен",
        davlenie: "1,5",
        vyhodnoe: "1,5",
        vhodnoe: "Хомут",
        max: "5",
        kolichestvo: "2"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "KRASS"
        },
        {
          label: "Размер зубьев",
          value: "120х110х125"
        },
        {
          label: "Рабочий газ",
          value: "Ацетилен"
        },
        {
          label: "Давление пропана (МПа)",
          value: "1,5"
        },
        {
          label: "Выходное соединение",
          value: "М16х1.5LH; 6.3 мм; 9 мм"
        },
        {
          label: "Входное давление, бар",
          value: "25"
        },
        {
          label: "Max пропускная способность, м³/ч",
          value: "5"
        },
        {
          label: "Выходное давление, бар",
          value: "1,5"
        },
        {
          label: "Количество манометров",
          value: "2"
        },
        {
          label: "Входное соединение",
          value: "Хомут"
        }
      ]
    },
    {
      id: "reduktor-bao-5-2-acetilen",
      articul: "061402",
      title: "Редуктор БАО-5-2 ацетилен",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/06/061402-310x303.jpeg",
      price: 1350,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        razmer: "220х157х88",
        rabochij: "Ацетилен",
        davlenie: "0,15",
        vhodnoe: "25",
        vyhodnoe: "М16х1.5LH",
        max: "5",
        kolichestvo: "2"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Размер зубьев",
          value: "220х157х88"
        },
        {
          label: "Рабочий газ",
          value: "Ацетилен"
        },
        {
          label: "Давление пропана (МПа)",
          value: "0,15"
        },
        {
          label: "Входное соединение",
          value: "Хомут"
        },
        {
          label: "Выходное соединение",
          value: "М16х1.5LH"
        },
        {
          label: "Входное давление, бар",
          value: "25"
        },
        {
          label: "Max пропускная способность, м³/ч",
          value: "5"
        },
        {
          label: "Количество манометров",
          value: "2"
        }
      ]
    },
    {
      id: "reduktor-bpo-5-3",
      articul: "061406",
      title: "Редуктор БПО – 5 – 3",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/06/061406-310x303.jpeg",
      price: 1250,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        razmer: "132х155х50",
        rabochij: "Пропан",
        davlenie: "0,3",
        vhodnoe: "25",
        vyhodnoe: "М16х1.5LH",
        max: "5",
        kolichestvo: "1"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Размер зубьев",
          value: "132х155х50"
        },
        {
          label: "Рабочий газ",
          value: "Пропан"
        },
        {
          label: "Давление пропана (МПа)",
          value: "0,3"
        },
        {
          label: "Входное соединение",
          value: "W21.8х1/14LH"
        },
        {
          label: "Выходное соединение",
          value: "М16х1.5LH"
        },
        {
          label: "Входное давление, бар",
          value: "25"
        },
        {
          label: "Max пропускная способность, м³/ч",
          value: "5"
        },
        {
          label: "Количество манометров",
          value: "1"
        }
      ]
    }
  ]
};
