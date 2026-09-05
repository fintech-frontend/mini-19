/**
 * Наполнение РЕАЛЬНОГО backend (Django REST, http://16.170.163.62/api) каталогом
 * через документированные в Postman эндпоинты:
 *
 *   POST /categories/   { name, slug, sort?, is_active?, parent? }
 *   POST /brands/       { name, slug, logo? }
 *   POST /products/     { name, slug, article, price, old_price?, category_id, brand_id?, description?, attrs_json? }
 *
 * Схема полей взята не "на глаз", а из ответа DRF на OPTIONS-запрос к каждому
 * списку (см. отчёт по миграции) — у товара, например, вообще нет поля с
 * изображением, поэтому картинки здесь не задаются.
 *
 * Скрипт идемпотентный: перед созданием читает существующие записи и пропускает
 * те, чей slug уже есть на сервере. Запуск (Node 24 исполняет TypeScript нативно):
 *
 *   node scripts/seed-backend.ts
 *   NEXT_PUBLIC_API_URL=http://host/api node scripts/seed-backend.ts
 */
import type { ApiBrand, ApiCategory, ApiProduct, ListResponse } from "../types/api";

const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL ?? "http://16.170.163.62/api").replace(/\/+$/, "");

interface SeedCategory {
  name: string;
  slug: string;
  children?: { name: string; slug: string }[];
}

interface SeedBrand {
  name: string;
  slug: string;
}

interface SeedProduct {
  name: string;
  slug: string;
  article: string;
  price: number;
  old_price?: number;
  category: string;
  brand?: string;
  description?: string;
  attrs_json?: Record<string, string>;
}

const CATEGORIES: SeedCategory[] = [
  {
    name: "Электроинструмент",
    slug: "elektroinstrument",
    children: [
      { name: "Дрели и шуруповёрты", slug: "dreli-shurupoverty" },
      { name: "Перфораторы", slug: "perforatory" },
      { name: "Углошлифовальные машины", slug: "ushm" },
      { name: "Лобзики и пилы", slug: "lobziki-i-pily" },
    ],
  },
  {
    name: "Ручной инструмент",
    slug: "ruchnoy-instrument",
    children: [
      { name: "Отвёртки и биты", slug: "otvertki-i-bity" },
      { name: "Молотки и кувалды", slug: "molotki-i-kuvaldy" },
      { name: "Измерительный инструмент", slug: "izmeritelnyy-instrument" },
    ],
  },
  {
    name: "Стройматериалы",
    slug: "stroymaterialy",
    children: [
      { name: "Сухие смеси", slug: "suhie-smesi" },
      { name: "Крепёж и метизы", slug: "krepezh-i-metizy" },
      { name: "Лакокрасочные материалы", slug: "lakokrasochnye-materialy" },
    ],
  },
  {
    name: "Сантехника",
    slug: "santehnika",
    children: [
      { name: "Смесители", slug: "smesiteli" },
      { name: "Трубы и фитинги", slug: "truby-i-fitingi" },
    ],
  },
  {
    name: "Электрика",
    slug: "elektrika",
    children: [
      { name: "Кабель и провод", slug: "kabel-i-provod" },
      { name: "Автоматика и щиты", slug: "avtomatika-i-shchity" },
    ],
  },
  {
    name: "Сад и огород",
    slug: "sad-i-ogorod",
    children: [
      { name: "Садовая техника", slug: "sadovaya-tehnika" },
      { name: "Садовый инвентарь", slug: "sadovyy-inventar" },
    ],
  },
];

const BRANDS: SeedBrand[] = [
  { name: "Bosch", slug: "bosch" },
  { name: "Makita", slug: "makita" },
  { name: "DeWalt", slug: "dewalt" },
  { name: "Metabo", slug: "metabo" },
  { name: "Интерскол", slug: "interskol" },
  { name: "Зубр", slug: "zubr" },
  { name: "Knauf", slug: "knauf" },
  { name: "Vira", slug: "vira" },
];

