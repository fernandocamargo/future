import React from 'react';

import { useAuthentication, useI18n, useRoutes } from 'hooks';
import { Menu } from 'components/widgets';
import Item from 'components/widgets/menu/item';

import messages from './messages';

const Restricted = () => {
  const { logout: leave } = useAuthentication();
  const routes = useRoutes();
  const {
    dashboard,
    profile,
    referrals,
    services,
    faq,
    you,
    account,
    settings,
    logout,
  } = useI18n(messages);

  return (
    <Menu>
      <Item id="dashboard" url={routes.dashboard}>
        {dashboard}
      </Item>
      <Item id="profile" url={routes.profile}>
        {profile}
      </Item>
      <Item id="referrals" url={routes.referrals}>
        {referrals}
      </Item>
      <Item id="services" url={routes.services}>
        {services}
      </Item>
      <Item id="faq" url={routes.faq}>
        {faq}
      </Item>
      <Item id="you">
        <span>{you}</span>
        <Menu>
          <Item id="account" url={routes.account}>
            {account}
          </Item>
          <Item id="settings" url={routes.settings}>
            {settings}
          </Item>
          <Item id="logout" url={leave}>
            {logout}
          </Item>
        </Menu>
      </Item>
    </Menu>
  );
};

Restricted.propTypes = {};

Restricted.defaultProps = {};

export default Restricted;
