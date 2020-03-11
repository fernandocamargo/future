import property from 'lodash/property';

import { STATUS_BY_CODE } from './constants';

export const format = property('data');

export const getErrorByCode = ({
  response: {
    data: { code },
  },
}) => Promise.reject(STATUS_BY_CODE[code]);
