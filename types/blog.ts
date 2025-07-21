export interface BlogPost {
  id: string;
  title: string;
  body: string;
  publishedAt: string;
  updatedAt: string;
  createdAt: string;
}

export interface BlogList {
  contents: BlogPost[];
  totalCount: number;
  offset: number;
  limit: number;
} 