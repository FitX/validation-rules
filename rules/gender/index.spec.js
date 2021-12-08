import {
  gender,
} from './index';

test('Check correct Validation Types', () => {
  expect(gender('FEMALE')).toBe(true);
  expect(gender('MALE')).toBe(true);
  expect(gender('OTHER')).toBe(true);
});

test('Check wrong Validation Types', () => {
  expect(gender()).toBe(false);
  expect(gender('blubb')).toBe(false);
});
