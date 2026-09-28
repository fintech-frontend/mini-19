"use client";

import { useId } from "react";
import styles from "@/app/vopros-otvet/vopros-otvet.module.css";
import type { FAQItem } from "@/types/faq";

/**
 * Одна карточка аккордеона (`.qa-card` оригинала): строка с вопросом и круглой
 * кнопкой справа, под ней — раскрывающийся ответ.
 *
 * Открыто/закрыто приходит сверху (FaqList), потому что в оригинале карточки
 * независимы: можно держать открытыми сразу несколько.
 */
export function FaqCard({
  item,
  open,
  onToggle,
}: {
  item: FAQItem;
  open: boolean;
  onToggle: () => void;
}) {
  const id = useId();
  const panelId = `${id}-panel`;
  const buttonId = `${id}-button`;

  return (
    <div className={`${styles.qaCard} ${open ? styles.qaCardActive : ""}`}>
      <button
        type="button"
        id={buttonId}
        className={styles.qaShow}
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span
          className={`${styles.qaQuestion} ${styles.text18} ${styles.text16Tablet}`}
        >
          {item.question}
        </span>

        <span className={styles.qaBtn} aria-hidden="true">
          {/* Плюс — закрытое состояние. */}
          <svg
            className={styles.viewPlus}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 1V15M1 8H15"
              stroke="#186FD4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {/* Минус — открытое состояние. */}
          <svg
            className={styles.viewMinus}
            width="16"
            height="2"
            viewBox="0 0 16 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1H15"
              stroke="#186FD4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div className={styles.qaHidden} id={panelId} role="region" aria-labelledby={buttonId}>
        <div className={styles.qaHiddenInner}>
          <div className={styles.qaHiddenBody}>
            <div className={styles.qaText}>
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
