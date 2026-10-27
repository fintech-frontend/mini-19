import { baseApi, fetchAllPages } from "./baseApi";
import type { ApiBrand, ApiCategory, ApiProduct } from "@/types/api";

/**
 * Каталог: товары, категории, бренды (раздел shop, без аутентификации).
 * Списки собираются со всех страниц пагинации, фильтрация — lib/catalog/filters.ts.
 */

export interface ProductInput {
  name: string;
  slug: string;
  article: string;
  price: number;
  category_id: number;
  /** null — снять бренд / старую цену при PATCH */
  brand_id?: number | null;
  old_price?: number | null;
  description?: string;
  attrs_json?: Record<string, unknown>;
  is_active?: boolean;
}

export interface CategoryInput {
  name: string;
  slug: string;
  parent?: number | null;
  sort?: number;
  is_active?: boolean;
}

/** `logo` — строка-URL, а не файл (подтверждено OPTIONS /brands/). */
export interface BrandInput {
  name: string;
  slug: string;
  logo?: string;
}

const PRODUCTS = { type: "Product", id: "LIST" } as const;
const CATEGORIES = { type: "Category", id: "LIST" } as const;
const BRANDS = { type: "Brand", id: "LIST" } as const;

export const catalogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // ─── Товары ──────────────────────────────────────────────────────────────
    getProducts: build.query<ApiProduct[], void>({
      queryFn: (_arg, _api, _extra, baseQuery) => fetchAllPages<ApiProduct>(baseQuery, "/products/"),
      providesTags: (products = []) => [PRODUCTS, ...products.map(({ id }) => ({ type: "Product" as const, id }))],
    }),

    /**
     * GET /products/:id/ на сервере отдаёт 404 для любого товара, поэтому товар
     * берём из общего списка.
     */
    getProduct: build.query<ApiProduct, number>({
      queryFn: async (id, _api, _extra, baseQuery) => {
        const result = await fetchAllPages<ApiProduct>(baseQuery, "/products/");
        if ("error" in result) return result;

        const product = result.data.find((item) => item.id === id);
        return product
          ? { data: product }
          : { error: { status: 404, data: { detail: `Товар с id ${id} не найден` } } };
      },
      providesTags: (_result, _error, id) => [{ type: "Product", id }],
    }),

    createProduct: build.mutation<ApiProduct, ProductInput>({
      query: (body) => ({ url: "/products/", method: "POST", body }),
      invalidatesTags: [PRODUCTS],
    }),

    updateProduct: build.mutation<ApiProduct, { id: number; data: Partial<ProductInput> }>({
      query: ({ id, data }) => ({ url: `/products/${id}/`, method: "PATCH", body: data }),
      invalidatesTags: (_result, _error, { id }) => [{ type: "Product", id }],
    }),

    deleteProduct: build.mutation<void, number>({
      query: (id) => ({ url: `/products/${id}/`, method: "DELETE" }),
      invalidatesTags: (_result, _error, id) => [{ type: "Product", id }, PRODUCTS],
    }),

    // ─── Категории ───────────────────────────────────────────────────────────
    getCategories: build.query<ApiCategory[], void>({
      queryFn: (_arg, _api, _extra, baseQuery) => fetchAllPages<ApiCategory>(baseQuery, "/categories/"),
      providesTags: [CATEGORIES],
    }),

    createCategory: build.mutation<ApiCategory, CategoryInput>({
      query: (body) => ({ url: "/categories/", method: "POST", body }),
      invalidatesTags: [CATEGORIES],
    }),

    updateCategory: build.mutation<ApiCategory, { id: number; data: Partial<CategoryInput> }>({
      query: ({ id, data }) => ({ url: `/categories/${id}/`, method: "PATCH", body: data }),
      // Категория вложена в товары — их тоже нужно перечитать.
      invalidatesTags: [CATEGORIES, PRODUCTS],
    }),

    deleteCategory: build.mutation<void, number>({
      query: (id) => ({ url: `/categories/${id}/`, method: "DELETE" }),
      invalidatesTags: [CATEGORIES, PRODUCTS],
    }),

    // ─── Бренды ──────────────────────────────────────────────────────────────
    getBrands: build.query<ApiBrand[], void>({
      queryFn: (_arg, _api, _extra, baseQuery) => fetchAllPages<ApiBrand>(baseQuery, "/brands/"),
      providesTags: [BRANDS],
    }),

    createBrand: build.mutation<ApiBrand, BrandInput>({
      query: (body) => ({ url: "/brands/", method: "POST", body }),
      invalidatesTags: [BRANDS],
    }),

    updateBrand: build.mutation<ApiBrand, { id: number; data: Partial<BrandInput> }>({
      query: ({ id, data }) => ({ url: `/brands/${id}/`, method: "PATCH", body: data }),
      invalidatesTags: [BRANDS, PRODUCTS],
    }),

    deleteBrand: build.mutation<void, number>({
      query: (id) => ({ url: `/brands/${id}/`, method: "DELETE" }),
      invalidatesTags: [BRANDS, PRODUCTS],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useGetBrandsQuery,
  useCreateBrandMutation,
  useUpdateBrandMutation,
  useDeleteBrandMutation,
} = catalogApi;
