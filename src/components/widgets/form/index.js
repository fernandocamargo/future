import { arrayOf, bool, elementType, func, shape } from 'prop-types';
import update from 'immutability-helper';
import React, { Fragment, useMemo } from 'react';

import { useI18n } from 'hooks';
import { Prompt } from 'components/routes';

import Container from './container';
import Field from './field';
import Fieldset from './fieldset';
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
  render: Render,
  useStyle,
  onReset,
  onSubmit,
  original,
  pending,
  ...extra
}) => {
  const components = useMemo(
    () => ({
      Form: props => (
        <Container {...props} onReset={onReset} onSubmit={onSubmit} />
      ),
      Fieldset: props => <Fieldset disabled={pending} {...props} />,
      Reset: props => <Reset buttonRef={reset} {...props} />,
      Submit: props => <Submit buttonRef={submit} {...props} />,
      Loader: props => pending && <Loader {...props} />,
    }),
    [onReset, reset, onSubmit, submit, pending]
  );
  const elements = useMemo(
    () => ({
      fields: fields.reduce(
        (stack, field) => {
          const { name } = field;
          const element = <Field key={name} {...field} />;

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

  return (
    <Fragment>
      <Prompt message={confirmation} when={!original} />
      <Render
        components={components}
        elements={elements}
        original={original}
        pending={pending}
        {...extra}
        {...style}
      />
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
  pending: bool,
};

Form.defaultProps = {
  original: false,
  pending: false,
};

export default withStyle(Form);
