interface ISkill {
  title: string;
  list: string[];
}

export const skillList: ISkill[] = [
  {
    title: "pages.skills.frontEnd",
    list: [
      "React",
      "Next.js",
      "Angular",
      "TypeScript",
      "React Native",
      "HTML5",
      "CSS3",
      "Redux",
      "Ionic",
      "SSR",
      "Sass",
    ],
  },
  {
    title: "pages.skills.backEnd",
    list: ["Node.js", "C#", "MVC Pattern", "Database", "SQL", "APIs REST"],
  },
  {
    title: "pages.skills.testingAndQA",
    list: [
      "React Testing Library",
      "SonarQube",
      "Jest",
      "Jasmine",
      "Karma",
      "Unit Test",
    ],
  },
  {
    title: "pages.skills.devOpsAndVersion",
    list: [
      "Git",
      "GitLab",
      "BitBucket",
      "GitHub",
      "Azure DevOps",
      "Jenkins",
      "CI/CD",
    ],
  },
  {
    title: "pages.skills.agileMethodologies",
    list: ["Scrum", "Kanban"],
  },
  {
    title: "pages.skills.tools",
    list: ["Jira", "Trello", "Postman", "Figma", "Linux"],
  },
];
