import { string } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { useI18n } from 'hooks';
import { Menu } from 'components/widgets';

import { useMenu } from './hooks';
import messages from './messages';
import withStyle from './style';

const Header = ({ className }) => {
  const { expanded, items } = useMenu();
  const { name, action } = useI18n(messages);

  return (
    <header className={className} aria-expanded={expanded}>
      <h2>
        <Link to="/" title={name}>
          {name}
        </Link>
        <span> {action}</span>
      </h2>
      <Menu items={items} />
    </header>
  );
};

Header.propTypes = {
  className: string.isRequired,
};

Header.defaultProps = {};

export default withStyle(Header);
