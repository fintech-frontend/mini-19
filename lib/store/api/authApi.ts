import { baseApi } from "./baseApi";
import { setAccessToken, setRefreshToken } from "./token";
import type { AuthResponse } from "@/types/api";

/**
 * Пример ответа login в Postman-коллекции не сохранён, поэтому точное имя поля с
 * токеном из документации неизвестно. Сервер подтверждённо использует SimpleJWT
 * (ошибка 401 "token_not_valid" / "AccessToken"), у которого стандартные поля
 * `access`/`refresh`; в коллекции переменная называется {{access_token}}. Поэтому
 * проверяем оба варианта имён.
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

/** Ответ auth-эндпоинтов, приведённый к токенам. `accessToken: null` — сервер токен не выдал. */
export interface AuthTokens {
  accessToken: string | null;
  refreshToken: string | null;
}

function toAuthTokens(response: AuthResponse): AuthTokens {
  return {
    accessToken: extractField(response, ACCESS_TOKEN_KEYS),
    refreshToken: extractField(response, REFRESH_TOKEN_KEYS),
  };
}

/** Сохраняет токены после успешного запроса — компонентам не нужно знать про localStorage. */
async function persistTokens(_: unknown, { queryFulfilled }: { queryFulfilled: Promise<{ data: AuthTokens }> }) {
  try {
    const { data } = await queryFulfilled;
    if (data.accessToken) {
      setAccessToken(data.accessToken);
      setRefreshToken(data.refreshToken);
    }
  } catch {
    // Ошибку обрабатывает вызывающий компонент через unwrap().
  }
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface RegisterInput {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password2: string;
  otp_type?: "otp" | "link";
}

export interface EmailCodeInput {
  email: string;
  code: string;
}

export interface SetNewPasswordInput {
  email: string;
  new_password: string;
  new_password_again: string;
}

export interface ChangePasswordInput {
  old_password: string;
  new_password: string;
  new_password2: string;
}

export interface MessageResponse {
  message: string;
}

/**
 * Эндпоинты авторизации (раздел user/auth Postman-коллекции).
 * Старый путь "/auth/auth/register/" на сервере отвечает 404 — актуальный префикс
 * /user/auth/. Эндпоинты, открывающие «окно» смены пароля/email, — GET с побочным
 * эффектом, поэтому описаны как мутации: их результат нельзя брать из кэша.
 * `extraOptions: { auth: true }` — запрос с Bearer-токеном.
 */
export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<AuthTokens, LoginInput>({
      query: (body) => ({ url: "/user/auth/login/", method: "POST", body }),
      transformResponse: toAuthTokens,
      onQueryStarted: persistTokens,
    }),

    register: build.mutation<AuthResponse, RegisterInput>({
      query: (input) => ({
        url: "/user/auth/register/",
        method: "POST",
        body: { otp_type: "otp", ...input },
      }),
    }),

    verifyRegisterOtp: build.mutation<AuthTokens, EmailCodeInput>({
      query: (body) => ({ url: "/user/auth/register/otp/verify/", method: "POST", body }),
      transformResponse: toAuthTokens,
      onQueryStarted: persistTokens,
    }),

    resendRegisterOtp: build.mutation<AuthResponse, { email: string }>({
      query: (body) => ({ url: "/user/auth/resend/otp/", method: "POST", body }),
    }),

    sendForgetPasswordOtp: build.mutation<MessageResponse, { email: string }>({
      query: (body) => ({ url: "/user/auth/forget-password/otp/", method: "POST", body }),
    }),

    verifyForgetPasswordOtp: build.mutation<AuthResponse, EmailCodeInput>({
      query: (body) => ({ url: "/user/auth/forget-password/otp/verify/", method: "POST", body }),
    }),

    setNewPassword: build.mutation<AuthTokens, SetNewPasswordInput>({
      query: (body) => ({ url: "/user/auth/forget-password/set/", method: "POST", body }),
      transformResponse: toAuthTokens,
      onQueryStarted: persistTokens,
    }),

    /** Требует Bearer-токен. Открывает 15-минутное окно, в течение которого доступен changePassword. */
    openChangePasswordWindow: build.mutation<MessageResponse, void>({
      query: () => "/user/auth/change-password/",
      extraOptions: { auth: true },
    }),

    changePassword: build.mutation<AuthResponse, ChangePasswordInput>({
      query: (body) => ({ url: "/user/auth/change-password/", method: "POST", body }),
      extraOptions: { auth: true },
    }),

    openChangeEmailWindow: build.mutation<AuthResponse, void>({
      query: () => "/user/auth/change-email/",
      extraOptions: { auth: true },
    }),

    requestChangeEmail: build.mutation<AuthResponse, { email: string }>({
      query: (body) => ({ url: "/user/auth/change-email/", method: "POST", body }),
      extraOptions: { auth: true },
    }),

    verifyChangeEmail: build.mutation<AuthResponse, { code: string }>({
      query: (body) => ({ url: "/user/auth/change-email/verification/", method: "POST", body }),
      extraOptions: { auth: true },
    }),

    resendChangeEmailOtp: build.mutation<AuthResponse, void>({
      query: () => ({ url: "/user/auth/change-email/verification/resend/otp/", method: "POST" }),
      extraOptions: { auth: true },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useVerifyRegisterOtpMutation,
  useResendRegisterOtpMutation,
  useSendForgetPasswordOtpMutation,
  useVerifyForgetPasswordOtpMutation,
  useSetNewPasswordMutation,
  useOpenChangePasswordWindowMutation,
  useChangePasswordMutation,
  useOpenChangeEmailWindowMutation,
  useRequestChangeEmailMutation,
  useVerifyChangeEmailMutation,
  useResendChangeEmailOtpMutation,
} = authApi;
