import isEqual from 'lodash/isEqual';

import { findMatchingKey } from 'helpers/object';

export const getFieldNameBasedOn = code =>
  findMatchingKey({
    email: [
      'network.not-connected',
      'users.email-invalid',
      'user.not-found',
    ].includes(code),
    password: isEqual(code, 'users.password-invalid'),
  });
