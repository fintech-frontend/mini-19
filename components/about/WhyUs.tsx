import styles from "@/app/about/about.module.css";
import type { CompanyAdvantage } from "@/types/company";

/** Блок «Почему именно мы» — четыре карточки с иконками. */
export function WhyUs({ advantages }: { advantages: CompanyAdvantage[] }) {
  return (
    <section className={styles.why}>
      <div className={styles.container}>
        <h3 className={`${styles.text33} ${styles.bold} ${styles.black2}`}>Почему именно мы</h3>

        {advantages.length === 0 ? (
          <p className={styles.stateBox}>Преимущества компании пока не заполнены.</p>
        ) : (
          <div className={styles.whyGrid}>
            {advantages.map((advantage) => (
              <div key={advantage.id} className={styles.whyCard}>
                <div className={styles.whyCardIcon}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={advantage.icon} alt="" aria-hidden="true" />
                </div>
                <div className={styles.whyCardContent}>
                  <div className={`${styles.text20} ${styles.medium} ${styles.whyCardTitle}`}>
                    {advantage.title}
                  </div>
                  <div className={`${styles.text15} ${styles.whyCardText}`}>{advantage.text}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
