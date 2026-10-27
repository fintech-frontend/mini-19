"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Горизонтальная лента со скрытым скроллбаром. Колесо мыши при зажатом Shift
 * прокручивает ленту вбок (нативно это работает не во всех браузерах/окружениях,
 * поэтому обрабатываем явно). Обработчик нативный и не-passive — иначе нельзя
 * вызвать preventDefault и страница одновременно поехала бы вниз.
 */
export default function HorizontalScroller({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onWheel = (event: WheelEvent) => {
      if (!event.shiftKey) return;
      // Chrome при Shift сам переносит deltaY в deltaX, Firefox — нет.
      const delta = event.deltaX || event.deltaY;
      if (!delta) return;
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 0) return;
      const next = Math.min(max, Math.max(0, el.scrollLeft + delta));
      if (next === el.scrollLeft) return;
      event.preventDefault();
      el.scrollLeft = next;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div
      ref={ref}
      className={`flex overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${className}`}
    >
      {children}
    </div>
  );
}
