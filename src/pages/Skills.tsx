import { useTranslation } from "react-i18next";
import Title from "../components/Title";
import { THREE, TWO } from "../constants/numbers";
import { menus } from "../helpers/menu";
import { skillList } from "../helpers/skills";
import Badge from "../components/Badge";

const SKILLS_MENU_SECTION_ID = menus[TWO].sectionId;
const TRANSLATION_BASE = "pages.skills";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id={SKILLS_MENU_SECTION_ID} className="py-32 scroll-mt-10">
      <Title
        title={t(`${TRANSLATION_BASE}.title`).toLocaleLowerCase()}
        textAlign="left"
      />

      <div className="flex gap-y-5 flex-wrap justify-between content-end mt-20">
        {skillList.map(({ list, title }) => {
          return (
            <div>
              <p className="text-lg my-4.5">{t(title)}</p>
              <div
                className="flex gap-x-2 gap-y-3.5 flex-wrap w-90"
                style={
                  list.length > THREE ? { justifyContent: "space-between" } : {}
                }
              >
                {list.map((item) => {
                  return <Badge text={item} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
