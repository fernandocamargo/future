import moment from 'moment';
import { func, instanceOf, shape } from 'prop-types';
import React from 'react';

import { useI18n } from 'hooks';
import { Countdown } from 'components/widgets';

import { useFulfilled } from './hooks';
import Link from './link';
import messages from './messages';

const Fulfilled = ({ redirect: { to, ...redirect } }) => {
  const { countdown } = useFulfilled({ redirect });
  const { title, description } = useI18n(messages, {
    link: <Link to={to} />,
    countdown: countdown && <Countdown {...countdown} />,
  });

  return (
    <article>
      <h1>{title}</h1>
      <p>{description}</p>
    </article>
  );
};

Fulfilled.propTypes = {
  redirect: shape({
    when: instanceOf(moment).isRequired,
    to: func.isRequired,
  }).isRequired,
};

Fulfilled.defaultProps = {};

export default Fulfilled;
