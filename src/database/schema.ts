import { z } from "zod";

export const CreateShortenedUrlSchema = z.object({
  originalUrl: z.httpUrl(),
});

export const GetOriginalUrlParamsSchema = z.object({
  shortCode: z.string().min(5).max(10),
});

export const GetAccessCountParamsSchema = z.object({
  shortCode: z.string().min(5).max(10),
});
