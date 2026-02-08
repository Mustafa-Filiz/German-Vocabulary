import { z } from "zod";

export async function typedFetch<T>(
  url: string,
  options: RequestInit,
  schema: z.ZodType<T>
): Promise<T> {
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error(`HTTP error ${res.status}`);
  }

  const data = await res.json();

  const result = schema.safeParse(data);
  if (!result.success) {
    console.error(result.error.format());
    throw new Error("Response shape is invalid");
  }

  return result.data;
}
