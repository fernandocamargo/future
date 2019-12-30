import { arrayOf, func, shape, string } from 'prop-types';
import update from 'immutability-helper';
import React, { createElement, useCallback, useMemo } from 'react';

import Container from './container';
import Field from './field';
import withStyle from './style';

const Form = ({ fields, onSubmit, render }) => {
  const Form = useCallback(
    props => <Container {...props} onSubmit={onSubmit} />,
    [onSubmit]
  );
  const components = useMemo(() => ({ Form }), [Form]);
  const elements = useMemo(
    () => ({
      fields: fields.reduce(
        (stack, field) => {
          const { name } = field;
          const element = createElement(Field, { key: name, ...field });

          return update(stack, {
            ordered: { $push: [element] },
            unordered: { [name]: { $set: element } },
          });
        },
        { ordered: [], unordered: {} }
      ),
    }),
    [fields]
  );

  return createElement(render, { components, elements });
};

Form.propTypes = {
  className: string.isRequired,
  fields: arrayOf(shape({}).isRequired),
  onSubmit: func.isRequired,
};

Form.defaultProps = {
  fields: [],
};

export default withStyle(Form);
