"use client";

import TabBar from "@/components/tab-bar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ProtectedLayout({ children }: Props) {
  return (
    <div className="min-h-screen pb-24" data-vaul-drawer-wrapper="">
      <main className="">{children}</main>
      <TabBar />
    </div>
  );
}
