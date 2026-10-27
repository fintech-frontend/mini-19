"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides as slides } from "@/data/home-data";

const FOCUS_CLASS = {
  left: "object-left",
  center: "object-center",
  right: "object-right",
} as const;

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
      className="relative overflow-hidden rounded-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          // Пропорции баннера эталона — 1620×506; на телефоне выше, чтобы влез текст.
          <div
            key={slide.title}
            className="relative flex min-h-72 w-full shrink-0 items-center bg-[#F2F5F9] px-6 py-10 sm:aspect-[1620/506] sm:min-h-0 sm:px-16"
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={i === 0}
              sizes="(max-width: 1280px) 100vw, 1280px"
              className={`pointer-events-none object-cover ${FOCUS_CLASS[slide.focus]}`}
            />
            {/* Светлая подложка слева, чтобы тёмный текст читался поверх фото. */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent sm:via-white/40" />

            <div
              className={`relative z-10 max-w-md transition-all duration-700 ease-out ${
                i === index ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              <h2 className="text-2xl font-bold leading-tight text-neutral-900 sm:text-4xl">{slide.title}</h2>
              <p className="mt-3 text-sm text-neutral-600 sm:text-base">{slide.subtitle}</p>
              <Link
                href={slide.ctaHref}
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#132a44] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#1c3b5e]"
              >
                {slide.ctaLabel}
                <ChevronRight size={14} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Предыдущий слайд"
        onClick={prev}
        className="absolute left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-800 shadow-md transition-colors hover:bg-gray-50 sm:flex"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        aria-label="Следующий слайд"
        onClick={next}
        className="absolute right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-800 shadow-md transition-colors hover:bg-gray-50 sm:flex"
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
              i === index ? "w-6 bg-[#132a44]" : "w-2 bg-[#132a44]/30 hover:bg-[#132a44]/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
