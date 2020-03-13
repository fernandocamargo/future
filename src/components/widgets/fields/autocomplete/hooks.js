import noop from 'lodash/noop';
import { createElement, useCallback, useEffect, useRef, useState } from 'react';

import { usePromise } from 'hooks';

import { DELAY, EMPTY } from './constants';

export default ({
  onChange: change,
  getOptions,
  getOptionLabel,
  render,
  label,
  fieldRef,
}) => {
  const timer = useRef(null);
  const [keywords, setKeywords] = useState('');
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
        fieldRef,
        ...props,
      }),
    [render, loading, label, onInputChange, fieldRef]
  );
  const intercept = useCallback(() => {
    timer.current = window.setTimeout(() => fetch({ keywords }), DELAY);

    return () => {
      timer.current = window.clearTimeout(timer.current);
    };
  }, [fetch, keywords]);

  useEffect(keywords ? intercept : noop, [keywords]);

  return { getOptionLabel, options, loading, onChange, renderInput };
};