const PRODUCTS: SeedProduct[] = [
  // Дрели и шуруповёрты
  {
    name: "Дрель-шуруповёрт аккумуляторный Bosch GSR 180-LI",
    slug: "bosch-gsr-180-li",
    article: "BSH-GSR180LI",
    price: 12490,
    old_price: 14990,
    category: "dreli-shurupoverty",
    brand: "bosch",
    description: "Компактный аккумуляторный шуруповёрт для сборочных и монтажных работ.",
    attrs_json: { Напряжение: "18 В", "Крутящий момент": "54 Н·м", Патрон: "13 мм", Вес: "1.7 кг" },
  },
  {
    name: "Дрель ударная Makita HP1630K",
    slug: "makita-hp1630k",
    article: "MKT-HP1630K",
    price: 6890,
    category: "dreli-shurupoverty",
    brand: "makita",
    description: "Ударная дрель для сверления бетона, кирпича, дерева и металла.",
    attrs_json: { Мощность: "710 Вт", "Обороты": "0-3200 об/мин", Патрон: "13 мм", Вес: "1.9 кг" },
  },
  {
    name: "Шуруповёрт аккумуляторный DeWalt DCD778S2T",
    slug: "dewalt-dcd778s2t",
    article: "DWT-DCD778",
    price: 18990,
    old_price: 21500,
    category: "dreli-shurupoverty",
    brand: "dewalt",
    description: "Бесщёточный шуруповёрт с двумя аккумуляторами в комплекте.",
    attrs_json: { Напряжение: "18 В", "Крутящий момент": "65 Н·м", Аккумулятор: "2 x 1.5 А·ч" },
  },
  {
    name: "Дрель-миксер Интерскол Д-16/1050Р",
    slug: "interskol-d-16-1050r",
    article: "INT-D161050",
    price: 5490,
    category: "dreli-shurupoverty",
    brand: "interskol",
    description: "Низкооборотистая дрель для перемешивания строительных смесей.",
    attrs_json: { Мощность: "1050 Вт", "Обороты": "0-700 об/мин", Вес: "3.1 кг" },
  },

  // Перфораторы
  {
    name: "Перфоратор Bosch GBH 2-26 DFR",
    slug: "bosch-gbh-2-26-dfr",
    article: "BSH-GBH226",
    price: 24990,
    old_price: 27900,
    category: "perforatory",
    brand: "bosch",
    description: "Профессиональный перфоратор SDS-plus со сменным патроном.",
    attrs_json: { Мощность: "800 Вт", "Энергия удара": "2.7 Дж", Патрон: "SDS-plus", Вес: "2.9 кг" },
  },
  {
    name: "Перфоратор Makita HR2470",
    slug: "makita-hr2470",
    article: "MKT-HR2470",
    price: 15990,
    category: "perforatory",
    brand: "makita",
    description: "Универсальный перфоратор с тремя режимами работы.",
    attrs_json: { Мощность: "780 Вт", "Энергия удара": "2.4 Дж", Патрон: "SDS-plus", Вес: "2.8 кг" },
  },
  {
    name: "Перфоратор Metabo KHE 2660 Quick",
    slug: "metabo-khe-2660-quick",
    article: "MTB-KHE2660",
    price: 21400,
    category: "perforatory",
    brand: "metabo",
    description: "Перфоратор с быстросменным патроном и предохранительной муфтой.",
    attrs_json: { Мощность: "850 Вт", "Энергия удара": "3.0 Дж", Вес: "2.9 кг" },
  },
  {
    name: "Перфоратор Зубр ЗП-24-680 К",
    slug: "zubr-zp-24-680-k",
    article: "ZBR-ZP24680",
    price: 4990,
    old_price: 5990,
    category: "perforatory",
    brand: "zubr",
    description: "Бытовой перфоратор для домашнего ремонта.",
    attrs_json: { Мощность: "680 Вт", "Энергия удара": "1.8 Дж", Вес: "2.4 кг" },
  },

  // УШМ
  {
    name: "УШМ Bosch GWS 750-125",
    slug: "bosch-gws-750-125",
    article: "BSH-GWS750",
    price: 6790,
    category: "ushm",
    brand: "bosch",
    description: "Компактная болгарка 125 мм с защитой от повторного пуска.",
    attrs_json: { Мощность: "750 Вт", "Диаметр диска": "125 мм", "Обороты": "11000 об/мин" },
  },
  {
    name: "УШМ Makita GA9020",
    slug: "makita-ga9020",
    article: "MKT-GA9020",
    price: 11290,
    old_price: 12800,
    category: "ushm",
    brand: "makita",
    description: "Мощная угловая шлифмашина 230 мм для тяжёлых работ.",
    attrs_json: { Мощность: "2200 Вт", "Диаметр диска": "230 мм", Вес: "4.8 кг" },
  },
  {
    name: "УШМ Интерскол УШМ-125/900",
    slug: "interskol-ushm-125-900",
    article: "INT-USHM125",
    price: 3490,
    category: "ushm",
    brand: "interskol",
    description: "Недорогая болгарка для бытового применения.",
    attrs_json: { Мощность: "900 Вт", "Диаметр диска": "125 мм", Вес: "2.0 кг" },
  },

  // Лобзики и пилы
  {
    name: "Лобзик Bosch PST 700 E",
    slug: "bosch-pst-700-e",
    article: "BSH-PST700",
    price: 5290,
    category: "lobziki-i-pily",
    brand: "bosch",
    description: "Электролобзик для точного реза дерева и металла.",
    attrs_json: { Мощность: "500 Вт", "Глубина реза": "70 мм", Вес: "1.7 кг" },
  },
  {
    name: "Пила циркулярная Makita HS7601",
    slug: "makita-hs7601",
    article: "MKT-HS7601",
    price: 9990,
    old_price: 11400,
    category: "lobziki-i-pily",
    brand: "makita",
    description: "Дисковая пила 190 мм для продольного и поперечного реза.",
    attrs_json: { Мощность: "1200 Вт", "Диаметр диска": "190 мм", "Глубина реза": "66 мм" },
  },
  {
    name: "Цепная пила DeWalt DCM565P1",
    slug: "dewalt-dcm565p1",
    article: "DWT-DCM565",
    price: 27990,
    category: "lobziki-i-pily",
    brand: "dewalt",
    description: "Аккумуляторная цепная пила для садовых и строительных работ.",
    attrs_json: { Напряжение: "18 В", "Длина шины": "30 см", Вес: "3.8 кг" },
  },

  // Отвёртки и биты
  {
    name: "Набор отвёрток Зубр Эксперт, 6 предметов",
    slug: "zubr-nabor-otvertok-6",
    article: "ZBR-OTV6",
    price: 890,
    old_price: 1150,
    category: "otvertki-i-bity",
    brand: "zubr",
    description: "Набор шлицевых и крестовых отвёрток с двухкомпонентными рукоятками.",
    attrs_json: { Количество: "6 шт", Материал: "CrV сталь" },
  },
  {
    name: "Набор бит Bosch Extra Hard, 32 шт",
    slug: "bosch-bity-extra-hard-32",
    article: "BSH-BIT32",
    price: 1490,
    category: "otvertki-i-bity",
    brand: "bosch",
    description: "Универсальный набор бит с магнитным держателем.",
    attrs_json: { Количество: "32 шт", Хвостовик: "1/4\"" },
  },
  {
    name: "Отвёртка аккумуляторная Makita DF001DW",
    slug: "makita-df001dw",
    article: "MKT-DF001",
    price: 3290,
    category: "otvertki-i-bity",
    brand: "makita",
    description: "Компактная аккумуляторная отвёртка для мелких работ.",
    attrs_json: { Напряжение: "3.6 В", "Крутящий момент": "5 Н·м", Вес: "0.5 кг" },
  },

  // Молотки и кувалды
  {
    name: "Молоток слесарный Зубр 500 г",
    slug: "zubr-molotok-500",
    article: "ZBR-MOL500",
    price: 640,
    category: "molotki-i-kuvaldy",
    brand: "zubr",
    description: "Слесарный молоток с фиберглассовой рукояткой.",
    attrs_json: { Вес: "500 г", Рукоятка: "фибергласс" },
  },
  {
    name: "Кувалда Vira 3 кг",
    slug: "vira-kuvalda-3kg",
    article: "VIR-KUV3",
    price: 1690,
    old_price: 1990,
    category: "molotki-i-kuvaldy",
    brand: "vira",
    description: "Кувалда для демонтажных работ.",
    attrs_json: { Вес: "3 кг", Рукоятка: "фибергласс" },
  },
  {
    name: "Молоток-гвоздодёр Vira 450 г",
    slug: "vira-molotok-gvozdoder",
    article: "VIR-MOL450",
    price: 780,
    category: "molotki-i-kuvaldy",
    brand: "vira",
    description: "Молоток с гвоздодёром и антивибрационной рукояткой.",
    attrs_json: { Вес: "450 г" },
  },

  // Измерительный инструмент
  {
    name: "Лазерный уровень Bosch GLL 3-80",
    slug: "bosch-gll-3-80",
    article: "BSH-GLL380",
    price: 32900,
    old_price: 36500,
    category: "izmeritelnyy-instrument",
    brand: "bosch",
    description: "Профессиональный линейный лазерный нивелир с тремя плоскостями.",
    attrs_json: { "Дальность": "30 м", Точность: "±0.2 мм/м", "Плоскости": "3" },
  },
  {
    name: "Рулетка Зубр Мастер 5 м",
    slug: "zubr-ruletka-5m",
    article: "ZBR-RUL5",
    price: 390,
    category: "izmeritelnyy-instrument",
    brand: "zubr",
    description: "Измерительная рулетка с автоблокировкой и обрезиненным корпусом.",
    attrs_json: { Длина: "5 м", Ширина: "19 мм" },
  },
  {
    name: "Дальномер лазерный Makita LD030P",
    slug: "makita-ld030p",
    article: "MKT-LD030P",
    price: 5990,
    category: "izmeritelnyy-instrument",
    brand: "makita",
    description: "Компактный лазерный дальномер для измерений до 30 метров.",
    attrs_json: { "Дальность": "30 м", Точность: "±3 мм" },
  },
  {
    name: "Уровень строительный Vira 800 мм",
    slug: "vira-uroven-800",
    article: "VIR-URV800",
    price: 1120,
    category: "izmeritelnyy-instrument",
    brand: "vira",
    description: "Алюминиевый строительный уровень с тремя глазками.",
    attrs_json: { Длина: "800 мм", "Глазки": "3" },
  },

  // Сухие смеси
  {
    name: "Штукатурка гипсовая Knauf Ротбанд, 30 кг",
    slug: "knauf-rotband-30",
    article: "KNF-ROT30",
    price: 620,
    old_price: 690,
    category: "suhie-smesi",
    brand: "knauf",
    description: "Универсальная гипсовая штукатурка для внутренних работ.",
    attrs_json: { Вес: "30 кг", Расход: "8.5 кг/м²", "Толщина слоя": "5-50 мм" },
  },
  {
    name: "Шпаклёвка финишная Knauf HP Finish, 25 кг",
    slug: "knauf-hp-finish-25",
    article: "KNF-HPF25",
    price: 540,
    category: "suhie-smesi",
    brand: "knauf",
    description: "Гипсовая финишная шпаклёвка для стен и потолков.",
    attrs_json: { Вес: "25 кг", "Толщина слоя": "0.2-5 мм" },
  },
  {
    name: "Клей плиточный Knauf Флизен, 25 кг",
    slug: "knauf-flizen-25",
    article: "KNF-FLZ25",
    price: 410,
    category: "suhie-smesi",
    brand: "knauf",
    description: "Клей для укладки керамической плитки внутри помещений.",
    attrs_json: { Вес: "25 кг", Расход: "2.2 кг/м²" },
  },
  {
    name: "Цемент М500, 50 кг",
    slug: "cement-m500-50",
    article: "CEM-M500-50",
    price: 480,
    category: "suhie-smesi",
    description: "Портландцемент М500 общестроительного назначения.",
    attrs_json: { Вес: "50 кг", Марка: "М500" },
  },

  // Крепёж и метизы
  {
    name: "Саморезы по дереву 4.2х75 мм, 200 шт",
    slug: "samorezy-po-derevu-42-75",
    article: "KRP-SMR4275",
    price: 690,
    category: "krepezh-i-metizy",
    description: "Оцинкованные саморезы с потайной головкой.",
    attrs_json: { Размер: "4.2х75 мм", Количество: "200 шт", Покрытие: "цинк" },
  },
  {
    name: "Анкер клиновой 10х100 мм, 50 шт",
    slug: "anker-klinovoy-10-100",
    article: "KRP-ANK10100",
    price: 1250,
    old_price: 1490,
    category: "krepezh-i-metizy",
    description: "Клиновой анкер для крепления в бетоне.",
    attrs_json: { Размер: "10х100 мм", Количество: "50 шт" },
  },
  {
    name: "Дюбель-гвоздь 6х40 мм, 100 шт",
    slug: "dyubel-gvozd-6-40",
    article: "KRP-DUB640",
    price: 320,
    category: "krepezh-i-metizy",
    description: "Дюбель-гвоздь с грибовидной манжетой.",
    attrs_json: { Размер: "6х40 мм", Количество: "100 шт" },
  },

  // ЛКМ
  {
    name: "Грунтовка глубокого проникновения, 10 л",
    slug: "gruntovka-glub-pron-10",
    article: "LKM-GRT10",
    price: 890,
    category: "lakokrasochnye-materialy",
    description: "Акриловая грунтовка для укрепления впитывающих оснований.",
    attrs_json: { Объём: "10 л", Расход: "100-200 мл/м²" },
  },
  {
    name: "Краска интерьерная белая матовая, 14 кг",
    slug: "kraska-interernaya-14",
    article: "LKM-KRS14",
    price: 2390,
    old_price: 2790,
    category: "lakokrasochnye-materialy",
    description: "Водно-дисперсионная краска для стен и потолков.",
    attrs_json: { Вес: "14 кг", Расход: "150 г/м²", Основа: "акрил" },
  },
  {
    name: "Эмаль алкидная ПФ-115, 2.7 кг",
    slug: "emal-pf-115-27",
    article: "LKM-PF115",
    price: 740,
    category: "lakokrasochnye-materialy",
    description: "Универсальная алкидная эмаль для наружных и внутренних работ.",
    attrs_json: { Вес: "2.7 кг", "Время высыхания": "24 ч" },
  },

  // Смесители
  {
    name: "Смеситель для кухни Vira однорычажный",
    slug: "vira-smesitel-kuhnya",
    article: "SNT-SMK01",
    price: 3290,
    old_price: 3990,
    category: "smesiteli",
    brand: "vira",
    description: "Однорычажный смеситель с поворотным изливом.",
    attrs_json: { Материал: "латунь", Покрытие: "хром", Гарантия: "24 мес" },
  },
  {
    name: "Смеситель для ванны с душем Vira",
    slug: "vira-smesitel-vanna",
    article: "SNT-SMV02",
    price: 4590,
    category: "smesiteli",
    brand: "vira",
    description: "Смеситель для ванны с душевым комплектом.",
    attrs_json: { Материал: "латунь", Комплект: "лейка, шланг 1.5 м" },
  },

  // Трубы и фитинги
  {
    name: "Труба полипропиленовая PN20 25 мм, 4 м",
    slug: "truba-pp-pn20-25",
    article: "SNT-TPP25",
    price: 260,
    category: "truby-i-fitingi",
    description: "Полипропиленовая труба для горячего водоснабжения.",
    attrs_json: { Диаметр: "25 мм", Длина: "4 м", Давление: "PN20" },
  },
  {
    name: "Муфта соединительная PPR 25 мм",
    slug: "mufta-ppr-25",
    article: "SNT-MPR25",
    price: 45,
    category: "truby-i-fitingi",
    description: "Соединительная муфта для полипропиленовых труб.",
    attrs_json: { Диаметр: "25 мм", Материал: "PPR" },
  },

  // Кабель и провод
  {
    name: "Кабель ВВГнг-LS 3х2.5, 100 м",
    slug: "kabel-vvgng-3-25-100",
    article: "ELK-VVG325",
    price: 8990,
    old_price: 9900,
    category: "kabel-i-provod",
    description: "Силовой кабель с медными жилами, не распространяющий горение.",
    attrs_json: { Сечение: "3х2.5 мм²", Длина: "100 м", Материал: "медь" },
  },
  {
    name: "Провод ПВС 2х1.5, 50 м",
    slug: "provod-pvs-2-15-50",
    article: "ELK-PVS215",
    price: 3450,
    category: "kabel-i-provod",
    description: "Гибкий соединительный провод для бытовой техники.",
    attrs_json: { Сечение: "2х1.5 мм²", Длина: "50 м" },
  },

  // Автоматика и щиты
  {
    name: "Автоматический выключатель 16А, 1P",
    slug: "avtomat-16a-1p",
    article: "ELK-AVT16",
    price: 320,
    category: "avtomatika-i-shchity",
    description: "Однополюсный автоматический выключатель на DIN-рейку.",
    attrs_json: { Ток: "16 А", Полюса: "1P", "Характеристика": "C" },
  },
  {
    name: "Щит распределительный на 12 модулей",
    slug: "shchit-12-moduley",
    article: "ELK-SCH12",
    price: 1290,
    old_price: 1490,
    category: "avtomatika-i-shchity",
    description: "Пластиковый распределительный щит для внутренней установки.",
    attrs_json: { Модулей: "12", Установка: "внутренняя", "Степень защиты": "IP41" },
  },

  // Садовая техника
  {
    name: "Газонокосилка электрическая Makita ELM3720",
    slug: "makita-elm3720",
    article: "SAD-ELM3720",
    price: 16990,
    old_price: 18900,
    category: "sadovaya-tehnika",
    brand: "makita",
    description: "Электрическая газонокосилка с шириной скашивания 37 см.",
    attrs_json: { Мощность: "1400 Вт", "Ширина скашивания": "37 см", "Травосборник": "40 л" },
  },
  {
    name: "Триммер аккумуляторный DeWalt DCM561P1",
    slug: "dewalt-dcm561p1",
    article: "SAD-DCM561",
    price: 21900,
    category: "sadovaya-tehnika",
    brand: "dewalt",
    description: "Аккумуляторный садовый триммер с бесщёточным двигателем.",
    attrs_json: { Напряжение: "18 В", "Ширина скашивания": "33 см" },
  },

  // Садовый инвентарь
  {
    name: "Лопата штыковая с черенком",
    slug: "lopata-shtykovaya",
    article: "SAD-LOP01",
    price: 590,
    category: "sadovyy-inventar",
    description: "Штыковая лопата с деревянным черенком.",
    attrs_json: { Материал: "сталь", Черенок: "дерево" },
  },
  {
    name: "Тачка садовая одноколёсная 90 л",
    slug: "tachka-sadovaya-90",
    article: "SAD-TCH90",
    price: 4290,
    old_price: 4890,
    category: "sadovyy-inventar",
    description: "Садово-строительная тачка грузоподъёмностью 170 кг.",
    attrs_json: { Объём: "90 л", "Грузоподъёмность": "170 кг" },
  },
  {
    name: "Секатор садовый Зубр Эксперт",
    slug: "zubr-sekator-expert",
    article: "SAD-SEK01",
    price: 690,
    category: "sadovyy-inventar",
    brand: "zubr",
    description: "Плоскостной секатор для обрезки веток до 20 мм.",
    attrs_json: { "Диаметр реза": "20 мм", Материал: "SK5 сталь" },
  },
];

