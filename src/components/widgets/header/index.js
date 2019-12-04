import { string } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import MenuItem from './menu-item';
import withStyle from './style';

const menu = [
  { label: 'Home', url: '' },
  { label: 'My CV', url: '/profile' },
  { label: 'Referrals', url: '/referrals' },
  { label: 'Services', url: '/services' },
  { label: 'FAQ', url: '/faq' },
];

const renderMenu = item => <MenuItem key={item.url} {...item} />;

const Header = ({ className }) => {
  return (
    <header className={className}>
      <h2>
        <Link to="/">expertlead</Link>
      </h2>
      <nav>
        <h4>Browse through:</h4>
        <ul>{menu.map(renderMenu)}</ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  className: string.isRequired,
};

Header.defaultProps = {};

export default withStyle(Header);
