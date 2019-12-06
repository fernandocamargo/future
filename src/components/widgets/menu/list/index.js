import { string } from 'prop-types';
import React from 'react';

import { items as menuItemsPropTypes } from 'prop-types/menu';

import Item from '../item';
import withStyle from './style';

const renderItem = item => <Item key={item.id} {...item} />;

const List = ({ className, items }) => (
  <ul className={className} itemScope>
    {items.map(renderItem)}
  </ul>
);

List.propTypes = {
  className: string.isRequired,
  items: menuItemsPropTypes,
};

List.defaultProps = {
  items: [],
};

export default withStyle(List);
