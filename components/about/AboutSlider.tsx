"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import styles from "@/app/about/about.module.css";

/**
 * Слайдер страницы «О компании».
 *
 * Оригинал использует Swiper с `slidesPerView: "auto"`, `slidesPerGroup: 1`,
 * `speed: 300` и без loop: ширину слайда задаёт CSS (25% на десктопе, 18.44em на
 * планшете), а количество «остановок» Swiper считает сам — их всегда
 * `слайдов - видимых + 1`. Здесь повторено то же поведение: позиции слайдов
 * измеряются по факту, поэтому один и тот же компонент правильно работает на
 * всех брейкпоинтах без дублирования чисел из CSS.
 */

const TRANSITION_MS = 300;

interface Measurement {
  /** Левый край каждого слайда внутри трека. */
  offsets: number[];
  widths: number[];
  viewport: number;
}

const EMPTY_MEASUREMENT: Measurement = { offsets: [], widths: [], viewport: 0 };

export interface AboutSliderProps {
  slides: ReactNode[];
  /** Ключи слайдов — стабильные id из данных. */
  slideKeys: string[];
  /** Доп. класс корня слайдера (.certsSlider / .reviewsSlider). */
  className?: string;
  /** Трек обрезается по ширине контейнера (сертификаты и новости). */
  clipTrack?: boolean;
  /** Прятать невидимые слайды через visibility — как в блоке отзывов. */
  hideInvisibleSlides?: boolean;
  /** Точки-переключатели под слайдером. */
  pagination?: boolean;
  /** Подпись для скринридеров и aria-label стрелок. */
  label: string;
}

export function AboutSlider({
  slides,
  slideKeys,
  className,
  clipTrack = true,
  hideInvisibleSlides = false,
  pagination = false,
  label,
}: AboutSliderProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [measurement, setMeasurement] = useState<Measurement>(EMPTY_MEASUREMENT);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const measure = useCallback(() => {
    const viewportEl = viewportRef.current;
    const wrapperEl = wrapperRef.current;
    if (!viewportEl || !wrapperEl) return;

    const slideEls = Array.from(wrapperEl.children) as HTMLElement[];
    const widths = slideEls.map((el) => el.getBoundingClientRect().width);
    const offsets: number[] = [];
    let cursor = 0;
    for (const width of widths) {
      offsets.push(cursor);
      cursor += width;
    }

    setMeasurement({ offsets, widths, viewport: viewportEl.getBoundingClientRect().width });
  }, []);

  useEffect(() => {
    measure();
    // ResizeObserver ловит смену ширины контейнера (в том числе при переходе через
    // брейкпоинт), слушатель resize — подстраховка для окружений, где наблюдатель
    // недоступен или его колбэки придерживаются браузером.
    window.addEventListener("resize", measure);
    const viewportEl = viewportRef.current;
    const observer =
      viewportEl && typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    observer?.observe(viewportEl!);
    return () => {
      window.removeEventListener("resize", measure);
      observer?.disconnect();
    };
  }, [measure, slides.length]);

  /** «Остановки» слайдера — то же, что snapGrid у Swiper. */
  const snaps = useMemo(() => {
    const { offsets, widths, viewport } = measurement;
    if (offsets.length === 0) return [0];
    const total = offsets[offsets.length - 1] + widths[widths.length - 1];
    const max = Math.max(0, total - viewport);
    const result: number[] = [];
    for (const offset of offsets) {
      const snap = Math.min(offset, max);
      if (result.length === 0 || snap - result[result.length - 1] > 0.5) result.push(snap);
    }
    return result;
  }, [measurement]);

  // Ограничение считаем прямо при рендере: после ресайза или смены брейкпоинта
  // «остановок» может стать меньше, и сохранённый индекс окажется за диапазоном.
  // Стрелки и точки работают уже с safeIndex, поэтому состояние выправляется само.
  const lastIndex = snaps.length - 1;
  const safeIndex = Math.min(index, lastIndex);
  const translate = snaps[safeIndex] ?? 0;

  /** Индексы слайдов, целиком попадающих в видимую область. */
  const visibleSlides = useMemo(() => {
    const { offsets, widths, viewport } = measurement;
    if (offsets.length === 0 || viewport === 0) return null;
    const visible = new Set<number>();
    offsets.forEach((offset, i) => {
      const left = offset - translate;
      if (left >= -0.5 && left + widths[i] <= viewport + 0.5) visible.add(i);
    });
    return visible;
  }, [measurement, translate]);

  const go = useCallback((next: number) => {
    setAnimate(true);
    setIndex(next);
  }, []);

  const canPrev = safeIndex > 0;
  const canNext = safeIndex < lastIndex;

  return (
    <div className={[styles.slider, className].filter(Boolean).join(" ")}>
      <div
        ref={viewportRef}
        className={clipTrack ? styles.sliderTrackClip : styles.sliderTrackOpen}
      >
        <div
          ref={wrapperRef}
          className={styles.sliderWrapper}
          style={{
            transform: `translate3d(${-translate}px, 0, 0)`,
            transitionDuration: animate ? `${TRANSITION_MS}ms` : "0ms",
          }}
        >
          {slides.map((slide, i) => {
            const hidden = hideInvisibleSlides && visibleSlides !== null && !visibleSlides.has(i);
            return (
              <div
                key={slideKeys[i] ?? i}
                className={[styles.slide, hidden ? styles.slideHidden : null]
                  .filter(Boolean)
                  .join(" ")}
                aria-hidden={hidden || undefined}
              >
                {slide}
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.sliderNav}>
        <button
          type="button"
          onClick={() => go(safeIndex - 1)}
          disabled={!canPrev}
          aria-label={`${label}: предыдущий слайд`}
          className={[
            styles.sliderButton,
            styles.sliderButtonPrev,
            canPrev ? null : styles.sliderButtonDisabled,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none" aria-hidden="true">
            <path
              d="M0.292893 8.70711C-0.097631 8.31658 -0.097631 7.68342 0.292893 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292893 8.70711ZM2 9H1V7H2V9Z"
              fill="#2C333D"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => go(safeIndex + 1)}
          disabled={!canNext}
          aria-label={`${label}: следующий слайд`}
          className={[
            styles.sliderButton,
            styles.sliderButtonNext,
            canNext ? null : styles.sliderButtonDisabled,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none" aria-hidden="true">
            <path
              d="M8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L6.58579 8L0.928932 13.6569C0.538408 14.0474 0.538408 14.6805 0.928932 15.0711C1.31946 15.4616 1.95262 15.4616 2.34315 15.0711L8.70711 8.70711ZM7 9H8V7H7V9Z"
              fill="#2C333D"
            />
          </svg>
        </button>
      </div>

      {pagination && snaps.length > 1 && (
        <div className={styles.pagination}>
          {snaps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`${label}: перейти к слайду ${i + 1}`}
              aria-current={i === safeIndex || undefined}
              className={[styles.bullet, i === safeIndex ? styles.bulletActive : null]
                .filter(Boolean)
                .join(" ")}
            />
          ))}
        </div>
      )}
    </div>
  );
}
