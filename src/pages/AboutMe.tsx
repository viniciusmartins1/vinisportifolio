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
    <section id={ABOUT_HOME_SECTION_ID} className="pt-32">
      <div className="flex justify-between content-center">
        <img
          src={profileImg}
          alt={t(`${TRANSLATION_BASE}.imgDescription`)}
          className="w-120 pt-25"
        />
        <div className="flex flex-col w-155">
          <Title
            title={t(`${TRANSLATION_BASE}.title`).toLocaleLowerCase()}
            borderWidth={50}
            textAlign="left"
          />

          <div className="flex flex-col gap-5.5 mt-20 text-justify text-lg">
            <p>{t(`${TRANSLATION_BASE}.paragraphOne`)}</p>
            <p>{t(`${TRANSLATION_BASE}.paragraphTwo`)}</p>
            <p>{t(`${TRANSLATION_BASE}.paragraphThree`)}</p>
            <p>{t(`${TRANSLATION_BASE}.paragraphFour`)}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
