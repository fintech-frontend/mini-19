"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import { ResolvedProduct } from "@/lib/resolveProduct";

interface TabbedProductShelfProps {
  title: string;
  subtitle?: string;
  products: ResolvedProduct[];
  viewAllHref?: string;
}

export default function TabbedProductShelf({
  title,
  subtitle,
  products,
  viewAllHref,
}: TabbedProductShelfProps) {
  const categoryTabs = useMemo(() => {
    const seen = new Set<string>();
    const tabs: string[] = [];
    for (const product of products) {
      const category = product.categoryName;
      if (category && !seen.has(category)) {
        seen.add(category);
        tabs.push(category);
      }
    }
    return tabs;
  }, [products]);

  const [activeTab, setActiveTab] = useState<string | null>(null);

  if (products.length === 0) {
    return null;
  }

  const visibleProducts = activeTab
    ? products.filter((product) => product.categoryName === activeTab)
    : products;

  return (
    <section className="py-8">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">{title}</h2>
          {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
        </div>
        {viewAllHref && (
          <Link
            href={viewAllHref}
            className="flex shrink-0 items-center gap-1 text-sm font-semibold text-blue-600 hover:underline"
          >
            Смотреть все <ArrowRight size={16} />
          </Link>
        )}
      </div>

      {categoryTabs.length > 1 && (
        <div className="mb-5 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveTab(null)}
            className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
              activeTab === null
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-gray-200 text-gray-500 hover:border-blue-200 hover:text-blue-600"
            }`}
          >
            Все
          </button>
          {categoryTabs.map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => setActiveTab(category)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                activeTab === category
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-gray-200 text-gray-500 hover:border-blue-200 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className="flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {visibleProducts.map((product) => (
          <div key={product.id} className="w-[200px] shrink-0 sm:w-[240px]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
