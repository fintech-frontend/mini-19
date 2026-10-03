import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/otoplenie/komplektujushhie-k-radiatoram/kronshteyny-dlya-radiatorov/ */
export const kronshteynyDlyaRadiatorovListing: CatalogListingData = {
  path: "otoplenie/komplektujushhie-k-radiatoram/kronshteyny-dlya-radiatorov",
  title: "Кронштейны для радиаторов",
  totalCountLabel: "14 товаров",
  filterFields: [
    {
      id: "vysota",
      title: "Высота",
      options: [
        "200 мм",
        "430 мм"
      ],
      truncate: false
    },
    {
      id: "dlina-relsa",
      title: "Длина рельса",
      options: [
        "200 мм",
        "500 мм"
      ],
      truncate: false
    },
    {
      id: "kolichestvo-v-komplekte",
      title: "Количество в комплекте",
      options: [
        "2 шт.",
        "2 шт. (пара)"
      ],
      truncate: false
    },
    {
      id: "material",
      title: "Материал",
      options: [
        "Сталь",
        "Сталь с порошковой покраской",
        "Сталь, нейлон"
      ],
      truncate: false
    },
    {
      id: "model",
      title: "Модель",
      options: [
        "К.11.31.28",
        "К.11.34",
        "К15.3"
      ],
      truncate: false
    },
    {
      id: "naznachenie",
      title: "Назначение",
      options: [
        "Для алюминиевых/биметаллических радиаторов",
        "Для секционных радиаторов",
        "Для стальных радиаторов",
        "Для тяжелых радиаторов",
        "Универсальный"
      ],
      truncate: false
    },
    {
      id: "obshhaya-dlina",
      title: "Общая длина",
      options: [
        "180 мм",
        "220 мм"
      ],
      truncate: false
    },
    {
      id: "pokrytie",
      title: "Покрытие",
      options: [
        "Оцинковка/покраска",
        "Порошковая покраска"
      ],
      truncate: false
    },
    {
      id: "regulirovka",
      title: "Регулировка",
      options: [
        "Есть",
        "Плавная",
        "По высоте"
      ],
      truncate: false
    },
    {
      id: "tip-krepleniya",
      title: "Тип крепления",
      options: [
        "Крюк с дюбелем",
        "Напольная опора",
        "Напольная стойка",
        "Напольный вставной",
        "Рельсовая система",
        "Рельсовый настенный",
        "Угловой настенный"
      ],
      truncate: true
    },
    {
      id: "tip-radiatora",
      title: "Тип радиатора",
      options: [
        "11, 22, 33 (стальные панельные)",
        "22, 33 (двухпанельные)",
        "Секционные",
        "Стальные панельные/трубчатые",
        "Чугунные, алюминиевые, биметаллические"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "komplekt-rels-nast-kronshteynov-n-3002sht",
      articul: "421087",
      title: "Комплект рельс наст кронштейнов Н-300(2шт) тип 11,22,33 УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 53128,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "tip-krepleniya": "Рельсовая система",
        "kolichestvo-v-komplekte": "2 шт.",
        "vysota-ustanovki": "300 мм",
        "tip-radiatora": "11, 22, 33 (стальные панельные)",
        "strana-proizvoditel": "Россия",
        material: "Сталь с порошковой покраской"
      },
      specs: [
        {
          label: "Тип крепления",
          value: "Рельсовая система"
        },
        {
          label: "Количество в комплекте",
          value: "2 шт."
        },
        {
          label: "Высота установки",
          value: "300 мм"
        },
        {
          label: "Тип радиатора",
          value: "11, 22, 33 (стальные панельные)"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Материал",
          value: "Сталь с порошковой покраской"
        }
      ]
    },
    {
      id: "kronshtejn-para-napoln-vstavnoj-d-sta",
      articul: "429099",
      title: "Кронштейн (пара) напольн вставной д/стальных радиаторов тип 22 и 33",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/10/429099-372x294.jpeg",
      price: 1100,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "tip-krepleniya": "Напольный вставной",
        "kolichestvo-v-komplekte": "2 шт. (пара)",
        "tip-radiatora": "22, 33 (двухпанельные)",
        "sposob-montazha": "Вставной в радиатор",
        "strana-proizvoditel": "Россия",
        material: "Сталь"
      },
      specs: [
        {
          label: "Тип крепления",
          value: "Напольный вставной"
        },
        {
          label: "Количество в комплекте",
          value: "2 шт. (пара)"
        },
        {
          label: "Тип радиатора",
          value: "22, 33 (двухпанельные)"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Способ монтажа",
          value: "Вставной в радиатор"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Материал",
          value: "Сталь"
        }
      ]
    },
    {
      id: "kronshteyn-dlya-al-radiatorov-uglovoy",
      articul: "034415",
      title: "Кронштейн для ал. радиаторов угловой УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/b7f1d4fb-30c5-11e2-a1f1-c8600046bc56_250b6692-9e58-11ea-937e-002590ba8283-303x303.jpeg",
      price: 2676,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "tip-krepleniya": "Угловой настенный",
        naznachenie: "Для алюминиевых/биметаллических радиаторов",
        "tip-radiatora": "Секционные",
        material: "Сталь",
        "strana-proizvoditel": "Россия",
        pokrytie: "Оцинковка/покраска"
      },
      specs: [
        {
          label: "Тип крепления",
          value: "Угловой настенный"
        },
        {
          label: "Назначение",
          value: "Для алюминиевых/биметаллических радиаторов"
        },
        {
          label: "Тип радиатора",
          value: "Секционные"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Покрытие",
          value: "Оцинковка/покраска"
        }
      ]
    },
    {
      id: "kronshteyn-napoln-430-k-11-34-d-stalnykh-radi",
      articul: "034459",
      title: "Кронштейн напольн 430 К.11.34 д/стальных радиаторов УЦЕНКА",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/56c8fe80-dc4e-11e8-ba62-c8600046bc56_250b6694-9e58-11ea-937e-002590ba8283-323x303.jpeg",
      price: 139,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "tip-krepleniya": "Напольная стойка",
        naznachenie: "Для стальных радиаторов",
        vysota: "430 мм",
        model: "К.11.34",
        regulirovka: "По высоте",
        material: "Сталь"
      },
      specs: [
        {
          label: "Тип крепления",
          value: "Напольная стойка"
        },
        {
          label: "Назначение",
          value: "Для стальных радиаторов"
        },
        {
          label: "Высота",
          value: "430 мм"
        },
        {
          label: "Модель",
          value: "К.11.34"
        },
        {
          label: "Регулировка",
          value: "По высоте"
        },
        {
          label: "Материал",
          value: "Сталь"
        }
      ]
    },
    {
      id: "kronshteyn-napoln-d-sekcion-radiator",
      articul: "034460",
      title: "Кронштейн напольн д/секцион радиаторов",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/9f094c87-30c6-11e2-a1f1-c8600046bc56_250b6695-9e58-11ea-937e-002590ba8283-303x303.jpeg",
      price: 330,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "tip-krepleniya": "Напольная опора",
        naznachenie: "Для секционных радиаторов",
        "tip-radiatora": "Чугунные, алюминиевые, биметаллические",
        "strana-proizvoditel": "Россия",
        material: "Сталь",
        kreplenie: "Нижнее"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип крепления",
          value: "Напольная опора"
        },
        {
          label: "Назначение",
          value: "Для секционных радиаторов"
        },
        {
          label: "Тип радиатора",
          value: "Чугунные, алюминиевые, биметаллические"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Крепление",
          value: "Нижнее"
        }
      ]
    },
    {
      id: "kronshteyn-napoln-d-stalnykh-radiato",
      articul: "034458",
      title: "Кронштейн напольн д/стальных радиаторов",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/7ca9d3f8-5074-11e9-8f2a-c8600046bc56_250b6693-9e58-11ea-937e-002590ba8283-323x303.jpeg",
      price: 710,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "tip-krepleniya": "Напольная стойка",
        naznachenie: "Для стальных радиаторов",
        "tip-radiatora": "Стальные панельные/трубчатые",
        "strana-proizvoditel": "Россия",
        material: "Сталь",
        pokrytie: "Порошковая покраска"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип крепления",
          value: "Напольная стойка"
        },
        {
          label: "Назначение",
          value: "Для стальных радиаторов"
        },
        {
          label: "Тип радиатора",
          value: "Стальные панельные/трубчатые"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Материал",
          value: "Сталь"
        },
        {
          label: "Покрытие",
          value: "Порошковая покраска"
        }
      ]
    },
    {
      id: "kronshtejn-napolnyj-royal-thermo-knu-60-600-ral9016",
      articul: "8196",
      title: "Кронштейн напольный Royal Thermo КНУ.60 (600) RAL9016",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 860,
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
      id: "kronshteyn-napolnyy-k-11-31-28-d-stalnykh-rad",
      articul: "403994",
      title: "Кронштейн напольный К.11.31.28 д/стальных радиаторов(200)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/10/403994-261x303.jpeg",
      price: 660,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "tip-krepleniya": "Напольная стойка",
        naznachenie: "Для стальных радиаторов",
        vysota: "200 мм",
        model: "К.11.31.28",
        regulirovka: "Есть",
        material: "Сталь"
      },
      specs: [
        {
          label: "Тип крепления",
          value: "Напольная стойка"
        },
        {
          label: "Назначение",
          value: "Для стальных радиаторов"
        },
        {
          label: "Высота",
          value: "200 мм"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Модель",
          value: "К.11.31.28"
        },
        {
          label: "Регулировка",
          value: "Есть"
        },
        {
          label: "Материал",
          value: "Сталь"
        }
      ]
    },
    {
      id: "kronshtejn-nast-relsov-dlja-stalnyh-radiatorov-500",
      articul: "430794",
      title: "Кронштейн наст рельсов для стальных радиаторов (500)",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 450,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "tip-krepleniya": "Рельсовый настенный",
        "dlina-relsa": "500 мм",
        naznachenie: "Для тяжелых радиаторов",
        nagruzka: "Повышенная",
        "regulirovka-kryukov": "По всей длине рельса",
        material: "Сталь"
      },
      specs: [
        {
          label: "Тип крепления",
          value: "Рельсовый настенный"
        },
        {
          label: "Длина рельса",
          value: "500 мм"
        },
        {
          label: "Назначение",
          value: "Для тяжелых радиаторов"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Нагрузка",
          value: "Повышенная"
        },
        {
          label: "Регулировка крюков",
          value: "По всей длине рельса"
        },
        {
          label: "Материал",
          value: "Сталь"
        }
      ]
    },
    {
      id: "kronshteyn-nastennyy-relsovyy-k15-3200-ral-9016",
      articul: "022051",
      title: "Кронштейн настенный рельсовый К15.3(200) RAL 9016",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/9f094c2d-30c6-11e2-a1f1-c8600046bc56_250b6685-9e58-11ea-937e-002590ba8283-372x251.jpeg",
      price: 236,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "tip-krepleniya": "Рельсовый настенный",
        "dlina-relsa": "200 мм",
        cvet: "RAL 9016 (белый)",
        model: "К15.3",
        regulirovka: "Плавная",
        material: "Сталь"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип крепления",
          value: "Рельсовый настенный"
        },
        {
          label: "Длина рельса",
          value: "200 мм"
        },
        {
          label: "Цвет",
          value: "RAL 9016 (белый)"
        },
        {
          label: "Модель",
          value: "К15.3"
        },
        {
          label: "Регулировка",
          value: "Плавная"
        },
        {
          label: "Материал",
          value: "Сталь"
        }
      ]
    },
    {
      id: "kronshtejn-stal-s-djubelem-180",
      articul: "034475",
      title: "Кронштейн стал.с дюбелем 180",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 60,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "tip-krepleniya": "Крюк с дюбелем",
        "diametr-dyubelya": "7 мм",
        "obshhaya-dlina": "180 мм",
        komplektaciya: "Крюк + дюбель",
        naznachenie: "Универсальный",
        material: "Сталь, нейлон"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Тип крепления",
          value: "Крюк с дюбелем"
        },
        {
          label: "Диаметр дюбеля",
          value: "7 мм"
        },
        {
          label: "Общая длина",
          value: "180 мм"
        },
        {
          label: "Комплектация",
          value: "Крюк + дюбель"
        },
        {
          label: "Назначение",
          value: "Универсальный"
        },
        {
          label: "Материал",
          value: "Сталь, нейлон"
        }
      ]
    },
    {
      id: "kronshteyn-stal-s-dyubelem-dlya-radiator",
      articul: "400259",
      title: "Кронштейн стал.с дюбелем для радиаторов 7х220",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/7d01184a-9878-11eb-93aa-002590ba8282_4c66acbf-9ab3-11eb-93aa-002590ba8282-303x303.jpeg",
      price: 35,
      inStock: true,
      quickBuy: true,
      filterValues: {
        "tip-krepleniya": "Крюк с дюбелем",
        "diametr-dyubelya": "7 мм",
        "obshhaya-dlina": "220 мм",
        komplektaciya: "Крюк + дюбель",
        "strana-proizvoditel": "Россия",
        material: "Сталь, нейлон"
      },
      specs: [
        {
          label: "Тип крепления",
          value: "Крюк с дюбелем"
        },
        {
          label: "Диаметр дюбеля",
          value: "7 мм"
        },
        {
          label: "Общая длина",
          value: "220 мм"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Комплектация",
          value: "Крюк + дюбель"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Материал",
          value: "Сталь, нейлон"
        }
      ]
    }
  ]
};
