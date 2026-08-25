import Link from "next/link";
import Image from "next/image";
import { CatalogNode } from "@/data/catalog-tree";

const PLACEHOLDER_IMAGE = "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-300x300.webp";

/**
 * "Другие разделы категории «X»" — показывается под товарами/описанием терминального
 * узла, ссылки на родные братья текущего узла в дереве. Общий для листинга с товарами
 * и для fallback-заглушки без товаров.
 */
export default function CatalogSiblingsSection({
  parentTitle,
  siblings,
  basePath,
}: {
  parentTitle: string;
  siblings: CatalogNode[];
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
            <div className="relative aspect-square w-full bg-neutral-50">
              <Image
                src={sibling.image ?? PLACEHOLDER_IMAGE}
                alt={sibling.title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-contain p-8 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-neutral-900 group-hover:text-blue-600">{sibling.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
