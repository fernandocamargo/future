import { useCallback } from 'react';

import Error from 'error';
import { useExpertlead } from 'hooks/clients';

import { URL } from './constants';

export default () => {
  const { get } = useExpertlead();
  const me = useCallback(
    () =>
      get(`${URL}/me`).catch(
        ({
          response: {
            data: { error },
          },
        }) => {
          throw new Error(error);
        }
      ),
    [get]
  );

  return { me };
};
