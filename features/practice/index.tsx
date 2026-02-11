import PageHeader from "@/components/page-header";
import { getRandomWords } from "./data/get-random-words";
import { CardCarousel } from "./ui/card-carousel";

async function PracticeContainer() {
  const practiceWords = await getRandomWords();
  return (
    <>
      <PageHeader title="Practice" />
      <div className="carousel-area p-4 flex flex-col flex-1">
        <CardCarousel words={practiceWords} />
      </div>
    </>
  );
}

export default PracticeContainer;
