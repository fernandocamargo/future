import { create } from 'axios';
import { useMemo } from 'react';

export default () => useMemo(() => create());
