import TabBar from "@/components/tab-bar";
import { ReactNode, Suspense } from "react";
import Loading from "./loading";

interface Props {
  children: ReactNode;
}

export default function ProtectedLayout({ children }: Props) {
  return (
    <main className="min-h-screen flex flex-col pb-24">
      {children}
      <Suspense fallback={<Loading />}>
        <TabBar />
      </Suspense>
    </main>
  );
}
