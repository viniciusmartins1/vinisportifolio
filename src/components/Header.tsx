import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { menus, startSectionObserver } from "../helpers/menu";
import { ZERO } from "../constants/numbers";

import logo from "../assets/svgs/logo.svg";
import TranslationButton from "./TranslationButton";

const HOME_MENU = menus[ZERO];

const Header = () => {
  const [menuActive, setMenuActive] = useState<string>(HOME_MENU.sectionId);

  const { t } = useTranslation();

  useEffect(() => {
    const observer = startSectionObserver((sectionId) =>
      setMenuActive(sectionId),
    );
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className="
        flex justify-between 
        align-middle py-6 
        bg-black sticky top-0
        w-full z-1000
      "
    >
      <a href={HOME_MENU.link} className="flex">
        <img
          src={logo}
          alt={t("components.header.logo").toLocaleLowerCase()}
          className="
            w-30 
            cursor-pointer 
            z-10 
            animate-fade-up [animation-delay:0ms]
          "
        />
      </a>

      <div className="flex gap-5 justify-center align-middle">
        <nav className="hidden lg:block">
          <ul className="flex gap-8 content-center flex-wrap text-2xl menu-hover">
            {menus.map(({ menu, sectionId, link }) => {
              return (
                <li key={sectionId}>
                  <a
                    className={`
                    text-lg
                    cursor-pointer
                    transition
                    delay-150
                    duration-300
                    ease-in-out
                    hover:-translate-y-1
                    hover:text-primary
                    ${sectionId === menuActive && "text-primary"}
                    animate-fade-up
                    [animation-delay:150ms]
                  `}
                    href={link}
                  >
                    {t(`components.header.menu.${menu}`).toLocaleLowerCase()}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <TranslationButton />
      </div>
    </header>
  );
};

export default Header;
