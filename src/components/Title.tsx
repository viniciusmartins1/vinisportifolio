type TitleProps = {
  title: string;
  textAlign: "left" | "right";
};

const Title = ({ title, textAlign }: TitleProps) => {
  const isAlignRight = textAlign === "right";

  return (
    <div
      className="w-full flex"
      style={{
        justifyContent: isAlignRight ? "end" : "start",
        textAlign: isAlignRight ? "left" : "right",
      }}
    >
      <div className="w-fit">
        <h1 className="text-3xl title-hover">{title}</h1>

        <div
          className={`w-[130%] rounded-full`}
          style={{
            borderBottom: "0.5px solid",
            borderImage:
              "linear-gradient(to right, white 0%, white 10%, var(--color-primary) 35%, var(--color-primary) 100%) 1",
            marginLeft: isAlignRight ? "-30%" : "0px",
          }}
        />
      </div>
    </div>
  );
};

export default Title;
