import type { ReferencePromoCard, ReferenceSubscribeConfig } from "@/types/reference";

/**
 * Типы контента страницы «Способы оплаты» (/oplata).
 *
 * Это "UI-типы": именно их ожидают компоненты в components/payment/*. Форма ответов
 * реального backend хранится отдельно в types/api.ts — так же, как это уже сделано
 * для каталога, страницы «О компании» (types/company.ts) и «Контакты»
 * (types/contacts.ts). Когда появится документация по эндпоинтам, маппинг
 * "ответ backend → тип отсюда" пишется один раз в lib/api/payment.ts, а разметку
 * трогать не придётся.
 */

/**
 * Блок текстовой части страницы. Набор вариантов повторяет разметку оригинала:
 * там это Gutenberg-блоки (`h3.wp-block-heading`, `p.wp-block-paragraph`,
 * `ul.wp-block-list`), поэтому и здесь контент — плоский список блоков, а не HTML-строка.
 * Тот же приём уже применён в types/delivery.ts.
 */
export type PaymentBlock =
  /** Подзаголовок раздела — в оригинале всегда <h3>. */
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  /** Абзац, начинающийся с жирного слова: «**Наличными** водителю при получении заказа.» */
  | { type: "paragraph-lead"; lead: string; text: string }
  /** Отдельная жирная строка-подпись перед списком: «Основные требования:» */
  | { type: "label"; text: string }
  | { type: "list"; items: string[] }
  /** Абзац, заканчивающийся внешней ссылкой (условия кредитования). */
  | { type: "paragraph-link"; text: string; linkText: string; href: string };

/**
 * Промо-карточка и форма подписки в правой колонке одинаковы на всех страницах
 * шаблона, поэтому их форма описана один раз в types/reference.ts.
 */
export type PaymentPromoCard = ReferencePromoCard;
export type PaymentSubscribeConfig = ReferenceSubscribeConfig;

/** Всё содержимое страницы «Способы оплаты» одним объектом. */
export interface PaymentPageContent {
  /** Заголовок H1 и последняя хлебная крошка. */
  title: string;
  /** Текстовая часть — левая колонка. */
  blocks: PaymentBlock[];
  /** Промо-карточки правой колонки. */
  promos: PaymentPromoCard[];
  subscribe: PaymentSubscribeConfig;
}
