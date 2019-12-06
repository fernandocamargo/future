import { string } from 'prop-types';
import React, { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuthentication } from 'hooks';
import { Menu } from 'components/widgets';

import withStyle from './style';

const PUBLIC = [
  { id: 'registration', label: 'Registration', url: '/registration' },
  { id: 'about-us', label: 'About us', url: '/about-us' },
  { id: 'why-expertlead', label: 'Why expertlead', url: '/why-expertlead' },
];

const Header = ({ className }) => {
  const { logged } = useAuthentication();
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = useCallback(
    () => setExpanded(current => !current),
    []
  );
  const RESTRICTED = useMemo(
    () => [
      { id: 'dashboard', label: 'Dashboard', url: '/dashboard' },
      { id: 'profile', label: 'My CV', url: '/profile' },
      { id: 'referrals', label: 'Referrals', url: '/referrals' },
      { id: 'services', label: 'Services', url: '/services' },
      { id: 'faq', label: 'FAQ', url: '/faq' },
      {
        id: 'user',
        label: 'Developer name',
        url: toggleExpanded,
        items: [
          { id: 'account', label: 'My account', url: '/account' },
          {
            id: 'sign-out',
            label: 'Sign-Out',
            url: () => console.log('sign-out();'),
          },
        ],
      },
    ],
    [toggleExpanded]
  );
  const menu = useMemo(() => (!logged ? RESTRICTED : PUBLIC), [
    logged,
    RESTRICTED,
  ]);

  return (
    <header className={className}>
      <h2>
        <Link to="/">expertlead</Link>
        <span> proudly presents:</span>
      </h2>
      <pre>{JSON.stringify({ expanded }, null, 2)}</pre>
      <Menu items={menu} />
    </header>
  );
};

Header.propTypes = {
  className: string.isRequired,
};

Header.defaultProps = {};

export default withStyle(Header);
