import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { promoTiles } from "@/data/home-data";

/** Четыре промо-плитки 390×176 с фото раздела. */
export default function PromoBanners() {
  return (
    <section className="py-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {promoTiles.map((tile) => (
          <Link
            key={tile.title}
            href={tile.href}
            className="group relative block aspect-[390/176] overflow-hidden rounded-2xl bg-[#F2F5F9]"
          >
            <Image
              src={tile.image}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/40 to-transparent" />
            <div className="relative flex h-full flex-col justify-between p-5">
              <p className="max-w-[60%] text-base font-bold leading-snug text-neutral-900">{tile.title}</p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600">
                Смотреть <ChevronRight size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
