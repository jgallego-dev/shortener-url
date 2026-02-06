import { Database } from "bun:sqlite";

export const urlQueries = (db: Database) => ({
  createShortenedUrl: db.query(
    `INSERT INTO shortened_urls (id, original_url, short_code) VALUES (?, ?, ?)`
  ),
  getOriginalUrlByShortCode: db.query(
    `SELECT original_url FROM shortened_urls WHERE short_code = ?`
  ),
  incrementAccessCount: db.query(
    `UPDATE shortened_urls SET access_count = access_count + 1 WHERE short_code = ?`
  ),
  getAccessCountByShortCode: db.query(
    `SELECT access_count FROM shortened_urls WHERE short_code = ?`
  ),
});
