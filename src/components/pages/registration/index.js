import React from 'react';

import { Loader } from 'components/widgets';

import { useCondition } from './hooks';
import Valid from './valid';
import Invalid from './invalid';

const Registration = () => {
  const { condition, valid, invalid } = useCondition();

  switch (condition) {
    case 'valid':
      return <Valid {...valid} />;
    case 'invalid':
      return <Invalid {...invalid} />;
    case 'loading':
    default:
      return <Loader />;
  }
};

Registration.propTypes = {};

Registration.defaultProps = {};

export default Registration;
