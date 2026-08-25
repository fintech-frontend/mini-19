import { brands } from "@/data/brands";

export default function BrandStrip() {
  const loopBrands = [...brands, ...brands];

  return (
    <section className="group/marquee py-8">
      <h2 className="mb-5 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
        Популярные бренды
      </h2>
      <div className="overflow-hidden">
        <div className="flex w-max animate-[marquee_25s_linear_infinite] gap-3 group-hover/marquee:[animation-play-state:paused]">
          {loopBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex h-16 w-40 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white px-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:w-48"
            >
              <span className={`text-base font-black italic tracking-tight sm:text-lg ${brand.colorClass}`}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
