import { BlogArchive } from "@/components/blog/BlogArchive";

export const metadata = {
  title: "Статьи - Стройоптторг",
};

export default function StatiCategoryPage() {
  return <BlogArchive category="stati" page={1} basePath="/stati" />;
}
