import PageHeader from "@/components/page-header";
import { Level } from "@/types";
import LearnCarousel from "../ui/learn-carousel";
import { getWords } from "../data/get-words";

interface LevelContainerProps {
  level: Level;
}

async function LevelContainer({ level }: LevelContainerProps) {
  const words = await getWords({ level });
  return (
    <>
      <PageHeader title={`Level: ${level}`} backHref="/learn" />
      <div className="flex-1 flex items-center p-4">
        <LearnCarousel words={words} />
      </div>
    </>
  );
}

export default LevelContainer;
