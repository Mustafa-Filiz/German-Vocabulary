import { Button } from "@/components/ui/button";
import { BookOpen, Zap, Target, TrendingUp } from "lucide-react";
import LandingHeader from "./ui/landing-header";
import Link from "next/link";

function LandingContainer() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      <LandingHeader />
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Master German Vocabulary
              <span className="block text-primary">in Minutes a Day</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn German vocabulary with intelligent spacing, interactive
              exercises, and personalized learning paths. Build your vocabulary
              from zero to fluency.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="text-base max-w-xs sm:max-w-none"
              asChild
            >
              <Link href="/learn">Start Learning Free</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base max-w-xs sm:max-w-none"
            >
              Learn More
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            No credit card required • 100% free • 5 minutes to get started
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Why choose Wortschatzii?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Designed specifically for German learners who want results, not
              just study
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="space-y-4 p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Smart Spacing</h3>
              <p className="text-muted-foreground">
                Scientifically-proven spaced repetition algorithm optimizes your
                learning
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4 p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Personalized</h3>
              <p className="text-muted-foreground">
                Adaptive learning paths tailored to your level and learning
                goals
              </p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4 p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Interactive</h3>
              <p className="text-muted-foreground">
                Engage with vocabulary through multiple learning modes and
                exercises
              </p>
            </div>

            {/* Feature 4 */}
            <div className="space-y-4 p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Track Progress</h3>
              <p className="text-muted-foreground">
                Visualize your learning journey with detailed statistics and
                insights
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">How it works</h2>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-semibold">
                  1
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">
                  Choose Your Level
                </h3>
                <p className="text-muted-foreground">
                  Start from beginner, intermediate, or advanced. Or let us
                  assess your current level.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-semibold">
                  2
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">Learn Vocabulary</h3>
                <p className="text-muted-foreground">
                  Study words with pronunciation, examples, and context. Learn
                  at your own pace.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-semibold">
                  3
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">
                  Practice & Review
                </h3>
                <p className="text-muted-foreground">
                  Reinforced with spaced repetition exercises that adapt to your
                  learning pattern.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-semibold">
                  4
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">
                  Master & Progress
                </h3>
                <p className="text-muted-foreground">
                  Watch your vocabulary grow with detailed progress tracking and
                  achievement milestones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
        <div className="text-center space-y-8 bg-accent/50 rounded-lg p-8 sm:p-12 md:p-16">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to start your German journey?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of learners who are mastering German vocabulary
              with Wortschatzii
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base max-w-xs sm:max-w-none">
              Get Started Free
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Start with 50 free words today
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              <span className="font-semibold">Wortschatzii</span>
            </div>
            <nav className="flex gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                About
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </nav>
            <p className="text-sm text-muted-foreground">
              © 2026 Wortschatzii. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingContainer;
