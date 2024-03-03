export interface ProjectGetResponse {
  product_page: ProjectPage;
  filters: ProductFiltersResponse;
  products: ProjectsResonse;
}
export interface ProjectsResonse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Project[];
}

export interface Projects {
  // error: any;
  // errorMessage: any;
  [key: string | number]: {
    [key: number]: ProjectsResonse;
    currentPage: number;
  };
}
export interface ProjectPage {
  title: string;
  description: string;
}
export interface ProductFiltersResponse {
  services: FilterElement[];
  sectors: FilterElement[];
  years: number[];
}
export interface ProductFilters {
  services: FilterElement[];
  sectors: FilterElement[];
  years: FilterElement[];
}
export interface FilterElement {
  id: string | number;
  name: string | number;
}
export interface Project {
  id: string;
  year: number;
  sector: FilterElement;
  name: string;
  description: string;
  location: Location;
  image: string;
  service: FilterElement | null;
}
export interface Location {
  id: string;
  name: string;
  link: string;
  image: string;
}
