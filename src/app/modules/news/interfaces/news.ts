export interface NewsItem {
  id: string;
  title: string;
  image: string;
  short_description: string;
}

export interface NewsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: NewsItem[];
}
export interface News {
  [key: number]: NewsResponse;
  currentPage: number;
}
