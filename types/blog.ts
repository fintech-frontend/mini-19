export type BlogCategorySlug = "novosti" | "obzory" | "sovety" | "stati";

export interface BlogCategory {
  slug: BlogCategorySlug;
  label: string;
  href: string;
}

export interface BlogPost {
  slug: string;
  category: BlogCategorySlug;
  title: string;
  excerpt: string;
  date: string;
  /** ISO date used only for sorting */
  sortDate: string;
  image: string;
  /** Full article body as an array of paragraphs. Supports a `**bold**` wrapper on a whole paragraph. */
  content: string[];
}
