import property from 'lodash/property';
import { useCallback } from 'react';

import Error from 'error';
import { useExpertlead } from 'hooks/clients';

import { URL } from './constants';

export default () => {
  const expertlead = useExpertlead();
  const fail = useCallback(({ response: { data: { error } } }) => {
    throw new Error(error);
  }, []);
  const get = useCallback(
    () =>
      expertlead
        .get(`${URL}/me`)
        .then(({ data: { isRemoteOnly = false, ...profile } }) => ({
          ...profile,
          isRemoteOnly,
        }))
        .catch(fail),
    [expertlead, fail]
  );
  const getFocusRoleList = useCallback(
    () =>
      expertlead
        .get(`${URL}/focus-role-list`)
        .then(property('data.data'))
        .catch(fail),
    [expertlead, fail]
  );
  const update = useCallback(
    ({ id, data }) => expertlead.patch(`${URL}/${id}`, data),
    [expertlead]
  );

  return { get, getFocusRoleList, update };
};
