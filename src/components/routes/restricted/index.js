import { string, elementType, bool } from 'prop-types';
import React, { createElement, useCallback } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useAuthentication, useI18n } from 'hooks';
import messages from 'components/app/messages';

const Restricted = ({ component, ...route }) => {
  const { logged } = useAuthentication();
  const { login } = useI18n(messages);
  const render = useCallback(
    props =>
      logged ? (
        createElement(component, props)
      ) : (
        <Redirect to={{ state: { from: props.location }, pathname: login }} />
      ),
    [logged, component, login]
  );

  return <Route render={render} {...route} />;
};

Restricted.propTypes = {
  path: string.isRequired,
  component: elementType.isRequired,
  exact: bool,
};

Restricted.defaultProps = {
  exact: false,
};

export default Restricted;
