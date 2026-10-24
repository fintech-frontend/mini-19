/**
 * У товаров бэкенда нет поля с изображением (см. types/api.ts), поэтому фото
 * подбираются по названию товара. Совпадение — по началу слова, без учёта регистра.
 * Товар без совпадения показывает заглушку /images/no-image.svg.
 */
const PRODUCT_IMAGE_RULES: { pattern: RegExp; image: string }[] = [
  { pattern: /перфоратор/i, image: "/images/products/drels.png" },
  { pattern: /смеситель/i, image: "/images/products/rokovina.png" },
  { pattern: /унитаз/i, image: "/images/products/unitaz.png" },
  { pattern: /леска/i, image: "/images/products/ip.png" },
  { pattern: /клей/i, image: "/images/products/porret.png" },
];

export const PRODUCT_PLACEHOLDER_IMAGE = "/images/no-image.svg";

export function findProductImage(name: string): string | null {
  return PRODUCT_IMAGE_RULES.find(({ pattern }) => pattern.test(name))?.image ?? null;
}
