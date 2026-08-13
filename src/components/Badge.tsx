type BadgeProps = {
  text: string;
  backgroundColor?: string;
  size?: "small" | "regular";
};

const Badge = ({ backgroundColor, text, size = "regular" }: BadgeProps) => {
  const isSizeSmall = size === "small";

  return (
    <button
      style={{
        backgroundColor: backgroundColor
          ? `var(${backgroundColor})`
          : "var(--color-primary-dark)",
        padding: isSizeSmall ? "6px 6px" : "6px 14px",
        fontSize: isSizeSmall ? "var(--text-xs)" : "var(--text-lg)",
        lineHeight: isSizeSmall
          ? "var(--text-xs--line-height)"
          : "var(--text-lg--line-height)",
        minWidth: isSizeSmall ? "70px" : "80px",
      }}
      className={`rounded-full`}
    >
      {text}
    </button>
  );
};

export default Badge;
