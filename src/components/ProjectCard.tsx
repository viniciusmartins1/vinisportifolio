import type { IProject } from "../helpers/projects";
import {
  backgroundClasses,
  gradients,
  textColorClasses,
  type hoverClasses,
} from "../styles/classes";
import Badge from "./Badge";

interface IProjectCardProps extends IProject {
  backgroundColor: keyof typeof backgroundClasses;
  hoverBackgroundColor: keyof typeof hoverClasses;
  textColor: keyof typeof textColorClasses;
}

const ProjectCard = ({
  title,
  description,
  badges,
  image,
  link,
  textColor,
  hoverBackgroundColor,
  backgroundColor,
}: IProjectCardProps) => {
  return (
    <div
      className={`rounded-[64px] p-0.5 ${gradients[hoverBackgroundColor]} w-80 card-hover`}
    >
      <div className="pt-3.5 h-110  rounded-[62px] flex flex-col overflow-hidden bg-black">
        <div className="px-7 mb-2.5">
          <div className="flex flex-wrap gap-1.5 mb-16">
            {badges.map((text, index) => {
              return (
                <Badge
                  key={`${text}-${index}`}
                  text={text}
                  background={backgroundColor}
                  hoverBackground={hoverBackgroundColor}
                  size="small"
                />
              );
            })}
          </div>
          <h3 className={`text-xl font-bold ${textColorClasses[textColor]}`}>
            {title.toLocaleLowerCase()}
          </h3>
          <p className="text-xs text-justify leading-relaxed">{description}</p>
        </div>

        <a href={link} target="_blank">
          <img src={image} alt={title} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
