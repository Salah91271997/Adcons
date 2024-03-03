export interface NewsDetailsGetResponse {
  id: string;
  title: string;
  image: string;
  short_description: string;
  description: Description[];
  loaded: boolean;
}
export interface Description {
  paragraph: string;
  order: number;
  list_items: string;
}
export interface NewsDetailsResponse {
  [key: string]: NewsDetailsGetResponse;
}
