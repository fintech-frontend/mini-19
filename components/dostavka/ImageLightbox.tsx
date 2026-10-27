"use client";

import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxImage {
  thumb: string;
  full: string;
}

interface ImageLightboxProps {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export function ImageLightbox({ images, index, onClose, onIndexChange }: ImageLightboxProps) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onIndexChange((index - 1 + images.length) % images.length);
      else if (e.key === "ArrowRight") onIndexChange((index + 1) % images.length);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index, images.length, onClose, onIndexChange]);

  if (images.length === 0) return null;

  const current = images[index];

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Закрыть"
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <X className="h-5 w-5" />
      </button>

      <div className="absolute left-1/2 top-4 z-10 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-sm text-white">
        {index + 1} / {images.length}
      </div>

      <div className="relative flex flex-1 items-center justify-center px-4 py-16 sm:px-16">
        {images.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onIndexChange((index - 1 + images.length) % images.length);
            }}
            aria-label="Предыдущее фото"
            className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-4"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={current.full}
          alt={`Доставка — фото ${index + 1}`}
          className="max-h-full max-w-full rounded-lg object-contain"
          onClick={(e) => e.stopPropagation()}
        />

        {images.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onIndexChange((index + 1) % images.length);
            }}
            aria-label="Следующее фото"
            className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-4"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}
      </div>

      {images.length > 1 && (
        <div
          className="flex justify-center gap-2 overflow-x-auto px-4 pb-6"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((image, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onIndexChange(i)}
              aria-label={`Перейти к фото ${i + 1}`}
              aria-current={i === index}
              className={`h-14 w-20 flex-none overflow-hidden rounded-md border-2 transition-colors sm:h-16 sm:w-24 ${
                i === index ? "border-white" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image.thumb} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
