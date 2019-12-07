import { string } from 'prop-types';
import React from 'react';

import { items as menuItemsPropTypes } from 'prop-types/menu';
import { item as menuItemPropTypes } from 'prop-types/menu/item';

import { useNavigation } from './hooks';
import List from '../list';
import withStyle from './style';

const Item = ({ className, id, label, url, target, items, ...props }) => {
  const { href, onClick } = useNavigation({ url, target });
  const title = label.length && label;

  return (
    <li className={className} itemProp={id}>
      {!url ? (
        <span>{label}</span>
      ) : (
        <a
          href={href}
          target={target}
          title={title}
          onClick={onClick}
          {...props}
        >
          {label}
        </a>
      )}
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
