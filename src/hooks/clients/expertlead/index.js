import { create } from 'axios';
import { useMemo } from 'react';

import { getURL } from './helpers';

export default () => useMemo(() => create({ baseURL: getURL() }), []);
