import Link from "next/link";
import Image from "next/image";
import { Search, Gift, User, BarChart3, Heart, ShoppingCart, Menu } from "lucide-react";
import Logo1 from "@/src/svg/logo1.svg";

// Ссылки в верхней тонкой строке
const topLinks = [
  { label: "О компании", href: "/about" },
  { label: "Оплата", href: "/payment" },
  { label: "Доставка", href: "/delivery" },
  { label: "Возврат", href: "/return" },
  { label: "Отзывы", href: "/reviews" },
  { label: "Блог", href: "/blog" },
  { label: "Вопрос-ответ", href: "/faq" },
  { label: "Новости", href: "/news" },
  { label: "Контакты", href: "/contacts" },
];

function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center">
      <Image
        src={Logo1}
        alt="СТРОЙОПТТОРГ"
        width={166}
        height={34}
        style={{ width: "166.27px", height: "34.02px" }}
        className="object-contain"
        priority
      />
    </Link>
  );
}

function CatalogButton() {
  return (
    <button className="flex shrink-0 items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-700">
      <Menu size={18} />
      КАТАЛОГ
    </button>
  );
}

function SearchBar({ placeholder }: { placeholder: string }) {
  return (
    <div className="flex flex-1 items-stretch overflow-hidden rounded-lg border-2 border-blue-600 bg-white">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent px-4 py-2 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none"
      />
      <button
        aria-label="Искать"
        className="flex items-center justify-center bg-blue-600 px-5 text-white transition-colors hover:bg-blue-700 shrink-0"
      >
        <Search size={18} />
      </button>
    </div>
  );
}

function OrderCallButton() {
  return (
    <button className="whitespace-nowrap rounded border border-transparent bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600 transition-colors hover:bg-blue-100">
      ЗАКАЗАТЬ ЗВОНОК
    </button>
  );
}

export default function Header() {
  return (
    <header className="w-full font-sans">
      {/* ================= MOBILE (< md) ================= */}
      <div className="block border-b border-neutral-200 bg-white md:hidden">
        <div className="flex items-center justify-between gap-2 bg-neutral-900 px-3 py-2.5 text-white">
          <button aria-label="Меню" className="shrink-0">
            <Menu size={22} />
          </button>
          <a href="tel:88004440065" className="whitespace-nowrap text-sm font-semibold">
            8 800 444 00 65
          </a>
          <OrderCallButton />
        </div>

        <div className="flex items-center justify-between gap-2 px-3 py-3">
          <Logo />
          <div className="flex items-center gap-3 text-neutral-700">
            <button aria-label="Войти">
              <User size={20} />
            </button>
            <button aria-label="Сравнение">
              <BarChart3 size={20} />
            </button>
            <button aria-label="Избранное" className="relative">
              <Heart size={20} />
              <span className="absolute -right-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                3
              </span>
            </button>
            <button aria-label="Корзина" className="relative">
              <ShoppingCart size={20} />
              <span className="absolute -right-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                3
              </span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 pb-3">
          <CatalogButton />
          <SearchBar placeholder="Поиск..." />
        </div>
      </div>

      {/* ================= DESKTOP (md+) ================= */}
      <div className="hidden md:block">
        {/* Верхняя светлая строка с контактами и ссылками */}
        <div className="border-b border-neutral-200 bg-white text-xs text-neutral-600">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
            <nav className="flex flex-wrap items-center gap-6">
              {topLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap text-neutral-500 transition-colors hover:text-neutral-900"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-5">
              <span className="whitespace-nowrap text-neutral-500">
                Ежедневно, с 8:00 до 18:00
              </span>
              <a href="tel:88004440065" className="whitespace-nowrap text-sm font-bold text-neutral-900">
                8 800 444 00 65
              </a>
              <OrderCallButton />
            </div>
          </div>
        </div>

        {/* Основная плашка с логотипом, каталогом, поиском и иконками */}
        <div className="border-b border-neutral-200 bg-white py-3.5">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4">
            <Logo />
            <CatalogButton />
            <SearchBar placeholder="Найти среди 50000 товаров. Например: Дрель Bosch" />

            <div className="flex shrink-0 items-center gap-6 text-xs font-medium text-neutral-700">
              <Link href="/stocks" className="flex flex-col items-center gap-1 hover:text-blue-600">
                <Gift size={22} />
                <span>Все акции</span>
              </Link>
              <button className="flex flex-col items-center gap-1 hover:text-blue-600">
                <User size={22} />
                <span>Войти</span>
              </button>
              <button className="flex flex-col items-center gap-1 hover:text-blue-600">
                <BarChart3 size={22} />
                <span>Сравнение</span>
              </button>
              <button className="relative flex flex-col items-center gap-1 hover:text-blue-600">
                <Heart size={22} />
                <span>Избранное</span>
                <span className="absolute -right-1.5 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                  3
                </span>
              </button>
              <button className="relative flex flex-col items-center gap-1 hover:text-blue-600">
                <ShoppingCart size={22} />
                <span>Корзина</span>
                <span className="absolute -right-1.5 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}