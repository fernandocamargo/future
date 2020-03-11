import React from 'react';

import { PENDING, REJECTED, SUCCESS } from 'hooks/promise/constants';
import { Loader } from 'components/widgets';

import { useRegistration } from './hooks';
import Valid from './valid';
import Invalid from './invalid';

const Registration = () => {
  const { status, valid, invalid } = useRegistration();

  switch (status) {
    case SUCCESS:
      return <Valid {...valid} />;
    case REJECTED:
      return <Invalid {...invalid} />;
    case PENDING:
    default:
      return <Loader />;
  }
};

Registration.propTypes = {};

Registration.defaultProps = {};

export default Registration;
