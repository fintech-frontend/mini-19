import type { Metadata } from "next";
import Link from "next/link";
import { contentApi, getErrorMessage } from "@/lib/store/api";
import { serverQuery } from "@/lib/store/server";
import styles from "./privacy-policy.module.css";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — Стройоптторг",
  description:
    "Политика конфиденциальности и обработки персональных данных ООО «Стройоптторг»: цели сбора, сроки и способы обработки, права сторон и порядок отзыва согласия.",
};

const FALLBACK_TITLE = "Политика конфиденциальности";

/** Хлебные крошки — одни и те же в рабочем и в ошибочном состоянии. */
function PrivacyBreadcrumbs({ title }: { title: string }) {
  return (
    <div className={styles.breadcrumbs}>
      <div className={styles.breadcrumbItem}>
        <Link href="/">Стройоптторг</Link>
      </div>
      <div className={styles.breadcrumbItem}>{title}</div>
    </div>
  );
}

export default async function PrivacyPolicyPage() {
  // Текст приходит из API layer (см. lib/store/api/contentApi.ts).
  const { data: content, error } = await serverQuery(contentApi.endpoints.getPrivacyPage.initiate());
  if (!content) {
    return (
      <div className={styles.fluidRoot}>
        <section className={styles.blog}>
          <div className={styles.container}>
            <PrivacyBreadcrumbs title={FALLBACK_TITLE} />
            <h1 className={`${styles.text48} ${styles.bold}`}>{FALLBACK_TITLE}</h1>
            <div className={styles.text}>
              <div className={styles.hint}>
                <div className={styles.hintText}>
                  <p>{getErrorMessage(error, "Не удалось загрузить текст политики. Попробуйте позже.")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const { title, blocks } = content;

  return (
    <div className={styles.fluidRoot}>
      <section className={styles.blog}>
        <div className={styles.container}>
          <PrivacyBreadcrumbs title={title} />

          {/* В оригинале у H1 нет класса black-text2, поэтому цвет — чёрный по умолчанию. */}
          <h1 className={`${styles.text48} ${styles.bold}`}>{title}</h1>

          <div className={styles.text}>
            <div className={styles.hint}>
              <div className={styles.hintText}>
                {blocks.map((block, i) =>
                  block.type === "heading" ? (
                    <p key={i}>
                      <strong>{block.text}</strong>
                    </p>
                  ) : (
                    <p key={i}>{block.text}</p>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
