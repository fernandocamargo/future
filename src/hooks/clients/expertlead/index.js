import { create } from 'axios';
import { useMemo } from 'react';

import { isProduction } from 'helpers/environment';

const getURL = () => {
  switch (true) {
    case isProduction():
      return 'https://api.expertlead.io/';
    default:
      return 'https://api-staging.expertlead.io/';
  }
};

export default () => useMemo(() => create({ baseURL: getURL() }), []);
