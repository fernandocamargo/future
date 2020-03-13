import { useCallback } from 'react';

import Error from 'error';
import { useExpertlead } from 'hooks/clients';

import { URL } from './constants';

export default () => {
  const { get } = useExpertlead();
  const getBy = useCallback(
    ({ keywords: name }) =>
      get(URL, { params: { name } })
        .catch(() => {
          throw new Error({ message: 'No cities for you (backend)' });
        })
        .then(({ data: { data } }) => {
          switch (true) {
            case !data:
              throw new Error({ message: 'No cities for you (frontend)' });
            default:
              return Promise.resolve(data);
          }
        }),
    [get]
  );

  return { getBy };
};
