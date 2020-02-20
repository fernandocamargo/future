import isString from 'lodash/isString';
import { func, node, oneOfType, string } from 'prop-types';
import React, { useCallback } from 'react';

import { useNavigation } from './hooks';
import withStyle from './style';

const Link = ({ useStyle, to, children, params, ...props }) => {
  const { href, current, external, navigate } = useNavigation({ to });
  const onClick = useCallback(
    event => {
      event.preventDefault();
      navigate();
    },
    [navigate]
  );
  const attributes = {
    ...(external && { target: '_blank' }),
    ...(isString(children) && { title: children }),
    ...(current && { 'aria-current': 'page' }),
    ...props,
  };
  const style = useStyle();

  return (
    <a {...attributes} href={href} onClick={onClick} {...style}>
      {children}
    </a>
  );
};

Link.propTypes = {
  useStyle: func.isRequired,
  to: oneOfType([func.isRequired, string.isRequired]).isRequired,
  children: node.isRequired,
};

Link.defaultProps = {};

export default withStyle(Link);
