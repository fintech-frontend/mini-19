import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  AdminSession,
  AdminSessionUser,
  FhpHealth,
  FhpInvoiceCreateInput,
  FhpInvoiceCreateResponse,
  FhpInvoiceStatusResponse,
  FhpRefundResponse,
  FhpStatusResponse,
} from "@/types/admin";

/**
 * Admin panelning o'z serveri (app/api/admin/*): kirish sessiyasi va Fintechhub-payment
 * Merchant API proxy. Do'kon backendidan alohida baseUrl bo'lgani uchun alohida
 * createApi, lekin xuddi shu Redux store'da (lib/store/store.ts) turadi.
 *
 * Fintechhub kalitlari brauzerga kelmaydi — imzoni server qo'yadi (lib/admin/server/fhp.ts).
 * Xato javobi: { error, data } — getErrorMessage() `error` maydonini o'qiydi.
 */
export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/admin", credentials: "same-origin" }),
  tagTypes: ["Session"],
  // Admin ma'lumotlari tez o'zgaradi va kalitlar bilan bog'liq — kesh qisqa.
  keepUnusedDataFor: 0,
  endpoints: (build) => ({
    getAdminSession: build.query<AdminSession, void>({
      query: () => "/auth",
      providesTags: ["Session"],
    }),

    adminLogin: build.mutation<{ user: AdminSessionUser }, { login: string; password: string }>({
      query: (body) => ({ url: "/auth?op=login", method: "POST", body }),
      invalidatesTags: ["Session"],
    }),

    adminLogout: build.mutation<{ ok: boolean }, void>({
      query: () => ({ url: "/auth?op=logout", method: "POST", body: {} }),
      invalidatesTags: ["Session"],
    }),

    fhpHealth: build.query<FhpHealth, void>({
      query: () => "/fhp?op=health",
    }),

    /** GET payment/status/{service_id}/{payment_id} */
    fhpPaymentStatus: build.mutation<FhpStatusResponse, number>({
      query: (paymentId) => `/fhp?op=status&payment_id=${paymentId}`,
    }),

    /** GET payment/status_by_mti/{service_id}/{merchant_trans_id} — buyurtma raqami bo'yicha */
    fhpOrderStatus: build.mutation<FhpStatusResponse, string>({
      query: (merchantTransId) => `/fhp?op=status_by_mti&mti=${encodeURIComponent(merchantTransId)}`,
    }),

    /** DELETE payment/reversal/{service_id}/{payment_id} */
    fhpRefund: build.mutation<FhpRefundResponse, number>({
      query: (paymentId) => ({ url: "/fhp?op=refund", method: "POST", body: { payment_id: paymentId } }),
    }),

    fhpCreateInvoice: build.mutation<FhpInvoiceCreateResponse, FhpInvoiceCreateInput>({
      query: (body) => ({ url: "/fhp?op=invoice_create", method: "POST", body }),
    }),

    fhpInvoiceStatus: build.mutation<FhpInvoiceStatusResponse, number>({
      query: (invoiceId) => `/fhp?op=invoice_status&invoice_id=${invoiceId}`,
    }),
  }),
});

export const {
  useGetAdminSessionQuery,
  useAdminLoginMutation,
  useAdminLogoutMutation,
  useFhpHealthQuery,
  useFhpPaymentStatusMutation,
  useFhpOrderStatusMutation,
  useFhpRefundMutation,
  useFhpCreateInvoiceMutation,
  useFhpInvoiceStatusMutation,
} = adminApi;
