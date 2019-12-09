import React, { useCallback, useMemo, useState } from 'react';

import { invert } from 'helpers/boolean';
import { useAuthentication } from 'hooks';
import Phone from './phone';

const PUBLIC = [
  { id: 'registration', label: 'Registration', url: '/registration' },
  { id: 'about-us', label: 'About us', url: '/about-us' },
  { id: 'why-expertlead', label: 'Why expertlead', url: '/why-expertlead' },
  {
    id: 'contact',
    label: 'Contact',
    items: [
      {
        id: 'phone',
        label: <Phone />,
        url: 'tel:+4930209663144',
        target: '_blank',
        title: 'Click to call us',
      },
    ],
  },
];

export const useMenu = () => {
  const { logged } = useAuthentication();
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = useCallback(() => setExpanded(invert), []);
  const RESTRICTED = useMemo(
    () => [
      { id: 'dashboard', label: 'Dashboard', url: '/dashboard' },
      { id: 'profile', label: 'My CV', url: '/profile' },
      { id: 'referrals', label: 'Referrals', url: '/referrals' },
      { id: 'services', label: 'Services', url: '/services' },
      { id: 'faq', label: 'FAQ', url: '/faq' },
      {
        id: 'you',
        label: 'You',
        url: toggleExpanded,
        items: [
          { id: 'account', label: 'My account', url: '/account' },
          { id: 'settings', label: 'Settings', url: '/settings' },
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
  const items = useMemo(() => (logged ? RESTRICTED : PUBLIC), [
    logged,
    RESTRICTED,
  ]);

  return { expanded, items };
};
