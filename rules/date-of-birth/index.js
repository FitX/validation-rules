import {
  parseISO,
  intervalToDuration,
  isValid,
} from 'date-fns';

/**
 * Minimum age validation
 * @param {string} value
 * @param {Date} compareDate
 * @param {Number} [minAge=15] - min Age
 * @returns {boolean}
 */
export const minAge = (value, compareDate = new Date(), minAge = 15) => {
  const {
    years,
  } = intervalToDuration({
    start: parseISO(value),
    end: compareDate,
  });
  return years >= minAge;
};

/**
 * Maxiumum age validation
 * @param {string} value
 * @param {Date} compareDate
 * @param {Number} [maxAge=100] - max Age
 * @returns {boolean}
 */
export const maxAge = (value, compareDate = new Date(), maxAge = 100) => {
  const {
    years,
  } = intervalToDuration({
    start: parseISO(value),
    end: compareDate,
  });
  return years <= maxAge;
};


/**
 * Date of birth validation
 * @param {string} value
 * @return {boolean}
 */
export const dateOfBirth = (value) => isValid(parseISO(value));

export default {
  dateOfBirth,
  minAge,
  maxAge,
};
