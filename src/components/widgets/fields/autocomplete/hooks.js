import identity from 'lodash/identity';
import noop from 'lodash/noop';
import { createElement, useCallback, useEffect, useRef, useState } from 'react';

import { usePromise } from 'hooks';

import { DELAY } from './constants';

export default ({
  options: initialOptions,
  getOptions = () => Promise.resolve(initialOptions),
  getOptionKeywords = identity,
  getOptionLabel = identity,
  onChange: change,
  render,
  label,
  value,
  error,
  fieldRef,
  disabled,
}) => {
  const timer = useRef(null);
  const [keywords, setKeywords] = useState(getOptionKeywords(value));
  const [options, setOptions] = useState([]);
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
  const clear = useCallback(() => {
    change();
  }, [change]);
  const schedule = useCallback(() => {
    timer.current = window.setTimeout(() => fetch({ keywords }), DELAY);

    return () => {
      timer.current = window.clearTimeout(timer.current);
    };
  }, [fetch, keywords]);

  useEffect(!keywords.trim() ? clear : noop, [keywords]);
  useEffect(keywords ? schedule : noop, [keywords]);

  return {
    autoComplete: true,
    blurOnSelect: true,
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
