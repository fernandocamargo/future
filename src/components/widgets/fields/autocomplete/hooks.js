import constant from 'lodash/constant';
import noop from 'lodash/noop';
import { createElement, useCallback, useEffect, useRef, useState } from 'react';

import { usePromise } from 'hooks';

import { DELAY, EMPTY } from './constants';

export default ({
  getOptionKeywords = constant(''),
  onChange: change,
  getOptions,
  getOptionLabel,
  render,
  label,
  value,
  error,
  fieldRef,
  disabled,
}) => {
  const timer = useRef(null);
  const [keywords, setKeywords] = useState(getOptionKeywords(value));
  const [options, setOptions] = useState(EMPTY);
  const { resolve: fetch, pending: loading } = usePromise({
    promise: getOptions,
    then: setOptions,
  });
  const onChange = useCallback((_, next) => change(next), [change]);
  const onInputChange = useCallback(
    ({ target: { value: next } }) => setKeywords(next),
    [setKeywords]
  );
  const renderInput = useCallback(
    props =>
      createElement(render, {
        onChange: onInputChange,
        loading,
        label,
        error,
        fieldRef,
        ...props,
      }),
    [render, loading, label, onInputChange, error, fieldRef]
  );
  const intercept = useCallback(() => {
    timer.current = window.setTimeout(() => fetch({ keywords }), DELAY);

    return () => {
      timer.current = window.clearTimeout(timer.current);
    };
  }, [fetch, keywords]);

  useEffect(keywords ? intercept : noop, [keywords]);

  return {
    autoComplete: true,
    clearOnEscape: true,
    getOptionLabel,
    options,
    loading,
    value,
    onChange,
    renderInput,
    disabled,
  };
};
