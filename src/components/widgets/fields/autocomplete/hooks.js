import noop from 'lodash/noop';
import { createElement, useCallback, useEffect, useRef, useState } from 'react';

import { usePromise } from 'hooks';

import { DELAY, EMPTY } from './constants';

export default ({ getOptions, getOptionLabel, render, label, fieldRef }) => {
  const timer = useRef(null);
  const [keywords, setKeywords] = useState('');
  const [options, setOptions] = useState(EMPTY);
  const { resolve: fetch } = usePromise({
    promise: getOptions,
    then: setOptions,
  });
  const onChange = useCallback(
    ({ target: { value: next } }) => setKeywords(next),
    [setKeywords]
  );
  const renderInput = useCallback(
    props => createElement(render, { ...props, label, onChange, fieldRef }),
    [render, label, onChange, fieldRef]
  );
  const intercept = useCallback(() => {
    timer.current = window.setTimeout(() => fetch({ keywords }), DELAY);

    return () => {
      timer.current = window.clearTimeout(timer.current);
    };
  }, [fetch, keywords]);

  useEffect(keywords ? intercept : noop, [keywords]);

  return { options, getOptionLabel, renderInput };
};
