import { FilterElement, Location, Project } from './projects';
export interface ProjectsDetailsGetResponse {
  product: {
    id: any;
    year: number;
    sector: FilterElement;
    name: string;
    description: string;
    location: Location;
    service: FilterElement;
    product_images: Images[];
    product_details: Details | null;
    product_certificates: Certificates | null;
    product_statistics: Statistics[];
    x_axis: string[];
  };
  related_products: Project[];

  loaded: boolean;
}
export interface Statistics {
  x: string;
  y: number;
}
export interface Images {
  image: string;
}
export interface Details {
  title: string;
  description: string;
  progress_1: number;
  progress_2: number;
  progress_3: number;
}
export interface Certificates {
  title: string;
  description: string;
  certificate_1: string;
  certificate_2: string;
}
export interface ProjectsDetailsResponse {
  [key: string]: ProjectsDetailsGetResponse;
}
