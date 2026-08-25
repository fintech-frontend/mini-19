import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/tovary-dlya-doma-sada-i-ogoroda/sadovyy-inventar/gazonokosilki-i-trimmery/trimmery-benzinovye/ */
export const trimmeryBenzinovyeListing: CatalogListingData = {
  path: "tovary-dlya-doma-sada-i-ogoroda/sadovyy-inventar/gazonokosilki-i-trimmery/trimmery-benzinovye",
  title: "Триммеры бензиновые",
  totalCountLabel: "33 товара",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Huter",
        "KUMA"
      ],
      truncate: false
    },
    {
      id: "moshhnost-kvt",
      title: "Мощность (кВт)",
      options: [
        "1.3",
        "1.5",
        "1.9",
        "1.75",
        "2.0",
        "2.2"
      ],
      truncate: false
    },
    {
      id: "obem-dvigatelya-sm",
      title: "Объём двигателя (см³)",
      options: [
        "33",
        "49",
        "52",
        "66",
        "70"
      ],
      truncate: false
    },
    {
      id: "rukoyatka",
      title: "Рукоятка",
      options: [
        "Т-образная",
        "D-образная"
      ],
      truncate: false
    },
    {
      id: "tip-dvigatelya",
      title: "Тип двигателя",
      options: [
        "2-тактный",
        "4-тактный"
      ],
      truncate: false
    },
    {
      id: "shtanga",
      title: "Штанга",
      options: [
        "Прямая",
        "Разборная"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "benzotrimmer-kuma-tb-52k-175-kvt-8-kg-pryam-nerazb",
      articul: "417934",
      title: "Бензотриммер KUMA ТБ-52К 1,75 кВт/8 кг прям.неразбор.штанга/леска нож Акция",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/03/417934-316x303.jpeg",
      price: 6000,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "KUMA",
        "strana-proizvoditelya": "Китай",
        "tip-dvigatelya": "2-тактный",
        nelikvid: "Да",
        "moshhnost-kvt": "1.75",
        "obem-dvigatelya-sm": "52",
        shtanga: "Прямая",
        rukoyatka: "Т-образная",
        "rezhushhij-instrument": "Леска + нож",
        "ves-kg": "8.0"
      },
      specs: [
        {
          label: "Бренд",
          value: "KUMA"
        },
        {
          label: "Страна производителя",
          value: "Китай"
        },
        {
          label: "Тип двигателя",
          value: "2-тактный"
        },
        {
          label: "Неликвид",
          value: "Да"
        },
        {
          label: "Мощность (кВт)",
          value: "1.75"
        },
        {
          label: "Объём двигателя (см³)",
          value: "52"
        },
        {
          label: "Штанга",
          value: "Прямая"
        },
        {
          label: "Рукоятка",
          value: "Т-образная"
        },
        {
          label: "Режущий инструмент",
          value: "Леска + нож"
        },
        {
          label: "Вес (кг)",
          value: "8.0"
        }
      ]
    },
    {
      id: "benzinovyy-trimmer-ggt-1300s-70-2-8",
      articul: "014507",
      title: "Бензиновый триммер GGT-1300S 70/2/8",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/8e165d66-30c7-11e2-a1f1-c8600046bc56_4ead4c8a-9feb-11ea-937f-002590ba8283-372x248.jpeg",
      price: 10200,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "Huter",
        "strana-proizvoditelya": "Китай",
        "tip-dvigatelya": "2-тактный",
        "moshhnost-kvt": "1.3",
        "obem-dvigatelya-sm": "33",
        shtanga: "Прямая",
        rukoyatka: "D-образная",
        "rezhushhij-instrument": "Леска + нож",
        "ves-kg": "5.2"
      },
      specs: [
        {
          label: "Бренд",
          value: "Huter"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производителя",
          value: "Китай"
        },
        {
          label: "Тип двигателя",
          value: "2-тактный"
        },
        {
          label: "Мощность (кВт)",
          value: "1.3"
        },
        {
          label: "Объём двигателя (см³)",
          value: "33"
        },
        {
          label: "Штанга",
          value: "Прямая"
        },
        {
          label: "Рукоятка",
          value: "D-образная"
        },
        {
          label: "Режущий инструмент",
          value: "Леска + нож"
        },
        {
          label: "Вес (кг)",
          value: "5.2"
        }
      ]
    },
    {
      id: "benzinovyy-trimmer-ggt-1300t-70-2-7",
      articul: "014508",
      title: "Бензиновый триммер GGT-1300Т 70/2/7",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/41e6ab0d-b86a-11e2-b3e3-c8600046bc56_4ead4c8b-9feb-11ea-937f-002590ba8283-372x248.jpeg",
      price: 8950,
      inStock: false,
      quickBuy: true,
      filterValues: {
        brend: "Huter",
        "strana-proizvoditelya": "Китай",
        "tip-dvigatelya": "2-тактный",
        "moshhnost-kvt": "1.3",
        "obem-dvigatelya-sm": "33",
        shtanga: "Разборная",
        rukoyatka: "Т-образная",
        "rezhushhij-instrument": "Леска + нож",
        "ves-kg": "5.3"
      },
      specs: [
        {
          label: "Бренд",
          value: "Huter"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производителя",
          value: "Китай"
        },
        {
          label: "Тип двигателя",
          value: "2-тактный"
        },
        {
          label: "Мощность (кВт)",
          value: "1.3"
        },
        {
          label: "Объём двигателя (см³)",
          value: "33"
        },
        {
          label: "Штанга",
          value: "Разборная"
        },
        {
          label: "Рукоятка",
          value: "Т-образная"
        },
        {
          label: "Режущий инструмент",
          value: "Леска + нож"
        },
        {
          label: "Вес (кг)",
          value: "5.3"
        }
      ]
    },
    {
      id: "benzinovyy-trimmer-ggt-15004t-chetyrekhtaktny",
      articul: "401832",
      title: "Бензиновый триммер GGT-15004Т (четырехтактный) 70/2/50 Акция",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/5c7118d0-c469-11eb-93ac-002590ba8282_2f57ec7f-c46d-11eb-93ac-002590ba8282-372x188.jpeg",
      price: 13165,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Huter",
        "strana-proizvoditelya": "Китай",
        "tip-dvigatelya": "4-тактный",
        "moshhnost-kvt": "1.5",
        "obem-dvigatelya-sm": "49",
        shtanga: "Разборная",
        rukoyatka: "Т-образная",
        "rezhushhij-instrument": "Леска + нож",
        "ves-kg": "6.0"
      },
      specs: [
        {
          label: "Бренд",
          value: "Huter"
        },
        {
          label: "Страна производителя",
          value: "Китай"
        },
        {
          label: "Тип двигателя",
          value: "4-тактный"
        },
        {
          label: "Мощность (кВт)",
          value: "1.5"
        },
        {
          label: "Объём двигателя (см³)",
          value: "49"
        },
        {
          label: "Штанга",
          value: "Разборная"
        },
        {
          label: "Рукоятка",
          value: "Т-образная"
        },
        {
          label: "Режущий инструмент",
          value: "Леска + нож"
        },
        {
          label: "Вес (кг)",
          value: "6.0"
        }
      ]
    },
    {
      id: "benzinovyy-trimmer-ggt-1500s-70-2-10",
      articul: "014509",
      title: "Бензиновый триммер GGT-1500S 70/2/10",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/63c19d51-b86a-11e2-b3e3-c8600046bc56_4ead4c8c-9feb-11ea-937f-002590ba8283-372x248.jpeg",
      price: 10300,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Huter",
        "strana-proizvoditelya": "Китай",
        "tip-dvigatelya": "2-тактный",
        "moshhnost-kvt": "1.5",
        "obem-dvigatelya-sm": "49",
        shtanga: "Прямая",
        rukoyatka: "D-образная",
        "rezhushhij-instrument": "Леска + нож",
        "ves-kg": "5.8"
      },
      specs: [
        {
          label: "Бренд",
          value: "Huter"
        },
        {
          label: "Страна производителя",
          value: "Китай"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип двигателя",
          value: "2-тактный"
        },
        {
          label: "Мощность (кВт)",
          value: "1.5"
        },
        {
          label: "Объём двигателя (см³)",
          value: "49"
        },
        {
          label: "Штанга",
          value: "Прямая"
        },
        {
          label: "Рукоятка",
          value: "D-образная"
        },
        {
          label: "Режущий инструмент",
          value: "Леска + нож"
        },
        {
          label: "Вес (кг)",
          value: "5.8"
        }
      ]
    },
    {
      id: "benzinovyy-trimmer-ggt-1500t-70-2-9",
      articul: "014510",
      title: "Бензиновый триммер GGT-1500Т 70/2/9 Акция",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/5a08a815-c2c2-11e2-b3e3-c8600046bc56_4ead4c8d-9feb-11ea-937f-002590ba8283-372x248.jpeg",
      price: 9205,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Huter",
        "strana-proizvoditelya": "Китай",
        "tip-dvigatelya": "2-тактный",
        "moshhnost-kvt": "1.5",
        "obem-dvigatelya-sm": "49",
        shtanga: "Разборная",
        rukoyatka: "Т-образная",
        "rezhushhij-instrument": "Леска + нож",
        "ves-kg": "5.9"
      },
      specs: [
        {
          label: "Бренд",
          value: "Huter"
        },
        {
          label: "Страна производителя",
          value: "Китай"
        },
        {
          label: "Тип двигателя",
          value: "2-тактный"
        },
        {
          label: "Мощность (кВт)",
          value: "1.5"
        },
        {
          label: "Объём двигателя (см³)",
          value: "49"
        },
        {
          label: "Штанга",
          value: "Разборная"
        },
        {
          label: "Рукоятка",
          value: "Т-образная"
        },
        {
          label: "Режущий инструмент",
          value: "Леска + нож"
        },
        {
          label: "Вес (кг)",
          value: "5.9"
        }
      ]
    },
    {
      id: "benzinovyy-trimmer-ggt-1900s-70-2-12",
      articul: "014511",
      title: "Бензиновый триммер GGT-1900S 70/2/12",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/7e3cec5c-b86a-11e2-b3e3-c8600046bc56_4ead4c8e-9feb-11ea-937f-002590ba8283-372x248.jpeg",
      price: 10500,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Huter",
        "strana-proizvoditelya": "Китай",
        "tip-dvigatelya": "2-тактный",
        "moshhnost-kvt": "1.9",
        "obem-dvigatelya-sm": "52",
        shtanga: "Прямая",
        rukoyatka: "D-образная",
        "rezhushhij-instrument": "Леска + нож",
        "ves-kg": "6.2"
      },
      specs: [
        {
          label: "Бренд",
          value: "Huter"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производителя",
          value: "Китай"
        },
        {
          label: "Тип двигателя",
          value: "2-тактный"
        },
        {
          label: "Мощность (кВт)",
          value: "1.9"
        },
        {
          label: "Объём двигателя (см³)",
          value: "52"
        },
        {
          label: "Штанга",
          value: "Прямая"
        },
        {
          label: "Рукоятка",
          value: "D-образная"
        },
        {
          label: "Режущий инструмент",
          value: "Леска + нож"
        },
        {
          label: "Вес (кг)",
          value: "6.2"
        }
      ]
    },
    {
      id: "benzinovyy-trimmer-ggt-1900t-70-2-11",
      articul: "014512",
      title: "Бензиновый триммер GGT-1900Т 70/2/11",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/9dd7d19f-b86a-11e2-b3e3-c8600046bc56_4ead4c8f-9feb-11ea-937f-002590ba8283-372x248.jpeg",
      price: 10900,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Huter",
        "strana-proizvoditelya": "Китай",
        "tip-dvigatelya": "2-тактный",
        "moshhnost-kvt": "1.9",
        "obem-dvigatelya-sm": "52",
        shtanga: "Разборная",
        rukoyatka: "Т-образная",
        "rezhushhij-instrument": "Леска + нож",
        "ves-kg": "6.3"
      },
      specs: [
        {
          label: "Бренд",
          value: "Huter"
        },
        {
          label: "Страна производителя",
          value: "Китай"
        },
        {
          label: "Тип двигателя",
          value: "2-тактный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность (кВт)",
          value: "1.9"
        },
        {
          label: "Объём двигателя (см³)",
          value: "52"
        },
        {
          label: "Штанга",
          value: "Разборная"
        },
        {
          label: "Рукоятка",
          value: "Т-образная"
        },
        {
          label: "Режущий инструмент",
          value: "Леска + нож"
        },
        {
          label: "Вес (кг)",
          value: "6.3"
        }
      ]
    },
    {
      id: "benzinovyj-trimmer-ggt-2000-4t-chetyrehtaktnyj-70-2-81",
      articul: "428738",
      title: "Бензиновый триммер GGT-2000 4Т (четырехтактный) 70/2/81",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/10/428738-372x288.jpeg",
      price: 14900,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Huter",
        "strana-proizvoditelya": "Китай",
        "tip-dvigatelya": "4-тактный",
        "moshhnost-kvt": "2.0",
        "obem-dvigatelya-sm": "66",
        shtanga: "Разборная",
        rukoyatka: "Т-образная",
        "rezhushhij-instrument": "Леска + нож",
        "ves-kg": "6.5"
      },
      specs: [
        {
          label: "Бренд",
          value: "Huter"
        },
        {
          label: "Страна производителя",
          value: "Китай"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип двигателя",
          value: "4-тактный"
        },
        {
          label: "Мощность (кВт)",
          value: "2.0"
        },
        {
          label: "Объём двигателя (см³)",
          value: "66"
        },
        {
          label: "Штанга",
          value: "Разборная"
        },
        {
          label: "Рукоятка",
          value: "Т-образная"
        },
        {
          label: "Режущий инструмент",
          value: "Леска + нож"
        },
        {
          label: "Вес (кг)",
          value: "6.5"
        }
      ]
    },
    {
      id: "benzinovyy-trimmer-ggt-2500s-70-2-13",
      articul: "014513",
      title: "Бензиновый триммер GGT-2500S 70/2/13",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/f0899ecb-afed-11e3-b322-c8600046bc56_4ead4c90-9feb-11ea-937f-002590ba8283-372x248.jpeg",
      price: 11600,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Huter",
        "strana-proizvoditelya": "Китай",
        "tip-dvigatelya": "2-тактный",
        "moshhnost-kvt": "2.2",
        "obem-dvigatelya-sm": "70",
        shtanga: "Прямая",
        rukoyatka: "D-образная",
        "rezhushhij-instrument": "Леска + нож",
        "ves-kg": "6.8"
      },
      specs: [
        {
          label: "Бренд",
          value: "Huter"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производителя",
          value: "Китай"
        },
        {
          label: "Тип двигателя",
          value: "2-тактный"
        },
        {
          label: "Мощность (кВт)",
          value: "2.2"
        },
        {
          label: "Объём двигателя (см³)",
          value: "70"
        },
        {
          label: "Штанга",
          value: "Прямая"
        },
        {
          label: "Рукоятка",
          value: "D-образная"
        },
        {
          label: "Режущий инструмент",
          value: "Леска + нож"
        },
        {
          label: "Вес (кг)",
          value: "6.8"
        }
      ]
    },
    {
      id: "benzinovyy-trimmer-ggt-2500t-70-2-14",
      articul: "014514",
      title: "Бензиновый триммер GGT-2500Т 70/2/14",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/bcd91d3b-afed-11e3-b322-c8600046bc56_4ead4c91-9feb-11ea-937f-002590ba8283-372x248.jpeg",
      price: 11800,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Huter",
        "strana-proizvoditelya": "Китай",
        "tip-dvigatelya": "2-тактный",
        "moshhnost-kvt": "2.2",
        "obem-dvigatelya-sm": "70",
        shtanga: "Разборная",
        rukoyatka: "Т-образная",
        "rezhushhij-instrument": "Леска + нож",
        "ves-kg": "6.9"
      },
      specs: [
        {
          label: "Бренд",
          value: "Huter"
        },
        {
          label: "Страна производителя",
          value: "Китай"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип двигателя",
          value: "2-тактный"
        },
        {
          label: "Мощность (кВт)",
          value: "2.2"
        },
        {
          label: "Объём двигателя (см³)",
          value: "70"
        },
        {
          label: "Штанга",
          value: "Разборная"
        },
        {
          label: "Рукоятка",
          value: "Т-образная"
        },
        {
          label: "Режущий инструмент",
          value: "Леска + нож"
        },
        {
          label: "Вес (кг)",
          value: "6.9"
        }
      ]
    },
    {
      id: "benzinovyy-trimmer-ggt-2500t-pro-70-2-23",
      articul: "204110",
      title: "Бензиновый триммер GGT-2500Т PRO 70/2/28",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/2ae31f49-654c-11eb-93a3-002590ba8282_3e52d044-6cf3-11eb-93a5-002590ba8282-303x303.jpeg",
      price: 13700,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Huter",
        "strana-proizvoditelya": "Китай",
        "tip-dvigatelya": "2-тактный",
        "moshhnost-kvt": "2.2",
        "obem-dvigatelya-sm": "70",
        shtanga: "Разборная",
        rukoyatka: "Т-образная",
        "rezhushhij-instrument": "Леска + нож",
        "ves-kg": "7.0"
      },
      specs: [
        {
          label: "Бренд",
          value: "Huter"
        },
        {
          label: "Страна производителя",
          value: "Китай"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип двигателя",
          value: "2-тактный"
        },
        {
          label: "Мощность (кВт)",
          value: "2.2"
        },
        {
          label: "Объём двигателя (см³)",
          value: "70"
        },
        {
          label: "Штанга",
          value: "Разборная"
        },
        {
          label: "Рукоятка",
          value: "Т-образная"
        },
        {
          label: "Режущий инструмент",
          value: "Леска + нож"
        },
        {
          label: "Вес (кг)",
          value: "7.0"
        }
      ]
    }
  ]
};
