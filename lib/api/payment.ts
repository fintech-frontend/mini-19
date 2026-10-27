import {
  paymentBlocks,
  paymentPromos,
  paymentSubscribe,
  paymentTitle,
} from "@/data/payment-data";
import type {
  PaymentBlock,
  PaymentPageContent,
  PaymentPromoCard,
  PaymentSubscribeConfig,
} from "@/types/payment";

/**
 * API layer страницы «Способы оплаты» (/oplata).
 *
 * ─── Что уже есть на бэкенде ────────────────────────────────────────────────
 * В Postman-документации проекта (см. комментарий в lib/api/config.ts) описан
 * только раздел shop: categories / brands / products / carts / cart-items /
 * orders + auth. Разделов «страницы», «оплата», «промо-баннеры» и «подписка на
 * рассылку» там нет, и на живом сервере они не отвечают. Выдумывать маршруты
 * («/pages/oplata/», «/subscribe/») здесь нельзя — это дало бы гарантированные
 * 404 и сломало бы страницу.
 *
 * ─── Как подключить реальный бэкенд ─────────────────────────────────────────
 * Функции ниже — единственное место, которое об этом знает. UI
 * (app/oplata/page.tsx и components/payment/*) работает с типами из
 * types/payment.ts и не знает, откуда пришли данные. Когда появится
 * документация, в каждой функции нужно заменить одну строку
 * `return <локальные данные>` на
 *
 *     const dto = await api.get<ApiPaymentPage>("/<путь из документации>/", { auth: false });
 *     return mapPaymentPage(dto);
 *
 * где `api` — общий клиент из lib/api/client.ts (он уже берёт базовый URL из
 * NEXT_PUBLIC_API_URL, см. lib/api/config.ts — хардкодить адрес не нужно),
 * а `mapPaymentPage` — маппер «ответ бэкенда → тип из types/payment.ts».
 * Ни разметку, ни пропсы компонентов при этом менять не придётся.
 *
 * Ошибки: клиент кидает ApiError (lib/api/errors.ts) — страница уже ловит его и
 * показывает состояние ошибки, так что дополнительная обработка не нужна.
 */

/** Заголовок страницы (H1 и последняя хлебная крошка). */
export async function getPaymentTitle(): Promise<string> {
  return paymentTitle;
}

/** Текстовая часть страницы — левая колонка. */
export async function listPaymentBlocks(): Promise<PaymentBlock[]> {
  return paymentBlocks;
}

/** Промо-карточки правой колонки. */
export async function listPaymentPromos(): Promise<PaymentPromoCard[]> {
  return paymentPromos;
}

/** Конфигурация формы подписки (подписи, плейсхолдер, ссылка на политику). */
export async function getSubscribeConfig(): Promise<PaymentSubscribeConfig> {
  return paymentSubscribe;
}

/**
 * Весь контент страницы одним вызовом. Отдельные функции выше сохранены, потому
 * что на реальном бэкенде это, скорее всего, будут разные эндпоинты (текст
 * страницы и промо-баннеры почти наверняка живут порознь): тогда здесь останется
 * тот же Promise.all, а страница не заметит разницы.
 */
export async function getPaymentPage(): Promise<PaymentPageContent> {
  const [title, blocks, promos, subscribe] = await Promise.all([
    getPaymentTitle(),
    listPaymentBlocks(),
    listPaymentPromos(),
    getSubscribeConfig(),
  ]);

  return { title, blocks, promos, subscribe };
}

/**
 * Подписка на рассылку живёт в общем модуле (форма есть и на других страницах
 * шаблона). Реэкспортируем, чтобы существующие импорты из этого файла работали.
 */
export { subscribeToNewsletter } from "./newsletter";
