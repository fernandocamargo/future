import { func, node } from 'prop-types';
import React, { useMemo } from 'react';

import { useI18n } from 'hooks';

import messages from './messages';
import withStyle from './style';

const Menu = ({ title: customTitle, useStyle, children, ...props }) => {
  const { title: defaultTitle } = useI18n(messages);
  const title = useMemo(() => customTitle || defaultTitle, [
    customTitle,
    defaultTitle,
  ]);
  const style = useStyle();

  return (
    !!children && (
      <nav {...style} {...props}>
        <h4>{title}</h4>
        <ul itemScope>{children}</ul>
      </nav>
    )
  );
};

Menu.propTypes = {
  useStyle: func.isRequired,
  title: node,
  children: node,
};

Menu.defaultProps = {
  title: null,
  children: null,
};

export default withStyle(Menu);
