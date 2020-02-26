import first from 'lodash/first';
import isEqual from 'lodash/isEqual';

export const setProfile = (_, { data: { data: profile } }) => profile;

export const getFieldNameBasedOn = code =>
  first(
    [
      ['users.email-invalid', 'user.not-found'].includes(code) && 'email',
      isEqual(code, 'users.password-invalid') && 'password',
    ].filter(Boolean)
  );
