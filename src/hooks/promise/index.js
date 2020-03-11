import noop from 'lodash/noop';
import { Machine } from 'xstate';
import { useCallback, useMemo } from 'react';
import { useMachine } from '@xstate/react';

import { FULFILLED, IDLE, PENDING, REJECTED, RESOLVE } from './constants';
import { setData, setError } from './helpers';

export default ({
  then: succeed = noop,
  catch: fail = noop,
  finally: onFinally = noop,
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
          [IDLE]: { on: { [RESOLVE]: PENDING } },
          [PENDING]: {
            invoke: {
              onDone: {
                target: FULFILLED,
                actions: [setData, onDone, onFinally],
              },
              onError: {
                target: REJECTED,
                actions: [setError, onError, onFinally],
              },
              src,
            },
          },
          [FULFILLED]: { on: { [RESOLVE]: PENDING } },
          [REJECTED]: { on: { [RESOLVE]: PENDING } },
        },
        id,
      }),
    [id, src, onDone, onError, onFinally]
  );
  const [{ value: status, context, matches, done }, send] = useMachine(machine);
  const resolve = useCallback((...params) => send(RESOLVE, ...params), [send]);
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
