import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(isLeapYear);
dayjs.extend(customParseFormat);

export const getMonth = (month = dayjs().month(),year=dayjs().year()) => {
  const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfMonth;
  const dayMatrix = new Array(5).fill([]).map(() =>
    new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    })
  );
  return dayMatrix;
};
