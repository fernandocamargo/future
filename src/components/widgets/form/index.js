import { arrayOf, bool, elementType, func, shape } from 'prop-types';
import update from 'immutability-helper';
import React, { createElement, Fragment, useMemo } from 'react';

import { useI18n } from 'hooks';
import { Prompt } from 'components/routes';

import Container from './container';
import Field from './field';
import Loader from './loader';
import Reset from './reset/index';
import Submit from './submit';
import messages from './messages';
import withStyle from './style';

const Form = ({
  refs: {
    buttons: { reset, submit },
  },
  fields: { ordered: fields },
  useStyle,
  onReset,
  onSubmit,
  original,
  render,
  ...extra
}) => {
  const components = useMemo(
    () => ({
      Form: props => (
        <Container {...props} onReset={onReset} onSubmit={onSubmit} />
      ),
      Reset: props => <Reset buttonRef={reset} {...props} />,
      Submit: props => <Submit buttonRef={submit} {...props} />,
      Loader: props => extra.busy && <Loader {...props} />,
    }),
    [onReset, reset, onSubmit, submit, extra.busy]
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
  onReset: func.isRequired,
  onSubmit: func.isRequired,
  render: elementType.isRequired,
  original: bool,
  refs: shape({
    buttons: shape({}).isRequired,
  }).isRequired,
};

Form.defaultProps = {
  original: false,
};

export default withStyle(Form);
