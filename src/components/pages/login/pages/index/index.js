import React from 'react';

import { Form } from 'components/widgets';

import { useRoot } from './hooks';

const Root = () => {
  const form = useRoot();

  return <Form {...form} />;
};

Root.propTypes = {};

Root.defaultProps = {};

export default Root;
