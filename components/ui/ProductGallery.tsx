"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  alt: string;
}

export default function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];

  return (
    <div className="flex gap-4">
      {images.length > 1 && (
        <div className="flex flex-col gap-2 w-16 sm:w-20 shrink-0">
          {images.map((imgUrl, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`${alt} — фото ${index + 1}`}
              className={`relative aspect-square rounded border cursor-pointer hover:border-blue-500 transition overflow-hidden bg-gray-50 ${
                index === activeIndex ? "border-blue-500" : "border-gray-200"
              }`}
            >
              <Image src={imgUrl} alt={`${alt} — фото ${index + 1}`} fill className="object-contain p-1" />
            </button>
          ))}
        </div>
      )}

      <div className="relative aspect-square w-full bg-white border border-gray-200 rounded-lg overflow-hidden group">
        <Image
          key={activeImage}
          src={activeImage}
          alt={alt}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          priority
        />
      </div>
    </div>
  );
}
