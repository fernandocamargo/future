import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import selector from './selector';

export default () => {
  const { logged } = useSelector(selector);
  const logout = useCallback(() => console.log('logout();'), []);

  return { logged, logout };
};
