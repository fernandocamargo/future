import { string } from 'prop-types';
import React from 'react';

import { useI18n, useRoutes } from 'hooks';
import { Link } from 'components/widgets';

import messages from './messages';
import withStyle from './style';

const Phone = ({ className }) => {
  const routes = useRoutes();
  const {
    'call-to-action': callToAction,
    'phone-number': phoneNumber,
  } = useI18n(messages);

  return (
    <Link className={className} to={routes.phone}>
      <em>{callToAction} </em>
      <strong>{phoneNumber}</strong>
    </Link>
  );
};

Phone.propTypes = {
  className: string.isRequired,
};

Phone.defaultProps = {};

export default withStyle(Phone);
