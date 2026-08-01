import { FIVE, FOUR, ONE, SIX, THREE, TWO } from "../constants/numbers";

interface IMenu {
  id: number;
  menu: string;
  link: string;
}

export const menus: IMenu[] = [
  {
    id: ONE,
    menu: "home",
    link: "",
  },
  {
    id: TWO,
    menu: "about",
    link: "",
  },
  {
    id: THREE,
    menu: "skills",
    link: "",
  },
  {
    id: FOUR,
    menu: "career",
    link: "",
  },
  {
    id: FIVE,
    menu: "projects",
    link: "",
  },
  {
    id: SIX,
    menu: "contact",
    link: "",
  },
];
