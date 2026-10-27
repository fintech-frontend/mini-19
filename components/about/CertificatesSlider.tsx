"use client";

import styles from "@/app/about/about.module.css";
import { AboutSlider } from "@/components/about/AboutSlider";
import type { CompanyCertificate } from "@/types/company";

/** Слайдер сертификатов: по четыре карточки в ряд, изображения вписаны в 350px. */
export function CertificatesSlider({ items }: { items: CompanyCertificate[] }) {
  return (
    <AboutSlider
      label="Сертификаты"
      className={styles.certsSlider}
      slideKeys={items.map((item) => item.id)}
      slides={items.map((item) => (
        <a key={item.id} href={item.image} target="_blank" rel="noreferrer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.image} alt={item.alt} loading="lazy" />
        </a>
      ))}
    />
  );
}
