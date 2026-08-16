import { backgroundClasses, hoverClasses } from "../styles/classes";

type BadgeProps = {
  text: string;
  background?: keyof typeof backgroundClasses;
  hoverBackground?: keyof typeof hoverClasses;
  size?: "small" | "regular";
};

const Badge = ({
  text,
  background = "primary-dark",
  size = "regular",
  hoverBackground = "primary",
}: BadgeProps) => {
  const sizeClass =
    size === "small"
      ? "text-xs rounded-4xl "
      : "text-sm lg:text-lg rounded-[5.5px]";

  return (
    <button
      className={`
        ${backgroundClasses[background]} 
        ${hoverClasses[hoverBackground]} 
        ${sizeClass} 
        px-3.5 py-1.5  
        hover:font-bold 
        hover:scale-95`}
    >
      {text}
    </button>
  );
};

export default Badge;
