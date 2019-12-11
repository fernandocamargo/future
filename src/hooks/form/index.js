import update from 'immutability-helper';
import { object } from 'yup';
import { useMemo } from 'react';
import { useFormik } from 'formik';

const getFrom = fields =>
  fields.reduce(
    (stack, { value = '', name, validation }) =>
      update(stack, {
        initialValues: { [name]: { $set: value } },
        validationSchema: { [name]: { $set: validation } },
      }),
    { initialValues: {}, validationSchema: {} }
  );

export default useSettings => {
  const { fields, ...settings } = useSettings();
  const { initialValues, validationSchema } = useMemo(() => getFrom(fields), [
    fields,
  ]);
  const {
    values: data,
    handleChange: onChange,
    handleSubmit: onSubmit,
    errors,
  } = useFormik({
    validationSchema: object().shape(validationSchema),
    validateOnChange: false,
    validateOnBlur: false,
    initialValues,
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
