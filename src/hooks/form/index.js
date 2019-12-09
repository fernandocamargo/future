import update from 'immutability-helper';
import { useMemo } from 'react';
import { useFormik } from 'formik';

const getInitialValuesFrom = fields =>
  fields.reduce(
    (stack, { name, value = '' }) => update(stack, { [name]: { $set: value } }),
    {}
  );

export default useSettings => {
  const { fields, ...settings } = useSettings();
  const initialValues = useMemo(() => getInitialValuesFrom(fields), [fields]);
  const {
    values: data,
    handleChange: onChange,
    handleSubmit: onSubmit,
    errors,
  } = useFormik({
    initialValues,
    validateOnChange: false,
    validateOnBlur: false,
    validate: (value, values) =>
      console.log({ value, values }) || { email: 'Invalid email address' },
    ...settings,
  });

  return {
    props: {
      fields: fields.map(field => {
        const { name } = field;
        const { [name]: value } = data;
        const { [name]: error } = errors;

        return { ...field, value, onChange, error };
      }),
      onSubmit,
    },
    data,
  };
};
