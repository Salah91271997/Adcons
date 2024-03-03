export interface Result {
  name: string;
  role: string;
  photo: string;
}

export interface Leadership {
  name: string;
  role: string;
  photo: string;
}

export interface Location {
  location: string;
  about_us: string;
  link: string;
  svg: string;
}

export interface History {
  year: string;
  about_us: string;
  image: string;
  title: string;
  description: string;
}

export interface Aboutus {
  location: Location[];
  history: History[];
  service_title: string;
  service_subtitle: string;
  service_quote: string;
  service_img: string;
  service_btn: string;
  mission_title: string;
  mission_description: string;
  vision_title: string;
  vision_description: string;
  history_title: string;
  achievements_title: string;
  achievements_description: string;
  achievements_projects_no: number;
  achievements_projects_description: string;
  achievements_employees_no: number;
  achievements_employees_description: string;
  achievements_locations_no: number;
  achievements_locations_description: string;
  projects_title: string;
  projects_description: string;
  projects_btn: string;
  projects_image: string;
  quote: string;
  contact_us_title: string;
  contact_us_subtitle: string;
  contact_us_svg?: string;
  contact_us_btn: string;
  contact_us_description: string;
  leadership: Leadership[];
  leadership_title: string;
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

export interface AboutUs {
  about_us: Aboutus;
  social: Social;
}
