import { listBrands } from "@/lib/api/brands";

/** Нет данных о фирменном цвете бренда — просто по кругу из фиксированного набора. */
const COLOR_CLASSES = [
  "text-teal-600",
  "text-red-600",
  "text-blue-700",
  "text-sky-700",
  "text-amber-500",
  "text-orange-600",
  "text-pink-600",
  "text-emerald-700",
];

export default async function BrandStrip() {
  let brands: { slug: string; name: string; logo: string | null }[] = [];
  try {
    brands = await listBrands();
  } catch {
    brands = [];
  }

  if (brands.length === 0) return null;

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
              key={`${brand.slug}-${index}`}
              className="flex h-16 w-40 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white px-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:w-48"
            >
              {brand.logo ? (
                // Логотип приходит произвольным URL с backend — домен заранее неизвестен
                // и не может быть добавлен в next.config images.remotePatterns, поэтому
                // обычный <img>, а не next/image.
                // eslint-disable-next-line @next/next/no-img-element
                <img src={brand.logo} alt={brand.name} className="max-h-10 w-auto object-contain" />
              ) : (
                <span
                  className={`text-base font-black italic tracking-tight sm:text-lg ${
                    COLOR_CLASSES[index % COLOR_CLASSES.length]
                  }`}
                >
                  {brand.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
