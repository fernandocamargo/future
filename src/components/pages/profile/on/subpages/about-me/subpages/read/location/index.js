import { shape, string } from 'prop-types';
import React from 'react';

const Location = ({ country: { name: country }, accent: city }) => (
  <span>
    {city}, {country}
  </span>
);

Location.propTypes = {
  country: shape({
    name: string.isRequired,
  }).isRequired,
  accent: string.isRequired,
};

Location.defaultProps = {};

export default Location;
