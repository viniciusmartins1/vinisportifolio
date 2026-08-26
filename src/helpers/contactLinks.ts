import linkedInIcon from "../assets/images/icon/linkedIn.png";
import gitHubIcon from "../assets/images/icon/linkedIn.png";
import youtubeIcon from "../assets/images/icon/linkedIn.png";

interface IContact {
  name: string;
  link: string;
  img: string;
  alternativeText: string;
}

export const contactLinks: IContact[] = [
  {
    name: "linkedIn",
    link: "https://www.linkedin.com/in/vinicius-martins1/",
    alternativeText: "pages.contact.altLinkedIn",
    img: linkedInIcon,
  },
  {
    name: "github",
    link: "https://github.com/viniciusmartins1",
    alternativeText: "pages.contact.altGitHub",
    img: gitHubIcon,
  },
  {
    name: "youtube",
    link: "https://www.youtube.com/@twins_tech",
    alternativeText: "pages.contact.altYoutube",
    img: youtubeIcon,
  },
];
