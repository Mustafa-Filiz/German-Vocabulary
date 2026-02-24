import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Word } from "@/types";
import { ARTICLE_COLORS } from "@/constants";

type Props = {
  word: Word;
};

function WordCard({ word }: Props) {
  const titleClass = word.article ? ARTICLE_COLORS[word.article] : "";

  return (
    <Card className="w-full ">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <CardTitle className={`${titleClass} text-2xl font-bold`}>
              {word.article ? `${word.article} ${word.term}` : word.term}
            </CardTitle>
            {word.pluralForm ? (
              <CardDescription>Plural: {word.pluralForm}</CardDescription>
            ) : null}
          </div>
          <CardAction>
            <div className="flex gap-2 items-center">
              <Badge variant="outline">{word.wordType}</Badge>
              <Badge variant="ghost">{word.level}</Badge>
            </div>
          </CardAction>
        </div>
      </CardHeader>
      <CardContent>
        <p className="font-medium">{word.definitionEng}</p>
        <p className="text-muted-foreground mt-1">{word.definitionTr}</p>
        {word.exampleSentence ? (
          <blockquote className="mt-3 italic text-muted-foreground">{`"${word.exampleSentence}"`}</blockquote>
        ) : null}
      </CardContent>
      {/* <CardFooter className="justify-between">
        <span className="text-sm text-muted-foreground">
          {GERMAN_VOCAB_CATEGORIES[word.category]}
        </span>
      </CardFooter> */}
    </Card>
  );
}

export default WordCard;
