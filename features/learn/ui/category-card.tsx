import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Category } from "@/types";
import { GERMAN_VOCAB_CATEGORIES } from "@/constants";

type Props = {
  category: Category;
  wordCount: number;
};

function CategoryCard({ category, wordCount }: Props) {
  const categoryLabel = GERMAN_VOCAB_CATEGORIES[category] || category;

  return (
    <Card className="w-full hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{categoryLabel}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          {wordCount} {wordCount === 1 ? "word" : "words"} in this category
        </p>
      </CardContent>
    </Card>
  );
}

export default CategoryCard;
