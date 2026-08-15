import { useTranslation } from "react-i18next";
import translationIcon from "../assets/svgs/icons/translationIcon.svg";
import { i18nLanguages } from "../i18n";

const TranslationButton = () => {
  const { i18n } = useTranslation();

  return (
    <div className="group relative flex items-center">
      <div
        className="
          flex
          items-center
          rounded-full
          border
          border-white/20
          backdrop-blur-sm
          lg:w-8
          lg:group-hover:w-34
          transition-all
          duration-300
        "
      >
        <button
          type="button"
          className="
            hidden
            lg:flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            cursor-pointer
            mr-1.5
          "
        >
          <img src={translationIcon} alt="" />
        </button>

        <div
          className="
            flex
            items-center
            gap-1
            opacity-100
            lg:opacity-0
            lg:group-hover:opacity-100
            transition-opacity
            duration-200
            cursor-pointer
            
          "
        >
          {i18nLanguages.map((language) => {
            const isActive = i18n.language === language.lng;
            return (
              <button
                key={language.lng}
                type="button"
                onClick={() => i18n.changeLanguage(language.lng)}
                className={`
                  rounded-full
                  cursor-pointer
                  px-2 py-1
                  text-xs
                  transition-colors
                  duration-200
                hover:bg-primary
                  ${isActive ? "bg-primary text-white" : "hover:bg-primary-dark"}
                `}
              >
                {language.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TranslationButton;
