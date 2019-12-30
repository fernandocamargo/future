import update from 'immutability-helper';

export const getFormikSettingsFrom = ({ fields }) =>
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
}) => field => {
  const { name } = field;
  const { [name]: value } = data;
  const { [name]: error } = errors;

  return { ...field, value, onChange, error };
};
