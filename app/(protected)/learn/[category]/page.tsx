import LearnCategoryContainer from "@/features/learn/category";
import { Category } from "@/types";

async function LearnCategoryPage({
  params,
}: {
  params: Promise<{ category: Category }>;
}) {
  const { category } = await params;
  return <LearnCategoryContainer category={category} />;
}

export default LearnCategoryPage;
