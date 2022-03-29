import { describe, expect, it } from '@jest/globals';
import { nbDay, useDatePicker } from 'src/composables/useDatePicker';

describe('Get day number', () => {

  it('January 1th (with sunday first day of the week)', () => {
    const { getDayNumber } = useDatePicker({modelValue: {from: '', to: ''}, month: 0, year: 2022}, true);

    for(let i = 0; i < nbDay; i++) {
      expect(getDayNumber(i)).toEqual(i);
    }
  })

  it('January 1th (with monday first day of the week)', () => {
    const { getDayNumber } = useDatePicker({modelValue: {from: '', to: ''}, month: 0, year: 2022}, false);

    for(let i = 0; i < nbDay - 1; i++) {
      expect(getDayNumber(i)).toEqual(i + 1)
    }
    expect(getDayNumber(6)).toEqual(0)
  })

});

describe('get day before the beginning of the month', () => {

  it('January 1th (with sunday first day of the week)', () => {
    const { getDaysBeforeMonth } = useDatePicker({modelValue: {from: '', to: ''}, month: 0, year: 2022}, true);
    expect(getDaysBeforeMonth()).toEqual(6)
  });

  it('January 1th (with monday first day of the week)', () => {
    const { getDaysBeforeMonth } = useDatePicker({modelValue: {from: '', to: ''}, month: 0, year: 2022}, false);
    expect(getDaysBeforeMonth()).toEqual(5)
  });

  it('May 1th (with sunday first day of the week)', () => {
    const { getDaysBeforeMonth } = useDatePicker({modelValue: {from: '', to: ''}, month: 4, year: 2022}, true);
    expect(getDaysBeforeMonth()).toEqual(0)
  });

  it('May 1th (with monday first day of the week)', () => {
    const { getDaysBeforeMonth } = useDatePicker({modelValue: {from: '', to: ''}, month: 4, year: 2022}, false);
    expect(getDaysBeforeMonth()).toEqual(6)
  });

});

describe('number of weeks in a month', () => {

  it('January 1th (with sunday first day of the week)', () => {
    const { getWeeksInMonth } = useDatePicker({modelValue: {from: '', to: ''}, month: 0, year: 2022}, true);
    expect(getWeeksInMonth()).toEqual(6)
  });

  it('January 1th (with monday first day of the week)', () => {
    const { getWeeksInMonth } = useDatePicker({modelValue: {from: '', to: ''}, month: 0, year: 2022}, false);
    expect(getWeeksInMonth()).toEqual(6)
  });

  it('May 1th (with sunday first day of the week)', () => {
    const { getWeeksInMonth } = useDatePicker({modelValue: {from: '', to: ''}, month: 4, year: 2022}, true);
     expect(getWeeksInMonth()).toEqual(5)
  });

  it('May 1th (with monday first day of the week)', () => {
    const { getWeeksInMonth } = useDatePicker({modelValue: {from: '', to: ''}, month: 4, year: 2022}, false);
    expect(getWeeksInMonth()).toEqual(6)
  });

});

describe('get day number', () => {

  it('January 1th (with sunday first day of the week)', () => {
    const { getDay } = useDatePicker({modelValue: {from: '', to: ''}, month: 0, year: 2022}, true);
    expect(getDay(0, 6)).toEqual(1);
  });

  it('January 1th (with monday first day of the week)', () => {
    const { getDay } = useDatePicker({modelValue: {from: '', to: ''}, month: 0, year: 2022}, false);
    expect(getDay(0,5)).toEqual(1);
  });

});
