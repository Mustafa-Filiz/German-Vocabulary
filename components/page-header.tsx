"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backHref?: string;
  actions?: ReactNode;
  center?: boolean;
}

export default function PageHeader({
  title,
  subtitle,
  backHref,
  actions,
  center = false,
}: PageHeaderProps) {
  return (
    <header
      className={`flex items-start ${center ? "flex-col text-center" : "justify-between"} gap-3 mb-6`}
    >
      <div className={`flex items-center gap-3 ${center ? "flex-col" : ""}`}>
        {backHref && (
          <Link
            href={backHref}
            aria-label="Go back"
            className="-ml-2 inline-flex h-9 w-9 items-center justify-center rounded-lg text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            <ArrowLeft />
          </Link>
        )}

        <div>
          <h1 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </header>
  );
}
