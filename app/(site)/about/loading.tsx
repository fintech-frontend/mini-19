import styles from "./about.module.css";

function Line({ w, h = "1em", mt = "0" }: { w: string; h?: string; mt?: string }) {
  return <div className={styles.skeleton} style={{ width: w, height: h, marginTop: mt }} />;
}

/**
 * Состояние загрузки страницы «О компании». Повторяет сетку готовой страницы,
 * чтобы при появлении данных не было скачка вёрстки.
 */
export default function AboutLoading() {
  return (
    <div className={styles.fluidRoot} aria-busy="true" aria-label="Загрузка страницы о компании">
      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutContent}>
            <div className={styles.breadcrumbs}>
              <Line w="12em" h="0.9375em" />
            </div>
            <Line w="18em" h="3em" />
            <Line w="38em" h="2.75em" mt="0.625em" />
            <Line w="100%" h="4em" mt="1.2em" />
            <Line w="100%" h="4em" mt="0.9em" />
            <Line w="100%" h="5.5em" mt="0.9em" />
            <Line w="60%" h="1.6em" mt="0.9em" />
          </div>
        </div>
      </section>

      <section className={styles.why}>
        <div className={styles.container}>
          <Line w="14em" h="2.0625em" />
          <div className={styles.whyGrid}>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className={styles.whyCard}>
                <div className={styles.whyCardIcon}>
                  <Line w="3.25em" h="3.25em" />
                </div>
                <div className={styles.whyCardContent}>
                  <Line w="100%" h="2.5em" />
                  <Line w="90%" h="3.75em" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.history}>
        <div className={styles.container}>
          <Line w="20em" h="2.0625em" />
          <div className={styles.historyGrid}>
            {[0, 1, 2, 3].map((i) => (
              <Line key={i} w="100%" h="13.4em" />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.news}>
        <div className={styles.container}>
          <Line w="10em" h="2.0625em" />
          <div className={styles.slider} style={{ marginBottom: 80 }}>
            <div className={styles.sliderTrackClip}>
              <div className={styles.sliderWrapper}>
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className={styles.slide}>
                    <Line w="100%" h="350px" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Line w="7em" h="2.0625em" />
          <div className={`${styles.slider} ${styles.reviewsSlider}`}>
            <div className={styles.sliderTrackOpen}>
              <div className={styles.sliderWrapper}>
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className={styles.slide}>
                    <Line w="100%" h="16em" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
