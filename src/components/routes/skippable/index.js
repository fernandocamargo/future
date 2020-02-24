import { string, elementType, bool } from 'prop-types';
import React, { createElement, useCallback } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useAuthentication } from 'hooks';

const HOME = { pathname: '/' };

const Skippable = ({ component, ...route }) => {
  const { logged } = useAuthentication();
  const render = useCallback(
    props =>
      !logged ? createElement(component, props) : <Redirect to={HOME} />,
    [logged, component]
  );

  return <Route render={render} {...route} />;
};

Skippable.propTypes = {
  path: string.isRequired,
  component: elementType.isRequired,
  exact: bool,
};

Skippable.defaultProps = {
  exact: false,
};

export default Skippable;
