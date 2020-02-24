import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { clear, setDetails } from 'actions/profile';

import selector from './selector';

export default () => {
  const dispatch = useDispatch();
  const { logged, ...profile } = useSelector(selector);
  const identify = useCallback(
    details =>
      new Promise((resolve, reject) => {
        try {
          dispatch(setDetails({ details }));

          return resolve(details);
        } catch (error) {
          return reject(error);
        }
      }),
    [dispatch]
  );
  const logout = useCallback(() => {
    new Promise((resolve, reject) => {
      try {
        dispatch(clear());

        return resolve();
      } catch (error) {
        return reject(error);
      }
    });
  }, [dispatch]);

  return { identify, logged, profile, logout };
};
