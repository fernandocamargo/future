import { string } from 'prop-types';
import React, { Suspense as OnDemand } from 'react';
import { Switch as Routes } from 'react-router-dom';

import { useI18n } from 'hooks';
import { Restricted, Public } from 'components/routes';
import {
  Account,
  Dashboard,
  Home,
  Login,
  NotFound,
  Profile,
  Referrals,
  Registration,
} from 'components/pages';
import { Footer, Header, Loader } from 'components/widgets';

import messages from './messages';
import withStyle from './style.js';

const App = ({ className }) => {
  const {
    account,
    dashboard,
    login,
    profile,
    referrals,
    registration,
  } = useI18n(messages);

  return (
    <div className={className}>
      <Header />
      <main>
        <OnDemand fallback={<Loader />}>
          <Routes>
            <Public path="/" component={Home} exact />
            <Public path={registration} component={Registration} exact />
            <Public path={login} component={Login} exact />
            <Restricted path={dashboard} component={Dashboard} exact />
            <Restricted path={profile} component={Profile} exact />
            <Restricted path={referrals} component={Referrals} exact />
            <Restricted path={account} component={Account} exact />
            <Public path="*" component={NotFound} />
          </Routes>
        </OnDemand>
      </main>
      <Footer />
    </div>
  );
};

App.propTypes = {
  className: string.isRequired,
};

App.defaultProps = {};

export default withStyle(App);
