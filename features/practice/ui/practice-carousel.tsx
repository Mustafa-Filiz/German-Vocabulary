"use client";

import { CardCarousel } from "@/components/card-carousel";
import FlipCard from "@/components/ui/flip-card";
import { ARTICLE_COLORS } from "@/constants";
import { Article, Word } from "@/types";

interface PracticeCarouselProps {
  words: Word[];
}

function FrontCard({
  term,
  article,
}: {
  term: string;
  article: Article | null;
}) {
  const titleClass = article ? ARTICLE_COLORS[article] : "";
  return (
    <p className={`${titleClass} text-2xl font-bold`}>
      {article ? `${article} ${term}` : term}
    </p>
  );
}

function BackCard({
  definitionEng,
  definitionTr,
  exampleSentence,
}: {
  definitionEng: string;
  definitionTr: string;
  exampleSentence: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-medium">{definitionEng}</p>
      <p className="text-sm text-muted-foreground mt-1">{definitionTr}</p>
      {exampleSentence ? (
        <blockquote className="mt-3 text-sm italic text-muted-foreground">{`"${exampleSentence}"`}</blockquote>
      ) : null}
    </div>
  );
}

function PracticeCarousel({ words }: PracticeCarouselProps) {
  return (
    <CardCarousel
      words={words}
      cardItem={(word) => (
        <FlipCard
          frontContent={<FrontCard term={word.term} article={word.article} />}
          backContent={
            <BackCard
              definitionEng={word.definitionEng}
              definitionTr={word.definitionTr}
              exampleSentence={word.exampleSentence}
            />
          }
        />
      )}
    />
  );
}

export default PracticeCarousel;
