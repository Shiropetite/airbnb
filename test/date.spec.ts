import { nbDay, getDayNumber } from 'src/utils/date'

describe('Get day number', () => {
  it('Sunday first day of the week', () => {
    for(let i = 0; i < nbDay; i++) {
      expect(getDayNumber(i, true)).toEqual(i)
    }
  });

  it('Monday first day of the week', () => {
    for(let i = 0; i < (nbDay - 1); i++) {
      expect(getDayNumber(i, false)).toEqual(i + 1)
    }
    expect(getDayNumber(6, false)).toEqual(0)
  });

})
