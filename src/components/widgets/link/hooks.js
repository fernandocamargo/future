import isEqual from 'lodash/isEqual';
import isFunction from 'lodash/isFunction';
import URL from 'url-parse';
import { useCallback, useMemo } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { useHistory } from 'hooks';

export const useNavigation = ({ to: path = '', params: state }) => {
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
        return history.push({ pathname: path, state });
    }
  }, [external, history, path, state]);
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
