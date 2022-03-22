export const nbDay = 7;

/**
 * Get day number depending of the first day of the week.
 * @param day the day if sunday is the first day
 * @param isSundayFirst - if true sunday is the first day if not it's monday
 * @returns
 */
export const getDayNumber = (day: number, isSundayFirst: boolean): number => {
  if(isSundayFirst) return day;

  if(day + 1 < nbDay) {
    return day + 1;
  }
  return nbDay - day - 1;
}

