import codeCoffeDelivery from "../assets/images/projects/coder_coffee_delivery.png";
import codeIgniteShop from "../assets/images/projects/coder_ignite_shop.png";
import codeGithubBlog from "../assets/images/projects/coder_github_blog.png";
import codeDesignSystem from "../assets/images/projects/coder_storybook.png";
import codeMusicplayer from "../assets/images/projects/coder_musicplayer.png";
import codeMeguie from "../assets/images/projects/coder_meguie.png";
import educationalBook from "../assets/images/projects/educational_book.png";
import educationalInstructor from "../assets/images/projects/educational_instructor.png";
import educationalYoutube from "../assets/images/projects/educational_youtube.png";
import internationalCourse from "../assets/images/projects/international_course.jpg";
import internationalGardening from "../assets/images/projects/international_garding.png";
import internationalHouseKeeping from "../assets/images/projects/international_housekeeping.jpg";
import type { backgroundClasses, hoverClasses } from "../styles/classes";

export interface IProject {
  title: string;
  description: string;
  image: string;
  badges: string[];
  link: string;
}

interface IProjectList {
  title: string;
  titlePosition: "left" | "right";
  backgroundColor: keyof typeof backgroundClasses;
  hoverColor: keyof typeof hoverClasses;
  projects: IProject[];
}

const code: IProject[] = [
  {
    title: "code.projects.coffeDeliveryTitle",
    description: "code.projects.coffeDeliveryDescription",
    image: codeCoffeDelivery,
    badges: ["code.projects.react", "code.projects.typescript"],
    link: "https://github.com/viniciusmartins1/react-coffee-delivery",
  },
  {
    title: "code.projects.igniteShopTitle",
    description: "code.projects.igniteShopDescription",
    image: codeIgniteShop,
    badges: [
      "code.projects.nextjs",
      "code.projects.ssr",
      "code.projects.typescript",
    ],
    link: "https://github.com/viniciusmartins1/ignite-shop",
  },
  {
    title: "code.projects.githubBlogTitle",
    description: "code.projects.githubBlogDescription",
    image: codeGithubBlog,
    badges: [
      "code.projects.reactRouter",
      "code.projects.api",
      "code.projects.typescript",
    ],
    link: "https://github.com/viniciusmartins1/github-blog",
  },
  {
    title: "code.projects.designSystemTitle",
    description: "code.projects.designSystemDescription",
    image: codeDesignSystem,
    badges: [
      "code.projects.storybook",
      "code.projects.stitches",
      "code.projects.monoRepo",
    ],
    link: "https://github.com/viniciusmartins1/design-system",
  },
  {
    title: "code.projects.meguieTitle",
    description: "code.projects.meguieDescription",
    image: codeMeguie,
    badges: [
      "code.projects.androidStudio",
      "code.projects.java",
      "code.projects.sqlLite",
    ],
    link: "https://github.com/viniciusmartins1/meguie",
  },
  {
    title: "code.projects.musicplayerTitle",
    description: "code.projects.musicplayerDescription",
    image: codeMusicplayer,
    badges: [
      "code.projects.css",
      "code.projects.flexBox",
      "code.projects.html",
    ],
    link: "https://github.com/viniciusmartins1/react-music-player",
  },
];

const educational: IProject[] = [
  {
    title: "educational.projects.bookTitle",
    description: "educational.projects.bookDescription",
    image: educationalBook,
    badges: ["educational.projects.article", "educational.projects.book"],
    link: "https://publicacoes.even3.com.br/book/tecnologias-do-amanha-3242575",
  },
  {
    title: "educational.projects.channelTitle",
    description: "educational.projects.channelDescription",
    image: educationalYoutube,
    badges: ["educational.projects.community", "educational.projects.youtube"],
    link: "https://www.youtube.com/@twins_tech",
  },
  {
    title: "educational.projects.instructorTitle",
    description: "educational.projects.instructorDescription",
    image: educationalInstructor,
    badges: [
      "educational.projects.volunteering",
      "educational.projects.softskills",
    ],
    link: "https://escoladanuvem.org",
  },
];

const international: IProject[] = [
  {
    title: "international.projects.exchangeTitle",
    description: "international.projects.exchangeDescription",
    image: internationalCourse,
    badges: [
      "international.projects.course",
      "international.projects.languages",
      "international.projects.auckland",
    ],
    link: "https://seafield.ac.nz/",
  },
  {
    title: "international.projects.gardeningTitle",
    description: "international.projects.gardeningDescription",
    image: internationalGardening,
    badges: [
      "international.projects.environment",
      "international.projects.hawkesBay",
    ],
    link: "https://www.thecoachhousegardenrooms.co.nz",
  },
  {
    title: "international.projects.housekeepingTitle",
    description: "international.projects.housekeepingDescription",
    image: internationalHouseKeeping,
    badges: [
      "international.projects.languages",
      "international.projects.queenstown",
    ],
    link: "https://www.hippolodge.co.nz",
  },
];

export const projects: IProjectList[] = [
  {
    title: "code.title",
    titlePosition: "left",
    backgroundColor: "pink-dark",
    hoverColor: "pink",
    projects: code,
  },
  {
    title: "educational.title",
    titlePosition: "right",
    backgroundColor: "primary-dark",
    hoverColor: "primary",
    projects: educational,
  },
  {
    title: "international.title",
    titlePosition: "left",
    backgroundColor: "blue-dark",
    hoverColor: "blue",
    projects: international,
  },
];
