import isString from 'lodash/isString';
import { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

export default ({ forwardState = false } = {}) => {
  const {
    location: { state: current = {}, ...location },
    push: navigate,
    ...history
  } = useHistory();
  const state = useMemo(() => (forwardState ? current : {}), [
    forwardState,
    current,
  ]);
  const push = useCallback(
    params =>
      navigate({
        ...(isString(params) ? { pathname: params } : params),
        ...(isString(params)
          ? { state }
          : { state: { ...state, ...params.state } }),
      }),
    [navigate, state]
  );

  return { location: { ...location, state }, push, ...history };
};
