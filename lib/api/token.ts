/**
 * Хранение JWT-токенов в localStorage конкретного браузера. Токен получаем из
 * ответа /user/auth/login/ или /auth/auth/register/ (см. lib/api/auth.ts,
 * extractAccessToken/extractRefreshToken).
 */
const ACCESS_TOKEN_KEY = "mini19:access_token";
const REFRESH_TOKEN_KEY = "mini19:refresh_token";

function readKey(key: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeKey(key: string, value: string | null): void {
  if (typeof window === "undefined") return;
  try {
    if (value) {
      window.localStorage.setItem(key, value);
    } else {
      window.localStorage.removeItem(key);
    }
  } catch {
    // Приватный режим / квота исчерпана — молча пропускаем.
  }
}

export function getAccessToken(): string | null {
  return readKey(ACCESS_TOKEN_KEY);
}

export function setAccessToken(token: string | null): void {
  writeKey(ACCESS_TOKEN_KEY, token);
}

export function getRefreshToken(): string | null {
  return readKey(REFRESH_TOKEN_KEY);
}

export function setRefreshToken(token: string | null): void {
  writeKey(REFRESH_TOKEN_KEY, token);
}

export function isAuthenticated(): boolean {
  return getAccessToken() !== null;
}

/**
 * Id текущего пользователя из payload access-токена (claim `user_id` — стандарт
 * SimpleJWT). Отдельного эндпоинта "текущий пользователь" у бэкенда нет, а id
 * нужен, чтобы привязывать заказы к пользователю и отбирать их в кабинете.
 * Подпись не проверяем — это делает сервер; здесь только чтение claim'а.
 */
export function getCurrentUserId(): number | null {
  const token = getAccessToken();
  const payload = token?.split(".")[1];
  if (!payload) return null;
  try {
    const json = atob(payload.replace(/-/g, "+").replace(/_/g, "/"));
    const userId = Number((JSON.parse(json) as Record<string, unknown>).user_id);
    return Number.isInteger(userId) ? userId : null;
  } catch {
    return null;
  }
}

export function clearAuthTokens(): void {
  setAccessToken(null);
  setRefreshToken(null);
}
