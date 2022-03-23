import { date } from "quasar";

export const nbDay = 7;

export const useDatePicker = ({ modelValue, month, year }: {modelValue: any, month: number, year: number}, isSundayFirst: boolean) => {
  const today = new Date();

  /**
   * Update dateSelected, month and year
   * @param props
   */
  const updateProps = (props: {modelValue: any, month: number, year: number}): void => {
    modelValue = props.modelValue;
    month = props.month;
    year = props.year;
  }

  /**
   * Get day index in a week (depends if sunday is first or not)
   * @param day
   * @returns
   */
  const getDayNumber = (day: number): number => {
    if(isSundayFirst) return day;

    if(day === (nbDay - 1)) return 0
    return day + 1;
  }

  /**
   * Count number of days before month
   * @returns
   */
  const getDaysBeforeMonth = (): number => {
    const currentDate = new Date(year, month, 1)

    if(isSundayFirst) return currentDate.getDay()
    else {
      if(currentDate.getDay() === 0) return nbDay - 1
      return currentDate.getDay() - 1;
    }
  }

  /**
   * Count number of weeks in a month
   * @returns
   */
  const getWeeksInMonth = (): number => {
    const currentDate = new Date(year, month, 1)
    const nbDayInMonth = date.daysInMonth(currentDate);
    return Math.round((nbDayInMonth + getDaysBeforeMonth()) / 7) + 1;
  }

  /**
   * Get the day index
   * @param weekIndex
   * @param dayIndex
   * @returns
   */
  const getDay = (weekIndex: number, dayIndex: number): number =>
    weekIndex * nbDay + (dayIndex + 1) - getDaysBeforeMonth();

  /**
   * Is the number day is valid
   * @param weekIndex
   * @param dayIndex
   * @returns
   */
  const isValidDay = (weekIndex: number, dayIndex: number): boolean => {
    const currentDate = new Date(year, month, 1);
    const day = getDay(weekIndex, dayIndex);
    return day <= date.daysInMonth(currentDate) && day > 0;
  }

  /**
   * Is the day before today
   * @param day
   * @returns
   */
  const isBeforeToday = (weekIndex: number, dayIndex: number): boolean => {
    const day = getDay(weekIndex, dayIndex);
    return day < today.getDate() && month === today.getMonth() || month < today.getMonth() || year < today.getFullYear();
  }

  /**
   * Is the day selected by the user
   * @param day
   * @returns
   */
  const isSelected = (day: number): boolean => {
    const dateString = date.formatDate(new Date(year, month, day), 'DD/MM/YYYY');
    return !!modelValue.to && dateString === modelValue.to ||
      !!modelValue.from && dateString === modelValue.from;
  }

  /**
   * Is the beginning date selected
   * @param day
   * @returns
   */
  const isSelectedFrom = (day: number): boolean => {
    const dateString = date.formatDate(new Date(year, month, day), 'DD/MM/YYYY');
    return !!modelValue.from && !!modelValue.to && dateString === modelValue.from && dateString !== modelValue.to;
  }

  /**
   * Is the end date selected
   * @param day
   * @returns
   */
  const isSelectedTo = (day: number): boolean => {
    const dateString = date.formatDate(new Date(year, month, day), 'DD/MM/YYYY');
    return !!modelValue.from && !!modelValue.to && dateString === modelValue.to && dateString !== modelValue.from;
  }

  /**
   * Is the day between the two days selected
   * @param weekIndex
   * @param dayIndex
   * @returns
   */
  const isBetween = (weekIndex: number, dayIndex: number): boolean => {
    const day = getDay(weekIndex, dayIndex)
    const selected = new Date(year, month, day)
    if (!!modelValue.from && !!modelValue.to) {
      return isValidDay(weekIndex, dayIndex) && selected > date.extractDate(modelValue.from, 'DD/MM/YYYY')
        && selected < date.extractDate(modelValue.to, 'DD/MM/YYYY')
    }
    return false;
  }

  /**
   * Select the day in the datePicker
   * @param weekIndex
   * @param dayIndex
   * @returns
   */
  const selectDate = (weekIndex: number, dayIndex: number) => {
    const day = getDay(weekIndex, dayIndex);
    const selected = new Date(year, month, day)
    const dateString = date.formatDate(selected, 'DD/MM/YYYY');

    if (dateString === modelValue.from && dateString === modelValue.to) {
      modelValue.from = ''
      modelValue.to = ''
      return;
    }

    if (dateString === modelValue.to) {
      modelValue.to = ''
      return;
    }

    if (!!modelValue.from) {
      if (selected < date.extractDate(modelValue.from, 'DD/MM/YYYY')) {
        modelValue.from = dateString
      }
      else {
        modelValue.to = dateString
      }
    }
    else {
      if (selected === date.extractDate(modelValue.from, 'DD/MM/YYYY')) {
        modelValue.from = ''
      }
      modelValue.from = dateString;
    }
  }

  /**
   * Get the button class
   * @param weekIndex
   * @param dayIndex
   * @returns
   */
  const getClassBtn = (weekIndex: number, dayIndex: number) => {
    const day = getDay(weekIndex, dayIndex);
    let className: string = "";
    className += isBeforeToday(weekIndex, dayIndex) ? 'no-hover ' : '';
    className += isSelected(day) ? 'selected ' : '';
    return className;
  }

  /**
   * Get the cell class
   * @param weekIndex
   * @param dayIndex
   * @returns
   */
  const getClassCell = (weekIndex: number, dayIndex: number) => {
    const day = getDay(weekIndex, dayIndex);
    let className: string = "";
    className += isSelectedFrom(day) ? 'selected-from ' : '';
    className += isSelectedTo(day) ? 'selected-to ' : '';
    className += isBetween(weekIndex, dayIndex) ? 'range ' : '';
    return className;
  }

  return {
    updateProps,
    getDayNumber,
    getDaysBeforeMonth,
    getWeeksInMonth,
    getDay,
    isValidDay,
    selectDate,
    isBeforeToday,
    getClassBtn,
    getClassCell
  };
}


