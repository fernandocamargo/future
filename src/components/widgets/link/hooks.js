import isEqual from 'lodash/isEqual';
import isFunction from 'lodash/isFunction';
import URL from 'url-parse';
import { useCallback, useMemo } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

export const useNavigation = (path = '') => {
  const history = useHistory();
  const current = !!useRouteMatch({ path: path.toString() });
  const external = useMemo(
    () => !isEqual(new URL(path).host, window.location.host),
    [path]
  );
  const navigate = useCallback(() => {
    switch (true) {
      case isFunction(path):
        return path();
      case external:
        return window.open(path);
      default:
        return history.push(path);
    }
  }, [external, history, path]);
  const href = useMemo(() => {
    switch (true) {
      case !path || isFunction(path):
        return '/';
      case external:
        return path;
      default:
        return `/#${path}`;
    }
  }, [external, path]);

  return { href, current, external, navigate };
};
