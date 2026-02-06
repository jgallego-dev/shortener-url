import { Database } from "bun:sqlite";

export const initializeDatabase = () => {
  const db = new Database("app.db");

  // Example table creation
  db.run(`
    CREATE TABLE IF NOT EXISTS shortened_urls (
        id TEXT PRIMARY KEY UNIQUE ,
        original_url TEXT NOT NULL,
        short_code TEXT NOT NULL UNIQUE,
        access_count INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
    `);

  return db;
};
