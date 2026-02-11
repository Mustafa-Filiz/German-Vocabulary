"use client";

import TabBar from "@/components/tab-bar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ProtectedLayout({ children }: Props) {
  return (
    <main className="min-h-screen flex flex-col pb-24">
      {children}
      <TabBar />
    </main>
  );
}
