"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import FlipCard from "@/components/ui/flip-card";
import { Word } from "@/types";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

interface CardCarouselProps {
  words: Word[];
}

export function CardCarousel({ words }: CardCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();

  function skipNextWord() {
    if (!api) return;
    api.scrollNext();
  }

  function handleLearnedClick() {
    skipNextWord();
  }

  function handleNeedPracticeClick() {
    skipNextWord();
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-around gap-8">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          watchDrag: false,
        }}
      >
        <CarouselContent>
          {words.map((word, index) => (
            <CarouselItem key={index}>
              <FlipCard
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
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="w-full flex justify-between gap-4">
        <Button
          variant="destructive"
          className="flex-1"
          onClick={handleNeedPracticeClick}
        >
          <X />
          Need practice
        </Button>
        <Button
          variant="default"
          className="flex-1"
          onClick={handleLearnedClick}
        >
          <Check />
          Learned
        </Button>
      </div>
    </div>
  );
}
