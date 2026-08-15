import { ZERO } from "../constants/numbers";

export const typeWritingAnimation = (
  _text: string,
  callBack: (text: string, index: number) => void,
) => {
  const text = _text;
  let index = ZERO;

  const interval = setInterval(() => {
    callBack(text, index);
    index++;

    if (index === text.length) {
      clearInterval(interval);
    }
  }, 100);

  return interval;
};
