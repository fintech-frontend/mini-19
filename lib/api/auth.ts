import { api } from "./client";
import type { AuthResponse } from "@/types/api";

/**
 * Пример ответа login/register в Postman-документации не сохранён ("No response
 * body"), поэтому точное имя поля с токеном неизвестно. В коллекции переменная
 * авторизации называется {{access_token}}, а бэкенд похож на Django REST —
 * поэтому перебираем самые вероятные имена полей вместо того, чтобы гадать один
 * конкретный формат.
 */
const ACCESS_TOKEN_KEYS = ["access_token", "access", "token", "key"];
const REFRESH_TOKEN_KEYS = ["refresh_token", "refresh"];

function extractField(response: unknown, keys: string[]): string | null {
  if (!response || typeof response !== "object") return null;
  const record = response as Record<string, unknown>;
  for (const key of keys) {
    if (typeof record[key] === "string") return record[key] as string;
  }
  // Иногда токены приходят вложенными: { data: {...} } или { user: {...}, tokens: {...} }.
  for (const value of Object.values(record)) {
    if (value && typeof value === "object") {
      const nested = extractField(value, keys);
      if (nested) return nested;
    }
  }
  return null;
}

export function extractAccessToken(response: unknown): string | null {
  return extractField(response, ACCESS_TOKEN_KEYS);
}

export function extractRefreshToken(response: unknown): string | null {
  return extractField(response, REFRESH_TOKEN_KEYS);
}

export async function login(email: string, password: string): Promise<AuthResponse> {
  return api.post<AuthResponse>("/user/auth/login/", { email, password }, { auth: false });
}

export interface RegisterInput {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password2: string;
  otp_type?: "otp" | "link";
}

/** Путь совпадает с документацией дословно — да, там действительно "/auth/auth/register/". */
export async function register(input: RegisterInput): Promise<AuthResponse> {
  return api.post<AuthResponse>("/auth/auth/register/", { otp_type: "otp", ...input }, { auth: false });
}

export async function verifyRegisterOtp(email: string, code: string): Promise<AuthResponse> {
  return api.post<AuthResponse>("/user/auth/register/otp/verify/", { email, code }, { auth: false });
}

export async function resendRegisterOtp(email: string): Promise<AuthResponse> {
  return api.post<AuthResponse>("/user/auth/resend/otp/", { email }, { auth: false });
}

export async function sendForgetPasswordOtp(email: string): Promise<{ message: string }> {
  return api.post<{ message: string }>("/user/auth/forget-password/otp/", { email }, { auth: false });
}

export async function verifyForgetPasswordOtp(email: string, code: string): Promise<AuthResponse> {
  return api.post<AuthResponse>("/user/auth/forget-password/otp/verify/", { email, code }, { auth: false });
}

export async function setNewPassword(email: string, newPassword: string, newPasswordAgain: string): Promise<AuthResponse> {
  return api.post<AuthResponse>(
    "/user/auth/forget-password/set/",
    { email, new_password: newPassword, new_password_again: newPasswordAgain },
    { auth: false }
  );
}

/** Требует Bearer-токен. Открывает 15-минутное окно, в течение которого доступен changePassword(). */
export async function openChangePasswordWindow(): Promise<{ message: string }> {
  return api.get<{ message: string }>("/user/auth/change-password/");
}

export async function changePassword(oldPassword: string, newPassword: string, newPassword2: string): Promise<AuthResponse> {
  return api.post<AuthResponse>("/user/auth/change-password/", {
    old_password: oldPassword,
    new_password: newPassword,
    new_password2: newPassword2,
  });
}

export async function openChangeEmailWindow(): Promise<AuthResponse> {
  return api.get<AuthResponse>("/user/auth/change-email/");
}

export async function requestChangeEmail(email: string): Promise<AuthResponse> {
  return api.post<AuthResponse>("/user/auth/change-email/", { email });
}

export async function verifyChangeEmail(code: string): Promise<AuthResponse> {
  return api.post<AuthResponse>("/user/auth/change-email/verification/", { code });
}

export async function resendChangeEmailOtp(): Promise<AuthResponse> {
  return api.post<AuthResponse>("/user/auth/change-email/verification/resend/otp/", undefined);
}
