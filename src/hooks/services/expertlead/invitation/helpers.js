import toLower from 'lodash/toLower';

import Error from 'error';

import { STATUS_BY_CODE } from './constants';

export const checkByCode = ({ errors }) => response => {
  const {
    response: {
      data: { code },
    },
  } = response;
  const { [code]: status } = STATUS_BY_CODE;
  const { [toLower(status)]: message } = errors;

  throw new Error({ message });
};

export const checkByStatus = ({ errors }) => response => {
  const { data: profile } = response;
  const { status } = profile;
  const { [toLower(status)]: message } = errors;

  switch (true) {
    case !!message:
      throw new Error({ message, profile });
    default:
      return profile;
  }
};
