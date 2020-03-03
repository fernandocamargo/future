import { func, node } from 'prop-types';
import React from 'react';

import withStyle from './style';

const Container = ({ useStyle, onReset, onSubmit, children }) => {
  const style = useStyle();

  return (
    <form
      autoComplete="off"
      noValidate
      onReset={onReset}
      onSubmit={onSubmit}
      {...style}
    >
      {children}
    </form>
  );
};

Container.propTypes = {
  useStyle: func.isRequired,
  onReset: func.isRequired,
  onSubmit: func.isRequired,
  children: node.isRequired,
};

Container.defaultProps = {};

export default withStyle(Container);
