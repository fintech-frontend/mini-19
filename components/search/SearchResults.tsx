"use client";

import Link from "next/link";
import { SearchX, Loader2, AlertCircle, Search as SearchIcon } from "lucide-react";
import ProductGrid from "@/components/products/ProductGrid";
import { useProductSearch } from "@/hooks/useProductSearch";

/** Скелет карточки — повторяет пропорции ProductCard, чтобы не было скачка вёрстки. */
function CardSkeleton() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
      <div className="aspect-square w-full animate-pulse bg-gray-100" />
      <div className="flex flex-col gap-3 p-4">
        <div className="h-3 w-1/3 animate-pulse rounded bg-gray-100" />
        <div className="h-4 w-full animate-pulse rounded bg-gray-100" />
        <div className="h-4 w-2/3 animate-pulse rounded bg-gray-100" />
        <div className="mt-2 h-6 w-1/2 animate-pulse rounded bg-gray-100" />
      </div>
    </div>
  );
}

/**
 * Результаты поиска. Данные берутся из useProductSearch (React Query → API layer),
 * запросов к бэкенду здесь нет. Карточки — существующий ProductGrid/ProductCard,
 * поэтому поведение «в корзину / в избранное / в сравнение» работает как везде.
 */
export function SearchResults({ query }: { query: string }) {
  const { results, totalProducts, isLoading, isError, errorMessage, isEmptyQuery, isEmptyResult, refetch } =
    useProductSearch(query);

  // ── Пустой запрос: /search открыли без ?q=
  if (isEmptyQuery) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 px-6 py-20 text-center">
        <SearchIcon className="h-10 w-10 text-gray-300" aria-hidden="true" />
        <h2 className="mt-4 text-lg font-semibold text-neutral-900">Введите поисковый запрос</h2>
        <p className="mt-2 max-w-md text-sm text-neutral-500">
          Найдём товар по названию, артикулу, бренду или категории — например «перфоратор», «Bosch» или «краска».
        </p>
        <Link
          href="/catalog"
          className="mt-6 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Перейти в каталог
        </Link>
      </div>
    );
  }

  // ── Загрузка
  if (isLoading) {
    return (
      <>
        <p className="mb-8 flex items-center gap-2 text-sm text-neutral-500" role="status" aria-live="polite">
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          Ищем товары…
        </p>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </>
    );
  }

  // ── Ошибка
  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-red-100 bg-red-50/60 px-6 py-20 text-center">
        <AlertCircle className="h-10 w-10 text-red-400" aria-hidden="true" />
        <h2 className="mt-4 text-lg font-semibold text-red-700">Не удалось выполнить поиск</h2>
        <p className="mt-2 max-w-md text-sm text-red-600">{errorMessage}</p>
        <button
          type="button"
          onClick={refetch}
          className="mt-6 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-700"
        >
          Повторить
        </button>
      </div>
    );
  }

  // ── Ничего не найдено
  if (isEmptyResult) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 px-6 py-20 text-center">
        <SearchX className="h-10 w-10 text-gray-300" aria-hidden="true" />
        <h2 className="mt-4 text-lg font-semibold text-neutral-900">Ничего не найдено</h2>
        <p className="mt-2 max-w-md text-sm text-neutral-500">
          По запросу «{query}» товаров нет. Проверьте написание или попробуйте более короткий запрос —
          например «дрель» вместо «дрель аккумуляторная Bosch».
        </p>
        <Link
          href="/catalog"
          className="mt-6 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Перейти в каталог
        </Link>
      </div>
    );
  }

  // ── Результаты
  return (
    <>
      <p className="mb-8 text-sm text-neutral-500" role="status" aria-live="polite">
        Найдено товаров: <span className="font-semibold text-neutral-900">{results.length}</span>
        {totalProducts > 0 ? <span className="text-neutral-400"> · искали среди {totalProducts}</span> : null}
      </p>
      <ProductGrid products={results} />
    </>
  );
}
