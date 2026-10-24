/**
 * Фильтры для полей, куда допустимы только цифры: ввод букв просто игнорируется.
 * Применяются в onChange, поэтому работают и при вставке из буфера.
 */

/** Телефон: цифры и один «+» в начале. Пробелы, скобки и дефисы убираются. */
export function sanitizePhone(value: string): string {
  const digits = value.replace(/\D/g, "");
  return value.trimStart().startsWith("+") ? `+${digits}` : digits;
}

/** Только цифры (id, количество, номер заказа и т. п.). */
export function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

/** Сумма: цифры и одна десятичная точка. */
export function sanitizeAmount(value: string): string {
  const cleaned = value.replace(/,/g, ".").replace(/[^\d.]/g, "");
  const [int, ...rest] = cleaned.split(".");
  return rest.length ? `${int}.${rest.join("")}` : int;
}

/** Атрибуты для поля телефона: цифровая клавиатура на телефонах + разумный лимит длины. */
export const phoneInputProps = { type: "tel", inputMode: "tel", autoComplete: "tel", maxLength: 16 } as const;
