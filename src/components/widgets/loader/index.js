import { string } from 'prop-types';
import React from 'react';

import withStyle from './style';

const Loader = ({ className }) => (
  <p className={className}>Wait, we are making things up for you...</p>
);

Loader.propTypes = {
  className: string.isRequired,
};

Loader.defaultProps = {};

export default withStyle(Loader);
