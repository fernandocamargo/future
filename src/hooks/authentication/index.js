import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setDetails } from 'actions/profile';

import selector from './selector';

export default () => {
  const dispatch = useDispatch();
  const { logged, ...profile } = useSelector(selector);
  const identify = useCallback(
    details => Promise.resolve(dispatch(setDetails({ details }))),
    [dispatch]
  );
  const logout = useCallback(() => console.log('logout();'), []);

  return { identify, logged, profile, logout };
};
