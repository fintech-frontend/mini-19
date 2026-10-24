import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
  return typeof error === "object" && error != null && "status" in error;
}

/** Сообщение из тела ответа DRF: { error | message | detail } или { field: ["..."] }. */
function messageFromBody(data: unknown): string | null {
  if (data && typeof data === "object") {
    const record = data as Record<string, unknown>;
    for (const key of ["error", "message", "detail"]) {
      if (typeof record[key] === "string") return record[key] as string;
    }
    const firstList = Object.values(record).find(
      (value): value is string[] => Array.isArray(value) && typeof value[0] === "string"
    );
    if (firstList) return firstList[0];
  }
  // HTML-страницу ошибки (nginx/Django) пользователю не показываем.
  const text = typeof data === "string" ? data.trim() : "";
  return text && !text.startsWith("<") ? text : null;
}

/** HTTP-статус ошибки RTK Query, иначе null. */
export function getErrorStatus(error: unknown): number | null {
  if (!isFetchBaseQueryError(error)) return null;
  if (typeof error.status === "number") return error.status;
  return error.status === "PARSING_ERROR" ? error.originalStatus : null;
}

/**
 * Текст ошибки для пользователя. Понимает ошибки RTK Query (из хуков и `.unwrap()`);
 * всё остальное (сбои в самом коде) заменяет на `fallback`.
 */
export function getErrorMessage(error: unknown, fallback: string): string {
  if (!isFetchBaseQueryError(error)) return fallback;

  if (error.status === "FETCH_ERROR") {
    return "Не удалось подключиться к серверу. Проверьте интернет-соединение.";
  }
  if (error.status === "CUSTOM_ERROR" || error.status === "TIMEOUT_ERROR") {
    return error.error;
  }

  const status = getErrorStatus(error);
  const message = messageFromBody(error.data);
  if (message) return message;
  if (status === 404) return "Запрос не выполнен: адрес недоступен на сервере (404)";
  return status != null ? `Запрос не выполнен (${status})` : fallback;
}
