import Link from "next/link";
import { ImageOff } from "lucide-react";
import { CategoryTreeNode } from "@/lib/api/categoryTree";

/**
 * "Другие разделы категории «X»" — показывается под товарами/сеткой подкатегорий
 * текущего узла, ссылки на родные братья текущего узла в дереве категорий.
 */
export default function CatalogSiblingsSection({
  parentTitle,
  siblings,
  basePath,
}: {
  parentTitle: string;
  siblings: CategoryTreeNode[];
  basePath: string;
}) {
  if (siblings.length === 0) return null;

  return (
    <>
      <h2 className="mb-4 text-lg font-bold tracking-tight text-neutral-900">
        Другие разделы категории «{parentTitle}»
      </h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {siblings.map((sibling) => (
          <Link
            key={sibling.slug}
            href={`${basePath}/${sibling.slug}`}
            className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition-shadow duration-300 hover:shadow-lg"
          >
            <div className="relative flex aspect-square w-full items-center justify-center bg-neutral-50 text-neutral-300">
              <ImageOff className="h-10 w-10" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-neutral-900 group-hover:text-blue-600">{sibling.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
