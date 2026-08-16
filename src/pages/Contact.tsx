import { useTranslation } from "react-i18next";
import { FIVE } from "../constants/numbers";
import { menus } from "../helpers/menu";

import linkedInIcon from "../assets/images/icon/linkedIn.png";
import gitHubIcon from "../assets/images/icon/gitHub.png";
import youtubeIcon from "../assets/images/icon/youtube.png";
import downloadIcon from "../assets/svgs/icons/downloadIcon.svg";

import pageBackground from "../assets/images/contact_bg.png";
import { i18nLanguages } from "../i18n";

const CONTACT_MENU_SECTION_ID = menus[FIVE].sectionId;
const TRANSLATION_BASE = "pages.contact";
const EMAIL_ADDRESS = "vinicius.martins8064@gmail.com";

const Contact = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      id={CONTACT_MENU_SECTION_ID}
      className="
        flex flex-col gap-12 
        -mt-110 lg:-mt-10 lg:pb-44 mb-32 
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
      <h2 className="text-5xl lg:text-6xl text-white  lg:w-[20%] bg-clip-text  animate-shadow-dance">
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

      <div className="-mt-10 flex gap-5">
        <button
          className="
          border-2  
        border-primary
          rounded-4xl  
          font-bold  
          w-fit
          h-fit
          text-sx lg:text-base 
          cursor-pointer 
          hover:bg-primary-hover
          transition delay-100 duration-300 
          animate-fade-up
          drop-shadow-lg drop-shadow-indigo-500/50
          self-center
        "
        >
          <a
            href={
              i18nLanguages.find(({ lng }) => lng === i18n.language)?.cvLink
            }
            download={true}
            className="flex  gap-4.5 px-4.5 lg:px-4.5 py-2.5 lg:py-2.5"
          >
            <p>{t(`${TRANSLATION_BASE}.downloadCV`)}</p>
            <img className="w-4 lg:w-5" src={downloadIcon} />
          </a>
        </button>

        <ul className="flex gap-5 ">
          <li>
            <a
              href="https://www.linkedin.com/in/vinicius-martins1/"
              target="_blank"
            >
              <img
                src={linkedInIcon}
                alt={t(`${TRANSLATION_BASE}.altLinkedIn`)}
                className="w-9 md:w-12.5 hover:scale-110"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/viniciusmartins1" target="_blank">
              <img
                src={gitHubIcon}
                alt={t(`${TRANSLATION_BASE}.altGitHub`)}
                className="w-9 md:w-12.5 hover:scale-110"
              />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@twins_tech" target="_blank">
              <img
                src={youtubeIcon}
                alt={t(`${TRANSLATION_BASE}.altYoutube`)}
                className="w-9 md:w-12.5 hover:scale-110"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
