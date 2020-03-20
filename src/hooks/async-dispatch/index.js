import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export default () => {
  const dispatch = useDispatch();

  return useCallback(
    (...params) =>
      new Promise((resolve, reject) => {
        try {
          return resolve(dispatch(...params));
        } catch (error) {
          return reject(error);
        }
      }),
    [dispatch]
  );
};
