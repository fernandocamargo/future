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

      return dirty && !errors.length ? submitForm() : Promise.reject(errors);
    },
    [dirty, submitForm]
  );
  const debug = useCallback(
    errors => {
      const [first] = intersection(order, errors);
      const target = first || 'submit';
      const type = first ? 'fields' : 'buttons';
      const {
        [type]: {
          [target]: { current: element },
        },
      } = refs;

      return focus(element);
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
      foo: 'bar',
      fields: fields.reduce(formatField, EMPTY),
      onReset: reset,
      onSubmit: submit,
      original: !dirty,
      reset,
      refs,
    }),
    [fields, formatField, dirty, reset, submit, refs]
  );

  useLayoutEffect(() => {
    validate();
  }, [validate]);

  return { render, ...settings };
};
