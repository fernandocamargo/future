import { func, shape, string } from 'prop-types';
import React, { useMemo } from 'react';

import { useI18n, useRoutes } from 'hooks';
import { Link, Menu as Wrapper } from 'components/widgets';
import Option from 'components/widgets/menu/option';

import messages from './messages';
import withStyle from './style';

const Menu = ({ useStyle, profile }) => {
  const routes = useRoutes();
  const { 'recover-password': recoverPassword, actions, login } = useI18n(
    messages
  );
  const params = useMemo(() => ({ profile }), [profile]);
  const style = useStyle();

  return (
    <Wrapper title={actions} {...style}>
      <Option>
        <Link to={routes.login} params={params}>
          {login}
        </Link>
      </Option>
      <Option>
        <Link to={routes['recover-password']} params={params}>
          {recoverPassword}
        </Link>
      </Option>
    </Wrapper>
  );
};

Menu.propTypes = {
  useStyle: func.isRequired,
  profile: shape({
    email: string.isRequired,
  }),
};

Menu.defaultProps = {
  profile: {},
};

export default withStyle(Menu);
