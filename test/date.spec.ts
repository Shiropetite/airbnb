import { nbDay, getDayNumber, getDayBeforeMonth, weeksInMonth } from 'src/utils/date'

describe('Get day number', () => {
  it('Sunday first day of the week', () => {
    for(let i = 0; i < nbDay; i++) {
      expect(getDayNumber(i, true)).toEqual(i)
    }
  });

  it('Monday first day of the week', () => {
    for(let i = 0; i < nbDay - 1; i++) {
      expect(getDayNumber(i, false)).toEqual(i + 1)
    }
    expect(getDayNumber(6, false)).toEqual(0)
  });

});

describe('Get number of day before the 1th day of the current month', () => {
  it('January 1th 2022 with sunday first day of week', () => {
    expect(getDayBeforeMonth(new Date(2022,0,1), true)).toEqual(6)
  });

   it('January 1th 2022 with monday first day of week', () => {
    expect(getDayBeforeMonth(new Date(2022,0,1), false)).toEqual(5)
  });

   it('February 1th 2022 with sunday first day of week', () => {
    expect(getDayBeforeMonth(new Date(2022,1,1), true)).toEqual(2)
  });

  it('February 1th 2022 with monday first day of week', () => {
    expect(getDayBeforeMonth(new Date(2022,1,1), false)).toEqual(1)
  });

});

describe('Get number of week in a month', () => {
  it('January 1th 2022 with sunday first day of week', () => {
    expect(weeksInMonth(new Date(2022,0,1), true)).toEqual(6)
  });

  it('January 1th 2022 with monday first day of week', () => {
    expect(weeksInMonth(new Date(2022,0,1), false)).toEqual(6)
  });

   it('May 1th 2022 with sunday first day of week', () => {
    expect(weeksInMonth(new Date(2022,4,1), true)).toEqual(5)
  });

   it('May 1th 2022 with monday first day of week', () => {
    expect(weeksInMonth(new Date(2022,4,1), false)).toEqual(6)
  });

})