interface RequestOptions {
  method?: "GET" | "POST";
  body?: unknown;
}

async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { body, method = "GET" } = options;
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers:
      body === undefined
        ? { Accept: "application/json" }
        : { Accept: "application/json", "Content-Type": "application/json" },
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  const text = await response.text();
  let data: unknown = null;
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }
  }

  if (!response.ok) {
    throw new Error(
      `${method} ${path} → ${response.status}: ${typeof data === "string" ? data.slice(0, 200) : JSON.stringify(data)}`
    );
  }
  return data as T;
}

async function listAll<T>(resource: string): Promise<T[]> {
  const items: T[] = [];
  let page = 1;
  for (;;) {
    const data = await request<ListResponse<T>>(`/${resource}/?page=${page}`);
    const results = Array.isArray(data) ? data : data.results;
    items.push(...results);
    const pages = Array.isArray(data) ? 1 : data.pages;
    if (page >= pages || results.length === 0) break;
    page += 1;
  }
  return items;
}

interface ProductCreateBody {
  name: string;
  slug: string;
  article: string;
  price: number;
  category_id: number;
  is_active: boolean;
  old_price?: number;
  description?: string;
  attrs_json?: Record<string, string>;
  brand_id?: number;
}

async function main(): Promise<void> {
  console.log(`Backend: ${API_BASE_URL}`);

  // ── Категории ───────────────────────────────────────────────────────────────
  const existingCategories = await listAll<ApiCategory>("categories");
  const categoryBySlug = new Map<string, ApiCategory>(existingCategories.map((item) => [item.slug, item]));
  let createdCategories = 0;

  for (const [index, parent] of CATEGORIES.entries()) {
    let parentRecord = categoryBySlug.get(parent.slug);
    if (!parentRecord) {
      parentRecord = await request<ApiCategory>("/categories/", {
        method: "POST",
        body: { name: parent.name, slug: parent.slug, sort: index, is_active: true },
      });
      categoryBySlug.set(parent.slug, parentRecord);
      createdCategories += 1;
    }

    for (const [childIndex, child] of (parent.children ?? []).entries()) {
      if (categoryBySlug.has(child.slug)) continue;
      const childRecord = await request<ApiCategory>("/categories/", {
        method: "POST",
        body: { name: child.name, slug: child.slug, sort: childIndex, is_active: true, parent: parentRecord.id },
      });
      categoryBySlug.set(child.slug, childRecord);
      createdCategories += 1;
    }
  }
  console.log(`Категории: создано ${createdCategories}, всего ${categoryBySlug.size}`);

  // ── Бренды ──────────────────────────────────────────────────────────────────
  const existingBrands = await listAll<ApiBrand>("brands");
  const brandBySlug = new Map<string, ApiBrand>(existingBrands.map((item) => [item.slug, item]));
  let createdBrands = 0;

  for (const brand of BRANDS) {
    if (brandBySlug.has(brand.slug)) continue;
    const record = await request<ApiBrand>("/brands/", {
      method: "POST",
      body: { name: brand.name, slug: brand.slug },
    });
    brandBySlug.set(brand.slug, record);
    createdBrands += 1;
  }
  console.log(`Бренды: создано ${createdBrands}, всего ${brandBySlug.size}`);

  // ── Товары ──────────────────────────────────────────────────────────────────
  const existingProducts = await listAll<ApiProduct>("products");
  const productSlugs = new Set(existingProducts.map((item) => item.slug));
  let createdProducts = 0;
  const failures: string[] = [];

  for (const product of PRODUCTS) {
    if (productSlugs.has(product.slug)) continue;

    const category = categoryBySlug.get(product.category);
    if (!category) {
      failures.push(`${product.slug}: нет категории ${product.category}`);
      continue;
    }

    const body: ProductCreateBody = {
      name: product.name,
      slug: product.slug,
      article: product.article,
      price: product.price,
      category_id: category.id,
      is_active: true,
    };
    if (product.old_price !== undefined) body.old_price = product.old_price;
    if (product.description) body.description = product.description;
    if (product.attrs_json) body.attrs_json = product.attrs_json;
    if (product.brand) {
      const brand = brandBySlug.get(product.brand);
      if (brand) body.brand_id = brand.id;
    }

    try {
      await request<ApiProduct>("/products/", { method: "POST", body });
      createdProducts += 1;
    } catch (error) {
      failures.push(`${product.slug}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  const finalProducts = await listAll<ApiProduct>("products");
  console.log(`Товары: создано ${createdProducts}, всего на бэкенде ${finalProducts.length}`);
  if (failures.length > 0) {
    console.log(`Ошибки (${failures.length}):`);
    for (const failure of failures) console.log(`  - ${failure}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
