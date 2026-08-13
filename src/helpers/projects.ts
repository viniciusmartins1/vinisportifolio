import codeCoffeDelivery from "../assets/images/projects/coder_coffee_delivery.png";
import codeIgniteShop from "../assets/images/projects/coder_ignite_shop.png";
import codeGithubBlog from "../assets/images/projects/coder_github_blog.png";
import educationalBook from "../assets/images/projects/coder_coffee_delivery.png";
import educationalInstructor from "../assets/images/projects/coder_ignite_shop.png";
import educationalYoutube from "../assets/images/projects/coder_github_blog.png";
import internationalCourse from "../assets/images/projects/coder_coffee_delivery.png";
import internationalGardening from "../assets/images/projects/coder_ignite_shop.png";
import internationalHouseKeeping from "../assets/images/projects/coder_github_blog.png";

interface IProject {
  title: string;
  description: string;
  image: string;
  badges: string[];
  link: string;
}

interface IProjectList {
  title: string;
  titlePosition: "left" | "right";
  primaryColor: "--color-primary" | "--color-blue" | "--color-pink";
  projects: IProject[];
}

const code: IProject[] = [
  {
    title: "Coffee Delivery",
    description: "code.projects.coffeDeliveryDescription",
    image: codeCoffeDelivery,
    badges: ["React", "Typescript"],
    link: "https://github.com/viniciusmartins1/react-coffee-delivery",
  },
  {
    title: "Ignite Shop",
    description: "code.projects.igniteShopDescription",
    image: codeIgniteShop,
    badges: ["Next.js", "SSR", "Typescript"],
    link: "https://github.com/viniciusmartins1/ignite-shop",
  },
  {
    title: "GitHub Blog",
    description: "code.projects.githubBlogDescription",
    image: codeGithubBlog,
    badges: ["React Router DOM", "API", "Typescript"],
    link: "https://github.com/viniciusmartins1/github-blog",
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
    title: "Twins Tech",
    description: "educational.projects.channelDescription",
    image: educationalYoutube,
    badges: ["educational.projects.community", "Youtube"],
    link: "https://www.youtube.com/@twins_tech",
  },
  {
    title: "educational.projects.instructorTitle",
    description: "educational.projects.instructorDescription",
    image: educationalInstructor,
    badges: ["educational.projects.volunteering", "Soft-Skills"],
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
      "Auckland",
    ],
    link: "hhttps://seafield.ac.nz/",
  },
  {
    title: "international.projects.gardeningTitle",
    description: "international.projects.gardeningDescription",
    image: internationalGardening,
    badges: [
      "international.projects.dailyEnglish",
      "international.projects.environment",
      "Hawke's Bay",
    ],
    link: "https://www.thecoachhousegardenrooms.co.nz",
  },
  {
    title: "international.projects.housekeepingTitle",
    description: "international.projects.housekeepingDescription",
    image: internationalHouseKeeping,
    badges: [
      "international.projects.dailyEnglish",
      "international.projects.languages",
      "Queenstown",
    ],
    link: "https://www.hippolodge.co.nz",
  },
];

export const projects: IProjectList[] = [
  {
    title: "code.title",
    titlePosition: "left",
    primaryColor: "--color-primary",
    projects: code,
  },
  {
    title: "educational.title",
    titlePosition: "right",
    primaryColor: "--color-pink",
    projects: educational,
  },
  {
    title: "international.title",
    titlePosition: "left",
    primaryColor: "--color-blue",
    projects: international,
  },
];
