"use client";

import { CardCarousel } from "@/components/card-carousel";
import WordCard from "@/components/word-card";
import { Word } from "@/types";

interface LearnCarouselProps {
  words: Word[];
}

function LearnCarousel({ words }: LearnCarouselProps) {
  return (
    <CardCarousel words={words} cardItem={(word) => <WordCard word={word} />} />
  );
}

export default LearnCarousel;
