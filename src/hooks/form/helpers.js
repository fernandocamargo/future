import update from 'immutability-helper';
import { createRef } from 'react';

export const getFormikSettingsFrom = fields =>
  fields.reduce(
    (stack, { value = '', name, validation }) => {
      const ref = createRef();

      return update(stack, {
        initialValues: { [name]: { $set: value } },
        validationSchema: { [name]: { $set: validation } },
        DOM: { [name]: { $set: ref } },
        names: { $push: [name] },
      });
    },
    { DOM: {}, initialValues: {}, validationSchema: {}, names: [] }
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
