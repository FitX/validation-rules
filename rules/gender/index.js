import {
  GENDER,
} from '../../enums/gender';

/**
 * Type Check Gender Value
 * @param {import('../../enums/gender').Gender} value
 * @link https://github.com/FitX/api-core/blob/master/src/web/src/main/java/de/fitx/core/validation/AbstractValidator.java#L28
 * @return {boolean}
 */
export const checkType = (value) => GENDER.includes(value);
export default checkType;
