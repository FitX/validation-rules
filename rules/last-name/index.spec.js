import {
  lastName,
} from './index';
import {
  generateString,
} from '../../helpers/generate-random-string';

/**
 * TODO
 * John2000 should be failed?
 */

test('Validation should fail on wrong inputs', () => {
  expect(lastName()).toBe(false);
  expect(lastName('')).toBe(false);
  expect(lastName(' ')).toBe(false);
  expect(lastName('   ')).toBe(false);
  expect(lastName(null)).toBe(false);
  expect(lastName(false)).toBe(false);
  expect(lastName('John2000')).toBe(false);
});

test('Validation should fail on max Characters', () => {
  expect(lastName(generateString(64))).toBe(true);
  expect(lastName(generateString(65))).toBe(false);
});

test('validate multiple Dashes', () => {
  expect(lastName('Eric--Marie')).toBe(false);
});

test('validate multiple Whitespaces', () => {
  expect(lastName('Eric   Kyle')).toBe(false);
});

test('validate leading Dash', () => {
  expect(lastName('-Eric')).toBe(false);
});

test('validate last is Dash', () => {
  expect(lastName('Eric-')).toBe(false);
});

test('validate last is Dash', () => {
  expect(lastName('Eric-')).toBe(false);
});

test('validate Name only Alphabetical', () => {
  expect(lastName('EricKyle')).toBe(true);
});

test('validate Name with Whitespaces', () => {
  expect(lastName('Eric Kyle Kenny')).toBe(true);
});

test('validate Name with Umlauts', () => {
  expect(lastName('äÄöÖüÜß')).toBe(true);
});

test('validate Name with Dashes', () => {
  expect(lastName('Eric-Kyle-Kenny')).toBe(true);
});

test('validate Name with min Char', () => {
  expect(lastName('E')).toBe(true);
});
