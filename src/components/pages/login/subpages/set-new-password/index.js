import { func } from 'prop-types';
import React from 'react';

import { Form } from 'components/widgets';

import { useRoot } from './hooks';
import withStyle from './style';

const Root = ({ useStyle }) => {
  const form = useRoot();
  const style = useStyle();

  return (
    <section {...style}>
      <Form {...form} />
    </section>
  );
};

Root.propTypes = {
  useStyle: func.isRequired,
};

Root.defaultProps = {};

export default withStyle(Root);
