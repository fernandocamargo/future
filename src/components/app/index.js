import { string } from "prop-types";
import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { Account, Home, NotFound, Profile, Referrals } from "components/pages";
import { Footer, Header, Loader } from "components/widgets";

import withStyle from "./style.js";

const App = ({ className }) => (
  <div className={className}>
    <Header />
    <main>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/account" component={Account} exact />
          <Route path="/profile" component={Profile} exact />
          <Route path="/referrals" component={Referrals} exact />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </main>
    <Footer />
  </div>
);

App.propTypes = {
  className: string.isRequired
};

App.defaultProps = {};

export default withStyle(App);
