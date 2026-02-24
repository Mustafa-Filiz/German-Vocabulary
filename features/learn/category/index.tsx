import { Category } from "@/types";
import PageHeader from "@/components/page-header";
import { GERMAN_VOCAB_CATEGORIES } from "@/constants";
import { getWords } from "../data/get-words";
import LearnCarousel from "../ui/learn-carousel";

async function LearnCategoryContainer({ category }: { category: Category }) {
  const words = await getWords({ category });

  return (
    <>
      <PageHeader
        title={`Category: ${GERMAN_VOCAB_CATEGORIES[category]}`}
        backHref="/learn"
      />
      <div className="flex-1 flex items-center p-4">
        <LearnCarousel words={words} />
      </div>
    </>
  );
}

export default LearnCategoryContainer;
