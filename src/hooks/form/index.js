import { object } from 'yup';
import { useEffect, useMemo, useRef } from 'react';
import { useFormik } from 'formik';

import { getFormikSettingsFrom, getRefsFrom, connectTo } from './helpers';

export default ({ fields, render, onSubmit }) => {
  const { current: refs } = useRef(getRefsFrom(fields));
  const { initialValues, validationSchema } = useMemo(
    () => getFormikSettingsFrom(fields),
    [fields]
  );
  const { handleSubmit, dirty, ...formik } = useFormik({
    validationSchema: object().shape(validationSchema),
    validateOnChange: false,
    validateOnBlur: false,
    initialValues,
    onSubmit,
  });
  const formatField = useMemo(() => connectTo({ ...formik, refs }), [
    formik,
    refs,
  ]);
  const settings = useMemo(
    () => ({
      fields: fields.map(formatField),
      onSubmit: handleSubmit,
      original: !dirty,
    }),
    [fields, formatField, handleSubmit, dirty]
  );

  useEffect(() => {
    const {
      name: { current: first },
    } = refs;

    first.focus();
    first.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [refs]);

  return { render, ...settings };
};
