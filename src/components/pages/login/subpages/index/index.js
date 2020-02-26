import React from 'react';

import { Form } from 'components/widgets';

import { useIndex } from './hooks';

const Root = () => {
  const form = useIndex();

  return <Form {...form} />;
};

Root.propTypes = {};

Root.defaultProps = {};

export default Root;
