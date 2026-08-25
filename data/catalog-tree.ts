/**
 * Полная структура каталога, обнаруженная рекурсивным обходом эталонного сайта
 * (см. discovery-отчёт: 723 узла, 600 терминальных страниц-листингов, 122 узла-branch,
 * максимальная глубина 6 уровней). Это единственный источник правды для иерархии,
 * названий, slug'ов и маршрутов каталога — вся навигация (`app/catalog/[...path]`)
 * строится поверх этого дерева, ничего не хардкодится по отдельным категориям.
 *
 * Формат сырых данных — компактные кортежи, чтобы 700+ узлов помещались в разумный
 * файл: [slug, title, count, children]. `children` присутствует только у узлов типа
 * "branch" (дальнейшая навигация на эталонном сайте); при children === null узел
 * терминальный — на эталоне это уже сетка товаров.
 */

import { catalogCategories } from "./catalog-data";

export type CatalogNodeType = "branch" | "terminal";

export interface CatalogNode {
  slug: string;
  title: string;
  /** Число товаров на эталонном сайте на момент обхода — только для информации, не для UI-логики. */
  count: number | null;
  type: CatalogNodeType;
  children: CatalogNode[];
  /** Заполняется у части терминальных узлов на верхних уровнях (см. data/catalog-data.ts прежний контент). */
  image?: string;
  description?: string[];
}

type RawNode = [slug: string, title: string, count: number | null, children: RawNode[] | null];

function build(raw: RawNode[]): CatalogNode[] {
  return raw.map(([slug, title, count, children]) => ({
    slug,
    title,
    count,
    type: children ? "branch" : "terminal",
    children: children ? build(children) : [],
  }));
}

