import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { aboutStats as stats } from "@/data/home-data";

/** Блок «О магазине»: текст слева, фото справа — в пределах контейнера страницы. */
export default function AboutStore() {
  return (
    <section className="py-8">
      <div className="grid overflow-hidden rounded-2xl bg-[#F2F5F9] lg:grid-cols-2">
        <div className="p-6 sm:p-10 lg:p-12">
          <h2 className="text-xl font-bold text-neutral-900 sm:text-2xl">
            Строительные материалы в интернет-магазине «Стройоптторг»
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-neutral-600">
            Цель и главная задача компании — создать сервис, который не ограничится продажей
            строительных и отделочных материалов, а будет решать задачи и трудности, с которыми
            сталкиваются люди во время ремонта.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="whitespace-nowrap text-lg font-bold text-blue-600 sm:text-xl">{stat.value}</p>
                <p className="mt-1 text-[11px] leading-tight text-neutral-500">{stat.label}</p>
              </div>
            ))}
          </div>

          <p className="mt-7 text-[13px] leading-relaxed text-neutral-500">
            Уже второе десятилетие мы готовы воплотить в реальность Вашу мечту о красивом,
            комфортабельном доме, благоустроенном современном офисе, уютной теплой даче, помочь
            реализовать любые строительные и дизайнерские фантазии с минимальными затратами времени
            и денежных средств.
          </p>

          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#132a44] px-6 py-3.5 text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#1c3b5e]"
          >
            Подробнее о компании
            <ChevronRight size={14} strokeWidth={2.5} />
          </Link>
        </div>

        {/* На десктопе фото занимает всю высоту правой колонки, на мобильном — пропорции 1047×566. */}
        <div className="relative aspect-[1047/566] w-full lg:aspect-auto">
          <Image
            src="/images/about.png"
            alt="Строительные инструменты в магазине «Стройоптторг»"
            fill
            sizes="(max-width: 1024px) 100vw, 640px"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
