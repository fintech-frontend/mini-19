import Link from "next/link";
import { categories } from "@/data/categories";

export default function CategoryGrid() {
  return (
    <section className="py-8">
      <h2 className="mb-5 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
        Популярные категории
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        {categories.map((category) => {
          const Icon = category.icon;
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
