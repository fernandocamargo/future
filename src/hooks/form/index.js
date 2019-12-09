import update from 'immutability-helper';
import { useCallback, useMemo } from 'react';
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
  } = useFormik({ initialValues, ...settings });
  const getField = useCallback(
    field => {
      const { name } = field;
      const { [name]: value } = data;

      return { ...field, value, onChange };
    },
    [data, onChange]
  );

  return {
    props: {
      fields: fields.map(getField),
      onSubmit,
    },
    data,
  };
};
