import styles from "@/app/oplata/oplata.module.css";
import type { PaymentBlock } from "@/types/payment";

/**
 * Левая колонка страницы «Способы оплаты» — текстовая часть (`.blog__content
 * > .delivery > .text` в оригинале).
 *
 * Контент приходит плоским списком блоков из API layer, поэтому здесь только
 * маппинг «тип блока → тег». Никакого dangerouslySetInnerHTML: разметка
 * собирается из типизированных данных.
 */
export function PaymentContent({ blocks }: { blocks: PaymentBlock[] }) {
  if (blocks.length === 0) {
    return <p className={styles.stateBox}>Информация об оплате пока не заполнена.</p>;
  }

  return (
    <div className={styles.text}>
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  );
}

function Block({ block }: { block: PaymentBlock }) {
  switch (block.type) {
    case "heading":
      return <h3>{block.text}</h3>;

    case "paragraph":
      return <p>{block.text}</p>;

    case "paragraph-lead":
      return (
        <p>
          <strong>{block.lead}</strong>
          {block.text}
        </p>
      );

    case "label":
      return (
        <p>
          <strong>{block.text}</strong>
        </p>
      );

    case "list":
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );

    case "paragraph-link":
      return (
        <p>
          {block.text}
          <a href={block.href} rel="nofollow noopener" target="_blank">
            {block.linkText}
          </a>
        </p>
      );
  }
}
