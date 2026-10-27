import Link from "next/link";
import type { ApiCategory } from "@/types/api";
import { ResolvedProduct } from "@/lib/resolveProduct";
import { collectDescendantCategoryIds } from "@/lib/api/categoryTree";

interface CategoryFilterProps {
  products: ResolvedProduct[];
  /** Полный плоский список категорий — нужен, чтобы посчитать товары раздела вместе с подразделами. */
  categories: ApiCategory[];
  activeSlug?: string;
}

export default function CategoryFilter({ products, categories, activeSlug }: CategoryFilterProps) {
  const topLevel = categories.filter((category) => category.parent === null);

  const items = [
    { slug: undefined, name: "Все товары", count: products.length },
    ...topLevel.map((category) => {
      const descendantIds = new Set(collectDescendantCategoryIds(categories, category.id));
      return {
        slug: category.slug,
        name: category.name,
        count: products.filter((p) => p.categoryId != null && descendantIds.has(p.categoryId)).length,
      };
    }),
  ];

  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {items.map((item) => {
        const isActive = item.slug === activeSlug;
        const href = item.slug ? `/products?category=${item.slug}` : "/products";
        return (
          <Link
            key={item.slug ?? "all"}
            href={href}
            className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-gray-200 bg-white text-gray-600 hover:border-blue-200 hover:text-blue-600"
            }`}
          >
            {item.name}
            <span className={isActive ? "text-blue-100" : "text-gray-400"}>{item.count}</span>
          </Link>
        );
      })}
    </div>
  );
}
