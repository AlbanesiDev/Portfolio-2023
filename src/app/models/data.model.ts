export interface DataModel {
  about_me: AboutMe[];
  skill:    Skill[];
  contact:  Contact[];
}

export interface AboutMe {
  img: string;
  name:        string;
  location:    string;
  time:        string;
  description: string;
}

export interface Contact {
  background?: string;
  links?:      Skill[];
}

export interface Skill {
  name:   string;
  icon:   string;
  url:    string;
  color?: string;
}
