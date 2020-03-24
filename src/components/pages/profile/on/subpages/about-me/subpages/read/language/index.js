import { shape, string } from 'prop-types';
import React from 'react';

const Language = ({ language: { name } }) => <span>{name}</span>;

Language.propTypes = {
  language: shape({
    name: string.isRequired,
  }).isRequired,
};

Language.defaultProps = {};

export default Language;
