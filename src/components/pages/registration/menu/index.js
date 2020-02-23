import { func, shape, string } from 'prop-types';
import React from 'react';

import { useI18n, useRoutes } from 'hooks';
import { Link, Menu } from 'components/widgets';
import Option from 'components/widgets/menu/option';

import messages from './messages';
import withStyle from './style';

const Navigation = ({ useStyle, profile }) => {
  const routes = useRoutes();
  const { 'recover-password': recoverPassword, actions, login } = useI18n(
    messages
  );
  const style = useStyle();

  return (
    <Menu title={actions} {...style}>
      <Option>
        <Link to={routes.login} params={profile}>
          {login}
        </Link>
      </Option>
      <Option>
        <Link to={routes['password-recovery']} params={profile}>
          {recoverPassword}
        </Link>
      </Option>
    </Menu>
  );
};

Navigation.propTypes = {
  useStyle: func.isRequired,
  profile: shape({
    email: string.isRequired,
  }),
};

Navigation.defaultProps = {};

export default withStyle(Navigation);
