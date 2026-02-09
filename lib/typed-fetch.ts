import { toast } from "sonner";
import { z } from "zod";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export async function typedFetch<T>(
  url: string,
  options: RequestInit,
  schema: z.ZodType<T>,
): Promise<T> {
  const res = await fetch(`${BASE_URL}${url}`, options);

  if (!res.ok) {
    throw new Error(`HTTP error ${res.status}`);
  }

  const data = await res.json();

  const result = schema.safeParse(data);
  if (!result.success) {
    console.error(result.error.format());
    throw new Error("Response shape is invalid");
  }

  toast.success("Successful!");

  return result.data;
}
