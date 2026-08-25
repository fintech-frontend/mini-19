import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/instrument/shtukaturno-otdelochnye-materialy/shpateli/ */
export const shpateliListing: CatalogListingData = {
  path: "instrument/shtukaturno-otdelochnye-materialy/shpateli",
  title: "Шпатели",
  totalCountLabel: "125 товаров",
  filterFields: [
    {
      id: "material",
      title: "Материал ручки",
      options: [
        "Нержавеющая сталь",
        "Пластмасс",
        "Резина",
        "Сталь нержавеющая"
      ],
      truncate: false
    },
    {
      id: "razmer",
      title: "Размер зубьев",
      options: [
        "6х6мм",
        "8х8мм",
        "10х10мм"
      ],
      truncate: false
    },
    {
      id: "shirina",
      title: "Ширина лезвия",
      options: [
        "75мм",
        "80мм",
        "200мм",
        "250мм"
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
    }
  ],
  products: [
    {
      id: "nabor-shpateley-pvkh-40-60-80-mm-sibrtekh-80803",
      articul: "043277",
      title: "Набор шпателей ПВХ 40-60-80 мм СИБРТЕХ 80803",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/043277-372x259.jpeg",
      price: 35,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        material: "Резина",
        shirina: "80мм"
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
          label: "Материал ручки",
          value: "Резина"
        },
        {
          label: "Ширина лезвия",
          value: "80мм"
        },
        {
          label: "Материал полотна",
          value: "Резина"
        }
      ]
    },
    {
      id: "nabor-shpateley-rez-bel-3-sht-40-60-80-mm-85803",
      articul: "043278",
      title: "Набор шпателей рез. бел. 3 шт. 40-60-80 мм 85803",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/043278-333x303.jpeg",
      price: 70,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        material: "Резина",
        shirina: "80мм"
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
          label: "Материал ручки",
          value: "Резина"
        },
        {
          label: "Ширина лезвия",
          value: "80мм"
        },
        {
          label: "Материал полотна",
          value: "Резина"
        }
      ]
    },
    {
      id: "razdvizhnaja-grebenka-dlja-plitki-zubr-zub-12h12mm-do-600mm-08045-12",
      articul: "8441",
      title: "Раздвижная гребенка для плитки Зубр зуб 12х12мм до 600мм 08045-12",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 2360,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        material: "Нержавеющая сталь",
        shirina: "200мм",
        razmer: "10х10мм"
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
          label: "Материал ручки",
          value: "Пластмасс"
        },
        {
          label: "Ширина лезвия",
          value: "200мм"
        },
        {
          label: "Материал полотна",
          value: "Нержавеющая сталь"
        },
        {
          label: "Размер зубьев",
          value: "10х10мм"
        }
      ]
    },
    {
      id: "shpateli-rezinovye-nabor-3-sht406080mm-06867",
      articul: "079341",
      title: "Шпатели резиновые набор 3 шт(40*60*80мм) 06867",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/6461bbb4-3941-11e2-bc11-c8600046bc56_59b9a506-a029-11ea-9380-002590ba8283-196x303.jpeg",
      price: 162,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        material: "Резина",
        shirina: "80мм"
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
          label: "Материал ручки",
          value: "Резина"
        },
        {
          label: "Ширина лезвия",
          value: "80мм"
        },
        {
          label: "Материал полотна",
          value: "Резина"
        }
      ]
    },
    {
      id: "shpatel-300-mm-sh-300",
      articul: "079342",
      title: "Шпатель 300 мм Ш-300",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/88cf46a4-4200-11e3-bfd1-c8600046bc56_ff070c5a-2e1c-11ee-9406-002590ba8282-337x303.jpeg",
      price: 100,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        material: "Пластмасс"
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
          label: "Материал ручки",
          value: "Пластмасс"
        }
      ]
    },
    {
      id: "shpatel-350-mm-sh-350",
      articul: "079343",
      title: "Шпатель 350 мм Ш-350",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/06/079343-372x284.jpeg",
      price: 110,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        material: "Пластмасс"
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
          label: "Материал ручки",
          value: "Пластмасс"
        }
      ]
    },
    {
      id: "shpatel-6-v-1-a201-163",
      articul: "406478",
      title: "Шпатель 6 в 1 А201/163",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/5d5c402c-67d9-11ec-93c3-002590ba8282_ff070c7d-2e1c-11ee-9406-002590ba8282-303x303.jpeg",
      price: 550,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Китай",
        material: "Нержавеющая сталь",
        shirina: "75мм"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Китай"
        },
        {
          label: "Материал ручки",
          value: "Пластмасс"
        },
        {
          label: "Ширина лезвия",
          value: "75мм"
        },
        {
          label: "Материал полотна",
          value: "Нержавеющая сталь"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "shpatel-bostik-b1-50024476",
      articul: "432881",
      title: "Шпатель BOSTIK B1 50024476",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2025/12/432881-372x287.jpeg",
      price: 350,
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
      id: "shpatel-derzhi-zubchatyy-nerzh-stal-s-plast-r",
      articul: "102127",
      title: "Шпатель DERZHI зубчатый нерж сталь с пласт руч 200мм зуб 10х10мм 86001-20-10",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/be42191a-c0f1-11ea-9386-002590ba8283_51d5a236-c34d-11ea-9386-002590ba8283-303x303.jpeg",
      price: 150,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        material: "Нержавеющая сталь",
        shirina: "200мм",
        razmer: "10х10мм"
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
          label: "Материал ручки",
          value: "Пластмасс"
        },
        {
          label: "Ширина лезвия",
          value: "200мм"
        },
        {
          label: "Размер зубьев",
          value: "10х10мм"
        },
        {
          label: "Материал полотна",
          value: "Нержавеющая сталь"
        }
      ]
    },
    {
      id: "shpatel-derzhi-zubchatyy-nerzh-stal-s-plast-r-2",
      articul: "102130",
      title: "Шпатель DERZHI зубчатый нерж сталь с пласт руч 200мм зуб 8х8мм 86001-20-08",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/e91af4ea-c0f1-11ea-9386-002590ba8283_6e63e786-c34d-11ea-9386-002590ba8283-303x303.jpeg",
      price: 135,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        material: "Сталь нержавеющая",
        shirina: "200мм",
        razmer: "8х8мм"
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
          label: "Материал ручки",
          value: "Пластмасс"
        },
        {
          label: "Ширина лезвия",
          value: "200мм"
        },
        {
          label: "Размер зубьев",
          value: "8х8мм"
        },
        {
          label: "Материал полотна",
          value: "Сталь нержавеющая"
        }
      ]
    },
    {
      id: "shpatel-derzhi-zubchatyy-nerzh-stal-s-plast-r-3",
      articul: "102132",
      title: "Шпатель DERZHI зубчатый нерж сталь с пласт руч 250мм зуб 10х10мм 86001-25-10",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/07a9a0ba-c0f2-11ea-9386-002590ba8283_c4c5bd1a-c34c-11ea-9386-002590ba8283-303x303.jpeg",
      price: 175,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        material: "Сталь нержавеющая",
        shirina: "250мм",
        razmer: "10х10мм"
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
          label: "Материал ручки",
          value: "Пластмасс"
        },
        {
          label: "Ширина лезвия",
          value: "250мм"
        },
        {
          label: "Размер зубьев",
          value: "10х10мм"
        },
        {
          label: "Материал полотна",
          value: "Сталь нержавеющая"
        }
      ]
    },
    {
      id: "shpatel-derzhi-zubchatyy-nerzh-stal-s-plast-r-4",
      articul: "102134",
      title: "Шпатель DERZHI зубчатый нерж сталь с пласт руч 250мм зуб 6х6мм 86001-25-06",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/2844a588-c0f2-11ea-9386-002590ba8283_87548bb5-c34c-11ea-9386-002590ba8283-303x303.jpeg",
      price: 165,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        material: "Нержавеющая сталь",
        shirina: "250мм",
        razmer: "6х6мм"
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
          label: "Материал ручки",
          value: "Пластмасс"
        },
        {
          label: "Ширина лезвия",
          value: "250мм"
        },
        {
          label: "Размер зубьев",
          value: "6х6мм"
        },
        {
          label: "Материал полотна",
          value: "Нержавеющая сталь"
        }
      ]
    }
  ]
};
