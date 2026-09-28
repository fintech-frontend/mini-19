import { faqItems, faqPromos, faqSubscribe, faqTitle } from "@/mocks/faq";
import type { FAQItem, FAQPageContent } from "@/types/faq";
import type { ReferencePromoCard, ReferenceSubscribeConfig } from "@/types/reference";

/**
 * API layer страницы «Вопрос-ответ» (/vopros-otvet).
 *
 * ─── Что уже есть на бэкенде ────────────────────────────────────────────────
 * В Postman-документации проекта (см. комментарий в lib/api/config.ts) описан
 * только раздел shop: categories / brands / products / carts / cart-items /
 * orders + auth. Раздела FAQ там нет, и на живом сервере он не отвечает.
 * Выдумывать маршрут («/faq/», «/questions/») здесь нельзя — это дало бы
 * гарантированный 404 и сломало бы страницу. Пока источник — mocks/faq.ts,
 * и он подключён только здесь: UI о нём не знает.
 *
 * ─── Как подключить реальный бэкенд ─────────────────────────────────────────
 * Функции ниже — единственное место, которое знает об источнике данных. UI
 * (app/vopros-otvet/page.tsx и components/faq/*) работает с типами из
 * types/faq.ts. Когда появится документация, достаточно заменить одну строку
 * `return <моки>` на
 *
 *     const dto = await api.get<ApiFaqItem[]>("/<путь из документации>/", { auth: false });
 *     return dto.map(mapFaqItem);
 *
 * где `api` — общий клиент из lib/api/client.ts (он уже берёт базовый URL из
 * NEXT_PUBLIC_API_URL, см. lib/api/config.ts — хардкодить адрес не нужно),
 * а `mapFaqItem` — маппер «ответ бэкенда → FAQItem». Ни разметку, ни пропсы
 * компонентов при этом менять не придётся.
 *
 * Ошибки: клиент кидает ApiError (lib/api/errors.ts) — страница уже ловит его и
 * показывает состояние ошибки, так что дополнительная обработка не нужна.
 */

/** Заголовок страницы (H1 и последняя хлебная крошка). */
export async function getFaqTitle(): Promise<string> {
  return faqTitle;
}

/**
 * Список вопросов и ответов.
 *
 * Пустой массив — валидный ответ: страница показывает empty state, а не ошибку.
 */
export async function listFaqItems(): Promise<FAQItem[]> {
  return faqItems;
}

/** Промо-карточки правой колонки. */
export async function listFaqPromos(): Promise<ReferencePromoCard[]> {
  return faqPromos;
}

/** Конфигурация формы подписки (подписи, плейсхолдер, ссылка на политику). */
export async function getFaqSubscribeConfig(): Promise<ReferenceSubscribeConfig> {
  return faqSubscribe;
}

/**
 * Весь контент страницы одним вызовом. Отдельные функции выше сохранены, потому
 * что на реальном бэкенде это, скорее всего, будут разные эндпоинты (FAQ и
 * промо-баннеры почти наверняка живут порознь): тогда здесь останется тот же
 * Promise.all, а страница не заметит разницы.
 */
export async function getFaqPage(): Promise<FAQPageContent> {
  const [title, items, promos, subscribe] = await Promise.all([
    getFaqTitle(),
    listFaqItems(),
    listFaqPromos(),
    getFaqSubscribeConfig(),
  ]);

  return { title, items, promos, subscribe };
}
