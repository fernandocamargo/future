import { func, node } from 'prop-types';
import React from 'react';

import { useI18n, useRoutes } from 'hooks';
import { Link, Menu } from 'components/widgets';
import Option from 'components/widgets/menu/option';

import messages from './messages';
import withStyle from './style';

const Failure = ({ reason: description, useStyle }) => {
  const routes = useRoutes();
  const {
    'recover-password': recoverPassword,
    title,
    actions,
    login,
  } = useI18n(messages);
  const style = useStyle();

  return (
    <article {...style}>
      <h1>{title}</h1>
      <p>{description}</p>
      <Menu title={actions}>
        <Option>
          <Link to={routes.login}>{login}</Link>
        </Option>
        <Option>
          <Link to={routes.login}>{recoverPassword}</Link>
        </Option>
      </Menu>
    </article>
  );
};

Failure.propTypes = {
  useStyle: func.isRequired,
  reason: node.isRequired,
};

Failure.defaultProps = {};

export default withStyle(Failure);
