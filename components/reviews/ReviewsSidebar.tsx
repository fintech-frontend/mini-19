import Link from "next/link";
import Image from "next/image";
import { NewsletterForm } from "@/components/blog/NewsletterForm";

interface PromoBanner {
  title: string;
  discount: string;
  href: string;
  image: string;
}

const banners: PromoBanner[] = [
  {
    title: "Все для отопления",
    discount: "до -30%",
    href: "/products?category=santehnika",
    image: "https://placehold.co/480x420/d8cec2/8a7f70.png?text=%D0%9E%D1%82%D0%BE%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5",
  },
  {
    title: "Лакокрасочные материалы",
    discount: "до -30%",
    href: "/products?category=lakokrasochnye-materialy",
    image: "https://placehold.co/480x420/c9d2dc/7d8794.png?text=%D0%9B%D0%9A%D0%9C",
  },
];

export function ReviewsSidebar() {
  return (
    <aside className="space-y-6">
      {banners.map((banner) => (
        <Link
          key={banner.title}
          href={banner.href}
          className="group relative block aspect-4/3 overflow-hidden rounded-lg"
        >
          <Image
            src={banner.image}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 360px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="pointer-events-none absolute inset-0 bg-linear-to-t from-white/85 via-white/25 to-transparent" />

          <span className="absolute inset-x-5 bottom-5">
            <span className="block max-w-40 text-base font-bold leading-snug text-neutral-900">
              {banner.title}
            </span>
            <span className="mt-2 inline-block rounded bg-neutral-900 px-2.5 py-1 text-[11px] font-semibold text-white">
              {banner.discount}
            </span>
          </span>
        </Link>
      ))}

      <NewsletterForm />
    </aside>
  );
}
