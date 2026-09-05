"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { LoginForm } from "@/components/auth/LoginForm";
import { DeliverySection } from "@/components/checkout/DeliverySection";
import { PaymentSection } from "@/components/checkout/PaymentSection";
import { CustomerInfoForm } from "@/components/checkout/CustomerInfoForm";
import { OrderSummarySidebar, type CartLine } from "@/components/checkout/OrderSummarySidebar";
import { resolveProductsByIds, type ResolvedProduct } from "@/lib/resolveProduct";
import { createOrder } from "@/lib/api/orders";
import { ApiError } from "@/lib/api/errors";
import { deliveryCosts, pickupAddress, mockPvzAddresses } from "@/data/checkout-data";
import { useShop } from "@/context/ShopContext";
import type {
  DeliveryMethod,
  OrderCustomer,
  PaymentMethod,
  StoreDeliverySubMethod,
  SubmittedOrder,
} from "@/types/order";

const deliveryLabels: Record<string, string> = {
  pickup: "Самовывоз со склада",
  "store-delivery:courier": "Доставка магазина курьером",
  "store-delivery:pvz": "Доставка магазина до ПВЗ",
  "sdek:courier": "СДЭК курьером",
  "sdek:pvz": "СДЭК до пункта выдачи",
};

const paymentLabels: Record<PaymentMethod, string> = {
  card: "Оплата картой на сайте",
  "cash-on-pickup": "Оплата в кассе",
  "credit-otp": "Кредит от ОТП банка",
  "installment-sber": "Покупка в кредит (Сбер)",
};

const initialCustomer: OrderCustomer = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  comment: "",
};

function EmptyCheckoutCart() {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-neutral-200 px-4 py-20 text-center">
      <div className="flex size-16 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
        <ShoppingCart size={28} />
      </div>
      <h2 className="mt-5 text-lg font-bold text-neutral-900 sm:text-xl">Ваша корзина пуста</h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-500">
        Чтобы оформить заказ, сначала добавьте товары в корзину из каталога.
      </p>
      <Link
        href="/catalog"
        className="mt-6 whitespace-nowrap rounded-lg bg-blue-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-700"
      >
        Перейти в каталог
      </Link>
    </div>
  );
}

