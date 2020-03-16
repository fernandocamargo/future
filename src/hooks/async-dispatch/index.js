import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export default (...params) => {
  const dispatch = useDispatch(...params);

  return useCallback(
    action =>
      new Promise((resolve, reject) => {
        try {
          return resolve(dispatch(action));
        } catch (error) {
          return reject(error);
        }
      }),
    [dispatch]
  );
};
