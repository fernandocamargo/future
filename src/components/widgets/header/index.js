import { string } from 'prop-types';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { useAuthentication, useI18n } from 'hooks';

import { Public, Restricted } from './menu';
import messages from './messages';
import withStyle from './style';

const Header = ({ className }) => {
  const { logged } = useAuthentication();
  const Menu = useMemo(() => (logged ? Restricted : Public), [logged]);
  const { name, action } = useI18n(messages);

  return (
    <header className={className}>
      <h2>
        <Link to="/" title={name}>
          {name}
        </Link>
        <span> {action}</span>
      </h2>
      <Menu />
    </header>
  );
};

Header.propTypes = {
  className: string.isRequired,
};

Header.defaultProps = {};

export default withStyle(Header);
