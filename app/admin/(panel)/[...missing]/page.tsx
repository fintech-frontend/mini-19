import { redirect } from "next/navigation";

/** /admin ichidagi noma'lum manzil — bosh sahifaga (saytning 404 sahifasi admin uchun emas). */
export default function MissingAdminPage() {
  redirect("/admin");
}
