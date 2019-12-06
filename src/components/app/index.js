import { string } from 'prop-types';
import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';

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

import withStyle from './style.js';

const App = ({ className }) => (
  <div className={className}>
    <Header />
    <main>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Public path="/" component={Home} exact />
          <Public path="/registration" component={Registration} exact />
          <Public path="/login" component={Login} exact />
          <Restricted path="/dashboard" component={Dashboard} exact />
          <Restricted path="/profile" component={Profile} exact />
          <Restricted path="/referrals" component={Referrals} exact />
          <Restricted path="/account" component={Account} exact />
          <Public path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </main>
    <Footer />
  </div>
);

App.propTypes = {
  className: string.isRequired,
};

App.defaultProps = {};

export default withStyle(App);
