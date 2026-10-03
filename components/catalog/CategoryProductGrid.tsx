"use client";

import { useMemo, useState } from "react";
import CatalogFilters, { FilterCategoryConfig, PriceRange } from "./CatalogFilters";
import CatalogToolbar from "./CatalogToolbar";
import CatalogPagination from "./CatalogPagination";
import CatalogEmptyState from "./CatalogEmptyState";
import CatalogProductCard from "./CatalogProductCard";
import { CatalogListingData } from "@/types/catalog-listing";
import {
  DEFAULT_PER_PAGE,
  DEFAULT_SORT,
  PerPageValue,
  SortValue,
  pluralizeTovar,
  sortProducts,
} from "@/lib/catalog/list-controls";

type FilterState = Record<string, Set<string>>;

function createEmptyFilters(fieldIds: string[]): FilterState {
  const state: FilterState = {};
  for (const id of fieldIds) state[id] = new Set();
  return state;
}

export default function CategoryProductGrid({
  data,
  basePath,
  showTitle = true,
}: {
  data: CatalogListingData;
  basePath: string;
  /** false — заголовок рисует вызывающая страница (иначе на branch-разделе было бы два h1). */
  showTitle?: boolean;
}) {
  const { products, filterFields } = data;
  const fieldIds = useMemo(() => filterFields.map((f) => f.id), [filterFields]);

  const [sort, setSort] = useState<SortValue>(DEFAULT_SORT);
  const [perPage, setPerPage] = useState<PerPageValue>(DEFAULT_PER_PAGE);
  const [page, setPage] = useState(1);
  const priceBounds: PriceRange = useMemo(
    () => ({
      min: products.length ? Math.min(...products.map((p) => p.price)) : 0,
      max: products.length ? Math.max(...products.map((p) => p.price)) : 0,
    }),
    [products]
  );
  const [price, setPrice] = useState<PriceRange>(priceBounds);
  const [filters, setFilters] = useState<FilterState>(() => createEmptyFilters(fieldIds));

  const resetToFirstPage = () => setPage(1);

  const toggleFilter = (fieldId: string, value: string) => {
    setFilters((prev) => {
      const next = new Set(prev[fieldId] ?? []);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return { ...prev, [fieldId]: next };
    });
    resetToFirstPage();
  };

  const handlePriceChange = (range: PriceRange) => {
    setPrice(range);
    resetToFirstPage();
  };

  const resetFilters = () => {
    setPrice(priceBounds);
    setFilters(createEmptyFilters(fieldIds));
    setSort(DEFAULT_SORT);
    setPerPage(DEFAULT_PER_PAGE);
    setPage(1);
  };

  const isPriceActive = price.min !== priceBounds.min || price.max !== priceBounds.max;
  const activeFilterCount =
    (isPriceActive ? 1 : 0) + Object.values(filters).reduce((sum, set) => sum + set.size, 0);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (product.price < price.min || product.price > price.max) return false;
      for (const fieldId of fieldIds) {
        const selected = filters[fieldId];
        if (selected && selected.size > 0 && !selected.has(product.filterValues?.[fieldId] ?? "")) return false;
      }
      return true;
    });
  }, [products, price, filters, fieldIds]);

  const sortedProducts = useMemo(() => sortProducts(filteredProducts, sort), [filteredProducts, sort]);

  const totalPages = Math.max(1, Math.ceil(sortedProducts.length / perPage));
  const currentPage = Math.min(page, totalPages);

  const visibleProducts = useMemo(
    () => sortedProducts.slice((currentPage - 1) * perPage, currentPage * perPage),
    [sortedProducts, currentPage, perPage]
  );

  const categories: FilterCategoryConfig[] = filterFields.map(({ id, title, options, truncate }) => ({
    id,
    title,
    options,
    selected: filters[id] ?? new Set(),
    onToggle: (value: string) => toggleFilter(id, value),
    initialVisible: truncate ? 6 : options.length,
  }));

  return (
    <div>
      {showTitle && (
        <div className="mb-6 flex flex-wrap items-baseline gap-3">
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">{data.title}</h1>
          <span className="text-sm text-neutral-400">{data.totalCountLabel}</span>
        </div>
      )}

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Сайдбар показываем всегда: фильтр цены работает в любой категории, потому
            что цена есть у каждого товара. Раньше при пустом filterFields пропадала
            вся колонка фильтров — и категория выглядела иначе, чем "Вентиляторы". */}
        <CatalogFilters
          priceBounds={priceBounds}
          price={price}
          onPriceChange={handlePriceChange}
          categories={categories}
          activeFilterCount={activeFilterCount}
          onReset={resetFilters}
        />

        <div className="min-w-0 flex-1">
          <CatalogToolbar
            sort={sort}
            onSortChange={(next) => {
              setSort(next);
              resetToFirstPage();
            }}
            perPage={perPage}
            onPerPageChange={(next) => {
              setPerPage(next);
              resetToFirstPage();
            }}
          />

          {visibleProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 xl:grid-cols-4">
              {visibleProducts.map((product) => (
                <CatalogProductCard key={product.id} product={product} basePath={basePath} />
              ))}
            </div>
          ) : (
            <CatalogEmptyState onReset={resetFilters} />
          )}

          {totalPages > 1 && (
            <CatalogPagination page={currentPage} totalPages={totalPages} onPageChange={setPage} />
          )}

          <p className="mt-4 text-center text-xs text-neutral-400">
            Показаны {visibleProducts.length} из {sortedProducts.length} {pluralizeTovar(sortedProducts.length)}
          </p>
        </div>
      </div>
    </div>
  );
}
