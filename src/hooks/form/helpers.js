import update from 'immutability-helper';
import { createRef } from 'react';

export const getRefsFrom = fields =>
  fields.reduce(
    (stack, { name }) => update(stack, { [name]: { $set: createRef() } }),
    {}
  );

export const getFormikSettingsFrom = fields =>
  fields.reduce(
    (stack, { value = '', name, validation }) =>
      update(stack, {
        initialValues: { [name]: { $set: value } },
        validationSchema: { [name]: { $set: validation } },
      }),
    { initialValues: {}, validationSchema: {} }
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
