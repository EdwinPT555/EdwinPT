
export enum NAVITEMS {
  home = "home",
  about = "about",
  skills = "skills",
  experience = "experience",
  projects = "projects",
  contact = "contact",
}

export const NavItemsData: INavItem[] = [
  { name: NAVITEMS.home, content: "Home", icon: "fas fa-home", },
  { name: NAVITEMS.about, content: "About Me Content", icon: "fas fa-user", },
  { name: NAVITEMS.skills, content: "Skills Content", icon: "fas fa-code", },
  { name: NAVITEMS.experience, content: "Experience Content", icon: "fas fa-briefcase", },
  { name: NAVITEMS.projects, content: "Projects Content", icon: "fas fa-folder-open", },
  { name: NAVITEMS.contact, content: "Contact Content", icon: "fas fa-envelope", },
];

export interface INavItem {
  name: string,
  content: string,
  icon: string
}