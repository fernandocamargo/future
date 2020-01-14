import { string } from 'prop-types';
import React, { useCallback, useState } from 'react';

import { reverse } from 'helpers/boolean';
import { useAuthentication, useI18n, useRoutes } from 'hooks';
import { Link, Menu } from 'components/widgets';
import Option from 'components/widgets/menu/option';

import messages from './messages';
import withStyle from './style';

const Restricted = ({ className }) => {
  const { logout: leave } = useAuthentication();
  const routes = useRoutes();
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = useCallback(() => setExpanded(reverse), []);
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
    <Menu className={className} aria-expanded={expanded}>
      <Option id="dashboard">
        <Link to={routes.dashboard}>{dashboard}</Link>
      </Option>
      <Option id="profile">
        <Link to={routes.profile}>{profile}</Link>
      </Option>
      <Option id="referrals">
        <Link to={routes.referrals}>{referrals}</Link>
      </Option>
      <Option id="services">
        <Link to={routes.services}>{services}</Link>
      </Option>
      <Option id="faq">
        <Link to={routes.faq}>{faq}</Link>
      </Option>
      <Option id="you">
        <Link to={toggleExpanded}>{you}</Link>
        <Menu>
          <Option id="account">
            <Link to={routes.account}>{account}</Link>
          </Option>
          <Option id="settings">
            <Link to={routes.settings}>{settings}</Link>
          </Option>
          <Option id="logout">
            <Link to={leave}>{logout}</Link>
          </Option>
        </Menu>
      </Option>
    </Menu>
  );
};

Restricted.propTypes = {
  className: string.isRequired,
};

Restricted.defaultProps = {};

export default withStyle(Restricted);
