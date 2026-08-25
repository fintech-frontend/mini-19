import Link from "next/link";
import { Wrench, Package, TreePine, type LucideIcon } from "lucide-react";

interface Banner {
  icon: LucideIcon;
  title: string;
  text: string;
  href: string;
  gradient: string;
}

const banners: Banner[] = [
  {
    icon: Wrench,
    title: "Незаменимый электроинструмент для мастера",
    text: "Дрели, перфораторы, УШМ и другие инструменты ведущих брендов",
    href: "/products?category=elektroinstrument",
    gradient: "from-blue-600 to-blue-500",
  },
  {
    icon: Package,
    title: "Планируйте ремонт заранее",
    text: "Сухие смеси, грунтовки и клеи для любого этапа отделки",
    href: "/products?category=suhie-smesi",
    gradient: "from-amber-600 to-amber-500",
  },
  {
    icon: TreePine,
    title: "Готовим дом и участок к сезону",
    text: "Инвентарь и товары для дома, дачи и сада",
    href: "/products?category=dom-i-sad",
    gradient: "from-emerald-600 to-emerald-500",
  },
];

export default function PromoBanners() {
  return (
    <section className="py-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {banners.map((banner) => {
          const Icon = banner.icon;
          return (
            <Link
              key={banner.title}
              href={banner.href}
              className={`group relative flex min-h-[160px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br ${banner.gradient} p-6 text-white shadow-sm transition-transform hover:-translate-y-0.5`}
            >
              <Icon size={28} className="opacity-80" />
              <div>
                <p className="text-base font-bold leading-snug">{banner.title}</p>
                <p className="mt-1 text-xs text-white/80">{banner.text}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
