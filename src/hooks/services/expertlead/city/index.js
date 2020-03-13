import { useCallback } from 'react';

import Error from 'error';
import { useExpertlead } from 'hooks/clients';

import { URL } from './constants';

export default () => {
  const { get } = useExpertlead();
  const getBy = useCallback(
    data =>
      get(URL, data)
        .then(
          response =>
            console.log('city.getBy.then();', response) ||
            Promise.resolve(response)
        )
        .catch(response => {
          console.log('city.getBy.catch();', response);

          throw new Error({ message: 'No cities for you' });
        }),
    [get]
  );

  return { getBy };
};
