import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReviewSort } from "@/data/reviews-data";

const tabs: { sort: ReviewSort; label: string }[] = [
  { sort: "new", label: "Сначала новые" },
  { sort: "old", label: "Сначала старые" },
];

export function ReviewsSortTabs({ active, basePath }: { active: ReviewSort; basePath: string }) {
  return (
    <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Сортировка отзывов">
      {tabs.map((tab) => {
        const isActive = tab.sort === active;
        return (
          <Link
            key={tab.sort}
            href={tab.sort === "new" ? basePath : `${basePath}?sort=old`}
            role="tab"
            aria-selected={isActive}
            className={cn(
              "rounded-md px-3.5 py-2 text-xs font-medium transition-colors",
              isActive
                ? "bg-blue-50 text-blue-600"
                : "bg-neutral-100 text-neutral-500 hover:text-neutral-800"
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
