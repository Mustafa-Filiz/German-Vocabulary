import { Category } from "@/types";
import { getWords } from "../data/get-words";
import PageHeader from "@/components/page-header";
import { GERMAN_VOCAB_CATEGORIES } from "@/constants";
import WordCard from "../ui/word-card";

async function LearnCategoryContainer({ category }: { category: Category }) {
  const words = await getWords(category);

  return (
    <div>
      <PageHeader
        title={`Category: ${GERMAN_VOCAB_CATEGORIES[category]}`}
        subtitle={`You have ${words.length} ${words.length === 1 ? "word" : "words"} in this category.`}
        backHref="/learn"
      />
      <div className="flex flex-col gap-4">
        {words.map((word) => (
          <WordCard key={word.id} word={word} />
        ))}
      </div>
    </div>
  );
}

export default LearnCategoryContainer;
