"use client";

import Link from "next/link";
import styles from "@/app/about/about.module.css";
import { AboutSlider } from "@/components/about/AboutSlider";
import type { CompanyNewsItem } from "@/types/company";

function NewsCard({ item }: { item: CompanyNewsItem }) {
  return (
    <div>
      <Link href={item.href} className={styles.newsCardImg}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.image} alt={item.title} loading="lazy" />
      </Link>
      <div className={styles.newsCardContent}>
        <Link
          href={item.href}
          className={`${styles.text20} ${styles.text16Tablet} ${styles.medium} ${styles.black2}`}
        >
          {item.title}
        </Link>
        <div className={`${styles.text16} ${styles.text14Tablet} ${styles.newsCardExcerpt}`}>
          {item.excerpt}
        </div>
        <div className={styles.text13}>{item.date}</div>
      </div>
    </div>
  );
}

/** Слайдер «Последние новости» — четыре карточки в ряд. */
export function NewsSlider({ items }: { items: CompanyNewsItem[] }) {
  return (
    <AboutSlider
      label="Последние новости"
      slideKeys={items.map((item) => item.id)}
      slides={items.map((item) => <NewsCard key={item.id} item={item} />)}
    />
  );
}
