"use client";

import { useEffect, useState, type ReactNode } from "react";
import { FileText, MessagesSquare, X } from "lucide-react";

/**
 * Плавающая кнопка связи в левом нижнем углу — как виджет Bitrix24 на stroiopttorg.ru.
 * По нажатию раскрывается столбик каналов: Max, WhatsApp, форма обратной связи, звонок.
 */

function MaxIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path
        d="M12 4.5a7.5 7.5 0 0 0-6.6 11.06L4.5 19.5l3.94-.9A7.5 7.5 0 1 0 12 4.5Z"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91A9.85 9.85 0 0 0 12.04 2Zm0 18.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 5.83 2.42 8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23a7.46 7.46 0 0 1-1.38-1.72c-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42h-.48a.92.92 0 0 0-.66.31c-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.6.19 1.14.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

interface Channel {
  label: string;
  href: string;
  external: boolean;
  className: string;
  icon: ReactNode;
}

const channels: Channel[] = [
  {
    label: "Стройоптторг Онлайн",
    href: "https://max.ru/id0901051787_bot",
    external: true,
    className: "bg-gradient-to-br from-[#6b2bff] to-[#a42bd6]",
    icon: <MaxIcon />,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/79380340408",
    external: true,
    className: "bg-[#25d366]",
    icon: <WhatsAppIcon />,
  },
  {
    label: "Обратная связь",
    href: "/contacts#consult",
    external: false,
    className: "bg-[#0070bf]",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    label: "Позвонить консультанту",
    href: "tel:88004440065",
    external: false,
    className: "bg-[#0070bf]",
    icon: <MessagesSquare className="h-5 w-5" />,
  },
];

export default function ContactWidget() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col items-center gap-3 sm:bottom-[50px] sm:left-[50px]">
      <ul
        className={`flex flex-col items-center gap-3 transition-all duration-300 ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
        aria-hidden={!open}
      >
        {channels.map((channel) => (
          <li key={channel.label} className="group relative">
            <a
              href={channel.href}
              target={channel.external ? "_blank" : undefined}
              rel={channel.external ? "noopener noreferrer" : undefined}
              aria-label={channel.label}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-md transition-transform hover:scale-110 ${channel.className}`}
            >
              {channel.icon}
            </a>
            <span className="pointer-events-none absolute left-full top-1/2 ml-3 -translate-y-1/2 whitespace-nowrap rounded-md bg-white px-3 py-1.5 text-xs font-medium text-neutral-800 opacity-0 shadow-md transition-opacity group-hover:opacity-100">
              {channel.label}
            </span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Закрыть" : "Связаться с нами"}
        className={`relative flex h-[60px] w-[60px] items-center justify-center rounded-full shadow-lg transition-colors ${
          open ? "bg-neutral-200 text-white" : "bg-[#0070bf] text-white"
        }`}
      >
        {!open && <span className="absolute inset-0 animate-ping rounded-full bg-[#0070bf]/40" aria-hidden />}
        {open ? (
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-300">
            <X className="h-6 w-6" strokeWidth={3} />
          </span>
        ) : (
          <MessagesSquare className="relative h-7 w-7" />
        )}
      </button>
    </div>
  );
}
