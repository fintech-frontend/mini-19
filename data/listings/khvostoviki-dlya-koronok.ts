import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/instrument/yelektroinstrument/raskhodnye-materialy-i-osnastka-dlya-yel/koronki/khvostoviki-dlya-koronok/ */
export const khvostovikiDlyaKoronokListing: CatalogListingData = {
  path: "instrument/yelektroinstrument/raskhodnye-materialy-i-osnastka-dlya-yel/koronki/khvostoviki-dlya-koronok",
  title: "Хвостовики для коронок",
  totalCountLabel: "20 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "FIT",
        "MATRIX",
        "Pilorama"
      ],
      truncate: false
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
      id: "tip",
      title: "Тип товара",
      options: [
        "Адаптер",
        "Держатель"
      ],
      truncate: false
    },
    {
      id: "diametr-koronok",
      title: "Диаметр коронок",
      options: [
        "14-30 мм",
        "19-29 мм",
        "20-25 мм",
        "29-83 мм",
        "32-76 мм",
        "32-210 мм",
        "32-250 мм"
      ],
      truncate: true
    },
    {
      id: "diametr-pil",
      title: "Диаметр пил",
      options: [
        "14-30 мм",
        "68-152 мм"
      ],
      truncate: false
    },
    {
      id: "naznachenie",
      title: "Назначение",
      options: [
        "Для алмазных коронок",
        "Для биметаллических коронок",
        "Для кольцевых коронок",
        "Для коронок",
        "Для круговых пил"
      ],
      truncate: false
    },
    {
      id: "tip-instrumenta",
      title: "Тип инструмента",
      options: [
        "Адаптер",
        "Державка",
        "Держатель"
      ],
      truncate: false
    },
    {
      id: "tip-koronok",
      title: "Тип коронок",
      options: [
        "Алмазные",
        "Кольцевые",
        "Коронки",
        "Bi-Metall"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "adapter-d-koronok-s3-8-f32-210mm-1-10-100-24526",
      articul: "012917",
      title: "Адаптер д/коронок S3/8 ф32-210мм 1/10/100 24526",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/945c7dec-82ee-11e5-9aea-c8600046bc56_06a2c60f-b9ff-11ea-9385-002590ba8283-372x294.jpeg",
      price: 53950,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        "tip-instrumenta": "Адаптер",
        "tip-podklyucheniya": "Резьбовое",
        "diametr-koronok": "32-210 мм",
        naznachenie: "Для коронок"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип инструмента",
          value: "Адаптер"
        },
        {
          label: "Тип подключения",
          value: "Резьбовое"
        },
        {
          label: "Диаметр коронок",
          value: "32-210 мм"
        },
        {
          label: "Назначение",
          value: "Для коронок"
        }
      ]
    },
    {
      id: "adapter-d-koronok-almaz-f-20-25-mm-1-10-12-9451-ucenk",
      articul: "012920",
      title: "Адаптер д/коронок алмаз. ф 20-25 мм 1/10/12 9451",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/71a0e7a0-ac30-11e4-a3b8-c8600046bc56_5229b7a4-b9ff-11ea-9385-002590ba8283-303x303.jpeg",
      price: 210,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        "tip-instrumenta": "Адаптер",
        "tip-koronok": "Алмазные",
        "diametr-koronok": "20-25 мм",
        naznachenie: "Для алмазных коронок"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип инструмента",
          value: "Адаптер"
        },
        {
          label: "Тип коронок",
          value: "Алмазные"
        },
        {
          label: "Диаметр коронок",
          value: "20-25 мм"
        },
        {
          label: "Назначение",
          value: "Для алмазных коронок"
        }
      ]
    },
    {
      id: "adapter-d-koronok-almaz-f-29-83-mm-1-10-80-9452",
      articul: "012921",
      title: "Адаптер д/коронок алмаз. ф 29-83 мм 1/10/80 9452",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/165ba217-ac31-11e4-a3b8-c8600046bc56_767493f2-b9ff-11ea-9385-002590ba8283-303x303.jpeg",
      price: 270,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        "tip-instrumenta": "Адаптер",
        "tip-koronok": "Алмазные",
        "diametr-koronok": "29-83 мм",
        naznachenie: "Для алмазных коронок"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип инструмента",
          value: "Адаптер"
        },
        {
          label: "Тип коронок",
          value: "Алмазные"
        },
        {
          label: "Диаметр коронок",
          value: "29-83 мм"
        },
        {
          label: "Назначение",
          value: "Для алмазных коронок"
        }
      ]
    },
    {
      id: "adapter-d-koronok-kolc-f-32-76-mm-16580",
      articul: "012922",
      title: "Адаптер д/коронок кольц ф 32-76 мм 16580",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/012922-372x241.jpeg",
      price: 153,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        "tip-instrumenta": "Адаптер",
        "tip-koronok": "Кольцевые",
        "diametr-koronok": "32-76 мм",
        naznachenie: "Для кольцевых коронок"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип инструмента",
          value: "Адаптер"
        },
        {
          label: "Тип коронок",
          value: "Кольцевые"
        },
        {
          label: "Диаметр коронок",
          value: "32-76 мм"
        },
        {
          label: "Назначение",
          value: "Для кольцевых коронок"
        }
      ]
    },
    {
      id: "adapter-dlya-pil-krugovykh-14-30-mm-36895",
      articul: "012923",
      title: "Адаптер для пил круговых 14-30 мм 36895",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/9874be08-67b5-11e7-ab8a-c8600046bc56_b1849dca-c279-11ea-9386-002590ba8283-303x303.jpeg",
      price: 22880,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        "tip-instrumenta": "Адаптер",
        "tip-osnastki": "Круговые пилы",
        "diametr-pil": "14-30 мм",
        naznachenie: "Для круговых пил"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип инструмента",
          value: "Адаптер"
        },
        {
          label: "Тип оснастки",
          value: "Круговые пилы"
        },
        {
          label: "Диаметр пил",
          value: "14-30 мм"
        },
        {
          label: "Назначение",
          value: "Для круговых пил"
        }
      ]
    },
    {
      id: "adapter-dlya-pily-krugovoy-68-152mm-36769-fit",
      articul: "406228",
      title: "Адаптер для пилы круговой 68-152мм 36769 FIT",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/48b3b2d5-5f09-11ec-93c1-002590ba8282_e649a00b-5f37-11ec-93c1-002590ba8282-334x303.jpeg",
      price: 29250,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "FIT",
        "tip-instrumenta": "Адаптер",
        "tip-osnastki": "Круговые пилы",
        tip: "Адаптер",
        "diametr-pil": "68-152 мм",
        naznachenie: "Для круговых пил"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "FIT"
        },
        {
          label: "Тип инструмента",
          value: "Адаптер"
        },
        {
          label: "Тип оснастки",
          value: "Круговые пилы"
        },
        {
          label: "Тип товара",
          value: "Адаптер"
        },
        {
          label: "Диаметр пил",
          value: "68-152 мм"
        },
        {
          label: "Назначение",
          value: "Для круговых пил"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "adapter-s-centriruyushhim-sverlom-dlya-ko",
      articul: "012927",
      title: "Адаптер с центрирующим сверлом для коронок 19-29мм 16579",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/012927-372x190.jpeg",
      price: 128,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        "tip-instrumenta": "Адаптер",
        "tip-koronok": "Коронки",
        "diametr-koronok": "19-29 мм",
        osobennosti: "С центрирующим сверлом",
        naznachenie: "Для коронок"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Тип инструмента",
          value: "Адаптер"
        },
        {
          label: "Тип коронок",
          value: "Коронки"
        },
        {
          label: "Диаметр коронок",
          value: "19-29 мм"
        },
        {
          label: "Особенности",
          value: "С центрирующим сверлом"
        },
        {
          label: "Назначение",
          value: "Для коронок"
        }
      ]
    },
    {
      id: "derzhavka-matrix-dlya-kolcevoy-koronki-103mm-72860",
      articul: "007196",
      title: "Державка MATRIX для кольцевой коронки 103мм 72860 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/73db7e85-191b-11e3-a27a-c8600046bc56_c7e61000-672c-11ed-93dc-002590ba8282-372x248.jpeg",
      price: 9180,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "MATRIX",
        "tip-instrumenta": "Державка",
        "tip-koronki": "Кольцевая",
        diametr: "103 мм",
        naznachenie: "Для кольцевых коронок"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "MATRIX"
        },
        {
          label: "Тип инструмента",
          value: "Державка"
        },
        {
          label: "Тип коронки",
          value: "Кольцевая"
        },
        {
          label: "Диаметр",
          value: "103 мм"
        },
        {
          label: "Назначение",
          value: "Для кольцевых коронок"
        }
      ]
    },
    {
      id: "derzhatel-dlja-koronok-bimetall-14-30mm-fit-36895",
      articul: "5839",
      title: "Держатель для коронок биметалл 14-30мм FIT 36895",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 245,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Pilorama",
        tip: "Держатель"
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
          value: "Pilorama"
        },
        {
          label: "Тип товара",
          value: "Держатель"
        }
      ]
    },
    {
      id: "derzhatel-dlya-koronok-bimetall-14-30mm-pilorama-570001",
      articul: "205000",
      title: "Держатель для коронок биметалл 14-30мм Pilorama 570001",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/61c31f8c-8b0b-11eb-93a9-002590ba8282_d318c324-8d73-11eb-93aa-002590ba8282-372x209.jpeg",
      price: 236,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        brend: "Pilorama",
        "tip-instrumenta": "Держатель",
        "tip-koronok": "Bi-Metall",
        tip: "Держатель",
        "diametr-koronok": "14-30 мм",
        naznachenie: "Для биметаллических коронок"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Бренд",
          value: "Pilorama"
        },
        {
          label: "Тип инструмента",
          value: "Держатель"
        },
        {
          label: "Тип коронок",
          value: "Bi-Metall"
        },
        {
          label: "Тип товара",
          value: "Держатель"
        },
        {
          label: "Диаметр коронок",
          value: "14-30 мм"
        },
        {
          label: "Назначение",
          value: "Для биметаллических коронок"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "derzhatel-dlja-koronok-bimetall-32-121mm-fit-36896",
      articul: "5840",
      title: "Держатель для коронок биметалл 32-121мм FIT 36896",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 545,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Китай"
        }
      ]
    },
    {
      id: "derzhatel-dlya-koronok-bimetall-32-250mm-pilorama-2535",
      articul: "205001",
      title: "Держатель для коронок биметалл 32-250мм Pilorama (780002) 570002",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/824b0c7c-8b0b-11eb-93a9-002590ba8282_d318c327-8d73-11eb-93aa-002590ba8282-372x209.jpeg",
      price: 47840,
      inStock: true,
      quickBuy: true,
      filterValues: {
        brend: "Pilorama",
        strana: "Россия",
        "tip-instrumenta": "Держатель",
        "tip-koronok": "Bi-Metall",
        "diametr-koronok": "32-250 мм",
        naznachenie: "Для биметаллических коронок",
        tip: "Держатель"
      },
      specs: [
        {
          label: "Бренд",
          value: "Pilorama"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип инструмента",
          value: "Держатель"
        },
        {
          label: "Тип коронок",
          value: "Bi-Metall"
        },
        {
          label: "Диаметр коронок",
          value: "32-250 мм"
        },
        {
          label: "Назначение",
          value: "Для биметаллических коронок"
        },
        {
          label: "Тип товара",
          value: "Держатель"
        }
      ]
    }
  ]
};
