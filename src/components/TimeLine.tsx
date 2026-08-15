import workIcon from "../assets/svgs/icons/work.svg";
import educationIcon from "../assets/svgs/icons/education.svg";

interface ITimeLineItemProps {
  type: "work" | "education";
  role: string;
  startYear: number;
  endYear: number | string;
  location: string;
  companyName?: string;
}

const TimeLineItem = ({
  role,
  type,
  location,
  companyName,
  endYear,
  startYear,
}: ITimeLineItemProps) => {
  const isTypeEducation = type === "education";

  return (
    <div className="flex flex-col w-[55%] justify-center text-lg">
      <div
        className={`
          rounded-4xl w-0.5 h-36 ml-[47.5%]
          bg-[linear-gradient(to_bottom,black_0%,black_10%,var(--color-white)_90%,var(--color-black)_10%)] 
        `}
      ></div>
      {isTypeEducation ? (
        <Education
          role={role}
          location={location}
          endYear={endYear}
          startYear={startYear}
          type={type}
        />
      ) : (
        <Work
          role={role}
          location={location}
          endYear={endYear}
          startYear={startYear}
          type={type}
          companyName={companyName}
        />
      )}
    </div>
  );
};

const Education = ({
  role,
  location,
  startYear,
  endYear,
}: ITimeLineItemProps) => {
  return (
    <div className="w-full relative flex hover-underline">
      <div className="text-right w-[40%]  ">
        <p>{role}</p>
        <p className="text-base">{location}</p>
      </div>
      <img
        className="absolute top-[15%] right-[50%]"
        src={educationIcon}
        width={34}
        alt="icon"
      />
      <p className="absolute top-[15%] right-[5%] w-[40%] text-left opacity-75">
        {startYear}-{endYear}
      </p>
    </div>
  );
};

const Work = ({
  role,
  companyName,
  startYear,
  endYear,
  location,
}: ITimeLineItemProps) => {
  return (
    <div className="w-full relative flex hover-underline ">
      <p className="absolute top-[15%] w-[40%] text-right opacity-75">
        {startYear}-{endYear}
      </p>
      <img
        className="absolute top-[15%] right-[50.5%]"
        src={workIcon}
        width={24}
        alt="icon"
      />
      <div className="text-left ml-[55%] ">
        <p>{role}</p>
        <p className="text-base">
          {companyName}, {location}
        </p>
      </div>
    </div>
  );
};

export default TimeLineItem;
