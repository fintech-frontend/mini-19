import styles from "./oplata.module.css";

function Line({ w, h = "1em", mt = "0" }: { w: string; h?: string; mt?: string }) {
  return <div className={styles.skeleton} style={{ width: w, height: h, marginTop: mt }} />;
}

/**
 * Состояние загрузки страницы «Способы оплаты». Повторяет сетку готовой страницы,
 * чтобы при появлении данных не было скачка вёрстки.
 */
export default function OplataLoading() {
  return (
    <div className={styles.fluidRoot} aria-busy="true" aria-label="Загрузка страницы способов оплаты">
      <section className={styles.blog}>
        <div className={styles.container}>
          <div className={styles.breadcrumbs}>
            <Line w="12em" h="0.9375em" />
          </div>

          <Line w="16em" h="3em" />

          <div className={styles.grid}>
            <div>
              {[0, 1, 2].map((group) => (
                <div key={group} style={{ marginBottom: "2.5em" }}>
                  <Line w="18em" h="1.25em" />
                  <Line w="100%" h="5em" mt="1em" />
                  <Line w="100%" h="3.4em" mt="1em" />
                  <Line w="72%" h="1.7em" mt="1em" />
                </div>
              ))}
            </div>

            <div className={styles.sidebar}>
              <div className={styles.catalogPromo}>
                {[0, 1].map((i) => (
                  <div key={i} className={styles.promoCard}>
                    <div className={styles.promoCardImg}>
                      <Line w="100%" h="100%" />
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.subscribe}>
                <div className={styles.subscribeTop}>
                  <Line w="80%" h="1.6em" />
                  <Line w="100%" h="2.4em" />
                </div>
                <div className={styles.subscribeWrap}>
                  <Line w="100%" h="3.8125em" />
                  <Line w="100%" h="3.875em" />
                </div>
                <Line w="100%" h="3.2em" mt="1em" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
