/**
 * Статичный контент главной страницы: баннеры, промо-плитки, популярные категории,
 * бренды и блок «О магазине». Рисунки лежат в public/images/* и повторяют
 * размеры макета stroiopttorg.ru (баннер 1620×506, промо 390×176 и т.д.).
 */

export interface HeroSlide {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  /** 1620×506 */
  image: string;
  /** Какую часть фото держать в кадре, когда баннер обрезается на узких экранах. */
  focus: "left" | "center" | "right";
}

export const heroSlides: HeroSlide[] = [
  {
    title: "Электроинструмент для любых нужд",
    subtitle: "Профессиональные и бытовые инструменты ведущих брендов по доступным ценам",
    ctaLabel: "Смотреть каталог",
    ctaHref: "/catalog/elektroinstrument",
    image: "/images/banners/homeR.png",
    focus: "right",
  },
  {
    title: "Всё для сантехнических работ",
    subtitle: "Смесители, трубы и фитинги — подберём под ваш объект",
    ctaLabel: "Перейти в раздел",
    ctaHref: "/catalog/santehnika",
    image: "/images/banners/santexnika.jpg",
    focus: "center",
  },
  {
    title: "Стройматериалы со склада",
    subtitle: "Сухие смеси, крепёж и лакокрасочные материалы для ремонта и стройки",
    ctaLabel: "Смотреть подборку",
    ctaHref: "/catalog/stroymaterialy",
    image: "/images/banners/sss.jpg",
    focus: "right",
  },
];

export interface PromoTile {
  title: string;
  href: string;
  /** 390×176 */
  image: string;
}

export const promoTiles: PromoTile[] = [
  { title: "Крепёж и метизы", href: "/catalog/stroymaterialy/krepezh-i-metizy", image: "/images/promo/home.png" },
  { title: "Напольные покрытия", href: "/catalog/stroymaterialy", image: "/images/promo/home2.png" },
  { title: "Трубы и фитинги", href: "/catalog/santehnika/truby-i-fitingi", image: "/images/promo/home3.png" },
  {
    title: "Лакокрасочные материалы",
    href: "/catalog/stroymaterialy/lakokrasochnye-materialy",
    image: "/images/promo/home4.png",
  },
];

export interface PopularCategory {
  title: string;
  href: string;
  image: string;
  width: number;
  height: number;
}

/** Как на эталоне — подборка разделов с картинкой товара, а не полный список категорий. */
export const popularCategories: PopularCategory[] = [
  { title: "Электроинструмент", href: "/catalog/elektroinstrument", image: "/images/categories/drel.png", width: 76, height: 76 },
  { title: "Выключатели и розетки", href: "/catalog/elektrika", image: "/images/categories/chiroqY.png", width: 107, height: 90 },
  { title: "Кирпич и блоки", href: "/catalog/stroymaterialy", image: "/images/categories/gish.png", width: 94, height: 81 },
  { title: "Обои", href: "/catalog/stroymaterialy", image: "/images/categories/mato.png", width: 119, height: 94 },
  { title: "Печи для бани", href: "/catalog", image: "/images/categories/pechka.png", width: 76, height: 95 },
  { title: "Пиломатериалы", href: "/catalog/stroymaterialy", image: "/images/categories/reyka.png", width: 119, height: 90 },
  { title: "Ванны", href: "/catalog/santehnika", image: "/images/categories/vanna.png", width: 136, height: 90 },
];

export interface BrandLogo {
  name: string;
  image: string;
  width: number;
  height: number;
}

export const brandLogos: BrandLogo[] = [
  { name: "Bauproffe", image: "/images/brands/bauproffe.png", width: 134, height: 42 },
  { name: "Bosch", image: "/images/brands/bosch.png", width: 124, height: 38 },
  { name: "Ceresit", image: "/images/brands/ceresit.png", width: 162, height: 30 },
  { name: "Electrolux", image: "/images/brands/electolux.png", width: 156, height: 30 },
  { name: "Керамин", image: "/images/brands/keramin.png", width: 152, height: 32 },
  { name: "Kinplast", image: "/images/brands/kinplast.png", width: 154, height: 36 },
  { name: "Oasis", image: "/images/brands/oasis.png", width: 100, height: 52 },
];

export const aboutStats = [
  { value: "17 805,3 м²", label: "торговых и складских помещений" },
  { value: "50 000+", label: "наименований товара" },
  { value: "2 500+", label: "постоянных клиентов" },
  { value: "440", label: "опытных сотрудников" },
];
