/**
 * Общие UI-типы шаблона страниц, свёрстанных 1:1 по https://www.stroiopttorg.ru.
 *
 * Правая колонка (промо-карточки + форма подписки) на оригинальном сайте одна и та
 * же на /oplata и /vopros-otvet, поэтому её типы описаны здесь один раз, а
 * types/payment.ts и types/faq.ts на них ссылаются.
 */

/** Промо-карточка в правой колонке: картинка, подпись и бейдж со скидкой. */
export interface ReferencePromoCard {
  id: string;
  href: string;
  image: string;
  /** Подпись поверх картинки. */
  title: string;
  /** Текст тёмного бейджа: «до -30%». */
  badge: string;
}

/** Форма подписки на рассылку под промо-карточками. */
export interface ReferenceSubscribeConfig {
  title: string;
  description: string;
  placeholder: string;
  submitLabel: string;
  consentText: string;
  consentLinkLabel: string;
  consentLinkHref: string;
}

/** Тело запроса подписки на рассылку. */
export interface SubscribeRequestPayload {
  email: string;
}

/** Ответ на подписку. */
export interface SubscribeRequestResult {
  ok: boolean;
  message: string;
}
