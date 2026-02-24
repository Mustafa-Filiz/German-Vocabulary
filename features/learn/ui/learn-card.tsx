import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface LearnCardProps {
  title: string;
  description: string;
}

function LearnCard({ title, description }: LearnCardProps) {
  return (
    <Card className="w-full hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export default LearnCard;
