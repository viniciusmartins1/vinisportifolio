import { useTranslation } from "react-i18next";
import Title from "../components/Title";
import { FOUR } from "../constants/numbers";
import { menus } from "../helpers/menu";
import { projects } from "../helpers/projects";
import ProjectCard from "../components/ProjectCard";
import projectBackground from "../assets/images/projects_bg.png";

const PROJECTS_MENU_SECTION_ID = menus[FOUR].sectionId;
const TRANSLATION_BASE = "pages.projects";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section
      id={PROJECTS_MENU_SECTION_ID}
      className="
        -mt-24 lg:mt-0 pb-60 lg:pb-65 pt-2 bg-size-[40%]  
        flex flex-col lg:gap-28 
        scroll-mt-30
        mask-[linear-gradient(to_bottom,transparent,black_1%,black_85%,transparent)]
        [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_1%,black_85%,transparent)]
      "
      style={{
        backgroundImage: `
          linear-gradient(
        rgba(0,0,0,.4),
        rgba(0,0,0,.4)
          ),
          url(${projectBackground})`,
      }}
    >
      {projects.map((item) => {
        return (
          <div
            className="pb-10 pt-10 lg:pb-20 flex flex-col gap-16 last:mb-90 lg:last:mb-0"
            key={item.title}
          >
            <Title
              title={t(`${TRANSLATION_BASE}.${item.title}`).toLocaleLowerCase()}
              textAlign={item.titlePosition}
            />
            <div
              className="
                flex flex-wrap justify-center
                md:grid 
                md:grid-cols-2 
                lg:grid-cols-3 
                justify-items-center
                gap-8
                py-5 lg:py-10 
              "
            >
              {item.projects.map(
                ({ title, description, image, link, badges }) => {
                  const badgesTraslated = badges.map((badge) =>
                    t(`${TRANSLATION_BASE}.${badge}`),
                  );

                  return (
                    <ProjectCard
                      key={title}
                      title={t(`${TRANSLATION_BASE}.${title}`)}
                      description={t(`${TRANSLATION_BASE}.${description}`)}
                      link={link}
                      image={image}
                      badges={badgesTraslated}
                      backgroundColor={item.backgroundColor}
                      hoverBackgroundColor={item.hoverColor}
                      textColor={item.hoverColor}
                    />
                  );
                },
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
