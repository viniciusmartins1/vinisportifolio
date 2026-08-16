import { useTranslation } from "react-i18next";
import { ONE } from "../constants/numbers";
import { menus } from "../helpers/menu";

import Title from "../components/Title";
import profileImg from "../assets/svgs/profile_pic_about.svg";

const ABOUT_HOME_SECTION_ID = menus[ONE].sectionId;
const TRANSLATION_BASE = "pages.aboutMe";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section id={ABOUT_HOME_SECTION_ID} className="lg:pt-24 scroll-mt-10">
      <div className="flex justify-between content-center">
        <img
          src={profileImg}
          alt={t(`${TRANSLATION_BASE}.imgDescription`)}
          className="hidden lg:block w-140 pt-25"
        />
        <div className="flex flex-col w-fit lg:w-155">
          <Title
            title={t(`${TRANSLATION_BASE}.title`).toLocaleLowerCase()}
            textAlign="left"
          />

          <div
            className="
              flex flex-col gap-5.5 
              mt-8 lg:mt-20 
              text-justify 
              text-xs lg:text-lg 
            "
          >
            <p>
              {t(`${TRANSLATION_BASE}.paragraphOne`)
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
            <p>
              {t(`${TRANSLATION_BASE}.paragraphTwo`)
                .split(" ")
                .map((word, index) => {
                  return (
                    <span
                      key={index}
                      className="
                      transition-all
                      duration-300
                      hover:text-pink
                      hover:font-bold
                    "
                    >
                      {word}{" "}
                    </span>
                  );
                })}
            </p>
            <p>
              {t(`${TRANSLATION_BASE}.paragraphThree`)
                .split(" ")
                .map((word, index) => {
                  return (
                    <span
                      key={index}
                      className="
                      transition-all
                      duration-300
                      hover:text-blue
                      hover:font-bold
                    "
                    >
                      {word}{" "}
                    </span>
                  );
                })}
            </p>
            <p>
              {t(`${TRANSLATION_BASE}.paragraphFour`)
                .split(" ")
                .map((word, index) => {
                  return (
                    <span
                      key={index}
                      className="
                      transition-all
                      duration-400
                      hover:text-primary
                      hover:font-bold
                    "
                    >
                      {word}{" "}
                    </span>
                  );
                })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
