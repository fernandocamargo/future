import { useCallback } from 'react';

import Error from 'error';
import { useExpertlead } from 'hooks/clients';

import { URL } from './constants';

const fail = ({
  response: {
    data: { error },
  },
}) => {
  throw new Error(error);
};

export default () => {
  const { get } = useExpertlead();
  const getFocusRoleList = useCallback(
    () =>
      get(`${URL}/focus-role-list`)
        .then(({ data: { data } }) => data)
        .catch(fail),
    [get]
  );
  const getProfile = useCallback(
    () =>
      get(`${URL}/me`)
        .then(({ data }) => data)
        .catch(fail),
    [get]
  );

  return { getFocusRoleList, getProfile };
};
