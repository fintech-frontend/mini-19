"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { deliveryImages } from "@/data/delivery-data";
import { ImageLightbox } from "@/components/dostavka/ImageLightbox";
const GAP = 24;

function getVisibleCount(width: number) {
  if (width < 640) return 1;
  if (width < 1024) return 2;
  return 4;
}

export function DeliverySlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(4);
  const [slideWidth, setSlideWidth] = useState(0);
  const [step, setStep] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    function measure() {
      const el = containerRef.current;
      if (!el) return;
      const count = getVisibleCount(el.clientWidth);
      setVisibleCount(count);
      setSlideWidth((el.clientWidth - GAP * (count - 1)) / count);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const track = [...deliveryImages, ...deliveryImages];

  function next() {
    setAnimate(true);
    setStep((s) => s + 1);
  }

  function prev() {
    setAnimate(true);
    setStep((s) => s - 1);
  }

  // once we've scrolled a full set, snap back to 0 instantly (seamless loop)
  useEffect(() => {
    if (Math.abs(step) < deliveryImages.length) return;
    const id = setTimeout(() => {
      setAnimate(false);
      setStep((s) => (s > 0 ? s - deliveryImages.length : s + deliveryImages.length));
    }, 500);
    return () => clearTimeout(id);
  }, [step]);

  const offset = step * (slideWidth + GAP);

  return (
    <div className="mt-12">
      <div ref={containerRef} className="relative overflow-hidden">
        <div
          className={`flex ${animate ? "transition-transform duration-500 ease-in-out" : ""}`}
          style={{ gap: GAP, transform: `translateX(-${offset}px)` }}
        >
          {track.map((image, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setLightboxIndex(i % deliveryImages.length)}
              aria-label={`Открыть фото ${(i % deliveryImages.length) + 1}`}
              className="block flex-none overflow-hidden rounded-2xl bg-neutral-100"
              style={{ width: slideWidth || `calc((100% - ${GAP * (visibleCount - 1)}px) / ${visibleCount})` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.thumb}
                alt={`Доставка — фото ${(i % deliveryImages.length) + 1}`}
                className="aspect-[552/330] w-full object-cover"
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="Предыдущее фото"
          className="absolute -left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 shadow-sm transition-colors hover:bg-neutral-50"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Следующее фото"
          className="absolute -right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 shadow-sm transition-colors hover:bg-neutral-50"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {lightboxIndex !== null && (
        <ImageLightbox
          images={deliveryImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </div>
  );
}
