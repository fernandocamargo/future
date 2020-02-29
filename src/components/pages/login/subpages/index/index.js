import React from 'react';

import { Form } from 'components/widgets';

import { useIndex } from './hooks';

const Index = () => {
  const form = useIndex();

  return <Form {...form} />;
};

Index.propTypes = {};

Index.defaultProps = {};

export default Index;
