import { useTranslation } from "react-i18next";
import profileImg from "../assets/images/profile_pic.png";
import { menus } from "../helpers/menu";
import { ZERO } from "../constants/numbers";

const TRANSLATION_BASE = "pages.home";
const HOME_MENU_SECTION_ID = menus[ZERO].sectionId;

const Home = () => {
  const { t } = useTranslation();

  return (
    <section
      id={HOME_MENU_SECTION_ID}
      className="flex pt-30 pb-20 justify-between"
    >
      <div className="pt-20">
        <h1 className="text-primary text-7xl w-80 font-medium">
          {t(`${TRANSLATION_BASE}.title`).toLocaleLowerCase()}
        </h1>
        <h3 className="mt-4.5 mb-1.5 text-3xl">
          {t(`${TRANSLATION_BASE}.subtitle`).toLocaleLowerCase()}
        </h3>
        <p className="mb-2.5 text-lg">
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
          "
        >
          <a href="#">{t(`${TRANSLATION_BASE}.getInTouch`)}</a>
        </button>
      </div>
      <img
        className="w-120"
        src={profileImg}
        alt={t(`${TRANSLATION_BASE}.imgDescription`)}
      />
    </section>
  );
};

export default Home;
