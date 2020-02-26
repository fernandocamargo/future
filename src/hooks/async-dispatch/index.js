import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export default (...params) => {
  const dispatch = useDispatch(...params);

  return useCallback(
    (...actions) => {
      const promise = new Promise((resolve, reject) => {
        try {
          dispatch(...actions);

          return resolve(...actions);
        } catch (error) {
          return reject(error);
        }
      });

      return promise;
    },
    [dispatch]
  );
};
