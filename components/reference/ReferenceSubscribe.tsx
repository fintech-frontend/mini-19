"use client";

import { useId, useState, type FormEvent } from "react";
import Link from "next/link";
import styles from "@/styles/reference-page.module.css";
import { useSubscribeToNewsletterMutation } from "@/lib/store/api";
import { getErrorMessage } from "@/lib/store/api";
import type { ReferenceSubscribeConfig } from "@/types/reference";

/** Минимальная проверка адреса — того же уровня, что и `type="email"` в оригинале. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Форма подписки на рассылку под промо-карточками (`.subscribe` оригинала):
 * заголовок, описание, поле email и кнопка, ниже — чекбокс согласия.
 *
 * На планшете (577–992px) поле и кнопка встают в строку, на десктопе и мобильном
 * — друг под другом. Отправка идёт через RTK Query (lib/store/api/contentApi.ts): компонент не знает
 * ни адреса бэкенда, ни формата запроса.
 */
export function ReferenceSubscribe({ config }: { config: ReferenceSubscribeConfig }) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [consentError, setConsentError] = useState(false);
  const [subscribeToNewsletter, { isLoading: submitting }] = useSubscribeToNewsletterMutation();
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const value = email.trim();
    const nextEmailError = !value
      ? "Укажите email"
      : !EMAIL_RE.test(value)
        ? "Проверьте адрес электронной почты"
        : null;

    setEmailError(nextEmailError);
    setConsentError(!consent);
    if (nextEmailError || !consent) {
      setResult(null);
      return;
    }

    setResult(null);
    try {
      const response = await subscribeToNewsletter({ email: value }).unwrap();
      setResult(response);
      if (response.ok) {
        setEmail("");
        setConsent(false);
      }
    } catch (error) {
      setResult({
        ok: false,
        message: getErrorMessage(error, "Не удалось оформить подписку. Попробуйте ещё раз."),
      });
    }
  }

  return (
    <form className={styles.subscribe} onSubmit={handleSubmit} noValidate>
      <div className={styles.subscribeTop}>
        <div className={`${styles.subscribeTitle} ${styles.text18} ${styles.medium}`}>
          {config.title}
        </div>
        <div className={`${styles.subscribeDesc} ${styles.text14}`}>{config.description}</div>
      </div>

      <div className={styles.subscribeWrap}>
        <fieldset className={`${styles.fg} ${emailError ? styles.fgError : ""}`}>
          <input
            id={`${id}-email`}
            type="email"
            name="email_subscribe"
            maxLength={400}
            placeholder={config.placeholder}
            value={email}
            disabled={submitting}
            aria-label={config.title}
            aria-required="true"
            aria-invalid={Boolean(emailError)}
            aria-describedby={emailError ? `${id}-email-error` : undefined}
            onChange={(event) => {
              setEmail(event.target.value);
              if (emailError) setEmailError(null);
            }}
          />
          {emailError ? (
            <span id={`${id}-email-error`} className={styles.errorText}>
              {emailError}
            </span>
          ) : null}
        </fieldset>

        <button
          type="submit"
          className={`${styles.btnBlue} ${styles.subscribeBtn}`}
          disabled={submitting}
        >
          <span>{submitting ? "Отправляем…" : config.submitLabel}</span>
        </button>
      </div>

      <div className={`${styles.mCheck} ${consentError ? styles.mCheckError : ""}`}>
        <input
          id={`${id}-consent`}
          type="checkbox"
          checked={consent}
          disabled={submitting}
          onChange={(event) => {
            setConsent(event.target.checked);
            if (consentError) setConsentError(false);
          }}
        />
        <label htmlFor={`${id}-consent`}>
          <span>
            {config.consentText}{" "}
            <Link href={config.consentLinkHref}>{config.consentLinkLabel}</Link>
          </span>
        </label>
      </div>

      {result ? (
        <p
          className={`${styles.stateBox} ${styles.formResponse} ${
            result.ok ? styles.stateSuccess : styles.stateError
          }`}
          role="status"
          aria-live="polite"
        >
          {result.message}
        </p>
      ) : null}
    </form>
  );
}
