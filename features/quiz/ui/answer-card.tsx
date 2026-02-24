import { Card, CardContent } from "@/components/ui/card";

interface AnswerCardProps {
  answer: string;
}

function AnswerCard({ answer }: AnswerCardProps) {
  return (
    <Card className="text-xl">
      <CardContent>{answer}</CardContent>
    </Card>
  );
}

export default AnswerCard;
