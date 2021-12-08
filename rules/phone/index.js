export const pattern = /^(\+|)[0-9 -]+$/;
/**
 * Phone Validation
 * @param {string} value
 * @return {boolean}
 */
export const phone = (value) => !!(value && value.trim().length > 0 && pattern.test(value));
export default phone;
