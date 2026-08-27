"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, HardHat, PercentCircle, Leaf } from "lucide-react";

interface HeroSlide {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  gradient: string;
  /** Фоновое фото слайда из /public. Без него рисуется иконка-заглушка. */
  image?: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
}

const slides: HeroSlide[] = [
  {
    title: "Электроинструмент для любых нужд",
    subtitle: "Профессиональные и бытовые инструменты ведущих брендов по доступным ценам",
    ctaLabel: "Смотреть каталог",
    ctaHref: "/products?category=elektroinstrument",
    gradient: "from-blue-950 via-blue-800 to-blue-600",
    image: "/rasm.png",
    icon: HardHat,
  },
  {
    title: "Стройматериалы со скидкой до 20%",
    subtitle: "Сухие смеси, крепёж и отделочные материалы для вашего ремонта",
    ctaLabel: "Все акции",
    ctaHref: "/stocks",
    gradient: "from-emerald-950 via-emerald-800 to-emerald-600",
    icon: PercentCircle,
  },
  {
    title: "Сезонные товары для дома и сада",
    subtitle: "Всё для дачи, сада и уличных работ в одном каталоге",
    ctaLabel: "Смотреть подборку",
    ctaHref: "/products?category=dom-i-sad",
    gradient: "from-amber-950 via-amber-700 to-amber-500",
    icon: Leaf,
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, paused]);

  return (
    <section
      className="relative overflow-hidden rounded-2xl shadow-lg"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => {
          const Icon = slide.icon;
          return (
            <div
              key={slide.title}
              className={`relative flex min-h-70 w-full shrink-0 items-center overflow-hidden bg-linear-to-br px-14 py-12 sm:min-h-95 sm:px-20 ${slide.gradient}`}
            >
              {slide.image ? (
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  priority={i === 0}
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="pointer-events-none object-cover"
                />
              ) : (
                <>
                  {/* soft spotlight to fake photographic lighting */}
                  <div className="pointer-events-none absolute right-[8%] top-1/2 h-[140%] w-[55%] -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

                  {/* subject silhouette, standing in for a hero photo */}
                  <div className="pointer-events-none absolute -right-6 bottom-0 flex h-[85%] items-end sm:right-8 sm:h-[95%]">
                    <Icon
                      size={220}
                      strokeWidth={1}
                      className="h-full w-auto text-white/20 drop-shadow-2xl sm:size-64"
                      aria-hidden
                    />
                  </div>
                </>
              )}

              {/* затемнение, чтобы текст читался поверх фото */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${
                  slide.image ? "from-black/80 via-black/45 to-black/10" : "from-black/50 via-black/10 to-transparent"
                }`}
              />

              <div
                className={`relative z-10 max-w-lg text-white transition-all duration-700 ease-out ${
                  i === index ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
              >
                <h1 className="text-2xl font-bold drop-shadow-md sm:text-4xl">{slide.title}</h1>
                <p className="mt-3 text-sm text-white/90 drop-shadow sm:text-base">{slide.subtitle}</p>
                <Link
                  href={slide.ctaHref}
                  className="mt-6 inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-md transition-colors hover:bg-blue-500"
                >
                  {slide.ctaLabel}
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        aria-label="Предыдущий слайд"
        onClick={prev}
        className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-800 backdrop-blur transition-colors hover:bg-white sm:left-5"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        aria-label="Следующий слайд"
        onClick={next}
        className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-800 backdrop-blur transition-colors hover:bg-white sm:right-5"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((s, i) => (
          <button
            key={s.title}
            type="button"
            aria-label={`Слайд ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
