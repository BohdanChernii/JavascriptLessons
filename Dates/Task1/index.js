const weeekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "St"];
export const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const futureDay = new Date(date).setDate(day + days);
  return weeekDays[new Date(futureDay).getDay()];
};
const result = dayOfWeek(new Date(2021, 9, 15), 1);

console.log(result);
