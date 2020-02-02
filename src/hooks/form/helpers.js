import update from 'immutability-helper';
import { createRef } from 'react';

export const getFormikSettingsFrom = fields =>
  fields.reduce(
    (stack, { value = '', name, validation }) =>
      update(stack, {
        initialValues: { [name]: { $set: value } },
        validationSchema: { [name]: { $set: validation } },
        ref: { [name]: { $set: createRef() } },
      }),
    { initialValues: {}, validationSchema: {}, ref: {} }
  );

export const connectTo = ({
  values: data,
  handleChange: onChange,
  errors,
  refs,
}) => field => {
  const { name } = field;
  const { [name]: value } = data;
  const { [name]: error } = errors;
  const { [name]: fieldRef } = refs;

  return { ...field, value, onChange, error, fieldRef };
};
