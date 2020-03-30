import { func } from 'prop-types';
import React from 'react';

import { Form } from 'components/widgets';

import { useWrite } from './hooks';
import withStyle from './style';

const Write = ({ useStyle, profile }) => {
  const form = useWrite({ profile });
  const style = useStyle();

  return (
    <section {...style}>
      <h1>About me (write)</h1>
      <Form {...form} />
    </section>
  );
};

Write.propTypes = {
  useStyle: func.isRequired,
};

Write.defaultProps = {};

export default withStyle(Write);
