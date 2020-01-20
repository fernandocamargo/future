import { func } from 'prop-types';
import React, { useMemo } from 'react';

import { useAuthentication, useI18n } from 'hooks';
import { Link } from 'components/widgets';

import { Public, Restricted } from './menu';
import messages from './messages';
import withStyle from './style';

const Header = ({ useStyle }) => {
  const { logged, profile } = useAuthentication();
  const Menu = useMemo(() => (!logged ? Restricted : Public), [logged]);
  const { name, action } = useI18n(messages);
  const style = useStyle();

  return (
    <header {...style}>
      <h2>
        <Link to="/" title={name}>
          {name}
        </Link>
        <span> {action}</span>
      </h2>
      <Menu {...profile} />
    </header>
  );
};

Header.propTypes = {
  useStyle: func.isRequired,
};

Header.defaultProps = {};

export default withStyle(Header);
