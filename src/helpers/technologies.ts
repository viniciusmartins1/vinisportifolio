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
  size: number;
}

export const technologiesList: ITechnologies[] = [
  {
    src: react,
    name: "React",
    size: 160,
  },
  {
    src: angular,
    name: "Angular",
    size: 100,
  },
  {
    src: css,
    name: "CSS",
    size: 150,
  },
  {
    src: jenkins,
    name: "Jenkins",
    size: 80,
  },
  {
    src: figma,
    name: "Figma",
    size: 120,
  },
  {
    src: git,
    name: "Git",
    size: 86,
  },
  {
    src: html,
    name: "HTML5",
    size: 124,
  },
  {
    src: javascript,
    name: "JavaScript",
    size: 160,
  },
  {
    src: bitbucket,
    name: "BitBucket",
    size: 80,
  },
  {
    src: nextjs,
    name: "Next.JS",
    size: 105,
  },
  {
    src: nodejs,
    name: "Node.JS",
    size: 140,
  },
  {
    src: sass,
    name: "Sass",
    size: 100,
  },
  {
    src: gitHub,
    name: "Git Hub",
    size: 90,
  },
  {
    src: mySQL,
    name: "MySQL",
    size: 135,
  },
  {
    src: redux,
    name: "Redux",
    size: 90,
  },
  {
    src: typescript,
    name: "TypeScript",
    size: 150,
  },
  {
    src: sonarqube,
    name: "SonarQube",
    size: 80,
  },
  {
    src: jest,
    name: "Jest",
    size: 100,
  },
  {
    src: azure,
    name: "Azure DevOps",
    size: 60,
  },
];
