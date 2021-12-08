import {
  firstName,
} from './index';
import {
  generateString,
} from '../../helpers/generate-random-string';

/**
 * TODO
 * John2000 should be failed?
 */

test('Validation should fail on wrong inputs', () => {
  expect(firstName()).toBe(false);
  expect(firstName('')).toBe(false);
  expect(firstName(' ')).toBe(false);
  expect(firstName('   ')).toBe(false);
  expect(firstName(null)).toBe(false);
  expect(firstName(false)).toBe(false);
  // expect(firstName('John2000')).toBe(false);
  expect(firstName('Jo  hn')).toBe(false);
  expect(firstName('Jo--hn')).toBe(false);
  expect(firstName('John-')).toBe(false);
  expect(firstName('-John')).toBe(false);
});

test('Validation should pass on correct inputs', () => {
  expect(firstName('John')).toBe(true);
  expect(firstName('John-Doe')).toBe(true);
  expect(firstName(generateString(255))).toBe(true);
});

test('Validation should fail on max length', () => {
  expect(firstName(generateString(256))).toBe(false);
});

test('validate multiple Dashes', () => {
  expect(firstName('Eric--Marie')).toBe(false);
});

test('validate multiple Whitespaces', () => {
  expect(firstName('Eric   Kyle')).toBe(false);
});

test('validate leading Dash', () => {
  expect(firstName('-Eric')).toBe(false);
});

test('validate last is Dash', () => {
  expect(firstName('Eric-')).toBe(false);
});

test('validate last is Dash', () => {
  expect(firstName('Eric-')).toBe(false);
});


