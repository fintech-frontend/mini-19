"use client";

import { useId, useState, type FormEvent } from "react";
import Link from "next/link";
import styles from "@/app/contacts/contacts.module.css";
import { submitConsultRequest } from "@/lib/api/contacts";
import { ApiError } from "@/lib/api/errors";
import type { ConsultFormConfig, ConsultFormField } from "@/types/contacts";

type FieldName = ConsultFormField["name"];
type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName | "consent", string>>;

const EMPTY: Values = { name: "", phone: "", message: "" };

/**
 * Секция «У вас есть вопросы? С радостью ответим на них!» (`.consult` оригинала):
 * заголовок по центру и форма в две колонки — имя и телефон в ряд, сообщение и
 * панель отправки на всю ширину. На мобильном форма схлопывается в одну колонку,
 * а кнопка встаёт над чекбоксом.
 *
 * Отправка идёт через lib/api/contacts.ts — компонент не знает ни адреса бэкенда,
 * ни формата запроса.
 */
export function ConsultSection({ config }: { config: ConsultFormConfig }) {
  const formId = useId();
  const [values, setValues] = useState<Values>(EMPTY);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting">("idle");
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);

  function setField(name: FieldName, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
    // Ошибку поля снимаем сразу, как только пользователь начал его исправлять.
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  }

  function validate(): Errors {
    const next: Errors = {};
    for (const field of config.fields) {
      if (field.required && !values[field.name].trim()) {
        next[field.name] = "Заполните это поле";
      }
    }
    if (!consent) next.consent = "Нужно согласие на обработку персональных данных";
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setResult(null);
      return;
    }

    setStatus("submitting");
    setResult(null);
    try {
      const response = await submitConsultRequest({
        name: values.name.trim(),
        phone: values.phone.trim(),
        message: values.message.trim(),
      });
      setResult(response);
      if (response.ok) {
        setValues(EMPTY);
        setConsent(false);
      }
    } catch (error) {
      setResult({
        ok: false,
        message:
          error instanceof ApiError
            ? error.message
            : "Не удалось отправить сообщение. Попробуйте ещё раз.",
      });
    } finally {
      setStatus("idle");
    }
  }

  const submitting = status === "submitting";
  const textFields = config.fields.filter((field) => field.name !== "message");
  const messageField = config.fields.find((field) => field.name === "message");

  return (
    <section className={styles.consult}>
      <div className={styles.container}>
        <h2 className={`${styles.text33} ${styles.bold} ${styles.black2} ${styles.consultTitle}`}>
          {config.titleLine1} <br /> {config.titleLine2}
        </h2>

        <form className={styles.consultForm} onSubmit={handleSubmit} noValidate>
          {textFields.map((field) => (
            <Field
              key={field.name}
              id={`${formId}-${field.name}`}
              field={field}
              value={values[field.name]}
              error={errors[field.name]}
              disabled={submitting}
              onChange={(value) => setField(field.name, value)}
            />
          ))}

          {messageField ? (
            <Field
              id={`${formId}-${messageField.name}`}
              field={messageField}
              value={values.message}
              error={errors.message}
              disabled={submitting}
              multiline
              onChange={(value) => setField("message", value)}
            />
          ) : null}

          <div className={`${styles.consultFormNav} ${styles.full}`}>
            <button
              type="submit"
              className={`${styles.btnBlue} ${styles.consultFormBtn}`}
              disabled={submitting}
            >
              <span>{submitting ? "Отправляем…" : config.submitLabel}</span>
            </button>

            <div className={`${styles.mCheck} ${errors.consent ? styles.mCheckError : ""}`}>
              <input
                id={`${formId}-consent`}
                type="checkbox"
                checked={consent}
                disabled={submitting}
                onChange={(event) => {
                  setConsent(event.target.checked);
                  setErrors((prev) => (prev.consent ? { ...prev, consent: undefined } : prev));
                }}
              />
              <label htmlFor={`${formId}-consent`}>
                <span>
                  {config.consentText}{" "}
                  <Link href={config.consentLinkHref}>{config.consentLinkLabel}</Link>
                </span>
              </label>
            </div>
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
      </div>
    </section>
  );
}

/** Поле формы: подпись с красной звёздочкой, input или textarea, текст ошибки. */
function Field({
  id,
  field,
  value,
  error,
  disabled,
  multiline = false,
  onChange,
}: {
  id: string;
  field: ConsultFormField;
  value: string;
  error?: string;
  disabled: boolean;
  multiline?: boolean;
  onChange: (value: string) => void;
}) {
  const errorId = `${id}-error`;
  const className = [
    styles.fg,
    multiline ? styles.full : "",
    error ? styles.fgError : "",
  ]
    .filter(Boolean)
    .join(" ");

  const shared = {
    id,
    name: field.name,
    value,
    disabled,
    placeholder: field.placeholder,
    "aria-required": field.required,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? errorId : undefined,
    onChange: (event: { target: { value: string } }) => onChange(event.target.value),
  };

  return (
    <fieldset className={className}>
      <label htmlFor={id}>
        {field.label} {field.required ? <span className={styles.required}>*</span> : null}:
      </label>
      {multiline ? (
        <textarea rows={10} maxLength={2000} {...shared} />
      ) : (
        <input
          type={field.name === "phone" ? "tel" : "text"}
          maxLength={400}
          {...shared}
        />
      )}
      {error ? (
        <span id={errorId} className={styles.errorText}>
          {error}
        </span>
      ) : null}
    </fieldset>
  );
}
