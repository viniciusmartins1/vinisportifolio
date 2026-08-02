type TitleProps = {
  title: string;
  borderWidth: number;
  textAlign: "left" | "right";
};

const Title = ({ title, borderWidth, textAlign }: TitleProps) => {
  const isAlignRight = textAlign === "right";

  return (
    <div className="w-full relative">
      <h1 className={`text-3xl ${isAlignRight && "text-right"}`}>{title}</h1>
      <div
        className={`
          w-${borderWidth} 
          rounded-4xl h-[0.5px]  
          bg-[linear-gradient(to_right,white_0%,white_10%,var(--color-primary)_35%,var(--color-primary)_100%)] 
          absolute -bottom-1 ${isAlignRight ? "right-0" : "left-0"}
        `}
      ></div>
    </div>
  );
};

export default Title;
