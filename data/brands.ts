export interface Brand {
  name: string;
  /** Tailwind text-color class used for the brand wordmark. */
  colorClass: string;
}

export const brands: Brand[] = [
  { name: "MAKITA", colorClass: "text-teal-600" },
  { name: "BOSCH", colorClass: "text-red-600" },
  { name: "CERESIT", colorClass: "text-blue-700" },
  { name: "GROHE", colorClass: "text-sky-700" },
  { name: "STABILA", colorClass: "text-amber-500" },
  { name: "KRAFTOOL", colorClass: "text-orange-600" },
  { name: "TIKKURILA", colorClass: "text-pink-600" },
  { name: "HAMMERITE", colorClass: "text-emerald-700" },
];
