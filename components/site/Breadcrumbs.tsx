import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="mb-4 flex flex-wrap items-center gap-1 text-sm text-neutral-400" aria-label="Хлебные крошки">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          {item.href ? (
            <Link href={item.href} className="hover:text-neutral-700">
              {item.label}
            </Link>
          ) : (
            <span className="text-neutral-500">{item.label}</span>
          )}
          {i < items.length - 1 && <span className="mx-1">/</span>}
        </span>
      ))}
    </nav>
  );
}
