import { useTranslation } from "react-i18next";
import { FIVE } from "../constants/numbers";
import { menus } from "../helpers/menu";
import linkedInIcon from "../assets/images/icon/linkedIn.png";
import gitHubIcon from "../assets/images/icon/gitHub.png";
import youtubeIcon from "../assets/images/icon/youtube.png";
import pageBackground from "../assets/images/contact_bg.png";

const CONTACT_MENU_SECTION_ID = menus[FIVE].sectionId;
const TRANSLATION_BASE = "pages.contact";
const EMAIL_ADDRESS = "vinicius.martins8064@gmail.com";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section
      id={CONTACT_MENU_SECTION_ID}
      className="
        flex flex-col gap-12 
        -mt-80 lg:mt-0 lg:pb-44 mb-32 
        bg-no-repeat bg-right bg-size-[75%] 
        scroll-mt-30
      "
      style={{
        backgroundImage: `
          linear-gradient(
        rgba(0,0,0,.8),
        rgba(0,0,0,.8)
          ),
          url(${pageBackground})`,
      }}
    >
      <h2 className="text-5xl lg:text-6xl text-white  lg:w-[18%] bg-clip-text  animate-shadow-dance">
        {t(`${TRANSLATION_BASE}.title`).toLocaleUpperCase()}
      </h2>
      <p className="lg:w-[45%] text-justify">
        {t(`${TRANSLATION_BASE}.description`)
          .split(" ")
          .map((word, index) => {
            return (
              <span
                key={index}
                className="
                      transition-all
                      duration-300
                      hover:text-primary
                      hover:font-bold
                    "
              >
                {word}{" "}
              </span>
            );
          })}
      </p>
      <div className="w-fit">
        <a href={`mailto:${EMAIL_ADDRESS}`}>
          <p>{EMAIL_ADDRESS}</p>
        </a>
        <div
          className={`
            w-[130%]
            rounded-full
            mb-4
          `}
          style={{
            borderBottom: "0.5px solid",
            borderImage:
              "linear-gradient(to right, white 0%, white 10%, var(--color-primary) 35%, var(--color-primary) 100%) 1",
          }}
        />
      </div>

      <ul className="flex gap-5 -mt-10">
        <li>
          <a
            href="https://www.linkedin.com/in/vinicius-martins1/"
            target="_blank"
          >
            <img
              src={linkedInIcon}
              width={50}
              height={50}
              alt={t(`${TRANSLATION_BASE}.altLinkedIn`)}
              className="hover:scale-110"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/viniciusmartins1" target="_blank">
            <img
              src={gitHubIcon}
              width={50}
              height={50}
              alt={t(`${TRANSLATION_BASE}.altGitHub`)}
              className="hover:scale-110"
            />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@twins_tech" target="_blank">
            <img
              src={youtubeIcon}
              width={50}
              height={50}
              alt={t(`${TRANSLATION_BASE}.altYoutube`)}
              className="hover:scale-110"
            />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
