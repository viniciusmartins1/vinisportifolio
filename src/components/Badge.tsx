import { backgroundClasses, hoverClasses } from "../styles/classes";

type BadgeProps = {
  text: string;
  background?: keyof typeof backgroundClasses;
  hoverBackground?: keyof typeof hoverClasses;
  size?: "small" | "regular";
  isRounded?: boolean;
};

const Badge = ({
  text,
  background = "primary-dark",
  size = "regular",
  hoverBackground = "primary",
  isRounded = true,
}: BadgeProps) => {
  const sizeClass = size === "small" ? "text-xs" : "text-lg";

  return (
    <button
      style={{
        padding: size === "small" ? "6px 6px" : "6px 14px",
        minWidth: size === "small" ? "70px" : "80px",
        borderRadius: isRounded ? "64px" : "",
      }}
      className={`${backgroundClasses[background]} ${hoverClasses[hoverBackground]} ${sizeClass} hover:font-bold hover:scale-95`}
    >
      {text}
    </button>
  );
};

export default Badge;