const RAW_TREE: RawNode[] = [
  ["ventilyaciya", "Вентиляция", null, [
    ["ventilyatory", "Вентиляторы", 164, null],
    ["vozdukhovody", "Воздуховоды", 69, null],
    ["lyuki-i-dvercy", "Люки и дверцы", 115, null],
    ["perekhody-redukcii-truby", "Переходы, редукции, трубы", 37, null],
    ["reshetki-flancy-filtry", "Решетки, фланцы, фильтры", 56, null],
  ]],

  ["vodo-gazosnabzhenie", "Водо-газоснабжение", null, [
    ["baki-dlya-vody", "Баки для воды", 34, null],
    ["vodoschetchik", "Водосчетчики", 25, null],
    ["zapornaya-armatura-i-dobornye-yelement", "Запорная арматура и доборные элементы", 839, [
      ["asbokarton", "Асбокартон", 6, null],
      ["ventilya", "Вентиля", 16, null],
      ["vstavki-diyelektricheskie", "Вставки диэлектрические", 16, null],
      ["gruppa-bezopasnosti-reduktora-dav", "Группа безопасности, редуктора давления", 17, null],
      ["zaglushki", "Заглушки запорные", 25, null],
      ["zadvizhkizatvory", "Задвижки, затворы", 23, null],
      ["zapornaya-armatura-prochie", "Запорная арматура прочие", 15, null],
      ["klapany-ktz", "Клапаны КТЗ", 10, null],
      ["klapany-obratnye", "Клапаны обратные", 19, null],
      ["klapany-radiatornye", "Клапаны радиаторные", 24, null],
      ["kompensatory", "Компенсаторы", 4, null],
      ["kontrgayki", "Контргайки", 11, null],
      ["krany", "Краны", 192, null],
      ["lyon", "Лён", 3, null],
      ["lenta-fum", "Лента-фум", 6, null],
      ["mufty", "Муфты", 22, null],
      ["nit", "Нить", 10, null],
      ["otvody", "Отводы", 35, null],
      ["paronit", "Паронит", 18, null],
      ["perekhody", "Переходы", 44, null],
      ["podvodka", "Подводка", 50, null],
      ["prokladki-rez-i-poronit", "Прокладки рез. и поронит", 45, null],
      ["rezby", "Резьбы", 9, null],
      ["santekhgel", "Сантехгель", 19, null],
      ["sgony", "Сгоны", 12, null],
      ["troyniki", "Тройники", 19, null],
      ["udliniteli", "Удлинители", 15, null],
      ["filtry", "Фильтры чугунные", 11, null],
      ["flancy", "Фланцы", 29, null],
      ["khomuty", "Хомуты", 26, null],
      ["shtucery", "Штуцеры", 31, null],
      ["yel-soedinenie", "Эл.соединение", 12, null],
      ["yenergofleks", "Энергофлекс", 45, null],
    ]],
    ["kanalizacionnye-truby-i-fitingi", "Канализационные трубы и фитинги", 191, [
      ["kanalizacionye-truby", "Канализационные трубы", 38, null],
      ["fitingi-dlya-kanalizacionnyh-truby", "Фитинги для канализационных труб", 139, null],
    ]],
    ["manometry", "Манометры", 26, null],
    ["nasosy", "Насосы", 178, [
      ["bloki-avtomatiki", "Блоки автоматики", 11, null],
      ["nasosy-vibracionnye", "Насосы вибрационные", 15, null],
      ["nasosy-drenazhnye", "Насосы дренажные", 22, null],
      ["nasosy-kanalizacionnye", "Насосы канализационные", 5, null],
      ["nasosy-poverkhnostnye", "Насосы поверхностные", 20, null],
      ["nasosy-skvazhinnye", "Насосы скважинные", 2, null],
      ["nasosy-fekalnye", "Насосы фекальные", 14, null],
      ["nasosy-cirkulyacionnye", "Насосы циркуляционные", 45, null],
      ["poplavki-dlya-yomkosti", "Поплавки для ёмкости", 4, null],
      ["stanciya-vodosnabzheniya", "Станции водоснабжения", 39, null],
    ]],
    ["gazovye-schetchiki", "Счетчики газа", 30, null],
    ["termometr", "Термометры", 11, null],
    ["truby-poliyetilenovye-vodagaz", "Трубы полиэтиленовые вода,газ", 71, null],
    ["fiting-poliyetilenovyy-vodagaz", "Фитинги полиэтиленовые вода,газ", 332, null],
  ]],

  ["vsyo-dlya-sauny-i-bani", "Всё для сауны и бани", null, [
    ["aksessuary-dlya-bani", "Аксессуары для бани", 82, null],
    ["dveri-okna-i-bondarnye-izdeliya", "Двери, окна и бондарные изделия", 144, null],
    ["dymokhody-3", "Комплектующие к дымоходам", 103, null],
    ["pechi-bannye", "Печи банные", 25, null],
  ]],

  ["instrument", "Инструмент", null, [
    ["kondicionery-2", "Кондиционеры", 5, null],
    ["ruchnoy-instrument", "Ручной инструмент", 2014, [
      ["bity-nasadki", "Биты, насадки", 87, null],
      ["vorotki", "Воротки", 17, null],
      ["gvozdoder", "Гвоздодеры", 15, null],
      ["domkraty", "Домкраты", 49, null],
      ["zaklepochniki", "Заклепочники", 26, null],
      ["kirki", "Кирки", 5, null],
      ["kluppy", "Клуппы", 17, null],
      ["klyuchi-2", "Ключи", 299, null],
      ["krestiki-klinya", "Крестики, клинья", 88, null],
      ["kuvaldy", "Кувалды", 33, null],
      ["kusachki-po-metallu", "Кусачки по металлу", 75, null],
      ["lebedki", "Лебедки", 5, null],
      ["lomy", "Ломы", 15, null],
      ["metchiki", "Метчики", 24, null],
      ["molotki", "Молотки", 112, null],
      ["nabory-instrumentov", "Наборы инструментов", 98, null],
      ["nabory-metchikov-i-plashek", "Наборы метчиков и плашек", 6, null],
      ["napilniki", "Напильники", 33, null],
      ["nozhi-stroitelnye", "Ножи строительные", 166, [
        ["lezviya", "Лезвия", 31, null],
        ["stameski", "Стамески", 43, null],
      ]],
      ["nozhnicy-po-metallu", "Ножницы по металлу", 47, [
        ["nozhnicy-dlya-pvkh-pp-trub", "Ножницы для ПВХ ,ПП труб", 12, null],
      ]],
      ["nozhovki", "Ножовки", 77, null],
      ["otvertki", "Отвертки", 125, null],
      ["passatizhi", "Пассатижи", 14, null],
      ["payalniki", "Паяльники", 34, null],
      ["plashki", "Плашки", 29, null],
      ["plitkorezy", "Плиткорезы, стеклорезы, стусло", 69, [
        ["steklorez", "Стеклорез", 6, null],
        ["stuslo", "Стусло", 18, null],
      ]],
      ["ploskogubcy", "Плоскогубцы", 45, null],
      ["rashpili", "Рашпили", 5, null],
      ["pily", "Ручные пилы", 96, null],
      ["rubanki", "Ручные рубанки", 6, null],
      ["steplery", "Степлеры", 24, null],
      ["strubciny", "Струбцины", 23, null],
      ["tali", "Тали", 32, null],
      ["testery-i-detektory", "Тестеры и детекторы", 6, null],
      ["tiski", "Тиски", 7, null],
      ["topory", "Топоры", 54, null],
      ["torcevye-golovki", "Торцевые головки", 49, null],
      ["shnury-shpagaty-leski", "Шнуры, шпагаты, лески", 39, null],
      ["yashhiki-dlya-instrumentov", "Ящики для инструментов", 62, null],
    ]],
    ["stroitelnoe-oborudovanie", "Строительное оборудование", 298, [
      ["betonosmesiteli", "Бетоносмесители", 45, null],
      ["lestnicy-stroitelnye", "Лестницы строительные", 237, [
        ["kolesa", "Колеса", 88, null],
        ["lesa-stroitelnye", "Леса строительные", 50, null],
      ]],
      ["tachki-stroitelnye", "Тачки строительные", 15, null],
    ]],
    ["shtukaturno-otdelochnye-materialy", "Штукатурно-отделочные инструменты", 868, [
      ["valiki", "Валики", 175, null],
      ["kisti", "Кисти", 100, null],
      ["valiki-kisti-maklovicy", "Макловицы", 45, null],
      ["masterkikelmyrasshivki", "Мастерки,кельмы,расшивки", 37, null],
      ["pistolety-dlya-germetika-i-peny", "Пистолеты для герметика и пены", 80, null],
      ["pravilo-stroitelnye", "Правило строительные", 23, null],
      ["skotch", "Скотч", 189, null],
      ["stroitelnye-tazy-i-emkosti", "Строительные тазы и емкости", 40, null],
      ["terki-dlya-shtukaturki", "Терки для штукатурки", 54, null],
      ["shpateli", "Шпатели", 125, null],
    ]],
    ["yelektroinstrument", "Электроинструмент", 3523, [
      ["vibrotekhnika-i-komplektuyushhie", "Вибротехника и комплектующие", 37, [
        ["bulavy-i-gibkie-valy", "Булавы и гибкие валы", 9, null],
        ["vibratory", "Вибраторы", 6, null],
        ["vibroplity", "Виброплиты", 6, null],
        ["jelektroprivody", "Электроприводы", 16, null],
      ]],
      ["generatory-i-komplektuyushhie", "Генераторы и комплектующие", 69, [
        ["generatory", "Генераторы", 43, null],
        ["komplektuyushhie-dlya-generatorov", "Комплектующие для генераторов", 26, null],
      ]],
      ["gravery", "Граверы", 10, null],
      ["dreli-shurupoverty-i-gaykoverty", "Дрели, шуруповерты и гайковерты", 184, [
        ["akkumulyatornye-dreli-shurupoverty", "Аккумуляторные дрели-шуруповерты", 87, null],
        ["akkumulyatory-i-zaryadnye-ustroystva", "Аккумуляторы и зарядные устройства", 13, null],
        ["bezudarnye-dreli", "Безударные дрели", 7, null],
        ["gaykoverty", "Гайковерты", 22, null],
        ["setevye-shurupoverty", "Сетевые шуруповерты", 15, null],
        ["udarnye-dreli", "Ударные дрели", 39, null],
      ]],
      ["izmeritelno-razmetochnyy-instrumen", "Измерительно-разметочный инструмент", 389, [
        ["lazernye-niveliry-i-dalnomery", "Лазерные нивелиры и дальномеры", 88, null],
        ["ruletki-izmeritelnye", "Рулетки измерительные", 149, null],
        ["ruchnye-izmeritelnye-instrumenty", "Ручные измерительные инструменты", 41, null],
        ["stroitelnye-urovni", "Строительные уровни", 111, null],
      ]],
      ["motopompy-i-komplektuyushhie", "Мотопомпы и комплектующие", 24, [
        ["komplektuyushhie-dlya-motopomp", "Комплектующие для мотопомп", 15, null],
        ["motopompy", "Мотопомпы", 9, null],
      ]],
      ["multimetry", "Мультиметры", 9, null],
      ["otboynye-molotki", "Отбойные молотки", 11, null],
      ["perforatory", "Перфораторы", 66, null],
      ["pily-2", "Пилы", 69, [
        ["pily-montazhnye", "Пилы монтажные", 12, null],
        ["pily-torcovochnye", "Пилы торцовочные", 16, null],
        ["sabelnye-pily", "Сабельные пилы", 6, null],
        ["cirkulyarnye-pily", "Циркулярные пилы", 35, null],
      ]],
      ["plitkorez", "Плиткорезы", 11, null],
      ["pnevmoinstrumenty-kompressory-i-kom", "Пневмоинструменты, компрессоры и комплектующие", 248, [
        ["gvozdi-i-shtifty-dlya-steplerov", "Гвозди и штифты для степлеров", 45, null],
        ["kompressory", "Компрессоры", 48, null],
        ["kraskopulty", "Краскопульты", 47, null],
        ["pnevmoinstrument", "Пневмоинструмент", 51, null],
        ["pnevmoinstrumentalnye-nabory", "Пневмоинструментальные наборы", 4, null],
        ["pnevmofitingi", "Пневмофитинги", 24, null],
        ["raskhodnye-materialy-dlya-kompressoro", "Расходные материалы для компрессоров и пневмоинструмента", 5, null],
        ["shlangi", "Шланги пневматические", 24, null],
      ]],
      ["raskhodnye-materialy-i-osnastka-dlya-yel", "Расходные материалы и оснастка для электроинструмента", 2075, [
        ["bury-i-sverla", "Буры и сверла", 652, [
          ["bury", "Буры", 230, null],
          ["nabory-burov", "Наборы буров", 1, null],
          ["nabory-sverl", "Наборы сверл", 18, null],
          ["sverla-po-betonu", "Сверла по бетону", 16, null],
          ["sverla-po-derevu", "Сверла по дереву", 97, null],
          ["sverla-po-metallu", "Сверла по металлу", 170, null],
          ["sverla-po-steklu-kafelyu-i-keramike", "Сверла по стеклу, кафелю и керамике", 113, null],
          ["smazka-dlya-burov", "Смазка для буров", 6, null],
        ]],
        ["grafitovye-shhetki", "Графитовые щетки", 22, null],
        ["zubila-i-doloto", "Зубила и долото", 62, null],
        ["koronki", "Коронки", 200, [
          ["koronki-po-betonu-i-kirpichu", "Коронки по бетону и кирпичу", 31, null],
          ["koronki-po-derevu", "Коронки по дереву", 5, null],
          ["koronki-po-kafelyu-steklu", "Коронки по кафелю, стеклу", 83, null],
          ["koronki-po-metallu", "Коронки по металлу", 11, null],
          ["koronki-universalnye", "Коронки универсальные", 50, null],
          ["khvostoviki-dlya-koronok", "Хвостовики для коронок", 20, null],
        ]],
        ["korshhetki-i-sharoshki", "Корщетки и шарошки", 56, [
          ["korshhetki", "Корщетки", 55, null],
          ["nabor-korshhetok-i-sharoshek", "Набор корщеток и шарошек", 1, null],
        ]],
        ["krugi-i-diski-dlya-yelektroinstrumenta", "Круги и диски для электроинструмента", 746, [
          ["almaznye-gibkie-shlifovalnye-diski", "Алмазные гибкие шлифовальные диски", 26, null],
          ["almaznye-chashki", "Алмазные чашки", 20, null],
          ["diski-almaznye", "Диски алмазные", 199, null],
          ["diski-otreznye-abrazivnye", "Диски отрезные абразивные", 130, null],
          ["diski-pilnye", "Диски пильные", 174, [
            ["kolca-perekhodnye", "Кольца переходные", 3, null],
          ]],
          ["diski-shlifovalnye", "Диски шлифовальные", 32, null],
          ["krugi-lepestkovye-veernye", "Круги лепестковые веерные", 21, null],
          ["krugi-shlifovalnye", "Круги шлифовальные", 20, null],
          ["lepestkovye-shlifovalnye-krugi-i-dis", "Лепестковые шлифовальные круги и диски", 174, null],
        ]],
        ["meshalki", "Мешалки", 41, null],
        ["nozhi-dlya-trimmerov", "Ножи для триммеров", 18, null],
        ["patrony-bystrozazhimnye", "Патроны быстрозажимные", 15, null],
        ["rezcy", "Резцы", 7, null],
        ["frezy", "Фрезы", 140, [
          ["nabory-frez-po-derevu", "Наборы фрез по дереву", 7, null],
          ["podshipniki-dlya-frezerov", "Подшипники для фрезеров", 8, null],
          ["frezy-po-derevu", "Фрезы по дереву", 125, null],
        ]],
        ["shlifovalnye-listy-shkurki-setki", "Шлифовальные листы, шкурки, сетки", 118, null],
      ]],
      ["stabilizatory-napryazheniya", "Стабилизаторы напряжения", 36, null],
      ["stanki", "Станки", 21, [
        ["sverlilnye-stanki", "Сверлильные станки", 5, null],
        ["stanki-zatochnye", "Станки заточные", 13, null],
        ["stanki-po-derevu-i-metallu", "Станки по дереву и металлу", 3, null],
      ]],
      ["miksery-stroitelnye", "Строительные миксеры", 20, null],
      ["frezery", "Фрезеры", 11, null],
      ["shlifovalnye-mashiny-i-mnogofunkcion", "Шлифовальные машины и многофункциональный инструмент", 169, [
        ["mnogofunkcionalnyy-instrument", "Многофункциональный инструмент", 6, null],
        ["akkumuljatornye-bolgarki", "Углошлифмашины аккумуляторные", 12, null],
        ["bolgarki-ushm", "Углошлифмашины(УШМ)", 107, [
          ["osnastka-i-prisposobleniya", "Оснастка и приспособления", 10, null],
        ]],
        ["shlifovalnye-mashiny", "Шлифовальные машины", 36, null],
        ["shlicevye-nozhnicy", "Шлицевые ножницы", 8, null],
      ]],
      ["shtroborezy-i-prisposobleniya", "Штроборезы и приспособления", 9, [
        ["osnastka-i-prisposobleniya-2", "Приспособления и оснастка", 4, null],
        ["shtroborezy", "Штроборезы", 5, null],
      ]],
      ["yelektrolobziki-i-rubanki", "Электролобзики и рубанки", 35, [
        ["rubanki-2", "Рубанки", 8, null],
        ["yelektrolobziki", "Электролобзики", 27, null],
      ]],
    ]],
  ]],

  ["listovoy-material", "Листовой материал", null, [
    ["gipsokarton", "Гипсокартон", 27, null],
    ["komplektuyushhie-k-gkl", "Комплектующие к ГКЛ", 141, null],
  ]],

  ["metiznyetakelazhnye-i-skobyanye-izdel", "Метизные, такелажные и скобяные изделия", null, [
    ["zamki-i-ruchki", "Замки и ручки", 2238, [
      ["mekhanizmy-dveri", "Дверные механизмы", 192, null],
      ["dovodchiki-roliki-dvernyesharik-fiks", "Доводчики, ролики дверные, шарик.фикс", 144, null],
      ["zamki", "Замки", 216, null],
      ["zamki-visyachie", "Замки висячие", 109, null],
      ["prochie-komplektuyshchie", "Комплектующие для замков и ручек", 32, null],
      ["nakladki-zavyortki-ruchki-povorotnye", "Накладки, завёртки, ручки поворотные", 395, null],
      ["petli", "Петли", 207, null],
      ["ruchki-ruchki-zashhyolki", "Ручки, ручки-защёлки", 746, null],
      ["cilindry-lichinka", "Цилиндры, личинки", 134, null],
      ["cifry", "Цифры", 40, null],
      ["shpingalety", "Шпингалеты", 23, null],
    ]],
    ["krepezhnye-izdeliya", "Крепежные изделия", 1782, [
      ["ankera", "Анкера", 133, [
        ["anker-khimicheskiy", "Анкер химический", 14, null],
      ]],
      ["bolty", "Болты", 395, null],
      ["gayki", "Гайки", 110, null],
      ["gvozdi", "Гвозди", 72, null],
      ["dyubelya", "Дюбеля", 266, null],
      ["zaglushki-dekorativnye", "Заглушки декоративные", 53, null],
      ["zaklepki", "Заклепки", 57, null],
      ["samorezyshurupy", "Саморезы, шурупы", 573, [
        ["vinty", "Винты", 35, null],
        ["samorezy-zheltyy-cink", "Саморезы желтый цинк", 91, null],
        ["samorezy-po-derevu", "Саморезы по дереву", 91, null],
        ["samorezy-po-metallu", "Саморезы по металлу", 66, null],
        ["samorezy-s-pressshayboy-ostrye", "Саморезы с прессшайбой острые", 44, null],
        ["samorezy-s-pressshayboy-so-sverlom", "Саморезы с прессшайбой со сверлом", 39, null],
        ["samorezy-cvetnye", "Саморезы цветные", 67, null],
        ["shurup-glukhar", "Шуруп глухарь", 35, null],
        ["shurupy-po-betonu", "Шурупы по бетону", 9, null],
      ]],
      ["shayby", "Шайбы", 86, null],
      ["shpilki", "Шпильки", 37, null],
    ]],
    ["stroitelnyy-krepezh", "Строительный крепеж", 238, [
      ["klyaymer", "Кляймеры", 9, null],
      ["plastina-krepezhnaya", "Крепежные пластины", 30, null],
      ["kreplenie-d-balok", "Крепления для балок", 14, null],
      ["skoby-d-balok", "Скобы для балок", 11, null],
      ["skoby-stroitelnye", "Скобы строительные", 28, null],
      ["ugolki-krepezhnye", "Уголки крепежные", 89, null],
      ["khomuty-ocinkovanye", "Хомуты оцинкованые", 57, null],
    ]],
    ["takelazh", "Такелаж", 286, [
      ["verevki-trosy-cepi", "Веревки, тросы, цепи", 106, null],
      ["zazhimy-karabiny-koush", "Зажимы, карабины, коуш", 120, null],
      ["talrepy-vertlyugi", "Талрепы, вертлюги", 19, null],
      ["fiksatory-armatury", "Фиксаторы арматуры", 41, null],
    ]],
  ]],

  ["obshhestroitelnye-materialy", "Общестроительные материалы", null, [
    ["asbestocementnye-izdeliya", "Асбестоцементные изделия", 34, [
      ["asbestocementnye-truby", "Асбестоцементные трубы", 24, null],
      ["shifer", "Шифер", 10, null],
    ]],
    ["zhbi", "ЖБИ", 19, [
      ["kcd", "Днища колодца", 3, null],
      ["kc", "Кольца", 9, null],
      ["kcp", "Крышки колодца", 7, null],
    ]],
    ["kirpich-i-bloki", "Кирпич и блоки", 55, [
      ["bloki-gazosilikatnye", "Блоки газосиликатные", 19, null],
      ["bloki-cementno-peschannye", "Блоки цементно-песчанные", 1, null],
      ["kirpich", "Кирпич", 35, null],
    ]],
    ["krovlya-vodostochnye-sistemy", "Кровля, водосточные системы", 2578, [
      ["vodostochnaya-sistema", "Водосточная система", 209, null],
      ["geotekstil", "Геотекстиль", 1, null],
      ["gidro-paroizolyacionnye-materialy", "Гидро-пароизоляционные материалы", 793, [
        ["kolpak-dlya-zabora", "Колпак для забора", 793, null],
        ["list-ploskij-zakaznoj", "Лист плоский заказной", 355, null],
        ["ograzhdenija-zakaznoj", "Ограждения заказной", 96, null],
      ]],
      ["dobornye-yelementy", "Доборные элементы", 816, [
        ["lestnicy-yelementy-bezopasnosti", "Лестницы, элементы безопасности", 99, null],
        ["okna", "окна", 99, null],
        ["podkanstrukciya-i-fasonka-dlya-fasada", "Подконструкция и фасонка для фасада", 252, null],
        ["uplotniteli", "Уплотнители", 36, null],
      ]],
      ["list-ploskiy", "Лист плоский", 20, null],
      ["metallicheskiy-sayding", "Металлический сайдинг", 16, null],
      ["metallocherepica-pod-zakaz", "Металлочерепица (под заказ)", 36, null],
      ["myagkaya-krovlya", "Мягкая кровля", 71, null],
      ["ograzhdeniya", "Ограждения", 44, null],
      ["ondeks", "Ондекс", 29, null],
      ["podkonstrukciya-dlya-fasadov", "Подконструкция для фасадов", 29, null],
      ["profnastil-standart", "Профнастил стандарт", 58, null],
      ["rulonnaya-naplavlyaemaya-krovlya", "Рулонная наплавляемая кровля", 10, null],
    ]],
    ["metalloprokat", "Металлопрокат", 219, [
      ["armatura-krug-kvadrat-polosa", "Арматура, круг, квадрат, полоса", 31, null],
      ["balki-shvellera-ugolki", "Балки, швеллера, уголки", 38, null],
      ["listy-g-k", "Листы г/к", 15, null],
      ["listy-kh-k", "Листы х/к", 4, null],
      ["provoloka", "Проволока", 17, null],
      ["setka-dlya-ograzhdeniya", "Сетка для ограждения", 7, null],
      ["setka-stroitelnaya", "Сетка строительная", 38, null],
      ["truby-profilnye-kruglye", "Трубы профильные, круглые", 69, null],
    ]],
    ["plitka-trotuarnaya", "Плитка тротуарная", 86, [
      ["dorozhnye-yelementy", "Дорожные элементы", 23, null],
      ["plitka-trotuarnaya-2", "Тротуарная плитка", 63, null],
    ]],
    ["polikarbonat", "Поликарбонат", 48, [
      ["komplektuyushhie-dlya-polikarbonata", "Комплектующие для поликарбоната", 34, null],
      ["sotovyy", "Сотовый", 14, null],
    ]],
  ]],

  ["otdelochnye-materialy", "Отделочные материалы", null, [
    ["dveri", "Двери", 2116, [
      ["dveri-mezhkomnatnye", "Двери межкомнатные", 916, null],
      ["dveri-mezhkomnatnye-zakaz", "Двери межкомнатные ЗАКАЗ", 102, null],
      ["dveri-metallicheskie", "Двери металлические", 228, null],
      ["dobornye-yelementy-k-dveryam", "Доборные элементы к дверям", 817, null],
      ["protivopozharnye-dveri", "Противопожарные двери", 53, null],
    ]],
    ["karnizy", "Карнизы", 198, [
      ["karniz-kovannyy", "Карнизы кованные", 138, null],
      ["karnizy-potolochnye-plastikovye", "Карнизы потолочные пластиковые", 60, null],
    ]],
    ["lakokrasochnye-materialy", "Лакокрасочные материалы", 1215, [
      ["betonokontakt", "Бетоноконтакт", 21, null],
      ["germetiki", "Герметики", 46, null],
      ["gruntovka-akril", "Грунтовка Акрил", 36, null],
      ["gruntovka-gf-021", "Грунтовка ГФ-021", 11, null],
      ["dobavki-v-beton", "Добавки в бетон", 30, null],
      ["zhidkie-gvozdi", "Жидкие гвозди", 30, null],
      ["kleya", "Клея", 81, null],
      ["kraska-vd", "Краска ВД", 205, null],
      ["kraska-yemal", "Краска эмаль", 302, null],
      ["kraska-ayerozolnaya", "Краски аэрозольные", 37, null],
      ["laki", "Лаки", 70, null],
      ["mastika", "Мастики", 28, null],
      ["pasta-pigmenty-i-krasiteli-kolerovoch", "Паста, пигменты и красители колеровочные", 19, null],
      ["pena-montazhnaya", "Пена монтажная", 48, null],
      ["polimernye-shpatlevki", "Полимерные шпатлевки", 39, null],
      ["propitki-dlya-dereva", "Пропитки для дерева", 113, null],
      ["rastvoriteli", "Растворители", 37, null],
      ["stroitelnaya-khimiya", "Строительная химия", 59, null],
    ]],
    ["napolnye-pokrytiya", "Напольные покрытия", 5232, [
      ["art-vinil", "Арт винил", 173, null],
      ["kovriki-pridvernye", "Коврики придверные", 291, null],
      ["kovrovye-dorozhki", "Ковровые дорожки", 509, null],
      ["kovrolin", "Ковролин", 1027, [
        ["kovrolin-osnova-rezina", "Ковролин (основа резина)", 54, null],
        ["kovrolin-ostatki", "Ковролин (остатки)", 112, null],
        ["kovrolin-trava", "Ковролин (трава)", 58, null],
      ]],
      ["komplektuyshchie-dlya-napolnyh-pokriti", "Комплектующие для напольных покрытий", 948, null],
      ["laminat", "Ламинат", 502, null],
      ["linoleum", "Линолеум", 1029, null],
      ["parketnaay-doska", "Паркетная доска", 3, null],
      ["podlozhka-pod-laminat", "Подложка под ламинат", 34, null],
      ["porogi", "Пороги", 717, null],
    ]],
    ["oboi", "Обои", 1106, [
      ["kley-oboynyy", "Клей обойный", 17, null],
      ["oboi-vinilovye", "Обои виниловые", 1058, null],
      ["oboi-zhidkie", "Обои жидкие", 22, null],
      ["oboi-pod-pokrasku", "Обои под покраску", 9, null],
    ]],
    ["plitka", "Плитка и керамогранит", 291, [
      ["bordjury-vstavki", "Бордюры, вставки", 33, null],
      ["keramicheskaya-plitka", "Керамическая плитка", 95, null],
      ["keramogranit", "Керамогранит", 163, null],
    ]],
    ["potolochnyy-plintus", "Потолочные плинтусы", 409, [
      ["dekorativnye-pvkh-ugolki", "Декоративные ПВХ уголки", 88, null],
      ["plintus-potolochnyy", "Плинтус потолочный", 321, null],
    ]],
    ["stenovaya-panel", "Стеновая панель", 368, [
      ["paneli-mdf", "Панели МДФ", 91, null],
      ["paneli-pvkh", "Панели ПВХ", 277, [
        ["paneli-pvkh-mozayka", "Панели ПВХ Мозайка", 40, null],
        ["ugol-plastikovyj", "Угол пластиковый", 66, null],
      ]],
    ]],
  ]],

  ["otoplenie", "Отопление", null, [
    ["vodonagrevateli-kolonki", "Водонагреватели, колонки", 178, [
      ["boylery-kosvennogo-nagreva", "Бойлеры косвенного нагрева", 1, null],
      ["dymokhody", "Дымоходы", 1, null],
      ["kolonki-gazovye", "Колонки газовые", 53, null],
      ["yelektrovodonagrevateli", "Электроводонагреватели", 123, null],
    ]],
    ["komplektuyushhie-k-kotlam", "Комплектующие к котлам", 97, [
      ["baki-rasshiritelnye", "Баки расширительные", 39, null],
      ["dymokhody-2", "Дымоходы для котлов", 14, null],
      ["zaglushki-2", "Заглушки", 8, null],
      ["zonty", "Зонты", 7, null],
      ["koleno", "Колено", 11, null],
      ["komplekty-dymokhodov", "Комплекты дымоходов", 5, null],
      ["kronshteyny", "Кронштейны", 2, null],
      ["prochie", "Прочие", 3, null],
      ["troyniki-2", "Тройники к котлам", 5, null],
    ]],
    ["komplektujushhie-k-radiatoram", "Комплектующие к радиаторам", 41, [
      ["vozdukhootvodchiki-krany-maevskogo", "Воздухоотводчики, краны маевского", 7, null],
      ["komplekty-dlya-montazha-radiatorov", "Комплекты для монтажа радиаторов", 9, null],
      ["kronshteyny-dlya-radiatorov", "Кронштейны для радиаторов", 14, null],
      ["nippelya-2", "Ниппеля для радиаторов", 2, null],
      ["probki-radiatornye", "Пробки радиаторные", 8, null],
      ["prokladki", "Прокладки", 1, null],
    ]],
    ["kotly", "Котлы", 61, null],
    ["metalloplastikovye-truby-i-fitingi-v", "Металлопластиковые трубы и фитинги, водяной теплый пол", 262, [
      ["ventilya-klapany-termostat", "Вентиля, клапаны термостат.", 6, null],
      ["kollektory", "Коллекторы", 31, null],
      ["mufty-2", "Муфты", 30, null],
      ["nippelya", "Ниппеля", 20, null],
      ["perekhodniki", "Переходники", 13, null],
      ["podlozhka", "Подложка", 4, null],
      ["prochee", "Прочее", 14, null],
      ["sgony-univ", "Сгоны унив.", 15, null],
      ["smesitelnye-uzly", "Смесительные узлы", 11, null],
      ["troyniki-3", "Тройники для труб", 28, null],
      ["truby", "Трубы м/п", 22, null],
      ["ugolki-2", "Уголки м/п", 32, null],
      ["fitingi-dlja-metalloplastikovyh-trub", "Фитинги для металлопластиковых труб", 7, null],
      ["futorki", "Футорки", 16, null],
      ["shkafy-kollektornye", "Шкафы коллекторные", 13, null],
    ]],
    ["polipropilenovye-truby", "Полипропиленовые трубы", 594, [
      ["truby-2", "Трубы", 58, null],
      ["truby-pp-2-metra", "Трубы пп (2 метра)", 16, null],
      ["polipropilenovye-truby-i-fitingi", "Фитинги для полипропиленовых труб", 520, [
        ["burty-pod-flanec", "Бурты под фланец", 7, null],
        ["ventilya-2", "Вентиля ПП", 2, null],
        ["zaglushki-3", "Заглушки ПП", 20, null],
        ["zachistki", "Зачистки", 0, null],
        ["klapany-obratnye-2", "Клапаны обратные ПП", 9, null],
        ["klipsy", "Клипсы", 17, null],
        ["kollektory-2", "Коллекторы ПП", 6, null],
        ["kompensacionnye-petli", "Компенсационные петли", 4, null],
        ["krany-2", "Краны ПП", 49, null],
        ["krestoviny", "Крестовины", 10, null],
        ["mufty-3", "Муфты ПП", 184, null],
        ["nasadki-dlya-svarki", "Насадки для сварки", 8, null],
        ["obvody-korotkie-obvody", "Обводы, короткие обводы", 13, null],
        ["planki-pod-smesitel", "Планки под смеситель", 5, null],
        ["troyniki-4", "Тройники ПП", 101, null],
        ["ugolki-3", "Уголки ПП", 80, null],
        ["filtry-2", "Фильтры", 7, null],
        ["flancy-2", "Фланцы ПП", 5, null],
      ]],
    ]],
    ["radiatory", "Радиаторы", 122, [
      ["klyuchi", "Ключи", 0, null],
      ["radiatory-panelnye", "Радиаторы панельные", 45, null],
      ["radiatory-sekcionnye", "Радиаторы секционные", 73, null],
    ]],
    ["truby-pp-akcija", "Трубы ПП(АКЦИЯ)", 16, null],
  ]],

  ["prochie-sadovka-zakaznye", "прочие садовка(заказные)", null, []],

  ["prochie-hoz-strojmaterialy", "Прочие хоз.стройматериалы", null, [
    ["tovary", "Товары", 80, null],
  ]],

  ["santekhnika", "Сантехника", null, [
    ["aksessuary-dlja-vannoj", "Аксессуары для ванной", 508, [
      ["armatura-dlja-bachka", "Арматура для бачка", 28, null],
      ["bumagoderzhateli", "Бумагодержатели", 32, null],
      ["vedro", "Ведро", 49, null],
      ["garnitury-dushevye", "Гарнитуры душевые", 96, null],
      ["derzhateli-d-zubnyh-shhetok", "Держатели д/зубных щеток", 12, null],
      ["dispenser", "Диспенсер", 8, null],
      ["dozatory", "Дозаторы", 27, null],
      ["jorshiki", "Ёршики", 50, null],
      ["karniz-v-vannu", "Карниз в ванну", 8, null],
      ["kartridzh", "Картридж", 32, null],
      ["mylnicy", "Мыльницы", 39, null],
      ["nabor-dlja-vanny-tualeta", "Набор для ванны,туалета", 19, null],
      ["stakany-podstakannik", "Стаканы,подстаканник", 32, null],
      ["filtr", "Фильтр", 9, null],
    ]],
    ["bide", "Биде", 2, null],
    ["vanny", "Ванны", 217, [
      ["vanny-akrilovye", "Акриловые ванны", 174, null],
      ["vanny-iz-iskusstvennogo-kamnya", "Ванны из искусственного камня", 10, null],
      ["vanny-stalnye", "Ванны стальные", 26, null],
    ]],
    ["dushevye-kabiny", "Душевые кабины и комплектующие", 293, [
      ["dushevye-kabiny-2", "Душевые кабины", 197, null],
      ["dushevye-ugolki", "Душевые уголки", 96, null],
    ]],
    ["kukhonnye-moyki", "Кухонные мойки", 265, [
      ["moyki-iz-iskusstvennogo-kamnya", "Мойки из искусственного камня", 86, null],
      ["moyki-stalnye", "Мойки стальные", 134, null],
      ["fartuk-kuhonnyj", "Фартук кухонный", 45, null],
    ]],
    ["mebel-dlya-vannoy-komnaty", "Мебель для ванной комнаты", 884, [
      ["zerkala", "Зеркала", 383, null],
      ["penaly", "Пеналы", 111, null],
      ["tumby", "Тумбы", 389, null],
    ]],
    ["smesiteli", "Смесители", 753, [
      ["kran-buksa", "Кран-букса", 21, null],
      ["krany-na-vodu", "Краны на воду", 17, null],
      ["smesiteli-dlya-vann", "Смесители для ванны с душем", 230, null],
      ["smesiteli-dlya-kukhni", "Смесители для кухни", 215, null],
      ["smesiteli-dlya-umyvalnika", "Смесители для умывальника", 231, null],
    ]],
    ["umyvalniki-dlya-vannoy-komnaty", "Умывальники для ванной комнаты", null, [
      ["umyvalniki", "Умывальники", 154, null],
    ]],
    ["unitazy-dlya-vannoy-komnaty", "Унитазы", 414, [
      ["monolit", "Монолит", 59, null],
      ["podvesnoj", "Подвесной", 124, null],
    ]],
  ]],

  ["svarochnoe-oborudovanie", "Сварочное оборудование", null, [
    ["aksessuary-dlya-svarki", "Аксессуары для сварки", 55, null],
    ["apparaty-dlya-svarki", "Аппараты для сварки", 9, null],
    ["gorelki-gazovye-rezaki-ballony", "Горелки газовые, резаки, баллоны", 88, [
      ["ballony", "Баллоны", 4, null],
      ["mushtuki", "Муштуки", 14, null],
      ["prochie-3", "Прочие", 2, null],
      ["reduktory-ventilja-reguljatory-klapany", "Редукторы,вентиля,регуляторы,клапаны", 27, null],
      ["rezaki-gorelki", "Резаки,горелки", 34, null],
    ]],
    ["svarochnye-apparaty", "Сварочные аппараты", 24, null],
    ["feny-i-lampy-payalnye", "Фены и лампы паяльные", 22, null],
    ["yelektrody-i-provolka-dlya-svarki", "Электроды и проволока для сварки", 83, [
      ["provolka-svarochnaja-na-porluavtomat", "Проволка сварочная на полуавтомат", 21, null],
    ]],
  ]],

  ["specodezhda-i-sredstva-individualno", "Спецодежда и средства индивидуальной и пожарной защиты", null, [
    ["zhilety", "Жилеты", 31, null],
    ["kostyumy", "Костюмы", 129, null],
    ["obuv-rabochaja", "Обувь рабочая", 198, [
      ["sapogi-botinki-galoshi", "Сапоги, ботинки, галоши", 197, null],
    ]],
    ["odezhda", "Одежда", 120, [
      ["beisbolki", "Бейсболки", 15, null],
      ["kurtki-bryuki-remni", "Куртки, брюки", 46, null],
      ["plashhi", "Плащи", 11, null],
      ["futbolki-beysbolki", "Футболки", 48, null],
    ]],
    ["pozharnyy-inventar", "Пожарный инвентарь", 107, [
      ["bagor-vedro-lopaty", "Багор, ведро, лопаты", 10, null],
      ["gidranty-podstavki", "Гидранты, подставки", 28, null],
      ["ognetushiteli", "Огнетушители", 23, null],
      ["rukova-stvoly-golovki", "Рукава, стволы, головки", 18, null],
      ["shkafy-krany", "Шкафы, краны", 28, null],
    ]],
    ["sredstva-zashhity", "Средства защиты", 218, [
      ["kaski", "Каски", 4, null],
      ["nakolenniki", "Наколенники", 6, null],
      ["perchatki", "Перчатки", 81, null],
      ["poyasa-predokhranitelnye", "Пояса предохранительные", 8, null],
      ["sredstva-indidvidualnoi-zashchity-organov-dyhaniya", "Средства индивидуальной защиты органов дыхания", 22, [
        ["zashhitnye-maski", "Защитные маски", 9, null],
        ["respiratory-2", "Респираторы", 11, null],
      ]],
      ["organov-zreniya", "Средства индивидуальной защиты органов зрения", 94, null],
      ["sredstva-individualnoi-zashchity-organov-sluha", "Средства индивидуальной защиты органов слуха", 3, null],
    ]],
  ]],

  ["stolyarnye-izdeliya", "Столярные изделия", null, [
    ["drevesno-plitnye-materialy", "Древесно-плитные материалы", 105, [
      ["dvp", "ДВП", 8, null],
      ["dsp", "ДСП", 4, null],
      ["plita-osb", "Плита OSB", 15, null],
      ["fanera", "Фанера", 78, null],
    ]],
    ["pilomaterialy", "Пиломатериалы", 34, [
      ["pilomaterial-obreznoy", "Пиломатериал обрезной", 7, null],
      ["reyka-stroitelnaya", "Рейка строительная", 27, null],
    ]],
    ["pogonazhnye-izdeliya-iz-massiva-dereva", "Погонажные изделия из массива дерева", 125, [
      ["nalichniki", "Наличники", 32, null],
      ["plintusa", "Плинтуса", 37, null],
      ["raskladka", "Раскладка", 16, null],
      ["ugolki", "Уголки", 36, null],
      ["shtapik", "Штапик", 4, null],
    ]],
    ["yelementy-lestnic-iz-massiva-dereva", "Элементы лестниц из массива дерева", 178, [
      ["balyasiny", "Балясины", 11, null],
      ["ploshhadki", "Площадки", 31, null],
      ["poruchni", "Поручни", 6, null],
      ["stolby", "Столбы", 9, null],
      ["stupeni", "Ступени", 38, null],
      ["shhity-mebelnye", "Щиты мебельные", 83, null],
    ]],
  ]],

  ["sukhie-smesi", "Сухие смеси", null, [
    ["gips-izvestpesokotsev", "Гипс, известь,песок,отсев", 9, null],
    ["zatirki", "Затирки", 114, null],
    ["kleevye-smesi", "Клеевые смеси", 59, null],
    ["remontnye-i-gidroizolchyacionnye-sost", "Ремонтные и гидроизоляционные составы", 45, null],
    ["smesi-dlya-pola", "Смеси для пола", 20, null],
    ["sukhie-smesi-knauf", "Сухие смеси Кнауф", 16, null],
    ["cement", "Цемент", 12, null],
    ["shpatlevka", "Шпатлевка", 16, null],
    ["shtukaturka", "Штукатурка", 38, null],
  ]],

  ["tovary-dlya-doma-sada-i-ogoroda", "Товары для дома, сада и огорода", null, [
    ["oborudovanie-dlya-moyki-mashin", "Оборудование для мойки машин", 121, [
      ["aksessuary-dlya-moek", "Аксессуары для моек", 48, null],
      ["moyki-vysokogo-davleniya", "Мойки высокого давления", 31, null],
      ["pylesosy", "Пылесосы", 16, null],
      ["khimiya-dlya-moyki-mashin", "Химия для мойки машин", 25, null],
    ]],
    ["sadovyy-inventar", "Садовый инвентарь", 1109, [
      ["benzopily-i-yelektropily-cepnye", "Бензопилы и электропилы цепные", 123, [
        ["benzopily", "Бензопилы", 30, null],
        ["masla", "Масла", 34, null],
        ["napilniki-2", "Напильники для бензопилы", 4, null],
        ["pily-cepnye-akkumulyatornye", "Пилы цепные аккумуляторные", 5, null],
        ["pily-cepnye-yelektricheskie", "Пилы цепные электрические", 9, null],
        ["cepi", "Цепи", 33, null],
        ["shiny", "Шины", 8, null],
      ]],
      ["vedra-kanistry-vazony-kashpo", "Ведра, канистры, вазоны, кашпо", 60, [
        ["vedra", "Ведра", 19, null],
        ["kanistry", "Канистры", 14, null],
        ["kashpovazony", "Кашпо, вазоны", 3, null],
        ["tazy", "Тазы", 13, null],
        ["flyagibaki", "Фляги, баки", 11, null],
      ]],
      ["veniki-metlashhyotkisovki", "Веники, метла, щётки, совки", 62, [
        ["veniki", "Веники", 12, null],
        ["komplekt-d-uborki", "Комплект д/уборки", 5, null],
        ["sovki", "Совки", 6, null],
        ["shhyotki", "Щётки", 36, null],
      ]],
      ["gazonokosilki-i-trimmery", "Газонокосилки и триммеры", 190, [
        ["gazonokosilki-benzinovye", "Газонокосилки бензиновые", 11, null],
        ["gazonokosilki-yelektricheskie", "Газонокосилки электрические", 10, null],
        ["golovki-s-leskoy", "Головки с леской", 16, null],
        ["komplektuyushhie-dlya-trimmera", "Комплектующие для триммера", 3, null],
        ["leski-dlya-trimmera", "Лески для триммера", 94, null],
        ["remni-dlya-trimmera", "Ремни для триммера", 12, null],
        ["trimmery-benzinovye", "Триммеры бензиновые", 33, null],
        ["trimmery-yelektricheskie", "Триммеры электрические", 11, null],
      ]],
      ["grunty-udobreniya", "Грунты, удобрения", 14, null],
      ["kosy-kustorezyserpysekatory", "Косы, кусторезы, серпы, секаторы", 49, [
        ["kosy", "Косы", 3, null],
        ["kustorezysuchkorezy", "Кусторезы, сучкорезы", 14, null],
        ["sekatory", "Секаторы", 27, null],
        ["serpy", "Серпы", 5, null],
      ]],
      ["lopaty-cherenki-vily-tyapki-motygi", "Лопаты, черенки, вилы, тяпки, мотыги", 127, [
        ["vily", "Вилы", 10, null],
        ["grabli", "Грабли", 31, null],
        ["lopaty", "Лопаты", 53, null],
        ["motygi", "Мотыги", 4, null],
        ["tyapki", "Тяпки", 19, null],
        ["cherenki", "Черенки", 9, null],
      ]],
      ["lyuki-polimernye-i-chugunnye", "Люки полимерные и чугунные", 39, null],
      ["meshki-i-pakety-dlya-musora-pakety-fasov", "Мешки и пакеты для мусора, пакеты фасовочные", 40, null],
      ["motobloki-zernodrobilki-osnastka-k-m", "Мотоблоки, зернодробилки, оснастка к мотоблокам", 65, [
        ["zernodrobilki", "Зернодробилки", 3, null],
        ["motobloki", "Мотоблоки", 25, null],
        ["osnastka-k-motoblokam", "Оснастка к мотоблокам", 37, null],
      ]],
      ["nozhy-nozhnicy", "Ножи, ножницы", 4, null],
      ["opryskivateli-raspyliteli-leyki", "Опрыскиватели, распылители, лейки", 33, [
        ["komplektuyushhie-k-opryskivatelyam", "Комплектующие к опрыскивателям", 0, null],
        ["leyki-dlya-letnego-dusha", "Лейки для летнего душа", 2, null],
        ["leyki-sadovye", "Лейки садовые", 8, null],
        ["opryskivateli-akkumulyatornye", "Опрыскиватели аккумуляторные", 7, null],
        ["opryskivateli-benzinovye", "Опрыскиватели бензиновые", 1, null],
        ["opryskivateli-ruchnye", "Опрыскиватели ручные", 10, null],
        ["raspyliteli", "Распылители", 5, null],
      ]],
      ["prochie-tovary", "Прочие товары", 55, null],
      ["razbryzgivatelipistolety-dlya-poliv", "Разбрызгиватели, пистолеты для полива, наборы", 24, [
        ["nabory-dlya-poliva", "Наборы для полива", 6, null],
        ["pistolety-dlya-poliva", "Пистолеты для полива", 5, null],
        ["razbryzgivateli", "Разбрызгиватели", 13, null],
      ]],
      ["urny", "Урны", 19, null],
      ["shlangikutushki-d-shlanga-soediniteli", "Шланги, катушки для шланга, соединители", 157, [
        ["katushki-dlya-shlanga", "Катушки для шланга", 2, null],
        ["soediniteli", "Соединители", 86, null],
        ["shlangi-2", "Шланги", 67, null],
      ]],
    ]],
    ["tovary-dlya-bezopastnosti", "Товары для безопастности", 121, [
      ["seyfy", "Сейфы", 120, null],
    ]],
    ["tovary-dlya-doma", "Товары для дома", 46, null],
    ["tovary-dlja-otdyha", "Товары для отдыха", 71, [
      ["gazovye-plity-gorelki", "Газовые плиты, горелки", 31, null],
      ["mangaly-shampury-drova", "Мангалы, шампуры, дрова", 10, null],
      ["plenka-pye-rukavnaya", "Полиэтиленовая пленка рукавная", 10, null],
      ["skameyki", "Скамейки", 4, null],
      ["tenty", "Тенты", 16, null],
    ]],
  ]],

  ["utepliteli-i-shumoizoljacija", "Утеплители и шумоизоляция", null, [
    ["bazaltovyj-uteplitel", "Базальтовый утеплитель", 31, null],
    ["mineralnovatnyj-uteplitel", "Минеральноватный утеплитель", 20, null],
    ["penopolistirol", "Пенополистирол", 44, null],
    ["porolon", "Поролон", 11, null],
    ["teploizoljacija", "Теплоизоляция", 9, null],
    ["shumoizoljacija", "Шумоизоляция", 13, null],
  ]],

  ["yelektrotovary", "Электротовары", null, [
    ["izolyacionnye-i-montazhnye-materialy", "Изоляционные и монтажные материалы", 181, [
      ["izolenta", "Изолента", 55, null],
      ["nakonechniki-mednye-i-alyuminievye", "Наконечники медные и алюминиевые", 58, null],
      ["skoby-dlya-kabelya", "Скобы для кабеля", 15, null],
      ["khomuty-dlya-kabelya", "Хомуты кабельные", 53, null],
    ]],
    ["kabelprovod", "Кабель,провод", 387, [
      ["kabeli-i-provoda-ustanovochnye", "Кабели и провода установочные", 240, null],
      ["kabel-tvrgutp", "Кабель TV,RG,UTP", 19, null],
      ["kabel-kg", "Кабель КГ", 18, null],
      ["kabel-kanalytrubki-pvkh", "Кабель-каналы,трубки ПВХ", 98, null],
      ["provod-sip", "Провод СИП", 7, null],
    ]],
    ["lampy-i-fonariki", "Лампы и фонарики", 257, [
      ["lampy-gazorazrjadnye", "Лампы газоразрядные", 3, null],
      ["lampy-zerkalnye", "Лампы зеркальные", 2, null],
      ["lampy-lyuminiscentnye", "Лампы люминисцентные", 2, null],
      ["lampy-nakalivaniya", "Лампы накаливания", 17, null],
      ["lampy-svetodiodnye", "Лампы светодиодные", 192, null],
      ["fonariki", "Фонарики", 41, null],
    ]],
    ["lenty-cvetodiodnye-i-komplektuyoshchie", "Ленты светодиодные и комплектующие", 72, null],
    ["svetilniki", "Светильники", 753, [
      ["prozhektory-svetodiodnye", "Прожекторы светодиодные", 21, null],
      ["svetilniki-lyuminiscentnye", "Светильники люминисцентные", 22, null],
      ["svetilniki-na-solnechnykh-batareyakh", "Светильники на солнечных батареях", 23, null],
      ["svetilniki-nastenno-potolochnye", "Светильники настенно-потолочные", 114, null],
      ["svetilniki-nastolnye", "Светильники настольные", 40, null],
      ["svetilniki-prochie", "Светильники прочие", 34, null],
      ["svetilniki-rku", "Светильники РКУ", 28, null],
      ["svetilniki-sadovo-parkovye", "Светильники садово-парковые", 52, null],
      ["svetilniki-svetodiodnye", "Светильники светодиодные", 236, null],
      ["svetilniki-tochechnye", "Светильники точечные", 142, null],
      ["svetilniki-trekovye", "Светильники трековые", 39, null],
    ]],
    ["yelektricheskiy-teplyy-pol", "Электрический теплый пол", 26, [
      ["termomaty", "Термоматы", 20, null],
      ["termoregulyatory", "Терморегуляторы", 6, null],
    ]],
    ["yelektroustanovochnye-tovary", "Электроустановочные товары", 1391, [
      ["avtomaticheskie-vyklyuchateli-din-reyk", "Автоматические выключатели, дин-рейки, шины", 204, null],
      ["boksy-shhity-yashhiki", "Боксы, щиты, ящики", 79, null],
      ["datchiki-dvizheniya", "Датчики движения", 10, null],
      ["zazhimy-vintovye-klemma", "Зажимы винтовые, клемма", 124, null],
      ["zvonki-dvernye", "Звонки дверные", 16, null],
      ["kontaktory-puskateli-vstavki-starte", "Контакторы, пускатели, вставки, стартеры", 56, null],
      ["korobki-montazhnye-patrony", "Коробки монтажные, патроны", 49, [
        ["korobki-montazhnye", "Коробки монтажные", 41, null],
        ["patrony", "Патроны", 8, null],
      ]],
      ["rozetki-vyklyuchateli-ramki-vilki", "Розетки, выключатели, рамки, вилки", 537, [
        ["vilki", "Вилки", 4, null],
        ["vyklyuchateli", "Выключатели", 182, null],
        ["knopki", "Кнопки", 19, null],
        ["ramki", "Рамки", 102, null],
        ["rozetki-perenosnye", "Розетки", 229, null],
      ]],
      ["schetchiki-yelektricheskie", "Счетчики электрические", 28, null],
      ["teplovye-pushki-konvektory-maslyanye-r", "Тепловые пушки, конвекторы, масляные радиаторы", 174, null],
      ["udliniteli-kolodki", "Удлинители, колодки", 91, null],
      ["yelementy-pitaniya", "Элементы питания", 23, null],
    ]],
  ]],
];

