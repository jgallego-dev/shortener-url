import { Hono } from "hono";
import { logger } from "hono/logger";
import { initializeDatabase } from "./config/database.js";
import type { AppContext } from "./config/context.js";

const app = new Hono<AppContext>();

const db = initializeDatabase();

app.use("*", logger());

app.use("*", async (c, next) => {
  c.set("db", db);
  await next();
});

app.get("/", (c) => {
  return c.text("Hello, Hono!");
});

export default app;
