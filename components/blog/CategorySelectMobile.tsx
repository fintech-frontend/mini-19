"use client";

import { useRouter } from "next/navigation";
import { blogCategories } from "@/data/blog-data";
import { BlogCategorySlug } from "@/types/blog";

interface CategorySelectMobileProps {
  activeSlug?: BlogCategorySlug;
}

export function CategorySelectMobile({ activeSlug }: CategorySelectMobileProps) {
  const router = useRouter();

  return (
    <div className="mb-6 md:hidden">
      <label className="mb-1 block text-xs text-neutral-500">Выбрать рубрику</label>
      <select
        value={activeSlug ?? "all"}
        onChange={(e) => {
          const value = e.target.value;
          router.push(value === "all" ? "/blog" : `/${value}`);
        }}
        className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500"
      >
        <option value="all">Все публикации</option>
        {blogCategories.map((category) => (
          <option key={category.slug} value={category.slug}>
            {category.label}
          </option>
        ))}
      </select>
    </div>
  );
}
