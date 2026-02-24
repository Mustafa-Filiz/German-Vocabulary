import PageHeader from "@/components/page-header";
import QuestionCard from "./ui/question-card";
import AnswerArea from "./ui/answer-area";
import { shuffleArray } from "@/utils/shuffle-array";
import { getRandomWords } from "../shared/data/get-random-words";

async function QuizContainer() {
  const [question] = await getRandomWords(1);
  const wrongAnswers = await getRandomWords(3);

  const options = [question, ...wrongAnswers];

  return (
    <>
      <PageHeader title="Quiz" />
      <div className="p-4">
        <QuestionCard term={question.term} article={question.article} />
        <AnswerArea question={question} options={shuffleArray(options)} />
      </div>
    </>
  );
}

export default QuizContainer;
