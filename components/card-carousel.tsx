"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Word } from "@/types";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

interface CardCarouselProps {
  words: Word[];
  cardItem: (word: Word) => React.ReactNode;
  onComplete?: () => void;
}

export function CardCarousel({
  words,
  cardItem,
  onComplete,
}: CardCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();

  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
    };

    onSelect();

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  function handleComplete() {
    onComplete?.();
    api?.scrollTo(0);
  }

  return (
    <div className="w-full">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {words.map((word, index) => (
            <CarouselItem key={index}>{cardItem(word)}</CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex items-center justify-center mt-4">
        <span className="text-sm text-muted-foreground">
          {current} / {count}
        </span>
      </div>
      {current === count && onComplete && (
        <Button className="mt-4 w-full" onClick={handleComplete}>
          Next Practice Session
        </Button>
      )}
    </div>
  );
}
