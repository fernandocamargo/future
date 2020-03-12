// fix cache
import { func, shape, string } from 'prop-types';
import React from 'react';

import { useI18n } from 'hooks';
import { Form } from 'components/widgets';

import useOn from './hooks';
import render from './form';
import messages from './messages';
import withStyle from './style';

const On = ({ useStyle, profile }) => {
  const form = useOn({ profile, render });
  const { title, description } = useI18n(messages);
  const style = useStyle();

  return (
    <section {...style}>
      <article>
        <h1>{title}</h1>
        <p>{description}</p>
      </article>
      <Form {...form} />
    </section>
  );
};

On.propTypes = {
  useStyle: func.isRequired,
  profile: shape({
    availability: string.isRequired,
  }).isRequired,
};

On.defaultProps = {};

export default withStyle(On);
