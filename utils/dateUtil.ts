import dayjs from "dayjs";

const SECONDS = 1000;
const MINUTE = SECONDS * 60;
const HOUR = MINUTE * 60;

export const makeTimestampNow = () => {
  return dayjs().format("YYYY.MM.DD hh:mm.ss.SSS").slice(0, -1);
};

export const convertNumberToTimeString = (number: number) => {
  const time = dayjs(number).subtract(9, "hours");
  let formatString = "ss.SSS";
  if (number > HOUR) {
    formatString = "hh:mm:ss.SSS";
  }
  if (number > MINUTE) {
    formatString = "mm:ss.SSS";
  }
  return time.format(formatString).slice(0, -1);
};
