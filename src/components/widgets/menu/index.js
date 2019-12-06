import { node, string } from 'prop-types';
import React from 'react';

import { items as menuItemsPropTypes } from 'prop-types/menu';

import List from './list';
import withStyle from './style';

const Menu = ({ className, title, items }) =>
  !!items.length && (
    <nav className={className}>
      <h4>{title}</h4>
      <List items={items} />
    </nav>
  );

Menu.propTypes = {
  className: string.isRequired,
  title: node,
  items: menuItemsPropTypes,
};

Menu.defaultProps = {
  title: 'Browse through:',
  items: [],
};

export default withStyle(Menu);
