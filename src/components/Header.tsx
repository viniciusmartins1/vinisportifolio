import { useTranslation } from "react-i18next";
import logo from "../assets/svgs/logo.svg";
import { useState } from "react";
import { menus } from "../helpers/menu";
import { ZERO } from "../constants/numbers";

const homeMenuID = menus[ZERO].id;

const Header = () => {
  const [menuActive, setMenuActive] = useState<number>(homeMenuID);

  const { t } = useTranslation();

  return (
    <div className="flex justify-between py-6">
      <img
        src={logo}
        alt={t("components.header.logo").toLocaleLowerCase()}
        className="w-40 cursor-pointer"
        onClick={() => setMenuActive(homeMenuID)}
      />

      <ul className=" flex gap-8 content-center flex-wrap text-2xl">
        {menus.map(({ menu, id }) => {
          return (
            <li>
              <a
                className={`
                  cursor-pointer  
                  transition 
                  delay-150 
                  duration-300 
                  ease-in-out 
                  hover:-translate-y-1  
                  hover:text-primary 
                  ${id === menuActive && "text-primary"}
                `}
                onClick={() => setMenuActive(id)}
              >
                {t(`components.header.menu.${menu}`).toLocaleLowerCase()}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
