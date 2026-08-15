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

export const startSectionObserver = (callback: (sectionId: string) => void) => {
  const sections = menus
    .map(({ sectionId }) => document.getElementById(sectionId))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) callback(entry.target.id);
      });
    },
    {
      threshold: 0.3,
    },
  );

  sections.forEach((section) => {
    if (section) observer.observe(section);
  });

  return observer;
};
