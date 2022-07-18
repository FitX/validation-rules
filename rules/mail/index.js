// General Email Regex (RFC 5322 Official Standard)
// https://emailregex.com/
export const pattern = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

/**
 * Transform to Lowercase for preventing Errors
 * @param {string} value
 * @returns {string | undefined}
 */
const transformToLowercase = (value) => value?.toLowerCase();

/**
 * E-Mail Validation
 * @param {string} value
 * @return {boolean}
 */
export const pureMail = (value) => !!(value && value.trim().length > 0 && pattern.test(transformToLowercase(value)));

/**
 * Domain Validation
 * @param {string} value
 * @returns {boolean}
 */
export const domain = (value) => !(transformToLowercase(value).endsWith('fitx.de') || transformToLowercase(value).endsWith('@fit-xtern.de'));

export const mail = (value) => pureMail(value) && domain(value);

export default mail;
