import {
  mail,
} from './index';

describe('Mail Validation', () => {
  test('validates empty input', () => {
    expect(mail()).toBe(false);
  });

  test('validates empty string', () => {
    expect(mail('')).toBe(false);
  });

  test('validates null', () => {
    expect(mail(null)).toBe(false);
  });

  test('validates missing name', () => {
    expect(mail('@web.de')).toBe(false);
  });

  test('validates missing domain', () => {
    expect(mail('name@.de')).toBe(false);
  });

  test('validates missing TLD', () => {
    expect(mail('nname@web')).toBe(false);
  });

  test('validates simple e-mail', () => {
    expect(mail('ich@web.de')).toBe(true);
  });

  test('validates e-mail with dot', () => {
    expect(mail('i.bims@gmail.com')).toBe(true);
  });

  test('validates e-mail with +', () => {
    expect(mail('i+bims@gmail.com')).toBe(true);
  });

  /*
  test('validates e-mail with fitx domain +', () => {
    expect(mail('whatever@fitx.de')).toBe(false);
  });

  test('validates e-mail with fitx extern domain +', () => {
    expect(mail('hatever@fit-xtern.de')).toBe(false);
  });
   */
})
