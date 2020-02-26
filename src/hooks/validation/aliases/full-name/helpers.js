import { VALID_NAME } from './constants';

const isValidName = string => string.length >= 2 && VALID_NAME.test(string);

export const isValid = value =>
  !value ||
  value
    .trim()
    .split(' ')
    .filter(isValidName).length > 1;
