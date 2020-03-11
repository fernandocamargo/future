import noop from 'lodash/noop';
import { Machine } from 'xstate';
import { useCallback, useMemo } from 'react';
import { useMachine } from '@xstate/react';

import { IDLE, PENDING, REJECTED, SUCCESS } from './constants';
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
          [IDLE]: { on: { START: PENDING } },
          [PENDING]: {
            invoke: {
              onDone: { target: SUCCESS, actions: [setData, onDone] },
              onError: { target: REJECTED, actions: [setError, onError] },
              src,
            },
          },
          [SUCCESS]: { entry: 'stop', on: { START: PENDING } },
          [REJECTED]: { entry: 'stop', on: { START: PENDING } },
        },
        id,
      }),
    [id, src, onDone, onError]
  );
  const [{ value: status, context, matches, done }, send] = useMachine(
    machine,
    { actions: { stop } }
  );
  const start = useCallback((...params) => send('START', ...params), [send]);
  const idle = useMemo(() => matches(IDLE), [matches]);
  const pending = useMemo(() => matches(PENDING), [matches]);
  const success = useMemo(() => matches(SUCCESS), [matches]);
  const rejected = useMemo(() => matches(REJECTED), [matches]);

  return {
    ...context,
    start,
    idle,
    pending,
    success,
    rejected,
    status,
    done,
  };
};
