const VALID_NAME = /^[A-Za-zÀ-ÖØ-öø-ÿ'-]+$/i;

const isValidName = string => string.length >= 2 && VALID_NAME.test(string);

export const isValid = value =>
  !value
    ? true
    : value
        .trim()
        .split(' ')
        .filter(isValidName).length > 1;
