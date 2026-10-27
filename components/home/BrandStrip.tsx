import Image from "next/image";
import { brandLogos } from "@/data/home-data";

/** Бегущая строка логотипов брендов; при наведении останавливается. */
export default function BrandStrip() {
  const loopBrands = [...brandLogos, ...brandLogos];

  return (
    <section className="group/marquee py-8">
      <h2 className="mb-5 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">Популярные бренды</h2>
      <div className="overflow-hidden">
        <div className="flex w-max animate-[marquee_25s_linear_infinite] gap-3 group-hover/marquee:[animation-play-state:paused]">
          {loopBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex h-20 w-44 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white px-4 shadow-sm sm:w-52"
            >
              <Image
                src={brand.image}
                alt={brand.name}
                width={brand.width}
                height={brand.height}
                className="max-h-11 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
