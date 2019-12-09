import { node, oneOf, string } from 'prop-types';
import React from 'react';

import withStyle from './style';

const Text = ({ className, label, ...props }) => (
  <dl className={className}>
    <dt>
      <label>{label}</label>
    </dt>
    <dd>
      <input {...props} />
    </dd>
  </dl>
);

Text.propTypes = {
  className: string.isRequired,
  label: node.isRequired,
  type: oneOf(['text', 'email', 'password']),
};

Text.defaultProps = {
  type: 'text',
};

export default withStyle(Text);
