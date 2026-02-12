"use client";

import {
  Dumbbell,
  FileQuestionMark,
  GraduationCap,
  UserRoundCog,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/learn", label: "Learn", key: "learn" },
  { href: "/practice", label: "Practice", key: "practice" },
  { href: "/quiz", label: "Quiz", key: "quiz" },
  { href: "/profile", label: "Profile", key: "profile" },
];

function Icon({ name }: { name: string }) {
  switch (name) {
    case "learn":
      return <GraduationCap />;
    case "practice":
      return <Dumbbell />;
    case "quiz":
      return <FileQuestionMark />;
    case "profile":
      return <UserRoundCog />;
    default:
      return null;
  }
}

export default function TabBar() {
  const pathname = usePathname() || "/";

  return (
    <nav
      aria-label="Primary"
      className="max-w-90 fixed left-4 right-4 bottom-4 z-40 rounded-2xl bg-white/80 backdrop-blur-md shadow-md dark:bg-zinc-900/80 p-2 m-auto safe-bottom"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="flex justify-between items-center">
        {tabs.map((t, i) => {
          const active = pathname.startsWith(t.href);
          const iconName = t.key;
          return (
            <li key={t.key} className="flex-1">
              <Link
                href={t.href}
                className={`flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg ${active ? "text-sky-500" : "text-zinc-600"}`}
                aria-current={active ? "page" : undefined}
              >
                <Icon name={iconName} />
                <span className="text-[11px] leading-none">{t.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
