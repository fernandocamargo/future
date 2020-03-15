import { useCallback } from 'react';

import Error from 'error';
import { useExpertlead } from 'hooks/clients';

import { URL } from './constants';
import { formatFocusRoleList, formatProfile } from './helpers';

export default () => {
  const expertlead = useExpertlead();
  const fail = useCallback(({ response: { data: { error } } }) => {
    throw new Error(error);
  }, []);
  const get = useCallback(
    () =>
      expertlead
        .get(`${URL}/me`)
        .then(formatProfile)
        .catch(fail),
    [expertlead, fail]
  );
  const getFocusRoleList = useCallback(
    () =>
      expertlead
        .get(`${URL}/focus-role-list`)
        .then(formatFocusRoleList)
        .catch(fail),
    [expertlead, fail]
  );
  const update = useCallback(
    ({ id, data }) => expertlead.patch(`${URL}/${id}`, data),
    [expertlead]
  );

  return { get, getFocusRoleList, update };
};
