import { DeliveryMethod } from "@/types/order";

export interface CheckoutRegion {
  id: string;
  name: string;
  cities: string[];
}

export const checkoutRegions: CheckoutRegion[] = [
  { id: "tashkent-city", name: "город Ташкент", cities: ["Ташкент"] },
  {
    id: "tashkent",
    name: "Ташкентская область",
    cities: ["Нурафшон", "Чирчик", "Алмалык", "Ангрен", "Бекабад", "Ахангаран", "Янгиюль", "Газалкент"],
  },
  {
    id: "samarkand",
    name: "Самаркандская область",
    cities: ["Самарканд", "Каттакурган", "Ургут", "Булунгур", "Джамбай"],
  },
  {
    id: "bukhara",
    name: "Бухарская область",
    cities: ["Бухара", "Каган", "Гиждуван", "Алат", "Вабкент"],
  },
  {
    id: "fergana",
    name: "Ферганская область",
    cities: ["Фергана", "Маргилан", "Коканд", "Кува", "Ташлак"],
  },
  {
    id: "andijan",
    name: "Андижанская область",
    cities: ["Андижан", "Асака", "Шахрихан", "Ханабад", "Карасу"],
  },
  {
    id: "namangan",
    name: "Наманганская область",
    cities: ["Наманган", "Чуст", "Касансай", "Пап", "Уйчи"],
  },
  {
    id: "kashkadarya",
    name: "Кашкадарьинская область",
    cities: ["Карши", "Шахрисабз", "Гузар", "Китаб", "Касан"],
  },
  {
    id: "surkhandarya",
    name: "Сурхандарьинская область",
    cities: ["Термез", "Денау", "Шерабад", "Байсун", "Шурчи"],
  },
  {
    id: "jizzakh",
    name: "Джизакская область",
    cities: ["Джизак", "Гагарин", "Дустлик", "Пахтакор"],
  },
  {
    id: "syrdarya",
    name: "Сырдарьинская область",
    cities: ["Гулистан", "Ширин", "Янгиер", "Сардоба"],
  },
  {
    id: "navoi",
    name: "Навоийская область",
    cities: ["Навои", "Зарафшан", "Учкудук", "Нурата", "Конимех"],
  },
  {
    id: "khorezm",
    name: "Хорезмская область",
    cities: ["Ургенч", "Хива", "Питняк", "Шават", "Хазарасп"],
  },
  {
    id: "karakalpakstan",
    name: "Республика Каракалпакстан",
    cities: ["Нукус", "Ходжейли", "Кунград", "Беруни", "Тахиаташ", "Чимбай"],
  },
];

export const deliveryCosts: Record<DeliveryMethod, number> = {
  pickup: 0,
  "store-delivery": 500,
  sdek: 1000,
};

export const pickupAddress = "г. Черкесск, ул. Октябрьская, д.301";

export const mockPvzAddresses: string[] = [
  "г. Москва, ул. Складочная, 3, ПВЗ СДЭК №1",
  "г. Краснодар, ул. Красных Партизан, 4/1, ПВЗ СДЭК №7",
  "г. Ростов-на-Дону, пр-т Стачки, 47, ПВЗ СДЭК №2",
];

export const promoCodes: Record<string, number> = {
  STROY10: 10,
  WANDER5: 5,
};
