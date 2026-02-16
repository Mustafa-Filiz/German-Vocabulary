import LearnCategoryContainer from "@/features/learn/category";
import { Category } from "@/types";

async function LearnCategoryPage({
  params,
}: {
  params: Promise<{ categoryName: Category }>;
}) {
  const { categoryName } = await params;
  return <LearnCategoryContainer category={categoryName} />;
}

export default LearnCategoryPage;
