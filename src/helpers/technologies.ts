import react from "../assets/images/tools/react_logo.png";
import angular from "../assets/images/tools/angular_logo.png";
import css from "../assets/images/tools/css_logo.png";
import figma from "../assets/images/tools/figma_logo.png";
import git from "../assets/images/tools/git_logo.png";
import html from "../assets/images/tools/html_logo.png";
import javascript from "../assets/images/tools/javascript_logo.png";
import jenkins from "../assets/images/tools/jenkins_logo.png";
import typescript from "../assets/images/tools/typescript_logo.png";
import nextjs from "../assets/images/tools/nextjs_logo.png";
import nodejs from "../assets/images/tools/nodejs_logo.png";
import sass from "../assets/images/tools/sass_logo.png";
import azure from "../assets/images/tools/azure_logo.png";
import bitbucket from "../assets/images/tools/bitbucket_logo.png";
import gitHub from "../assets/images/tools/gitHub_logo.png";
import mySQL from "../assets/images/tools/mySQL_logo.png";
import redux from "../assets/images/tools/redux_logo.png";
import sonarqube from "../assets/images/tools/sonarqube_logo.png";
import jest from "../assets/images/tools/jest_logo.png";

interface ITechnologies {
  src: string;
  name: string;
  widthClass: string;
}

export const technologiesList: ITechnologies[] = [
  {
    src: react,
    name: "React",
    widthClass: "w-[120px] lg:w-[160px]",
  },
  {
    src: angular,
    name: "Angular",
    widthClass: "w-[80px] lg:w-[100px]",
  },
  {
    src: css,
    name: "CSS",
    widthClass: "w-[110px] lg:w-[150px]",
  },
  {
    src: jenkins,
    name: "Jenkins",
    widthClass: "w-[60px] lg:w-[80px]",
  },
  {
    src: figma,
    name: "Figma",
    widthClass: "w-[90px] lg:w-[120px]",
  },
  {
    src: git,
    name: "Git",
    widthClass: "w-[66px] lg:w-[86px]",
  },
  {
    src: html,
    name: "HTML5",
    widthClass: "w-[100px] lg:w-[124px]",
  },
  {
    src: javascript,
    name: "JavaScript",
    widthClass: "w-[120px] lg:w-[160px]",
  },
  {
    src: bitbucket,
    name: "BitBucket",
    widthClass: "w-[60px] lg:w-[80px]",
  },
  {
    src: nextjs,
    name: "Next.JS",
    widthClass: "w-[145px] lg:w-[105px]",
  },
  {
    src: nodejs,
    name: "Node.JS",
    widthClass: "w-[100px] lg:w-[140px]",
  },
  {
    src: sass,
    name: "Sass",
    widthClass: "w-[80px] lg:w-[100px]",
  },
  {
    src: gitHub,
    name: "Git Hub",
    widthClass: "w-[70px] lg:w-[90px]",
  },
  {
    src: mySQL,
    name: "MySQL",
    widthClass: "w-[105px] lg:w-[135px]",
  },
  {
    src: redux,
    name: "Redux",
    widthClass: "w-[70px] lg:w-[90px]",
  },
  {
    src: typescript,
    name: "TypeScript",
    widthClass: "w-[110px] lg:w-[150px]",
  },
  {
    src: sonarqube,
    name: "SonarQube",
    widthClass: "w-[60px] lg:w-[80px]",
  },
  {
    src: jest,
    name: "Jest",
    widthClass: "w-[80px] lg:w-[100px]",
  },
  {
    src: azure,
    name: "Azure DevOps",
    widthClass: "w-[40px] lg:w-[60px]",
  },
];
