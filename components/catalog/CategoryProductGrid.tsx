"use client";

import { useMemo, useState } from "react";
import CatalogFilters, { PriceRange } from "./CatalogFilters";
import CatalogToolbar from "./CatalogToolbar";
import CatalogPagination from "./CatalogPagination";
import CatalogEmptyState from "./CatalogEmptyState";
import CatalogProductCard from "./CatalogProductCard";
import { ResolvedProduct } from "@/lib/resolveProduct";
import {
  DEFAULT_PER_PAGE,
  DEFAULT_SORT,
  PerPageValue,
  SortValue,
  pluralizeTovar,
  sortProducts,
} from "@/lib/catalog/list-controls";

/**
 * Сетка товаров категории: сортировка, пагинация и фильтр по цене — единственный
 * фильтр, который можно построить на реальных данных backend (нет ни filterFields,
 * ни brand-фильтра — см. types/api.ts, attrs_json произвольный и не типизирован).
 */
export default function CategoryProductGrid({
  products,
  title,
  showTitle = true,
}: {
  products: ResolvedProduct[];
  title: string;
  /** false — заголовок рисует вызывающая страница (иначе на разделе с подкатегориями было бы два h1). */
  showTitle?: boolean;
}) {
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

  const resetToFirstPage = () => setPage(1);

  const handlePriceChange = (range: PriceRange) => {
    setPrice(range);
    resetToFirstPage();
  };

  const resetFilters = () => {
    setPrice(priceBounds);
    setSort(DEFAULT_SORT);
    setPerPage(DEFAULT_PER_PAGE);
    setPage(1);
  };

  const isPriceActive = price.min !== priceBounds.min || price.max !== priceBounds.max;
  const activeFilterCount = isPriceActive ? 1 : 0;

  const filteredProducts = useMemo(
    () => products.filter((product) => product.price >= price.min && product.price <= price.max),
    [products, price]
  );

  const sortedProducts = useMemo(() => sortProducts(filteredProducts, sort), [filteredProducts, sort]);

  const totalPages = Math.max(1, Math.ceil(sortedProducts.length / perPage));
  const currentPage = Math.min(page, totalPages);

  const visibleProducts = useMemo(
    () => sortedProducts.slice((currentPage - 1) * perPage, currentPage * perPage),
    [sortedProducts, currentPage, perPage]
  );

  return (
    <div>
      {showTitle && (
        <div className="mb-6 flex flex-wrap items-baseline gap-3">
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">{title}</h1>
          <span className="text-sm text-neutral-400">
            {products.length} {pluralizeTovar(products.length)}
          </span>
        </div>
      )}

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Сайдбар показываем всегда: фильтр цены работает в любой категории, потому
            что цена есть у каждого товара. */}
        <CatalogFilters
          priceBounds={priceBounds}
          price={price}
          onPriceChange={handlePriceChange}
          categories={[]}
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
                <CatalogProductCard key={product.id} product={product} />
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
