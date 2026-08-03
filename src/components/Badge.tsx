type BadgeProps = {
  text: string;
  backgroundColor: string;
};

const Badge = ({ backgroundColor, text }: BadgeProps) => {
  return (
    <button
      style={{
        backgroundColor: `var(${backgroundColor})`,
      }}
      className={`rounded-4xl px-3.5 py-1.5 text-lg min-w-20 `}
    >
      {text}
    </button>
  );
};

export default Badge;
