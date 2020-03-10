import React from 'react';

import { Loader } from 'components/widgets';

import { useRegistration } from './hooks';
import Valid from './valid';
import Invalid from './invalid';

const Registration = () => {
  const { condition, valid, invalid } = useRegistration();

  switch (condition) {
    case 'success':
      return <Valid {...valid} />;
    case 'failure':
      return <Invalid {...invalid} />;
    case 'pending':
    default:
      return <Loader />;
  }
};

Registration.propTypes = {};

Registration.defaultProps = {};

export default Registration;
