import styles from "@/styles/reference-page.module.css";
import { ReferencePromoCards } from "@/components/reference/ReferencePromoCards";
import { ReferenceSubscribe } from "@/components/reference/ReferenceSubscribe";
import type { ReferencePromoCard, ReferenceSubscribeConfig } from "@/types/reference";

/**
 * Правая колонка шаблона (`.blog__sidebar` оригинала): промо-карточки и форма
 * подписки. Одинакова на /oplata и /vopros-otvet, поэтому компонент общий.
 * На планшете колонка уходит под текст (order: 3, см. общий CSS-модуль).
 */
export function ReferenceSidebar({
  promos,
  subscribe,
}: {
  promos: ReferencePromoCard[];
  subscribe: ReferenceSubscribeConfig;
}) {
  return (
    <div className={styles.sidebar}>
      <ReferencePromoCards promos={promos} />
      <ReferenceSubscribe config={subscribe} />
    </div>
  );
}
