import { func } from 'prop-types';
import React from 'react';

import { Loader } from 'components/widgets';
import { Redirect } from 'components/routes';

import { useCondition } from './hooks';
import Valid from './valid';
import withStyle from './style';

const Registration = ({ useStyle }) => {
  const { condition, profile } = useCondition();
  const style = useStyle();

  switch (condition) {
    case 'valid':
      return <Valid profile={profile} {...style} />;
    case 'invalid':
      return <Redirect to="/404" />;
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
