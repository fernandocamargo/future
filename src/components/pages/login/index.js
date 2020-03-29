import React, { Suspense as OnDemand } from 'react';
import { Switch as Routes } from 'react-router-dom';

import { useRoutes } from 'hooks';
import { Public } from 'components/routes';
import { Loader } from 'components/widgets';

import { Index, RecoverPassword, SetNewPassword } from './subpages';

const Login = () => {
  const routes = useRoutes();

  return (
    <OnDemand fallback={<Loader />}>
      <Routes>
        <Public
          path={routes['recover-password']}
          component={RecoverPassword}
          exact
        />
        <Public
          path={`${routes['set-new-password']}/:token`}
          component={SetNewPassword}
        />
        <Public path="*" component={Index} />
      </Routes>
    </OnDemand>
  );
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
