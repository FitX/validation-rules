export const pattern = /^((?!^-)(?!\\s\\s)[a-zA-Z\\u00C0-\\u024F\\-](?!-{2})(?!-$)){1,255}$/;
/**
 * FirstName Validation
 * @param {string} value
 * @return {boolean}
 */
export const firstName = (value) => !!(value && value.trim().length > 0 && pattern.test(value));
export default firstName;
