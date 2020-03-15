import property from 'lodash/property';
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
  const expertlead = useExpertlead();
  const get = useCallback(
    () =>
      expertlead
        .get(`${URL}/me`)
        .then(property('data'))
        .catch(fail),
    [expertlead]
  );
  const getFocusRoleList = useCallback(
    () =>
      expertlead
        .get(`${URL}/focus-role-list`)
        .then(property('data.data'))
        .catch(fail),
    [expertlead]
  );
  const update = useCallback(() => expertlead.patch(), [expertlead]);

  return { get, getFocusRoleList, update };
};
