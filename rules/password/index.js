/**
 * Password min Length
 * @type {number}
 */
export const MIN_LENGTH = 8;
export const pattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>`\s\/?]+/;
// export const pattern = /[\\s!\\"#\$%&'()*+,\-.\/:;<=>?@\\[\\\\\\]^_`]/;
/**
 * Login password can't be Empty/undefined or null.
 * @param {string} value
 * @return {boolean}
 */
export const passwordNotEmpty = (value) => !!value;
/**
 * Login password can't have leading or trailing spaces.
 * @param {string} value
 * @return {boolean}
 */
export const passwordNoSpaces = (value) => value.trim().length === value.length;
/**
 * Login password must be at least 8 characters.
 * @param {string} value
 * @return {boolean}
 */
export const passwordMinLength = (value) => value.length >= MIN_LENGTH;
/**
 * Login Password must contain lowercase character
 * @param {string} value
 * @return {boolean}
 */
// export const passwordContainsLowerCase = (value) => /(?=.*[a-z])/.test(value);
export const passwordContainsLowerCase = (value) => /[a-z]/.test(value);
/**
 * Login Password must contain uppercase character
 * @param {string} value
 * @return {boolean}
 */
// export const passwordContainsUpperCase = (value) => /(?=.*[A-Z])/.test(value);
export const passwordContainsUpperCase = (value) => /[A-Z]/.test(value);
/**
 * Login Password must contain at least one of the following characters:
 * !\"#$%&'()*+,-./:;<=>?@[\\]^_` (+ space).
 * @param {string} value
 * @return {boolean}
 */
export const passwordContainsPattern = (value) => pattern.test(value);
export const password = (value) => (

  passwordNotEmpty(value) &&
  passwordNoSpaces(value) &&
  passwordMinLength(value) &&
  passwordContainsLowerCase(value) &&
  passwordContainsUpperCase(value) &&
  passwordContainsPattern(value)
);
export default password;