function attachLegacyContent(tree: CatalogNode[]): void {
  for (const category of tree) {
    const legacyCategory = catalogCategories.find((c) => c.slug === category.slug);
    if (!legacyCategory) continue;
    category.image = legacyCategory.image;
    for (const sub of category.children) {
      const legacySub = legacyCategory.subcategories.find((s) => s.slug === sub.slug);
      if (!legacySub) continue;
      sub.image = legacySub.image;
      sub.description = legacySub.description;
    }
  }
}

export const catalogTree: CatalogNode[] = build(RAW_TREE);

// Уровни 1-2 уже имеют настоящие изображения и авторские описания, снятые с эталона
// раньше (data/catalog-data.ts). Подмешиваем их сюда, а не дублируем — это остаётся
// единственным источником картинок/описаний для верхних уровней.
attachLegacyContent(catalogTree);


// ---------------------------------------------------------------------------
// Навигация по дереву — единая точка входа для всех маршрутов /catalog/**
// ---------------------------------------------------------------------------

export interface ResolvedCatalogPath {
  node: CatalogNode;
  /** Цепочка предков от корня (не включая сам узел) — для хлебных крошек. */
  ancestors: CatalogNode[];
}

/** Находит узел дерева по массиву slug'ов (сегменты пути после /catalog/). */
export function resolveCatalogPath(segments: string[]): ResolvedCatalogPath | undefined {
  if (segments.length === 0) return undefined;

  let level = catalogTree;
  const ancestors: CatalogNode[] = [];
  let current: CatalogNode | undefined;

  for (const segment of segments) {
    current = level.find((n) => n.slug === segment);
    if (!current) return undefined;
    if (segments[segments.length - 1] !== segment) ancestors.push(current);
    level = current.children;
  }

  return current ? { node: current, ancestors } : undefined;
}

