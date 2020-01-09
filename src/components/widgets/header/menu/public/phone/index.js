import { string } from 'prop-types';
import React from 'react';

import { useI18n } from 'hooks';

import messages from './messages';
import withStyle from './style';

const Phone = ({ className }) => {
  const {
    'call-to-action': callToAction,
    'phone-number': phoneNumber,
  } = useI18n(messages);

  return (
    <span className={className}>
      <em>{callToAction} </em>
      <strong>{phoneNumber}</strong>
    </span>
  );
};

Phone.propTypes = {
  className: string.isRequired,
};

Phone.defaultProps = {};

export default withStyle(Phone);
