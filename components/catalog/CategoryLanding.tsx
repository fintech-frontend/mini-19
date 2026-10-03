import Link from "next/link";
import Image from "next/image";
import { CatalogNode } from "@/data/catalog-tree";
import styles from "@/app/catalog/catalog.module.css";

const PLACEHOLDER_IMAGE = "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-300x300.webp";

/**
 * Сетка дочерних узлов каталога (branch или terminal — визуально одинаково, пока не
 * откроешь сам узел). Работает на любой глубине: /catalog/[category], .../[sub],
 * .../[sub]/[subsub] и так далее — компонент не знает и не должен знать, на каком он
 * уровне, он просто рендерит node.children под переданным basePath.
 */
export default function CategoryLanding({ node, basePath }: { node: CatalogNode; basePath: string }) {
  return (
    <>
      <h1 className={styles.pageTitle}>{node.title}</h1>

      {node.children.length === 0 && (
        <p className="mt-6 text-sm text-neutral-500">
          В этой категории пока нет подкатегорий. Уточните ассортимент у менеджера по телефону{" "}
          <a href="tel:88004440065" className="font-semibold text-neutral-900 hover:text-blue-600">
            8 800 444 00 65
          </a>
          .
        </p>
      )}

      <div className={styles.grid}>
        {node.children.map((child) => (
          <Link key={child.slug} href={`${basePath}/${child.slug}`} className={styles.cardLink}>
            <Image
              src={child.image ?? PLACEHOLDER_IMAGE}
              alt={child.title}
              width={228}
              height={128}
              className={styles.cardImage}
            />
            <p className={styles.title2}>{child.title}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
