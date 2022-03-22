import { date } from "quasar";

export const nbDay = 7;

/**
 * Get day number depending of the first day of the week.
 * @param day the day if sunday is the first day
 * @param isSundayFirst - if true sunday is the first day if not it's monday
 * @returns
 */
export const getDayNumber = (day: number, isSundayFirst: boolean): number => {
  if(isSundayFirst) return day;

  // sunday become the last day of the week
  if(day === (nbDay - 1)) {
    return 0
  }
  return day + 1;
}

/**
 * Get number of day before the 1th day of the current month
 * @param currentDate
 * @param isSundayFirst
 * @returns
 */
export const getDayBeforeMonth = (currentDate: Date, isSundayFirst: boolean) => {
  if(isSundayFirst) {
    return currentDate.getDay()
  }
  else {
    if(currentDate.getDay() === 0) {
      return nbDay - 1
    }
    return currentDate.getDay() - 1;
  }
}

/**
 * Get number of week in a month
 * @returns
 */
export const weeksInMonth = (currentDate: Date, isSundayFirst: boolean) => {
  const nbDayInMonth = date.daysInMonth(currentDate);
  return Math.round((nbDayInMonth + getDayBeforeMonth(currentDate, isSundayFirst)) / 7) + 1;
}
