export type ShortenedUrl = {
  id: string;
  originalUrl: string;
  shortCode: string;
  accessCount: number;
  createdAt: Date;
};

export type CreateShortenedUrlInput = {
  originalUrl: string;
};

export type GetOriginalUrlParams = {
  shortCode: string;
};

export type GetAccessCountParams = {
  shortCode: string;
};
