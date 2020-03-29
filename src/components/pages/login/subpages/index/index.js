import { func } from 'prop-types';
import React from 'react';

import { Form } from 'components/widgets';

import { useIndex } from './hooks';
import withStyle from './style';

const Index = ({ useStyle }) => {
  const form = useIndex();
  const style = useStyle();

  return (
    <section {...style}>
      <Form {...form} />
    </section>
  );
};

Index.propTypes = {
  useStyle: func.isRequired,
};

Index.defaultProps = {};

export default withStyle(Index);
