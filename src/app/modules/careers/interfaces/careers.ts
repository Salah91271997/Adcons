export interface Careers {
  career_page: CareerPage;
  careers: CareersList;
}

export interface CareerPage {
  description: string;
  name: string;
}

export interface CareersList {
  count: number;
  next: string | null;
  previous: string | null;
  results: CareerItem[];
}
export interface CareerItem {
  description: string;
  id: string;
  image: string;
  name: string;
}

export interface CareerDetails {
  description: string;
  id: string;
  image: string;
  location: string;
  name: string;
  requirement_description: string;
  requirement_title: string;
  responsibility_description: string;
  responsibility_title: string;
  work_days: string;
  work_hours: string;
  work_type: string;
  loaded: boolean;
}
