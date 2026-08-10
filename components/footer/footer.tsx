"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Send, ChevronDown } from "lucide-react";
import Logo1 from "@/src/svg/logo1.svg";
import ReadyCodeLogo from "@/src/svg/readycode_logo_3 1.svg";
import MastercardIcon from "@/src/svg/Group 46.svg";
import HalvaIcon from "@/src/svg/Group 47.svg";
import MirLogo from "@/src/svg/Group 48.svg";
import VisaLogo from "@/src/svg/Group 49.svg";
import HalvaText from "@/src/svg/Vector.svg";
import TinkoffLogo from "@/src/svg/Vector1.svg";

const infoLinks = [
  ["О компании", "/about"],
  ["Оплата", "/payment"],
  ["Доставка", "/delivery"],
  ["Возврат", "/return"],
  ["Отзывы", "/reviews"],
];

const infoLinksSecond = [
  ["Вопрос-ответ", "/faq"],
  ["Новости", "/news"],
  ["Контакты", "/contacts"],
  ["Вход \\ Регистрация", "/my-account"],
  ["Все акции", "/promotions"],
];

// Каталог в 3 колонки (desktop)
const catalogColumnsDesktop = [
  [
    ["Общестроительные материалы", "/catalog/materials"],
    ["Все для сауны и бани", "/catalog/sauna"],
    ["Инструмент", "/catalog/tools"],
    ["Отделочные материалы", "/catalog/finishing"],
    ["Товары для дома, сада и огорода", "/catalog/home-garden"],
  ],
  [
    ["Электротовары", "/catalog/electrical"],
    ["Сантехника", "/catalog/plumbing"],
    ["Столярные изделия", "/catalog/carpentry"],
    ["Спецодежда и средства индивидуальной пожарной защиты", "/catalog/safety"],
  ],
  [
    ["Водо-газоснабжение, отопление, вентиляция", "/catalog/utilities"],
    ["Метизные, такелажные и скобяные изделия", "/catalog/hardware"],
  ],
];

// Каталог в 2 колонки (tablet и аккордеон на мобильном)
const catalogColumnsTwo = [
  [
    ["Общестроительные материалы", "/catalog/materials"],
    ["Все для сауны и бани", "/catalog/sauna"],
    ["Инструмент", "/catalog/tools"],
    ["Отделочные материалы", "/catalog/finishing"],
    ["Товары для дома, сада и огорода", "/catalog/home-garden"],
  ],
  [
    ["Электротовары", "/catalog/electrical"],
    ["Сантехника", "/catalog/plumbing"],
    ["Столярные изделия", "/catalog/carpentry"],
    ["Спецодежда и средства индивидуальной пожарной защиты", "/catalog/safety"],
    ["Водо-газоснабжение, отопление, вентиляция", "/catalog/utilities"],
    ["Метизные, такелажные и скобяные изделия", "/catalog/hardware"],
  ],
];

function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image src={Logo1} alt="СТРОЙОПТТОРГ" className="h-9 w-auto" priority />
    </Link>
  );
}

function PaymentRow() {
  return (
    <div className="flex flex-wrap items-center gap-4 opacity-40">
      <Image src={VisaLogo} alt="Visa" className="h-4 w-auto" />
      <Image src={MastercardIcon} alt="Mastercard" className="h-5 w-auto" />
      <Image src={MirLogo} alt="МИР" className="h-4 w-auto" />
      <span className="flex items-center gap-1">
        <Image src={HalvaIcon} alt="" className="h-4 w-4" />
        <Image src={HalvaText} alt="Халва" className="h-3 w-auto" />
      </span>
      <Image src={TinkoffLogo} alt="Тинькофф" className="h-3 w-auto" />
    </div>
  );
}

function SubscribeForm({ wide = false }) {
  return (
    <form
      className={`flex items-center overflow-hidden rounded border border-neutral-300 bg-white ${
        wide ? "w-full" : ""
      }`}
    >
      <input
        type="email"
        placeholder="Ваш email"
        className="w-full min-w-0 bg-transparent px-4 py-2.5 text-sm placeholder:text-neutral-400 focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Подписаться"
        className="flex shrink-0 items-center justify-center bg-blue-600 px-4 py-2.5 text-white transition-colors hover:bg-blue-700"
      >
        <Send size={16} />
      </button>
    </form>
  );
}

