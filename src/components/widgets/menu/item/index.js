import isString from 'lodash/isString';
import { func, node, oneOf, oneOfType, string } from 'prop-types';
import React from 'react';

import { useNavigation } from './hooks';
import withStyle from './style';

const Item = ({ className, children, ...props }) => {
  const { matched, ...navigation } = useNavigation(props);
  const { id, url, ...attributes } = props;
  const current = matched && 'page';
  const link = {
    ...(isString(children) && { title: children }),
    ...(!!current && { 'aria-current': current }),
    ...navigation,
    ...attributes,
  };

  return (
    <li className={className} itemProp={id}>
      {!url ? children : <a {...link}>{children}</a>}
    </li>
  );
};

Item.propTypes = {
  className: string.isRequired,
  id: string.isRequired,
  url: oneOfType([string, func]),
  target: oneOf(['_blank']),
  children: node.isRequired,
};

Item.defaultProps = {};

export default withStyle(Item);
