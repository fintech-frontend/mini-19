import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/vodo-gazosnabzhenie/zapornaya-armatura-i-dobornye-yelement/klapany-radiatornye/ */
export const klapanyRadiatornyeListing: CatalogListingData = {
  path: "vodo-gazosnabzhenie/zapornaya-armatura-i-dobornye-yelement/klapany-radiatornye",
  title: "Клапаны радиаторные",
  totalCountLabel: "24 товара",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Не указан",
        "ASP",
        "STI",
        "Valfex"
      ],
      truncate: false
    },
    {
      id: "konfiguraciya",
      title: "Конфигурация",
      options: [
        "Прямой",
        "Угловой"
      ],
      truncate: false
    },
    {
      id: "razmer-podklyucheniya",
      title: "Размер подключения",
      options: [
        "1/2 дюйма",
        "3/4 дюйма"
      ],
      truncate: false
    },
    {
      id: "tip",
      title: "Тип",
      options: [
        "Клапан запорный",
        "Клапан регулировочный",
        "Комплект регулировочный"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "golovka-termostat-sti-uno",
      articul: "001815",
      title: "Головка термостат STI UNO",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 435,
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
      id: "klapan-sti-verkhniy-pryamoy-3-4-ruchnoy",
      articul: "403160",
      title: "Клапан STI верхний прямой 3/4 ручной",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/14aaf100-f747-11eb-93b7-002590ba8282_241d7793-cdde-11ec-93ce-002590ba8282-372x248.jpeg",
      price: 600,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Италия",
        brend: "STI",
        tip: "Клапан регулировочный",
        "razmer-podklyucheniya": "3/4 дюйма",
        regulirovka: "Ручная",
        konfiguraciya: "Прямой"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Италия"
        },
        {
          label: "Бренд",
          value: "STI"
        },
        {
          label: "Тип",
          value: "Клапан регулировочный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Размер подключения",
          value: "3/4 дюйма"
        },
        {
          label: "Регулировка",
          value: "Ручная"
        },
        {
          label: "Конфигурация",
          value: "Прямой"
        }
      ]
    },
    {
      id: "klapan-sti-verkhniy-uglovoy-3-4-ruchnoy",
      articul: "009629",
      title: "Клапан STI верхний угловой 3/4 ручной",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/b5e574ae-616b-11e7-ab8a-c8600046bc56_70707b42-9879-11eb-93aa-002590ba8282-303x303.jpeg",
      price: 495,
      inStock: false,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Италия",
        brend: "STI",
        tip: "Клапан регулировочный",
        "razmer-podklyucheniya": "3/4 дюйма",
        regulirovka: "Ручная",
        konfiguraciya: "Угловой"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Италия"
        },
        {
          label: "Бренд",
          value: "STI"
        },
        {
          label: "Тип",
          value: "Клапан регулировочный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Размер подключения",
          value: "3/4 дюйма"
        },
        {
          label: "Регулировка",
          value: "Ручная"
        },
        {
          label: "Конфигурация",
          value: "Угловой"
        }
      ]
    },
    {
      id: "klapan-sti-nizhniy-pryamoy-1-2-ruchnoy",
      articul: "414467",
      title: "Клапан STI нижний прямой 1/2 ручной",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/10/414467-320x303.jpeg",
      price: 335,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Италия",
        brend: "STI",
        tip: "Клапан регулировочный",
        "razmer-podklyucheniya": "1/2 дюйма",
        regulirovka: "Ручная",
        konfiguraciya: "Прямой"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Италия"
        },
        {
          label: "Бренд",
          value: "STI"
        },
        {
          label: "Тип",
          value: "Клапан регулировочный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Размер подключения",
          value: "1/2 дюйма"
        },
        {
          label: "Регулировка",
          value: "Ручная"
        },
        {
          label: "Конфигурация",
          value: "Прямой"
        }
      ]
    },
    {
      id: "klapan-sti-nizhniy-pryamoy-3-4-ruchnoy",
      articul: "403161",
      title: "Клапан STI нижний прямой 3/4 ручной",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/52f02ddf-f747-11eb-93b7-002590ba8282_3a7b1674-cdde-11ec-93ce-002590ba8282-303x303.jpeg",
      price: 560,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Италия",
        brend: "STI",
        tip: "Клапан регулировочный",
        "razmer-podklyucheniya": "3/4 дюйма",
        regulirovka: "Ручная",
        konfiguraciya: "Прямой"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Италия"
        },
        {
          label: "Бренд",
          value: "STI"
        },
        {
          label: "Тип",
          value: "Клапан регулировочный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Размер подключения",
          value: "3/4 дюйма"
        },
        {
          label: "Регулировка",
          value: "Ручная"
        },
        {
          label: "Конфигурация",
          value: "Прямой"
        }
      ]
    },
    {
      id: "klapan-sti-nizhniy-uglovoy-3-4-ruchnoy",
      articul: "026892",
      title: "Клапан STI нижний угловой 3/4 ручной",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/523b06c2-4fb5-11e9-8f2a-c8600046bc56_b41f3cef-9e52-11ea-937e-002590ba8283-303x303.jpeg",
      price: 345,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Италия",
        brend: "STI",
        tip: "Клапан регулировочный",
        "razmer-podklyucheniya": "3/4 дюйма",
        regulirovka: "Ручная",
        konfiguraciya: "Угловой"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Италия"
        },
        {
          label: "Бренд",
          value: "STI"
        },
        {
          label: "Тип",
          value: "Клапан регулировочный"
        },
        {
          label: "Размер подключения",
          value: "3/4 дюйма"
        },
        {
          label: "Регулировка",
          value: "Ручная"
        },
        {
          label: "Конфигурация",
          value: "Угловой"
        }
      ]
    },
    {
      id: "klapan-verkhniy-ruchnoy-pryamoy-vf-1-2-s-dop-up",
      articul: "419323",
      title: "Клапан верхний ручной прямой VF 1/2 с доп уплотнением VF.08.RN.04 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/10/419323-324x303.jpeg",
      price: 34823,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Италия",
        brend: "Valfex",
        tip: "Клапан регулировочный",
        "razmer-podklyucheniya": "1/2 дюйма",
        regulirovka: "Ручная",
        konfiguraciya: "Прямой"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Италия"
        },
        {
          label: "Бренд",
          value: "Valfex"
        },
        {
          label: "Тип",
          value: "Клапан регулировочный"
        },
        {
          label: "Размер подключения",
          value: "1/2 дюйма"
        },
        {
          label: "Регулировка",
          value: "Ручная"
        },
        {
          label: "Конфигурация",
          value: "Прямой"
        }
      ]
    },
    {
      id: "klapan-zap-nizhniy-ruch-ugl-d1-2",
      articul: "026907",
      title: "Клапан зап нижний руч угл д1/2",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/78b74b8c-55e4-11e9-a2c2-c8600046bc56_b41f3cf0-9e52-11ea-937e-002590ba8283-303x303.jpeg",
      price: 320,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Италия",
        brend: "Не указан",
        tip: "Клапан запорный",
        "razmer-podklyucheniya": "1/2 дюйма",
        regulirovka: "Ручная",
        konfiguraciya: "Угловой"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Италия"
        },
        {
          label: "Бренд",
          value: "Не указан"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип",
          value: "Клапан запорный"
        },
        {
          label: "Размер подключения",
          value: "1/2 дюйма"
        },
        {
          label: "Регулировка",
          value: "Ручная"
        },
        {
          label: "Конфигурация",
          value: "Угловой"
        }
      ]
    },
    {
      id: "klapan-reg-ruch-pryam-sti-d1-2",
      articul: "026942",
      title: "Клапан рег руч прям STI д1/2",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/78e0d48f-da1c-11e9-a9b6-c8600046bc56_b41f3cff-9e52-11ea-937e-002590ba8283-372x248.jpeg",
      price: 450,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Италия",
        brend: "STI",
        tip: "Клапан регулировочный",
        "razmer-podklyucheniya": "1/2 дюйма",
        regulirovka: "Ручная",
        konfiguraciya: "Прямой"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Италия"
        },
        {
          label: "Бренд",
          value: "STI"
        },
        {
          label: "Тип",
          value: "Клапан регулировочный"
        },
        {
          label: "Размер подключения",
          value: "1/2 дюйма"
        },
        {
          label: "Регулировка",
          value: "Ручная"
        },
        {
          label: "Конфигурация",
          value: "Прямой"
        }
      ]
    },
    {
      id: "klapan-reg-ruch-ugl-asp-1-2-patrubok-antipro",
      articul: "417514",
      title: "Клапан рег руч угл ASP 1/2 + патрубок антипротечка",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/417514.jpg",
      price: 410,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Италия",
        brend: "ASP",
        tip: "Комплект регулировочный",
        "razmer-podklyucheniya": "1/2 дюйма",
        regulirovka: "Ручная",
        konfiguraciya: "Угловой"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Италия"
        },
        {
          label: "Бренд",
          value: "ASP"
        },
        {
          label: "Тип",
          value: "Комплект регулировочный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Размер подключения",
          value: "1/2 дюйма"
        },
        {
          label: "Регулировка",
          value: "Ручная"
        },
        {
          label: "Конфигурация",
          value: "Угловой"
        }
      ]
    },
    {
      id: "klapan-reg-ruch-ugl-sti-d1-2",
      articul: "026944",
      title: "Клапан рег руч угл STI д1/2",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/074d4367-4a16-11e9-9b5e-c8600046bc56_b41f3d00-9e52-11ea-937e-002590ba8283-303x303.jpeg",
      price: 470,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Италия",
        brend: "STI",
        tip: "Клапан регулировочный",
        "razmer-podklyucheniya": "1/2 дюйма",
        regulirovka: "Ручная",
        konfiguraciya: "Угловой"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Италия"
        },
        {
          label: "Бренд",
          value: "STI"
        },
        {
          label: "Тип",
          value: "Клапан регулировочный"
        },
        {
          label: "Размер подключения",
          value: "1/2 дюйма"
        },
        {
          label: "Регулировка",
          value: "Ручная"
        },
        {
          label: "Конфигурация",
          value: "Угловой"
        }
      ]
    },
    {
      id: "klapan-reg-ruch-ugl-valfex-1-2-patrubok-antipro",
      articul: "415952",
      title: "Клапан рег руч угл VALFEX 1/2 + патрубок антипротечка",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/415952-372x266.jpg",
      price: 505,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "strana-proizvoditel": "Италия",
        brend: "Valfex",
        tip: "Комплект регулировочный",
        "razmer-podklyucheniya": "1/2 дюйма",
        regulirovka: "Ручная",
        konfiguraciya: "Угловой"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Италия"
        },
        {
          label: "Бренд",
          value: "Valfex"
        },
        {
          label: "Тип",
          value: "Комплект регулировочный"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Размер подключения",
          value: "1/2 дюйма"
        },
        {
          label: "Регулировка",
          value: "Ручная"
        },
        {
          label: "Конфигурация",
          value: "Угловой"
        }
      ]
    }
  ]
};
