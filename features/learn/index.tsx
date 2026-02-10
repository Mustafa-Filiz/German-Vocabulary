import PageHeader from "@/components/page-header";
import AddNewWords from "./ui/add-new-words";
import { getCategories } from "./data/get-categories";
import CategoryCard from "./ui/category-card";
import Link from "next/link";

async function LearnContainer() {
  const categories = await getCategories();

  return (
    <div>
      <PageHeader title="Learn" actions={<AddNewWords />} />
      <div className="flex flex-col gap-4 p-4">
        {categories.map((category) => (
          <Link
            key={category.categoryTitle}
            href={`/learn/${category.categoryTitle}`}
          >
            <CategoryCard
              category={category.categoryTitle}
              wordCount={category.wordCount}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LearnContainer;
