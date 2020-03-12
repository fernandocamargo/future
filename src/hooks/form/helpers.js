import update from 'immutability-helper';
import { object } from 'yup';
import { createRef } from 'react';

import { focus } from 'helpers/dom';

export const getFormikSettingsFrom = fields => {
  const { validationSchema, ...settings } = fields.reduce(
    (stack, { value = '', name, validation, disabled = false }) => {
      const ref = createRef();

      return update(stack, {
        initialValues: { [name]: { $set: value } },
        DOM: { fields: { [name]: { $set: ref } } },
        names: { $push: [name] },
        ...(!disabled && {
          validationSchema: { [name]: { $set: validation } },
        }),
      });
    },
    {
      DOM: { buttons: { submit: createRef(), reset: createRef() }, fields: {} },
      initialValues: {},
      validationSchema: {},
      names: [],
    }
  );

  return { validationSchema: object().shape(validationSchema), ...settings };
};

export const connectTo = ({
  refs: { fields: refs },
  values: data,
  status = {},
  setFieldValue,
  setFieldError,
  errors,
}) => (stack, field) => {
  const { debugging = false } = status;
  const { name } = field;
  const { [name]: value } = data;
  const { [name]: error } = errors;
  const { [name]: fieldRef } = refs;
  const onChange = next => setFieldValue(name, next, false);
  const props = {
    ...(debugging && { error }),
    ...field,
    value,
    onChange,
    fieldRef,
  };
  const instance = {
    focus() {
      focus(fieldRef.current);

      return instance;
    },
    error(reason) {
      setFieldError(name, reason);

      return instance;
    },
  };

  return update(stack, {
    unordered: { [name]: { $set: instance } },
    ordered: { $push: [props] },
  });
};
