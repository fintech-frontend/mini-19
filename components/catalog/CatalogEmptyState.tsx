export default function CatalogEmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center gap-3 py-16 text-center">
      <p className="text-sm text-neutral-500">По заданным фильтрам ничего не найдено.</p>
      <button
        type="button"
        onClick={onReset}
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
      >
        Сбросить фильтры
      </button>
    </div>
  );
}
