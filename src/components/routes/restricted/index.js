import { elementType } from 'prop-types';
import React, { createElement, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import selector from './selector';

const Restricted = ({ component, ...route }) => {
  const { logged } = useSelector(selector);
  const render = useCallback(
    ({ location, ...props }) =>
      logged ? (
        createElement(component, props)
      ) : (
        <Redirect to={{ state: { from: location }, pathname: '/login' }} />
      ),
    [logged, component]
  );

  return <Route render={render} {...route} />;
};

Restricted.propTypes = {
  component: elementType.isRequired,
};

Restricted.defaultProps = {};

export default Restricted;
