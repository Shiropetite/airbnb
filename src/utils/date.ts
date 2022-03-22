import { useI18n } from "vue-i18n";

const nbDay = 7;

/**
 * Get number of a day in a week depending of the language selected
 * @param date : date number
 * @returns
 */
export const getDayNumber = (date: number): number => {
  const { t } = useI18n();
  const firstDayOfWeek = Number.parseInt(t('firstDayOfWeek'));

  if(date + firstDayOfWeek < nbDay) {
    return date + firstDayOfWeek;
  }
  return nbDay - date - firstDayOfWeek;
}

