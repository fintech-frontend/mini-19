import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import CategoryCard from "@/components/catalog/CategoryCard";
import { catalogTree } from "@/data/catalog-tree";
import styles from "./catalog.module.css";

export const metadata: Metadata = {
  title: "Каталог товаров — интернет-магазин «Стройоптторг»",
  description: "Каталог строительных материалов, инструмента и товаров для дома, сада и огорода.",
};

export default function CatalogPage() {
  return (
    <div className={styles.fluidRoot}>
      <div className={styles.container}>
        <Breadcrumbs items={[{ label: "Каталог" }]} />

        <h1 className={styles.pageTitle}>Каталог</h1>

        <div className={styles.grid}>
          {catalogTree.map((category) => (
            <CategoryCard key={category.slug} node={category} basePath="/catalog" />
          ))}
        </div>
      </div>
    </div>
  );
}
