import { node, string } from 'prop-types';
import React from 'react';

import { useI18n } from 'hooks';

import messages from './messages';
import withStyle from './style';

const Menu = ({ className, title, children }) => {
  const { title: defaultTitle } = useI18n(messages);

  return (
    !!children && (
      <nav className={className}>
        <h4>{title || defaultTitle}</h4>
        <ul itemScope>{children}</ul>
      </nav>
    )
  );
};

Menu.propTypes = {
  className: string.isRequired,
  title: node,
  children: node,
};

Menu.defaultProps = {};

export default withStyle(Menu);
