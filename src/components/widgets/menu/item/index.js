import isString from 'lodash/isString';
import { string } from 'prop-types';
import React, { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import { items as menuItemsPropTypes } from 'prop-types/menu';
import { item as menuItemPropTypes } from 'prop-types/menu/item';

import List from '../list';
import withStyle from './style';

const Item = ({ className, id, label, url, items }) => {
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
    <li className={className} itemProp={id}>
      <a href={href} title={label} onClick={onClick}>
        {label}
      </a>
      {!!items.length && <List items={items} />}
    </li>
  );
};

Item.propTypes = {
  className: string.isRequired,
  items: menuItemsPropTypes,
  ...menuItemPropTypes,
};

Item.defaultProps = {
  items: [],
};

export default withStyle(Item);
