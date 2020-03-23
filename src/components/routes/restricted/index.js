import { bool, elementType, shape, string } from 'prop-types';
import React, { createElement, useCallback } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useAuthentication, useRoutes } from 'hooks';

const Restricted = ({ props: extra, component, ...route }) => {
  const { logged } = useAuthentication();
  const routes = useRoutes();
  const render = useCallback(
    props =>
      logged ? (
        createElement(component, { ...props, ...extra })
      ) : (
        <Redirect
          to={{ state: { from: props.location }, pathname: routes.login }}
        />
      ),
    [logged, component, extra, routes]
  );

  return <Route render={render} {...route} />;
};

Restricted.propTypes = {
  path: string.isRequired,
  component: elementType.isRequired,
  exact: bool,
  props: shape({}),
};

Restricted.defaultProps = {
  exact: false,
  props: null,
};

export default Restricted;
