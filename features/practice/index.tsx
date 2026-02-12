import PageHeader from "@/components/page-header";
import { getRandomWords } from "./data/get-random-words";
import PracticeCarousel from "./ui/practice-carousel";

async function PracticeContainer() {
  const practiceWords = await getRandomWords();
  return (
    <>
      <PageHeader title="Practice" />
      <div className="flex-1 flex items-center p-4">
        <PracticeCarousel words={practiceWords} />
      </div>
    </>
  );
}

export default PracticeContainer;
