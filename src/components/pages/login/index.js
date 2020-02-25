import { func } from 'prop-types';
import React, { Suspense as OnDemand } from 'react';
import { Switch as Routes } from 'react-router-dom';

import { useRoutes } from 'hooks';
import { Public } from 'components/routes';
import { Loader } from 'components/widgets';

import { Index, RecoverPassword, SetNewPassword } from './pages';
import withStyle from './style';

const Login = ({ useStyle }) => {
  const {
    'recover-password': recoverPassword,
    'set-new-password': setNewPassword,
  } = useRoutes();
  const style = useStyle();

  return (
    <section {...style}>
      <OnDemand fallback={<Loader />}>
        <Routes>
          <Public path={recoverPassword} component={RecoverPassword} exact />
          <Public
            path={`${setNewPassword}/:token`}
            component={SetNewPassword}
          />
          <Public path="*" component={Index} />
        </Routes>
      </OnDemand>
    </section>
  );
};

Login.propTypes = {
  useStyle: func.isRequired,
};

Login.defaultProps = {};

export default withStyle(Login);
