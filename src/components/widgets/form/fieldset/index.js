import { bool, node } from 'prop-types';
import React from 'react';

const Fieldset = ({ disabled, children }) => (
  <fieldset disabled={disabled}>{children}</fieldset>
);

Fieldset.propTypes = {
  children: node.isRequired,
  disabled: bool,
};

Fieldset.defaultProps = {
  disabled: false,
};

export default Fieldset;
