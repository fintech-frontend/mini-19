import Link from "next/link";
import { cn } from "@/lib/utils";
import { blogCategories, blogPosts, getCategoryCounts } from "@/data/blog-data";
import { BlogCategorySlug } from "@/types/blog";

interface CategorySidebarProps {
  activeSlug?: BlogCategorySlug;
}

export function CategorySidebar({ activeSlug }: CategorySidebarProps) {
  const counts = getCategoryCounts();

  const items = [
    { slug: undefined, label: "Все публикации", href: "/blog", count: blogPosts.length },
    ...blogCategories.map((category) => ({
      slug: category.slug,
      label: category.label,
      href: category.href,
      count: counts[category.slug],
    })),
  ];

  return (
    <div className="rounded-2xl border border-neutral-200 p-6">
      <h2 className="mb-4 text-lg font-semibold text-neutral-900">Рубрики</h2>
      <ul className="space-y-1">
        {items.map((item) => {
          const isActive = item.slug === activeSlug;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors",
                  isActive ? "bg-blue-50 font-medium text-blue-600" : "text-neutral-600 hover:text-neutral-900"
                )}
              >
                <span className={item.slug === undefined ? "uppercase" : ""}>{item.label}</span>
                <span className="text-neutral-400">{item.count}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