/** Собирает href для узла по цепочке предков + сам узел. */
export function buildCatalogHref(ancestors: CatalogNode[], node: CatalogNode): string {
  return `/catalog/${[...ancestors, node].map((n) => n.slug).join("/")}`;
}

function collectPaths(nodes: CatalogNode[], prefix: string[], out: string[][]): void {
  for (const node of nodes) {
    const path = [...prefix, node.slug];
    out.push(path);
    if (node.children.length > 0) collectPaths(node.children, path, out);
  }
}

/** Все пути дерева (branch и terminal) как массивы slug'ов — для generateStaticParams. */
export function getAllCatalogPaths(): string[][] {
  const out: string[][] = [];
  collectPaths(catalogTree, [], out);
  return out;
}

function collectTerminalPaths(nodes: CatalogNode[], prefix: string[], out: string[][]): void {
  for (const node of nodes) {
    const path = [...prefix, node.slug];
    if (node.type === "terminal") out.push(path);
    else collectTerminalPaths(node.children, path, out);
  }
}

/** Пути только терминальных узлов — там, где на эталоне уже сетка товаров. */
export function getAllTerminalCatalogPaths(): string[][] {
  const out: string[][] = [];
  collectTerminalPaths(catalogTree, [], out);
  return out;
}

function countNodes(nodes: CatalogNode[]): { total: number; branches: number; terminals: number; maxDepth: number } {
  let total = 0;
  let branches = 0;
  let terminals = 0;
  let maxDepth = 0;

  function walk(list: CatalogNode[], depth: number) {
    for (const node of list) {
      total += 1;
      maxDepth = Math.max(maxDepth, depth);
      if (node.type === "branch") {
        branches += 1;
        walk(node.children, depth + 1);
      } else {
        terminals += 1;
      }
    }
  }

  walk(nodes, 1);
  return { total, branches, terminals, maxDepth };
}

/** Статистика дерева — используется в дев-скрипте сверки с discovery-отчётом. */
export const catalogTreeStats = countNodes(catalogTree);
