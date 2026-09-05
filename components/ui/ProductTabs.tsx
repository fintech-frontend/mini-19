"use client";

import { useState } from "react";
import { ProductSpec } from "@/types/product";

type TabKey = "specs" | "about" | "delivery";

/**
 * Вкладки страницы товара. Намеренно НЕ принимает объект товара (Product/FanProduct/
 * CatalogListingProduct) — только те поля, что реально рисует, поэтому один и тот же
 * компонент обслуживает и /products/[id], и любую категорию каталога. Вкладка
 * скрывается, если для неё нет данных: у большинства товаров каталога ещё нет ни
 * specs, ни description (см. data/listings), и рисовать пустую вкладку нельзя.
 */
export default function ProductTabs({
  title,
  specs,
  description,
}: {
  title: string;
  specs?: ProductSpec[];
  description?: string;
}) {
  const hasSpecs = Boolean(specs && specs.length > 0);
  const hasAbout = Boolean(description);

  const tabs: { key: TabKey; label: string }[] = [
    ...(hasSpecs ? [{ key: "specs" as const, label: "Характеристики" }] : []),
    ...(hasAbout ? [{ key: "about" as const, label: "О товаре" }] : []),
    { key: "delivery", label: "Доставка и оплата" },
  ];

  const [activeTab, setActiveTab] = useState<TabKey>(tabs[0].key);

  return (
    <div id="full-specs">
      <div className="mb-6 flex gap-6 overflow-x-auto whitespace-nowrap border-b border-neutral-200 text-sm font-semibold text-neutral-500">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key)}
            className={`cursor-pointer py-2.5 transition-colors ${
              activeTab === tab.key
                ? "border-b-2 border-blue-600 text-blue-600"
                : "hover:text-neutral-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "specs" && hasSpecs && (
        <div className="mb-16">
          <h3 className="mb-4 text-base font-bold text-neutral-800">
            Характеристики товара «{title}»
          </h3>
          <div className="grid grid-cols-1 gap-x-12 text-sm md:grid-cols-2">
            {specs!.map((spec, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-neutral-100 py-2"
              >
                <span className="text-neutral-500">{spec.label}</span>
                <span className="text-right font-medium text-neutral-900">{spec.value}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11px] leading-normal text-neutral-400">
            Производитель оставляет за собой право без уведомления продавца менять характеристики,
            внешний вид, комплектацию товара и место его производства. Указанная информация не
            является публичной офертой.
          </p>
        </div>
      )}

      {activeTab === "about" && hasAbout && (
        <div className="mb-16">
          <h3 className="mb-3 text-base font-bold text-neutral-800">О товаре «{title}»</h3>
          <p className="max-w-4xl text-sm leading-relaxed text-neutral-600">{description}</p>
        </div>
      )}

      {activeTab === "delivery" && (
        <div className="mb-16 max-w-4xl text-sm leading-relaxed text-neutral-600">
          <div className="mb-8">
            <h3 className="mb-3 text-base font-bold text-neutral-800">Доставка</h3>
            <p className="mb-3">
              Мы всегда готовы доставить приобретенный Вам товар в удобное для Вас время.{" "}
              <span className="font-semibold text-neutral-800">Стоимость доставки</span> товаров
              определяется исходя из{" "}
              <span className="font-semibold text-neutral-800">веса, габаритов</span> и{" "}
              <span className="font-semibold text-neutral-800">удаленности</span> до места
              назначения. Доставка осуществляется до подъезда дома, офиса.
            </p>
            <p className="mb-2">Наш интернет-магазин предлагает несколько вариантов получения товара:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Самовывоз с территории компании.</li>
              <li>Быстрая доставка по региону.</li>
              <li>Доставка транспортной компанией.</li>
              <li>Почтой России.</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-base font-bold text-neutral-800">Оплата</h3>
            <p className="mb-2">Оплатить свои покупки вы можете:</p>
            <p className="mb-1 font-semibold text-neutral-800">При заказе доставки:</p>
            <p className="mb-1">1. Банковской картой с помощью платежной системы на сайте</p>
            <ul className="mb-2 list-disc space-y-1 pl-5">
              <li>МИР</li>
              <li>VISA International</li>
              <li>Mastercard Worldwide</li>
              <li>JCB</li>
            </ul>
            <p className="mb-3">2. Наличными водителю при получении заказа</p>

            <p className="mb-1 font-semibold text-neutral-800">При самовывозе:</p>
            <ul className="mb-3 list-disc space-y-1 pl-5">
              <li>Банковской картой с помощью платежной системы на сайте или на кассе при получении заказа.</li>
              <li>Наличными на кассе при получении заказа.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
