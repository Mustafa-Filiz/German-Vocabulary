import PageHeader from "@/components/page-header";
import { getRandomWords } from "./data/get-random-words";
import FlipCard from "@/components/ui/flip-card";

async function PracticeContainer() {
  const practiceWords = await getRandomWords();
  return (
    <>
      <PageHeader title="Practice" />
      <div className="flex flex-col gap-4 p-4">
        {practiceWords.map((word) => (
          <FlipCard
            key={word.id}
            frontContent={
              word.article ? `${word.article} ${word.term}` : word.term
            }
            backContent={
              <div className="flex flex-col gap-2">
                <p>{word.definitionEng}</p>
                <span>{word.definitionTr}</span>
              </div>
            }
          />
        ))}
      </div>
    </>
  );
}

export default PracticeContainer;
