import { useTranslation } from "react-i18next";
import logo from "../assets/svgs/logo.svg";
import { useState } from "react";
import { menus } from "../helpers/menu";
import { ZERO } from "../constants/numbers";

const homeMenu = menus[ZERO];

const Header = () => {
  const [menuActive, setMenuActive] = useState<number>(homeMenu.id);

  const { t } = useTranslation();

  return (
    <header
      className="
        flex justify-between py-6 bg-black sticky top-0
        w-full z-1000"
    >
      <a href={homeMenu.link}>
        <img
          src={logo}
          alt={t("components.header.logo").toLocaleLowerCase()}
          className="w-40 cursor-pointer z-10 animate-fade-up [animation-delay:0ms]"
          onClick={() => setMenuActive(homeMenu.id)}
        />
      </a>

      <ul className=" flex gap-8 content-center flex-wrap text-2xl">
        {menus.map(({ menu, id, link }) => {
          return (
            <li>
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
                  ${id === menuActive && "text-primary"}
                  animate-fade-up
                  [animation-delay:150ms]
                `}
                href={link}
                onClick={() => setMenuActive(id)}
              >
                {t(`components.header.menu.${menu}`).toLocaleLowerCase()}
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
