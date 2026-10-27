import Link from "next/link";
import styles from "@/styles/reference-page.module.css";
import type { ReferencePromoCard } from "@/types/reference";

/**
 * Промо-карточки правой колонки (`.catalog-promo` оригинала): картинка на всю
 * карточку, подпись и тёмный бейдж со скидкой поверх неё. При наведении картинка
 * плавно увеличивается (scale 1.1, 0.3s ease-in-out) — как в оригинале.
 *
 * Раскладка: одна колонка на десктопе, две на планшете, одна на мобильном.
 */
export function ReferencePromoCards({ promos }: { promos: ReferencePromoCard[] }) {
  if (promos.length === 0) return null;

  return (
    <div className={styles.catalogPromo}>
      {promos.map((promo) => (
        <Link key={promo.id} href={promo.href} className={styles.promoCard}>
          <div className={styles.promoCardImg}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={promo.image} alt="" aria-hidden="true" />
          </div>
          <div className={styles.promoCardContent}>
            <div className={`${styles.text22} ${styles.promoCardTitle}`}>{promo.title}</div>
            <div className={styles.badge}>
              <span>{promo.badge}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
