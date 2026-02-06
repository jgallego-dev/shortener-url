import { Database } from "bun:sqlite";
import { urlQueries } from "../database/queries";

export class UrlService {
  private queries;

  constructor(db: Database) {
    this.queries = urlQueries(db);
  }

  async createShortenedUrl(id: string, originalUrl: string, shortCode: string) {
    await this.queries.createShortenedUrl.run(id, originalUrl, shortCode);
  }
}
