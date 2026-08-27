import {
  Drill,
  Wrench,
  Package,
  Droplets,
  PaintBucket,
  Nut,
  Plug,
  TreePine,
  type LucideIcon,
} from "lucide-react";

export interface Category {
  slug: string;
  name: string;
  icon: LucideIcon;
}

export const categories: Category[] = [
  { slug: "elektroinstrument", name: "Электроинструмент", icon: Drill },
  { slug: "ruchnoy-instrument", name: "Ручной инструмент", icon: Wrench },
  { slug: "suhie-smesi", name: "Сухие смеси", icon: Package },
  { slug: "santehnika", name: "Сантехника", icon: Droplets },
  { slug: "lkm", name: "Лакокрасочные материалы", icon: PaintBucket },
  { slug: "krepezh", name: "Крепёж и метизы", icon: Nut },
  { slug: "elektrotovary", name: "Электротовары", icon: Plug },
  { slug: "dom-i-sad", name: "Товары для дома и сада", icon: TreePine },
];

export function getCategoryBySlug(slug: string | undefined): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
