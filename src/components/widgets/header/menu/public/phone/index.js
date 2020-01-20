import { func } from 'prop-types';
import React from 'react';

import { useI18n, useRoutes } from 'hooks';
import { Link } from 'components/widgets';

import messages from './messages';
import withStyle from './style';

const Phone = ({ useStyle }) => {
  const routes = useRoutes();
  const {
    'call-to-action': callToAction,
    'phone-number': phoneNumber,
  } = useI18n(messages);
  const style = useStyle();

  return (
    <Link to={routes.phone} {...style}>
      <em>{callToAction} </em>
      <strong>{phoneNumber}</strong>
    </Link>
  );
};

Phone.propTypes = {
  useStyle: func.isRequired,
};

Phone.defaultProps = {};

export default withStyle(Phone);
