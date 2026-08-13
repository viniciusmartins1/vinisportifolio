import type { IProject } from "../helpers/projects";
import Badge from "./Badge";

interface IProjectCardProps extends IProject {
  color: string;
}

const ProjectCard = ({
  title,
  description,
  color,
  badges,
  image,
  link,
}: IProjectCardProps) => {
  return (
    <div
      className="rounded-[64px] p-0.5"
      style={{
        backgroundImage: `linear-gradient(to top, white 0%, white 10%, var(${color}) 35%, var(${color}) 100%)`,
      }}
    >
      <div className="pt-3.5 h-100 w-80 rounded-[62px] flex flex-col overflow-hidden bg-black">
        <div className="px-7 mb-2.5">
          <div className="flex flex-wrap gap-1.5 mb-16">
            {badges.map((text) => {
              return (
                <Badge
                  text={text}
                  backgroundColor={`${color}-dark`}
                  size="small"
                />
              );
            })}
          </div>
          <h3 className="text-xl font-bold" style={{ color: `var(${color})` }}>
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
