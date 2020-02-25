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
        DOM: { [name]: { $set: ref } },
        names: { $push: [name] },
        ...(!disabled && {
          validationSchema: { [name]: { $set: validation } },
        }),
      });
    },
    { DOM: {}, initialValues: {}, validationSchema: {}, names: [] }
  );

  return { validationSchema: object().shape(validationSchema), ...settings };
};

export const connectTo = ({
  status = {},
  values: data,
  handleChange: onChange,
  errors,
  refs,
  isValidating,
}) => (stack, field) => {
  const { debugging = false } = status;
  const { name } = field;
  const { [name]: value } = data;
  const { [name]: error } = errors;
  const { [name]: fieldRef } = refs;
  const props = {
    ...(debugging && { error }),
    ...field,
    value,
    onChange,
    fieldRef,
  };

  return update(stack, {
    unordered: { [name]: { $set: { focus: () => focus(fieldRef.current) } } },
    ordered: { $push: [props] },
  });
};
