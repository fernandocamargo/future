import { STATUS_BY_CODE } from './constants';

export const getErrorByCode = ({
  response: {
    data: { code },
  },
}) => Promise.reject(STATUS_BY_CODE[code]);