export default function CheckoutPage() {
  const { cart, cartLoading, clearCart } = useShop();
  const router = useRouter();

  // Ключуем по отсортированному списку id, а не по cart целиком, чтобы изменение
  // количества (которое checkout сам не меняет, но на всякий случай) не вызывало
  // повторный запрос товаров.
  const idsKey = useMemo(() => Object.keys(cart).sort().join(","), [cart]);

  // Результат и ошибка хранятся вместе со "своим" ключом (списком id, для
  // которого они получены); loading/error для рендера выводятся сравнением
  // этого ключа с idsKey — эффект не вызывает setState синхронно в начале
  // (только внутри .then/.catch), как того требует eslint-правило
  // react-hooks/set-state-in-effect.
  const [result, setResult] = useState<{ key: string; products: ResolvedProduct[] } | null>(null);
  const [fetchError, setFetchError] = useState<{ key: string; message: string } | null>(null);

  useEffect(() => {
    let cancelled = false;
    const ids = idsKey ? idsKey.split(",") : [];

    resolveProductsByIds(ids)
      .then((resolved) => {
        if (cancelled) return;
        setResult({ key: idsKey, products: resolved });
        setFetchError(null);
      })
      .catch(() => {
        if (!cancelled) {
          setFetchError({ key: idsKey, message: "Не удалось загрузить товары корзины. Попробуйте обновить страницу." });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [idsKey]);

  const productMap = useMemo(() => {
    if (!result || result.key !== idsKey) return {};
    const map: Record<string, ResolvedProduct> = {};
    for (const product of result.products) map[product.id] = product;
    return map;
  }, [result, idsKey]);

  const productsError = fetchError?.key === idsKey ? fetchError.message : null;
  const productsLoading = !productsError && result?.key !== idsKey;

  const items: CartLine[] = useMemo(
    () =>
      Object.entries(cart).flatMap(([id, qty]) => {
        const product = productMap[id];
        if (!product) return [];
        return [
          {
            id,
            name: product.title,
            price: product.price,
            oldPrice: product.oldPrice,
            image: product.image ?? undefined,
            article: product.article,
            qty,
          },
        ];
      }),
    [cart, productMap]
  );

  const loading = cartLoading || productsLoading;

  const [showLogin, setShowLogin] = useState(false);

  const [regionId, setRegionId] = useState("");
  const [city, setCity] = useState("");

  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>("pickup");
  const [storeSub, setStoreSub] = useState<StoreDeliverySubMethod>("courier");
  const [sdekSub, setSdekSub] = useState<StoreDeliverySubMethod>("courier");
  const [address, setAddress] = useState({ street: "", house: "", apartment: "" });
  const [pvzIndex, setPvzIndex] = useState<number | null>(null);

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");

  const [customer, setCustomer] = useState<OrderCustomer>(initialCustomer);
  const [createAccount, setCreateAccount] = useState(false);
  const [consent, setConsent] = useState(false);

  const [appliedPromoCode, setAppliedPromoCode] = useState<string | null>(null);
  const [discountPercent, setDiscountPercent] = useState(0);

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const pvzAddress = pvzIndex === null ? "" : mockPvzAddresses[pvzIndex];

  function handleRegionChange(nextRegionId: string) {
    setRegionId(nextRegionId);
    setCity("");
  }

  function handleAddressChange(field: keyof typeof address, value: string) {
    setAddress((prev) => ({ ...prev, [field]: value }));
  }

  function handleCustomerChange(field: keyof OrderCustomer, value: string) {
    setCustomer((prev) => ({ ...prev, [field]: value }));
  }

  function handleSelectPvz() {
    setPvzIndex((prev) => (prev === null ? 0 : (prev + 1) % mockPvzAddresses.length));
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const deliveryCost = deliveryCosts[deliveryMethod];

  const errors = [
    !regionId && "Выберите область",
    !city && "Выберите город",
    deliveryMethod === "store-delivery" && !address.street && "Укажите улицу для доставки",
    deliveryMethod === "sdek" && sdekSub === "pvz" && !pvzAddress && "Выберите пункт выдачи СДЭК",
    !customer.firstName && "Заполните поле «Ваше имя»",
    !customer.lastName && "Заполните поле «Фамилия»",
    !customer.email && "Заполните поле Email",
    !customer.phone && "Заполните поле «Номер телефона»",
    !consent && "Вы должны согласиться с обработкой персональных данных",
  ].filter((error): error is string => Boolean(error));

  function resolveDeliveryKey() {
    if (deliveryMethod === "pickup") return "pickup";
    if (deliveryMethod === "store-delivery") return `store-delivery:${storeSub}`;
    return `sdek:${sdekSub}`;
  }

  function resolveAddress() {
    if (deliveryMethod === "pickup") return pickupAddress;
    if (deliveryMethod === "store-delivery") {
      const parts = [city, address.street && `ул. ${address.street}`, address.house && `д. ${address.house}`, address.apartment && `кв. ${address.apartment}`];
      return parts.filter(Boolean).join(", ");
    }
    if (sdekSub === "pvz") return pvzAddress;
    return city;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    if (errors.length > 0) return;

    setSubmitting(true);

    const discountAmount = Math.round((subtotal * discountPercent) / 100);
    const total = subtotal - discountAmount + deliveryCost;
    const order: SubmittedOrder = {
      number: String(Math.floor(10000 + Math.random() * 90000)),
      date: new Date().toISOString(),
      items: items.map((item) => ({ id: item.id, name: item.name, price: item.price, qty: item.qty })),
      subtotal,
      discount: discountAmount,
      deliveryCost,
      total,
      deliveryMethod,
      deliveryLabel: deliveryLabels[resolveDeliveryKey()],
      paymentMethod,
      paymentLabel: paymentLabels[paymentMethod],
      customer,
      address: resolveAddress(),
    };

    // Богатые данные заказа (товары, доставка, оплата, покупатель) хранятся
    // только на фронтенде — у документированного POST /orders/ нет для них полей,
    // а страница подтверждения (/order-confirmation) как источник правды читает
    // именно sessionStorage. Это сохраняем как есть.
    sessionStorage.setItem("lastOrder", JSON.stringify(order));

    // Дополнительно пробуем сохранить сводку заказа на сервере — только number/
    // subtotal/total, больше POST /orders/ ничего не принимает (см. lib/api/orders.ts).
    // Ждём ответа перед очисткой корзины, но неудача здесь не должна мешать
    // пользователю дойти до страницы подтверждения — заказ уже сохранён локально.
    try {
      await createOrder({ number: `mini19-${Date.now()}`, subtotal, total });
    } catch (err) {
      const message = err instanceof ApiError ? err.message : "неизвестная ошибка";
      console.error("Не удалось сохранить сводку заказа на сервере:", message, err);
    }

    clearCart();
    router.push("/order-confirmation");
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Оформление заказа" }]} />
      <h1 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Оформление заказа</h1>

      {loading ? (
        <div className="mt-6 rounded-lg border border-neutral-200 px-4 py-20 text-center text-sm text-neutral-500">
          Загрузка корзины...
        </div>
      ) : productsError ? (
        <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-20 text-center text-sm text-red-600">
          {productsError}
        </div>
      ) : items.length === 0 ? (
        <div className="mt-6">
          <EmptyCheckoutCart />
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            {submitted && errors.length > 0 && (
              <div className="space-y-1 rounded-lg border border-dashed border-red-300 bg-red-50 p-4 text-sm text-red-600">
                {errors.map((error) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            )}

            <div>
              <button
                type="button"
                onClick={() => setShowLogin((prev) => !prev)}
                className="flex items-center gap-2 text-sm text-neutral-600"
              >
                Уже есть аккаунт?{" "}
                <span
                  className={`rounded px-3 py-1.5 text-xs font-bold uppercase tracking-wider ${
                    showLogin ? "bg-blue-600 text-white" : "bg-neutral-900 text-white"
                  }`}
                >
                  Войти
                </span>
              </button>
              {showLogin && (
                <div className="mt-4 max-w-sm">
                  <LoginForm />
                </div>
              )}
            </div>

            <DeliverySection
              regionId={regionId}
              city={city}
              onRegionChange={handleRegionChange}
              onCityChange={setCity}
              method={deliveryMethod}
              onMethodChange={setDeliveryMethod}
              storeSub={storeSub}
              onStoreSubChange={setStoreSub}
              sdekSub={sdekSub}
              onSdekSubChange={setSdekSub}
              address={address}
              onAddressChange={handleAddressChange}
              pvzAddress={pvzAddress}
              onSelectPvz={handleSelectPvz}
              submitted={submitted}
            />

            <PaymentSection value={paymentMethod} onChange={setPaymentMethod} />

            <section>
              <CustomerInfoForm
                fields={customer}
                onChange={handleCustomerChange}
                createAccount={createAccount}
                onCreateAccountChange={setCreateAccount}
                submitted={submitted}
              />
            </section>
          </div>

          <div className="lg:col-span-1">
            <OrderSummarySidebar
              items={items}
              subtotal={subtotal}
              discountPercent={discountPercent}
              deliveryCost={deliveryCost}
              appliedPromoCode={appliedPromoCode}
              onApplyPromo={(code, percent) => {
                setAppliedPromoCode(code);
                setDiscountPercent(percent);
              }}
              onClearPromo={() => {
                setAppliedPromoCode(null);
                setDiscountPercent(0);
              }}
              consent={consent}
              onConsentChange={setConsent}
              submitted={submitted}
              submitting={submitting}
            />
          </div>
        </form>
      )}
    </div>
  );
}
