import { bool, elementType, shape, string } from 'prop-types';
import React, { createElement, useCallback } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useAuthentication } from 'hooks';

const HOME = { pathname: '/' };

const Skippable = ({ props: extra, component, ...route }) => {
  const { logged } = useAuthentication();
  const render = useCallback(
    props =>
      !logged ? (
        createElement(component, { ...props, extra })
      ) : (
        <Redirect to={HOME} />
      ),
    [logged, component, extra]
  );

  return <Route render={render} {...route} />;
};

Skippable.propTypes = {
  path: string.isRequired,
  component: elementType.isRequired,
  exact: bool,
  props: shape({}),
};

Skippable.defaultProps = {
  exact: false,
  props: null,
};

export default Skippable;
