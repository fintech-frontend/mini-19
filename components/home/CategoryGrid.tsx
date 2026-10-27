import Link from "next/link";
import {
  Boxes,
  Drill,
  Wrench,
  Package,
  Droplets,
  PaintBucket,
  Nut,
  Plug,
  TreePine,
  type LucideIcon,
} from "lucide-react";
import { listCategories } from "@/lib/api/categories";

/**
 * Backend не отдаёт иконку категории (см. types/api.ts — у ApiCategory её нет), поэтому
 * иконки — чисто декоративные, по кругу из фиксированного набора, а не привязаны к
 * конкретной категории по смыслу.
 */
const ICONS: LucideIcon[] = [Drill, Wrench, Package, Droplets, PaintBucket, Nut, Plug, TreePine, Boxes];

export default async function CategoryGrid() {
  let categories: { slug: string; name: string }[] = [];
  try {
    const all = await listCategories();
    categories = all.filter((category) => category.parent === null && category.is_active);
  } catch {
    categories = [];
  }

  if (categories.length === 0) return null;

  return (
    <section className="py-8">
      <h2 className="mb-5 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
        Популярные категории
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        {categories.map((category, index) => {
          const Icon = ICONS[index % ICONS.length];
          return (
            <Link
              key={category.slug}
              href={`/products?category=${category.slug}`}
              className="group flex flex-col items-center gap-2 rounded-xl bg-gray-50 p-4 text-center transition-colors hover:bg-blue-50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={20} />
              </span>
              <span className="text-xs font-medium text-gray-700 sm:text-sm">
                {category.name}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
