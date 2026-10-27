import type { Role } from "@/lib/admin/rbac";

/**
 * Admin panelning o'z serveri (app/api/admin/*) javoblari va Fintechhub-payment
 * Merchant API turlari. Hujjat: http://159.223.145.49:3078 (Status and refunds, Invoices).
 */

/**
 * live — serverda ADMIN_USERS va ADMIN_SESSION_SECRET o'rnatilgan: login serverda tekshiriladi.
 * demo — server sozlanmagan: faqat mahalliy ishlab chiqishda, mock login bilan.
 */
export type AdminMode = "live" | "demo";

export interface AdminSessionUser {
  name: string;
  role: Role;
}

export interface AdminSession {
  mode: AdminMode;
  /** Serverda Fintechhub kalitlari o'rnatilganmi */
  fhp: boolean;
  user: AdminSessionUser | null;
}

export interface FhpPayment {
  payment_id: number;
  service: number;
  merchant_trans_id: string;
  amount: string;
  payment_type: string;
  status: number;
  status_note: string;
  merchant_prepare_id?: number;
  merchant_confirm_id?: number;
}

export interface FhpStatusResponse {
  error_code: number;
  error_note: string;
  payment_status: number;
  payment_status_note: string;
  payment: FhpPayment;
}

export interface FhpRefundResponse {
  error_code: number;
  error_note: string;
  payment_id: number;
  payment_status: number;
}

export type FhpInvoiceStatus = "created" | "paid" | "expired" | "cancelled";

export interface FhpInvoice {
  invoice_id: number;
  service: number;
  amount: string;
  phone_number: string;
  merchant_trans_id: string;
  status: FhpInvoiceStatus;
  created_at: string;
}

export interface FhpInvoiceCreateInput {
  merchant_trans_id: string;
  amount: number;
  phone_number: string;
}

export interface FhpInvoiceCreateResponse {
  error_code: number;
  error_note: string;
  invoice_id: number;
}

export interface FhpInvoiceStatusResponse {
  error_code: number;
  error_note: string;
  invoice_status: FhpInvoiceStatus;
  invoice: FhpInvoice;
}

export interface FhpHealth {
  configured: boolean;
  ok: boolean;
  auth?: boolean;
  baseUrl?: string;
  serviceId?: number;
  error?: string | null;
}