function ReadyCodeBadge() {
  return (
    <Image
      src={ReadyCodeLogo}
      alt="Разработка сайта READYCODE.RU"
      className="h-[22px] w-auto"
    />
  );
}

function AccordionSection({
  title,
  children,
  defaultOpen = false,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-neutral-200">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 text-left text-base font-semibold text-neutral-900"
      >
        {title}
        <ChevronDown
          size={18}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <div className="pb-4">{children}</div>}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 font-sans text-sm md:bg-white">
      {/* ================= MOBILE (< md) ================= */}
      <div className="block px-4 py-6 md:hidden">
        <div className="flex items-start justify-between gap-3">
          <Logo />
          <div className="text-right text-xs text-neutral-600">
            <div>Email:</div>
            <a href="mailto:info@stroiopttorg.ru" className="text-blue-600 hover:underline">
              info@stroiopttorg.ru
            </a>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="text-xs text-neutral-600">
            <a href="tel:88004440065" className="block text-base font-semibold text-neutral-900">
              8 800 444 00 65
            </a>
            <div>Ежедневно, с 8:00 до 18:00</div>
          </div>
          <button className="whitespace-nowrap rounded border border-red-500 px-3 py-2 text-xs font-medium text-red-500 hover:bg-red-500 hover:text-white">
            ЗАКАЗАТЬ ЗВОНОК
          </button>
        </div>

        <div className="mt-4 border-t border-neutral-200">
          <AccordionSection title="Информация" defaultOpen>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {[...infoLinks, ...infoLinksSecond].map(([label, href]) => (
                <Link key={href} href={href} className="text-neutral-600 hover:text-blue-600">
                  {label}
                </Link>
              ))}
            </div>
          </AccordionSection>

          <AccordionSection title="Каталог">
            <div className="grid grid-cols-1 gap-y-2">
              {catalogColumnsTwo.flat().map(([label, href]) => (
                <Link key={href} href={href} className="text-neutral-600 hover:text-blue-600">
                  {label}
                </Link>
              ))}
            </div>
          </AccordionSection>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <PaymentRow />
        </div>

        <p className="mt-6 text-sm font-medium text-neutral-900">
          Подпишитесь на рассылку и будьте в курсе!
        </p>
        <div className="mt-3">
          <SubscribeForm wide />
        </div>

        <div className="mt-6 border-t border-neutral-200 pt-4 text-xs text-neutral-500">
          <p>
            © 2003-2023 Интернет-магазин ООО «Стройопттрог» р/с 40702810360000102415 в
            Ставропольское отделение №5230 ПАО Сбербанк, БИК 040702615
          </p>
          <Link href="/privacy-policy" className="mt-2 inline-block hover:text-blue-600 hover:underline">
            Политика конфиденциальности
          </Link>
          <div className="mt-4">
            <ReadyCodeBadge />
          </div>
        </div>
      </div>

      {/* ================= TABLET (md - lg) ================= */}
      <div className="hidden md:block lg:hidden">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200 px-4 py-6">
          <Logo />
          <div className="text-xs text-neutral-600">
            <div>Email:</div>
            <a href="mailto:info@stroiopttorg.ru" className="text-blue-600 hover:underline">
              info@stroiopttorg.ru
            </a>
          </div>
          <div className="text-xs text-neutral-600">
            <a href="tel:88004440065" className="block text-base font-semibold text-neutral-900">
              8 800 444 00 65
            </a>
            <div>Ежедневно, с 8:00 до 18:00</div>
          </div>
          <button className="whitespace-nowrap rounded border border-red-500 px-3 py-2 text-xs font-medium text-red-500 hover:bg-red-500 hover:text-white">
            ЗАКАЗАТЬ ЗВОНОК
          </button>
        </div>

        <div className="grid grid-cols-2 gap-8 px-4 py-8">
          <div>
            <h3 className="mb-3 text-sm font-semibold text-neutral-900">Информация</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {[...infoLinks, ...infoLinksSecond].map(([label, href]) => (
                <Link key={href} href={href} className="text-neutral-600 hover:text-blue-600">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-neutral-900">Каталог</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {catalogColumnsTwo.flat().map(([label, href]) => (
                <Link key={href} href={href} className="text-neutral-600 hover:text-blue-600">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 border-t border-neutral-200 px-4 py-6">
          <PaymentRow />
        </div>

        <div className="border-t border-neutral-200 px-4 py-6">
          <p className="mb-3 text-sm font-medium text-neutral-900">
            Подпишитесь на рассылку и будьте в курсе!
          </p>
          <div className="max-w-md">
            <SubscribeForm wide />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 px-4 py-4 text-xs text-neutral-500">
          <div>
            <p>© 2003-2023 Интернет-магазин ООО «Стройопттрог» р/с 40702810360000102415</p>
            <p>в Ставропольском отделении №5230 ПАО Сбербанк, БИК 040702615</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-blue-600 hover:underline">
              Политика конфиденциальности
            </Link>
            <ReadyCodeBadge />
          </div>
        </div>
      </div>

      {/* ================= DESKTOP (lg+) ================= */}
      <div className="hidden lg:block">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 border-b border-neutral-200 px-4 py-6">
          <Logo />

          <div className="text-xs text-neutral-600">ООО «Стройопттрог»</div>

          <div className="text-xs text-neutral-600">
            <div>ИНН: 0901051787</div>
            <div>КПП 090101001</div>
          </div>

          <div className="text-xs text-neutral-600">
            <div>Email:</div>
            <a href="mailto:info@stroiopttorg.ru" className="text-blue-600 hover:underline">
              info@stroiopttorg.ru
            </a>
          </div>

          <div className="text-xs text-neutral-600">
            <a href="tel:88004440065" className="text-base font-semibold text-neutral-900">
              8 800 444 00 65
            </a>
            <div>Ежедневно, с 8:00 до 18:00</div>
          </div>

          <button className="whitespace-nowrap rounded border border-red-500 px-3 py-2 text-xs font-medium text-red-500 transition-colors hover:bg-red-500 hover:text-white">
            ЗАКАЗАТЬ ЗВОНОК
          </button>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-6 gap-8 px-4 py-8">
          <div>
            <h3 className="mb-3 text-sm font-semibold text-neutral-900">Информация</h3>
            <ul className="space-y-2">
              {infoLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-neutral-600 hover:text-blue-600">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-transparent select-none">.</h3>
            <ul className="space-y-2">
              {infoLinksSecond.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-neutral-600 hover:text-blue-600">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-neutral-900">Каталог</h3>
            <ul className="space-y-2">
              {catalogColumnsDesktop[0].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-neutral-600 hover:text-blue-600">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-transparent select-none">.</h3>
            <ul className="space-y-2">
              {catalogColumnsDesktop[1].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-neutral-600 hover:text-blue-600">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2">
            <h3 className="mb-3 text-sm font-semibold text-transparent select-none">.</h3>
            <ul className="space-y-2">
              {catalogColumnsDesktop[2].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-neutral-600 hover:text-blue-600">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 border-t border-neutral-200 px-4 py-6">
          <div className="flex items-center gap-4">
            <span className="text-xs leading-tight text-neutral-500">
              Мы принимаем
              <br />к оплате
            </span>
            <PaymentRow />
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm font-medium leading-tight text-neutral-900">
              Подпишитесь на рассылку
              <br />и будьте в курсе!
            </span>
            <SubscribeForm />
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-neutral-200 px-4 py-4 text-xs text-neutral-500">
          <div>
            <p>© 2003-2023 Интернет-магазин ООО «Стройопттрог» р/с 40702810360000102415</p>
            <p>в Ставропольском отделении №5230 ПАО Сбербанк, БИК 040702615</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-blue-600 hover:underline">
              Политика конфиденциальности
            </Link>
            <ReadyCodeBadge />
          </div>
        </div>
      </div>
    </footer>
  );
}