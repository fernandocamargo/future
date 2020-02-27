import { func } from 'prop-types';
import React, { Suspense as OnDemand } from 'react';
import { Switch as Routes } from 'react-router-dom';

import { useRoutes } from 'hooks';
import { Public, Restricted, Skippable } from 'components/routes';
import {
  Account,
  Dashboard,
  FAQ,
  Home,
  Login,
  NotFound,
  Profile,
  Referrals,
  Registration,
  Services,
} from 'components/pages';
import { Footer, Header, Loader } from 'components/widgets';

import withStyle from './style';

const App = ({ useStyle }) => {
  const {
    account,
    dashboard,
    faq,
    login,
    profile,
    referrals,
    registration,
    services,
  } = useRoutes();
  const style = useStyle();

  return (
    <div {...style}>
      <Header />
      <main>
        <OnDemand fallback={<Loader />}>
          <Routes>
            <Public path="/" component={Home} exact />
            <Public path={`${registration}/:token`} component={Registration} />
            <Skippable path={login} component={Login} />
            <Restricted path={dashboard} component={Dashboard} exact />
            <Restricted path={profile} component={Profile} exact />
            <Restricted path={referrals} component={Referrals} exact />
            <Restricted path={services} component={Services} exact />
            <Restricted path={faq} component={FAQ} />
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
  useStyle: func.isRequired,
};

App.defaultProps = {};

export default withStyle(App);
