"use client";

import { Store, Truck, Package, MapPin } from "lucide-react";
import { checkoutRegions, deliveryCosts, pickupAddress } from "@/data/checkout-data";
import { DeliveryMethod, StoreDeliverySubMethod } from "@/types/order";

function formatPrice(value: number) {
  return value === 0 ? "Бесплатно" : `${value.toLocaleString("ru-RU")} ₽`;
}

const methodMeta: Record<DeliveryMethod, { icon: typeof Store; title: string; description: string }> = {
  pickup: {
    icon: Store,
    title: "Самовывоз",
    description: "К вашему приезду заказ будет скомплектован и готов к выдаче.",
  },
  "store-delivery": {
    icon: Truck,
    title: "Доставка магазина",
    description:
      "Если же вам нужна будет доставка к определённому времени, то укажите это в поле для комментария к заказу.",
  },
  sdek: {
    icon: Package,
    title: "СДЭК",
    description: "Доставка через сервис СДЭК до ПВЗ или курьером до двери.",
  },
};

const methodOrder: DeliveryMethod[] = ["pickup", "store-delivery", "sdek"];

interface AddressFields {
  street: string;
  house: string;
  apartment: string;
}

interface DeliverySectionProps {
  regionId: string;
  city: string;
  onRegionChange: (regionId: string) => void;
  onCityChange: (city: string) => void;

  method: DeliveryMethod;
  onMethodChange: (method: DeliveryMethod) => void;

  storeSub: StoreDeliverySubMethod;
  onStoreSubChange: (sub: StoreDeliverySubMethod) => void;

  sdekSub: StoreDeliverySubMethod;
  onSdekSubChange: (sub: StoreDeliverySubMethod) => void;

  address: AddressFields;
  onAddressChange: (field: keyof AddressFields, value: string) => void;

  pvzAddress: string;
  onSelectPvz: () => void;

  submitted: boolean;
}

