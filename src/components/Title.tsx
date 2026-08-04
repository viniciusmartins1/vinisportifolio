type TitleProps = {
  title: string;
  borderWidth: string;
  textAlign: "left" | "right";
};

const Title = ({ title, borderWidth, textAlign }: TitleProps) => {
  const isAlignRight = textAlign === "right";

  return (
    <div className="w-full relative">
      <h1 className={`text-3xl ${isAlignRight && "text-right"}`}>{title}</h1>
      <div
        style={
          !isAlignRight
            ? {
                width: borderWidth,
              }
            : {
                width: borderWidth,
                position: "absolute",
                bottom: 0,
                right: 0,
              }
        }
        className={` 
          rounded-4xl h-[0.5px]  
          bg-[linear-gradient(to_right,white_0%,white_10%,var(--color-primary)_35%,var(--color-primary)_100%)] 
        `}
      ></div>
    </div>
  );
};

export default Title;
