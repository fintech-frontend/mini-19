import { BlogArchive } from "@/components/blog/BlogArchive";

export const metadata = {
  title: "Новости - Стройоптторг",
};

export default function NovostiCategoryPage() {
  return <BlogArchive category="novosti" page={1} basePath="/novosti" />;
}
