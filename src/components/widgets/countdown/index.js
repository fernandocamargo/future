import { number } from 'prop-types';
import React from 'react';

import { useCountdown } from './hooks';

const Countdown = ({ from }) => {
  const current = useCountdown({ from });

  return <span>{current}</span>;
};

Countdown.propTypes = {
  from: number,
};

Countdown.defaultProps = {
  from: 0,
};

export default Countdown;
