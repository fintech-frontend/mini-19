import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/otdelochnye-materialy/lakokrasochnye-materialy/betonokontakt/ */
export const betonokontaktListing: CatalogListingData = {
  path: "otdelochnye-materialy/lakokrasochnye-materialy/betonokontakt",
  title: "Бетоноконтакт",
  totalCountLabel: "21 товар",
  filterFields: [
    {
      id: "tsvet",
      title: "Цвет",
      options: [
        "Белый",
        "Розовый"
      ],
      truncate: false
    },
    {
      id: "ves",
      title: "Вес",
      options: [
        "3 кг",
        "6",
        "14",
        "20"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "betonokontakt-12-kg-khabez",
      articul: "014571",
      title: "Бетоноконтакт 12 кг Хабез",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/18f073fa-3f5a-11e5-a386-c8600046bc56_6a7445ba-9be9-11ea-937e-002590ba8283.jpeg",
      price: 1100,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        }
      ]
    },
    {
      id: "betonokontakt-6-kg-khabez",
      articul: "014575",
      title: "Бетоноконтакт 6 кг Хабез",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/11/fb71e71a-3f59-11e5-a386-c8600046bc56_6a7445bb-9be9-11ea-937e-002590ba8283.jpeg",
      price: 560,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        ves: "6"
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
          label: "Вес",
          value: "6"
        }
      ]
    },
    {
      id: "betonokontakt-panorama-13-kg",
      articul: "407800",
      title: "Бетоноконтакт Panorama 13 кг",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/e55a89fd-a5e1-11ec-93c8-002590ba8282_1d8a123e-c086-11ec-93cc-002590ba8282.jpeg",
      price: 1600,
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
      id: "betonokontakt-panorama-23-kg",
      articul: "419336",
      title: "Бетоноконтакт Panorama 2,3 кг",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/04/419336-303x303.jpeg",
      price: 335,
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
      id: "betonokontakt-panorama-25-kg",
      articul: "408582",
      title: "Бетоноконтакт Panorama 2,5 кг",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/a8bbb005-c16b-11ec-93cd-002590ba8282_499e8215-c174-11ec-93cd-002590ba8282.jpeg",
      price: 350,
      inStock: false,
      quickBuy: true,
      filterValues: {}
    },
    {
      id: "betonokontakt-panorama-20-kg",
      articul: "407801",
      title: "Бетоноконтакт Panorama 20 кг",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/044238c3-a5e2-11ec-93c8-002590ba8282_25528e2f-c086-11ec-93cc-002590ba8282.jpeg",
      price: 2410,
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
      id: "betonokontakt-panorama-7-kg",
      articul: "407799",
      title: "Бетоноконтакт Panorama 7 кг",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/9ed6840a-a5e1-11ec-93c8-002590ba8282_4297e437-c086-11ec-93cc-002590ba8282.jpeg",
      price: 850,
      inStock: false,
      quickBuy: true,
      filterValues: {}
    },
    {
      id: "betonokontakt-titan-lyuks-14-kg-rozovyy",
      articul: "014586",
      title: "Бетоноконтакт Титан Люкс 14 кг (розовый)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/8e069b30-30c4-11e2-a1f1-c8600046bc56_6a7445bc-9be9-11ea-937e-002590ba8283.jpeg",
      price: 2050,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Titan Luxe",
        tsvet: "Розовый",
        ves: "14",
        tip: "Бетоноконтакт",
        rashod: "300гр/м2"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Titan Luxe"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Розовый"
        },
        {
          label: "Вес",
          value: "14"
        },
        {
          label: "Тип товара",
          value: "Бетоноконтакт"
        },
        {
          label: "Расход",
          value: "300гр/м2"
        }
      ]
    },
    {
      id: "betonokontakt-titan-lyuks-14-kg-baza-v-be",
      articul: "014587",
      title: "Бетоноконтакт Титан Люкс 14 кг база В белый",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/1c01c8f4-f0bd-11e5-aea3-c8600046bc56_6a7445bd-9be9-11ea-937e-002590ba8283.jpeg",
      price: 2050,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Titan Luxe",
        tsvet: "Белый",
        ves: "14",
        tip: "Бетоноконтакт",
        rashod: "300гр/м2"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Titan Luxe"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Белый"
        },
        {
          label: "Вес",
          value: "14"
        },
        {
          label: "Тип товара",
          value: "Бетоноконтакт"
        },
        {
          label: "Расход",
          value: "300гр/м2"
        }
      ]
    },
    {
      id: "betonokontakt-titan-lyuks-20-kg-rozovyy",
      articul: "014588",
      title: "Бетоноконтакт Титан Люкс 20 кг (розовый)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/8e069b32-30c4-11e2-a1f1-c8600046bc56_6a7445be-9be9-11ea-937e-002590ba8283.jpeg",
      price: 2850,
      inStock: true,
      quickBuy: true,
      filterValues: {
        ves: "20",
        strana: "Россия",
        brend: "Titan Luxe",
        tip: "Бетоноконтакт",
        tsvet: "Розовый",
        rashod: "300гр/м2"
      },
      specs: [
        {
          label: "Вес",
          value: "20"
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
          label: "Бренд",
          value: "Titan Luxe"
        },
        {
          label: "Тип товара",
          value: "Бетоноконтакт"
        },
        {
          label: "Цвет",
          value: "Розовый"
        },
        {
          label: "Расход",
          value: "300гр/м2"
        }
      ]
    },
    {
      id: "betonokontakt-titan-lyuks-3-kg-rozovyy",
      articul: "014589",
      title: "Бетоноконтакт Титан Люкс 3 кг (розовый)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/8e069b34-30c4-11e2-a1f1-c8600046bc56_6a7445bf-9be9-11ea-937e-002590ba8283.jpeg",
      price: 480,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Titan Luxe",
        tsvet: "Розовый",
        ves: "3 кг",
        tip: "Бетоноконтакт",
        rashod: "300гр/м2"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Titan Luxe"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Розовый"
        },
        {
          label: "Вес",
          value: "3 кг"
        },
        {
          label: "Тип товара",
          value: "Бетоноконтакт"
        },
        {
          label: "Расход",
          value: "300гр/м2"
        }
      ]
    },
    {
      id: "betonokontakt-titan-lyuks-3-kg-baza-v-bel",
      articul: "003896",
      title: "Бетоноконтакт Титан Люкс 3 кг база В белый",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/6a78270a-c50e-11ea-9386-002590ba8283_a3de7260-c827-11ea-9386-002590ba8283.jpeg",
      price: 480,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Titan Luxe",
        tsvet: "Белый",
        ves: "3 кг",
        tip: "Бетоноконтакт",
        rashod: "300гр/м2"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Titan Luxe"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Цвет",
          value: "Белый"
        },
        {
          label: "Вес",
          value: "3 кг"
        },
        {
          label: "Тип товара",
          value: "Бетоноконтакт"
        },
        {
          label: "Расход",
          value: "300гр/м2"
        }
      ]
    }
  ]
};
