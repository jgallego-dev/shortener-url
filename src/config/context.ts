import { Database } from "bun:sqlite";

export type AppContext = {
  Variables: {
    db: Database;
  };
};
