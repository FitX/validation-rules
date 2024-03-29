export const pattern = /^((?!^-)(?!\s\s)[a-zA-Z\u00C0-\u024F\- ](?!-{2})(?!-$)){1,64}$/;
/**
 * FirstName Validation
 * @param {string} value
 * @return {boolean}
 */
export const lastName = (value) => !!(value && value.trim().length > 0 && pattern.test(value));
export default lastName;
