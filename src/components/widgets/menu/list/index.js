import { string } from 'prop-types';
import React from 'react';

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
};

List.defaultProps = {};

export default withStyle(List);
