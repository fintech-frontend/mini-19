import Link from "next/link";
import Image from "next/image";
import { Search, Gift, User, BarChart3, Heart, ShoppingCart, Menu } from "lucide-react";
import Logo1 from "@/src/svg/logo1.svg";

// Ссылки в верхней тонкой строке (только desktop)
const topLinks = [
  { label: "О компании", href: "/about" },
  { label: "Оплата", href: "/payment" },
  { label: "Доставка", href: "/delivery" },
  { label: "Возврат", href: "/return" },
  { label: "Отзывы", href: "/reviews" },
  { label: "Вопрос-ответ", href: "/faq" },
  { label: "Новости", href: "/news" },
  { label: "Контакты", href: "/contacts" },
];

function Logo({ size = "md" }) {
  const heightClass = size === "sm" ? "h-8" : "h-10";
  return (
    <Link href="/" className="flex shrink-0 items-center">
      <Image src={Logo1} alt="СТРОЙОПТТОРГ" className={`${heightClass} w-auto`} priority />
    </Link>
  );
}

function CatalogButton() {
  return (
    <button className="flex shrink-0 items-center gap-2 rounded bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700">
      <Menu size={18} />
      КАТАЛОГ
    </button>
  );
}

function SearchBar({ placeholder }) {
  return (
    <div className="flex flex-1 items-center rounded border border-neutral-300 focus-within:border-blue-500">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent px-4 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none"
      />
      <button
        aria-label="Искать"
        className="flex h-full items-center rounded-r bg-blue-600 px-4 py-2.5 text-white transition-colors hover:bg-blue-700"
      >
        <Search size={18} />
      </button>
    </div>
  );
}

function OrderCallButton({ compact = false }) {
  return (
    <button
      className={`whitespace-nowrap rounded border border-red-500 font-medium text-red-500 transition-colors hover:bg-red-500 hover:text-white ${
        compact ? "px-3 py-2 text-xs" : "px-3 py-1.5 text-xs"
      }`}
    >
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
          <OrderCallButton compact />
        </div>

        <div className="flex items-center justify-between gap-2 px-3 py-3">
          <Logo size="sm" />
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
          <button className="flex shrink-0 items-center gap-1.5 rounded bg-blue-600 px-3 py-2.5 text-xs font-medium text-white transition-colors hover:bg-blue-700">
            <Menu size={16} />
            КАТАЛОГ
          </button>
          <SearchBar placeholder="Поиск..." />
        </div>
      </div>

      {/* ================= TABLET (md - lg) ================= */}
      <div className="hidden border-b border-neutral-200 bg-white md:block lg:hidden">
        <div className="flex items-center justify-between gap-4 border-b border-neutral-200 px-4 py-2.5 text-sm">
          <button className="flex items-center gap-2 font-medium text-neutral-800">
            <Menu size={20} />
            Меню
          </button>
          <div className="flex items-center gap-4 text-neutral-600">
            <span className="whitespace-nowrap">Ежедневно, с 8:00 до 18:00</span>
            <a href="tel:88004440065" className="whitespace-nowrap font-semibold text-neutral-900">
              8 800 444 00 65
            </a>
            <button className="whitespace-nowrap rounded border border-blue-600 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 transition-colors hover:bg-blue-100">
              ЗАКАЗАТЬ ЗВОНОК
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 px-4 py-4">
          <Logo />
          <div className="flex items-center gap-6 text-xs text-neutral-700">
            <button className="flex flex-col items-center gap-1 hover:text-blue-600">
              <Gift size={20} />
              Все акции
            </button>
            <button className="flex flex-col items-center gap-1 hover:text-blue-600">
              <User size={20} />
              Войти
            </button>
            <button className="flex flex-col items-center gap-1 hover:text-blue-600">
              <BarChart3 size={20} />
              Сравнение
            </button>
            <button className="relative flex flex-col items-center gap-1 hover:text-blue-600">
              <Heart size={20} />
              Избранное
              <span className="absolute -right-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                3
              </span>
            </button>
            <button className="relative flex flex-col items-center gap-1 hover:text-blue-600">
              <ShoppingCart size={20} />
              Корзина
              <span className="absolute -right-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                3
              </span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 px-4 pb-4">
          <CatalogButton />
          <SearchBar placeholder="Найти среди 50000 товаров. Например: Дрель Bosch" />
        </div>
      </div>

      {/* ================= DESKTOP (lg+) ================= */}
      <div className="hidden lg:block">
        <div className="bg-neutral-900 text-white text-xs">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5">
            <nav className="flex flex-wrap items-center gap-5">
              {topLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap text-neutral-200 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-4">
              <span className="whitespace-nowrap text-neutral-300">
                Ежедневно, с 8:00 до 18:00
              </span>
              <a href="tel:88004440065" className="whitespace-nowrap font-semibold text-white">
                8 800 444 00 65
              </a>
              <OrderCallButton />
            </div>
          </div>
        </div>

        <div className="border-b border-neutral-200 bg-white">
          <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-4">
            <Logo />
            <CatalogButton />
            <SearchBar placeholder="Найти среди 50000 товаров. Например: Дрель Bosch" />

            <div className="flex shrink-0 items-center gap-5 text-xs text-neutral-700">
              <button className="flex flex-col items-center gap-1 hover:text-blue-600">
                <Gift size={20} />
                Все акции
              </button>
              <button className="flex flex-col items-center gap-1 hover:text-blue-600">
                <User size={20} />
                Войти
              </button>
              <button className="flex flex-col items-center gap-1 hover:text-blue-600">
                <BarChart3 size={20} />
                Сравнение
              </button>
              <button className="relative flex flex-col items-center gap-1 hover:text-blue-600">
                <Heart size={20} />
                Избранное
                <span className="absolute -right-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                  9
                </span>
              </button>
              <button className="relative flex flex-col items-center gap-1 hover:text-blue-600">
                <ShoppingCart size={20} />
                Корзина
                <span className="absolute -right-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
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