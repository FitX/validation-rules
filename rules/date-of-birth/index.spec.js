import {
  subYears,
  formatISO,
} from 'date-fns';
import {
  dateOfBirth,
  minAge,
  maxAge,
} from './index';


const getDateObject = (date = new Date()) => {
  return date.getFullYear();
};

describe('Date of birth', () => {
  test('should be a real Date', () => {
    expect(dateOfBirth('1984-08-11')).toBe(true);
    expect(dateOfBirth('11.08.1984')).toBe(false);
  });
  test('should fail under min Age', () => {
    const res14 = subYears(new Date(), 14);
    const res15 = subYears(new Date(), 15);
    const res16 = subYears(new Date(), 16);
    expect(minAge(formatISO(res14, { representation: 'date' }), new Date(), 15)).toBe(false);
    expect(minAge(formatISO(res15, { representation: 'date' }), new Date(), 15)).toBe(true);
    expect(minAge(formatISO(res16, { representation: 'date' }), new Date(), 15)).toBe(true);
    expect(minAge(formatISO(res16, { representation: 'date' }))).toBe(true);

  });
  test('should fail over max age', () => {
    const res99 = subYears(new Date(), 99);
    const res100 = subYears(new Date(), 100);
    const res101 = subYears(new Date(), 101);
    expect(maxAge(formatISO(res99, { representation: 'date' }), new Date(), 100)).toBe(true);
    expect(maxAge(formatISO(res100, { representation: 'date' }), new Date(), 100)).toBe(true);
    expect(maxAge(formatISO(res101, { representation: 'date' }), new Date(), 100)).toBe(false);
    expect(maxAge(formatISO(res101, { representation: 'date' }))).toBe(false);
  })
});
