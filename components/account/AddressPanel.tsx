import { MapPin, Pencil, Trash2 } from "lucide-react";
import { DeliveryAddress } from "@/types/account";

export function AddressPanel({ address }: { address: DeliveryAddress }) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-neutral-900">Мой адрес доставки</h2>
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600 transition-colors hover:bg-blue-100"
        >
          <MapPin size={14} />
          Адрес доставки
        </button>
      </div>

      <div className="max-w-2xl rounded-2xl border border-neutral-200 p-6">
        <p className="font-semibold text-neutral-900">{address.fullName}</p>

        <div className="mt-4 grid grid-cols-1 gap-4 text-sm text-neutral-600 sm:grid-cols-3">
          <div>{address.address}</div>
          <div>{address.phone}</div>
          <div>{address.email}</div>
        </div>

        <div className="mt-5 flex gap-4 border-t border-neutral-100 pt-4 text-sm">
          <button type="button" className="flex items-center gap-1.5 text-blue-600 hover:underline">
            <Pencil size={14} />
            Редактировать
          </button>
          <button type="button" className="flex items-center gap-1.5 text-red-500 hover:underline">
            <Trash2 size={14} />
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}
