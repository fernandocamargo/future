import intersection from 'lodash/intersection';
import { object } from 'yup';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useFormik } from 'formik';

import { getFormikSettingsFrom, connectTo } from './helpers';

const focus = element => {
  element.focus();
  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

export default ({ fields, render, onSubmit }) => {
  const { initialValues, validationSchema, DOM, names } = useMemo(
    () => getFormikSettingsFrom(fields),
    [fields]
  );
  const { current: order } = useRef(names);
  const { current: refs } = useRef(DOM);
  const { dirty, validateForm, submitForm, ...formik } = useFormik({
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
  const analyze = useCallback(
    report => {
      const errors = Object.keys(report);

      return !errors.length ? submitForm() : Promise.reject(errors);
    },
    [submitForm]
  );
  const debug = useCallback(
    errors => {
      const [first] = intersection(order, errors);
      const {
        [first]: { current: field },
      } = refs;

      return focus(field);
    },
    [order, refs]
  );
  const submit = useCallback(
    event => {
      event.preventDefault();

      return validateForm()
        .then(analyze)
        .catch(debug);
    },
    [validateForm, analyze, debug]
  );
  const settings = useMemo(
    () => ({
      fields: fields.map(formatField),
      onSubmit: submit,
      original: !dirty,
    }),
    [fields, formatField, submit, dirty]
  );

  useEffect(() => {
    const [first] = order;
    const {
      [first]: { current: field },
    } = refs;

    return focus(field);
  }, [order, refs]);

  return { render, ...settings };
};
