import noop from 'lodash/noop';
import { Machine } from 'xstate';
import { useCallback, useMemo } from 'react';
import { useMachine } from '@xstate/react';

import { FULFILLED, IDLE, PENDING, REJECTED } from './constants';
import { setData, setError } from './helpers';

export default ({
  finally: stop = noop,
  catch: fail = noop,
  then: succeed = noop,
  promise,
  id,
}) => {
  const src = useCallback(
    (_, { type, ...first }, ...rest) => promise(first, ...rest),
    [promise]
  );
  const onDone = useCallback(({ data }) => succeed(data), [succeed]);
  const onError = useCallback(({ error }) => fail(error), [fail]);
  const machine = useMemo(
    () =>
      new Machine({
        initial: IDLE,
        states: {
          [IDLE]: { on: { RESOLVE: PENDING } },
          [PENDING]: {
            invoke: {
              onDone: { target: FULFILLED, actions: [setData, onDone] },
              onError: { target: REJECTED, actions: [setError, onError] },
              src,
            },
          },
          [FULFILLED]: { entry: 'stop', on: { RESOLVE: PENDING } },
          [REJECTED]: { entry: 'stop', on: { RESOLVE: PENDING } },
        },
        id,
      }),
    [id, src, onDone, onError]
  );
  const [{ value: status, context, matches, done }, send] = useMachine(
    machine,
    { actions: { stop } }
  );
  const resolve = useCallback((...params) => send('RESOLVE', ...params), [
    send,
  ]);
  const idle = useMemo(() => matches(IDLE), [matches]);
  const pending = useMemo(() => matches(PENDING), [matches]);
  const fulfilled = useMemo(() => matches(FULFILLED), [matches]);
  const rejected = useMemo(() => matches(REJECTED), [matches]);

  return {
    ...context,
    resolve,
    idle,
    pending,
    fulfilled,
    rejected,
    status,
    done,
  };
};
