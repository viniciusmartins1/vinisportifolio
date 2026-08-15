import { useTranslation } from "react-i18next";
import profileImg from "../assets/images/profile_pic.png";
import { menus } from "../helpers/menu";
import { FIVE, ONE, ZERO } from "../constants/numbers";
import { useEffect, useState } from "react";
import { typeWritingAnimation } from "../helpers/animations";

const TRANSLATION_BASE = "pages.home";
const HOME_MENU_SECTION_ID = menus[ZERO].sectionId;
const contactMenu = menus[FIVE];

const Home = () => {
  const { t } = useTranslation();
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const interval = typeWritingAnimation(
      t(`${TRANSLATION_BASE}.subtitle`).toLocaleLowerCase(),
      (text, index) => setDisplayText(text.slice(ZERO, index + ONE)),
    );

    return () => clearInterval(interval);
  }, [t]);

  return (
    <section
      id={HOME_MENU_SECTION_ID}
      className="
        flex 
        lg:pt-10 pb-20 
        justify-between 
        scroll-mt-20
      "
    >
      <div className="pt-5 lg:pt-20">
        <h1
          className="
          text-primary 
            text-6xl lg:text-7xl 
            w-80 
            font-medium 
            [animation-delay:200ms] animate-name-glow
          "
        >
          {t(`${TRANSLATION_BASE}.title`).toLocaleLowerCase()}
        </h1>
        <h3 className="mt-4.5 mb-1.5 text-2xl lg:text-3xl animate-fade-up">
          {displayText}
          <span className="ml-1 animate-pulse text-white border-r-[0.1px]"></span>
        </h3>
        <p className="mb-2.5 text-xs lg:text-lg animate-fade-up">
          {t(`${TRANSLATION_BASE}.description`).toLocaleLowerCase()}
        </p>

        <button
          className="
          bg-primary 
          rounded-4xl 
          px-4.5 lg:px-6.5  py-1.5 lg:py-2.5 
          font-bold 
          mt-12 
          text-sx lg:text-lg 
          cursor-pointer 
          hover:bg-primary-hover
          transition delay-100 duration-300 
          animate-fade-up
          drop-shadow-lg drop-shadow-indigo-500/50
          "
        >
          <a href={contactMenu.link}>{t(`${TRANSLATION_BASE}.getInTouch`)}</a>
        </button>
      </div>
      <img
        className="hidden lg:block w-120 animate-fade-up [animation-delay:300ms] hover:scale-110"
        src={profileImg}
        alt={t(`${TRANSLATION_BASE}.imgDescription`)}
      />
    </section>
  );
};

export default Home;
