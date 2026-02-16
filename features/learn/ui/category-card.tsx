import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type Props = {
  title: string;
  wordCount: number;
};

function CategoryCard({ title, wordCount }: Props) {
  return (
    <Card className="w-full hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{title}</span>
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
