import styles from "@/app/about/about.module.css";
import { CertificatesSlider } from "@/components/about/CertificatesSlider";
import { NewsSlider } from "@/components/about/NewsSlider";
import { ReviewsSlider } from "@/components/about/ReviewsSlider";
import type {
  CompanyCertificate,
  CompanyNewsItem,
  CompanyReviewsBlock,
} from "@/types/company";

interface AboutShowcaseProps {
  certificates: CompanyCertificate[];
  reviews: CompanyReviewsBlock;
  news: CompanyNewsItem[];
  /** Текст ошибки блока новостей — новости грузятся отдельно от остального контента. */
  newsError?: string | null;
}

/**
 * Нижняя часть страницы. В оригинале это одна секция `.news _section _last`,
 * внутри которой подряд идут три блока: сертификаты, отзывы и новости.
 */
export function AboutShowcase({ certificates, reviews, news, newsError }: AboutShowcaseProps) {
  const { summary, items } = reviews;

  return (
    <section className={styles.news}>
      <div className={styles.container}>
        <div className={styles.newsInner}>
          <div className={styles.newsTop}>
            <h6 className={`${styles.text33} ${styles.bold} ${styles.black2}`}>Сертификаты</h6>
          </div>
          {certificates.length === 0 ? (
            <p className={styles.stateBox}>Сертификаты пока не загружены.</p>
          ) : (
            <CertificatesSlider items={certificates} />
          )}

          <div className={`${styles.newsTop} ${styles.newsTopSpaced}`}>
            <h6 className={`${styles.text33} ${styles.bold} ${styles.black2}`}>Отзывы</h6>
          </div>

          <div className={styles.ratingInfo}>
            <p className={styles.ratingValue}>{summary.average}</p>
            <div>
              <div className={styles.ratingStars}>
                <ul className={styles.starsList} role="img" aria-label={`Рейтинг ${summary.average} из 5`}>
                  {Array.from({ length: summary.stars }, (_, i) => (
                    <li key={i} className={styles.star} />
                  ))}
                </ul>
              </div>
              <a
                className={styles.ratingLink}
                target="_blank"
                rel="noreferrer"
                href={summary.reviewsUrl}
              >
                {summary.countLabel}
              </a>
            </div>
          </div>

          {items.length === 0 ? (
            <p className={styles.stateBox}>Отзывов пока нет.</p>
          ) : (
            <ReviewsSlider items={items} />
          )}

          <div className={styles.badgeLinks}>
            <div>
              <a
                className={styles.moreReviewsLink}
                target="_blank"
                rel="noreferrer"
                href={summary.reviewsUrl}
              >
                Больше отзывов на Яндекс Картах
              </a>
            </div>
            <div>
              <a
                className={styles.btnBlue}
                target="_blank"
                rel="noreferrer"
                href={summary.addReviewUrl}
              >
                Оставить отзыв
              </a>
            </div>
          </div>

          <div className={`${styles.newsTop} ${styles.newsTopSpaced}`}>
            <h6 className={`${styles.text33} ${styles.bold} ${styles.black2}`}>
              Последние новости
            </h6>
          </div>
          {newsError ? (
            <p className={`${styles.stateBox} ${styles.stateError}`}>{newsError}</p>
          ) : news.length === 0 ? (
            <p className={styles.stateBox}>Новостей пока нет.</p>
          ) : (
            <NewsSlider items={news} />
          )}
        </div>
      </div>
    </section>
  );
}
