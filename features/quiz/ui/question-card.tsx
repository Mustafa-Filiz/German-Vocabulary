import { Card, CardContent } from "@/components/ui/card";
import { ARTICLE_COLORS } from "@/constants";
import { Article } from "@/types";

interface QuestionCardProps {
  term: string;
  article: Article | null;
}

function QuestionCard({ term, article }: QuestionCardProps) {
  const titleClass = article ? ARTICLE_COLORS[article] : "";
  return (
    <Card className="w-full h-50 flex justify-center items-center text-2xl font-bold">
      <CardContent className={titleClass}>
        {article ? `${article} ${term}` : term}
      </CardContent>
    </Card>
  );
}

export default QuestionCard;
