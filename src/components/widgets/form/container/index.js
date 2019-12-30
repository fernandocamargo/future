import { func, node, string } from 'prop-types';
import React from 'react';

import withStyle from './style';

const Container = ({ className, onSubmit, children }) => (
  <form className={className} autoComplete="off" noValidate onSubmit={onSubmit}>
    {children}
  </form>
);

Container.propTypes = {
  className: string.isRequired,
  onSubmit: func.isRequired,
  children: node.isRequired,
};

Container.defaultProps = {};

export default withStyle(Container);
