import Link from "next/link";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  /** Base path without trailing slash, e.g. "/blog" or "/novosti" */
  basePath: string;
}

function pageHref(basePath: string, page: number) {
  return page === 1 ? basePath : `${basePath}/page/${page}`;
}

function getVisiblePages(current: number, total: number): (number | "ellipsis")[] {
  const pages = new Set([1, 2, total - 1, total, current - 1, current, current + 1]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);

  const result: (number | "ellipsis")[] = [];
  sorted.forEach((page, i) => {
    if (i > 0 && page - sorted[i - 1] > 1) result.push("ellipsis");
    result.push(page);
  });
  return result;
}

export function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = getVisiblePages(currentPage, totalPages);

  return (
    <nav className="flex items-center justify-center gap-2 pt-4" aria-label="Пагинация">
      <Link
        href={pageHref(basePath, Math.max(1, currentPage - 1))}
        className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-neutral-500 hover:text-neutral-900"
      >
        Назад
      </Link>

      {pages.map((page, i) =>
        page === "ellipsis" ? (
          <span key={`ellipsis-${i}`} className="px-2 text-sm text-neutral-400">
            …
          </span>
        ) : (
          <Link
            key={page}
            href={pageHref(basePath, page)}
            className={cn(
              "flex h-14 min-w-14 items-center justify-center rounded-lg px-2 text-sm",
              page === currentPage ? "bg-black font-medium text-white" : "text-neutral-600 hover:bg-neutral-100"
            )}
          >
            {page}
          </Link>
        )
      )}

      <Link
        href={pageHref(basePath, Math.min(totalPages, currentPage + 1))}
        className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-neutral-500 hover:text-neutral-900"
      >
        Далее
      </Link>
    </nav>
  );
}
