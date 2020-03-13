// fix cache
import { useCallback } from 'react';

import Error from 'error';
import { useI18n } from 'hooks';
import { useExpertlead } from 'hooks/clients';

import { URL } from './constants';
import messages from './messages';

export default () => {
  const { get } = useExpertlead();
  const { error: message } = useI18n(messages);
  const getBy = useCallback(
    ({ keywords: name }) =>
      get(URL, { params: { name } })
        .catch(() => {
          throw new Error({ message });
        })
        .then(({ data: { data } }) => {
          switch (true) {
            case !data:
              throw new Error({ message });
            default:
              return Promise.resolve(data);
          }
        }),
    [get, message]
  );

  return { getBy };
};
