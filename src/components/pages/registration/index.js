import { func } from 'prop-types';
import React from 'react';

import { Loader } from 'components/widgets';

import { useCondition } from './hooks';
import Valid from './valid';
import Invalid from './invalid';
import withStyle from './style';

const Registration = ({ useStyle }) => {
  const { condition, profile, error } = useCondition();
  const style = useStyle();

  switch (condition) {
    case 'valid':
      return <Valid profile={profile} {...style} />;
    case 'invalid':
      return <Invalid error={error} />;
    case 'loading':
    default:
      return <Loader />;
  }
};

Registration.propTypes = {
  useStyle: func.isRequired,
};

Registration.defaultProps = {};

export default withStyle(Registration);
