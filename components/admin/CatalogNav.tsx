"use client";

import { SubNav } from "./ui";

/** Mahsulotlar bo'limi: mahsulotlar, kategoriyalar, brendlar. */
export function CatalogNav() {
  return (
    <SubNav
      links={[
        ["/admin/products", "Mahsulotlar"],
        ["/admin/categories", "Kategoriyalar"],
        ["/admin/brands", "Brendlar"],
      ]}
    />
  );
}
