import styles from "@/app/contacts/contacts.module.css";
import type { ContactRegionsBlock } from "@/types/contacts";

/**
 * Блок «Работаем по регионам:» — шесть колонок с разделительной линией справа
 * (`.regions` оригинала). 6 колонок на десктопе, 3 на планшете, 1 на мобильном.
 */
export function ContactRegions({ regions }: { regions: ContactRegionsBlock }) {
  return (
    <div className={styles.regions}>
      <div className={`${styles.text20} ${styles.medium}`}>{regions.title}</div>

      {regions.items.length === 0 ? (
        <p className={styles.stateBox}>Список регионов пока не заполнен.</p>
      ) : (
        <div className={styles.regionsGrid}>
          {regions.items.map((region) => (
            <div key={region.id} className={styles.regionCard}>
              <div className={styles.text15}>
                {region.city}
                <br />
                {region.address}
              </div>
              <div className={styles.regionCardItem}>
                <a href={`tel:${region.phone.tel}`} className={styles.regionCardLink}>
                  {region.phone.label}
                </a>
              </div>
              <div className={styles.regionCardItem}>
                <a href={`mailto:${region.email}`} className={styles.regionCardMail}>
                  {region.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
