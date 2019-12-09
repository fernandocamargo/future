import merge from 'lodash/merge';
import isString from 'lodash/isString';
import { useCallback, useMemo } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

export const useNavigation = ({ url, target }) => {
  const history = useHistory();
  const matched = !!useRouteMatch({ path: url });
  const navigate = useCallback(() => history.push(url), [history, url]);
  const { click, ...attributes } = useMemo(() => {
    const route = isString(url);

    return {
      href: route ? url : '/',
      click: route ? navigate : url,
    };
  }, [navigate, url]);
  const onClick = useCallback(
    event => {
      event.preventDefault();
      click();
    },
    [click]
  );

  return merge(attributes, !target && { onClick }, { matched });
};
