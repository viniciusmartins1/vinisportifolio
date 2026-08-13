import { useTranslation } from "react-i18next";
import { THREE } from "../constants/numbers";
import { menus } from "../helpers/menu";
import Title from "../components/Title";
import { careerTimeLine } from "../helpers/career";
import TimeLineItem from "../components/TimeLine";
import careerBackground from "../assets/images/career_background.png";

const CAREER_MENU_SECTION_ID = menus[THREE].sectionId;
const TRANSLATION_BASE = "pages.career";

const Career = () => {
  const { t } = useTranslation();

  return (
    <section id={CAREER_MENU_SECTION_ID} className="pt-14">
      <Title
        title={t(`${TRANSLATION_BASE}.title`).toLocaleLowerCase()}
        textAlign="right"
      />
      <div
        className="mt-14 bg-center bg-repeat-y bg-size-[80%]   
        mask-[linear-gradient(to_bottom,transparent,black_5%,black_85%,transparent)]
        [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_5%,black_85%,transparent)]"
        style={{
          backgroundImage: `
          linear-gradient(
        rgba(0,0,0,.1),
        rgba(0,0,0,.1)
          ),
          url(${careerBackground})`,
        }}
      >
        <div className="pb-44 pt-16">
          {careerTimeLine.map((item, index) => {
            return (
              <TimeLineItem
                key={index}
                type={item.type}
                role={t(item.role)}
                location={
                  item.type === "education" ? t(item.place) : item.place
                }
                endYear={
                  typeof item.endYear === "string"
                    ? t(item.endYear)
                    : item.endYear
                }
                startYear={item.startYear}
                companyName={item.company}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Career;
