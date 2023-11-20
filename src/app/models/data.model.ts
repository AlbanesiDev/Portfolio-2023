export interface DataModel {
  about_me: AboutMe[];
  works:    Work[];
  skill:    Skill[];
  contact:  Contact[];
  icons:    Icon[];
}

export interface AboutMe {
  img:         string;
  name:        string;
  location:    string;
  time:        string;
  description: string;
}

export interface Contact {
  background: string;
  links:      Skill[];
}

export interface Skill {
  name:   string;
  icon:   string;
  url:    string;
  color: string;
}

export interface Icon {
  name: string;
  path: string;
}

export interface Work {
  id:          number;
  title:       string;
  description: string;
  img:         string;
  code:        string;
  deploy:      string;
  carousel:    Carousel[];
  stack:       Stack[];
}

export interface Carousel {
  img: string;
}

export interface Stack {
  name: string;
  path: string;
}
