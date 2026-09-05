"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { FormField } from "./FormField";
import { PasswordField } from "./PasswordField";
import {
  register,
  verifyRegisterOtp,
  resendRegisterOtp,
  extractAccessToken,
  extractRefreshToken,
} from "@/lib/api/auth";
import { setAccessToken, setRefreshToken } from "@/lib/api/token";
import { ApiError } from "@/lib/api/errors";

interface RegisterFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialFields: RegisterFields = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

type Step = "form" | "otp";

export function RegisterForm() {
  const [step, setStep] = useState<Step>("form");
  const [fields, setFields] = useState<RegisterFields>(initialFields);
  const [terms, setTerms] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const [otpCode, setOtpCode] = useState("");
  const [otpSubmitted, setOtpSubmitted] = useState(false);
  const [otpError, setOtpError] = useState<string | null>(null);
  const [otpLoading, setOtpLoading] = useState(false);
  const [resendMessage, setResendMessage] = useState<string | null>(null);
  const [resending, setResending] = useState(false);

  const router = useRouter();

  function updateField(field: keyof RegisterFields) {
    return (e: ChangeEvent<HTMLInputElement>) =>
      setFields((prev) => ({ ...prev, [field]: e.target.value }));
  }

  const passwordMismatch = Boolean(fields.password) && fields.password !== fields.confirmPassword;

  const errors = [
    !fields.email && "Поле Email не может быть пустым",
    !fields.firstName && "Заполните поле Имя",
    !fields.lastName && "Заполните поле Фамилия",
    !fields.password && "Введите пароль",
    passwordMismatch && "Пароли не совпадают",
    !terms && "Вы должны согласиться с условиями обслуживания",
    !privacy && "Вы должны согласиться с обработкой персональных данных",
  ].filter((error): error is string => Boolean(error));

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (loading) return;
    setSubmitted(true);
    setApiError(null);
    if (errors.length > 0) return;

    setLoading(true);
    try {
      await register({
        first_name: fields.firstName,
        last_name: fields.lastName,
        email: fields.email,
        password: fields.password,
        password2: fields.confirmPassword,
      });
      setStep("otp");
    } catch (err) {
      setApiError(err instanceof ApiError ? err.message : "Не удалось подключиться к серверу.");
    } finally {
      setLoading(false);
    }
  }

  async function handleOtpSubmit(e: FormEvent) {
    e.preventDefault();
    if (otpLoading) return;
    setOtpSubmitted(true);
    setOtpError(null);
    if (!otpCode) return;

    setOtpLoading(true);
    try {
      const response = await verifyRegisterOtp(fields.email, otpCode);
      const accessToken = extractAccessToken(response);
      if (accessToken) {
        setAccessToken(accessToken);
        setRefreshToken(extractRefreshToken(response));
        router.push("/account");
        return;
      }
      router.push("/my-account?notice=registered");
    } catch (err) {
      setOtpError(err instanceof ApiError ? err.message : "Не удалось подключиться к серверу.");
    } finally {
      setOtpLoading(false);
    }
  }

  async function handleResend() {
    if (resending) return;
    setResendMessage(null);
    setOtpError(null);
    setResending(true);
    try {
      await resendRegisterOtp(fields.email);
      setResendMessage("Код отправлен повторно");
    } catch (err) {
      setOtpError(err instanceof ApiError ? err.message : "Не удалось отправить код повторно.");
    } finally {
      setResending(false);
    }
  }

  if (step === "otp") {
    return (
      <form onSubmit={handleOtpSubmit} className="space-y-4" noValidate>
        <p className="text-sm leading-relaxed text-neutral-600">
          Мы отправили код подтверждения на <strong className="font-semibold text-neutral-900">{fields.email}</strong>.
          Введите его ниже, чтобы завершить регистрацию.
        </p>

        {otpError && (
          <div className="rounded-lg border border-dashed border-red-300 bg-red-50 p-3 text-sm text-red-600">
            {otpError}
          </div>
        )}
        {resendMessage && (
          <div className="rounded-lg border border-dashed border-blue-300 bg-blue-50 p-3 text-sm text-blue-700">
            {resendMessage}
          </div>
        )}

        <FormField
          label="Код подтверждения"
          required
          placeholder="Введите код из письма"
          value={otpCode}
          onChange={(e) => setOtpCode(e.target.value)}
          error={otpSubmitted && !otpCode}
        />

        <button
          type="submit"
          disabled={otpLoading}
          className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-700 disabled:opacity-60"
        >
          {otpLoading ? "Проверяем..." : "Подтвердить"}
        </button>

        <button
          type="button"
          onClick={handleResend}
          disabled={resending}
          className="w-full rounded-lg bg-blue-50 py-2.5 text-center text-sm font-medium text-blue-600 transition-colors hover:bg-blue-100 disabled:opacity-60"
        >
          {resending ? "Отправляем..." : "Отправить код повторно"}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {submitted && errors.length > 0 && (
        <div className="space-y-1 rounded-lg border border-dashed border-red-300 bg-red-50 p-4 text-sm text-red-600">
          {errors.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      )}

      {apiError && (
        <div className="rounded-lg border border-dashed border-red-300 bg-red-50 p-3 text-sm text-red-600">
          {apiError}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          label="Имя"
          required
          placeholder="Ваше имя"
          value={fields.firstName}
          onChange={updateField("firstName")}
          error={submitted && !fields.firstName}
        />
        <FormField
          label="Фамилия"
          required
          placeholder="Ваша фамилия"
          value={fields.lastName}
          onChange={updateField("lastName")}
          error={submitted && !fields.lastName}
        />
      </div>

      <FormField
        label="Email"
        required
        type="email"
        placeholder="Введите ваш email адрес"
        value={fields.email}
        onChange={updateField("email")}
        error={submitted && !fields.email}
      />

      <PasswordField
        label="Пароль"
        required
        placeholder="Введите пароль"
        value={fields.password}
        onChange={(value) => setFields((prev) => ({ ...prev, password: value }))}
        error={submitted && !fields.password}
      />

      <PasswordField
        label="Подтвердите пароль"
        required
        placeholder="Повторите пароль"
        value={fields.confirmPassword}
        onChange={(value) => setFields((prev) => ({ ...prev, confirmPassword: value }))}
        error={submitted && passwordMismatch}
      />

      <div className="space-y-2">
        <label className="flex items-start gap-2 text-sm text-neutral-600">
          <input
            type="checkbox"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
            className={`mt-0.5 h-4 w-4 shrink-0 rounded border-neutral-300 ${
              submitted && !terms ? "border-red-400 ring-1 ring-red-400" : ""
            }`}
          />
          Согласен с условиями обслуживания
        </label>
        <label className="flex items-start gap-2 text-sm text-neutral-600">
          <input
            type="checkbox"
            checked={privacy}
            onChange={(e) => setPrivacy(e.target.checked)}
            className={`mt-0.5 h-4 w-4 shrink-0 rounded border-neutral-300 ${
              submitted && !privacy ? "border-red-400 ring-1 ring-red-400" : ""
            }`}
          />
          Согласен с обработкой персональных данных в соответствии с политикой конфиденциальности
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-700 disabled:opacity-60"
      >
        {loading ? "Регистрируем..." : "Зарегистрироваться"}
      </button>
    </form>
  );
}
