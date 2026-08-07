"use client";

import { useState } from "react";
import { Product } from "@/types/product";

interface ProductTabsProps {
  product: Product;
}

type TabKey = "specs" | "about" | "delivery";

const TABS: { key: TabKey; label: string }[] = [
  { key: "specs", label: "Характеристики" },
  { key: "about", label: "О товаре" },
  { key: "delivery", label: "Доставка и оплата" },
];

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("specs");

  return (
    <div id="full-specs">
      <div className="border-b border-gray-200 mb-6 flex gap-6 text-sm font-semibold text-gray-500 overflow-x-auto whitespace-nowrap">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key)}
            className={`py-2.5 cursor-pointer transition-colors ${
              activeTab === tab.key
                ? "border-b-2 border-blue-600 text-blue-600"
                : "hover:text-gray-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "specs" && (
        <div className="mb-16">
          <h3 className="text-base font-bold mb-4 text-gray-800">
            Характеристики товара «{product.title}»
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 text-sm">
            {product.specs.map((spec, index) => (
              <div key={index} className="flex justify-between py-2 border-b border-gray-100 items-center">
                <span className="text-gray-500">{spec.label}</span>
                <span className="font-medium text-gray-900 text-right">{spec.value}</span>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-gray-400 mt-4 leading-normal">
            Производитель оставляет за собой право без уведомления продавца менять характеристики, внешний вид, комплектацию товара и место его производства. Указанная информация не является публичной офертой.
          </p>
        </div>
      )}

      {activeTab === "about" && (
        <div className="mb-16">
          <h3 className="text-base font-bold mb-3 text-gray-800">О товаре «{product.title}»</h3>
          <p className="text-sm text-gray-600 leading-relaxed max-w-4xl">{product.description}</p>
        </div>
      )}

      {activeTab === "delivery" && (
        <div className="mb-16 max-w-4xl text-sm text-gray-600 leading-relaxed">
          <div className="mb-8">
            <h3 className="text-base font-bold mb-3 text-gray-800">Доставка</h3>
            <p className="mb-3">
              Мы всегда готовы доставить приобретенный Вам товар в удобное для Вас время.{" "}
              <span className="font-semibold text-gray-800">Стоимость доставки</span> товаров определяется исходя из{" "}
              <span className="font-semibold text-gray-800">веса, габаритов</span> и{" "}
              <span className="font-semibold text-gray-800">удаленности</span> до места назначения. Доставка осуществляется до подъезда дома, офиса.
            </p>
            <p className="mb-2">Наш интернет-магазин предлагает несколько вариантов получения товара:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Самовывоз с территории компании.</li>
              <li>Быстрая доставка по региону.</li>
              <li>Доставка транспортной компанией.</li>
              <li>Почтой России.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold mb-3 text-gray-800">Оплата</h3>
            <p className="mb-2">Оплатить свои покупки вы можете:</p>
            <p className="font-semibold text-gray-800 mb-1">При заказе доставки:</p>
            <p className="mb-1">1. Банковской картой с помощью платежной системы на сайте</p>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>МИР</li>
              <li>VISA International</li>
              <li>Mastercard Worldwide</li>
              <li>JCB</li>
            </ul>
            <p className="mb-3">2. Наличными водителю при получении заказа</p>

            <p className="font-semibold text-gray-800 mb-1">При самовывозе:</p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Банковской картой с помощью платежной системы на сайте или на кассе при получении заказа.</li>
              <li>Наличными на кассе при получении заказа.</li>
            </ul>

            <p className="font-semibold text-gray-800">Сервис «Покупай со сбором»</p>
          </div>
        </div>
      )}
    </div>
  );
}
