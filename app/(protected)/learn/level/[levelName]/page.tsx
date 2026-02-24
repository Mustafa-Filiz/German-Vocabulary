import LevelContainer from "@/features/learn/level";
import { Level } from "@/types";

async function LevelPage({
  params,
}: {
  params: Promise<{ levelName: Level }>;
}) {
  const { levelName } = await params;
  return <LevelContainer level={levelName} />;
}

export default LevelPage;
