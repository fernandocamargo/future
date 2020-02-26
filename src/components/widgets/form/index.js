import { arrayOf, bool, elementType, func, shape } from 'prop-types';
import update from 'immutability-helper';
import React, { createElement, Fragment, useMemo } from 'react';

import { useI18n } from 'hooks';
import { Prompt } from 'components/routes';

import Container from './container';
import Field from './field';
import messages from './messages';
import withStyle from './style';

const Form = ({
  fields: { ordered: fields },
  useStyle,
  onSubmit,
  original,
  render,
  ...extra
}) => {
  const components = useMemo(
    () => ({ Form: props => <Container {...props} onSubmit={onSubmit} /> }),
    [onSubmit]
  );
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
    ...extra,
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
  fields: shape({ ordered: arrayOf(shape().isRequired) }).isRequired,
  onSubmit: func.isRequired,
  render: elementType.isRequired,
  original: bool,
};

Form.defaultProps = {
  original: false,
};

export default withStyle(Form);
