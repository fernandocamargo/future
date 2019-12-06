import { string, elementType, bool } from 'prop-types';
import React, { createElement, useCallback } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useAuthentication } from 'hooks';

const Restricted = ({ component, ...route }) => {
  const { logged } = useAuthentication();
  const render = useCallback(
    props =>
      logged ? (
        createElement(component, props)
      ) : (
        <Redirect
          to={{ state: { from: props.location }, pathname: '/login' }}
        />
      ),
    [logged, component]
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
