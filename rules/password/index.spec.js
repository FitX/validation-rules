import {
  password,
} from './index';

test('Validation should pass on happy case', () => {
  expect(password('Testing193!')).toBe(true);
  expect(password('äääÒÓÖüÜü123!')).toBe(true);
});

test('Validation should pass with special Characters', () => {
  expect(password('Testing 193')).toBe(true);
  expect(password('Testing193!')).toBe(true);
  expect(password('Testing193\"')).toBe(true);
  expect(password('Testing193#')).toBe(true);
  expect(password('Testing193$')).toBe(true);
  expect(password('Testing193%')).toBe(true);
  expect(password('Testing193&')).toBe(true);
  expect(password('Testing193\'')).toBe(true);
  expect(password('Testing193(')).toBe(true);
  expect(password('Testing193)')).toBe(true);
  expect(password('Testing193*')).toBe(true);
  expect(password('Testing193+')).toBe(true);
  expect(password('Testing193,')).toBe(true);
  expect(password('Testing193-')).toBe(true);
  expect(password('Testing193.')).toBe(true);
  expect(password('Testing193/')).toBe(true);
  expect(password('Testing193:')).toBe(true);
  expect(password('Testing193;')).toBe(true);
  expect(password('Testing193<')).toBe(true);
  expect(password('Testing193=')).toBe(true);
  expect(password('Testing193>')).toBe(true);
  expect(password('Testing193?')).toBe(true);
  expect(password('Testing193@')).toBe(true);
  expect(password('Testing193[')).toBe(true);
  expect(password('Testing193\\')).toBe(true);
  expect(password('Testing193]')).toBe(true);
  expect(password('Testing193^')).toBe(true);
  expect(password('Testing193_')).toBe(true);
  expect(password('Testing193`')).toBe(true);
});
test('Validation should fail on beginning Whitespaces', () => {
  expect(password(' Testing193!')).toBe(false);
});
test('Validation should fail on missing Uppercase', () => {
  expect(password('testin193!')).toBe(false);
});
test('Validation should fail on missing Lowercase', () => {
  expect(password('TESTING193!')).toBe(false);
});
test('Validation should fail on missing special Character', () => {
  expect(password('Testing193')).toBe(false);
});
test('Validation should fail on wrong special Character', () => {
  expect(password('Testing193~')).toBe(false);
});
test('Validation should fail if too short', () => {
  expect(password('tTg193!')).toBe(false);
});
