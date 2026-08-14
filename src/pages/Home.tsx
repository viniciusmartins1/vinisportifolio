import { useTranslation } from "react-i18next";
import profileImg from "../assets/images/profile_pic.png";
import { menus } from "../helpers/menu";
import { FIVE, ONE, ZERO } from "../constants/numbers";
import { useEffect, useState } from "react";

const TRANSLATION_BASE = "pages.home";
const HOME_MENU_SECTION_ID = menus[ZERO].sectionId;
const contactMenu = menus[FIVE];

const Home = () => {
  const { t } = useTranslation();
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const text = t(`${TRANSLATION_BASE}.subtitle`).toLocaleLowerCase();
    let index = ZERO;

    const interval = setInterval(() => {
      setDisplayText(text.slice(ZERO, index + ONE));
      index++;

      if (index === text.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [t]);

  return (
    <section
      id={HOME_MENU_SECTION_ID}
      className="flex pt-10 pb-20 justify-between scroll-mt-20"
    >
      <div className="pt-20">
        <h1 className="text-primary text-7xl w-80 font-medium animate-fade-up [animation-delay:200ms]">
          {t(`${TRANSLATION_BASE}.title`).toLocaleLowerCase()}
        </h1>
        <h3 className="mt-4.5 mb-1.5 text-3xl animate-fade-up">
          {displayText}
          <span className="ml-1 animate-pulse text-white border-r-[0.1px]"></span>
        </h3>
        <p className="mb-2.5 text-lg animate-fade-up">
          {t(`${TRANSLATION_BASE}.description`).toLocaleLowerCase()}
        </p>

        <button
          className="
          bg-primary 
          rounded-4xl 
          px-6.5 py-2.5 
          font-bold text-1xl 
          mt-12 
          text-lg 
          cursor-pointer 
          hover:bg-primary-hover
          transition delay-100 duration-300 
          animate-fade-up
          "
        >
          <a href={contactMenu.link}>{t(`${TRANSLATION_BASE}.getInTouch`)}</a>
        </button>
      </div>
      <img
        className="w-120 animate-fade-up [animation-delay:300ms] hover:scale-110"
        src={profileImg}
        alt={t(`${TRANSLATION_BASE}.imgDescription`)}
      />
    </section>
  );
};

export default Home;
