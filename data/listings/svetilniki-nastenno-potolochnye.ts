import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/yelektrotovary/svetilniki/svetilniki-nastenno-potolochnye/ */
export const svetilnikiNastennoPotolochnyeListing: CatalogListingData = {
  path: "yelektrotovary/svetilniki/svetilniki-nastenno-potolochnye",
  title: "Светильники настенно-потолочные",
  totalCountLabel: "114 товаров",
  filterFields: [
    {
      id: "gabarity",
      title: "Габариты",
      options: [
        "19.2х8х19.2мм",
        "21.2х8мм",
        "31х17х10.5мм"
      ],
      truncate: false
    },
    {
      id: "moshhnost",
      title: "Мощность",
      options: [
        "60Вт",
        "120Вт"
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
      id: "nastolnaja-lampa-vm-615-metall-bronza",
      articul: "044490",
      title: "Настольная лампа ВМ 615 металл-бронза",
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
        }
      ]
    },
    {
      id: "plafony-601-1-ucenka",
      articul: "054031",
      title: "Плафоны 601/1 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 3120,
      inStock: true,
      quickBuy: true,
      filterValues: {}
    },
    {
      id: "svetilnik-03-100-002-yera-belyy-krug-s-reshetko",
      articul: "065188",
      title: "Светильник 03-100-002 Эра белый круг с решеткой 100 вт",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/17466bc7-30c8-11e2-a1f1-c8600046bc56_dc4a7c57-554c-11ee-9413-002590ba8282-337x303.jpeg",
      price: 985,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        gabarity: "21.2х8мм",
        moshhnost: "60Вт"
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
          label: "Габариты",
          value: "21.2х8мм"
        },
        {
          label: "Мощность",
          value: "60Вт"
        }
      ]
    },
    {
      id: "svetilnik-03-60-002-yera-belyy-oval-s-reshetko",
      articul: "065185",
      title: "Светильник 03-60-002 Эра белый Овал с решеткой 60 вт",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/17466bc1-30c8-11e2-a1f1-c8600046bc56_dc4a7c54-554c-11ee-9413-002590ba8282-337x303.jpeg",
      price: 520,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        gabarity: "19.2х8х19.2мм",
        moshhnost: "60Вт"
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
          label: "Габариты",
          value: "19.2х8х19.2мм"
        },
        {
          label: "Мощность",
          value: "60Вт"
        }
      ]
    },
    {
      id: "svetilnik-300-2kh60w-e27-serto",
      articul: "064996",
      title: "Светильник 300 2х60W Е27 Серто",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 435,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        moshhnost: "60Вт"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Мощность",
          value: "60Вт"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "svetilnik-300-2kh60w-e27-yerika",
      articul: "064999",
      title: "Светильник 300 2х60W Е27 Эрика",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/31e2015a-2056-11e7-969b-c8600046bc56_d03b03b1-554c-11ee-9413-002590ba8282-337x303.jpeg",
      price: 465,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        moshhnost: "120Вт"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Мощность",
          value: "120Вт"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "svetilnik-300-p-2kh60w-e27-kalvados-bel",
      articul: "064500",
      title: "Светильник 300-П 2х60W Е27 Кальвадос бел",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 450,
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
      id: "svetilnik-assol-mollir-300-1he27-belyj-hrom",
      articul: "7163",
      title: "Светильник Ассоль моллир 300 1хЕ27 белый/хром",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/04/7-163-311x303.jpeg",
      price: 520,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        gabarity: "31х17х10.5мм"
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
          label: "Габариты",
          value: "31х17х10.5мм"
        }
      ]
    },
    {
      id: "svetilnik-bereza-mollir-300-2khe27-khrom",
      articul: "064559",
      title: "Светильник Береза моллир 300 2хЕ27 хром",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/2f90327d-473b-11e2-9ac9-c8600046bc56_d03b03a4-554c-11ee-9413-002590ba8282-303x303.jpeg",
      price: 570,
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
      id: "svetilnik-bra-arte-lamp-5124-07-ap-1",
      articul: "064960",
      title: "Светильник БРА Arte Lamp 5124/07 AP-1",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/a6f4691b-ad3f-11e9-a99e-c8600046bc56_d03b03af-554c-11ee-9413-002590ba8282-303x303.jpeg",
      price: 34000,
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
      id: "svetilnik-vesna-mollir-300-2khe27-khrom",
      articul: "203063",
      title: "Светильник Весна моллир 300 2хЕ27 хром",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 435,
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
      id: "svetilnik-viktoriya-300-2khe27-matovyy-bely",
      articul: "202105",
      title: "Светильник Виктория 300 2хЕ27 матовый белый/хром /",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 620,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Элетех",
        moshhnost: "60Вт"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Элетех"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Мощность",
          value: "60Вт"
        }
      ]
    }
  ]
};
