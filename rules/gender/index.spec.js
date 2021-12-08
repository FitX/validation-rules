import {
  checkType,
} from './index';

test('Check correct Validation Types', () => {
  expect(checkType('FEMALE')).toBe(true);
  expect(checkType('MALE')).toBe(true);
  expect(checkType('OTHER')).toBe(true);
});

test('Check wrong Validation Types', () => {
  expect(checkType()).toBe(false);
  expect(checkType('blubb')).toBe(false);
});
