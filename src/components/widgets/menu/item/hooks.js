import isString from 'lodash/isString';
import { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

export const useNavigation = ({ url, target }) => {
  const history = useHistory();
  const navigate = useCallback(() => history.push(url), [history, url]);
  const { click, ...props } = useMemo(() => {
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
  const link = !target ? { ...props, onClick } : props;

  return link;
};
