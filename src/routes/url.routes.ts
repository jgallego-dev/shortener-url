import { Hono } from "hono";
import { nanoid } from "nanoid";

import type { AppContext } from "../config/context";
import { CreateShortenedUrlSchema } from "../database/schema";
import { generateUUID, validate } from "../utils";
import type { CreateShortenedUrlInput } from "../types/models";
import { UrlService } from "../services/url.service";

const router = new Hono<AppContext>();

router.post("/shorten", validate.json(CreateShortenedUrlSchema), async (c) => {
  const { originalUrl } = c.req.valid("json") as CreateShortenedUrlInput;

  const shortCode = nanoid(8);
  const uuid = generateUUID();

  const db = c.get("db");
  const urlService = new UrlService(db);

  await urlService.createShortenedUrl(uuid, originalUrl, shortCode);

  return c.json({ shortCode }, 201);
});

export default router;
