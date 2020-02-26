import isEqual from 'lodash/isEqual';

import { ERROR_STATUSES, STATUS_BY_CODE } from './constants';

export const getErrorByCode = ({
  response: {
    data: { code },
  },
}) => Promise.reject(STATUS_BY_CODE[code]);

export const check = ({ data: { status, ...profile } }) => {
  const error = ERROR_STATUSES.find(value =>
    isEqual(status.localeCompare(value, undefined, { sensitivity: 'base' }), 0)
  );

  return error ? Promise.reject(error) : profile;
};
