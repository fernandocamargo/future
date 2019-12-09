import { string } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'components/widgets';

import { useMenu } from './hooks';
import withStyle from './style';

const Header = ({ className }) => {
  const { expanded, items } = useMenu();

  return (
    <header className={className} aria-expanded={expanded}>
      <h2>
        <Link to="/">expertlead</Link>
        <span> proudly presents:</span>
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
