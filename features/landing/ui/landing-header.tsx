import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold">Wortschatzii</span>
          </div>

          <div className="w-full flex gap-4 justify-end">
            <Button variant="outline">Register</Button>
            <Button>Login</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default LandingHeader;
