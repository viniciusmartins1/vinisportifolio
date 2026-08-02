import { FIVE, FOUR, ONE, SIX, THREE, TWO } from "../constants/numbers";

interface IMenu {
  id: number;
  menu: string;
  sectionId: string;
  link: string;
}

export const menus: IMenu[] = [
  {
    id: ONE,
    menu: "home",
    sectionId: "home-section",
    link: "#home-section",
  },
  {
    id: TWO,
    menu: "about",
    sectionId: "about-section",
    link: "#about-section",
  },
  {
    id: THREE,
    menu: "skills",
    sectionId: "skills-section",
    link: "#skills-section",
  },
  {
    id: FOUR,
    menu: "career",
    sectionId: "career-section",
    link: "#career-section",
  },
  {
    id: FIVE,
    menu: "projects",
    sectionId: "projects-section",
    link: "#projects-section",
  },
  {
    id: SIX,
    menu: "contact",
    sectionId: "contact-section",
    link: "#contact-section",
  },
];
