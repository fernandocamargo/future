import { func } from 'prop-types';
import React, { createElement, useCallback } from 'react';

import withStyle from './style';

const Collection = ({
  value: items,
  render: component,
  useStyle,
  getKey,
  label,
}) => {
  const renderItem = useCallback(
    item => createElement(component, { key: getKey(item), ...item }),
    [component, getKey]
  );
  const style = useStyle();

  return (
    <div {...style}>
      <h3>{label}</h3>
      {items.map(renderItem)}
    </div>
  );
};

Collection.propTypes = {
  useStyle: func.isRequired,
};

Collection.defaultProps = {};

export default withStyle(Collection);
