export interface ServicePage {
  title: string;
  description: string;
  see_project_title: string;
  see_project_button: string;
  see_project_image: string;
  here_for_you_title1: string;
  here_for_you_title2: string;
  here_for_you_description: string;
  contact_button: string;
}

export interface Service {
  id: string;
  icon: string;
  name: string;
  description: string;
  image: string;
}
export interface ProductImage {
  image: string;
}

export interface Service_products {
  sector: string;
  name: string;
  description: string;
  product_images: ProductImage[];
}

export interface ServiceDetails {
  id: string;
  icon: string;
  name: string;
  description: string;
  image: string;
  overview_title: string;
  overview_description: string;
  loaded: boolean;
  service_products: Service_products[];
}

export interface Services {
  service_page: ServicePage;
  services: Service[];
}
