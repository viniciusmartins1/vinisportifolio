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
      className="flex flex-col gap-12 pb-64 mb-32 bg-no-repeat bg-right bg-size-[75%] scroll-mt-30"
      style={{
        backgroundImage: `
          linear-gradient(
        rgba(0,0,0,.8),
        rgba(0,0,0,.8)
          ),
          url(${pageBackground})`,
      }}
    >
      <h2
        className="text-6xl w-[18%] bg-clip-text text-transparent"
        style={{
          WebkitBackgroundClip: "text",
          backgroundImage:
            "linear-gradient(to right, white 0%, white 5%, var(--color-primary) 70%, var(--color-primary) 100%)",
        }}
      >
        {t(`${TRANSLATION_BASE}.title`).toLocaleUpperCase()}
      </h2>
      <p className="w-[45%] text-justify">
        {t(`${TRANSLATION_BASE}.description`)}
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
            />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
