import { object } from 'yup';
import { useMemo } from 'react';
import { useFormik } from 'formik';

import { getFormikSettingsFrom, connectTo } from './helpers';

export default ({ fields, render, onSubmit }) => {
  const { initialValues, validationSchema } = useMemo(
    () => getFormikSettingsFrom({ fields }),
    [fields]
  );
  const { handleSubmit, dirty, ...formik } = useFormik({
    validationSchema: object().shape(validationSchema),
    validateOnChange: false,
    validateOnBlur: false,
    initialValues,
    onSubmit,
  });
  const formatField = useMemo(() => connectTo(formik), [formik]);
  const settings = useMemo(
    () => ({
      fields: fields.map(formatField),
      onSubmit: handleSubmit,
      original: !dirty,
    }),
    [fields, formatField, handleSubmit, dirty]
  );

  return { render, ...settings };
};
