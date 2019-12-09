import { string } from 'prop-types';
import React from 'react';

import { items as menuItemsPropTypes } from 'prop-types/menu';
import { item as menuItemPropTypes } from 'prop-types/menu/item';

import { useNavigation } from './hooks';
import List from '../list';
import withStyle from './style';

const Item = ({ className, ...props }) => {
  const { matched, ...navigation } = useNavigation(props);
  const { id, label, url, items, ...link } = props;
  const title = !!label.length && label;
  const current = matched && 'page';

  return (
    <li className={className} itemProp={id}>
      {!url ? (
        <span>{label}</span>
      ) : (
        <a title={title} aria-current={current} {...link} {...navigation}>
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
