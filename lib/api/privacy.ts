import { privacyBlocks, privacyTitle } from "@/data/privacy-data";
import type { PrivacyBlock, PrivacyPageContent } from "@/types/privacy";

/**
 * API layer страницы «Политика конфиденциальности» (/privacy-policy).
 *
 * ─── Что уже есть на бэкенде ────────────────────────────────────────────────
 * В документации проекта (см. комментарий в lib/api/config.ts) описан только
 * раздел shop: categories / brands / products / carts / cart-items / orders +
 * auth. Эндпоинта с текстовыми страницами там нет, и на живом сервере он не
 * отвечает. Выдумывать маршрут («/pages/privacy-policy/») нельзя — это дало бы
 * гарантированный 404.
 *
 * ─── Как подключить реальный бэкенд ─────────────────────────────────────────
 * Эта функция — единственное место, которое знает об источнике текста. Когда
 * появится документация, достаточно заменить одну строку на
 *
 *     const dto = await api.get<ApiPrivacyPage>("/<путь из документации>/", { auth: false });
 *     return { title: dto.title, blocks: dto.blocks.map(mapBlock) };
 *
 * Разметку и компоненты менять не придётся.
 */

/** Заголовок страницы (H1 и последняя хлебная крошка). */
export async function getPrivacyTitle(): Promise<string> {
  return privacyTitle;
}

/** Текст документа блоками. */
export async function listPrivacyBlocks(): Promise<PrivacyBlock[]> {
  return privacyBlocks;
}

/** Всё содержимое страницы одним вызовом. */
export async function getPrivacyPage(): Promise<PrivacyPageContent> {
  const [title, blocks] = await Promise.all([getPrivacyTitle(), listPrivacyBlocks()]);
  return { title, blocks };
}
