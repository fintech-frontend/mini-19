const PERKS = [
  { icon: "💳", text: "Оплата любым удобным способом" },
  { icon: "📦", text: "Большой выбор товаров в каталоге" },
  { icon: "🚚", text: "Осуществляем быструю доставку" },
  { icon: "🏷️", text: "Делаем скидки на крупные покупки" },
];

/** Блок преимуществ под характеристиками — одинаковый для всех товаров каталога. */
export default function ProductPerks() {
  return (
    <div className="mt-2 space-y-2 border-t border-neutral-100 pt-4 text-xs text-neutral-600">
      {PERKS.map((perk) => (
        <div key={perk.text} className="flex items-center gap-2">
          <span className="text-lg text-blue-500">{perk.icon}</span>
          <span>{perk.text}</span>
        </div>
      ))}
    </div>
  );
}
