"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface PasswordFieldProps {
  label: string;
  required?: boolean;
  name?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
}

export function PasswordField({ label, required, name, placeholder, value, onChange, error }: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);

  return (
    <label className="block">
      <span className="mb-1.5 block text-sm text-neutral-700">
        {label} {required && "*"}:
      </span>
      <div className="relative">
        <input
          type={visible ? "text" : "password"}
          name={name}
          required={required}
          placeholder={error ? "Заполните поле" : placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full rounded-lg border px-4 py-2.5 pr-10 text-sm outline-none ${
            error
              ? "border-red-400 placeholder:text-red-400 focus:border-red-500"
              : "border-neutral-300 text-neutral-800 placeholder:text-neutral-400 focus:border-blue-500"
          }`}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Скрыть пароль" : "Показать пароль"}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
        >
          {visible ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </label>
  );
}
