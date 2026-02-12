import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  backHref?: string;
  actions?: ReactNode;
  center?: boolean;
}

export default function PageHeader({
  title,
  backHref,
  actions,
  center = false,
}: PageHeaderProps) {
  return (
    <header
      className={`sticky top-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b border-border flex items-center justify-between gap-3 mb-2 px-4`}
    >
      <div
        className={`py-4 flex items-center gap-3 ${center ? "flex-col" : ""}`}
      >
        {backHref && (
          <Link
            href={backHref}
            aria-label="Go back"
            className="-ml-2 inline-flex items-center justify-center rounded-lg text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            <ArrowLeft />
          </Link>
        )}

        <div>
          <h1 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {title}
          </h1>
        </div>
      </div>

      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </header>
  );
}
