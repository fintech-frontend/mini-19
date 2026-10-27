import styles from "./contacts.module.css";

function Line({ w, h = "1em", mt = "0" }: { w: string; h?: string; mt?: string }) {
  return <div className={styles.skeleton} style={{ width: w, height: h, marginTop: mt }} />;
}

/**
 * Состояние загрузки страницы «Контакты». Повторяет сетку готовой страницы,
 * чтобы при появлении данных не было скачка вёрстки.
 */
export default function ContactsLoading() {
  return (
    <div className={styles.fluidRoot} aria-busy="true" aria-label="Загрузка страницы контактов">
      <section className={styles.contacts}>
        <div className={styles.container}>
          <div className={styles.breadcrumbs}>
            <Line w="10em" h="0.9375em" />
          </div>

          <Line w="9em" h="3em" />

          <div className={styles.contactsGrid}>
            <div className={styles.map}>
              <Line w="100%" h="100%" />
            </div>
            <div className={styles.contactsCard}>
              <div className={styles.contactsCardInner}>
                <Line w="70%" h="1.6875em" />
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className={styles.contactItem}>
                    <div className={styles.contactItemImg}>
                      <Line w="1.6875em" h="1.6875em" />
                    </div>
                    <div className={styles.contactItemContent}>
                      <Line w="8em" h="1.6875em" />
                      <Line w="100%" h="2.4em" mt="0.625em" />
                    </div>
                  </div>
                ))}
                <Line w="100%" h="3.875em" />
              </div>
            </div>
          </div>

          <div className={styles.contactPlaces}>
            <div className={styles.contactPlacesItems}>
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <Line key={i} w="100%" h="6.5em" />
              ))}
            </div>
            <Line w="100%" h="13.5em" />
          </div>

          <div className={styles.regions}>
            <Line w="14em" h="1.25em" />
            <div className={styles.regionsGrid}>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <Line key={i} w="100%" h="7em" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.consult}>
        <div className={styles.container}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Line w="26em" h="2.0625em" />
          </div>
          <div className={styles.consultForm}>
            <Line w="100%" h="5.4em" />
            <Line w="100%" h="5.4em" />
            <div className={styles.full}>
              <Line w="100%" h="7.2em" />
            </div>
            <div className={`${styles.consultFormNav} ${styles.full}`}>
              <Line w="13.0625em" h="3.875em" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
