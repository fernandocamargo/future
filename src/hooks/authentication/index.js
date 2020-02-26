import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { clear, setDetails } from 'actions/profile';
import { useAsyncDispatch } from 'hooks';

import selector from './selector';

export default () => {
  const dispatch = useAsyncDispatch();
  const { logged, ...profile } = useSelector(selector);
  const identify = useCallback(details => dispatch(setDetails({ details })), [
    dispatch,
  ]);
  const logout = useCallback(() => dispatch(clear()), [dispatch]);

  return { identify, logged, profile, logout };
};
