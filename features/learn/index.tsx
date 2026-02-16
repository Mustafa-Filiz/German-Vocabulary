import PageHeader from "@/components/page-header";
import AddNewWords from "./ui/add-new-words";
import { getCategories } from "./data/get-categories";
import CategoryCard from "./ui/category-card";
import Link from "next/link";

async function LearnContainer() {
  const categories = await getCategories();
  const levels = await getLevels();

  return (
    <div>
      <PageHeader
        title="Learn"
        actions={
          <Suspense fallback={<div>Loading...</div>}>
            <AddNewWords />
          </Suspense>
        }
      />
      <div className="p-4">
        <Tabs defaultValue="categories" className="gap-4">
          <TabsList className="w-full">
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="levels">Levels</TabsTrigger>
          </TabsList>
          <TabsContent value="categories" className="grid grid-cols-2 gap-2">
            {categories.map((category) => (
              <Link
                key={category.categoryTitle}
                href={`/learn/category/${category.categoryTitle}`}
              >
                <CategoryCard
                  title={GERMAN_VOCAB_CATEGORIES[category.categoryTitle]}
                  wordCount={category.wordCount}
                />
              </Link>
            ))}
          </TabsContent>
          <TabsContent value="levels" className="flex flex-col gap-4">
            {levels.map((level) => (
              <Link key={level.level} href={`/learn/level/${level.level}`}>
                <CategoryCard title={level.level} wordCount={level.wordCount} />
              </Link>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default LearnContainer;

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Suspense } from "react";
import { getLevels } from "./data/get-levels";
import { GERMAN_VOCAB_CATEGORIES } from "@/constants";

export function TabsDemo() {
  return (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>
              View your key metrics and recent project activity. Track progress
              across all your active projects.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            You have 12 active projects and 3 pending tasks.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="analytics">
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>
              Track performance and user engagement metrics. Monitor trends and
              identify growth opportunities.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            Page views are up 25% compared to last month.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reports">
        <Card>
          <CardHeader>
            <CardTitle>Reports</CardTitle>
            <CardDescription>
              Generate and download your detailed reports. Export data in
              multiple formats for analysis.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            You have 5 reports ready and available to export.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="settings">
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>
              Manage your account preferences and options. Customize your
              experience to fit your needs.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            Configure notifications, security, and themes.
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
