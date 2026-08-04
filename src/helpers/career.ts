interface ICareer {
  role: string;
  place: string;
  company?: string;
  type: "work" | "education";
  startYear: number;
  endYear: number | string;
}

export const careerTimeLine: ICareer[] = [
  {
    role: "pages.career.roles.itInstructor",
    type: "work",
    startYear: 2025,
    company: "Udemy",
    place: "Online",
    endYear: "pages.career.present",
  },
  {
    role: "pages.career.roles.midFrontEnd",
    type: "work",
    startYear: 2025,
    endYear: 2025,
    company: "Globalweb Corp",
    place: "São Paulo - BR",
  },
  {
    role: "pages.career.roles.itInstructor",
    type: "work",
    startYear: 2025,
    endYear: 2025,
    company: "SENAC",
    place: "São Paulo - BR",
  },
  {
    role: "pages.career.education.postGraduate",
    type: "education",
    startYear: 2023,
    endYear: 2023,
    place: "pages.career.education.anhangueraUniversity",
  },
  {
    role: "pages.career.roles.devFrontEnd",
    type: "work",
    startYear: 2022,
    endYear: 2025,
    company: "GFT Group",
    place: "São Paulo - BR",
  },
  {
    role: "pages.career.education.graduation",
    type: "education",
    startYear: 2022,
    endYear: 2020,
    place: "pages.career.education.italoUniversity",
  },
  {
    role: "pages.career.roles.internFrontEnd",
    type: "work",
    startYear: 2021,
    endYear: 2022,
    company: "GFT Group",
    place: "São Paulo - BR",
  },
];
