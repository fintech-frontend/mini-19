import { CatalogListingData } from "@/types/catalog-listing";

/** Автоимпорт с эталонного сайта: https://www.stroiopttorg.ru/catalog/instrument/stroitelnoe-oborudovanie/lestnicy-stroitelnye/lesa-stroitelnye/ */
export const lesaStroitelnyeListing: CatalogListingData = {
  path: "instrument/stroitelnoe-oborudovanie/lestnicy-stroitelnye/lesa-stroitelnye",
  title: "Леса строительные",
  totalCountLabel: "50 товаров",
  filterFields: [
    {
      id: "brend",
      title: "Бренд",
      options: [
        "Завод Риз",
        "Ринстрой"
      ],
      truncate: false
    },
    {
      id: "razmer",
      title: "Размер ячейки",
      options: [
        "0,7х1,6",
        "0,065х0,025",
        "3,05"
      ],
      truncate: false
    },
    {
      id: "vysota",
      title: "Высота",
      options: [
        "3м",
        "7,5м"
      ],
      truncate: false
    }
  ],
  products: [
    {
      id: "baza-vsp-250-07",
      articul: "409471",
      title: "База ВСП 250/0,7",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/1b167843-dce1-11ec-93ce-002590ba8282_4184e8e3-2d58-11ee-9406-002590ba8282-303x303.jpeg",
      price: 4400,
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
      id: "baza-vsp-250-12",
      articul: "409473",
      title: "База ВСП 250/1,2",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/60a3b141-dce1-11ec-93ce-002590ba8282_47ffbded-2d58-11ee-9406-002590ba8282-303x303.jpeg",
      price: 4800,
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
      id: "balka-dvutavrovaja-derev-3-0m",
      articul: "8796",
      title: "Балка двутавровая дерев 3,0м",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 2600,
      inStock: false,
      quickBuy: true,
      filterValues: {
        strana: "Россия"
      },
      specs: [
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Страна производитель",
          value: "Россия"
        }
      ]
    },
    {
      id: "balka-nastila-30-m",
      articul: "014324",
      title: "Балка настила 3,0 м",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/ced371b6-30c4-11e2-a1f1-c8600046bc56_f82825ca-9ff1-11ea-937f-002590ba8283-351x303.jpeg",
      price: 1700,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Ринстрой",
        material: "Металл",
        vysota: "3м",
        razmer: "0,065х0,025"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Ринстрой"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Материал",
          value: "Металл"
        },
        {
          label: "Высота",
          value: "3м"
        },
        {
          label: "Размер ячейки",
          value: "0,065х0,025"
        }
      ]
    },
    {
      id: "vintovaya-opora-50-sm",
      articul: "418609",
      title: "Винтовая опора 50 см",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/01/418609-289x303.jpeg",
      price: 1050,
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
      id: "vyshka-tur-gigant-1-2h2m-h-13-6m-gtt-015",
      articul: "10759",
      title: "Вышка Тур Gigant 1,2х2м H=13.6м GTT-015",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 95000,
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
      id: "vyshka-tur-vsp-250-07-bazovyj-blok-07h16-turcija",
      articul: "011818",
      title: "Вышка Тур ВСП-250/0,7 базовый блок (0,7х1,6) Турция",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/01/011818-303x303.jpeg",
      price: 17200,
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
      id: "vyshka-tur-vsp-250-07-bazoyy-blok-07kh16",
      articul: "011817",
      title: "Вышка Тур ВСП-250/0,7 базоый блок (0,7х1,6) Россия",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/550d3670-2f76-11e5-bcd1-c8600046bc56_07850a0a-bddf-11ea-9385-002590ba8283-372x248.jpeg",
      price: 16500,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        brend: "Завод Риз",
        material: "Металл",
        vysota: "7,5м",
        razmer: "0,7х1,6"
      },
      specs: [
        {
          label: "Страна производитель",
          value: "Россия"
        },
        {
          label: "Бренд",
          value: "Завод Риз"
        },
        {
          label: "Максимальный размер скидки",
          value: "15"
        },
        {
          label: "Материал",
          value: "Металл"
        },
        {
          label: "Высота",
          value: "7,5м"
        },
        {
          label: "Размер зубьев",
          value: "0,7х1,6"
        }
      ]
    },
    {
      id: "vyshka-tur-vsp-250-12-bazovyy-blok-12kh20-rossiya",
      articul: "422591",
      title: "Вышка Тур ВСП-250/1,2 Базовый блок (1,2х2,0) Россия",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2024/01/6975b781-7d4c-11ee-941a-002590ba8282_86fe16ab-9263-11ee-941d-002590ba8282-372x248.jpeg",
      price: 24000,
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
      id: "vyshka-tur-vsp-250-1-6-bazovyj-blok-1-6h2-0-rossija",
      articul: "10200",
      title: "Вышка Тур ВСП-250/1,6 Базовый блок (1,6х2,0) Россия",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.png",
      price: 26100,
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
      id: "vyshka-tur-vsp-250-20-bazovyj-blok-22h20-rossija",
      articul: "428693",
      title: "Вышка Тур ВСП-250/2,0 Базовый блок (2,2х2,0) Россия",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2026/01/428693-347x303.jpeg",
      price: 27600,
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
      id: "gorizontal-3-m",
      articul: "014090",
      title: "Горизонталь 3 м",
      image: "https://www.stroiopttorg.ru/wp-content/uploads/2023/10/4380f685-30cb-11e2-a1f1-c8600046bc56_ab81a0bd-b6ef-11ea-9384-002590ba8283-372x279.jpeg",
      price: 505,
      inStock: true,
      quickBuy: true,
      filterValues: {
        strana: "Россия",
        material: "Металл",
        razmer: "3,05"
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
          label: "Материал",
          value: "Металл"
        },
        {
          label: "Размер зубьев",
          value: "3,05"
        }
      ]
    }
  ]
};
