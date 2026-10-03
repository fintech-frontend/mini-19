import Link from "next/link";
import Image from "next/image";
import { CatalogNode } from "@/data/catalog-tree";
import styles from "@/app/catalog/catalog.module.css";

const VISIBLE_BY_DEFAULT = 4;
const PLACEHOLDER_IMAGE = "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-300x300.webp";

/** Иконка-стрелка перед ссылкой подкатегории — та же, что и на эталонном сайте. */
function ChevronBullet() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={styles.bullet}
    >
      <path
        d="M9.35355 8.35355C9.54882 8.15829 9.54882 7.84171 9.35355 7.64645L6.17157 4.46447C5.97631 4.2692 5.65973 4.2692 5.46447 4.46447C5.2692 4.65973 5.2692 4.97631 5.46447 5.17157L8.29289 8L5.46447 10.8284C5.2692 11.0237 5.2692 11.3403 5.46447 11.5355C5.65973 11.7308 5.97631 11.7308 6.17157 11.5355L9.35355 8.35355ZM8 8.5H9V7.5H8V8.5Z"
        fill="#2C333D"
      />
    </svg>
  );
}

/**
 * Карточка узла верхнего уровня каталога (используется только на /catalog): картинка,
 * заголовок-ссылка и превью первых подпунктов. Работает с любым узлом дерева
 * (data/catalog-tree.ts), а не только с "категорией" — это то же дерево, просто
 * карточка сама решает, куда вести ссылки, через переданный basePath.
 */
export default function CategoryCard({ node, basePath }: { node: CatalogNode; basePath: string }) {
  const href = `${basePath}/${node.slug}`;
  // На эталонном сайте карточка показывает только первые 4 подкатегории — остальные
  // присутствуют в разметке, но кнопка "Показать ещё" отключена (display: none всегда,
  // клик по ней ни на что не влияет), поэтому список подкатегорий здесь статичный.
  const visibleChildren = node.children.slice(0, VISIBLE_BY_DEFAULT);

  return (
    <div className={styles.card}>
      <Link href={href} className={styles.cardImageLink}>
        <Image
          src={node.image ?? PLACEHOLDER_IMAGE}
          alt={node.title}
          width={228}
          height={128}
          className={styles.cardImage}
        />
      </Link>

      <Link href={href} className={styles.cardTitle}>
        {node.title}
      </Link>

      {visibleChildren.length > 0 && (
        <ul className={styles.subList}>
          {visibleChildren.map((child) => (
            <li key={child.slug} className={styles.subItem}>
              <ChevronBullet />
              <Link href={`${href}/${child.slug}`} className={styles.subLink}>
                {child.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
