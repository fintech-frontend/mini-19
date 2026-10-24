import Link from "next/link";
import Image from "next/image";
import { popularCategories } from "@/data/home-data";
import HorizontalScroller from "@/components/ui/HorizontalScroller";

/** «Популярные категории» — серые карточки с картинкой раздела, как на эталоне. */
export default function CategoryGrid() {
  return (
    <section className="py-8">
      <h2 className="mb-5 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">Популярные категории</h2>
      <HorizontalScroller className="gap-3 pb-2">
        {popularCategories.map((category) => (
          <Link
            key={category.title}
            href={category.href}
            className="group flex h-[150px] w-[150px] shrink-0 flex-col items-center justify-center gap-3 rounded-xl bg-[#F2F5F9] p-4 text-center transition-colors hover:bg-blue-50 sm:w-[170px]"
          >
            <span className="relative flex h-16 w-full items-center justify-center">
              <Image
                src={category.image}
                alt=""
                width={category.width}
                height={category.height}
                className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </span>
            <span className="text-xs font-medium leading-tight text-gray-700 sm:text-sm">{category.title}</span>
          </Link>
        ))}
      </HorizontalScroller>
    </section>
  );
}
