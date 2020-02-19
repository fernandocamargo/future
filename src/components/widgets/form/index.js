import { arrayOf, func, shape } from 'prop-types';
import update from 'immutability-helper';
import React, { createElement, Fragment, useCallback, useMemo } from 'react';

import { useI18n } from 'hooks';
import { Prompt } from 'components/routes';

import Container from './container';
import Field from './field';
import messages from './messages';
import withStyle from './style';

const Form = ({ useStyle, fields, onSubmit, original, render, ...props }) => {
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
  const { confirmation } = useI18n(messages);
  const style = useStyle();
  const element = createElement(render, {
    ...style,
    ...props,
    components,
    elements,
    original,
  });

  return (
    <Fragment>
      <Prompt message={confirmation} when={!original} />
      {element}
    </Fragment>
  );
};

Form.propTypes = {
  useStyle: func.isRequired,
  fields: arrayOf(shape({}).isRequired),
  onSubmit: func.isRequired,
};

Form.defaultProps = {
  fields: [],
};

export default withStyle(Form);
