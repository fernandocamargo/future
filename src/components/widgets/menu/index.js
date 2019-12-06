import { arrayOf, func, node, oneOfType, shape, string } from 'prop-types';
import React from 'react';

import List from './list';
import withStyle from './style';

const Menu = ({ className, items }) =>
  !!items.length && (
    <nav className={className}>
      <h4>Browse through:</h4>
      <List items={items} />
    </nav>
  );

Menu.propTypes = {
  className: string.isRequired,
  items: arrayOf(
    shape({
      id: string.isRequired,
      label: node.isRequired,
      url: oneOfType([string.isRequired, func.isRequired]).isRequired,
      children: arrayOf(shape({})),
    })
  ),
};

Menu.defaultProps = {
  items: [],
};

export default withStyle(Menu);