export function DeliverySection({
  regionId,
  city,
  onRegionChange,
  onCityChange,
  method,
  onMethodChange,
  storeSub,
  onStoreSubChange,
  sdekSub,
  onSdekSubChange,
  address,
  onAddressChange,
  pvzAddress,
  onSelectPvz,
  submitted,
}: DeliverySectionProps) {
  const region = checkoutRegions.find((r) => r.id === regionId);
  const cities = region?.cities ?? [];

  return (
    <section>
      <h2 className="text-lg font-bold text-neutral-900">Доставка</h2>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <select
          value={regionId}
          onChange={(e) => onRegionChange(e.target.value)}
          className={`w-full rounded-lg border bg-white px-3 py-2.5 text-sm outline-none ${
            submitted && !regionId
              ? "border-red-400 text-red-500"
              : "border-neutral-300 text-neutral-800 focus:border-blue-500"
          }`}
        >
          <option value="">Выберите область</option>
          {checkoutRegions.map((r) => (
            <option key={r.id} value={r.id}>
              {r.name}
            </option>
          ))}
        </select>

        <select
          value={city}
          onChange={(e) => onCityChange(e.target.value)}
          disabled={!region}
          className={`w-full rounded-lg border bg-white px-3 py-2.5 text-sm outline-none disabled:bg-neutral-50 disabled:text-neutral-400 ${
            submitted && !city
              ? "border-red-400 text-red-500"
              : "border-neutral-300 text-neutral-800 focus:border-blue-500"
          }`}
        >
          <option value="">Выберите город</option>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {methodOrder.map((id) => {
          const meta = methodMeta[id];
          const Icon = meta.icon;
          const selected = method === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onMethodChange(id)}
              className={`flex flex-col items-start gap-2 rounded-lg border p-4 text-left transition-colors ${
                selected ? "border-blue-500 ring-1 ring-blue-500" : "border-neutral-200 hover:border-neutral-300"
              }`}
            >
              <div className="flex w-full items-center gap-2">
                <span
                  className={`flex size-4 shrink-0 items-center justify-center rounded-full border ${
                    selected ? "border-blue-600" : "border-neutral-300"
                  }`}
                >
                  {selected && <span className="size-2 rounded-full bg-blue-600" />}
                </span>
                <Icon size={16} className="text-neutral-500" />
                <span className="text-sm font-semibold text-neutral-900">{meta.title}</span>
              </div>
              <p className="text-xs leading-relaxed text-neutral-500">{meta.description}</p>

              {id === "pickup" && (
                <div className="mt-1 flex items-start gap-1.5 rounded-md bg-neutral-50 px-2.5 py-2 text-xs text-neutral-600">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-neutral-400" />
                  <span>{pickupAddress}</span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {method === "store-delivery" && (
        <div className="mt-4 space-y-4 rounded-lg border border-neutral-200 p-4">
          <div className="flex gap-5 text-sm text-neutral-700">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="store-sub-method"
                checked={storeSub === "courier"}
                onChange={() => onStoreSubChange("courier")}
                className="size-4 accent-blue-600"
              />
              Курьером
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="store-sub-method"
                checked={storeSub === "pvz"}
                onChange={() => onStoreSubChange("pvz")}
                className="size-4 accent-blue-600"
              />
              До ПВЗ
            </label>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <label className="block">
              <span className="mb-1.5 block text-xs text-neutral-700">Улица *:</span>
              <input
                value={address.street}
                onChange={(e) => onAddressChange("street", e.target.value)}
                placeholder="Введите название вашей улицы"
                className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none ${
                  submitted && !address.street
                    ? "border-red-400 placeholder:text-red-400"
                    : "border-neutral-300 text-neutral-800 placeholder:text-neutral-400 focus:border-blue-500"
                }`}
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs text-neutral-700">Номер дома:</span>
              <input
                value={address.house}
                onChange={(e) => onAddressChange("house", e.target.value)}
                placeholder="Номер дома"
                className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm text-neutral-800 outline-none placeholder:text-neutral-400 focus:border-blue-500"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs text-neutral-700">Квартира:</span>
              <input
                value={address.apartment}
                onChange={(e) => onAddressChange("apartment", e.target.value)}
                placeholder="Номер квартиры"
                className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm text-neutral-800 outline-none placeholder:text-neutral-400 focus:border-blue-500"
              />
            </label>
          </div>
        </div>
      )}

      {method === "sdek" && (
        <div className="mt-4 space-y-3 rounded-lg border border-neutral-200 p-4">
          <div className="flex gap-5 text-sm text-neutral-700">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="sdek-sub-method"
                checked={sdekSub === "courier"}
                onChange={() => onSdekSubChange("courier")}
                className="size-4 accent-blue-600"
              />
              Курьером
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="sdek-sub-method"
                checked={sdekSub === "pvz"}
                onChange={() => onSdekSubChange("pvz")}
                className="size-4 accent-blue-600"
              />
              До ПВЗ
            </label>
          </div>

          {sdekSub === "pvz" && (
            <div>
              {pvzAddress ? (
                <div className="flex items-start gap-1.5 text-xs text-neutral-600">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-neutral-400" />
                  <div>
                    <p>{pvzAddress}</p>
                    <button
                      type="button"
                      onClick={onSelectPvz}
                      className="mt-1 font-medium text-blue-600 underline-offset-2 hover:underline"
                    >
                      Выбрать другой
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={onSelectPvz}
                  className={`text-xs font-medium underline-offset-2 hover:underline ${
                    submitted && !pvzAddress ? "text-red-500" : "text-blue-600"
                  }`}
                >
                  Выбрать ПВЗ
                </button>
              )}
            </div>
          )}
        </div>
      )}

      <p className="mt-3 text-xs text-neutral-500">
        Стоимость доставки: <span className="font-semibold text-neutral-700">{formatPrice(deliveryCosts[method])}</span>
      </p>
    </section>
  );
}
