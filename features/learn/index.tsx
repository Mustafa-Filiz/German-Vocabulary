import PageHeader from "@/components/page-header";
import AddNewWords from "./ui/add-new-words";
import { getCategories } from "./data/get-categories";
import CategoryCard from "./ui/category-card";

async function LearnContainer() {
  const categories = await getCategories();

  return (
    <div>
      <PageHeader title="Learn" actions={<AddNewWords />} />
      <div className="mt-8 space-y-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.categoryTitle}
            category={category.categoryTitle}
            wordCount={category.wordCount}
          />
        ))}
      </div>
    </div>
  );
}

export default LearnContainer;
