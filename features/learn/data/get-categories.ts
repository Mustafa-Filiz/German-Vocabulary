import { typedFetch } from "@/lib/typed-fetch";
import { categoryEnum } from "@/types";
import z from "zod";

const categoriesResponseSchema = z.array(
  z.object({
    categoryTitle: categoryEnum,
    wordCount: z.number(),
  }),
);

export async function getCategories() {
  const response = await typedFetch(
    "/api/categories",
    categoriesResponseSchema,
  );
  return response;
}
