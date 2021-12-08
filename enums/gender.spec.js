import {
  GENDER,
} from './gender.js';

test('allowed Gender Types should be correct', () => {
  expect(GENDER).toEqual([
    'FEMALE','MALE','OTHER',
  ]);
});
