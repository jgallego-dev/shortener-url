import { randomUUID } from "crypto";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

export const generateUUID = () => randomUUID();

export const validate = {
  json: (schema: z.ZodSchema) => zValidator("json", schema),
  param: (schema: z.ZodSchema) => zValidator("param", schema),
  query: (schema: z.ZodSchema) => zValidator("query", schema),
};
