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
  expect(firstName('John2000')).toBe(false);
});

test('Validation should fail on max Characters', () => {
  expect(firstName(generateString(32))).toBe(true);
  expect(firstName(generateString(33))).toBe(false);
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

test('validate Name only Alphabetical', () => {
  expect(firstName('EricKyle')).toBe(true);
});

test('validate Name with Whitespaces', () => {
  expect(firstName('Eric Kyle Kenny')).toBe(true);
});

test('validate Name with Umlauts', () => {
  expect(firstName('äÄöÖüÜß')).toBe(true);
});

test('validate Name with Dashes', () => {
  expect(firstName('Eric-Kyle-Kenny')).toBe(true);
});

test('validate Name with min Char', () => {
  expect(firstName('E')).toBe(true);
});
