import isString from 'lodash/isString';
import React, { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import List from '../list';

const Item = ({ id, label, url, items }) => {
  const history = useHistory();
  const { click, href } = useMemo(() => {
    const plain = isString(url);

    return {
      href: plain ? url : '/',
      click: plain ? () => history.push(url) : url,
    };
  }, [url, history]);
  const onClick = useCallback(
    event => {
      event.preventDefault();
      click();
    },
    [click]
  );

  return (
    <li className={id}>
      <a href={href} title={label} onClick={onClick}>
        {label}
      </a>
      {!!items.length && <List items={items} />}
    </li>
  );
};

Item.propTypes = {};

Item.defaultProps = {
  items: [],
};

export default Item;
