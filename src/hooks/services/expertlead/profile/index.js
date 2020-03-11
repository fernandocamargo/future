import { useCallback } from 'react';

import Error from 'error';
import { useExpertlead } from 'hooks/clients';

import { URL } from './constants';

export default () => {
  const { get } = useExpertlead();
  const me = useCallback(
    () =>
      get(`${URL}/me`)
        .then(
          response =>
            console.log('me.then();', { response }) || Promise.resolve(response)
        )
        .catch(response => {
          console.log('me.catch();', { response });

          throw new Error({ message: 'LOL' });
        }),
    [get]
  );

  return { me };
};
