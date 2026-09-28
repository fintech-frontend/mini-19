"use client";

import { useState } from "react";
import styles from "@/app/vopros-otvet/vopros-otvet.module.css";
import { FaqCard } from "@/components/faq/FaqCard";
import type { FAQItem } from "@/types/faq";

/**
 * Аккордеон «Вопрос-ответ» (`.qa` оригинала).
 *
 * Состояние — множество открытых id: в оригинале карточки переключаются
 * независимо (slideToggle на каждой), поэтому одновременно может быть открыто
 * сколько угодно вопросов, и открытие одного не закрывает остальные.
 *
 * Данные приходят пропсом из API layer — здесь нет ни запросов, ни хардкода.
 */
export function FaqList({ items }: { items: FAQItem[] }) {
  const [openIds, setOpenIds] = useState<ReadonlySet<number>>(() => new Set());

  function toggle(id: number) {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  // Empty state: бэкенд ответил, но вопросов пока нет.
  if (items.length === 0) {
    return <p className={styles.stateBox}>Вопросы и ответы пока не добавлены.</p>;
  }

  return (
    <div className={styles.qa}>
      <div className={styles.qaItems}>
        {items.map((item) => (
          <FaqCard
            key={item.id}
            item={item}
            open={openIds.has(item.id)}
            onToggle={() => toggle(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
