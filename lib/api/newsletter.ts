import type { SubscribeRequestPayload, SubscribeRequestResult } from "@/types/reference";
import { api } from "./client";

/**
 * API layer подписки на рассылку.
 *
 * Форма живёт в правой колонке сразу нескольких страниц (/oplata, /vopros-otvet),
 * поэтому запрос описан здесь один раз, а не копируется в модуль каждой страницы.
 *
 * ─── Что уже есть на бэкенде ────────────────────────────────────────────────
 * В Postman-документации проекта (см. комментарий в lib/api/config.ts) описан
 * только раздел shop: categories / brands / products / carts / cart-items /
 * orders + auth. Маршрута подписки там нет, поэтому выдумывать его нельзя.
 *
 * ─── Как подключить реальный бэкенд ─────────────────────────────────────────
 * Путь не «зашит» в код, а читается из переменной окружения (см. .env.example).
 * Как только бэкенд отдаст маршрут — достаточно прописать
 * NEXT_PUBLIC_SUBSCRIBE_ENDPOINT=/subscribe/ и ничего в UI не менять.
 */
const SUBSCRIBE_ENDPOINT = process.env.NEXT_PUBLIC_SUBSCRIBE_ENDPOINT?.trim();

/**
 * Отправка адреса в рассылку.
 *
 * Если эндпоинт настроен — уходит обычный POST через общий клиент (с ApiError на
 * не-2xx, который форма показывает пользователю). Если нет — адрес никуда не
 * уходит, и функция честно возвращает это в `ok: false`, а не имитирует успех.
 */
export async function subscribeToNewsletter(
  payload: SubscribeRequestPayload
): Promise<SubscribeRequestResult> {
  if (!SUBSCRIBE_ENDPOINT) {
    return {
      ok: false,
      message: "Подписка ещё не подключена к серверу. Попробуйте позже.",
    };
  }

  await api.post(SUBSCRIBE_ENDPOINT, payload, { auth: false });

  return { ok: true, message: "Спасибо! Вы подписаны на рассылку." };
}
