import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutShowcase } from "@/components/about/AboutShowcase";
import { CompanyHistory } from "@/components/about/CompanyHistory";
import { WhyUs } from "@/components/about/WhyUs";
import { companyHistoryTitle } from "@/data/about-data";
import { contentApi, getErrorMessage } from "@/lib/store/api";
import { serverQuery } from "@/lib/store/server";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "О компании — Стройоптторг",
  description:
    "«Стройоптторг» — крупнейшая оптово-розничная компания по продаже строительных и отделочных материалов. История компании, сертификаты и отзывы покупателей.",
};

export default async function AboutPage() {
  // Контент страницы и новости — разные запросы (см. lib/store/api/contentApi.ts),
  // поэтому ошибка одного блока не должна ронять всю страницу.
  const [profileResult, newsResult] = await Promise.all([
    serverQuery(contentApi.endpoints.getCompanyProfile.initiate()),
    serverQuery(contentApi.endpoints.getCompanyNews.initiate()),
  ]);

  const profile = profileResult.data;
  if (!profile) {
    return (
      <div className={styles.fluidRoot}>
        <div className={styles.container}>
          <div className={styles.breadcrumbs}>
            <div className={styles.breadcrumbItem}>Стройоптторг</div>
            <div className={styles.breadcrumbItem}>О компании</div>
          </div>
          <h1 className={`${styles.text48} ${styles.bold} ${styles.black2}`}>О компании</h1>
          <p className={`${styles.stateBox} ${styles.stateError}`}>
            {getErrorMessage(profileResult.error, "Не удалось загрузить информацию о компании. Попробуйте позже.")}
          </p>
        </div>
      </div>
    );
  }

  const news = newsResult.data ?? [];
  const newsError = newsResult.isError
    ? getErrorMessage(newsResult.error, "Не удалось загрузить новости. Попробуйте позже.")
    : null;

  return (
    <div className={styles.fluidRoot}>
      <AboutHero intro={profile.intro} />
      <WhyUs advantages={profile.advantages} />
      <CompanyHistory
        title={companyHistoryTitle}
        entries={profile.history}
        today={profile.today}
      />
      <AboutShowcase
        certificates={profile.certificates}
        reviews={profile.reviews}
        news={news}
        newsError={newsError}
      />
    </div>
  );
}
