"use client";

import styles from "@/app/about/about.module.css";
import { AboutSlider } from "@/components/about/AboutSlider";
import type { CompanyReview } from "@/types/company";

const STAR_PATH =
  "M9.52447 2.71365C9.67415 2.25299 10.3259 2.25299 10.4755 2.71365L12.0656 7.60737H17.2112C17.6955 7.60737 17.8969 8.22718 17.5051 8.51188L13.3422 11.5364L14.9323 16.4301C15.0819 16.8907 14.5547 17.2738 14.1628 16.9891L10 13.9646L5.83715 16.9891C5.4453 17.2738 4.91806 16.8907 5.06773 16.4301L6.6578 11.5364L2.49495 8.51188C2.10309 8.22718 2.30448 7.60737 2.78884 7.60737H7.93441L9.52447 2.71365Z";

function ReviewCard({ review }: { review: CompanyReview }) {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewHeader}>
        <div className={styles.reviewerInfo}>
          <figure className={styles.reviewerAvatar}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={review.avatar} alt="" aria-hidden="true" loading="lazy" />
          </figure>
          <div className={styles.reviewerDetails}>
            <p className={styles.reviewerName}>{review.author}</p>
            <div>
              <span className={styles.reviewDate}>{review.date}</span>
            </div>
          </div>
        </div>
        <div className={styles.reviewRating}>
          <div
            className={styles.reviewStars}
            role="img"
            aria-label={`Оценка ${review.rating} из 5`}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <path d={STAR_PATH} fill={star <= review.rating ? "#fac816" : "#e0e0e0"} />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p className={styles.reviewText}>{review.text}</p>
    </div>
  );
}

/** Слайдер отзывов: трек не обрезается, карточки за краем скрыты visibility. */
export function ReviewsSlider({ items }: { items: CompanyReview[] }) {
  return (
    <AboutSlider
      label="Отзывы"
      className={styles.reviewsSlider}
      clipTrack={false}
      hideInvisibleSlides
      pagination
      slideKeys={items.map((item) => item.id)}
      slides={items.map((item) => <ReviewCard key={item.id} review={item} />)}
    />
  );
}
