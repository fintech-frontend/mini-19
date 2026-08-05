import { BlogArchive } from "@/components/blog/BlogArchive";

export const metadata = {
  title: "Советы - Стройоптторг",
};

export default function SovetyCategoryPage() {
  return <BlogArchive category="sovety" page={1} basePath="/sovety" />;
}
