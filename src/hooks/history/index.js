import isString from 'lodash/isString';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

export default (...settings) => {
  const {
    location: { state, ...location },
    push: navigate,
    ...history
  } = useHistory(...settings);
  const push = useCallback(
    params =>
      navigate({
        ...(isString(params) ? { pathname: params } : params),
        state,
      }),
    [navigate, state]
  );

  return { location: { ...location, state }, push, ...history };
};
