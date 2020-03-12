import { useCallback } from 'react';

import { useExpertlead } from 'hooks/clients';

import { URL } from './constants';
import { fail, format } from './helpers';

export default () => {
  const { get } = useExpertlead();
  const me = useCallback(
    () =>
      get(`${URL}/me`)
        .then(format)
        .catch(fail),
    [get]
  );

  return { me };
};
