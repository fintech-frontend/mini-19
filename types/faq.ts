import type { ReferencePromoCard, ReferenceSubscribeConfig } from "@/types/reference";

/**
 * Типы контента страницы «Вопрос-ответ» (/vopros-otvet).
 *
 * Это "UI-типы": именно их ожидают компоненты в components/faq/*. Форма ответов
 * реального backend хранится отдельно в types/api.ts — так же, как это уже сделано
 * для каталога и остальных страниц шаблона. Когда появится документация по
 * эндпоинту FAQ, маппинг "ответ backend → тип отсюда" пишется один раз в
 * lib/api/faq.ts, а разметку трогать не придётся.
 */

/** Один вопрос-ответ аккордеона. */
export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

/** Всё содержимое страницы «Вопрос-ответ» одним объектом. */
export interface FAQPageContent {
  /** Заголовок H1 и последняя хлебная крошка. */
  title: string;
  items: FAQItem[];
  /** Промо-карточки правой колонки. */
  promos: ReferencePromoCard[];
  subscribe: ReferenceSubscribeConfig;
}
