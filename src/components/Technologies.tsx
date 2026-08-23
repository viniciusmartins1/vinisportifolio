import { ONE, TWO, ZERO } from "../constants/numbers";
import { technologiesList } from "../helpers/technologies";

const emptyList = [ONE, TWO];

const Technologies = () => {
  return (
    <div
      className="overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      {emptyList.map((n, index) => (
        <div
          key={`${index}-${n}`}
          className="flex w-max will-change-transform"
          style={{
            animation:
              index === ZERO
                ? "var(--animate-floating-icons-right)"
                : "var(--animate-floating-icons-left)",
          }}
        >
          {[ONE, TWO].map((n) => {
            const list =
              index === ZERO
                ? technologiesList
                : technologiesList.map((item) => item).reverse();
            return (
              <div key={n} className="flex gap-14">
                {list.map((item) => {
                  return (
                    <div
                      key={item.name}
                      className="shrink-0 overflow-hidden select-none"
                    >
                      <img
                        key={item.name}
                        src={item.src}
                        alt={item.name}
                        className={`
                          ${item.widthClass} 
                          drop-shadow-lg 
                          drop-shadow-indigo-500/50 
                          hover:scale-85`}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Technologies;
