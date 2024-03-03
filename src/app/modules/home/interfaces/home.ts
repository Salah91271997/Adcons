export interface HomeGetResponse {
  social: Social;
  home: Home;
}
export interface Social {
  facebook_svg: string;
  facebook_link: string;
  linkedin_svg: string;
  linkedin_link: string;
  instagram_svg: string;
  instagram_link: string;
  youtube_svg: string;
  youtube_link: string;
}
export interface Home {
  hero_title: string;
  hero_title_highlighted: string;
  hero_set: Hero[];
  about_us_title: string;
  about_us_content: string;
  about_us_photo: string;
  about_us_btn: string;
  project_title: string;
  project_title_highlighted: string;
  project_value_title: string;
  project_value_number: string;
  project_area_title: string;
  project_area_number: string;
  project_payback_title: string;
  project_payback_number: string;
  project_experience_title: string;
  project_experience_number: string;
  project_experience_description: string;
  project_growing_title: string;
  project_growing_number: string;
  project_growing_description: string;
  all_project_btn: string;
  project_1: ProjectItem;
  project_2: ProjectItem;
  service_title: string;
  service_description: string;
  service_btn: string;
  service_1: ServiceItem;
  service_2: ServiceItem;
  service_3: ServiceItem;
  service_4: ServiceItem;
  contact_us_title: string;
  contact_us_title_highlighted: string;
  contact_us_logo: string;
  contact_us_btn: string;
  create_value_title: string;
  create_value_description: string;
}
export interface ServiceItem {
  id: string;
  icon: string;
  name: string;
  description: string;
  image: string;
}
export interface ProjectItem {
  id: string;
  name: string;
  image: string;
}
export interface Hero {
  hero_content: string;
  hero_video_or_image: string;
  is_video: boolean;
}
