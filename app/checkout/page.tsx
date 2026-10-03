import Link from "next/link";
import {
  ClipboardList,
  PhoneCall,
  Wallet,
  Truck,
  Banknote,
  CreditCard,
  Landmark,
  Building2,
  Store,
} from "lucide-react";
import Faq from "@/components/faq/faq";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Оформление заказа",
    description:
      "Добавьте нужные товары в корзину и укажите контактные данные — имя, телефон и адрес доставки или пункт самовывоза.",
  },
  {
    number: "02",
    icon: PhoneCall,
    title: "Подтверждение заказа",
    description:
      "Наш менеджер свяжется с вами в течение 15 минут, чтобы подтвердить наличие товара, итоговую стоимость и сроки.",
  },
  {
    number: "03",
    icon: Wallet,
    title: "Оплата",
    description:
      "Выберите удобный способ оплаты — наличными, банковской картой, в кредит или по безналичному расчёту.",
  },
  {
    number: "04",
    icon: Truck,
    title: "Доставка",
    description:
      "Доставим заказ курьером по городу и области или подготовим его к самовывозу со склада в удобное для вас время.",
  },
];

const paymentMethods = [
  {
    icon: Banknote,
    title: "Наличными",
    description: "При получении заказа курьеру или в пункте самовывоза.",
  },
  {
    icon: CreditCard,
    title: "Банковской картой",
    description: "Онлайн на сайте или через терминал при получении.",
  },
  {
    icon: Landmark,
    title: "В кредит или рассрочку",
    description: "Оформление на месте без справок и переплат.",
  },
  {
    icon: Building2,
    title: "Безналичный расчёт",
    description: "Для юридических лиц и индивидуальных предпринимателей.",
  },
];

const deliveryMethods = [
  {
    icon: Truck,
    title: "Доставка курьером",
    description:
      "Привезём заказ по указанному адресу в городе и области. Срок и стоимость зависят от объёма и района.",
  },
  {
    icon: Store,
    title: "Самовывоз со склада",
    description:
      "Заберите заказ самостоятельно в удобное время — мы сообщим, как только он будет готов.",
  },
];

const faqItems = [
  {
    question: "Как быстро обрабатывается заказ?",
    answer:
      "Менеджер связывается с покупателем в течение 15 минут после оформления заказа в рабочее время — ежедневно с 8:00 до 18:00.",
  },
  {
    question: "Можно ли оплатить заказ при получении?",
    answer:
      "Да, вы можете оплатить наличными или картой курьеру, либо в пункте самовывоза при получении товара.",
  },
  {
    question: "Что делать, если товара нет в наличии?",
    answer:
      "Менеджер предупредит об этом при подтверждении заказа и предложит аналог либо укажет срок поступления товара.",
  },
  {
    question: "Можно ли изменить или отменить заказ?",
    answer:
      "Да, до момента передачи заказа в доставку вы можете изменить состав или отменить заказ, позвонив по телефону 8 800 444 00 65.",
  },
  {
    question: "Работаете ли вы с юридическими лицами?",
    answer:
      "Да, для организаций и ИП доступен безналичный расчёт с выставлением счёта и полным пакетом закрывающих документов.",
  },
];

function StepCard({
  step,
  isLast,
}: {
  step: (typeof steps)[number];
  isLast: boolean;
}) {
  const Icon = step.icon;
  return (
    <div className="relative flex flex-1 flex-col items-start gap-3 sm:items-center sm:text-center">
      {!isLast && (
        <span
          aria-hidden
          className="absolute left-6 top-12 hidden h-px w-full bg-neutral-200 sm:block sm:left-1/2 sm:top-6"
        />
      )}
      <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
        <Icon size={22} />
      </div>
      <div>
        <p className="text-xs font-semibold text-blue-600">Шаг {step.number}</p>
        <h3 className="mt-1 text-base font-bold text-neutral-900">
          {step.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-neutral-600 sm:text-[15px]">
          {step.description}
        </p>
      </div>
    </div>
  );
}

function MethodCard({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Banknote;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-neutral-200 p-4">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
        <Icon size={20} />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-neutral-900 sm:text-[15px]">
          {title}
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-neutral-500 sm:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12">
      <h1 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
        Оформление заказа
      </h1>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-600 sm:text-base">
        Рассказываем, как устроен процесс покупки в СТРОЙОПТТОРГ — от добавления
        товара в корзину до получения заказа. Это займёт всего четыре простых шага.
      </p>

      <div className="mt-10 flex flex-col gap-8 sm:mt-12 sm:flex-row sm:gap-4">
        {steps.map((step, index) => (
          <StepCard key={step.number} step={step} isLast={index === steps.length - 1} />
        ))}
      </div>

      <section className="mt-14 sm:mt-16">
        <h2 className="text-xl font-bold text-neutral-900 sm:text-2xl">
          Способы оплаты
        </h2>
        <p className="mt-2 text-sm text-neutral-600 sm:text-base">
          Наличные, банковская карта, кредит и другие удобные варианты — выбирайте
          то, что подходит именно вам.
        </p>
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {paymentMethods.map((method) => (
            <MethodCard key={method.title} {...method} />
          ))}
        </div>
      </section>

      <section className="mt-14 sm:mt-16">
        <h2 className="text-xl font-bold text-neutral-900 sm:text-2xl">
          Способы получения
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {deliveryMethods.map((method) => (
            <MethodCard key={method.title} {...method} />
          ))}
        </div>
      </section>

      <div className="mt-14 flex flex-col items-start gap-4 rounded-lg border border-neutral-200 p-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-neutral-900">
            Товары уже в корзине?
          </h2>
          <p className="mt-1 text-sm text-neutral-600">
            Проверьте состав заказа и переходите к оформлению.
          </p>
        </div>
        <Link
          href="/cart"
          className="whitespace-nowrap rounded-lg bg-blue-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-700"
        >
          Перейти в корзину
        </Link>
      </div>

      <div className="mt-14 sm:mt-16">
        <Faq items={faqItems} />
      </div>
    </div>
  );
}
