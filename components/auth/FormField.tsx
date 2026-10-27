import { InputHTMLAttributes } from "react";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  error?: boolean;
}

export function FormField({ label, required, error, className, placeholder, ...props }: FormFieldProps) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm text-neutral-700">
        {label} {required && "*"}:
      </span>
      <input
        required={required}
        placeholder={error ? "Заполните поле" : placeholder}
        {...props}
        className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none ${
          error
            ? "border-red-400 placeholder:text-red-400 focus:border-red-500"
            : "border-neutral-300 text-neutral-800 placeholder:text-neutral-400 focus:border-blue-500"
        } ${className ?? ""}`}
      />
    </label>
  );
}
