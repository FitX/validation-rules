import {
  phone,
} from './index';

describe('Phone Validation', () => {
  test('validates empty input', () => {
    expect(phone()).toBe(false);
  });

  test('validates null input', () => {
    expect(phone(null)).toBe(false);
  });

  test('validates string number mix', () => {
    expect(phone('123 ABC')).toBe(false);
  });

  test('validates number', () => {
    expect(phone('73672363737')).toBe(true);
  });

  test('validates number with whitespace', () => {
    expect(phone('030 73672363737')).toBe(true);
  });

  test('validates phone number with country code', () => {
    expect(phone('+4930 73672363737')).toBe(true);
  });

  test('validates short dash input', () => {
    expect(phone('030 73672363-737')).toBe(true);
  });
})

