import intersection from 'lodash/intersection';
import { useCallback, useLayoutEffect, useMemo, useRef } from 'react';
import { useFormik } from 'formik';

import { focus } from 'helpers/dom';

import { getFormikSettingsFrom, connectTo } from './helpers';

const EMPTY = { ordered: [], unordered: {} };

export default ({ fields, render, onSubmit }) => {
  const { initialValues, validationSchema, DOM, names } = useMemo(
    () => getFormikSettingsFrom(fields),
    [fields]
  );
  const { current: order } = useRef(names);
  const { current: refs } = useRef(DOM);
  const {
    resetForm: reset,
    dirty,
    setStatus,
    validateForm,
    submitForm,
    ...formik
  } = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    initialValues,
    validationSchema,
    onSubmit,
  });
  const formatField = useMemo(() => connectTo({ ...formik, refs }), [
    formik,
    refs,
  ]);
  const analyze = useCallback(
    report => {
      const errors = Object.keys(report);

      // return !errors.length ? submitForm() : Promise.reject(errors);
      switch (true) {
        case !errors.length:
          return submitForm();
        default:
          return Promise.reject(errors);
      }
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
  const validate = useCallback(
    () =>
      validateForm()
        .then(analyze)
        .catch(debug),
    [validateForm, analyze, debug]
  );
  const submit = useCallback(
    event => {
      event.preventDefault();
      setStatus({ debugging: true });

      return validate();
    },
    [setStatus, validate]
  );
  const settings = useMemo(
    () => ({
      fields: fields.reduce(formatField, EMPTY),
      onSubmit: submit,
      original: !dirty,
      reset,
    }),
    [fields, formatField, submit, dirty, reset]
  );

  useLayoutEffect(() => {
    validate();
  }, [validate]);

  return { render, ...settings };
};
